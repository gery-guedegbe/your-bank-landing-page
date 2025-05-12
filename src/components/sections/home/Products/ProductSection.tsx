import bag_icon from "@assets/icons/bag-icon.svg";
import download_trash_icon from "@assets/icons/download-trash-icon.svg";
import loans_icon from "@assets/icons/loans-icon.svg";
import Image from "next/image";

const productItems = [
  {
    id: 1,
    icon: bag_icon,
    title: "Checking Accounts",
    desc: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
  },
  {
    id: 2,
    icon: download_trash_icon,
    title: "Savings Accounts",
    desc: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
  },
  {
    id: 3,
    icon: loans_icon,
    title: "Loans and Mortgages",
    desc: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
  },
];

function ProductSection() {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-16">
      <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
        {/* Texte */}
        <div className="flex flex-col items-center text-center lg:max-w-[60%] lg:items-start lg:text-left">
          <h2 className="text-[28px] font-medium text-white md:text-[38px] xl:text-[48px]">
            Our <span className="text-custom-green-60">Products</span>
          </h2>

          <p className="text-custom-grey-70 mt-2 text-sm font-light md:text-base lg:mt-3 lg:text-lg">
            Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your unique financial needs and
            aspirations
          </p>
        </div>

        {/* Boutons */}
        <div className="bg-custom-grey-11 border-custom-grey-15 flex w-full max-w-md items-center justify-between rounded-full border p-1.5 sm:w-fit lg:p-2">
          <button className="bg-custom-green-60 text-custom-grey-11 hover:bg-custom-green-70 flex-1 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all sm:flex-none sm:px-6 sm:py-3 md:text-base">
            For Individuals
          </button>

          <button className="flex-1 cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-white transition-all sm:flex-none sm:px-6 sm:py-3 md:text-base">
            For Businesses
          </button>
        </div>
      </div>

      <div className="divide-custom-grey-15 grid w-full grid-cols-1 divide-y-[1px] md:grid-cols-2 md:divide-x-[1px] md:divide-y-0 lg:grid-cols-3">
        {productItems.map((item, index) => (
          <div
            key={index}
            className="hover:bg-custom-grey-10/30 flex flex-col items-center px-6 py-8 text-center transition-all duration-300"
          >
            {/* Icône avec espacement contrôlé */}
            <div className="mb-5 flex h-20 w-20 items-center justify-center lg:mb-6 lg:h-24 lg:w-24">
              <Image
                src={item.icon}
                alt={item.title + " icon"}
                className="h-full w-full object-contain"
                width={96}
                height={96}
              />
            </div>

            {/* Titre avec gestion fine des marges */}
            <h3 className="mb-3 text-xl font-medium text-white lg:mb-4 lg:text-2xl">
              {item.title}
            </h3>

            {/* Description avec ligne de longueur optimale */}
            <p className="text-custom-grey-70 mx-auto max-w-[320px] text-base leading-relaxed font-light lg:text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
