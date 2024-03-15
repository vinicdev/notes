import { createClient } from "@/utils/supabase/server";

interface interfacePros {
  userId: string;
}

export default async function Notes(props: interfacePros) {
  const supabase = createClient();
  const { data: notes } = await supabase
    .from("notes")
    .select()
    .eq("cliente_id", props.userId);

  return (
    <>
      {notes &&
        notes.map((note) => (
          <div key={note.id} className="m-4">
            <p>{note.title}</p>
          </div>
        ))}
    </>
  );
}
