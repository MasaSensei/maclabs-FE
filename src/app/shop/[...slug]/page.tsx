import StoreSection from "./store";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = params;
  console.log(slug);
  console.log(slug.length);

  if (slug.length === 1) {
    try {
      const response = await fetch(
        `https://server.maclabs.co.id/api/part_lists/${slug[0]}`
      ).then((res) => res.json());
      const data = response?.data?.find(
        (item: any) => item?.device?.name === slug[0]
      );
      return {
        metadataBase: new URL("https://maclabs.co.id/"),
        title: `Sparepart ${data?.device?.name.toUpperCase()} terbaik di Jadetabek | Maclabs.co.id`,
        description: `Jelajahi berbagai macam sparepart untuk ${data?.device?.name.toUpperCase()} di Jadetabek. Kami menyediakan produk berkualitas dengan layanan yang handal, menjadi mitra ideal untuk pemeliharaan dan perbaikan perangkat Anda.`,
        keywords: `Sparepart ${data?.device?.name.toUpperCase()}, Komponen ${data?.device?.name.toUpperCase()}, Service ${data?.device?.name.toUpperCase()}, Maclabs.co.id`,
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
          title: `Sparepart ${data?.device?.name.toUpperCase()} terbaik di Jadetabek - Maclabs.co.id`,
          siteName: "Maclabs Service Mac Devices",
          description: `Jelajahi berbagai macam sparepart untuk ${data?.device?.name.toUpperCase()} di Jadetabek. Kami menyediakan produk berkualitas dengan layanan yang handal, menjadi mitra ideal untuk pemeliharaan dan perbaikan perangkat Anda.`,
          type: "website",
          authors: "Maclabs.co.id",
          publishedTime: data?.created_at,
          modifiedTime: data?.updated_at,
          images: [
            {
              url: `/images/cropped-logo-ml.webp`,
              width: 800,
              height: 600,
            },
          ],
          locale: "id-ID",
          section: data?.device?.name,
          tags: [data?.device?.name],
          url: `https://maclabs.co.id/shop/${slug[0]}`,
        },
        alternates: {
          canonical: `https://maclabs.co.id/shop/${slug[0]}`,
          languages: {
            "id-ID": `https://maclabs.co.id/shop/${slug[0]}`,
          },
        },
      };
    } catch (error) {
      return {
        title: "Title Not Found",
        description: "Layanan",
        icons: [
          {
            rel: "icon",
            type: "image/png",
            url: "/images/MACSPACE PROFIL.png",
          },
          {
            rel: "apple-touch-icon",
            url: "/images/MACSPACE PROFIL.png",
          },
        ],
      };
    }
  } else if (slug.length === 2) {
    try {
      const response = await fetch(
        `https://server.maclabs.co.id/api/part_lists/${slug[0]}/${slug[1]}`
      ).then((res) => res.json());
      const data = response?.data?.find(
        (item: any) =>
          item?.device?.name === slug[0] && item?.category?.slug === slug[1]
      );
      return {
        metadataBase: new URL("https://maclabs.co.id/"),
        title: `Sparepart ${
          data?.category?.name
        } untuk ${data?.device?.name.toUpperCase()} terbaik di Jadetabek | Maclabs.co.id`,
        description: `Cari ${
          data?.category?.name
        } original untuk ${data?.device?.name.toUpperCase()} di Jadetabek? Temukan pilihan berkualitas di Maclabs.co.id. Kami menyediakan produk berkualitas dengan layanan yang handal, menjadi mitra ideal untuk pemeliharaan dan perbaikan perangkat Anda.`,
        keywords: `${
          data?.category?.name
        } ${data?.device?.name.toUpperCase()}, Komponen ${data?.device?.name.toUpperCase()}, Sparepart ${data?.device?.name.toUpperCase()}, Service ${data?.device?.name.toUpperCase()}, Jadetabek, Maclabs.co.id`,
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
          title: `Sparepart ${
            data?.category?.name
          } untuk ${data?.device?.name.toUpperCase()} terbaik di Jadetabek - Maclabs.co.id`,
          description: `Cari ${
            data?.category?.name
          } original untuk ${data?.device?.name.toUpperCase()} di Jadetabek? Temukan pilihan berkualitas di Maclabs.co.id. Kami menyediakan produk berkualitas dengan layanan yang handal, menjadi mitra ideal untuk pemeliharaan dan perbaikan perangkat Anda.`,
          siteName: "Maclabs Service Mac Devices",
          type: "website",
          authors: "Maclabs.co.id",
          publishedTime: data?.category?.created_at,
          modifiedTime: data?.category?.updated_at,
          images: [
            {
              url: `https://server.maclabs.co.id/public/${data?.category?.image}`,
              width: 800,
              height: 600,
            },
          ],
          locale: "id-ID",
          section: data?.device?.name,
          tags: [data?.device?.name, data?.category?.name],
          url: `https://maclabs.co.id/shop/${slug[0]}/${slug[1]}`,
        },
        alternates: {
          canonical: `https://maclabs.co.id/shop/${slug[0]}/${slug[1]}`,
          languages: {
            "id-ID": `https://maclabs.co.id/shop/${slug[0]}/${slug[1]}`,
          },
        },
      };
    } catch (error) {
      return {
        title: "Title Not Found",
        description: "Layanan",
        icons: [
          {
            rel: "icon",
            type: "image/png",
            url: "/images/MACSPACE PROFIL.png",
          },
          {
            rel: "apple-touch-icon",
            url: "/images/MACSPACE PROFIL.png",
          },
        ],
      };
    }
  } else {
    try {
      const response = await fetch(
        `https://server.maclabs.co.id/api/part_lists/${slug[0]}/${slug[1]}/${slug[2]}`
      ).then((res) => res.json());
      const data = response?.data?.find(
        (item: any) =>
          item?.device?.name === slug[0] &&
          item?.category?.slug === slug[1] &&
          item?.slug === slug[2]
      );

      return {
        metadataBase: new URL("https://maclabs.co.id/"),
        title: `${data?.name} | Maclabs.co.id`,
        description: `Butuh sparepart ${data?.name}? Temukan ${data?.category?.name} terbaik di Jakarta, Depok, Tangerang dan Bekasi hanya di Maclabs.co.id. Kualitas terpercaya untuk perangkat Anda.`,
        keywords: `${data?.name}, ${data?.category?.name} ${data?.device?.name} Jakarta, ${data?.category?.name} ${data?.device?.name} Depok, ${data?.category?.name} ${data?.device?.name} Tangerang, ${data?.category?.name} ${data?.device?.name} Bekasi, Sparepart ${data?.device?.name}, Service ${data?.device?.name}, Maclabs.co.id`,
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
          title: `${data?.name} | Maclabs.co.id`,
          description: `Temukan ${data?.name} terbaik di Jakarta, Depok, Tangerang dan Bekasi hanya di Maclabs.co.id. Kualitas terpercaya untuk perangkat Anda.`,
          siteName: "Maclabs Service Mac Devices",
          type: "website",
          authors: "Maclabs.co.id",
          publishedTime: data?.created_at,
          modifiedTime: data?.updated_at,
          images: [
            {
              url: `https://server.maclabs.co.id/public/${data?.image}`,
              width: 800,
              height: 600,
            },
          ],
          locale: "id-ID",
          section: [data?.device?.name, data?.category?.name],
          tags: [data?.device?.name, data?.category?.name, data?.name],
          url: `https://maclabs.co.id/shop/${slug[0]}/${slug[1]}/${slug[2]}`,
        },
        alternates: {
          canonical: `https://maclabs.co.id/shop/${slug[0]}/${slug[1]}/${slug[2]}`,
          languages: {
            "id-ID": `https://maclabs.co.id/shop/${slug[0]}/${slug[1]}/${slug[2]}`,
          },
        },
      };
    } catch (error) {
      return {
        title: "Title Not Found",
        description: "Layanan",
        icons: [
          {
            rel: "icon",
            type: "image/png",
            url: "/images/MACSPACE PROFIL.png",
          },
          {
            rel: "apple-touch-icon",
            url: "/images/MACSPACE PROFIL.png",
          },
        ],
      };
    }
  }
}

export async function generateStaticParams() {
  const data = await fetch("https://server.maclabs.co.id/api/part_lists/").then(
    (res) => res.json()
  );

  return data?.data?.flatMap((item: any) => [
    { slug: [item?.device?.name] },
    { slug: [item?.device?.name, item?.category?.slug] },
    { slug: [item?.device?.name, item?.category?.slug, item?.slug] },
  ]);
}

const ShopPage = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;

  return <>{slug[2] && <StoreSection />}</>;
};

export default ShopPage;
