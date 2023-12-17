import { type CourseItemType } from "./types"

export interface Forex {
    currency: string
}

export interface CoursesProps {
    limit?: number
    heading?: string
    subText?: string
}

export interface CourseCardProps {
    courseItem: CourseItemType
    animationDelay?: number
}

export interface MiniCardProps {
    cardTitle?: string
    cardDetails: string
    imageUrl?: string
    avatarAlt?: string
    icon?: any
}
