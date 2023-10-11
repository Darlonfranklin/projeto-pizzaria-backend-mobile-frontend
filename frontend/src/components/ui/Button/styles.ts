import { styled } from "styled-components";

export const ButtonPage = styled.button`
  max-width: 600px;
  background-color: var(--red-900);
  border: 0;
  padding: 0.4rem;
  color: var(--white);
  border-radius: 0.5rem;
  transition: filter 0.2s;

  &[disabled] {
    cursor: not-allowed;
    svg {
      animation: animate 2s infinite;
    }
  }

  &:hover {
    filter: brightness(1.08);
  }

  @keyframes animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const TextButton = styled.a`
  color: var(--white);
`;
