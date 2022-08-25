import { useState, useEffect } from 'react';

export type TApiResponse = {
    status: number;
    statusText: string;
    data: any;
    error: any;
    loading: boolean;
};

export const useApiGet = (url: string): TApiResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const getAPIData = async () => {
        setLoading(true);
        try {
            const apiResponse = await fetch(url);
            const { articles } = await apiResponse.json();
            setStatus(apiResponse.status);
            setStatusText(apiResponse.statusText);
            setData(articles);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getAPIData();
    }, []);

    return { status, statusText, data, error, loading };
};
