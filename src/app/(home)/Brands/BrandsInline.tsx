'use client'
import "./BrandsInline.scss";

const brandsList = [
   'Bottega-Veneta',
   'Dolce-Gabbana',
   'Miu-Miu',
   'Hermes',
   'Diesel',
   'Lacoste',
   'Off-White',
   'Louis-Vuitton',
   'Ballenciaga',
   'Chanel',
   'Gucci',
   'Dior',
   'Burberry',
   'MaxMara',
   'Moschino',
   'Ralph-Lauren'
]

const BrandImage = ({brand}: any) => {

   return (
      <picture
         data-brand={brand}
         title={brand}
      >
         <img
            src={`/brands/${brand}.svg`}
            alt={brand}
         />
      </picture>
   )
}

export default function BrandsInline() {

   return (
      <div
         className="BrandsInline"
      >
         {brandsList.map((brand, index) => (
            <BrandImage {...{brand}} key={index} />
         ))}
      </div>

   );
}
