const darkTheme = '#171717'
const lightTheme = '#ffffff'
const logoTheme = '#333'
const fileColor = 'hsla(0,0%,100%,0.08)'
const border1  = '#c0c4cc'
const border2 = '#e5e6eb'
const border3  = '#f1f1f1'
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
    'theme-border-3': isLight ? border3 : fileColor,
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
  Object.keys(themeMap).forEach(key => {
    body.style.setProperty(`--${key}`, themeMap[key])
  })
}

