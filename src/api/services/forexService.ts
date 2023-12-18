import { fxService } from "api"

export const getGist = async (courseId: string) => {
    const response = fxService.get(`https://api.github.com/gists/${courseId}`)
    return (await response).data
}
