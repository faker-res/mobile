import 'vant/lib/index.css'

import { Button, Swipe, SwipeItem, NoticeBar, Icon,  Collapse, CollapseItem,Toast,Tabs,Tab,Popup ,Picker, Checkbox, CheckboxGroup,Loading,Cell,CellGroup ,PullRefresh,List,Slider } from 'vant'

export default {
  install (Vue) {
    Vue.use(Button)
      .use(Swipe)
      .use(SwipeItem)
      .use(NoticeBar)
      .use(Icon)
      .use(Collapse)
      .use(CollapseItem)
      .use(Toast)
      .use(Tabs)
      .use(Tab)
      .use(Popup)
      .use(Picker)
      .use(Checkbox)
      .use(CheckboxGroup)
      .use(Loading)
      .use(Cell)
      .use(CellGroup)
      .use(PullRefresh)
      .use(List)
      .use(Slider)
  }
}
