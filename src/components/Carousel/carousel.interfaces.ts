import { TESTIMONIALS_CARDS } from "@/constants";

export interface CarouselProps {
    items: typeof TESTIMONIALS_CARDS;
    supTitle: string;
    title: string;
    text: string;
}
