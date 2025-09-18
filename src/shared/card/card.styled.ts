import styled from "@emotion/styled";

export const StyledCardWrapper = styled.div<{
  isSelected?: boolean;
}>(({ theme, isSelected }) => ({
  perspective: 200,
  position: "relative",
  display: "flex",
  minWidth: 100,
  width: 100,
  height: 150,
  backgroundColor: theme.secondary,
  color: theme.primary,
  borderRadius: "8px",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "24px",
  cursor: "pointer",
  transition: "all 0.3s ease-out",
  transformStyle: "preserve-3d",
  ...(isSelected && {
    border: `1px solid ${theme.primary}`,
    transform: "translateY(-10px)",
  }),
}));
