import { FormErrorsState, FormState } from "./contactForm.interfaces";

export const initialState: FormState = {
    name: "",
    email: "",
    query: "",
    message: "",
};

export const initialErrors: FormErrorsState = {
    name: false,
    email: false,
    query: false,
    message: false,
};
