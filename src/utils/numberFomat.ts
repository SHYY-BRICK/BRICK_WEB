export const formatNumberWithCommas = (
  num: number | string | null | undefined,
): string => {
  if (num === null || num === undefined || isNaN(Number(num))) return "0";

  const parsed = typeof num === "string" ? parseInt(num, 10) : num;
  return parsed.toLocaleString("ko-KR");
};
