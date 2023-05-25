import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // get token from user
  const token = req.cookies.get('user-token')?.value;

  // validate if the user is authenticated
  const verifiedToken = token && (await verifyAuth(token));
}

export const config = {
  matcher: ['/dashboard', '/login']
};
