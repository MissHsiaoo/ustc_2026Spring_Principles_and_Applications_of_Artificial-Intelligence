import DefaultTheme from "vitepress/theme"
import "./style.css"

import SyllabusPage from "../components/SyllabusPage.vue"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("SyllabusPage", SyllabusPage)
  },
}
