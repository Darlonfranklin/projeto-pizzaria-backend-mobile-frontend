import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 5rem;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;

  img {
    cursor: pointer;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  width: 300px;
  height: 80px;
  align-items: center;
  justify-content: space-around;
  align-items: center;

  button {
    margin-left: 2rem;
    background: transparent;
    display: flex;
    margin-top: 12px;
    border: 0;
    transition: transform 0.8s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Link = styled.a`
  color: var(--white);
  padding: 0 0.5rem;
  display: inline-block;
  position: relative;
  transition: color 0.7s;

  & + a {
    margin-left: 2rem;
  }

  &:hover {
    color: var(--red-900);
  }
`;
