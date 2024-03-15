"use client";

import { createClient } from "@/utils/supabase/client";

interface buttonDeleteProp {
  idNote: number;
}

export default function ButtonDelete(props: buttonDeleteProp) {
  const supabase = createClient();

  const deleteNote = async (idNote: number) => {
    await supabase.from("notes").delete().eq("id", idNote);
    window.location.reload();
  };
  return (
    <button
      type="button"
      onClick={() => deleteNote(props.idNote)}
      className="py-2 px-4 rounded-md no-underline bg-background2 items-center hover:bg-btn-background-hover"
    >
      &times;
    </button>
  );
}
