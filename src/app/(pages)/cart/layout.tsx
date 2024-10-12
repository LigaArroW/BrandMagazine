import NavigationCart from "@/shared/components/NavigationCart/NavigationCart";
import PaymentAndDelivery from "@/shared/components/PaymentAndDelivery/PaymentAndDelivery";
import RecomendedProducts from "@/shared/components/RecomendedProducts/RecomendedProducts";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className="container mt-[38px] md:mt-[62px] lg:mt-[75px] xl:mt-[100px]">
            <section className="row ">
                <h2 className="uppercase text-heavyGray font-[700] block text-[22px] mb-[43px] xl:mb-[49px] 2xl:text-[29px] 2xl:mb-[65px]">Корзина</h2>
                <NavigationCart />
                {children}
                <PaymentAndDelivery />
                <RecomendedProducts id={[]} isCart />
            </section>
        </main>
    );
}