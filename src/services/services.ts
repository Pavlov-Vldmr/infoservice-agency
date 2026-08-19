import type { ICompanyService } from "./api.types";
import { type StrapiCollectionResponse,strapiFetch } from "./strapiClient";
export type { ICompanyService }

export async function fetchCompanyServices(): Promise<ICompanyService[]> {
    try {
        const query = new URLSearchParams({ populate: '*' }).toString();
        const result = await strapiFetch<StrapiCollectionResponse<ICompanyService>>(`company-services?${query}`);
        return result.data || [];
    } catch (error) {
        console.error("Ошибка при получении услуг компании:", error);
        return [];
    }
}
