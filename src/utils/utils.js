export const hexToRgb = (hexColor) => {
  const red = parseInt(hexColor.substring(1, 3), 16);
  const green = parseInt(hexColor.substring(3, 5), 16);
  const blue = parseInt(hexColor.substring(5, 7), 16);
  return `rgb(${red}, ${green}, ${blue})`;
};

export const rgbToRgba = (rgb, alpha) =>
  rgb.replace("rgb", "rgba").replace(")", `, ${alpha})`);
