export class GenerateCsr {
    constructor(
        public commonName: string,
        public organization: string,
        public organizationalunit: string,
        public city: string,
        public state: string,
        public countrycode: string,
        public email: string,
        public keylength: number,
        public template: string
    ){}
}
