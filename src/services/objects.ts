import type { ICompanyObject } from "./api.types";
import { type StrapiCollectionResponse,strapiFetch } from "./strapiClient";

export type { ICompanyObject }

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
