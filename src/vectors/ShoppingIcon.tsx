import { FC, SVGProps } from 'react'
import { getMenuIconColors } from '~/constants/colors'

type Props = {
    isActive?: boolean
    className?: string
} & SVGProps<SVGSVGElement>

export const ShoppingIcon: FC<Props> = ({
    isActive = false,
    className,
    ...props
}) => {
    const colors = getMenuIconColors(isActive)

    return (
        <svg
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <rect
                x="4"
                y="1.25"
                width="5.5"
                height="8.5"
                rx="2.75"
                stroke={colors.accent}
                strokeWidth="1.5"
            />
            <path
                d="M0.77 6.04545C0.77 5.46807 1.23647 5 1.81 5H11.69C12.2635 5 12.73 5.46807 12.73 6.04545L13.5 14.4091C13.5 15.5639 12.5701 16.5 11.4231 16.5H2.07692C0.92987 16.5 0 15.5639 0 14.4091L0.77 6.04545Z"
                fill={colors.bg}
            />
        </svg>
    )
}
