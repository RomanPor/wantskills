import {IDataService} from "./services/data-service";

export type FormControl = {
    value: string,
    name: string,
    label: string,
    type?: string,
    valid?: boolean,
    touched?: boolean,
    errorMessage?: string,
    validation?: {
        required?: boolean,
        email?: boolean,
        minLength?: number,
    }
}

export type FormState = {
    successSubmit: boolean,
    errorSubmit: boolean,
    loadingSubmit: boolean,
    isFormValid: boolean,
    formControls: {
        [index: string]: FormControl,
    }
}

export type Event = {
    id: number,
    title: string,
    short_desc: string,
    date: string,
    price: string,
    view: number,
    scope: string[],
    promocode: string,
}

export type Social = {
    name: string,
    link: string
}

export type Sponsor = {
    title: string,
    scope: string[],
    contact: string,
    phone: string,
    email: string,
    success: string[],
}

export type About = {
    short_description: string,
    description: string,
    name: string,
    position: string,
    phone: string,
    email: string,
    telegram_title: string,
    telegram_link: string,
    image: string
}

export type Chat = {
    id: string,
    title: string,
    scope: string[],
    telegram_title: string,
    telegram_link: string,
}

export type OwnProps = {
    dataService: IDataService
}
