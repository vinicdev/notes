import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

interface registerProps {
  user: string;
}

const RegisterNote = (props: registerProps) => {
  const [title, setTitle] = useState("");

  const handleRegisteNote = async () => {
    const supabase = createClient();

    try {
      const { data, error } = await supabase.from("notes").insert({
        title: title,
        cliente_id: props.user,
      });

      if (error) {
        console.error("Erro ao cadastrar evento:", error.message);
      } else {
        console.log("Evento cadastrado com sucesso:", data);

        setTitle("");
      }
    } catch (error) {
      console.error("Erro geral:", error);
    }
  };

  return (
    <form className="flex gap-4">
      <input
        type="text"
        className="p-3 rounded text-black"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="O que temos para hoje?"
      />
      <button
        type="submit"
        className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        onClick={handleRegisteNote}
      >
        Salvar
      </button>
    </form>
  );
};

export default RegisterNote;
