import { FC, SVGProps } from 'react'
import { getMenuIconColors } from '~/constants/colors'

type Props = {
    isActive?: boolean
    className?: string
} & SVGProps<SVGSVGElement>

export const ProfileIcon: FC<Props> = ({
    isActive = false,
    className,
    ...props
}) => {
    const colors = getMenuIconColors(isActive)

    return (
        <svg
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <circle cx="9" cy="9" r="9" fill={colors.bg} />
            <circle cx="9" cy="6" r="1.5" fill={colors.accent} />
            <path
                d="M9 8V8C9 8 13 8 13 12.0002C13 12.5525 12.5523 13.0002 12 13.0002H6C5.44772 13.0002 5 12.5525 5 12.0002C5 8 9 8 9 8Z"
                fill={colors.accent}
            />
        </svg>
    )
}
