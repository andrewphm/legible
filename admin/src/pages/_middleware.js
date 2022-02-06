import { NextResponse } from 'next/server';

export const middleware = async (req, res) => {
  // Redirect to login if no admin user

  const { pathname } = req.nextUrl;

  //   if (pathname !== '/login') {
  //     return NextResponse.redirect('/login');
  //   }
};
