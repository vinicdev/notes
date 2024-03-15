import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Notes from "@/components/Notes";
import NavBar from "@/components/navBar";
import Header from "@/components/Header";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <NavBar />

      <div className="animate-in w-full flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header dataUser={user.id} />
        <main className="flex-1 flex flex-col gap-6">
          <Notes userId={user.id} />
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Feito por{" "}
          <a
            href="https://viniciuscardoso.dev"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Vinicius Cardoso
          </a>
        </p>
      </footer>
    </div>
  );
}
