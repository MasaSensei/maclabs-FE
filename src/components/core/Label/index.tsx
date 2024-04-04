import { Label } from "@/components/ui/label";

interface LabelProps {
  children: React.ReactNode;
  name: string;
}

const MyLabel: React.FC<LabelProps> = (props) => {
  const { children, name } = props;
  return (
    <Label htmlFor={name} className="font-semibold">
      {children}
    </Label>
  );
};

export default MyLabel;
