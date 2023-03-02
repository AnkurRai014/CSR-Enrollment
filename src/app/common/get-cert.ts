export class GetCert {
    constructor(
        public certname: string,
        public template: string,
        public csrcontent: string,
        public email: string
    ){}
}
