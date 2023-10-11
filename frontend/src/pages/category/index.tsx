import Header from "@/components/Header";
import Head from "next/head";
import { FormEvent, Fragment, useState } from "react";
import { Container, Form, Button } from "./styles";
import { Input } from "@/components/ui/input";
import { setupAPIClient } from "../../services/api";
import { toast } from "react-toastify";
import { canSSRAuth } from "@/utils/canSSRAuth";

const Category: React.FC = () => {
  const [name, setName] = useState<string>("");

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    if (name === "") {
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.post("/category", { name: name });
    toast.success("Categoria cadastrada com sucesso");
    setName("");
  }

  return (
    <Fragment>
      <Head>
        <title>Nova categoria - Sujeito Pizzaria</title>
      </Head>
      <div>
        <Header />

        <Container>
          <h1>Cadastrar categorias</h1>

          <Form onSubmit={handleRegister}>
            <Input
              type="text"
              placeholder="Digite o nome da categoria"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
        </Container>
      </div>
    </Fragment>
  );
};

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});

export default Category;
