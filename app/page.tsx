import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Login from "./components/Login";
import { redirect } from "next/navigation";



export const dynamic = "force-dynamic";


export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();


  return (
    <main className="loginContainer">
      {user ? (
        redirect("/dashboard")
      ) : (
        <nav className="loginWrapper">
          <h1>Se connecter</h1>
          <Login />
        </nav>
      )}
    </main>
  );
}
