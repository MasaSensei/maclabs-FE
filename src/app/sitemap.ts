import { detailServices } from "@/services/detailServices";
import axios from "axios";

export default async function sitemap() {
  const baseUrl = "https://maclabs.co.id";
  const service = await detailServices();
  const deviceNames = new Set();
  const categoryUrls = new Set();
  const partUrls = new Set();

  const partlistApi = async () => {
    try {
      const res = await axios.get(
        `https://server.maclabs.co.id/api/part_lists`
      );
      return res?.data;
    } catch (error) {
      console.log(error);
    }
  };
  const partlist = await partlistApi();

  const computerServices = service?.data?.map((item: any) => {
    if (item && item.url) {
      return {
        url: `${baseUrl}/computer-services/${item.url}/`,
        lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
      };
    } else {
      return [];
    }
  });
  const shopDevices = partlist?.data?.reduce((acc: any, item: any) => {
    if (item && item.device.name && !deviceNames.has(item.device.name)) {
      deviceNames.add(item.device.name);
      acc.push({
        url: `${baseUrl}/shop/${item.device.name}/`,
        lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
      });
    }
    return acc;
  }, []);

  const shopCategories = partlist?.data?.reduce((acc: any, item: any) => {
    if (item && item.category.slug && !categoryUrls.has(item.category.slug)) {
      categoryUrls.add(item.category.slug);
      acc.push({
        url: `${baseUrl}/shop/${item.device.name}/${item.category.slug}/`,
        lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
      });
    }
    return acc;
  }, []);

  const shopParts = partlist?.data?.reduce((acc: any, item: any) => {
    if (item && item.slug && !partUrls.has(item.slug)) {
      partUrls.add(item.slug);
      acc.push({
        url: `${baseUrl}/shop/${item.device.name}/${item.category.slug}/${item.slug}/`,
        lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
      });
    }
    return acc;
  }, []);

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
    ...shopDevices,
    ...shopCategories,
    ...shopParts,
  ];
}
