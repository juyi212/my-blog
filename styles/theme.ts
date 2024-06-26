import { fontSize } from './font';
import { generateCSSVariablePalette, generateVariablePalette, palette } from './palette';

export const lightThemeScheme = {
  theme: '#f2f2f2',
  contrast: '#1f2e3d',

  background1: '#8F979E',
  background2: '#BCC0C5',
  background3: '#E4E6E8',
  background4: '#f9f9f9',

  border1: '#eaeaed',
  border2: '#dee2e6',
  border3: '#b5b5b5',
  border4: '#343a40',

  text1: '#626D77',
  text2: '#414D5A',
  text3: '#1B2937',
  text4: '#121D27',
};

export const darkThemeScheme = {
  theme: '#1f2e3d',
  contrast: '#f2f2f2',

  background1: '#626D77',
  background2: '#414D5A',
  background3: '#1B2937',
  background4: '#121D27',

  border1: '#2a2a2a',
  border2: '#4d4d4d',
  border3: '#a0a0a0',
  border4: '#e0e0e0',

  text1: '#8F979E',
  text2: '#BCC0C5',
  text3: '#E4E6E8',
  text4: '#f9f9f9',
};

export const lightThemeVariables = generateCSSVariablePalette({
  ...lightThemeScheme,
  ...palette,
});

export const lightThemePalette = generateVariablePalette({
  ...lightThemeScheme,
  ...palette,
});
console.log('lightThemePalette :', lightThemePalette);

export const darkThemeVariables = generateCSSVariablePalette({
  ...darkThemeScheme,
  ...palette,
});

export const darkThemePalette = generateVariablePalette({
  ...darkThemeScheme,
  ...palette,
});

export type CustomTheme = {
  fontSize: typeof fontSize;
  color: typeof lightThemePalette;
};
