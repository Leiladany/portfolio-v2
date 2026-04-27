import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

type NotFoundPageProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function NotFoundPage({
  eyebrow = "404",
  title = "Page not found",
  description = "The page you are looking for does not exist or has been moved.",
}: NotFoundPageProps) {
  useDocumentMeta({
    title: `${title} - Leila Teixeira`,
    description,
  });

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="font-display mb-4 text-4xl text-charcoal">{title}</h1>
        <p className="mx-auto max-w-md text-graphite">{description}</p>
        <Link to="/" className="pill pill-primary mt-8">
          Go home
        </Link>
      </div>
    </SiteLayout>
  );
}
