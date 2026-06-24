const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

import { type ICompanyInfo, type ICompanyObject } from "./api.types"

interface StrapiSingleResponse<T> {
    data: T;
    meta: {};
}

interface StrapiCollectionResponse<T> {
    data: T[];
    meta: Record<string, unknown>;
}

export type { ICompanyInfo, ICompanyObject } from './api.types';

async function strapiFetch<T>(endpoint: string): Promise<T> {
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

export async function fetchCompanyInfo(documentId: string): Promise<ICompanyInfo | null> {
    try {
        const result = await strapiFetch<StrapiSingleResponse<ICompanyInfo>>(`company-infos/${documentId}`);
        return result.data || null;
    } catch (error) {
        console.error("Ошибка при получении инфо о компании:", error);
        return null;
    }
}

export async function fetchCompanyObjects(): Promise<ICompanyObject[]> {
    try {
        const query = new URLSearchParams({ populate: '*' }).toString();
        const result = await strapiFetch<StrapiCollectionResponse<ICompanyObject>>(`company-objects?${query}`);
        return result.data || [];
    } catch (error) {
        console.error("Ошибка при получении объектов компании:", error);
        return [];
    }
}