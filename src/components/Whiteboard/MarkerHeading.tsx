"use client";

interface Props {
  children: string;
}

export default function MarkerHeading({ children }: Props) {
  return (
    <div className="mb-3.5 flex items-center gap-2.5">
      <div className="h-[3px] w-8 rounded-full bg-[#E25543]" />

      <h2
        className="
        font-gochi
        text-xl sm:text-2xl
        font-bold
        text-[#3E3124]
        tracking-wide
      "
      >
        {children}
      </h2>

      <div className="flex-1 border-b-[3px] border-dashed border-[#3E3124]/30" />
    </div>
  );
}
