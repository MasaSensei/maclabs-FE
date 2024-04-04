import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Cores from "..";
import Link from "next/link";

interface CardProps {
  images?: string;
  icon?: React.ReactNode;
  name: string;
  content: string;
  link?: string;
  caseType: "blog" | "default";
}

const MyCard: React.FC<CardProps> = (props) => {
  const { images, name, content, link, caseType, icon } = props;
  switch (caseType) {
    case "blog":
      return (
        <Card className="max-w-full">
          <CardHeader>
            <Image
              src={images || "/images/ML-FOTO-05.webp"}
              alt={name}
              width={200}
              height={200}
              className="w-full h-56 object-cover rounded-lg"
            />
            <CardTitle className="pt-4 text-red-500 uppercase font-bold text-2xl">
              {name}
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <p className="max-h-56 overflow-y-hidden">{content}</p>
          </CardContent>
          <CardFooter>
            <Cores.Button variant={"default"} className="w-full">
              <Link href={link || "/"} target="_blank">
                Read More
              </Link>
            </Cores.Button>
          </CardFooter>
        </Card>
      );

    default:
      return (
        <Card className="max-w-full hover:scale-105 transition-all duration-500 hover:shadow-2xl group">
          {link ? (
            <Link
              className="flex flex-col items-center justify-center"
              href={link}
              target="_blank"
            >
              <CardHeader className="flex flex-col items-center justify-center">
                {icon}
                <CardTitle className="pt-4 text-red-500 uppercase font-bold text-2xl">
                  {name}
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-hidden">
                <p className="max-h-56 overflow-y-hidden">{content}</p>
              </CardContent>
            </Link>
          ) : (
            <>
              <CardHeader className="flex flex-col items-center justify-center">
                <span className="lg:text-5xl text-2xl text-red-500 group-hover:text-red-700 transition-color duration-300">
                  {icon}
                </span>
                <CardTitle className="pt-4 text-red-500 group-hover:text-red-700 transition-color duration-300 uppercase font-bold text-2xl">
                  {name}
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-hidden text-center">
                <p className="max-h-56 overflow-y-hidden">{content}</p>
              </CardContent>
            </>
          )}
        </Card>
      );
  }
};

export default MyCard;
