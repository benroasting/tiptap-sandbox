'use client'

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import { useRef } from 'react'

const Tiptap = ({ content }: { content: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
    ],
    content,
  })

  return (
    <div>
      <EditorContent editor={editor} className='mb-4 min-h-[150px] border-sm border-gray-300 bg-red-600 p-2' />
    </div>

  )
}

export default Tiptap