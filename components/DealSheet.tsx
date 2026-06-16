type DealSheetRow = {
  label: string;
  value: string;
};

type DealSheetProps = {
  rows: readonly DealSheetRow[];
};

export function DealSheet({ rows }: DealSheetProps) {
  return (
    <dl className="divide-y divide-slate-200 rounded-5 border border-slate-200 bg-white shadow-sm">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid gap-2 px-6 py-5 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-8"
        >
          <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {row.label}
          </dt>
          <dd className="text-lg font-semibold text-slate-950">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
