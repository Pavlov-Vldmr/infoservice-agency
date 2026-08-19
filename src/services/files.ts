import type { IStrapiFile } from "./api.types";
import { type StrapiCollectionResponse,strapiFetch } from "./strapiClient";
export type { IStrapiFile }

export async function fetchFiles(): Promise<IStrapiFile[]> {
    try {
        const query = new URLSearchParams({ populate: '*' }).toString();
        const result = await strapiFetch<StrapiCollectionResponse<IStrapiFile>>(`fajlies?${query}`);
        return result.data || [];
    } catch (error) {
        console.error("Ошибка при получении файлов:", error);
        return [];
    }
}
