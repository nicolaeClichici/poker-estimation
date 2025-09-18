import styled from "@emotion/styled";

export const StyledWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  "& button": {
    width: 100,
    height: 40,
    border: "none",
    backgroundColor: theme.primary,
    color: theme.white,
    borderRadius: 4,
    cursor: "pointer",
    "&:disabled": {
      cursor: "not-allowed",
      backgroundColor: "gray",
    },
  },
}));
