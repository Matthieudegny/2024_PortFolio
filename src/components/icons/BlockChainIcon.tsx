import Image from "next/image";
import { ImgHTMLAttributes } from "react";

export const BlockchainIcon = ({ size }: { size: number }) => {
  return (
    <Image
      src="/assets/BlockchainIcon.png"
      alt="Blockchain Icon"
      width={size}
      height={size}
    />
  );
};
