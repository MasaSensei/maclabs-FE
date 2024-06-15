import Image from "next/image";

const EmptyState = () => {
  return (
    <div className="flex bg-white rounded-lg flex-col justify-center items-center space-y-4 py-8">
      <Image
        src={"/images/data_not_found.webp"}
        alt="Empty State"
        width={200}
        height={200}
        className="w-1/4"
      />
      <h1 className="text-2xl text-gray-600 font-bold">Data not found</h1>
    </div>
  );
};

export default EmptyState;
