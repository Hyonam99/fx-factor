import { fxService, API_KEY } from "api"

export const getLatestPrice = async () => {
    const response = fxService.get(`/latest?id=1,2,4,5&access_key=${API_KEY}`)
    return (await response).data
}
