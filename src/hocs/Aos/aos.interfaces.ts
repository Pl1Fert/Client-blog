import { ReactNode } from "react";

export interface AosProps {
    children: ReactNode;
    reappear?: boolean;
    threshold?: number;
}
