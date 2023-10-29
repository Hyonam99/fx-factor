import { fxService, API_KEY } from "api"
export const getLatestPrice = async () => {
    const response = fxService.get(`/latest?id=1,2,4,5&access_key=${API_KEY}`)
    return (await response).data
}

export const getCurrencyDetails = async () => {
    const response = fxService.get(`/profile?symbol=EUR/USD&access_key=${API_KEY}`)
    return (await response).data
}

export const getGist = async (courseId: string) => {
    const response = fxService.get(`https://api.github.com/gists/${courseId}`)
    return (await response).data
}
