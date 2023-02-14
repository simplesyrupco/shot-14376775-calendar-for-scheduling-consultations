import { FC } from 'react'
import { BellIcon } from '~/vectors/BellIcon'

type Props = {
    hasNotifications?: boolean
}

export const NotificationBell: FC<Props> = ({ hasNotifications = false }) => {
    return (
        <div className="h-9 w-9 bg-indigo-500 rounded-3 relative flex items-center justify-center">
            {hasNotifications ? (
                <div className="absolute -right-1 -top-1 bg-pink-500 border-white border-solid border-2 w-3 h-3 rounded-full" />
            ) : null}
            <BellIcon className="w-5 h-5" color="white" />
        </div>
    )
}
