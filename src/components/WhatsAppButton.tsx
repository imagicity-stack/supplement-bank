import { WhatsAppIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  href: string;
  label?: string;
  className?: string;
  size?: "sm" | "md";
}

/**
 * A styled anchor that opens WhatsApp with a pre-filled message.
 * Always opens in a new tab. `href` is built via `@/lib/whatsapp`.
 */
export function WhatsAppButton({
  href,
  label = "Enquire on WhatsApp",
  className,
  size = "md",
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-whatsapp",
        size === "sm" && "px-4 py-2 text-xs",
        className,
      )}
    >
      <WhatsAppIcon className={cn(size === "sm" ? "h-4 w-4" : "h-5 w-5")} />
      {label}
    </a>
  );
}
