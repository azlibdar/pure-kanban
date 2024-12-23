import clearIndicators from "./clearIndicators";
import getDropIndicators from "./getDropIndicators";
import getNearestDropIndicator from "./getNearestDropIndicator";

const highlightDropIndicators = (e: React.DragEvent<HTMLDivElement>, column: string) => {
  const dropIndicators = getDropIndicators(column);

  clearIndicators(column);
  const element = getNearestDropIndicator(e, dropIndicators);

  if (element) {
    (element as HTMLElement).style.opacity = "1";
  }
};

export default highlightDropIndicators;
