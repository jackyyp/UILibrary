import { Input } from "@/components/ui/input";

// A search bar without functionality ,simply input bar from shadcn
//ref: https://ui.shadcn.com/docs/components/input
// can be of file,or used input of fromby changing type
export function Search() {
	return (
		<div>
			<Input
				type="file"
				placeholder="Search..."
				className="md:w-[100px] lg:w-[300px]"
			/>
		</div>
	);
}
