"use client";
import RecomendedProducts from "@/shared/components/RecomendedProducts/RecomendedProducts";
import { AboutPayDelivery } from "@/widgets/AboutPayDelivery";

export default function Delivery() {
    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="page__title">Оплата и доставка</div>
                    <AboutPayDelivery />
                    <RecomendedProducts isCart />
                </div>
            </div>
        </div>
    );
}