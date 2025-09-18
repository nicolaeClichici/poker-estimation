import { StyledCardWrapper } from "./card.styled.ts";
import { useAtom } from "jotai";
import { selectedCardAtom } from "@/atoms";
import { ESTIMATION_LABELS } from "@/components/cards/constants.ts";

export const Card = (props: { value: number }) => {
  const { value } = props;
  const [selectedCard] = useAtom(selectedCardAtom);
  return (
    <StyledCardWrapper data-card={value} isSelected={selectedCard === value}>
      <span>{ESTIMATION_LABELS[value]}</span>
    </StyledCardWrapper>
  );
};
