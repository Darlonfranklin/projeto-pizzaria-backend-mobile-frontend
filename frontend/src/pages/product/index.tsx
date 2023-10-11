import Header from "@/components/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";
import { Fragment, useState, ChangeEvent, FormEvent } from "react";
import { Button, Container, Form, LabelAvatar } from "./styles";
import { Input, TextArea } from "@/components/ui/input";
import { FiUpload } from "react-icons/fi";
import { setupAPIClient } from "@/services/api";
import { toast } from "react-toastify";

type ItemProps = {
  id: string;
  name: string;
};

interface CategoryProps {
  categoryList: ItemProps[];
}

const Product: React.FC<CategoryProps> = ({ categoryList }) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [imageAvatar, setImageAvatar] = useState<any>(null);

  const [categories, setCategories] = useState(categoryList || []);
  const [categorySelected, setCategorySelected] = useState<any>(0);

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];

    if (!image) {
      return;
    }

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleChangeCategory(e: any) {
    setCategorySelected(e.target.value);
  }

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    try {
      const data = new FormData();

      if (
        name === "" ||
        price === "" ||
        description == "" ||
        imageAvatar === null
      ) {
        toast.error("Preencha os campos");
        return;
      }

      data.append("name", name);
      data.append("price", price);
      data.append("description", description);
      data.append("category_id", categories[categorySelected].id);
      data.append("file", imageAvatar);

      const apiClient = setupAPIClient();

      await apiClient.post("/product", data);

      toast.success("Cadastrado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Ops! erro ao cadastrar!");
    }
    setName("");
    setPrice("");
    setDescription("");
    setImageAvatar(null);
    setAvatarUrl("");
  }

  return (
    <Fragment>
      <Head>
        <title>Novo produto - Sujeito Pizzaria</title>
      </Head>
      <div>
        <Header />

        <Container>
          <h1>Novo produto</h1>

          <Form onSubmit={handleRegister}>
            <LabelAvatar>
              <span>{!avatarUrl && <FiUpload size={30} color="#FFF" />}</span>
              <input
                type="file"
                accept="image/png. image/jpeg"
                onChange={handleFile}
              />
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt="Foto do produto"
                  width={250}
                  height={250}
                />
              )}
            </LabelAvatar>
            <select value={categorySelected} onChange={handleChangeCategory}>
              {categories.map((item, index) => {
                return (
                  <option key={item.id} value={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <Input
              type="text"
              placeholder="Digite o nome do produto"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Preço do produto"
              value={price}
              onChange={(e: any) => setPrice(e.target.value)}
            />
            <TextArea
              placeholder="Descreva seu produto..."
              value={description}
              onChange={(e: any) => setDescription(e.target.value)}
            />
            <Button>Cadastrar</Button>
          </Form>
        </Container>
      </div>
    </Fragment>
  );
};

export const getServerSideProps = canSSRAuth(async (ctx: any) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("/category");

  return {
    props: {
      categoryList: response.data,
    },
  };
});

export default Product;
