export type Product = {
    brand: string,
    category: string,
    description: string
    discountPercentage?: number
    id: number | string,
    images: string[],
    price: number
    rating?: number
    stock: number
    thumbnail?: string,
    title: string
}
