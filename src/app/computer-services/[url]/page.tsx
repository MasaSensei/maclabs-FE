import {
  detailServices,
  getDetailServicesByUrl,
} from "@/services/detailServices";
import DetailServices from "./detailServices";

export const generateMetadata = async ({
  params,
}: {
  params: { url: string };
}) => {
  const { url } = params;

  const data = await getDetailServicesByUrl(url);

  return {
    metadataBase: new URL("https://maclabs.co.id/"),
    title: `${data?.data[0]?.name} - Maclabs.co.id`,
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
    openGraph: {
      title: data?.data[0]?.name,
      images: [`/images/services/${data?.data[0]?.image}`],
      description: data?.data[0]?.meta_description,
      url: `https://maclabs.co.id/computer-services/${url}`,
    },
    alternates: {
      canonical: `https://maclabs.co.id/computer-services/${url}`,
      languages: {
        "en-US": `https://maclabs.co.id/computer-services/${url}`,
      },
    },
  };
};

export async function generateStaticParams() {
  const data = await detailServices();

  const dataUrl = data?.data?.map((item: any) => {
    if (item && item.url) {
      return {
        url: item.url,
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