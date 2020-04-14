/**
 * FIXME:
 * 为了删除对 core 中代码的依赖而创建，
 * 理论上不应该依赖其他库，
 * 或者只依赖 SDK
 */

enum IconType {
  IconFont = 'iconfont', // 图标字体
  SVG = 'svg', // SVG 格式
  Image = 'image', // 普通图片格式
}

// 图标的数据格式，有 id 但是前端不使用，不列出
interface IIcon {
  name: string; // 图标名称
  iconType: IconType;
  displayName: string; // 选择的时候展示的名称
  iconName?: string; // 如果是图标字体，给一个具体的图标 Key
  file?: {
    url: string;
  }; // 如果是 svg 或者其他图片格式，给一个文件模型的记录，包含 url 字段
}

export { IconType, IIcon };
