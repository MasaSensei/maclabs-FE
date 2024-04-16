import { BsTools } from "react-icons/bs";
import { RiMacLine } from "react-icons/ri";
import { IoPricetagsOutline, IoDiamondOutline } from "react-icons/io5";
import { GiSolderingIron } from "react-icons/gi";
import { MdMoneyOffCsred } from "react-icons/md";

const BenefitLists = [
  {
    id: 1,
    icon: <BsTools />,
    name: "Replacement Part Mac",
    content:
      "Menerima pergantian segala jenis part perangkat Mac. Pengerjaan dapat ditunggu. Bergaransi dan berkualitas",
  },
  {
    id: 2,
    icon: <RiMacLine />,
    name: "Repair Logicboard Expert",
    content:
      "Maclabs.co.id menerima perbaikan perangkat pada logicboard Macbook, iMac, Mac Mini, dan Mac Pro dengan segala jenis kerusakan. Berkualitas dan bergaransi hingga 90 Hari",
  },
  {
    id: 3,
    icon: <IoPricetagsOutline />,
    name: "Menjual Perangkat Baru",
    content:
      "Maclabs.co.id juga menjual perangkat baru dengan kualitas terbaik dan bergaransi. Juga menerima Macbook yang akan dihargai sesuai perangkat tersebut",
  },
  {
    id: 4,
    icon: <GiSolderingIron />,
    name: "Teknisi Profesional",
    content:
      "Maclabs.co.id memiliki teknisi-teknisi yang sudah berpengalaman dengan perangkat Apple sehingga Anda tidak perlu khawatir atas perangkat yang diberikan",
  },
  {
    id: 5,
    icon: <MdMoneyOffCsred />,
    name: "Free Check Up",
    content:
      "Maclabs.co.id memberikan pelayanan yang memuaskan. Para pengguna dapat konsultasi ke Admin dan bisa melakukan pengecekan secara langsung oleh teknisi secara gratis",
  },
  {
    id: 6,
    icon: <IoDiamondOutline />,
    name: "Uji Coba Kualitas",
    content:
      "Maclabs.co.id selalu melakukan Quality Control terhadap perangkat yang sudah selesai. Sehingga perangkat Anda dapat digunakan kembali secara normal!",
  },
];

export default BenefitLists;
