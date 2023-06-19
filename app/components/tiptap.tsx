"use client";

import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import { useRef } from "react";

const Menu = ({ editor }: { editor: Editor | null }) => {
  return (
    <div className="flex border-sm border-gray-40">
      <button>Bold</button>
    </div>
  );
};

const Tiptap = ({ content }: { content: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
    content,
  });

  return (
    <div>
      <Menu editor={editor} />
      <EditorContent
        editor={editor}
        className="mb-4 w-full min-h-[150px] border-sm border-black-300 bg-gray-200 p-2"
      />
    </div>
  );
};

export default Tiptap;
