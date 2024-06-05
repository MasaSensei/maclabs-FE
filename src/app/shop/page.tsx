import Cores from "@/components/core";
import Layouts from "@/components/layouts";

const ShopPage = () => {
  const devices = [
    {
      image: "/images/MACBOOK-A1534-2016.webp",
      name: "Macbook",
    },
    {
      image: "/images/image-removebg-preview-6-300x300-1.webp",
      name: "iMac",
    },
    {
      image: "/images/mac-mini-3.webp",
      name: "Mac-Mini",
    },
    {
      image: "/images/mac-pro-tabung.webp",
      name: "Mac-Pro",
    },
  ];

  return (
    <Layouts.Section variant={"secondary"}>
      <Cores.Title title="Shop" content="Our Services" />
      <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {devices.map((device, index) => (
          <Cores.Card
            caseType="blog"
            key={index}
            name={device?.name}
            images={device?.image}
            link={`/shop/${device?.name.toLowerCase()}`}
          />
        ))}
      </div>
    </Layouts.Section>
  );
};

export default ShopPage;
