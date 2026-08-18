import { strapiFetch, type StrapiSingleResponse } from "./strapiClient";
import type { ICompanyInfo } from "./api.types";
export type { ICompanyInfo }

export async function fetchCompanyInfo(): Promise<ICompanyInfo | null> {
    try {
        const result = await strapiFetch<StrapiSingleResponse<ICompanyInfo>>(
            // `company-info?populate[personal][populate]=*&populate[city][populate]=*`
            `company-info?populate[personal][populate][phisical]=*&populate[personal][populate][technical]=*&populate[city][populate]=*`
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
