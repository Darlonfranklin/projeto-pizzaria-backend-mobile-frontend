import Head from "next/head";
import { FormEvent, Fragment, useContext, useState } from "react";
import logoImg from "../../../public/logo.svg";
import { ContainerCenter, Link, Login } from "@/styles";
import Image from "next/image";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/Button";
import { AuthContext } from "@/contexts/AuthContext";

const SignUp: React.FC = () => {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      toast.warning("PREENCHA TODOS OS CAMPOS!!!");
      return;
    }

    setLoading(true);

    let data = {
      name,
      email,
      password,
    };

    await signUp(data);
    setLoading(false);
  }
  return (
    <Fragment>
      <Head>
        <title>Faça seu cadastro agora!</title>
      </Head>
      <ContainerCenter>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />
        <Login>
          <h1>Criando uma conta</h1>
          <form onSubmit={handleSignUp}>
            <Input
              placeholder="Digite seu nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
          <Link href="/">Já possui uma conta? Faça login!</Link>
        </Login>
      </ContainerCenter>
    </Fragment>
  );
};

export default SignUp;
