import { FC } from 'react'
import { Avatar as AvatarSvg } from '~/vectors/Avatar'

export const Avatar: FC = () => {
    return (
        <div className="border-4 border-purple-100 rounded-full">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-fuchsia-300 flex justify-center items-end border-2 border-white shadow-sm shadow-purple-300">
                <AvatarSvg className="h-[85%]" />
            </div>
        </div>
    )
}
