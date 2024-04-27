import { detailServices } from "@/services/detailServices";

export default async function sitemap() {
  const baseUrl = "https://maclabs.co.id";
  const service = await detailServices();
  const computerServices = service?.data?.map((item: any) => {
    if (item && item.url) {
      return {
        url: `${baseUrl}/computer-services/${item.url}/`,
        lastModified: new Date(),
      };
    } else {
      return [];
    }
  });
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cara-reset-smc/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/shortcut-macbook/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/home-visit/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pickup-delivery/`,
      lastModified: new Date(),
    },
    { url: `${baseUrl}/apple-event-wwdc-2023/`, lastModified: new Date() },
    { url: `${baseUrl}/cara-hemat-baterai-macbook/`, lastModified: new Date() },
    {
      url: `${baseUrl}/cara-mengatasi-mac-sering-mati-sendiri/`,
      lastModified: new Date(),
    },
    { url: `${baseUrl}/cara-reset-smc/`, lastModified: new Date() },
    { url: `${baseUrl}/fitur-macos-ventura/`, lastModified: new Date() },
    { url: `${baseUrl}/shortcut-macbook/`, lastModified: new Date() },
    {
      url: `${baseUrl}/tips-melindungi-perangkat-mac-dari-malware/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tips-memakai-macbook-pemula/`,
      lastModified: new Date(),
    },
    { url: `${baseUrl}/tips-merawat-macbook/`, lastModified: new Date() },
    ...computerServices,
  ];
}
