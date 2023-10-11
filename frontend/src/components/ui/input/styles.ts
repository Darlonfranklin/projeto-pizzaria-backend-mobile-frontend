import { styled } from "styled-components";

export const InputText = styled.input`
  margin-bottom: 1rem;
  height: 40px;
  border: 0;
  border-radius: 0.5rem;
  background-color: var(--dark-900);
  color: var(--white);
  padding: 1rem;
  border: 1px solid var(--gray-100);

  input::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const InputArea = styled.textarea`
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  color: var(--white);
  background-color: var(--dark-900);
  border: 1px solid var(--gray-100);
  height: 40px;
  padding: 0.6rem;

  input::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;
