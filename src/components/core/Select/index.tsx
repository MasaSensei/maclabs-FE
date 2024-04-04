import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  onValueChange?: (e: string) => void;
  defaultValue?: string | any;
  children: React.ReactNode;
  placeholder: string;
}

const MySelect: React.FC<SelectProps> = (props) => {
  const { onValueChange, defaultValue, children, placeholder } = props;
  return (
    <div className="relative mt-2">
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <SelectTrigger className="w-full py-2 px-5 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-indigo-600 focus:ring-0">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{placeholder}</SelectLabel>
            {children}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default MySelect;
