'use client'
import { CTABlock } from "@/app/(home)/CTABlock/CTABlock";
import { Advantages } from "@/app/(home)/Advantages/Advantages";
import SiteLabel from "./SiteLabel/SiteLabel";
import PromoBanner from "./PromoBanner/PromoBanner";
import Brands from "./Brands/Brands";
import Header from "@/widgets/Header/header";

export default function Home() {

   return (
      <div className="container">
         <SiteLabel />
         <Header light />
         <PromoBanner />
         <Brands />
         <Advantages />
         <CTABlock />
      </div>

   );
}
