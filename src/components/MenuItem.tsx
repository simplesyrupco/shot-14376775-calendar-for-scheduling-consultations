import { FC, SVGProps } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
    isActive?: boolean
    icon: React.FC<{ isActive?: boolean } & SVGProps<SVGSVGElement>>
    label: string
    iconWidth?: number
    iconHeight?: number
    onClick?: () => void
    isMenuExpanded: boolean
}

export const MenuItem: FC<Props> = ({
    isActive = false,
    icon,
    label,
    iconWidth = 16,
    iconHeight = 16,
    onClick,
    isMenuExpanded,
}) => {
    const Icon = icon
    return (
        <div className=" w-full relative">
            <motion.div
                layout="position"
                onClick={() => onClick?.()}
                whileTap={{ scale: 0.9 }}
                className="flex group hover:cursor-pointer justify-start items-center"
            >
                <motion.div
                    layout="position"
                    className={`${
                        !isActive ? 'group-hover:bg-gray-50' : null
                    } rounded-3 py-4 px-4 mx-4 flex justify-center items-center`}
                >
                    {Icon && (
                        <Icon
                            width={iconWidth}
                            height={iconHeight}
                            isActive={isActive}
                        />
                    )}
                </motion.div>
                <AnimatePresence>
                    {isMenuExpanded ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            layout="position"
                            className="text-slate-600 text-3.5 font-bold tracking-tight whitespace-nowrap"
                        >
                            {label}
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </motion.div>
            <AnimatePresence>
                {isActive ? (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 4, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="absolute -right-px top-0 bottom-0 rounded-l-1.5 bg-rose-400"
                    />
                ) : null}
            </AnimatePresence>
        </div>
    )
}
