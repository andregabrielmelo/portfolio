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
            className="flex gap-2 items-center p-3 max-w-64 border-b-2 border-border hover:border-white hover:brightness-80 dark:hover:brightness-120"
            title={title}
        >
            <figure
                className={`p-2 rounded-md shrink-0`}
                style={{ background: bgColor }}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={24}
                    height={24}
                    className={"size-5 " + className}
                />
            </figure>
            <p>{name}</p>
        </div>
    );
}
