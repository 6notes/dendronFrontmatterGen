import { Box, Button, ButtonProps, HStack, VStack } from "@chakra-ui/react";
import { Editor as EditorType, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

import { genUUID } from "../helpers";

type EditorBarProps = {
  editor: EditorType | null;
};

export function MenuBar(props: EditorBarProps) {
  const { editor } = props;

  if (!editor) {
    return null;
  }

  return (
    <HStack>
      <Button
        {...buttonStyles}
        onClick={() => editor.chain().focus().undo().run()}
        isDisabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </Button>
      <Button
        {...buttonStyles}
        onClick={() => editor.chain().focus().redo().run()}
        isDisabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </Button>
    </HStack>
  );
}

const buttonStyles: ButtonProps = {
  backgroundColor: "#222",
  color: "white",
};

export function FooterBar(props: EditorBarProps) {
  const { editor } = props;

  if (!editor) {
    return null;
  }

  return (
    <>
      <Button
        {...buttonStyles}
        onClick={() => editor.chain().focus().selectAll()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        Select all (WIP)
      </Button>
    </>
  );
}

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
    <pre>
      <code>
        ---
        id: ${genUUID()}
        title: ""
        desc: ""
        updated: ${new Date().valueOf()}
        created: ${new Date().valueOf()}
        ---
      </code>
    </pre>
    `,
  });

  return (
    <Box border="1px solid #111" borderRadius={5}>
      <VStack p={2} gap={1}>
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
        <FooterBar editor={editor} />
      </VStack>
    </Box>
  );
}
