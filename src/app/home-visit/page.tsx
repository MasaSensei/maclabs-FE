import Cores from "@/components/core";
import Layouts from "@/components/layouts";
import HomeVisitForm from "./formHomeVisit";

const HomevisitPage = () => {
  return (
    <Layouts.Section variant={"secondary"}>
      <Cores.Title
        title={"Home Visit"}
        content="Isi Form Di Bawah Ini Untuk Reservasi Home Visit"
      />
      <div className="bg-white p-5 rounded-lg">
        <div className="container">
          <HomeVisitForm />
        </div>
      </div>
    </Layouts.Section>
  );
};

export default HomevisitPage;
