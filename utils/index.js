/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

export function timeFix() {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}


const darkTheme = '#171717'
const lightTheme = '#ffffff'
const logoTheme = '#333'
const fileColor = 'hsla(0,0%,100%,0.08)'
const border1  = '#c0c4cc'
const border2 = '#e5e6eb'
const shadow = '030px 48px rgb(3 3 3 / 50%)'
const bg2 = '#f4f5f5'
const bg3 = '#202020'
const font1 = '#909090'
const font2 = '#4e5969'
const font3 = '#1d2129' // 文章标题默认
const font4 = 'rgb(246,246,246)'
const font5 = '#86909c' // 文章描述
const font6 = '#9fa8b1'
const font7 = '#4e5969'
const font8 = '#999ea5'
// 获取对应的主题色值
export const getThemeMap = (isLight) => {
  return {
    'theme-bg': isLight ? lightTheme : darkTheme,
    'theme-color': isLight ? logoTheme : lightTheme,
    'theme-bg-1': isLight ? darkTheme: lightTheme,
    'theme-bg-2': isLight ? bg2: darkTheme,
    'theme-bg-3': isLight ?  lightTheme: bg3,
    'theme-file-1': isLight ? lightTheme : fileColor,
    'theme-border-1': isLight ? border1 : fileColor,
    'theme-border-2': isLight ? border2 : fileColor,
    'theme-shadow': isLight ? '' : shadow,
    'color-font-1': isLight ? font1 : lightTheme,
    'color-font-2': isLight ? font2 : lightTheme,
    'color-font-3': isLight ? font3 : font4,
    'color-font-4': isLight ? font5 : font6,
    'color-font-5': isLight ? font5 : font6,
    'color-font-6': isLight ? font7 : font8,
  }
}

// 设置主题色值
export const setTheme = (mode) => {
  let isLight = mode === 'light' ? true : false
  const themeMap = getThemeMap(isLight)
  const body = document.body
  /* 实现方式一 */
  Object.keys(themeMap).forEach(key => {
    body.style.setProperty(`--${key}`, themeMap[key])
  })

  /* 实现方式二 */
  // body.style.setProperty('data-theme', isLight ? 'light' : 'dark')
}

