"use client";

import Cores from "@/components/core";
import Fragments from "@/components/fragments";
import Layouts from "@/components/layouts";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const ContactFormSchema = z.object({
  name: z.string().nonempty("Name cannot be empty"),
  phone: z.string().nonempty("Whatsapp Number cannot be empty"),
  email: z.string().email("Email is invalid"),
  message: z.string().nonempty("Message cannot be empty"),
});

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
  });

  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Your Name",
    },
    {
      name: "phone",
      label: "Whatsapp Number",
      type: "number",
      placeholder: "Your Number Whatsapp",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Your Email",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Your Problem",
    },
  ];

  const onSubmit = (data: z.infer<typeof ContactFormSchema>) => {
    console.log(data);
  };

  return (
    <Layouts.Form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {fields.map((field, index) => (
          <div
            className={`${
              field.type === "email" || field.type === "textarea"
                ? "lg:col-span-2"
                : "lg:col-span-1"
            } mb-5`}
            key={index}
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
        <div className="lg:col-span-3">
          <Button className="w-full" type="submit">
            Send Message
          </Button>
        </div>
      </div>
    </Layouts.Form>
  );
};

export default ContactForm;
