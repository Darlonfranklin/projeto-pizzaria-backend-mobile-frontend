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

  select {
    width: 100%;
    height: 40px;
    border-radius: 0.5rem;

    margin-bottom: 1rem;
    color: var(--white);
    background-color: var(--dark-900);
    border: 1px solid var(--gray-100);
    padding: 0 0.5rem;
  }
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

export const LabelAvatar = styled.label`
  width: 100%;
  height: 280px;
  background-color: var(--dark-900);
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  input {
    display: none;
  }

  span {
    z-index: 99;
    position: absolute;
    opacity: 0.7;
    transition: all 0.5s;
  }

  span:hover {
    opacity: 1;
    transform: scale(1.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.3rem;
  }
`;
