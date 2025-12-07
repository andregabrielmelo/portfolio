import { cn } from "../lib/utils";
import SimpleCard from "./SimpleCard";

type SimpleCard = {
    name: string;
    description?: string;
    src: string;
    backgroundColor: string;
    className?: string;
    darkInvert?: boolean;
};

export default function Cards({ cards, className }: { cards: SimpleCard[]; className: string }) {
    return (
        <div className={cn(className || "grid gap-4 max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4")}>
            {cards.map((card: SimpleCard) => (
                <SimpleCard
                    key={card.name}
                    name={card.name}
                    src={card.src}
                    alt={card.name}
                    bgColor={card.backgroundColor}
                    title={card.description}
                    className={card.darkInvert ? card.className + " dark:invert" : card.className}
                />
            ))}
        </div>
    );
}
