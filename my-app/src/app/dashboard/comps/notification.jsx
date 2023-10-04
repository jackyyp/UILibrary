"use client";

import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function Notification() {
	const { toast } = useToast();

	return (
		<Button
			variant="destructive"
			onClick={() => {
				toast({
					description: "Notification received.",
				});
			}}
		>
			<BellIcon className="mr-2 h-4 w-4" />
			Show Notifications
		</Button>
	);
}
