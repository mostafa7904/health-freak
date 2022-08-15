// Utilities
import {
  classToHex,
  isCssColor,
  parseGradient,
  contrastRatio,
  parseHex,
  HexToRGBA
} from './color'

// Constants
import colors from '~/constants/colors'
const contrastRatioThreshold = 12.7

function genTextColor(color: string) {
  if (!color) return {}

  const cssColor = !isCssColor(color) ? classToHex(color, colors) : color

  return {
    color: cssColor,
    caretColor: cssColor
  }
}

function genBoxShadowColor(color: string) {
  if (!color) return {}
  const cssColor = !isCssColor(color) ? classToHex(color, colors) : color

  return {
    boxShadow: `0 10px 20px -10px ${cssColor}`
  }
}

function genBackgroundColor(color: string) {
  if (!color) return {}
  const cssColor = !isCssColor(color) ? classToHex(color, colors) : color
  const white_rgba = HexToRGBA('#fff')
  const contrastWithWhite = contrastRatio(
    HexToRGBA(parseHex(cssColor)),
    white_rgba
  )
  const styles: any = {
    backgroundColor: cssColor,
    borderColor: cssColor,
    color: contrastWithWhite > contrastRatioThreshold ? '#000' : '#fff'
  }

  for (const key in styles) {
    const element = styles[key]
    if (!element) delete styles[key]
  }

  return styles
}

function genBorderColor(color: string) {
  if (!color) return {}
  const cssColor = !isCssColor(color) ? classToHex(color, colors) : color
  return {
    borderColor: cssColor
  }
}

function genGradientColor(gradient: string) {
  return {
    backgroundImage: `linear-gradient(${parseGradient(gradient, colors)})`
  }
}

export {
  genTextColor,
  genBackgroundColor,
  genBorderColor,
  genGradientColor,
  genBoxShadowColor
}
