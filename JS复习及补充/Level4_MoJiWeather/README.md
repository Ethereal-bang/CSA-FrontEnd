# 墨迹天气H5页面
技术栈：原生 JS、Sass、Echarts

## 搜索页
### 实现功能
+ 搜索:
  + 根据搜索框内容自动模糊匹配显示列表
  + 清空搜索框后列表隐藏
+ 当前城市：
  + 根据所选城市自动切换到主页城市并重新渲染主页数据 (*localStorage 实现*)
+ 记录:
  + 自动去重 (*闭包实现*)
  + 一键删除
+ 热搜城市:
  + 调用 API 显示
### 待完善
+ 搜索记录:
  + localStorage 持久化存储

## 主页
### 实现功能
+ 资讯:
  + 点击后跳转页面 (*非自制*)
+ 实时天气 `info_box`:
  + 调用 api 显示当前天气、温度、风力、湿度、空气质量
  + 天气描述用感冒指数描述 api 代替
  + 空气质量图标根据等级渲染 (*暂只有优、良、轻度污染、中度污染*)
+ 今明两天天气 `days`:
  + Api 获取温度、天气
  + 空气质量 (*`aqi.js` mock 数据*)
  + 天气图标根据实况渲染 (*暂只有常见天气*)
+ 24小时温度、风力 `hour24`:
  + 根据 tab 选择切换大小 *`class` 实现*
  + 调用 api 显示日落时间、温度、风速
+ 一周天气 `week_weather`：
  + 根据空气质量等级渲染背景颜色 (*`class`实现*)
  + 根据天气渲染天气图标
  + 空气质量指数假数据  (*`aqi.js` mock 数据*)
  + 天气曲线尺寸自适应 (*监听窗口变化，`chart.resize()`解决*)
+ 生活指数 `exponent`:
  + Api 获取当前城市生活指数等级
  + 根据指数类型加载图标 *`switch`*
+ 下载页面:
  + 点击跳转到墨迹 App 下载页面 (*非自制*)
### 待完善
+ 24小时温度、风力 `hour24`:
  + x 方向可以滑动
  + 下面小标的显示
+ 一周天气 `week_weather`：
  + ~~换城市后要刷新后才会更新~~ (*`location.reload`解决*)
  + 七天天气（第一天应为昨天）
  + 天气图标svg加载
