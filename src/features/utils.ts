export const getScoreColor = (score: number) => {
  if (score <= 1) return "red";
  if (score <= 3) return "yellow";
  return "green";
};

export const decodeHtml = (html: string): string => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
};
