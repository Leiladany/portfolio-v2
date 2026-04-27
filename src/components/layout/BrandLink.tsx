import { Link } from "react-router-dom";
import { profileInfo } from "../../data/profile";

type BrandLinkProps = {
  compact?: boolean;
  onClick?: () => void;
};

export function BrandLink({ compact = false, onClick }: BrandLinkProps) {
  const label = compact
    ? `${profileInfo.firstName} T.`
    : `${profileInfo.firstName} ${profileInfo.lastName}`;

  return (
    <Link to="/" className="flex shrink-0 items-center gap-2" onClick={onClick}>
      <span className="brand-mark" aria-hidden />
      <span className="font-display text-lg">{label}</span>
    </Link>
  );
}
