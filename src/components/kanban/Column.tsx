import { useState } from "react";
import clearIndicators from "../../helpers/clearIndicators";
import getDropIndicators from "../../helpers/getDropIndicators";
import getNearestDropIndicator from "../../helpers/getNearestDropIndicator";
import highlightDropIndicators from "../../helpers/highlightDropIndicators";
import Card, { CardInterface } from "./Card";
import DropIndicator from "./DropIndicator";
import Button from "../common/Button";
import { motion } from "framer-motion";

interface ColumnProps {
  title: string;
  bgColor: "gray" | "pink" | "green" | "blue";
  column: string;
  cards: CardInterface[];
  setCards: (cards: CardInterface[]) => void;
}

const bgColors = {
  gray: "bg-zinc-500 dark:bg-zinc-600",
  pink: "bg-purple-500",
  green: "bg-teal-500",
  blue: "bg-blue-500",
};

const Column = ({ title, bgColor, column, cards, setCards }: ColumnProps) => {
  const [isAddingCard, setIsAddingCard] = useState(false);

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("card-title") as string;

    const newCard: CardInterface = {
      id: Date.now().toString(),
      title,
      column,
    };

    setCards([...cards, newCard]);
    setIsAddingCard(false);

    e.currentTarget.reset();
  };

  // Drag start event handler
  const handleDragStart = (e: React.DragEvent<Element>, card: CardInterface) => {
    e.dataTransfer.setData("cardId", card.id);
    console.log(e);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const draggedCardId = e.dataTransfer.getData("cardId");
    clearIndicators(column);

    const dropIndicators = getDropIndicators(column);
    const element = getNearestDropIndicator(e, dropIndicators);

    const beforeCardId = (element as HTMLElement).dataset.before;

    if (beforeCardId === draggedCardId) return;

    const cardsCopy = [...cards];
    const newCards = cardsCopy.filter((card) => card.id !== draggedCardId);
    const draggedCard = cardsCopy.find((card) => card.id === draggedCardId);
    if (draggedCard) {
      draggedCard.column = column;
    }

    const pushToEnd = beforeCardId === "-1";

    if (pushToEnd) {
      newCards.push(draggedCard as CardInterface);
    } else {
      const index = newCards.findIndex((card) => card.id === beforeCardId);
      newCards.splice(index, 0, draggedCard as CardInterface);
    }

    setCards(newCards);
  };

  // Highlight drop indicators
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    clearIndicators(column);
    highlightDropIndicators(e, column);
  };

  const handleDragLeave = () => {
    clearIndicators(column);
  };

  const bgColorClass = bgColors[bgColor];
  // Filter cards based on the column
  const filteredCards = cards.filter((card) => card.column === column);

  return (
    <div className="rounded-xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden flex flex-col w-full h-full max-w-[21.5rem] shrink-0">
      <div className={`${bgColorClass} w-full flex items-baseline justify-between px-4 py-[1.10rem]`}>
        <h2 className="text-white text-xs uppercase tracking-wide font-medium">{title}</h2>
        <span className="text-white font-medium text-xs">({filteredCards.length})</span>
      </div>
      <motion.div
        layout
        onDrop={handleDragEnd}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        className="p-3 overflow-y-auto h-full overflow-x-hidden"
      >
        {filteredCards.map((card) => (
          <Card key={card.id} {...card} handleDragStart={handleDragStart} cards={cards} setCards={setCards} />
        ))}
        <DropIndicator beforeId={-1} column={column} />
        <motion.div layout className="py-1">
          {isAddingCard ? (
            <form onSubmit={handleSubmission}>
              <input
                name="card-title"
                placeholder="Enter a card title"
                type="text"
                onBlur={() => setIsAddingCard(false)}
                autoFocus={true}
                spellCheck={false}
                className="w-full py-2.5 px-3 ring-1 ring-inset sm:text-sm transition outline-none rounded-md focus:ring-2 focus:ring-indigo-500"
              />
            </form>
          ) : (
            <Button onClick={() => setIsAddingCard(true)} variant="secondaryV2" className="w-full">
              Add a card
            </Button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Column;
