import { Textarea } from "@/components/ui/textarea";

interface TextAreaProps {
  placeholder: string;
  onChange?: any;
  defaultValue?: string;
}

const MyTextArea: React.FC<TextAreaProps> = (props) => {
  const { placeholder, onChange, defaultValue } = props;
  return (
    <div className="relative mt-2 w-full">
      <Textarea
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        className="px-5"
      />
    </div>
  );
};

export default MyTextArea;
