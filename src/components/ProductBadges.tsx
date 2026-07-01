import { AVAILABILITY_LABELS } from "@/lib/constants";
import type { Availability } from "@/sanity/lib/types";
import { cn } from "@/lib/utils";

export function AvailabilityBadge({
  availability,
  className,
}: {
  availability: Availability;
  className?: string;
}) {
  const styles: Record<Availability, string> = {
    in_stock: "bg-green-100 text-green-800",
    out_of_stock: "bg-red-100 text-brand-red-dark",
    pre_order: "bg-amber-100 text-amber-800",
  };

  return (
    <span className={cn("badge", styles[availability], className)}>
      <span
        className={cn(
          "mr-1.5 h-1.5 w-1.5 rounded-full",
          availability === "in_stock" && "bg-green-600",
          availability === "out_of_stock" && "bg-brand-red",
          availability === "pre_order" && "bg-amber-600",
        )}
      />
      {AVAILABILITY_LABELS[availability] ?? "Unknown"}
    </span>
  );
}

export function DiscountBadge({ className }: { className?: string }) {
  return (
    <span className={cn("badge bg-brand-red text-white", className)}>Sale</span>
  );
}
