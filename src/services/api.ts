const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

import { data } from "react-router-dom";
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

export async function fetchCompanyInfo(): Promise<ICompanyInfo | null> {
    try {
        const result = await strapiFetch<StrapiSingleResponse<ICompanyInfo>>(
            `company-infos/vd1hcwpxc5x40rpxgav2iphx?populate=*`
        );

        if (!result || !result.data) {
            throw new Error("Данные о компании не найдены в ответе API");
        }

        return result.data;
    } catch (error) {
        console.error("Ошибка при получении инфо о компании:", error);
        throw error;

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