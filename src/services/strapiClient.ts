export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export interface StrapiSingleResponse<T> {
    data: T;
    meta: Record<string, unknown>;
}

export interface StrapiCollectionResponse<T> {
    data: T[];
    meta: Record<string, unknown>;
}

// Хелпер для получения полного пути к медиафайлам Strapi
export const getStrapiMediaUrl = (url?: string) => url ? `${API_URL}${url}` : '';

export async function strapiFetch<T>(endpoint: string): Promise<T> {
    if (!API_TOKEN) {
        console.warn("API_TOKEN не задан. Запрос может завершиться ошибкой авторизации.");
    }
    const response = await fetch(`${API_URL}/api/${endpoint}`, {
        headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Strapi error [${response.status}]: ${response.statusText}`);
    }

    return response.json();
}
