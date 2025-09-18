import styled from "@emotion/styled";

export const StyledToggle = styled.label(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  width: 60,
  height: 30,
  "& input": {
    opacity: 0,
    width: 0,
    height: 0,
  },

  "& .slider": {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.white,
    transition: ".4s",
    borderRadius: "20px",

    "&:before": {
      position: "absolute",
      content: '"️"',
      height: 22,
      width: 22,
      left: "4px",
      bottom: "4px",
      backgroundColor: theme.primary,
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 0.72 0.72' fill='none'><path d='M.36.06a.03.03 0 0 1 .03.03v.03a.03.03 0 1 1-.06 0V.09A.03.03 0 0 1 .36.06m.212.088a.03.03 0 0 1 0 .042L.551.211A.03.03 0 1 1 .509.169L.53.148a.03.03 0 0 1 .042 0m-.424 0a.03.03 0 0 1 .042 0l.021.021a.03.03 0 0 1-.042.042L.148.19a.03.03 0 0 1 0-.042M.36.24a.12.12 0 1 0 0 .24.12.12 0 0 0 0-.24M.18.36a.18.18 0 1 1 .36 0 .18.18 0 0 1-.36 0m-.12 0A.03.03 0 0 1 .09.33h.03a.03.03 0 1 1 0 .06H.09A.03.03 0 0 1 .06.36m.51 0A.03.03 0 0 1 .6.33h.03a.03.03 0 1 1 0 .06H.6A.03.03 0 0 1 .57.36M.169.508A.03.03 0 0 1 .211.55L.19.571A.03.03 0 0 1 .148.529zM.508.55A.03.03 0 0 1 .55.508l.021.021a.03.03 0 0 1-.042.042zM.36.57A.03.03 0 0 1 .39.6v.03a.03.03 0 1 1-.06 0V.6A.03.03 0 0 1 .36.57' fill='%230D0D0D'/></svg>")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "14px 14px",
      transition: ".4s",
      borderRadius: "50%",
    },
  },

  "& input:checked + .slider:before": {
    transform: "translateX(30px)",
  },
}));
