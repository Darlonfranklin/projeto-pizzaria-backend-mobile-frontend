import Head from "next/head";
import { useContext, FormEvent, useState } from "react";
import { Fragment } from "react";
import logoImg from "../../public/logo.svg";
import { ContainerCenter, Link, Login } from "@/styles";
import Image from "next/image";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/Button";
import { AuthContext } from "@/contexts/AuthContext";
import { canSSRGuest } from "@/utils/canSSRGuest";

const Home: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.warning("PREENCHA TODOS OS CAMPOS!!!");
      return;
    }

    setLoading(true);
    let data = {
      email,
      password,
    };

    await signIn(data);
    setLoading(false);
  }

  return (
    <Fragment>
      <Head>
        <title>SujeitoPizza - Faça seu login!</title>
      </Head>
      <ContainerCenter>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />
        <Login>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu e-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={loading}>
              Acessar
            </Button>
          </form>
          <Link href="/signup">Não possui uma conta? Cadastre-se</Link>
        </Login>
      </ContainerCenter>
    </Fragment>
  );
};

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});

export default Home;
