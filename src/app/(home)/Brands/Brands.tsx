'use client';
import BrandsInline from "./BrandsInline";
import { useHorizontalScroll } from "./useHorizontalScroll";
import "./Brands.scss";

export default function Brands() {
   const {
      scrollContainerRef,
      handleMouseDown,
      handleMouseLeave,
      handleMouseUp,
      handleMouseMove,
   } = useHorizontalScroll();

   return (
      <div className="Brands container">
         <div className="row">
            <h2 className="text-center page__titles">Новое в брендах</h2>

            <div
               className="Brands__swiper-block"
               ref={scrollContainerRef}
               onMouseDown={handleMouseDown}
               onMouseLeave={handleMouseLeave}
               onMouseUp={handleMouseUp}
               onMouseMove={handleMouseMove}
               style={{
                  // cursor: isDragging.current ? 'grabbing' : 'grab',
                  whiteSpace: 'nowrap',
               }}
            >
               <BrandsInline />
            </div>
         </div>
      </div>
   );
}
