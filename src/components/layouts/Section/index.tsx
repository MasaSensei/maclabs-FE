import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  children: React.ReactNode;
  className?: string;
}

const sectionVariants = cva("relative md:py-24 py-16", {
  variants: {
    variant: {
      default: "bg-white",
      secondary: "bg-gray-200",
    },
  },
});

const Section: React.FC<SectionProps> = (props) => {
  const { children, variant, className } = props;
  return (
    <section className={cn(sectionVariants({ variant, className }))}>
      <div className="container mx-auto relative">{children}</div>
    </section>
  );
};

export default Section;
