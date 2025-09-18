import { StyledCardWrapper } from "@/shared/card/card.styled.ts";
import { useAtom } from "jotai";
import { selectedCardAtom, resultPhaseAtom } from "@/atoms";
import { StyledWrapper } from "./main-section.styled.ts";
import { ESTIMATION_LABELS } from "../cards/constants.ts";

export const MainSection = () => {
  const [resultPhase, setResultPhase] = useAtom(resultPhaseAtom);
  const [selectedCard, setSelectedCard] = useAtom(selectedCardAtom);

  const handleOnClick = () => {
    setResultPhase(!resultPhase);
    if (resultPhase) {
      setSelectedCard(undefined);
    }
  };

  return (
    <StyledWrapper>
      <button onClick={handleOnClick} disabled={selectedCard === undefined}>
        {resultPhase ? "New Game" : "Show Result"}
      </button>
      <StyledCardWrapper>
        {resultPhase && <span>{ESTIMATION_LABELS[selectedCard!]}</span>}
      </StyledCardWrapper>
    </StyledWrapper>
  );
};
