import { FC, SVGProps } from 'react'
import { getMenuIconColors } from '~/constants/colors'

type Props = {
    isActive?: boolean
    className?: string
} & SVGProps<SVGSVGElement>

export const HappyIcon: FC<Props> = ({
    isActive = false,
    className,
    ...props
}) => {
    const colors = getMenuIconColors(isActive)

    return (
        <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <circle cx="8" cy="8" r="8" fill={colors.bg} />
            <path
                d="M4 9C4.5 10 6.25 11.7 8.25 11.7C10.25 11.7 11.8333 10 12.5 9"
                stroke={colors.accent}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    )
}
