interface IconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  title: string;
}

const IconButton = ({ children, onClick, title }: IconButtonProps) => {
  return (
    <button
      title={title}
      onClick={onClick}
      className="p-[0.4rem] transition bg-transparent text-zinc-800 dark:text-zinc-200 aspect-square rounded-lg dark:hover:bg-zinc-700 hover:bg-zinc-100 active:translate-y-px"
    >
      {children}
    </button>
  );
};

export default IconButton;
