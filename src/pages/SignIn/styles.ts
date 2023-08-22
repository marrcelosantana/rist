import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 28.75rem;
  height: 31.4375rem;
  border-radius: 15px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 34px 24px;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  text-align: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin: 20px 0;
`;

export const SignInSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 72px;
`;

export const Button = styled.button`
  width: 80%;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border-radius: 5px;
  border: 0;
  margin-top: 32px;
`;

export const ButtonText = styled.span`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 600;
  font-size: 16px;
`;
