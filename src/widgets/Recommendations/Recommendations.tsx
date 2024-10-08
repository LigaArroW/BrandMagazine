// import { useEffect, useState } from 'react';
// import { CardProduct } from "@/shared/ui/cardProduct"
// // import { recommendationsData } from "./consts"
// import { getRecommendedProducts } from '@/lib/catalog/catalogAction';

// // interface IRecommendedProduct {
// //     article: string
// //     brand: string
// //     color: string
// //     discounted_price: string | null
// //     id: number
// //     main_image: string
// //     name: string
// //     price: string
// // }

// export const Recommendations = () => {
//     const [recommendationsData, setRecommendationsData] = useState<any[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//         async function fetchRecommendedProducts() {
//             setLoading(true);
//             try {
//                 const recommendedData = await getRecommendedProducts([7]); // TODO

//                 if (recommendedData?.recommended_products)
//                     setRecommendationsData(recommendedData.recommended_products);

//             } catch (error) {
//                 console.error('Failed to fetch recommended products:', error);
//             } finally {
//                 setLoading(false);
//             }
//         }

//         fetchRecommendedProducts();
//     }, []);

//     return (
//         <div className="py-[30px] md:py-[41px] xl:py-[55px] 2xl:pt-[75px] border-t border-dashed border-[#c9c9c9]">
//             <div className="mb-[42px] xl:mb-[54px] 2xl:mb-[73px] uppercase text-[20px] md:text-[24px] 2xl:text-[32px] leading-[24px] 2xl:leading-[32px] font-semibold text-[#484f56]">
//                 Вас также может заинтересовать
//             </div>
//             {loading ? (
//                 <div>
//                     Ищем подходящие товары…
//                 </div>
//             ) : recommendationsData.length === 0 ? (
//                 <div>
//                     К сожалению, подходящих товаров не найдено.
//                 </div>
//             ) : (
//                 <div className="grid gap-[10px] grid-cols-2 lg:grid-cols-4 xl:gap-[49px] 2xl:gap-[64px]">
//                     {recommendationsData.map((product, index) => (
//                         <CardProduct
//                             key={index}
//                             title={product.name}
//                             article={product.article}
//                             price={product.price}
//                             fullPrice={product.discounted_price || product.price}
//                             image={product.main_image}
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );

// };
