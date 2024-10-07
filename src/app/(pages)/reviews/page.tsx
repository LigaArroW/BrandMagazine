"use client";
// import { Button } from "@/shared/ui/button";
// import { Checkbox } from "@/shared/ui/checkbox";
// import { Form } from "@/shared/ui/form";
// import { Input } from "@/shared/ui/input";
// import { Textarea } from "@/shared/ui/textarea";
import { AboutPayDelivery } from "@/widgets/AboutPayDelivery";
import { Recommendations } from "@/widgets/Recommendations";
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
                    <Recommendations />
                </div>
            </div>
        </div>
    );
}