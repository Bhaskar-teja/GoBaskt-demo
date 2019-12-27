export class loginParams {
    usernameOrEmail: string;
    password: any;
    constructor() {
    }
}
export class registrationParams {
    emailId: string;
    password: any;
    firstName: string;
    lastName: string;
    constructor() {
    }
}

export type Product = {
    title: string;
    description: string;
    price: number;
  };