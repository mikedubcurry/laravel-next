import { NextResponse } from "next/server";

// create isAuthenticated function that takes a request and returns a boolean
function isAuthenticated(request) {
  // if theres a cookie named token then return true
  if (request.cookies.get("token")) {
    return true;
  }
  // otherwise return false
  return false;
}

export function middleware(request) {
  // Log the request method and URL
  // if theres a cookie named token then redirect to dashboard
  if (request.cookies.get("token")) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }
  // Return a NextResponse object
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
