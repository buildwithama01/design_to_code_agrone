import Brand from "./Brand";
import CompanyLinks from "./CompanyLinks";
import LargeBrandText from "./LargeBrandText";
import PopularProducts from "./PopularProducts";
import SocialLinks from "./SocialLinks";
import WhereToBuy from "./WhereToBuy";

function Footer() {
  return (
    <footer className="relative z-0 overflow-hidden bg-agrone-green pt-44 text-white sm:pt-56 lg:pt-64">
      <div className="mx-auto grid w-[calc(100%-1.5rem)] max-w-[1600px] grid-cols-2 gap-x-8 gap-y-12 px-6 pb-12 sm:w-[calc(100%-2rem)] sm:grid-cols-4 sm:gap-8 sm:px-10 sm:pb-16 lg:px-12">
        <div className="col-span-2 sm:col-span-1">
          <Brand />
          <SocialLinks />
          <p className="mt-8 text-sm md:text-md text-white/70">
            © Copyright 2025 Agrone
          </p>
        </div>
        <CompanyLinks />
        <WhereToBuy />
        <PopularProducts />
      </div>
      <LargeBrandText />
    </footer>
  );
}

export default Footer;
