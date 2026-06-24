
interface ICompanyInfo {
    id: number;
    documentId: string;
    companyId: string;
    phoneMain: string;
    phoneAdd: string;
    mailMain: string;
    mailSupport: string;
    location: string;
    workTime: string;
    yuS: {
        city: string;
        address: string;
        phone: string;
    }[];
    korsakov: {
        city: string;
        address: string;
        phone: string;
    }[]
}

interface ICompanyObject {
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
export type { ICompanyInfo, ICompanyObject }