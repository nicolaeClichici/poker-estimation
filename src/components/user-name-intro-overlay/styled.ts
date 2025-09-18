import styled from "@emotion/styled";

export const StyledUserNameInput = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  alignItems: "center",
  marginTop: "10%",
  "& span": {
    fontWeight: 600,
    fontSize: 20,
  },
});

export const StyledInput = styled.input({
  height: 40,
  width: 300,
  border: "none",
  outline: "none",
  borderRadius: 4,
  fontSize: 24,
});

export const StyledSaveButton = styled.button(({ theme }) => ({
  width: 300,
  height: 40,
  border: "none",
  backgroundColor: theme.primary,
  color: theme.white,
  borderRadius: 4,
  textTransform: "uppercase",
  cursor: "pointer",
  fontSize: 16,
  fontWeight: 600,
}));
