import type { APIRoute } from 'astro';

export const prerender = false;

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();

  const email = data?.email;

  const subscribe = await fetch(
    'https://connect.mailerlite.com/api/subscribers',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.NEWSLETTER_TOKEN}`,
      },
      body: JSON.stringify({ email }),
    }
  );

  const response = await subscribe.json();

  if (!subscribe.ok && response?.errors) {
    return new Response(
      JSON.stringify({ message: response?.message, ok: false }),
      {
        status: response.status,
      }
    );
  }

  return new Response(
    JSON.stringify({ message: 'Thank you for subscribing!', ok: true }),
    { status: response.status }
  );
};
