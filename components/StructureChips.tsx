type StructureChip = {
  label: string;
  hint: string;
};

type StructureChipsProps = {
  structures: readonly StructureChip[];
  dark?: boolean;
};

export function StructureChips({ structures, dark = false }: StructureChipsProps) {
  return (
    <ul className="flex flex-wrap gap-3">
      {structures.map((structure) => (
        <li key={structure.label}>
          <span
            className={`inline-flex flex-col rounded-5 px-4 py-2 text-sm font-semibold ${
              dark
                ? "border border-white/20 bg-white/10 text-white"
                : "border border-slate-200 bg-white text-slate-800"
            }`}
            title={structure.hint}
          >
            {structure.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
