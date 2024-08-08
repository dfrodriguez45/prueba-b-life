export function isLightBackground(color: string) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  const calculateBrightness = (299 * r + 587 * g + 114 * b) / 1000;
  return calculateBrightness > 155;
}
