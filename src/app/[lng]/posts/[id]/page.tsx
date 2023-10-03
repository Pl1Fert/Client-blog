import { FC } from "react";

import { useTranslation } from "@/app/i18n";
import { JoinUs } from "@/components";

import { PostProps } from "./page.interfaces";

const Post: FC<PostProps> = async ({ params: { lng } }) => {
    const { t } = await useTranslation(lng, "posts");
    return (
        <>
            <p>{t("post")}</p>
            <JoinUs lng={lng} />
        </>
    );
};

export default Post;
