import {Text, Container, Link, Row} from "@nextui-org/react";

export default function Footer() {
    return (
        <Container css={{mt: "$12", mb: "$10"}} color={"#fff"}>
            <Row justify="center">
                Created by&#20;
                <Text b>
                    <Link href="https://twitter.com/docker27017" target="_blank" rel="noopener noreferrer">
                        Docker
                    </Link>
                </Text>
                &#20; &#20;

            </Row>
        </Container>
    );
};
