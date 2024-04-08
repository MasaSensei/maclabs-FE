import { BsTools } from "react-icons/bs";
import { RiMacLine } from "react-icons/ri";
import { IoPricetagsOutline, IoDiamondOutline } from "react-icons/io5";

const ServicesList = [
  {
    id: 1,
    icon: <BsTools />,
    name: "Home Visit",
    link: "/home-visit",
  },
  {
    id: 2,
    icon: <RiMacLine />,
    name: "Pickup Delivery",
    link: "/pickup-delivery",
  },
  {
    id: 3,
    icon: <IoPricetagsOutline />,
    name: "Store Visit",
    link: "https://maps.app.goo.gl/p1BFVtKkv1d3oVDLA",
  },
];

export default ServicesList;
