"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function Notification() {
	const { toast } = useToast();

	return (
		<Button
			variant="outline"
			onClick={() => {
				toast({
					description: "Notification received.",
				});
			}}
		>
			Show Toast
		</Button>
	);
}
