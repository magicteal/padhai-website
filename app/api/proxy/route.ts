import { NextRequest } from 'next/server';

const TARGET_BASE = 'https://mpc2-prod-25-is5qnl632q-wl.a.run.app';

async function proxyRequest(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const forwardPath = pathname.replace(/^\/api\/proxy/, '') || '/';
  const targetUrl = `${TARGET_BASE}${forwardPath}${search || ''}`;

  const forwarded = new Headers();
  for (const [key, value] of req.headers) {
    if (key.toLowerCase() === 'host') continue;
    forwarded.set(key, value as string);
  }

  // Ensure cookies from the browser are forwarded to the target if present
  const cookie = req.headers.get('cookie');
  if (cookie) forwarded.set('cookie', cookie);

  const opts: RequestInit = {
    method: req.method,
    headers: forwarded,
    redirect: 'manual'
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const body = await req.arrayBuffer();
    opts.body = body;
  }

  const res = await fetch(targetUrl, opts);

  // Copy response headers but remove hop-by-hop headers
  const responseHeaders = new Headers(res.headers);
  responseHeaders.delete('transfer-encoding');
  responseHeaders.delete('content-encoding');
  responseHeaders.delete('content-length');

  // Return the upstream response directly
  return new Response(res.body, {
    status: res.status,
    headers: responseHeaders
  });
}

export async function GET(req: NextRequest) {
  return proxyRequest(req);
}

export async function POST(req: NextRequest) {
  return proxyRequest(req);
}

export async function PUT(req: NextRequest) {
  return proxyRequest(req);
}

export async function PATCH(req: NextRequest) {
  return proxyRequest(req);
}

export async function DELETE(req: NextRequest) {
  return proxyRequest(req);
}

export async function OPTIONS(req: NextRequest) {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', req.headers.get('origin') || '*');
  headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  headers.set('Access-Control-Allow-Headers', req.headers.get('access-control-request-headers') || '*');
  headers.set('Access-Control-Allow-Credentials', 'true');
  return new Response(null, { status: 204, headers });
}

export const dynamic = 'force-dynamic';
