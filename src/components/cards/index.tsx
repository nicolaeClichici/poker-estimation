import { Card } from "@/shared";
import * as React from "react";
import { ESTIMATION_VARIANTS } from "./constants.ts";
import { useAtom } from "jotai";
import { resultPhaseAtom, selectedCardAtom } from "@/atoms";
import { StyledCardsWrapper } from "./cards.styled.ts";

export const Cards = () => {
  const [, setSelectedCard] = useAtom(selectedCardAtom);
  const [resultPhase] = useAtom(resultPhaseAtom);

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (resultPhase) return;
    const target = e.target as HTMLDivElement;
    const cardElement = target.closest("[data-card]");
    if (!cardElement) return;
    const cardClicked = cardElement.getAttribute("data-card")!;
    setSelectedCard(+cardClicked);
  };

  return (
    <StyledCardsWrapper onClick={handleOnClick}>
      {ESTIMATION_VARIANTS.map((x) => (
        <Card value={x} key={x} />
      ))}
    </StyledCardsWrapper>
  );
};
