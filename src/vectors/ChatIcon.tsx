import { FC, SVGProps } from 'react'
import { getMenuIconColors } from '~/constants/colors'

type Props = {
    isActive?: boolean
    className?: string
} & SVGProps<SVGSVGElement>

export const ChatIcon: FC<Props> = ({
    isActive = false,
    className,
    ...props
}) => {
    const colors = getMenuIconColors(isActive)

    return (
        <svg
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M2 0C0.895386 0 0 0.895386 0 2V14.5C0 15 0.199951 15.8 1 15L3 13H15C16.1046 13 17 12.1046 17 11V2C17 0.895386 16.1046 0 15 0H2Z"
                fill={colors.bg}
            />
            <circle cx="4.5" cy="6.5" r="1.5" fill={colors.accent} />
            <circle cx="8.5" cy="6.5" r="1.5" fill={colors.accent} />
            <circle cx="12.5" cy="6.5" r="1.5" fill={colors.accent} />
        </svg>
    )
}
