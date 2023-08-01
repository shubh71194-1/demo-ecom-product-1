export interface Product{
    id: number,
    name: string,
    costPrice: number,
    salePrice: number,
    offer: number,
    star: number,
    rating: number,
    img: string
}

export interface Cart{
    id: number,
    custmerId: number,
    prodId: number,
    quantity: number,
    date: Date
}