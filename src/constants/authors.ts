import AuthorImage_8 from "@/assets/images/authors/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling.svg";
import AuthorImage_4 from "@/assets/images/authors/content-baker-with-delicious-puff-in-cafeteria.svg";
import AuthorImage_7 from "@/assets/images/authors/content-unshaven-man-covering-eye-with-yellow-flower.svg";
import AuthorImage_3 from "@/assets/images/authors/fashion-woman-cute-shoes.svg";
import AuthorImage_1 from "@/assets/images/authors/man-in-yellow.svg";
import AuthorImage_5 from "@/assets/images/authors/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses.svg";
import AuthorImage_2 from "@/assets/images/authors/woman-in-white.svg";
import AuthorImage_6 from "@/assets/images/authors/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses.svg";
import { BLOG_SOCIAL_LINKS } from "@/constants";

const AUTHORS_LINKS = [
    [
        "https://www.facebook.com/1",
        "https://twitter.com/1",
        "https://www.instagram.com/1",
        "https://www.linkedin.com/1",
    ],
    [
        "https://www.facebook.com/2",
        "https://twitter.com/2",
        "https://www.instagram.com/2",
        "https://www.linkedin.com/2",
    ],
    [
        "https://www.facebook.com/3",
        "https://twitter.com/3",
        "https://www.instagram.com/3",
        "https://www.linkedin.com/3",
    ],
    [
        "https://www.facebook.com/4",
        "https://twitter.com/4",
        "https://www.instagram.com/4",
        "https://www.linkedin.com/4",
    ],
    [
        "https://www.facebook.com/5",
        "https://twitter.com/5",
        "https://www.instagram.com/5",
        "https://www.linkedin.com/5",
    ],
    [
        "https://www.facebook.com/6",
        "https://twitter.com/6",
        "https://www.instagram.com/6",
        "https://www.linkedin.com/6",
    ],
    [
        "https://www.facebook.com/7",
        "https://twitter.com/7",
        "https://www.instagram.com/7",
        "https://www.linkedin.com/7",
    ],
    [
        "https://www.facebook.com/8",
        "https://twitter.com/8",
        "https://www.instagram.com/8",
        "https://www.linkedin.com/8",
    ],
];

export const AUTHORS = [
    {
        id: 1,
        name: "Floyd Miles",
        role: "Content Writer @Company",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[0][index],
        })),
        img: AuthorImage_1 as string,
    },
    {
        id: 2,
        name: "Dianne Russell",
        role: "Content Writer @Company",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[1][index],
        })),
        img: AuthorImage_2 as string,
    },
    {
        id: 3,
        name: "Jenny Wilson",
        role: "Content Writer @Company",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[2][index],
        })),
        img: AuthorImage_3 as string,
    },
    {
        id: 4,
        name: "Leslie Alexander",
        role: "Content Writer @Company",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[3][index],
        })),
        img: AuthorImage_4 as string,
    },
    {
        id: 5,
        name: "Guy Hawkins",
        role: "Content Writer @Company",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[4][index],
        })),
        img: AuthorImage_5 as string,
    },
    {
        id: 6,
        name: "Eleanor Pena",
        role: "Content Writer @Company",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[5][index],
        })),
        img: AuthorImage_6 as string,
    },
    {
        id: 7,
        name: "Robert Fox",
        role: "Content Writer @Company",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[6][index],
        })),
        img: AuthorImage_7 as string,
    },
    {
        id: 8,
        name: "Jacob Jones",
        role: "Content Writer @Company",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[7][index],
        })),
        img: AuthorImage_8 as string,
    },
];
