import type { ICompanyReview } from "./api.types";
import { type StrapiCollectionResponse, strapiFetch } from "./strapiClient";

export type { ICompanyReview }

export async function fetchCompanyReviews(): Promise<ICompanyReview[]> {
    try {
        const query = new URLSearchParams({ populate: '*' }).toString();
        const result = await strapiFetch<StrapiCollectionResponse<ICompanyReview>>(`company-reviews?${query}`);
        return result.data || [];
    } catch (error) {
        console.error("Ошибка при получении отзывов компании:", error);
        return [];
    }
}
