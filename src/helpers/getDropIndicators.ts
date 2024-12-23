const getDropIndicators = (column: string) => {
  return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
};

export default getDropIndicators;
