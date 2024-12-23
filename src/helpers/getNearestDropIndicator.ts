const getNearestDropIndicator = (e: React.DragEvent<HTMLDivElement>, dropIndicators: Element[]) => {
  const MOUSE_OFFSET = 48;

  let closestIndicator = dropIndicators[dropIndicators.length - 1];
  let minDistance = Infinity;

  for (const indicator of dropIndicators) {
    const rect = indicator.getBoundingClientRect();

    const distance = Math.abs(rect.top - e.clientY);

    if (distance < minDistance) {
      minDistance = distance;
      closestIndicator = indicator;
    }
  }

  if (minDistance < MOUSE_OFFSET) {
    return closestIndicator;
  }
};

export default getNearestDropIndicator;
