import { FC, SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const ChevronRight: FC<Props> = ({ color, className, ...props }) => {
    return (
        <svg
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            className={className}
            {...props}
        >
            <path
                d="M1 1L4.5 4.5L1 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
