import { detailServices, getDetailServicesId } from "@/services/detailServices";
import DetailServices from "./detailServices";

export const generateMetadata = async ({
  params,
}: {
  params: { url: string[] };
}) => {
  const devices: any = {
    macbook: 1,
    imac: 2,
    "mac-mini": 3,
    "mac-pro": 4,
  };
  const { url } = params;

  const category = url[0].toLocaleLowerCase();

  if (category in devices) {
    const devicesId = devices[category];
    const data = await getDetailServicesId(devicesId, url[1]);

    return {
      title: data?.data[0]?.name,
      description: data?.data[0]?.meta_description,
      keywords: data?.data[0]?.meta_keyword,
      icons: [
        {
          rel: "icon",
          type: "image/png",
          url: "/images/cropped-logo-ml.webp",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          url: "/images/cropped-logo-ml.webp",
        },
      ],
    };
  }
};

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
  const { url } = params;
  return <>{url && <DetailServices />}</>;
};

export default ServiceList;
