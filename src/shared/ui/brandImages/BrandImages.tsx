

import { brand1, brand10, brand11, brand12, brand13, brand14, brand15, brand16, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9 } from '@/shared/components/assets/brands';
import Image, { StaticImageData } from 'next/image';


enum IMany {
    full = 'full',
    half = 'half',
    remainder = 'remainder',
}

interface IBrandImages {
    // images: {
    //     [key: string]: StaticImageData
    // }
    many: keyof typeof IMany
    class?: string
}

export const BrandImages: React.FC<IBrandImages> = ({ many, class: className }) => {
    let quant: string[] = [];
    if (many === IMany.full) {
        quant = Array.from({ length: 16 }, (_, i) => `brand${i + 1}`);
    } else if (many === IMany.half) {
        quant = Array.from({ length: 8 }, (_, i) => `brand${i + 1}`);
    } else if (many === IMany.remainder) {
        quant = Array.from({ length: 8 }, (_, i) => `brand${i + 8}`);
    }

    const images: { [key: string]: StaticImageData } = {
        'brand1': brand1,
        'brand2': brand2,
        'brand3': brand3,
        'brand4': brand4,
        'brand5': brand5,
        'brand6': brand6,
        'brand7': brand7,
        'brand8': brand8,
        'brand9': brand9,
        'brand10': brand10,
        'brand11': brand11,
        'brand12': brand12,
        'brand13': brand13,
        'brand14': brand14,
        'brand15': brand15,
        'brand16': brand16,
    }



    return (
        <div className={className}>
            {quant.map(image => {
                return (
                    <Image
                        key={image}
                        src={images[image]}
                        alt={image}
                        width={200}
                        height={50}
                    // sizes="100vw"
                    // style={{ width: '100%', height: 'auto' }}
                    />
                )
            })}

        </div>
    );
};

