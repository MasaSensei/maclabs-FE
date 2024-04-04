import Cores from "@/components/core";
import { SelectItem } from "@/components/ui/select";
import { Controller, FieldValues } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface ControllerInputProps {
  name: string;
  placeholder: string;
  type: string;
  label: string;
  control: any;
  errors: any;
  defaultValue?: any;
  options?: Option[];
}

const ControllerInput: React.FC<ControllerInputProps> = (props) => {
  const {
    name,
    placeholder,
    type,
    label,
    control,
    errors,
    defaultValue,
    options,
  } = props;
  return (
    <div className="lg:col-span-6">
      <div className="text-start">
        <Cores.Label name={name}>{label}</Cores.Label>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }: { field: FieldValues }) => (
            <>
              {type === "select" && options ? (
                <Cores.Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  placeholder={placeholder}
                >
                  {options.map((item: any) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </Cores.Select>
              ) : type === "textarea" ? (
                <Cores.TextArea
                  {...field}
                  placeholder={placeholder}
                  defaultValue={defaultValue}
                  onChange={(e: any) => field.onChange(e.target.value)}
                />
              ) : type === "date" ? (
                <Cores.Input
                  {...field}
                  placeholder={placeholder}
                  type={type}
                  defaultValue={defaultValue}
                />
              ) : (
                <>
                  <Cores.Input
                    {...field}
                    placeholder={placeholder}
                    type={type}
                    defaultValue={defaultValue}
                  />
                  {name === "serialNumber" && (
                    <p className="text-slate-400 text-sm mt-2 lowercase italic">
                      Serial MacBook Tertera di Bawah Bottom Case
                    </p>
                  )}
                </>
              )}
            </>
          )}
        />
        {errors[name] && (
          <p className="text-red-500 text-sm mt-2">{errors[name].message}</p>
        )}
      </div>
    </div>
  );
};

export default ControllerInput;
