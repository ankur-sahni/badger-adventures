import Link from "next/link";

export function Wordmark({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex min-h-11 items-center font-display text-base font-medium tracking-[0.3em] whitespace-nowrap uppercase sm:text-lg ${className}`}
    >
      Badger Adventures
    </Link>
  );
}
