import { detailServices } from "@/services/detailServices";

export default async function sitemap() {
  const baseUrl = "https://maclabs.co.id";
  const service = await detailServices();
  const services = service?.data?.map((item: any) => {
    if (item && item.category && item.url) {
      return {
        url: `${baseUrl}/services/${item.category}/${item.url}`,
        lastModified: new Date(),
      };
    } else {
      return [];
    }
  });
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cara-reset-smc`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/home-visit`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pickup-delivery`,
      lastModified: new Date(),
    },
    ...services,
  ];
}
