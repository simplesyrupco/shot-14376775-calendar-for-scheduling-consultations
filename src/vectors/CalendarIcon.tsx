import { FC, SVGProps } from 'react'
import { getMenuIconColors } from '~/constants/colors'

type Props = {
    isActive?: boolean
    className?: string
} & SVGProps<SVGSVGElement>

export const CalendarIcon: FC<Props> = ({
    isActive = false,
    className,
    ...props
}) => {
    const colors = getMenuIconColors(isActive)

    return (
        <svg
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M1 2C0.447754 2 0 2.44775 0 3V6H17V3C17 2.44775 16.5522 2 16 2H1Z"
                fill={colors.bg}
            />
            <path
                d="M1 2C0.447754 2 0 2.44775 0 3V6H17V3C17 2.44775 16.5522 2 16 2H1Z"
                fill={colors.bg}
            />
            <path
                d="M1 2C0.447754 2 0 2.44775 0 3V6H17V3C17 2.44775 16.5522 2 16 2H1Z"
                fill={colors.bg}
            />
            <path
                d="M17 8H0V17C0 17.5522 0.447754 18 1 18H16C16.5522 18 17 17.5522 17 17V8Z"
                fill={colors.bg}
            />
            <path
                d="M17 8H0V17C0 17.5522 0.447754 18 1 18H16C16.5522 18 17 17.5522 17 17V8Z"
                fill={colors.bg}
            />
            <path
                d="M17 8H0V17C0 17.5522 0.447754 18 1 18H16C16.5522 18 17 17.5522 17 17V8Z"
                fill={colors.bg}
            />
            <rect
                x="15"
                y="10"
                width="2"
                height="5"
                rx="1"
                transform="rotate(90 15 10)"
                fill={colors.accent}
            />
            <rect
                x="11.4999"
                width="2"
                height="5"
                rx="1"
                fill={colors.accent}
            />
            <rect x="3" width="2" height="5" rx="1" fill={colors.accent} />
        </svg>
    )
}
