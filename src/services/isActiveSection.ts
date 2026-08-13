import { strapiFetch, type StrapiSingleResponse } from "./strapiClient";
import type { IIsActiveSection } from "./api.types";
export type { IIsActiveSection }

export async function fetchIsActiveSection(): Promise<IIsActiveSection | null> {
    try {
        const result = await strapiFetch<StrapiSingleResponse<IIsActiveSection>>(
            `is-active-section`
        );

        if (!result || !result.data) {
            throw new Error("Данные о секциях не найдены в ответе API");
        }

        return result.data;
    } catch (error) {
        console.error("Ошибка при получении инфо о секциях:", error);
        throw error;
    }
}
