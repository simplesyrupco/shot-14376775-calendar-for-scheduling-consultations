import { useCallback, useState } from 'react'
import { MenuItem } from '~/components/MenuItem'
import { ChevronRight } from '~/vectors/ChevronRight'
import { Logo } from './Logo'
import { items as menuItems, MenuKey } from '~/constants/menu'
import { motion } from 'framer-motion'

export const Menu = () => {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false)
    const [selectedMenuItem, setSelectedMenuItem] = useState(MenuKey.clock)

    const handleMenuToggle = useCallback(() => {
        setIsMenuExpanded(!isMenuExpanded)
    }, [isMenuExpanded])

    return (
        <motion.div
            layout="position"
            style={{ width: isMenuExpanded ? '230px' : '80px' }}
            className="w-20 border-r border-gray-200"
        >
            <div className="flex items-center justify-center mx-3.5 h-20 border-b border-gray-200">
                <motion.div layout="position" className="w-12.5 h-12.5">
                    <Logo />
                </motion.div>
            </div>
            <div className="flex py-6.5 flex-col space-y-2 items-center justify-center relative">
                <motion.div
                    layout="position"
                    onClick={() => handleMenuToggle?.()}
                    whileTap={{ scale: 0.9 }}
                    style={{ rotate: isMenuExpanded ? 180 : 0 }}
                    className="absolute cursor-pointer flex justify-center items-center -right-2.5 top-2 w-5 h-5 rounded-2 bg-indigo-500"
                >
                    <ChevronRight
                        width={6}
                        height={9}
                        color="white"
                        className=" translate-x-px"
                    />
                </motion.div>
                {menuItems.map((item) => {
                    const { key, icon, iconWidth, iconHeight, label } = item
                    return (
                        <MenuItem
                            key={key}
                            icon={icon}
                            label={label}
                            iconWidth={iconWidth}
                            iconHeight={iconHeight}
                            isActive={selectedMenuItem === key}
                            onClick={() => setSelectedMenuItem(key)}
                            isMenuExpanded={isMenuExpanded}
                        />
                    )
                })}
            </div>
        </motion.div>
    )
}
