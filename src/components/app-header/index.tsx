import { ThemeToggle } from "../theme-toggle";
import { useAtom } from "jotai";
import { resultPhaseAtom, selectedCardAtom, userAtom } from "@/atoms";
import { StyledHeader, StyledButton } from "./app-header.styled.ts";

export const AppHeader = () => {
  const [user] = useAtom(userAtom);
  const [, setSelectedCard] = useAtom(selectedCardAtom);
  const [, setResultPhase] = useAtom(resultPhaseAtom);

  const resetGame = () => {
    setSelectedCard(undefined);
    setResultPhase(false);
  };

  return (
    <StyledHeader>
      <span>{user}</span>
      <div>
        <StyledButton onClick={resetGame}>Reset</StyledButton>
        <ThemeToggle />
      </div>
    </StyledHeader>
  );
};
