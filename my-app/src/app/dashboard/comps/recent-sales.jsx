"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

//backend? useEffect and fetch from backend API

const data = [
	{
		fallback: "OM",
		name: "Olivia Martin",
		email: "olivia.martin@email.com",
		revenue: 1999,
	},
];

export function RecentSales() {
	return (
		// possible backend data through db's orm :
		// Customer:{name,email,icon} , order:{product:{price:}}

		// spacing of 8 with along vertical ,spanning the Card
		<div className="space-y-8">
			{data.map((user, idx) => {
				return (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							ease: "easeOut",
							duration: 0.5,
						}}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<div className="flex items-center">
							{/* size of avatar  */}
							<Avatar className="h-9 w-9">
								<AvatarImage src="/avatars/01.png" alt="Avatar" />
								<AvatarFallback>{user.fallback}</AvatarFallback>
							</Avatar>

							<div className="ml-4 space-y-1">
								<p className="text-sm font-medium leading-none">{user.name}</p>
								<p className="text-sm text-muted-foreground">{user.email}</p>
							</div>

							{/* push to left in flex using  ml-auto */}
							<div className="ml-auto font-medium">${user.revenue}</div>
						</div>
					</motion.div>
				);
			})}
		</div>
	);

	{
		/* **just repeating diff. data, we can replace with data.map() ** */
	}
	{
		/* 
			<div className="flex items-center">
			<Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
			<AvatarImage src="/avatars/02.png" alt="Avatar" />
					<AvatarFallback>JL</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">Jackson Lee</p>
					<p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
					</div>
					<div className="ml-auto font-medium">+$39.00</div>
					</div>

			<div className="flex items-center">
				<Avatar className="h-9 w-9">
					<AvatarImage src="/avatars/03.png" alt="Avatar" />
					<AvatarFallback>IN</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">Isabella Nguyen</p>
					<p className="text-sm text-muted-foreground">
						isabella.nguyen@email.com
					</p>
				</div>
				<div className="ml-auto font-medium">+$299.00</div>
			</div>

			<div className="flex items-center">
				<Avatar className="h-9 w-9">
					<AvatarImage src="/avatars/04.png" alt="Avatar" />
					<AvatarFallback>WK</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">William Kim</p>
					<p className="text-sm text-muted-foreground">will@email.com</p>
				</div>
				<div className="ml-auto font-medium">+$99.00</div>
			</div>

			<div className="flex items-center">
				<Avatar className="h-9 w-9">
					<AvatarImage src="/avatars/05.png" alt="Avatar" />
					<AvatarFallback>SD</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">Sofia Davis</p>
					<p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
				</div>
				<div className="ml-auto font-medium">+$39.00</div>
			</div> */
	}
}
