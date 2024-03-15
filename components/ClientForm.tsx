import { createClient } from "@/utils/supabase/server";
import { useState } from "react";

// Componente de formulário cliente
const ClientForm: React.FC<{ onSubmit: (title: string) => void }> = ({
  onSubmit,
}) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(title);
  };

  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <input
        className="p-3 rounded text-black"
        placeholder="O que temos para hoje?"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button
        type="submit"
        className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        Salvar
      </button>
    </form>
  );
};

export default ClientForm;
