export  interface ICustomer {
    name: string,
    email:string,
    phone: string
}

export type TCustomerUpdate = Partial<ICustomer>;