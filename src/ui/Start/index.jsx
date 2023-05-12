import Header from "@/components/Header";

import HeroSection from "./HeroSection";
import ProductCategorySection from "./ProductCategorySection";

export default function Start() {
  return (
    <>
      <Header />
      <div className="container">
        <HeroSection />
        <ProductCategorySection />
      </div>
    </>
  );
}
