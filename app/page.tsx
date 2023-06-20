import Tiptap from "./components/tiptap";

export default function Home() {
  return (
    <main className="items-center justify-between p-24">
      <div className="z-10 w-[130px] items-center justify-between font-mono text-sm pb-2 mb-4 border-b-2">
        Tip Tap Project
      </div>
      <Tiptap />
    </main>
  );
}
