export interface IStrapiMedia {
    id?: number;
    documentId?: string;
    url?: string;
    name?: string;
    alternativeText?: string;
}

export interface ICompanyInfo {
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
    personal: {
        phisical?: {
            name: string;
            department: string;
            job: string;
            phone: string;
            phoneExt: string;
            jobTime: string;
            jobBreak: string;
        } | null;
        technical?: {
            name: string;
            department: string;
            job: string;
            phone: string;
            phoneExt: string;
            jobTime: string;
            jobBreak: string;
        } | null;
    }
}

export interface ICompanyObject {
    id: number;
    documentId: string;
    title: string;
    text: string;
    values: {
        square: string;
        guardians: string;
        since: string;
    }
    img?: IStrapiMedia;
    img_text: string;
}

export interface ICompanyReview {
    id: number;
    documentId: string;
    text: string;
    name: string;
    company: string;


}

export interface ICompanyService {
    id: number;
    documentId: string;
    title: string;
    text: string;
    price: number;
    link: string;
    img?: IStrapiMedia;
}

export interface IStrapiFile {
    id: number;
    documentId?: string;
    url: string;
    title: string;
    file?: IStrapiMedia;
}