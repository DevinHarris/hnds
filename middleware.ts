import { NextResponse } from "next/server";
import { NextRequest } from "next/server";



export default function middleware(request: NextRequest) {

    if (request.nextUrl.pathname.startsWith("/_next") || request.nextUrl.pathname.startsWith("/api") || request.nextUrl.pathname.startsWith("/images")) {
        return NextResponse.next();
    }

    const { host } = request.nextUrl;
    
    if (host.startsWith('/store'))


    return NextResponse.next();
}