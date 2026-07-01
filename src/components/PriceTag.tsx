import { formatPrice } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface PriceTagProps {
  price: number;
  discountPrice?: number;
  className?: string;
  size?: "sm" | "lg";
}

export function PriceTag({ price, discountPrice, className, size = "sm" }: PriceTagProps) {
  const hasDiscount = discountPrice != null && discountPrice < price;
  const current = hasDiscount ? discountPrice! : price;

  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <span
        className={cn(
          "font-display font-extrabold text-ink",
          size === "lg" ? "text-3xl" : "text-lg",
        )}
      >
        {formatPrice(current)}
      </span>
      {hasDiscount && (
        <span
          className={cn(
            "text-ink/40 line-through",
            size === "lg" ? "text-lg" : "text-sm",
          )}
        >
          {formatPrice(price)}
        </span>
      )}
    </div>
  );
}
