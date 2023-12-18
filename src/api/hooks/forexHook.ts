import { getGist } from 'api/services/forexService';
import { useState } from 'react';

// Implement react-query for this

export const useGetCourseContent = () => {

    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    return {
        call: (courseId: string) => {
            setIsLoading(true)
            getGist(courseId)
                .then(res => { setData(res); setIsLoading(false); setIsSuccess(true); setError(null) })
                .catch(err => { setError(err); setIsLoading(false); setIsSuccess(false); setData(null) })
        },
        data,
        isLoading,
        error,
        isSuccess
    }
}
