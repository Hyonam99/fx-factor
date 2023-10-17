export type CourseItemType = {
    id?: string
    courseImage: string | undefined
    courseIntro?: string
    courseTitle: string
    courseDescription: string
    courseHighlights?: string[]
    courseUsp?: string[]
    courseOutro?: string
    coursePrice?: number
    rating?: number
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

export type ForexPricePairs = {
    id: string // "1"
    o: string // "1.07273" - open
    h: string // "1.07532" - high
    l: string // "1.06316" - low
    c: string // "1.06384" - Price/Close, Current price
    ch: string // "-0.00889" - Change in 1 day candle
    cp: string // "-0.83%" - Change in percentage
    t: string // "1694715339" - When update last time Time Unix Format (UTC)
    s: string // "EUR/USD" - Symbol
    tm: string // "2023-09-14 18:15:39" -When update last time (UTC)
    a: string // "3.674465" - Ask
    b: string // "3.671711" - Bid
}

export type HistoryResponse = {
    c: string // "1.06384" - close, Current price
    h: string // "1.07532" - high
    l: string // "1.06316" - low
    o: string // "1.07273" - open
    t: number // "1694715339" - Time Unix Format (UTC)
    tm: string // "2023-09-14 18:15:39" - Date time (UTC)
    v: string // "" - empty
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
