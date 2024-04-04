"use client";

import Fragments from "@/components/fragments";
import Layouts from "@/components/layouts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const HomeVisitFormSchema = z.object({
  name: z.string().nonempty("Masukkan Nama Anda"),
  device: z.string().nonempty("Masukkan Device Anda"),
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

const HomeVisitForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof HomeVisitFormSchema>>({
    resolver: zodResolver(HomeVisitFormSchema),
  });

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
      name: "device",
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
      placeholder: "Masukkan Nomor Serial Perangkat",
    },
    {
      name: "problem",
      label: "Problem",
      type: "textarea",
      placeholder: "Masukkan Permasalahan Pada Device Kamu",
    },
  ];

  return (
    <>
      <Layouts.Form>
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
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Layouts.Form>
    </>
  );
};

export default HomeVisitForm;
