"use client";

import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import CodeBlock from "@tiptap/extension-code-block";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import { useRef } from "react";

import { FaBold, FaCode } from "react-icons/fa";

const Menu = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex ">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`flex min-w-[40px] justify-center pb-1 pt-1.5 hover:bg-gray-20 ${
          editor.isActive("bold") ? "text-red-400" : "text-gray-400"
        }`}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        className={`flex min-w-[40px] justify-center pb-1 pt-1.5 hover:bg-gray-20 ${
          editor.isActive("codeBlock") ? "text-red-400" : "text-gray-400"
        }`}
      >
        <FaCode />
      </button>
    </div>
  );
};

const Tiptap = ({ content }: { content: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const codeStyling = "text-white bg-black p-2";

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold.configure({
        HTMLAttributes: {
          style: "font-weight: 600",
        },
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class: codeStyling,
        },
      }),
    ],
    content,
  });

  return (
    <div>
      <Menu editor={editor} />
      <EditorContent
        editor={editor}
        className="mb-4 min-h-[150px] border rounded border-sm border-gray-30 p-2 [&>div]:outline-none"
        onClick={() => editor?.commands.focus()}
        value={content}
      />
    </div>
  );
};

export default Tiptap;
