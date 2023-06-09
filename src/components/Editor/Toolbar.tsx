import React from "react";
import { Button, ButtonProps, Flex, HStack, useToast } from "@chakra-ui/react";
import { Editor as EditorType } from "@tiptap/react";

import { copyText, generateFrontmatter } from "../../helpers";

const buttonStyles: ButtonProps = {
  backgroundColor: "#222",
  color: "white",
  width: "100%",
  _hover: {
    filter: "brightness(140%)",
  },
};

type EditorBarProps = {
  editor: EditorType | null;
};

export function FooterBar(props: EditorBarProps) {
  const { editor } = props;
  const toast = useToast();

  if (!editor) {
    return null;
  }

  return (
    <Flex gap={2} width="100%">
      <Button
        {...buttonStyles}
        onClick={async () => {
          editor.chain().focus().selectAll().run();
          const selectedText = editor.state.doc.textBetween(
            editor.state.selection.from,
            editor.state.selection.to
          );
          await copyText(selectedText);
          editor.chain().blur().run();
          toast({
            duration: 1500,
            isClosable: true,
            position: "top",
            status: "success",
            title: "Copied to clipboard",
          });
        }}
      >
        Copy
      </Button>
      <Button
        {...buttonStyles}
        onClick={() => {
          editor
            .chain()
            .focus()
            .selectAll()
            .deleteSelection()
            .insertContentAt(0, generateFrontmatter())
            // Required to delete the trailing newline
            .selectNodeForward()
            .deleteSelection()
            .blur()
            .run();
        }}
      >
        Make new
      </Button>
    </Flex>
  );
}

export function HeaderBar(props: EditorBarProps) {
  const { editor } = props;

  if (!editor) {
    return null;
  }

  return (
    <HStack>
      <Button
        {...buttonStyles}
        onClick={() => editor.chain().focus().undo().blur().run()}
        isDisabled={!editor.can().chain().focus().undo().run()}
      >
        Undo
      </Button>
      <Button
        {...buttonStyles}
        onClick={() => editor.chain().focus().redo().blur().run()}
        isDisabled={!editor.can().chain().focus().redo().run()}
      >
        Redo
      </Button>
    </HStack>
  );
}
