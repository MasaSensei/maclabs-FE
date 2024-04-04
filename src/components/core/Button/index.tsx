import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center hover:bg-red-700 transition-color duration-300",
  {
    variants: {
      variant: {
        default: "bg-red-500 text-white",
        secondary: "bg-white text-black hover:text-white",
      },
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

const MyButton: React.FC<ButtonProps> = (props) => {
  const { children, className, variant } = props;
  return (
    <Button asChild className={cn(buttonVariants({ className, variant }))}>
      {children}
    </Button>
  );
};

export default MyButton;
