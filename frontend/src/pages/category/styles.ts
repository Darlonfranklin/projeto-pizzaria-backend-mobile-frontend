import { styled } from "styled-components";

export const Container = styled.main`
  max-width: 720px;
  margin: 4rem auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    color: var(--white);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const Button = styled.button`
  height: 40px;
  border: 0;
  background-color: var(--green-900);
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 0.3rem;
  color: var(--dark-700);
`;
