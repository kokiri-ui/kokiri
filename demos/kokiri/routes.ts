import DemoHome from './blocks/Home.vue';
import IconDemo from './blocks/Icon.vue';
import ButtonDemo from './blocks/Button.vue';
import TypographyDemo from './blocks/Typography.vue';
import ImageDemo from './blocks/Image.vue';
import BoxDemo from './blocks/Box.vue';
import FlexDemo from './blocks/Flex.vue';
import GridDemo from './blocks/Grid.vue';
import ToolbarDemo from './blocks/Toolbar.vue';
import PanelDemo from './blocks/Panel.vue';
import CardDemo from './blocks/Card.vue';
import TabsDemo from './blocks/Tabs.vue';

export default [
  { path: '/', component: DemoHome },
  { path: 'icon', name: 'icon', text: '图标 Icon', component: IconDemo },
  { path: 'button', name: 'button', text: '按钮 Button', component: ButtonDemo },
  { path: 'typography', name: 'typography', text: '排版 Typography', component: TypographyDemo },
  { path: 'image', name: 'image', text: '图片 Image', component: ImageDemo },
  { path: 'box', name: 'box', text: '盒子 Box', component: BoxDemo },
  { path: 'flex', name: 'flex', text: '弹性框 Flex', component: FlexDemo },
  { path: 'grid', name: 'grid', text: '栅格 Grid', component: GridDemo },
  { path: 'toolbar', name: 'toolbar', text: '工具栏 Toolbar', component: ToolbarDemo },
  { path: 'panel', name: 'panel', text: '面板 Panel', component: PanelDemo },
  { path: 'card', name: 'card', text: '卡片 Card', component: CardDemo },
  { path: 'tabs', name: 'tabs', text: '选项卡 Tabs', component: TabsDemo },
];
