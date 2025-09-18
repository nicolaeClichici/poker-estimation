import styled from "@emotion/styled";

export const StyledHeader = styled.header(({ theme }) => ({
  width: "100%",
  height: 50,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: theme.secondary,
  padding: 16,
  "& span": {
    color: theme.primary,
  },
  "& div": {
    display: "flex",
    gap: 16,
    alignItems: "center",
  },
}));

export const StyledButton = styled.button(({ theme }) => ({
  borderRadius: 4,
  height: 30,
  fontSize: 16,
  padding: "4px 16px",
  backgroundColor: theme.primary,
  border: "none",
  color: theme.white,
  cursor: "pointer",
}));
