export interface IProduct {
    id: number,
    name: string,
    article: string,
    brand: string,
    price: string
    main_image: string
}

export interface IResponseProducts {
    count: number
    next: string
    previous: string
    results: IProduct[]
}

interface IImage {
    image: string
}

interface ISize {
    size: string
    quantity: number
}

export interface IFullProduct extends Omit<IProduct, 'id' | 'article'> {
    color: string
    sizes: ISize[]
    main_image: string
    other_images: IImage[]
}