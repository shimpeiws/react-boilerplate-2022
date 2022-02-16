import { useUserState } from "../../globalStates/User";
import { HeaderContents } from "./HeaderContents";

export const Header = (): ReactElement => {
  const userState = useUserState();
  const { user } = userState;

  return (
    <>
      <HeaderContents user={{ user }} />
    </>
  );
};
