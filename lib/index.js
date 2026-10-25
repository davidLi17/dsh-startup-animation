/**
 * Node 半：启动动画只发生在浏览器里，这里只需要一个能被 loader 装载的插件壳。
 * 浏览器半由包声明里的 dsh.client 触发注入。
 */
export const name = 'startup-animation'

/** @param _ctx - cordis 上下文（本插件不使用宿主服务）。 */
export function apply(_ctx) {}
