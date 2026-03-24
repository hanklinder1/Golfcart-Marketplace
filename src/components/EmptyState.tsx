import Link from "next/link";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="text-center py-20 px-4">
      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="w-8 h-8 bg-teal-200 rounded-full" />
      </div>
      <h3 className="text-teal-700 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-teal-400 text-sm max-w-md mx-auto mb-6">{description}</p>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="inline-block bg-teal-700 text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
