export interface ParsedThemeItem {
  base: string
  lighten5: string
  lighten4: string
  lighten3: string
  lighten2: string
  lighten1: string
  darken1: string
  darken2: string
  darken3: string
  darken4: string
}

export type ThemeItem = Partial<ParsedThemeItem> | string | number | undefined

export interface ThemeVariants {
  [name: string]: ThemeItem | string | number | undefined

  primary: ThemeItem
  secondary: ThemeItem
  accent: ThemeItem
  info: ThemeItem
  warning: ThemeItem
  error: ThemeItem
  success: ThemeItem
  anchor?: string | number
}

export interface Theme {
  dark: boolean
  primary: string
  themes: {
    dark: ThemeVariants
    light: ThemeVariants
  }
  readonly currentTheme: Partial<ThemeVariants>
}
