export interface User {
  name: string;
  type: UserType;
}

export const enum UserTypes {
  registered = 'R',
  guest = 'G',
}

export type UserType = UserTypes.registered | UserTypes.guest;
