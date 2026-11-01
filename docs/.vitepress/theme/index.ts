import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import FlowDiagram from './components/FlowDiagram.vue'
import PlannedNotice from './components/PlannedNotice.vue'
import DownloadCard from './components/DownloadCard.vue'
import StatusTable from './components/StatusTable.vue'
import VideoExample from './components/VideoExample.vue'
import ChapterGoals from './components/ChapterGoals.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('FlowDiagram', FlowDiagram)
    app.component('PlannedNotice', PlannedNotice)
    app.component('DownloadCard', DownloadCard)
    app.component('StatusTable', StatusTable)
    app.component('VideoExample', VideoExample)
    app.component('ChapterGoals', ChapterGoals)
  },
} satisfies Theme
