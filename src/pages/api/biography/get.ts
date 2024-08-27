import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
    const { data, error } = await supabase.from("biography").select("*");

    if (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
    
    let newData = {};

    data.forEach((row) => {
        newData[row.field] = row.data;
    });

    return new Response(JSON.stringify(newData), { status: 200 });
};