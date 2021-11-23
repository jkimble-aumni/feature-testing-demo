import Head from "next/head";
import { Heading, Container, VStack } from "@chakra-ui/react";
import toCapitalCase from "@utils/to-capital-case";
import UtilSelector from "components/util-selector";

export default function HomePage() {
  const title = toCapitalCase("feature testing!");

  return (
    <Container>
      <Head>
        <title>Feature Testing!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <VStack>
          <Heading as="h1" m="24px 0">
            {title}
          </Heading>
          <UtilSelector />
        </VStack>
      </main>
    </Container>
  );
}
