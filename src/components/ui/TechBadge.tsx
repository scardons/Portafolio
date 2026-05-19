interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'large';
}

const TechBadge = ({ name, variant = 'default' }: TechBadgeProps) => {
  const sizeClasses = variant === 'large'
    ? 'px-4 py-2 text-sm'
    : 'px-3 py-1 text-xs';

  return (
    <span
      className={`${sizeClasses} font-medium bg-white/[0.06] text-cyan-300 rounded-full border border-white/[0.08] transition-colors hover:bg-white/[0.1]`}
    >
      {name}
    </span>
  );
};

export default TechBadge;
