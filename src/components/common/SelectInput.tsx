import { ChevronsUpDown } from "lucide-react";

interface SelectInputProps {
  options: string[];
  selected: string;
  label: string;
  id: string;
  onChange: (value: string) => void;
}

const SelectInput = ({ options, selected, label, id, onChange }: SelectInputProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm text-zinc-700 dark:text-zinc-200">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          className="w-full capitalize appearance-none rounded-md border border-zinc-200 bg-white px-3 py-2.5 pr-8 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute w-min h-full top-0 right-0 flex justify-center items-center pr-2 text-zinc-400 dark:text-zinc-500">
          <ChevronsUpDown size={19} strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
