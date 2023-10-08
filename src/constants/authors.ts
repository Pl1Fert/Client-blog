import AuthorImage_8 from "@/assets/images/authors/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling.svg";
import AuthorImage_4 from "@/assets/images/authors/content-baker-with-delicious-puff-in-cafeteria.svg";
import AuthorImage_7 from "@/assets/images/authors/content-unshaven-man-covering-eye-with-yellow-flower.svg";
import AuthorImage_3 from "@/assets/images/authors/fashion-woman-cute-shoes.svg";
import AuthorImage_1 from "@/assets/images/authors/man-in-yellow.svg";
import AuthorImage_5 from "@/assets/images/authors/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses.svg";
import AuthorImage_2 from "@/assets/images/authors/woman-in-white.svg";
import AuthorImage_6 from "@/assets/images/authors/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses.svg";
import { AUTHORS_LINKS, BLOG_SOCIAL_LINKS } from "@/constants";

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
        posts: [1, 5],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
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
        posts: [2, 3],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
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
        posts: [2, 5, 6],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
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
        posts: [1, 5, 10],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
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
        posts: [],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
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
        posts: [8, 5],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
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
        posts: [7, 9],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
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
        posts: [2, 9],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
    },
];
