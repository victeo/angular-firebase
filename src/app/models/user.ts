export class User {
    toJSON: any;
    constructor(
        public uid: string,
        public name: string,
        public birthday: Date,
        public email: string,
        public password: string,
        public country: string,
        public state: string,
        public city: string,
        public roles: string[],
        public spiritCenter: string,
        public whatsapp: string,
      ) {}
}