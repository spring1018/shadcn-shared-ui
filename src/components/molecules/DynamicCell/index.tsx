import { Input } from "@repo/shared-ui/components/atoms/CustomInput";
import { Combobox } from "@repo/shared-ui/components/ui/combobox";

type DynamicCellProps = {
  componentType: string;
  initialValue: string;
  options: any;
  handleChange: any;
};

export const DynamicCell = ({
  componentType,
  initialValue,
  options,
  handleChange,
}: DynamicCellProps) => {
  switch (componentType) {
    case "label":
      return (
        <div className="flex max-w-[500px] h-4 items-center">
          {options ? (
            <p className="truncate ...">
              {options.find((option) => option.value === initialValue)?.label}
            </p>
          ) : (
            <p className="truncate ...">{initialValue}</p>
          )}
        </div>
      );
    case "input":
      return (
        <Input
          className="border-0"
          initialValue={initialValue}
          onBlurAction={handleChange}
        />
      );
    case "select":
      return (
        <Combobox
          className="w-[200px] justify-between border-0"
          options={options}
          initialValue={initialValue}
          onChange={handleChange}
        />
      );
  }
};
