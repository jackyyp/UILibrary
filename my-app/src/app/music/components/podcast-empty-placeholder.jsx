"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import axios from "axios";

// we are not doing data validation on client side due to time-constraint , otherwise use zod

export function PodcastEmptyPlaceholder() {
	const form = useForm();

	const onSubmit = async (data) => {
		try {
			await axios.post(`/api/podcast/`, data);
			toast({
				description: "podcast added",
			});
		} catch (err) {
			toast({
				variant: "destructive",
				description: "failed to add podcast",
			});
		}
	};

	return (
		<div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
			<div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="h-10 w-10 text-muted-foreground"
					viewBox="0 0 24 24"
				>
					<circle cx="12" cy="11" r="1" />
					<path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
					<path d="M17 18.5a9 9 0 1 0-10 0" />
				</svg>

				<h3 className="mt-4 text-lg font-semibold">No episodes added</h3>
				<p className="mb-4 mt-2 text-sm text-muted-foreground">
					You have not added any podcasts. Add one below.
				</p>

				{/*  trigger a form  */}
				<Dialog>
					<DialogTrigger>
						<Button size="sm" className="relative">
							Add Podcast
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Add Podcast</DialogTitle>
							<DialogDescription>
								Copy and paste the podcast feed URL to import.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<div className="grid gap-2">
								{/* shadcn/ui form with api call to mongodb. */}
								<Form {...form}>
									<form
										onSubmit={form.handleSubmit(onSubmit)}
										className="w-2/3 space-y-6"
									>
										<FormField
											control={form.control}
											// this is  req.body.url !! make sure the name is correct
											name="url"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Podcast URL</FormLabel>
													<FormControl>
														<Input
															id="url"
															placeholder="https://example.com/feed.xml"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<DialogFooter>
											<Button type="submit">Add Podcast</Button>
										</DialogFooter>
									</form>
								</Form>
							</div>
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
