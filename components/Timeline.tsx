type TimelineItem = {
  title: string;
  description: string;
};

type TimelineProps = {
  items: readonly TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative space-y-8 border-l-2 border-sky-200 pl-8">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span
            className="absolute -left-[2.45rem] top-1.5 h-4 w-4 rounded-5 border-2 border-sky-600 bg-white"
            aria-hidden="true"
          />
          <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
          <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
