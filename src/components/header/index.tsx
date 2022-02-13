import { useUserState } from "../../globalStates/User";
import { roleName } from "../../models/User";
import Link from "next/link";

export const Header = (): ReactElement => {
  const userState = useUserState();
  const { user } = userState;

  return (
    <>
      <div>
        <Link href="/">TOP</Link>
      </div>
      {user && (
        <p>
          {user.name} | {roleName(user.role)}
        </p>
      )}
    </>
  );
};
