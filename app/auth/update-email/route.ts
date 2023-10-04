import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";


export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase.auth.updateUser({ email });
  console.log(data);

  if (error) {
    console.error(error);
    return NextResponse.redirect(
      `${requestUrl.origin}/myAccount?message=Une erreur est survenue lors de la mise à jour de votre email`,
      { status: 301 }
    );
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/myAccount?message=Consultez votre email pour continuer le processus de connexion`,
    { status: 301 }
  );
}
