export interface IProduct {
    id: number,
    name: string,
    article: string,
    brand: string,
    price: string
    discounted_price: string | null
    main_image: string
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
    size: {
        id: number
        name: string
    }
    quantity: number
}

export interface IFullProduct extends Omit<IProduct, 'id'> {
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

