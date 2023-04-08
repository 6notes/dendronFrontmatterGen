import {
  Box,
  Button,
  ButtonProps,
  HStack,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { Editor as EditorType, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

import { generateFrontmatter, genUUID } from "../../helpers";

import { FooterBar, HeaderBar } from "./Toolbar";

export function Editor() {
  const content = generateFrontmatter({
    id: genUUID(),
    createdDate: new Date(),
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content,
  });

  return (
    <Box border="1px solid #111" borderRadius={5}>
      <VStack p={2} gap={1}>
        <HeaderBar editor={editor} />
        <Box p={2} minWidth="300px" minHeight="170px">
          <EditorContent editor={editor} />
        </Box>
        <FooterBar editor={editor} />
      </VStack>
    </Box>
  );
}
