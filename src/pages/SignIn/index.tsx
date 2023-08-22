import { Github } from "lucide-react";

import {
  Button,
  ButtonText,
  Container,
  Content,
  Divider,
  SignInSection,
  Title,
} from "./styles";

export function SignIn() {
  return (
    <Container>
      <Content>
        <Title>Bem-vindo ao Rist!</Title>
        <Divider />

        <SignInSection>
          <Github size={128} />
          <Button>
            <ButtonText>Entrar com Github</ButtonText>
          </Button>
        </SignInSection>
      </Content>
    </Container>
  );
}
