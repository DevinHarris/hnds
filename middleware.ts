import { NextResponse } from "next/server";
import { NextRequest } from "next/server";



export default function middleware(request: NextRequest) {

    // to load images, stylesheets, javascript and other assests for subdomains

    if (request.nextUrl.pathname.startsWith("/_next") || request.nextUrl.pathname.startsWith("/api") || request.nextUrl.pathname.startsWith("/images")) {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    const host = request.headers.get("host") || "";
    
    const subdomain = host.split(".")[0];

    if (subdomain === "store") {
        url.pathname = `/store${url.pathname}`;
        return NextResponse.rewrite(url);
    }



    return NextResponse.next();
}