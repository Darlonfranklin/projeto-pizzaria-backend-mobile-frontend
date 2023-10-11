import { Fragment, useContext } from "react";
import { HeaderContainer, HeaderContent, MenuNav } from "./styles";
import { FiLogOut } from "react-icons/fi";
import { Link } from "@/styles";
import { AuthContext } from "@/contexts/AuthContext";

const Header: React.FC = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderContent>
          <Link href="/dashboard">
            <img src="/logo.svg" width={190} height={60} />
          </Link>

          <MenuNav>
            <Link href="/category">Categoria</Link>
            <Link href="/product">Produtos</Link>
            <button onClick={signOut}>
              <FiLogOut color="#FFF" size={24} />
            </button>
          </MenuNav>
        </HeaderContent>
      </HeaderContainer>
    </Fragment>
  );
};

export default Header;
