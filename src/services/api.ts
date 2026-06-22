// // src/services/api.ts
// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';
// const API_TOKEN = import.meta.env.VITE_API_TOKEN;

// interface StrapiResponse<T> {
//     data: T;
//     meta: {
//         pagination?: {
//             page: number;
//             pageSize: number;
//             pageCount: number;
//             total: number;
//         };
//     };
// }

// interface CompanyInfo {
//     // id: number;
//     // documentId: string;
//     // title: string;
//     // content: string;
//     // slug: string;
//     // publishedAt: string;
//     companyId: string;
//     phoneMain: string;
//     phoneAdd: string;
//     mailMain: string;
//     mailSupport: string;
//     location: string;
//     workTime: string;
// }

// export async function fetchCompanyInfo(): Promise<CompanyInfo[]> {
//     const response = await fetch(`${API_URL}/api/company-info?documentId=vd1hcwpxc5x40rpxgav2iphx`, {
//         headers: {
//             'Authorization': `Bearer ${API_TOKEN}`,
//             'Content-Type': 'application/json',
//         },
//     });

//     if (!response.ok) {
//         throw new Error(`Failed to fetch articles: ${response.statusText}`);
//     }

//     const result: StrapiResponse<CompanyInfo[]> = await response.json();
//     return result.data;
// }


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';
const API_TOKEN = import.meta.env.VITE_API_TOKEN;
console.log(API_TOKEN)

// Одиночный ответ от Strapi v5
interface StrapiSingleResponse<T> {
    data: T;
    meta: {};
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

    // 2. Типизируем как одиночный объект
    const result: StrapiSingleResponse<CompanyInfo> = await response.json();

    return result.data || null;
}
