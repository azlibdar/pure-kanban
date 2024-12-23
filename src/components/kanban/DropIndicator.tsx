interface DropIndicatorProps {
  beforeId: string | -1;
  column: string;
}

const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return <div data-before={beforeId} data-column={column} className="w-full h-[0.25rem] bg-indigo-500 opacity-0" />;
};

export default DropIndicator;
