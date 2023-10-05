import { Button } from "@/components/ui/button";
import Link from "next/link";
import { mongoConnect, getDb } from "@/lib/mongodb/db";

export default async function Home() {
	await mongoConnect();
	const db = getDb();
	console.log(db);

	return (
		<div>
			<Button asChild>
				<Link href="/dashboard">Dashboard</Link>
			</Button>
			<Button asChild>
				<Link href="/music">Music</Link>
			</Button>
		</div>
	);
}
