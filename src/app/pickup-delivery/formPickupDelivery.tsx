"use client";

import { useState } from "react";
import Fragments from "@/components/fragments";
import Layouts from "@/components/layouts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/services/sendEmail";
import { Slide, ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const PickupDeliveryFormSchema = z.object({
  name: z.string().nonempty("Masukkan Nama Anda"),
  jenisPerangkat: z.string().nonempty("Masukkan Device Anda"),
  email: z
    .string()
    .email({ message: "Masukkan Email Valid" })
    .nonempty("Masukkan Email Anda"),
  whatsapp: z.string().nonempty("Masukkan Nomor Whatsapp Anda"),
  alamat: z.string().nonempty("Masukkan Alamat Anda"),
  serialNumber: z.string().nonempty("Masukkan Serial Number Anda"),
  area: z.string().nonempty("Masukkan Area Anda"),
  date: z.string().nonempty("Masukkan Tanggal Anda"),
  problem: z.string().nonempty("Masukkan Problem Anda"),
});

const PickupDeliveryForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof PickupDeliveryFormSchema>>({
    resolver: zodResolver(PickupDeliveryFormSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const [submitMessage, setSubmitMessage] = useState("Submit");

  const fields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Masukkan Nama Anda",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Masukkan Email Anda",
    },
    {
      label: "Whatsapp",
      name: "whatsapp",
      type: "number",
      placeholder: "Masukkan Nomor Whatsapp Anda",
    },
    {
      label: "Alamat",
      name: "alamat",
      type: "text",
      placeholder: "Masukkan Alamat Anda",
    },
    {
      label: "Jenis Perangkat",
      name: "jenisPerangkat",
      type: "select",
      placeholder: "Pilih Jenis Perangkat",
      options: [
        { label: "MacBook", value: "macbook" },
        { label: "MacBook Air", value: "macbookAir" },
        { label: "MacBook Pro", value: "macbookPro" },
        { label: "iMac", value: "imac" },
        { label: "Mac-Mini", value: "mac-mini" },
        { label: "Mac-Pro", value: "mac-pro" },
      ],
    },
    {
      label: "Serial Number",
      name: "serialNumber",
      type: "text",
      placeholder: "Masukkan Nomor Serial Perangkat",
    },
    {
      label: "Area",
      name: "area",
      type: "select",
      placeholder: "Masukkan Area Tempat Tinggal",
      options: [
        {
          value: "jakartaTimur",
          label: "Jakarta Timur",
        },
        {
          value: "jakartaBarat",
          label: "Jakarta Barat",
        },
        {
          value: "jakartaUtara",
          label: "Jakarta Utara",
        },
        {
          value: "jakartaPusat",
          label: "Jakarta Pusat",
        },
        {
          value: "jakartaSelatan",
          label: "Jakarta Selatan",
        },
        {
          value: "depok",
          label: "Depok",
        },
        {
          value: "bekasi",
          label: "Bekasi",
        },
        {
          value: "tangerang",
          label: "Tangerang",
        },
        {
          value: "tangerangSelatan",
          label: "Tangerang Selatan",
        },
      ],
    },
    {
      label: "Tanggal Reservasi",
      name: "date",
      type: "date",
      placeholder: "Masukkan Tanggal Reservasi",
    },
    {
      name: "problem",
      label: "Problem",
      type: "textarea",
      placeholder: "Masukkan Permasalahan Pada Device Kamu",
    },
  ];

  const onSubmit = async (data: z.infer<typeof PickupDeliveryFormSchema>) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("Submitting...");

    const formData = {
      service_type: "pickup_delivery",
      customerService: "Ayu",
      ...data,
    };

    try {
      const response = await sendEmail(formData);
      if (response.success === true) {
        setSubmitStatus("success");
        setSubmitMessage(response.message);
        reset();
        toast.success(response.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Gagal");
      toast.error("Pengiriman email gagal", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Layouts.Form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-12 lg:gap-6">
          {fields.map((field, index) => (
            <div
              key={index}
              className={`${
                field.name === "area" || field.type === "date"
                  ? "lg:col-span-6"
                  : field.type !== "textarea"
                  ? "lg:col-span-4"
                  : "lg:col-span-12"
              } mb-5`}
            >
              <Fragments.ControllerInput
                {...field}
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                control={control}
                errors={errors}
              />
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-12">
          <div className="col-span-12">
            <Button
              className={`w-full ${
                submitStatus === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : submitStatus === "error"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-sky-800 hover:bg-sky-900"
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              {submitMessage}
            </Button>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 mt-5">
          <div className="lg:col-span-12">
            <h1 className="text-xl uppercase my-5 text-center font-bold">
              Syarat dan ketentuan Free Pickup & Delivery
            </h1>
            <ul className="text-sm list-disc text-start">
              <li className="mt-2">
                Free Pickup & Delivery hanya berlaku untuk wilayah JADETABEK
              </li>
              <li className="mt-2">
                Pastikan customer dan kurir mengecek bersama kondisi unit di
                saat pengambilan atau pengantaran ( unit sebelum & sesudah di
                perbaiki )
              </li>
              <li className="mt-2">
                Pastikan tidak ada akesoris menempel pada unit yang akan di
                perbaiki.
              </li>
              <li className="mt-2">
                Unit akan kami pickup & delivery dengan memakai bubble wrap anti
                static
              </li>
              <li className="mt-2">
                Kontak kurir akan kami informasikan setelah kami menerima form
                ini
              </li>
              <li className="mt-2">
                Kami akan kenakan biaya pengambilan dan pengantaran kurir jika
                ada pembatalan secara sepihak dari customer atau tidak setuju
                untuk melakukan perbaikan. ( batal servis )
              </li>
            </ul>
          </div>
        </div>
      </Layouts.Form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
};

export default PickupDeliveryForm;
