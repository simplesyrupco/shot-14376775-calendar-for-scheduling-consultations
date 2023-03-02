import { CalendarIcon } from '~/vectors/CalendarIcon'
import { ChatIcon } from '~/vectors/ChatIcon'
import { ClockIcon } from '~/vectors/ClockIcon'
import { HappyIcon } from '~/vectors/HappyIcon'
import { ProfileIcon } from '~/vectors/ProfileIcon'
import { SettingsIcon } from '~/vectors/SettingsIcon'
import { ShoppingIcon } from '~/vectors/ShoppingIcon'

export enum MenuKey {
    calendar = 'calendar',
    chat = 'chat',
    clock = 'clock',
    happy = 'happy',
    shopping = 'shopping',
    profile = 'profile',
    settings = 'settings',
}

export const items = [
    {
        key: MenuKey.calendar,
        label: 'Calendar',
        icon: CalendarIcon,
        iconWidth: 17,
        iconHeight: 18,
    },
    {
        key: MenuKey.chat,
        label: 'Chat',
        icon: ChatIcon,
        iconWidth: 17,
        iconHeight: 16,
    },
    {
        key: MenuKey.clock,
        label: 'Time Tracking',
        icon: ClockIcon,
        iconWidth: 16,
        iconHeight: 16,
    },
    {
        key: MenuKey.happy,
        label: 'Surveys',
        icon: HappyIcon,
        iconWidth: 16,
        iconHeight: 16,
    },
    {
        key: MenuKey.shopping,
        label: 'E-Commerce',
        icon: ShoppingIcon,
        iconWidth: 14,
        iconHeight: 17,
    },
    {
        key: MenuKey.profile,
        label: 'Profile',
        icon: ProfileIcon,
        iconWidth: 18,
        iconHeight: 18,
    },
    {
        key: MenuKey.settings,
        label: 'Settings',
        icon: SettingsIcon,
        iconWidth: 20,
        iconHeight: 19,
    },
]
