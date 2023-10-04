"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

//Toast: pop up a notif , simulate backend comm
//Ref:https://ui.shadcn.com/docs/components/toast

//Form : submit data to backend. For type-safety , this is tsx
//Ref : https://ui.shadcn.com/docs/components/form

// Popover Ref: https://ui.shadcn.com/docs/components/popover
// Calendar Ref: 	https://ui.shadcn.com/docs/components/calendar

export function CalendarDateRangePicker({ className }) {
	const [date, setDate] = React.useState(
		undefined >
			{
				from: new Date(2023, 0, 20),
				to: addDays(new Date(2023, 0, 20), 20),
			}
	);

	// Def form schema

	const form = useForm(date);

	const { toast } = useToast();

	//2. Def handler
	const onSubmit = () => {
		toast({
			title: "This is `date` json you submitted",
			description: (
				//both are html tag , pre preserve spacing, code = display in monospace font
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(date, null, 2)}</code>
				</pre>
			),
		});
	};

	return (
		// <div className={cn("", className)}>

		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row">
				<FormField
					control={form.control}
					name="date"
					render={({}) => (
						<FormItem className="flex flex-col ">
							{/* optional */}
							{/* <FormLabel>Date of birth</FormLabel>   */}
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											id="date"
											variant={"outline"}
											className={cn(
												"w-[260px] justify-start text-left font-normal",
												!date && "text-muted-foreground"
											)}
										>
											<CalendarIcon className="mr-2 h-4 w-4" />
											{date?.from ? (
												date.to ? (
													<div className="flex flex-nowrap">
														{format(date.from, "LLL dd, y")} -{" "}
														{format(date.to, "LLL dd, y")}
													</div>
												) : (
													format(date.from, "LLL dd, y")
												)
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>

								<PopoverContent className="w-auto p-0" align="end">
									<Calendar
										initialFocus
										mode="range"
										defaultMonth={date?.from}
										selected={date}
										onSelect={setDate}
										numberOfMonths={2}
									/>
								</PopoverContent>
							</Popover>

							<FormDescription className="mx-1">
								Download report from selected date.
							</FormDescription>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="ml-2">
					Download
				</Button>
			</form>
		</Form>
		// </div>
	);
}
