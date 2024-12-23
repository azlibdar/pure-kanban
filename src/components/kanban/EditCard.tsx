import { X } from "lucide-react";
import IconButton from "../common/IconButton";
import ModalHeadless from "../modal/ModalHeadless";
import SelectInput from "../common/SelectInput";
import Button from "../common/Button";
import { CardInterface } from "./Card";

interface EditCardProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  card: {
    id: string;
    title: string;
    column: string;
  };
  cards: CardInterface[];
  setCards: (cards: CardInterface[]) => void;
}

interface CardHeaderProps {
  setIsEditing: (value: boolean) => void;
}

interface CardBodyProps {
  card: {
    id: string;
    title: string;
    column: string;
  };
  onTitleChange: (title: string) => void;
  onCardMove: (column: string) => void;
  onDelete: () => void;
}

const EditCard = ({ isEditing, setIsEditing, card, cards, setCards }: EditCardProps) => {
  // Update the title of a card
  const handleChangeTitle = (title: string) => {
    if (!title) return;
    const updatedCard = { ...card, title };
    const updatedCards = cards.map((card) => (card.id === updatedCard.id ? updatedCard : card));
    setCards(updatedCards);
  };

  // Move a card
  const handleMoveCard = (column: string) => {
    const updatedCard = { ...card, column };
    const updatedCards = cards.map((card) => (card.id === updatedCard.id ? updatedCard : card));
    setCards(updatedCards);
  };

  // Delete a card
  const handleDeleteCard = () => {
    const updatedCards = cards.filter((c) => c.id !== card.id);
    setCards(updatedCards);
    setIsEditing(false);
  };

  return (
    <ModalHeadless isOpen={isEditing} onOverlayClick={() => setIsEditing(false)}>
      <CardHeader setIsEditing={setIsEditing} />
      <CardBody card={card} onTitleChange={handleChangeTitle} onDelete={handleDeleteCard} onCardMove={handleMoveCard} />
    </ModalHeadless>
  );
};

const CardBody = ({ card, onTitleChange, onCardMove, onDelete }: CardBodyProps) => {
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      {/* Edit a card */}
      <div>
        <label htmlFor="card-title" className="sr-only">
          Card title
        </label>
        <textarea
          onBlur={(e) => onTitleChange(e.target.value)}
          id="card-title"
          className="w-full h-20 min-h-20 transition p-2.5 outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 bg-transparent sm:text-sm text-zinc-900 dark:text-zinc-100 resize-none border border-zinc-200 dark:border-zinc-700 rounded-md"
        >
          {card.title}
        </textarea>
      </div>
      {/* Move a card */}
      <div>
        <SelectInput
          options={["scheduled", "todo", "doing", "done"]}
          selected={card.column}
          label="Move card to"
          id="move-to"
          onChange={onCardMove}
        />
      </div>
      {/* Seprator */}
      <span className="border-b py-1 border-dashed border-zinc-200 dark:border-zinc-700/50" />
      {/* Actions */}
      <Button onClick={onDelete} variant="destructive" className="w-full mt-1">
        Delete card
      </Button>
    </div>
  );
};

const CardHeader = ({ setIsEditing }: CardHeaderProps) => {
  return (
    <div className="w-full px-4 pr-2 py-2 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
      <h3 className="text-zinc-900 dark:text-zinc-200 text-sm">Edit a card</h3>
      <IconButton onClick={() => setIsEditing(false)} title="Close">
        <X size={18} strokeWidth={1.75} />
      </IconButton>
    </div>
  );
};

export default EditCard;
