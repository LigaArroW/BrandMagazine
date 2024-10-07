"use client";
// import { Button } from "@/shared/ui/button";
// import { Checkbox } from "@/shared/ui/checkbox";
// import { Form } from "@/shared/ui/form";
// import { Input } from "@/shared/ui/input";
// import { Textarea } from "@/shared/ui/textarea";
import { AboutPayDelivery } from "@/widgets/AboutPayDelivery";
import { Recommendations } from "@/widgets/Recommendations";

export default function Delivery() {
    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="page__title">Оплата и доставка</div>
                    <AboutPayDelivery />
                    <Recommendations />
                </div>
            </div>
        </div>
    );
}