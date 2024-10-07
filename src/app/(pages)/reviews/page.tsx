"use client";
import RecomendedProducts from "@/shared/components/RecomendedProducts/RecomendedProducts";
import { AboutPayDelivery } from "@/widgets/AboutPayDelivery";
import { ReviewsList } from "@/widgets/ReviewsList";

export default function Reviews() {

   //  const onSubmit = (data: any) => {
   //      console.log(data);
   //  }

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="page__title">Клиенты о нас </div>
                    <ReviewsList />
                    <AboutPayDelivery />
                    <RecomendedProducts isCart />
                </div>
            </div>
        </div>
    );
}