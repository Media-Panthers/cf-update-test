export default {
  async fetch(request, env) {
    return new Response(JSON.stringify({ link: env.MY_LINK }), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
