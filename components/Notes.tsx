import { createClient } from "@/utils/supabase/server";
import ButtonDelete from "./ButtonDelete";

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
          <div
            key={note.id}
            className="m-4 p-5 flex  flex-row justify-between bg-btn-background rounded"
          >
            <p>{note.title}</p>

            <ButtonDelete idNote={note.id} />
          </div>
        ))}
    </>
  );
}
