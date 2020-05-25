
// TYPES
type HeaderNames = {
  idMask1: string,
  idMask2: string,
  idContent1: string,
  idContent2: string,
}
type HeaderElements = {
  mask1: HTMLElement,
  mask2: HTMLElement,
  content1: HTMLElement,
  content2: HTMLElement,
  header: HTMLElement
}
type point = { type: string, distance: number };
type tabPoint = point[];



// GET HEADER ELEMENTS
export const getHeaderElements = (HeaderNames: HeaderNames) => {
  const { idMask1, idMask2, idContent1, idContent2 } = HeaderNames;
  const mask1 = document.getElementById(idMask1);
  const mask2 = document.getElementById(idMask2);
  const content1 = document.getElementById(idContent1);
  const content2 = document.getElementById(idContent2);
  const header = document.querySelector('header');
  if (!mask1 || !mask2 || !content1 || !content2 || !header) {
    return false;
  }
  return { mask1, mask2, content1, content2, header };
};

// GET BLACK BLOCKS
export const getBlackBlocks = (blocksName: string) => {
  const elements: HTMLElement[] = Array.from(document.querySelectorAll(".black-block"));
  return elements.length == 0 ? false : elements;
}

// GET START AND END POINTS BLACK BLOCKS
export const getStartEndPoints = (blackBlocks: HTMLElement[]) => {
  const points: tabPoint = [];
  blackBlocks.forEach((el: HTMLElement) => {
    const startPoint = el.getBoundingClientRect().y;
    const elHeight = el.getBoundingClientRect().height;
    const endPoint = startPoint + elHeight;
    points.push({
      type: "startPoint",
      distance: startPoint,
    });
    points.push({
      type: "endPoint",
      distance: endPoint,
    });
  });
  return points;
}

// GET NEAREST POINT 
export const getNearestPoint = (pointsTab: tabPoint) => {
  let nearestPoint: point = pointsTab[0];
  pointsTab.forEach((point: point) => {
    const isNearer = Math.abs(nearestPoint.distance) > Math.abs(point.distance)
    if (isNearer) {
      nearestPoint = point;
    }
  });
  return nearestPoint;
};

// WRAPPING FUNCTION
const colorChanger = (headerNames: HeaderNames, blackBlockName: string) => {

  const headerElements = getHeaderElements(headerNames);
  const blackBlocks = getBlackBlocks(blackBlockName);
  if (headerElements && blackBlocks) {

    const { mask1, mask2, content1, content2, header } = headerElements;
    const heightHeader = header.getBoundingClientRect().height;
    const StartEndPoint = getStartEndPoints(blackBlocks);
    const nearestPoint = getNearestPoint(StartEndPoint);

    mask1.style.opacity = `1`;
    content1.style.opacity = `1`;
    mask2.style.opacity = `1`;
    content2.style.opacity = `1`;

    if (nearestPoint.type == "startPoint") {
      const distanceWithoutHeader = nearestPoint.distance - heightHeader;
      let procentHeight;
      if (distanceWithoutHeader > 0) {
        mask1.style.transform = `translateY(0)`;
        content1.style.transform = `translateY(0)`;
        mask2.style.transform = `translateY(100%)`;
        content2.style.transform = `translateY(-100%)`;
      } else if (
        distanceWithoutHeader <= 0 &&
        distanceWithoutHeader >= -heightHeader
      ) {
        procentHeight = Math.round(100 * (-distanceWithoutHeader / 70));
        mask1.style.transform = `translateY(-${procentHeight}%)`;
        content1.style.transform = `translateY(${procentHeight}%)`;
        mask2.style.transform = `translateY(${100 - procentHeight}%)`;
        content2.style.transform = `translateY(-${100 - procentHeight}%)`;
      } else if (distanceWithoutHeader < -heightHeader) {
        procentHeight = 0;
        mask1.style.transform = `translateY(100%)`;
        content1.style.transform = `translateY(-100%)`;
        mask2.style.transform = `translateY(0)`;
        content2.style.transform = `translateY(0)`;
      }
    }

    
    if (nearestPoint.type == "endPoint") {
      const distanceWithoutHeader = nearestPoint.distance - heightHeader;
      let procentHeight;
      if (distanceWithoutHeader > 0) {
        mask1.style.transform = `translateY(100%)`;
        content1.style.transform = `translateY(-100%)`;
        mask2.style.transform = `translateY(0)`;
        content2.style.transform = `translateY(0)`;
      } else if (
        distanceWithoutHeader <= 0 &&
        distanceWithoutHeader >= -heightHeader
      ) {
        procentHeight = Math.round(100 * (-distanceWithoutHeader / 70));
        mask1.style.transform = `translateY(${100 - procentHeight}%)`;
        content1.style.transform = `translateY(-${100 - procentHeight}%)`;
        mask2.style.transform = `translateY(-${procentHeight}%)`;
        content2.style.transform = `translateY(${procentHeight}%)`;
      } else if (distanceWithoutHeader < -heightHeader) {
        mask1.style.transform = `translateY(0)`;
        content1.style.transform = `translateY(0)`;
        mask2.style.transform = `translateY(100%)`;
        content2.style.transform = `translateY(-100%)`;
      }
    }
  }
};
export default colorChanger;
