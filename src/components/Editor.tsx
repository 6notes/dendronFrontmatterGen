import { Box } from "@chakra-ui/react";
import { Editor as EditorType, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

type MenuBarProps = {
  editor: EditorType | null;
};

export function MenuBar(props: MenuBarProps) {
  const { editor } = props;

  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button>
    </>
  );
}

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h2>
        Hi there,
      </h2>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
  });

  return (
    <Box>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </Box>
  );
}
