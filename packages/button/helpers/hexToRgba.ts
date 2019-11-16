// transform hex color to rgba colors
export const hexToRgba = (hex: string, opacity: number): string => {
  const hexNumber = hex.replace('#', '');

  const r = parseInt(hexNumber.substring(0, 2), 16);
  const g = parseInt(hexNumber.substring(2, 4), 16);
  const b = parseInt(hexNumber.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
};
