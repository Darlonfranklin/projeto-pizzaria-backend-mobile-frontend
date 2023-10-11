import styled from "styled-components";

interface IButtonProps {
  type: string;
  onClick: () => void;
}

export const Button = styled.button<IButtonProps>`
  background: transparent;
  border: 0;
`;

export const ButtonOrder = styled.button<IButtonProps>`
  margin-top: 1.5rem;
  background-color: rgba(0, 0, 0, 40%);
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  color: var(--red-900);
`;

export const Table = styled.span`
  font-size: 1.4rem;
  color: var(--green-900);
`;

export const Container = styled.div`
  width: 620px;
  background-color: var(--dark-700);
  color: var(--white);

  h2 {
    margin: 1rem 0;
  }

  @media screen and (max-width: 550px) {
    width: 330px;
  }

  @media screen and (max-width: 700px) {
    width: 430px;
  }
`;

export const ContainerItem = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  strong {
    color: var(--green-900);
  }
`;

export const Description = styled.span`
  margin-top: 0.5rem;
  word-break: break-all;
`;
