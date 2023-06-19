import Tiptap from "./components/tiptap";

export default function Home() {
  return (
    <main className="items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm">
        Tip Tap Project
      </div>
      <Tiptap content="... start typing here" />
    </main>
  );
}
