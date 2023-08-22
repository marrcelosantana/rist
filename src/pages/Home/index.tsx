import { LogOut, Search } from "lucide-react";
import {
  Avatar,
  Button,
  ButtonText,
  Container,
  Content,
  ContentHeader,
  Divider,
  Input,
  InputContainer,
  Label,
  SearchSection,
  Subtitle,
  Title,
  UserContainer,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <UserContainer>
            <Avatar src="http://github.com/Dirlandia404.png" />
            <Title>Olá, Dirlandia!</Title>
          </UserContainer>

          <LogOut size={24} color="#555" />
        </ContentHeader>

        <Divider />

        <Subtitle>Busque por contribuidores:</Subtitle>

        <SearchSection>
          <InputContainer>
            <Label>Usuário:</Label>
            <Input placeholder="Digite o nome do dono do repositório..." />
          </InputContainer>

          <InputContainer>
            <Label>Repositório:</Label>
            <Input placeholder="Digite o nome do repositório..." />
          </InputContainer>

          <Button>
            <ButtonText>Buscar</ButtonText>
            <Search size={18} color="#fff" />
          </Button>
        </SearchSection>
      </Content>
    </Container>
  );
}
