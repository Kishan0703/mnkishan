"use client";

import Image from "next/image";
import { memo } from "react";

const AvatarMagnet = memo(function AvatarMagnet() {
  const imagePath = "/images/myimage.png";

  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="w-full max-w-[430px] overflow-hidden rounded-[22px] border-[4px] border-[#3E3124] bg-[#F7E8D8] shadow-[0_14px_28px_rgba(0,0,0,.22)]">
        <Image
          sizes="(min-width: 1024px) 560px, 90vw"
          src={imagePath}
          alt="Sketch avatar"
          width={1448}
          height={1086}
          className="pointer-events-none h-auto w-full object-contain select-none"
        />
      </div>
    </div>
  );
});

export default AvatarMagnet;
