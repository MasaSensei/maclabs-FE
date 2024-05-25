import Layouts from "@/components/layouts";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maclabs.co.id/"),
  manifest: "https://maclabs.co.id/manifest.webmanifest",
  title: "Panduan Pemula Menggunakan MacBook - Maclabs.co.id",
  description:
    "Temukan tips memakai MacBook untuk pemula di Jakarta, Depok, Tangerang, dan Bekasi. Pelajari panduan lengkap untuk memaksimalkan penggunaan MacBook Anda dengan mudah dan efektif. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
  keywords:
    "tips memakai macbook untuk pemula, panduan pemula macbook, cara menggunakan macbook, tips macbook untuk pemula, belajar macbook, pemula macbook, jakarta, depok, tangerang, bekasi, maclabs.co.id",
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
    title: "Panduan Pemula Menggunakan MacBook  - Maclabs.co.id",
    type: "article",
    siteName: "Maclabs Service Mac Devices",
    publishedTime: `${new Date().toISOString()}`,
    authors: "MacLabs.co.id",
    description:
      "Temukan tips memakai MacBook untuk pemula di Jakarta, Depok, Tangerang, dan Bekasi. Pelajari panduan lengkap untuk memaksimalkan penggunaan MacBook Anda dengan mudah dan efektif. Kunjungi Maclabs.co.id untuk informasi lebih lanjut.",
    url: "https://maclabs.co.id/tips-memakai-macbook-pemula/",
    images: [
      {
        url: "https://maclabs.co.id/images/cropped-logo-ml.webp",
        width: 1200,
        height: 630,
        alt: "Maclabs",
      },
    ],
    section: "MacBook",
    locale: "id-ID",
    tags: ["Macbook", "Apple Device", "Macbook Pro", "Macbook Air", "Pemula"],
  },
  alternates: {
    canonical: `https://maclabs.co.id/tips-memakai-macbook-pemula/`,
    languages: {
      "id-ID": "https://maclabs.co.id/tips-memakai-macbook-pemula/",
    },
  },
};

const TipsMemakaiMacbookPemulaPage = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Panduan Pemula Menggunakan MacBook - Maclabs.co.id",
    description:
      "Anda kebingungan memakai MacBook? Maclabs.id akan memberikan tips untuk memakai MacBook untuk pemula, menengah maupun mahir. Berikut tipsnya.",
    image: "https://maclabs.co.id/images/cropped-logo-ml.webp",
    datePublished: `${new Date().toISOString()}`,
    dateModified: `${new Date().toISOString()}`,
    author: {
      "@type": "Organization",
      name: "Maclabs",
      url: "https://maclabs.co.id/",
      logo: {
        "@type": "ImageObject",
        url: "https://maclabs.co.id/images/cropped-logo-ml.webp",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://maclabs.co.id/tips-memakai-macbook-pemula/",
      },
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <Layouts.Section variant={"secondary"}>
        <div className="relative">
          <div className="grid lg:grid-cols-5 lg:gap-5 gap-8">
            <div className="mx-auto w-full lg:col-span-1 col-span-2 order-2 lg:order-1">
              <div className="w-full bg-white mb-5 rounded-lg shadow-lg border mt-5">
                <div className="py-8 px-6">
                  <div className="mt-0 mb-5 relative flex gap-2 lg:justify-between items-center">
                    <span className="text-red-600 lg:text-2xl">
                      <FaPhoneAlt />
                    </span>
                    <div className="uppercase">
                      <h6 className="text-lg font-bold">Contact Phone</h6>
                      <p className="text-sm text-slate-500">+62 818 850 509</p>
                    </div>
                  </div>
                  <div className="mt-0 mb-5 relative flex gap-2 lg:justify-between items-center">
                    <span className="text-red-600 lg:text-2xl">
                      <FaMapMarkerAlt />
                    </span>
                    <div className="uppercase">
                      <h6 className="text-lg font-bold">Office Address</h6>
                      <p className="text-sm text-slate-500">
                        Senayan Trade Center (STC) Lt.1 No. 111-112-114 Jalan
                        Asia Afrika Jakarta Pusat
                      </p>
                    </div>
                  </div>
                  <div className="mt-0 mb-5 relative flex gap-2 lg:justify-between items-center">
                    <span className="text-red-600 lg:text-2xl">
                      <FaClock />
                    </span>
                    <div className="uppercase">
                      <h6 className="text-lg font-bold">OFFICE HOURS</h6>
                      <p className="text-sm text-slate-500">
                        11:00-19:00 Wib. Senin-Sabtu (Tanggal merah libur).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full lg:col-span-4 col-span-2 order-1 lg:order-2">
              <div className="text-sm max-w-full">
                <article className="mb-1.5 p-6 rounded-lg bg-white shadow">
                  <h1 className="text-2xl text-center uppercase font-extrabold mb-2">
                    Panduan Pemula Menggunakan MacBook
                  </h1>
                  <div className="w-full flex justify-center my-3">
                    <Image
                      src="/images/post-img-02-2.webp"
                      width={500}
                      height={300}
                      alt="tips-merawat-macbook"
                      className="w-full"
                    />
                  </div>
                  <div className="text-lg pt-3 text-slate-800">
                    <p className="my-5">
                      Tips memakai MacBook sangat beragam sekali, mulai dari
                      tips untuk membeli MacBook hingga cara merawat MacBook
                      agar tidak mudah rusak. Segala perangkat Apple memang
                      memiliki desain yang apik dan sistem yang canggih, tidak
                      heran jika banyak pengguna dari Windows berpindah pada
                      MacBook. Akan tetapi saat beralih ke MacBook, pengguna
                      akan kesulitan dengan fitur fitur yang berbeda dikarenakan
                      sudah terbiasa oleh Windows. Oleh karena itu,
                      Maclabs.co.id ingin memberikan tips memakai MacBook untuk
                      Pemula, Menengah maupun mahir.
                    </p>
                    <h3 className="font-bold text-xl my-5">
                      Manajemen Desktop dan Aplikasi
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>
                        <span className="font-bold">
                          Active Spotlight for Searching
                        </span>{" "}
                        Untuk menampilkan pencarian praktis yang memungkinkan
                        Anda menemukan file di Mac Anda, cukup gunakan Command +
                        Space.
                      </li>
                      <li>
                        <span className="font-bold">Swap Between Apps</span>{" "}
                        Untuk beralih di antara aplikasi yang terbuka, tekan
                        Command + Tab. Terus tahan tombol Command lalu tekan Tab
                        untuk menelusuri aplikasi yang terbuka. Lepaskan saat
                        aplikasi yang Anda inginkan disorot.
                      </li>
                      <li>
                        <span className="font-bold">
                          Close Apps From App Swicther
                        </span>{" "}
                        Saat Anda berada dalam tampilan Command + Tab, tekan
                        tombol Q dengan perintah ditahan untuk menutup aplikasi
                        yang terbuka.
                      </li>
                      <li>
                        <span className="font-bold">Hot Corners</span> Anda
                        dapat mengatur tugas yang akan terjadi saat mouse Anda
                        melayang di sudut tertentu, seperti meluncurkan Mission
                        Control, menampilkan desktop, dan banyak lagi. Atur di
                        System Preferences, Mission Control, Hot Corners.
                      </li>
                      <li>
                        <span className="font-bold">Advanced Hot Corners</span>{" "}
                        Jika anda tidak sengaja mengaktifkan fitur, tahan tombol
                        Opsi saat menyiapkan Pojok Panas. Dari sana, Hot Corner
                        tidak akan aktif kecuali Anda menahan tombol Option.
                      </li>
                      <li>
                        <span className="font-bold">Hide a Window</span> Untuk
                        menyembunyikan jendela di desktop dengan cepat, cukup
                        tekan Command + H.
                      </li>
                      <li>
                        <span className="font-bold">Hide All Windows</span> Anda
                        dapat menyembunyikan semua jendela kecuali jendela untuk
                        aplikasi yang sedang Anda gunakan dengan menekan Option
                        + Command + H.
                      </li>
                      <li>
                        <span className="font-bold">
                          Cycle Between App Windows
                        </span>{" "}
                        Anda dapat menukar antara jendela yang terbuka
                        menggunakan Command + tombol Tilde (~).
                      </li>
                      <li>
                        <span className="font-bold">
                          Switch Between Multiple Desktops
                        </span>{" "}
                        Jika Anda menggunakan beberapa desktop, Anda dapat
                        bertukar di antara mereka dengan cepat dengan menekan
                        tombol Control lalu panah kiri atau kanan.
                      </li>
                    </ul>
                    <h3 className="font-bold text-xl my-5">Mengelola File</h3>
                    <ul className="list-disc list-inside">
                      <li>
                        <span className="font-bold">Quickly Open Folders</span>{" "}
                        Untuk membuka folder di Finder atau di desktop Anda,
                        tahan Command dan tekan tombol panah bawah. Untuk
                        kembali, cukup tahan Command dan tekan tombol panah
                        atas.
                      </li>
                      <li>
                        <span className="font-bold">Clean Up Your Desktop</span>{" "}
                        Desktop berantakan?cukup klik kanan dan pilih “Stacks”
                        agar Mac Anda secara otomatis mengatur semuanya
                        berdasarkan jenis file.
                      </li>
                      <li>
                        <span className="font-bold">Instant File Deletion</span>{" "}
                        Jika Anda ingin menghapus file dan ingin melewati Tong
                        Sampah di Mac yang menyimpan file sebelum menghapusnya,
                        cukup pilih file dan tekan Option + Command + Delete
                        secara bersamaan.
                      </li>
                      <li>
                        <span className="font-bold">
                          Create an Auto Duplicating File
                        </span>{" "}
                        Jika Anda ingin membuat file duplikat saat mengklik file
                        tertentu, cukup klik kanan, pilih “Dapatkan Info”. lalu
                        centang kotak Stationary Pad.
                      </li>
                    </ul>
                    <h3 className="font-bold text-xl my-5">Screenshoot</h3>
                    <ul className="list-disc list-inside">
                      <li>
                        <span className="font-bold">Video Screenshots</span>{" "}
                        Shift + Command + 3 mengambil tangkapan penuh layar.
                        Shift + Command + 4 memungkinkan Anda memilih area layar
                        untuk tangkapan layar, tetapi Shift + Command + 5 dapat
                        menampilkan antarmuka yang memungkinkan Anda merekam
                        layar Anda atau sebagian layar Anda.
                      </li>
                      <li>
                        <span className="font-bold">Cleaner Screenshots</span>{" "}
                        Saat menggunakan Shift + Command + 4 untuk memilih area
                        layar, jika Anda menekan bilah spasi, ikon berubah
                        menjadi kamera. Dari sana, Anda dapat mengeklik jendela
                        mana pun yang terbuka untuk mendapatkan tangkapan layar
                        hanya dari jendela atau elemen antarmuka itu seperti dok
                        atau bilah menu.
                      </li>
                    </ul>
                    <h3 className="font-bold text-xl my-5">
                      Force Touch Trackpad
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>
                        <span className="font-bold">Quick Looks</span> Jika anda
                        mengklik dan menahan sesuatu seperti tautan situs web
                        atau video YouTube, Anda dapat melihat sedikit pratinjau
                        konten untuk melihat apa adanya tanpa harus meninggalkan
                        halaman anda saat itu.
                      </li>
                      <li>
                        <span className="font-bold">Dictionary</span> Jika Anda
                        melihat kata yang tidak Anda kenal, sorot kata tersebut
                        dan tekan dengan Force Touch Trackpad untuk mendapatkan
                        definisi kamus.
                      </li>
                      <li>
                        <span className="font-bold">
                          Rename Folders and Files
                        </span>{" "}
                        Jika Anda Memaksa Sentuh pada folder atau nama file,
                        Anda dapat dengan cepat mengganti namanya. Force Touch
                        pada folder atau ikon file dan Anda dapat melihat
                        pratinjau file.
                      </li>
                    </ul>
                    <h3 className="font-bold text-xl my-5">Trik Keyboard</h3>
                    <ul className="list-disc list-inside">
                      <li>
                        <span className="font-bold">
                          Alternate Mouse Control
                        </span>{" "}
                        Ada opsi untuk mengontrol kursor mouse Anda dengan
                        keyboard Anda, dan itu dapat diaktifkan di
                        Aksesibilitas. Buka pengaturan Aksesibilitas dan di
                        bawah Kontrol Penunjuk, pilih tab Metode Kontrol
                        Alternatif. Dari sana, aktifkan Enable Mouse Keys dan
                        pilih toggle untuk mengaktifkan Mouse Keys saat Option
                        ditekan lima kali. Saat Anda menekan Option x5, Tombol
                        Mouse menyala dan Anda dapat menggunakan keyboard untuk
                        menggerakkan mouse.
                      </li>
                      <li>
                        <span className="font-bold">
                          Quick Access to Function Key Settings
                        </span>{" "}
                        Saat menekan salah satu tombol fungsi untuk mengaktifkan
                        Kontrol Misi, Kecerahan, Pemutaran Media, dan lainnya,
                        jika Anda menahan Option saat menekan, Anda dapat
                        mengakses opsi Pengaturan yang sesuai di dalam System
                        Preferences untuk tombol tersebut.
                      </li>
                    </ul>
                    <p className="my-5">
                      Apakah Anda memiliki tips dan trik lainnya untuk para
                      pengguna MacBook? Jika ada tulis pada kolom komentar.
                      Sekian yang dapat{" "}
                      <Link
                        href="/"
                        className="text-red-500 uppercase font-bold"
                      >
                        Maclabs.co.id
                      </Link>{" "}
                      berikan tentang tips memakai MacBook.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </Layouts.Section>
    </>
  );
};

export default TipsMemakaiMacbookPemulaPage;
