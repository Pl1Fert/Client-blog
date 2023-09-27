import darkFacebook from "@/assets/icons/socials/dark/Facebook.svg";
import darkInstagram from "@/assets/icons/socials/dark/Instagram.svg";
import darkLinkedln from "@/assets/icons/socials/dark/Linkedln.svg";
import darkTwitter from "@/assets/icons/socials/dark/Twitter.svg";
import lightFacebook from "@/assets/icons/socials/light/Facebook.svg";
import lightInstagram from "@/assets/icons/socials/light/Instagram.svg";
import lightLinkedln from "@/assets/icons/socials/light/Linkedln.svg";
import lightTwitter from "@/assets/icons/socials/light/Twitter.svg";

enum SocialsName {
    FACEBOOK = "Facebook",
    TWITTER = "Twitter",
    INSTAGRAM = "Instagram",
    LINKEDLN = "Linkedln",
}

enum BlogSocialPages {
    FACEBOOK = "https://www.facebook.com/",
    TWITTER = "https://twitter.com",
    INSTAGRAM = "https://www.instagram.com/",
    LINKEDLN = "https://www.linkedin.com/",
}

export const SOCIALS_ICONS = [
    {
        id: 1,
        darkIcon: darkFacebook as string,
        lightIcon: lightFacebook as string,
        alt: SocialsName.FACEBOOK,
    },
    {
        id: 2,
        darkIcon: darkTwitter as string,
        lightIcon: lightTwitter as string,
        alt: SocialsName.TWITTER,
    },
    {
        id: 3,
        darkIcon: darkInstagram as string,
        lightIcon: lightInstagram as string,
        alt: SocialsName.INSTAGRAM,
    },
    {
        id: 4,
        darkIcon: darkLinkedln as string,
        lightIcon: lightLinkedln as string,
        alt: SocialsName.LINKEDLN,
    },
];

export const BLOG_SOCIAL_LINKS = [
    {
        id: 1,
        icon: SOCIALS_ICONS.find((x) => x.alt === SocialsName.FACEBOOK),
        href: BlogSocialPages.FACEBOOK,
    },
    {
        id: 2,
        icon: SOCIALS_ICONS.find((x) => x.alt === SocialsName.TWITTER),
        href: BlogSocialPages.TWITTER,
    },
    {
        id: 3,
        icon: SOCIALS_ICONS.find((x) => x.alt === SocialsName.INSTAGRAM),
        href: BlogSocialPages.INSTAGRAM,
    },
    {
        id: 4,
        icon: SOCIALS_ICONS.find((x) => x.alt === SocialsName.LINKEDLN),
        href: BlogSocialPages.LINKEDLN,
    },
];
