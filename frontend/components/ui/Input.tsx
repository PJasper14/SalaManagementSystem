import { cn } from "@/lib/utils";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  multiline?: boolean;
}

export function Input({
  label,
  error,
  multiline,
  className,
  id,
  ...rest
}: InputProps) {
  const inputId = id || `input-${label.replace(/\s/g, "-").toLowerCase()}`;
  const base =
    "w-full rounded-lg border bg-white dark:bg-neutral-900 px-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:opacity-50";
  const border = error
    ? "border-red-500 dark:border-red-400"
    : "border-zinc-300 dark:border-neutral-700";

  return (
    <div className="space-y-1">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={inputId}
          className={cn(base, border, "min-h-[120px] resize-y", className)}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={inputId}
          className={cn(base, border, className)}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
