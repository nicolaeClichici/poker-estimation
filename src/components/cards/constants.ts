export const ESTIMATION_VARIANTS: number[] = [1, 2, 3, 5, 8, 13, 0] as const;

export const ESTIMATION_LABELS: Record<number, string> = {
  1: "1",
  2: "2",
  3: "3",
  5: "5",
  8: "8",
  13: "13",
  0: "?",
} as const;
