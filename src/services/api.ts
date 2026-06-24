const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

interface StrapiSingleResponse<T> {
    data: T;
    meta: {};
}

interface StrapiCollectionResponse<T> {
    data: T[];
    meta: Record<string, unknown>;
}

export interface CompanyInfo {
    id: number;
    documentId: string;
    companyId: string;
    phoneMain: string;
    phoneAdd: string;
    mailMain: string;
    mailSupport: string;
    location: string;
    workTime: string;
}

export interface CompanyObject {
    id: number;
    documentId: string;
    title: string;
    text: string;
    values: {
        square: string;
        guardians: string;
        since: string;
    }
    img?: [{
        url: string;

    }
    ]
    img_text: string;
}

export async function fetchCompanyInfo(): Promise<CompanyInfo | null> {

    const response = await fetch(`${API_URL}/api/company-infos/vd1hcwpxc5x40rpxgav2iphx`, {

        headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch company info: ${response.statusText}`);
    }
    const result: StrapiSingleResponse<CompanyInfo> = await response.json();
    return result.data || null;
}


export async function fetchCompanyObjects(): Promise<CompanyObject[]> {
    const response = await fetch(`${API_URL}/api/company-objects?populate=*`, {
        headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }

    const result: StrapiCollectionResponse<CompanyObject> = await response.json();
    console.log("Сырой ответ от Strapi:", result);
    return result.data || [];
}