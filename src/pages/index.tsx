import { LayoutGroup, motion } from 'framer-motion'
import { Avatar } from '~/components/Avatar'
import { Menu } from '~/components/Menu'
import { NotificationBell } from '~/components/NotificationBell'
import { MainLayout } from '~/layouts/main'
import { ChevronDown } from '~/vectors/ChevronDown'
import { MagnifyingGlassIcon } from '~/vectors/MagnifyingGlassIcon'

export default function Home() {
    return (
        <MainLayout>
            <div className="min-h-screen py-12 flex px-6 justify-center items-center">
                <div className="flex bg-white max-w-7xl w-full rounded-5">
                    <LayoutGroup>
                        <Menu />
                        <motion.div layout className="flex-1 pl-9 pr-8.5">
                            <div className="flex items-center h-20 border-b border-gray-200">
                                <div className="flex-1 pr-12.5">
                                    <div className="relative">
                                        <div className="absolute flex justify-center items-center top-0 left-0 bottom-0 w-15">
                                            <MagnifyingGlassIcon
                                                className="w-4.5 h-4.5"
                                                color="#B7BED6"
                                            />
                                        </div>
                                        <input
                                            placeholder="Search..."
                                            className="pl-15 py-4 pr-4 rounded-3 text-gray-900 bg-gray-100 w-full text-3.5 font-semibold"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-end space-x-8 ">
                                    <NotificationBell hasNotifications />
                                    <div className="flex items-center space-x-2">
                                        <Avatar />
                                        <div className="text-slate-600 text-3.5 font-bold tracking-tight">
                                            Belle Spencer
                                        </div>
                                        <ChevronDown className="text-slate-400 w-2" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </LayoutGroup>
                </div>
            </div>
        </MainLayout>
    )
}
