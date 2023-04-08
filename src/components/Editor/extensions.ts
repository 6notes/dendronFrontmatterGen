import { Extension } from "@tiptap/react";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    copy: {
      copyToClipboard: () => ReturnType;
    };
  }
}

export const CopyExtension = Extension.create({
  name: "copy",
  addCommands() {
    return {
      copyToClipboard:
        () =>
        ({ editor }) => {
          const { selection } = editor.state;
          navigator.clipboard.writeText(
            String(editor.state.doc.textBetween(selection.from, selection.to))
          );
          return true;
        },
    };
  },
});
