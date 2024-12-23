const clearIndicators = (column: string) => {
  const indicators = Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  indicators.forEach((element) => {
    (element as HTMLElement).style.opacity = "0";
  });
};

export default clearIndicators;
