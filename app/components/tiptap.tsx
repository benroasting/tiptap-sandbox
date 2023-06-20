"use client";

import { useRef } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Placeholder from "@tiptap/extension-placeholder";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import CodeBlock from "@tiptap/extension-code-block";

import { FaBold, FaCode, FaItalic } from "react-icons/fa";

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
          editor.isActive("bold") ? "text-blue-400" : "text-gray-400"
        }`}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`flex min-w-[40px] justify-center pb-1 pt-1.5 hover:bg-gray-20 ${
          editor.isActive("italic") ? "text-blue-400" : "text-gray-400"
        }`}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        className={`flex min-w-[40px] justify-center pb-1 pt-1.5 hover:bg-gray-20 ${
          editor.isActive("codeBlock") ? "text-blue-400" : "text-gray-400"
        }`}
      >
        <FaCode />
      </button>
    </div>
  );
};

const Tiptap = ({ content }: { content?: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Placeholder.configure({ placeholder: "Get to typing..." }),
      Italic,
      Bold.configure({
        HTMLAttributes: {
          style: "font-weight: 600",
        },
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          style: "color: white; background-color: black; padding: 5px",
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
