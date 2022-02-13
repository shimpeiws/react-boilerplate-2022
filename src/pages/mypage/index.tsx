import React from "react";
import { useUserState, useUserMutators } from "../../globalStates/user";
import { UserRole, roleName } from "../../models/User";
import { Header } from "../../components/header";

export default function Index() {
  const userState = useUserState();
  const userMutators = useUserMutators();
  const { user } = userState;
  const [name, setName] = React.useState<string | undefined>(undefined);
  const [role, setRole] = React.useState<UserRole | undefined>(undefined);

  React.useEffect(() => {
    setName(user?.name);
    setRole(user?.role);
  }, [setName, setRole, user?.name, user?.role]);

  const handleSubmit = () => {
    const { setUser } = userMutators;
    const updated = {
      ...user,
      name,
      role,
    };
    setUser(updated);
  };

  return (
    <div>
      <Header />
      <div>
        <p>Name</p>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <p>Role</p>
        <select
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option value={UserRole.ADMIN} selected={role === UserRole.ADMIN}>
            {roleName(UserRole.ADMIN)}
          </option>
          <option value={UserRole.MEMBER} selected={role === UserRole.MEMBER}>
            {roleName(UserRole.MEMBER)}
          </option>
        </select>
      </div>
      <br />
      <div>
        <button onClick={handleSubmit}>Update</button>
      </div>
    </div>
  );
}
