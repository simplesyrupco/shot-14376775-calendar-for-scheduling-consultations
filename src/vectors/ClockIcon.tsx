import { FC, SVGProps } from 'react'
import { getMenuIconColors } from '~/constants/colors'

type Props = {
    isActive?: boolean
    className?: string
} & SVGProps<SVGSVGElement>

export const ClockIcon: FC<Props> = ({
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
                d="M8 9C7.6 9 7 8.45455 7 7.90909C7 7.36364 7.24846 3 8 3C8.75154 3 9 7.36364 9 7.90909C9 8.45455 8.4 9 8 9Z"
                fill={colors.accent}
            />
            <path
                d="M7.29736 7.80886C7.41628 7.42695 7.97885 6.97372 8.36302 7.09335C8.74719 7.21298 11.7467 8.40726 11.5232 9.12482C11.2998 9.84238 8.15255 9.12254 7.76837 9.00291C7.3842 8.88327 7.17843 8.19078 7.29736 7.80886Z"
                fill={colors.accent}
            />
        </svg>
    )
}
