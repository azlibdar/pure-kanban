import { useEffect, useState } from "react";
import Column from "./Column";
import { boardInitialData } from "../../constants";
import { CardInterface } from "./Card";

const Board = () => {
  const [cards, setCards] = useState<CardInterface[]>(() => {
    const storedCards = localStorage.getItem("kanban-board");

    if (storedCards) {
      return JSON.parse(storedCards);
    }

    return boardInitialData;
  });

  useEffect(() => {
    localStorage.setItem("kanban-board", JSON.stringify(cards));
  }, [cards]);

  return (
    <main className="w-full flex-1 sm:pb-4 overflow-hidden">
      <div className="w-full h-full py-6 sm:py-12 px-6 md:px-0 max-w-7xl mx-auto flex gap-4 overflow-x-scroll">
        <Column title="Scheduled" bgColor="gray" column="scheduled" cards={cards} setCards={setCards} />
        <Column title="To-Do" bgColor="blue" column="todo" cards={cards} setCards={setCards} />
        <Column title="Doing" bgColor="pink" column="doing" cards={cards} setCards={setCards} />
        <Column title="Done" bgColor="green" column="done" cards={cards} setCards={setCards} />
      </div>
    </main>
  );
};

export default Board;
