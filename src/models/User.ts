const ADMIN = "Admin";
const MEMBER = "Member";

export const UserRole = {
  ADMIN: ADMIN,
  MEMBER: MEMBER,
} as const;
export type UserRole = typeof UserRole[keyof typeof UserRole];

export type User = {
  id: number;
  name: string;
  role: UserRole;
};

export const roleName = (userRole: UserRole): string => {
  switch (userRole) {
    case ADMIN:
      return "Admin User";
    case MEMBER:
      return "Member";
    default:
      return "";
  }
};
