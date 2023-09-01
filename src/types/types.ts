export type CourseItem = {
    id?: string
    courseImage: string | undefined
    courseTitle: string
    courseDescription: string
};

export type FAQType = {
    id: string
    question: string
    explanation: string
}

export type MiniCardType = {
    cardTitle?: string
    cardDetails: string
    imageUrl?: string
}
