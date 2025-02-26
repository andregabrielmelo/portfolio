import Image from "next/image";

export default function SimpleCard({
    name,
    src,
    alt,
    bgColor,
    className,
    title,
}: {
    name: string;
    src: string;
    alt: string;
    bgColor: string;
    className?: string;
    title?: string;
}) {
    return (
        <div
            className="flex gap-2 items-center p-3 border-b-2 border-border hover:brightness-125 ease-in-out hover:outline-offset-4"
            title={title}
        >
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
            <p className="">{name}</p>
        </div>
    );
}
