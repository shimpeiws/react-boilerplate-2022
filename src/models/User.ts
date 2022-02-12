const ADMIN = "Admin";
const MEMBER = "Member";
export type UserRole = ADMIN | MEMBER;

export type User = {
  id: number;
  name: string;
  role: UserRole;
};

export const roleName = (user: User): string => {
  switch (user.role) {
    case ADMIN:
      return "Admin User";
    case MEMBER:
      return "Member";
    default:
      return "";
  }
};
