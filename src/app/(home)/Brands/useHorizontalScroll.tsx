import { useRef } from "react";

export function useHorizontalScroll() {
   const scrollContainerRef = useRef<HTMLDivElement>(null);
   const isDragging = useRef(false);
   const startX = useRef(0);
   const scrollLeft = useRef(0);

   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (scrollContainerRef.current) {
         isDragging.current = true;
         startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
         scrollLeft.current = scrollContainerRef.current.scrollLeft;
      }
   };

   const handleMouseLeave = () => {
      isDragging.current = false;
   };

   const handleMouseUp = () => {
      isDragging.current = false;
   };

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging.current || !scrollContainerRef.current) return;

      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = x - startX.current;
      scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
   };

   return {
      scrollContainerRef,
      handleMouseDown,
      handleMouseLeave,
      handleMouseUp,
      handleMouseMove,
   };
}
