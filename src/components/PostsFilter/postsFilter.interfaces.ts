import { POSTS } from "@/constants";

export interface PostsFilterProps {
    lng: string;
    title: string;
    posts: typeof POSTS;
}
