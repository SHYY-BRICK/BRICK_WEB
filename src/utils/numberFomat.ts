export const formatNumberWithCommas = (num: number | string): string => {
  if (typeof num === "string") num = parseInt(num, 10);
  return num.toLocaleString("ko-KR"); // 한국식 3자리 단위 쉼표
};
