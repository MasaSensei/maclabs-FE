import { Input } from "@/components/ui/input";

interface InputProps {
  type: string;
  placeholder: string;
  onChange?: () => void;
  defaultValue?: string;
  min?: string;
}

const MyInput: React.FC<InputProps> = (props) => {
  const { type, placeholder, onChange, defaultValue, min } = props;
  return (
    <div className="relative mt-2">
      <Input
        className="ps-5 w-full py-2 px-3 h-10 justify-end bg-transparent rounded outline-none border border-gray-200 focus:border-indigo-600 focus:ring-0"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        min={min}
      />
    </div>
  );
};

export default MyInput;
