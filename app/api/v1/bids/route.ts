export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";

async function getUserFromRequest(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;
  const token = authHeader.slice(7);
  const supabase = createServiceClient();
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) return null;
  return user;
}

export async function GET(request: NextRequest) {
  const user = await getUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from("bids")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json({ bids: data });
  } catch {
    return NextResponse.json({ error: "Failed to fetch bids" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const user = await getUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from("bids")
      .insert({
        user_id: user.id,
        title: body.title,
        agency: body.agency,
        category: body.category,
        value_min: body.value_min,
        value_max: body.value_max,
        deadline: body.deadline,
        status: body.status || "researching",
        source_url: body.source_url,
        description: body.description,
        notes: body.notes,
        contact_name: body.contact_name,
        contact_email: body.contact_email,
      })
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ bid: data }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create bid" }, { status: 500 });
  }
}
