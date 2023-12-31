export async function onRequestPost(context) {
  const data = await context?.request.json();

  const subscribe = await fetch(
    'https://connect.mailerlite.com/api/subscribers',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${context.env.NEWSLETTER_TOKEN}`,
      },
      body: JSON.stringify({ ...data }),
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
}
