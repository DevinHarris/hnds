import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
    const host = req.headers.get("host");
    const [subdomain] = host?.split(".") || [];

    if (subdomain === "store") {
        return NextResponse.rewrite(new URL("/store", req.url))
    }


    return NextResponse.next();
}