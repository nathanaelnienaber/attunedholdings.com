type FinancingStructure = {
  label: string;
  hint: string;
};

type FinancingStructureListProps = {
  structures: readonly FinancingStructure[];
  dark?: boolean;
};

export function FinancingStructureList({ structures, dark = false }: FinancingStructureListProps) {
  return (
    <ul className={`grid gap-3 sm:grid-cols-2 ${dark ? "text-slate-200" : "text-muted"}`}>
      {structures.map((structure) => (
        <li key={structure.label} className="flex gap-2 text-sm leading-relaxed">
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dark ? "bg-accent-light" : "bg-accent"}`} />
          <span>
            <span className={`font-semibold ${dark ? "text-white" : "text-text"}`}>
              {structure.label}
            </span>
            {" — "}
            {structure.hint}
          </span>
        </li>
      ))}
    </ul>
  );
}
