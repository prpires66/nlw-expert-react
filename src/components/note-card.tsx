export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, iure
        ratione omnis neque fugiat enim ullam blanditiis nulla iusto voluptatem
        porro perferendis delectus culpa eveniet temporibus totam, ipsum modi
        fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nulla iusto est minima? Soluta quam officia quod, id tenetur ipsa. Id
        tenetur eum cumque at expedita ipsum quaerat itaque beatae.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
