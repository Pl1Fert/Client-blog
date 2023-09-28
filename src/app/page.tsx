import { FC } from "react";

import { AuthorRow, JoinUs } from "@/components";
import { Container } from "@/hocs";

const Home: FC = () => (
    <Container>
        <AuthorRow />
        <JoinUs />
    </Container>
);

export default Home;
