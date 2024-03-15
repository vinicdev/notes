import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

interface ModalCadastroProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterNote: React.FC<ModalCadastroProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");

  const handleCadastro = async () => {
    try {
      const supabase = createClient();

      const { data, error } = await supabase.from("notes").insert({
        title: title, // Título do input
        cliente_id: 11,
      });

      if (error) {
        console.error("Erro ao cadastrar evento:", error.message);
      } else {
        console.log("Evento cadastrado com sucesso:", data);
        onClose();

        setTitle("");
      }
    } catch (error) {
      console.error("Erro geral:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-6 rounded-l">
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
            onClick={handleCadastro}
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterNote;
