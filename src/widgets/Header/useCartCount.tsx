import { useMainContext } from "@/shared/components/Contex/MainProvider"

export const useCartCount = () => {
   const { cart } = useMainContext();
   const cartCount = cart && cart?.length ? cart.length : 0;
   return {...{cartCount}}
}