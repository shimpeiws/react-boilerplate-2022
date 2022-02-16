import { roleName } from "../../../models/User";
import { User } from "../../../models/User";
import Link from "next/link";

export type HeaderContentsProps = {
  user: User;
};

export const HeaderContents = (props: HeaderContentsProps) => {
  const { user } = props;

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
