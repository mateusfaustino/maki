import colors from "./colors"
import { handleDefault } from "../functions"
    
const primary = (color) => `
   color: ${handleDefault(color, colors.text_onDark )};
   background-color: ${colors.primary};
`
const primary_light = (color) => `
   color: ${handleDefault(color, colors.text_onLight )};
   background-color: ${colors.primary_light};
`
const primary_dark = (color) => `
   color: ${handleDefault(color, colors.text_onDark )};
   background-color: ${colors.primary_dark};
`
const surface = (color) => `
   color: ${handleDefault(color, colors.text_onLight )};
   background-color: #ffffff;
`
const main = (color) => `
   color: ${handleDefault(color, colors.text_onLight )};
   background-color: #fafafa;
`
const error = (color) => `
color: ${handleDefault(color, colors.text_onLight )};
background-color: ${colors.error};
`

const success = (color) => `
   color: ${handleDefault(color, colors.text_onDark)};
   background-color: ${colors.success};
`

const hoverSuccess = (color) => `
   color: ${handleDefault(color, colors.text_onDark)};
   background-color: #27ae60;
`

const background = {
   primary: primary,
   primary_light: primary_light,
   primary_dark: primary_dark,
   main:main,
   surface:surface,
   error: error,
   success: success,
}
export const hover = {
   sucess:hoverSuccess
}

export default background