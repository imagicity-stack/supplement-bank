import Link from "next/link";

import { PackageIcon } from "@/components/EmptyStateIcon";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: { href: string; label: string };
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-black/10 bg-ink-muted/[0.03] px-6 py-16 text-center">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-ink/5 text-ink/40">
        <PackageIcon className="h-7 w-7" />
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-ink">{title}</h3>
      {description && (
        <p className="mt-2 max-w-md text-sm text-ink/60">{description}</p>
      )}
      {action && (
        <Link href={action.href} className="btn-dark mt-6">
          {action.label}
        </Link>
      )}
    </div>
  );
}
