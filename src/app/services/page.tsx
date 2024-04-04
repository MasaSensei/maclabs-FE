"use client";

import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import FetchData from "./fetchData";

const ServicesPage = () => {
  return (
    <Layouts.Section variant={"secondary"}>
      <Cores.Title title="Services" content="Our Services" />

      <FetchData />
    </Layouts.Section>
  );
};

export default ServicesPage;
