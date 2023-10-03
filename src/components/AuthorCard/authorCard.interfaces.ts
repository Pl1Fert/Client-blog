import { AUTHORS } from "@/constants";

export interface AuthorCardProps {
    author: (typeof AUTHORS)[0];
    lng: string;
}
