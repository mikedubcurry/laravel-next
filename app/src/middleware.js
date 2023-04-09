import {NextResponse} from 'next/server'

export function middleware(request) {
  // Log the request method and URL
  // if theres a cookie named token then redirect to dashboard
  if(request.cookies.get('token')){
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }
  // Return a NextResponse object
  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
