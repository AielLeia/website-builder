import { EnvConfig } from '@/config/env';
import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ['/site', '/api/uploadthing'],
  async afterAuth(_, request) {
    const url = request.nextUrl;
    const searchParams = url.searchParams.toString();
    let hostname = request.headers;

    const pathWithSearchParams = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`;

    const customSubDomain = hostname
      .get('host')
      ?.split(`${EnvConfig.NEXT_PUBLIC_DOMAIN}`)
      .filter(Boolean)[0];
    if (customSubDomain) {
      return NextResponse.rewrite(
        new URL(`/${customSubDomain}${pathWithSearchParams}`, request.url)
      );
    }

    if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
      return NextResponse.redirect(new URL(`/agency/sign-in`, request.url));
    }

    if (
      url.pathname === '/' ||
      (url.pathname === '/site' && url.host === EnvConfig.NEXT_PUBLIC_DOMAIN)
    ) {
      return NextResponse.rewrite(new URL(`/site`, request.url));
    }

    if (
      url.pathname.startsWith('/agency') ||
      url.pathname.startsWith('/subaccount')
    ) {
      console.log(
        url.pathname.startsWith('/agency') ||
          url.pathname.startsWith('/subaccount')
      );
      return NextResponse.rewrite(
        new URL(`${pathWithSearchParams}`, request.url)
      );
    }
  },
});

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
