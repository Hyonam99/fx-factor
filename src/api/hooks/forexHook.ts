import { getLatestPrice } from 'api/services/forexService';
import { useState } from 'react';

export const useGetLatestPrice = () => {

    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    return {
        call: () => {
            setIsLoading(true)
            getLatestPrice()
                .then(res => { setData(res); setIsLoading(false); setIsSuccess(true); setError(null) })
                .catch(err => { setError(err.response.data); setIsLoading(false); setIsSuccess(false); setData(null) })
        },
        data,
        isLoading,
        error,
        isSuccess
    }
}
