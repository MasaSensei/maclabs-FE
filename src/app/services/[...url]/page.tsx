import { detailServices } from "@/services/detailServices";
import DetailServices from "./detailServices";

export async function generateStaticParams() {
  const data = await detailServices();

  const dataUrl = data?.data?.map((item: any) => {
    if (item && item.category && item.url) {
      return {
        url: [`${item.category}`, `${item.url}`],
      };
    } else {
      return [];
    }
  });

  return dataUrl;
}

const ServiceList = ({ params }: { params: { url: string[] } }) => {
  return <DetailServices />;
};

export default ServiceList;
