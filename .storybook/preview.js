import { ThemeProvider } from "styled-components"
import { StylesGlobal } from "../src/styles/styles.global"
import {theme} from "../src/styles/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme} >
      <StylesGlobal/>
      <Story />
    </ThemeProvider>
  )
]