
interface IAdress {
  street: string
  city: string
  zipcode: number
}

export interface IUser {
  id: number
  name: string
  email: string
  address: IAdress
}