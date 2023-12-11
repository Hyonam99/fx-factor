export type CourseItemType = {
    id?: string
    courseImage: string | undefined
    courseIntro?: string
    courseTitle: string
    courseDescription: string
    courseHighlights?: string[]
    courseUsp?: string[]
    courseOutro?: string
    coursePrice: number
    rating?: number
    duration: string
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

export type ChartDataSet = {
    close: number // "1.06384" - close, Current price
    high: number // "1.07532" - high
    low: number // "1.06316" - low
    open: number // "1.07273" - open
    time: number // "1694715339" - Time Unix Format (UTC)
}

export type GistContentResponse = {
    content: string
    filename: string
    language: string
    raw_url: string
    size: number
    truncated: boolean
    type: string
}
