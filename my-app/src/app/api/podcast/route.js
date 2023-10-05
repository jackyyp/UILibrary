import { NextResponse } from "next/server";
import Podcast from "@/lib/mongodb/model/podcast";
import { mongoConnect } from "@/lib/mongodb/db";

export async function POST(req, res) {
    try {

        await mongoConnect();
        const body = await req.json();
        const podcast = Podcast(body);
        console.log(podcast);

        const result = await podcast.save();
        return new NextResponse(result, { status: 200 });

    } catch (err) {
        console.log(err);
        return new NextResponse(err, { status: 400 });
    }
}