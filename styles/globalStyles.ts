import { css } from '@emotion/react';
import {
  darkThemeScheme,
  darkThemeVariables,
  lightThemeScheme,
  lightThemeVariables,
} from './theme';

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  html,
  body,
  #_next {
    width: 100%;
    min-height: 100vh;
    font-size: 62.5%;
    letter-spacing: -0.2px;
  }

  // @media (prefers-color-scheme: light) {
  //   html {
  //     ${lightThemeVariables};
  //     color: ${lightThemeScheme.contrast};
  //     background-color: ${lightThemeScheme.theme};
  //   }
  // }

  // @media (prefers-color-scheme: dark) {
  //   html {
  //     ${darkThemeVariables};
  //     color: ${darkThemeScheme.contrast};
  //     background-color: ${darkThemeScheme.theme};
  //   }
  // }

  html {
    ${lightThemeVariables};
    color: ${lightThemeScheme.contrast};
    background-color: ${lightThemeScheme.theme};
  }

  // html[data-theme='dark'] {
  //   ${darkThemeVariables};
  //   color: ${darkThemeScheme.contrast};
  //   background-color: ${darkThemeScheme.theme};
  // }

  a {
    color: inherit;
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // Firefox
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
