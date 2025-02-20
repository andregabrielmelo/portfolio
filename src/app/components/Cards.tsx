import SimpleCard from "./SimpleCard";

type SimpleCard = {
  name: string;
  src: string;
  bgColor: string;
  className?: string;
  darkInvert?: boolean;
};

export default function Cards({ cards }: { cards: SimpleCard[] }) {
  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      {cards.map((card: SimpleCard) => (
        <SimpleCard
          key={card.name}
          name={card.name}
          src={card.src}
          alt={card.name}
          bgColor={card.bgColor}
          className={
            card.darkInvert ? card.className + " dark:invert" : card.className
          }
        />
      ))}
    </div>
  );
}
