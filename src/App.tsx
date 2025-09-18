import styled from "@emotion/styled";
import "./styles/reset.css";
import {
  Cards,
  AppHeader,
  MainSection,
  UserNameIntroOverlay,
} from "@/components";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms";

export const App = () => {
  const [user] = useAtom(userAtom);

  if (!user) {
    return <UserNameIntroOverlay />;
  }
  return (
    <StyledAppLayout>
      <AppHeader />
      <MainSection />
      <Cards />
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  width: "100%",
  height: "100vh",
  paddingBottom: 40,
  boxSizing: "border-box",
  alignItems: "center",
  justifyContent: "space-between",
});
