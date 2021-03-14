import ICONS from "../constants/icons"

const getIcon = iconName => {
  let icon = ''

  switch (iconName) {
    case 'email':
      icon = ICONS.EMAIL
      break
    case 'github':
      icon = ICONS.GITHUB
      break
    case 'linkedin':
      icon = ICONS.LINKEDIN
      break
    default:
      icon = ''
      break
  }

  return icon
}

export default getIcon