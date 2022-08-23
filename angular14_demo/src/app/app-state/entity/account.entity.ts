export class Account {
  id?: string;
  isLoggedIn?: boolean;
  firstName?: string;
  lastName?: number;
  username?: string;
  token?: string;

  constructor(id: string, isLoggedIn: boolean, firstName: string, lastName: number, username: string, token: string) {
    this.id = id;
    this.isLoggedIn = isLoggedIn;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.token = token;
  }
}
