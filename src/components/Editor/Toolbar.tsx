import { Button, ButtonProps, HStack } from "@chakra-ui/react";
import { Editor as EditorType } from "@tiptap/react";
import React from "react";

import { generateFrontmatter } from "../../helpers";

const buttonStyles: ButtonProps = {
  backgroundColor: "#222",
  color: "white",
};

type EditorBarProps = {
  editor: EditorType | null;
};

export function FooterBar(props: EditorBarProps) {
  const { editor } = props;

  if (!editor) {
    return null;
  }

  return (
    <HStack>
      <Button
        {...buttonStyles}
        onClick={() =>
          editor.chain().focus().selectAll().copyToClipboard().run()
        }
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
            .run();
        }}
      >
        Make new
      </Button>
    </HStack>
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
        onClick={() => editor.chain().focus().undo().run()}
        isDisabled={!editor.can().chain().focus().undo().run()}
      >
        Undo
      </Button>
      <Button
        {...buttonStyles}
        onClick={() => editor.chain().focus().redo().run()}
        isDisabled={!editor.can().chain().focus().redo().run()}
      >
        Redo
      </Button>
    </HStack>
  );
}
