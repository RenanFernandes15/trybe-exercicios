export const getSquareArea = (side: number): number => side ** 2;

export const getRectangleArea = (base: number, height: number): number => base * height;

export const getTriangleArea = (base: number, height: number): number => (base * height) / 2;

export const getPolygonPerimeter = (sides: number[]): number => sides.reduce((sum, side) => sum + side, 0);

export function triangleCheck(sideA: number, sideB: number, sideC: number): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB - sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideC);
  return checkSideA && checkSideB && checkSideC;
}