import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
	return (
		// possible backend data through db's orm :
		// Customer:{name,email,icon} , order:{product:{price:}}

		// spacing of 8 with along vertical ,spanning the Card
		<div className="space-y-8">
			{/* a row entry with flex */}
			<div className="flex items-center">
				{/* size of avatar  */}
				<Avatar className="h-9 w-9">
					<AvatarImage src="/avatars/01.png" alt="Avatar" />
					<AvatarFallback>OM</AvatarFallback>
				</Avatar>

				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">Olivia Martin</p>
					<p className="text-sm text-muted-foreground">
						olivia.martin@email.com
					</p>
				</div>

				{/* push to left in flex using  ml-auto */}
				<div className="ml-auto font-medium">+$1,999.00</div>
			</div>

			{/* **just repeating diff. data, we can replace with data.map() ** */}
			{/* 
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
			</div> */}
		</div>
	);
}
