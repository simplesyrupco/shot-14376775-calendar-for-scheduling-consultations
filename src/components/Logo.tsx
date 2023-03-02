import { Logo as LogoSvg } from '~/vectors/Logo'
import { FC } from 'react'

export const Logo: FC = () => {
    return (
        <div className="bg-[#FAE9F2] w-full aspect-square rounded-3.5 p-1.5">
            <div className="bg-[#F7D7E6] rounded-2.5 p-1 bg-gradient-to-tl from-[#B0B3FF] via-white to-[#F0BDDB] shadow-md shadow-purple-300">
                <div className="bg-black aspect-square rounded-[8px] flex justify-center items-center">
                    <LogoSvg />
                </div>
            </div>
        </div>
    )
}
