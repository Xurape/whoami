import { s as supabase } from '../../../chunks/supabase_DC9SmBDb.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ request, cookies, redirect }) => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
  return new Response(JSON.stringify(data), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
