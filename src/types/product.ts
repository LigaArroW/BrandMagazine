export interface IProduct {
    id: number,
    name: string,
    article: string,
    brand: string,
    price: string
    main_image: string
    discounted_price: string | null
}

export interface IResponseProducts {
    count: number
    next: string
    previous: string
    results: IProduct[]
    max_product_price?: number
    min_product_price?: number
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
    other_images: IImage[]
    description: string
}

export interface ISubCategory {
    Сумки: number,
    Аксессуары: number
}


export interface ICategory {
    Мужское: ISubCategory,
    Женское: ISubCategory
}

