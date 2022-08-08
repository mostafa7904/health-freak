// Utilities
import colors from "~/constants/colors";
import {
  classToHex,
  isCssColor,
  parseGradient,
  contrastRatio,
  parseHex,
  HexToRGBA,
} from "./color";

interface BorderModifiers {
  top?: Boolean;
  right?: Boolean;
  bottom?: Boolean;
  left?: Boolean;
}

function genTextColor(color: string) {
  const cssColor = !isCssColor(color) ? classToHex(color, colors) : color;

  return {
    color: cssColor,
    caretColor: cssColor,
  };
}

function genBackgroundColor(color: string) {
  const cssColor = !isCssColor(color) ? classToHex(color, colors) : color;
  const white_rgba = HexToRGBA("#fff");
  const contrastWithWhite = cssColor
    ? contrastRatio(HexToRGBA(parseHex(cssColor)), white_rgba)
    : 5;

  const styles = {
    backgroundColor: cssColor,
    borderColor: cssColor,
    color: contrastWithWhite > 4.5 ? "#000" : "#fff",
  } as any;

  for (const key in styles) {
    const element = styles[key];
    if (!element) delete styles[key];
  }

  return styles;
}

function genBorderColor(color: string, modifiers?: BorderModifiers) {
  const cssColor = !isCssColor(color) ? classToHex(color, colors) : color;
  if (!modifiers || !Object.keys(modifiers).length) {
    return {
      borderColor: cssColor,
    };
  }

  if (modifiers.top) return { borderTopColor: cssColor };
  if (modifiers.right) return { borderRightColor: cssColor };
  if (modifiers.bottom) return { borderBottomColor: cssColor };
  if (modifiers.left) return { borderLeftColor: cssColor };
}

function genGradientColor(gradient: string) {
  return {
    backgroundImage: `linear-gradient(${parseGradient(gradient, colors)})`,
  };
}

export { genTextColor, genBackgroundColor, genBorderColor, genGradientColor };
