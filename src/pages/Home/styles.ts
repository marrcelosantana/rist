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
  padding: 34px 0;
`;

export const ContentHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 9999px;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.SUBTITLE};
  text-align: center;
  margin-top: 42px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin: 20px 0;
`;

export const SearchSection = styled.form`
  padding: 24px;
`;

export const InputContainer = styled.div`
  margin-bottom: 18px;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.COLORS.SUBTITLE};
  font-weight: 600;
  font-size: 12px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 5px;
  border: 0.5px solid #a3a3a3;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0 20px;
  margin-top: 5px;
  font-size: 12px;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border: 0;
  border-radius: 5px;
  margin-top: 48px;
  gap: 5px;
`;

export const ButtonText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
