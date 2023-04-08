import React from "react";
import { chakra, LinkProps, textDecoration } from "@chakra-ui/react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

// Using the approach from https://chakra-ui.com/docs/components/link#nextjs-13

type NextLinkPropsWithChildren = NextLinkProps & {
  children?: React.ReactNode;
};

const ChakraWrappedNextLink = chakra<
  typeof NextLink,
  NextLinkPropsWithChildren
>(NextLink, {
  shouldForwardProp: (prop) => ["href", "children"].includes(prop),
});

export default function ChakraNextLink(
  props: LinkProps & NextLinkPropsWithChildren
) {
  const { children, href, ...otherProps } = props;
  return (
    <ChakraWrappedNextLink
      color="lightBlue"
      _hover={{ textDecoration: "underline" }}
      {...otherProps}
      href={href}
    >
      {children}
    </ChakraWrappedNextLink>
  );
}
