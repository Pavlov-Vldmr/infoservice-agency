
interface ICompanyInfo {
    documentId: string;
    companyId: string;
    phoneMain: string;
    phoneAdd: string;
    phoneEmergency?: string;
    mailMain: string;
    mailSupport: string;
    license: string;
    city: {
        yuS: {
            url: string;
            name: string;
            address: string;
            phone: string;
            workTime: string;
        };
        korsakov: {
            url: string;
            name: string;
            address: string;
            phone: string;
            workTime: string;
        }
    }

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