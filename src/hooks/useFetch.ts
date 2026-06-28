import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
    data: T[];
    loading: boolean;
    error: string | null;
}

// <T> делает хук универсальным для любого типа данных
export function useFetch<T>(fetchFn: () => Promise<T[]>): UseFetchResult<T> {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function startFetch() {
            try {
                setLoading(true);
                const result = await fetchFn();
                if (isMounted) {
                    setData(result);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : 'Произошла ошибка при загрузке');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        startFetch();

        return () => {
            isMounted = false;
        };
    }, [fetchFn]);

    return { data, loading, error };
}
