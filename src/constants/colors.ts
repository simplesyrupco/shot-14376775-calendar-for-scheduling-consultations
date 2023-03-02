const menuIconColors = {
    inactive: {
        accent: '#494969',
        bg: '#E0E4E9',
    },
    active: {
        accent: '#FE6C85',
        bg: '#FED2DA',
    },
}

export const getMenuIconColors = (isActive: boolean) => {
    return isActive ? menuIconColors.active : menuIconColors.inactive
}
