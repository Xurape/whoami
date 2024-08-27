import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
    const { data, error } = await supabase.from("projects").select("*");

    if (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
};