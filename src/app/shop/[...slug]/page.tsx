import StoreSection from "./store";

export async function generateStaticParams() {
  const data = await fetch("https://server.maclabs.co.id/api/part_lists/").then(
    (res) => res.json()
  );

  return data?.data?.flatMap((item: any) => [
    {
      slug: [item?.device?.name],
    },
    {
      slug: [item?.device?.name, item?.category?.slug],
    },
    {
      slug: [item?.device?.name, item?.category?.slug, item?.slug],
    },
  ]);
}

const ShopPage = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  console.log(slug[2]);
  return <>{slug[2] && <StoreSection />}</>;
};

export default ShopPage;
