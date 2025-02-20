import Image from "next/image";

export default function SimpleCard({
  name,
  src,
  alt,
  bgColor,
  className,
}: {
  name: string;
  src: string;
  alt: string;
  bgColor: string;
  className?: string;
}) {
  return (
    <div className="flex gap-2 items-center p-3 rounded-lg border border-border">
      <figure
        className={`p-2 rounded-md`}
        style={{ backgroundColor: bgColor + "26" }}
      >
        <Image
          src={src}
          alt={alt}
          width={24}
          height={24}
          className={"size-5 " + className}
        />
      </figure>
      <p className="font-semibold">{name}</p>
    </div>
  );
}
