import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { useCallback } from "react";
import { User } from "../models/User";

type UserState = {
  user: User | undefined;
  language: Languages;
};

const Languages = {
  JAPANESE: "japanese",
  ENGLISGH: "english",
} as const;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Languages = typeof Languages[keyof typeof Languages];

const userState = atom<UserState>({
  key: "user",
  default: {
    user: undefined,
    language: Languages.ENGLISGH,
  },
});

export const useUserState = () => {
  return useRecoilValue(userState);
};

export const useUserMutators = () => {
  const setState = useSetRecoilState(userState);

  const setUser = useCallback(
    (user: User) =>
      setState((previousState: UserState) => {
        return {
          ...previousState,
          user,
        };
      }),
    [setState]
  );

  const setLanguage = useCallback(
    (language: Language) =>
      setState((previousState: UserState) => {
        return {
          ...previousState,
          language,
        };
      }),
    [setState]
  );

  return { setUser, setLanguage };
};
