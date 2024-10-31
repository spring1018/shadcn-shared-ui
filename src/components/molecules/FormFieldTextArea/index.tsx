import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@repo/shared-ui/components/ui/form";
import { Textarea } from "@repo/shared-ui/components/ui/textarea";
import { FieldValues, UseFormReturn } from "react-hook-form";

interface FormFieldTextAreaProps<T extends FieldValues> {
	form: UseFormReturn<any>;
	formFieldName: string;
	formFieldLabel: string;
}

export const FormFieldTextArea = ({
	form,
	formFieldName,
	formFieldLabel,
}: FormFieldTextAreaProps<FieldValues>) => {
	return (
		<FormField
			control={form.control}
			name={formFieldName}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{formFieldLabel}</FormLabel>
					<FormControl>
						<Textarea
							placeholder=""
							className="resize-none min-h-[100px]"
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
