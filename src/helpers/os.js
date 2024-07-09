export const getOs = () => {
  let os = process.platform
  if (os === 'linux'){
    return '/usr/bin/chromium-browser'
  } else {
    return ''
  }
}
