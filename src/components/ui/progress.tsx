type ProgressProps = {
  value?: number;
  className?: string;
};

export function Progress({ value = 0 }: ProgressProps) {
  const safeValue = Math.min(Math.max(value, 0), 100);
  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
      <div
        className="absolute left-0 top-0 h-full bg-primary transition-all duration-300"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}
