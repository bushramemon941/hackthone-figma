import { CardProps } from "../../../types/components";
import Image from "next/image";

const FeatureCard: React.FC<CardProps> = ({ image, heading, para }) => {
  return (
    <div className="p-8 flex border border-transparent flex-col gap-4 bg-transparent hover:bg-[#F9F9F9]  hover:border-[#2A254B] transition-all duration-300 ease-in-out rounded">
      <Image
        src={`/imgs/${image}.png`}
        alt={`${image} Icon Image`}
        width={50}
        height={50}
        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
      />
      <h5 className="font-clash font-normal leading-[22.4px] text-[#2A254B] text-2xl">
        {heading}
      </h5>
      <p className="font-satoshi font-normal leading-[21px] text-[#2A254B]  md:text-lg">
        {para}
      </p>
    </div>
  );
};

export default FeatureCard;