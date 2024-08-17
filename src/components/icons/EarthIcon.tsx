import Image from "next/image";

export const EarthIcon = ({ size }: { size: number }) => {
  return (
    <Image
      src="/assets/EarthIcon.png"
      alt="Earth Icon"
      width={size}
      height={size}
    />
  );
};
