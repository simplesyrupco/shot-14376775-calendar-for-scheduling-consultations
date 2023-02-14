import { FC } from 'react'

type Props = {
    color?: string
    className?: string
}

export const ChevronDown: FC<Props> = ({ color, className, ...props }) => {
    return (
        <svg
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            className={className}
            {...props}
        >
            <path
                d="M1 1L4.5 4.5L8 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
