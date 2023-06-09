import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import Head from "next/head";

import Link from "../components/ChakraNextLink";
import { Editor } from "../components/Editor";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box backgroundColor="#444" color="white">
      <Head>
        <title>Frontmatter Generator</title>
        <meta name="description" content="Create Dendron Frontmatters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./images/favicon.ico" />
      </Head>
      <Box as="main" className={styles.main}>
        <VStack gap={5}>
          <Box textAlign="center">
            <Heading>Dendron Frontmatter Generator</Heading>
            <Link href="https://github.com/6notes/dendronFrontmatterGen">
              Repo
            </Link>
          </Box>
          <Box>
            <Editor />
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
