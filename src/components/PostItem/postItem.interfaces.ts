import { POSTS } from "@/constants";

export interface PostItemProps {
    post: (typeof POSTS)[0];
    lng: string;
    column?: boolean;
    small?: boolean;
}
