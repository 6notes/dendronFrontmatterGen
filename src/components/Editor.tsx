import { Box, Button } from "@chakra-ui/react";
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
    <>
      <Button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </Button>
      <Button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </Button>
    </>
  );
}

export function FooterBar(props: EditorBarProps) {
  const { editor } = props;

  if (!editor) {
    return null;
  }

  return (
    <>
      <Button
        onClick={() => editor.chain().focus().selectAll()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        Copy to clipboard
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
    <Box>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <FooterBar editor={editor} />
    </Box>
  );
}
