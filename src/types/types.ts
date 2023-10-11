interface IProduct {
    name: string,
    code: string,
    price: number,
    sales: number,
    stock: number,
    favorite?: boolean
}

interface IPaginate {
    products: IProduct[],
    page: number,
    pageSize: number,
    onPageChange?: (value: number) => {} | void
}