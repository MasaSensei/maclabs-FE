import { RiPhoneFindLine } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";

const Steps = [
  {
    id: 1,
    icon: <RiPhoneFindLine size={80} />,
    title: "Beritahu Kami Kerusakan Perangkat Apple Anda",
    description:
      "Ceritakan secara detail tentang kerusakan perangkat Apple Anda kepada team kami.",
  },
  {
    id: 2,
    icon: <IoPricetagsOutline size={80} />,
    title: "Dapatkan Estimasi Harga",
    description:
      "Setelah diagnosa, Anda akan mendapatkan estimasi harga dan jangka waktu pengerjaan untuk perangkat Apple Anda.",
  },
  {
    id: 3,
    icon: <FiTruck size={80} />,
    title: "Team Kurir Kami Akan Datang Ke Tempat Anda",
    description:
      "Jika Anda sudah menyetujui informasi yang diberikan, maka team kami akan segera datang ke tempat Anda.",
  },
];

export default Steps;
