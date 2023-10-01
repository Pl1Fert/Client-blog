import { CATEGORIES } from "@/constants";

export interface CategoryItemProps {
    small?: boolean;
    onClick?: () => void;
    item: (typeof CATEGORIES)[0];
}
