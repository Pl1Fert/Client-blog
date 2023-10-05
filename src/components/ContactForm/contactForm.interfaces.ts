export interface FormState {
    name: string;
    email: string;
    query: string;
    message: string;
}

export interface FormErrorsState {
    name: boolean;
    email: boolean;
    query: boolean;
    message: boolean;
}

export interface FormProps {
    lng: string;
}
