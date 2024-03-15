import { createClient } from "@/utils/supabase/server";
import ClientForm from "./ClientForm"; // Importa o componente de formulário cliente

interface Props {
  userId: string; // Tipo do userId
}

const RegisterNotes: React.FC<Props> = (props) => {
  const supabase = createClient();

  const handleFormSubmit = async (title: string) => {
    const clienteId = props.userId;

    try {
      // Insere os dados no Supabase
      const { error } = await supabase.from("notes").insert({
        title: title, // Título do input
        cliente_id: clienteId,
      });

      if (error) {
        console.error("Erro ao cadastrar nota:", error.message);
        // Tratar erro, se necessário
      } else {
        console.log("Nota cadastrada com sucesso!");
        // Tratar sucesso, se necessário
      }
    } catch (error) {
      console.error("Erro ao cadastrar nota:", error.message);
      // Tratar erro, se necessário
    }
  };

  return (
    <>
      <ClientForm onSubmit={handleFormSubmit} />{" "}
      {/* Renderiza o componente de formulário cliente */}
    </>
  );
};

export default RegisterNotes;
