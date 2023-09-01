import { type CourseItem } from "./types"

export interface Forex {
    currency: string
}

export interface CoursesProps {
    limit?: number
    heading?: string
    subText?: string
}

export interface CourseCardProps {
    courseItem: CourseItem
}

export interface MiniCardProps {
    cardTitle?: string
    cardDetails: string
    imageUrl?: string
}
