import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function getOrCreateUser(clerkId: string, email?: string) {
  // Try to find existing user
  const { data: existingUser } = await supabase
    .from("users")
    .select("*")
    .eq("clerk_id", clerkId)
    .single();

  if (existingUser) {
    return existingUser;
  }

  // Create new user
  const { data: newUser, error } = await supabase
    .from("users")
    .insert({ clerk_id: clerkId, email })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return newUser;
}
