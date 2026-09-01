import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);

export interface QrCard {
  id: string;
  user_id: string | null;

  business_name: string;
  website_url: string | null;

  contact_name: string | null;
  phone: string | null;
  email: string | null;
  description: string | null;

  instagram: string | null;
  facebook: string | null;
  linkedin: string | null;
  youtube: string | null;
  location: string | null;

  scan_count: number;
  is_active: boolean;

  created_at: string;
}