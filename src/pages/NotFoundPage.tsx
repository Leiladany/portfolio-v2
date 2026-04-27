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
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-32">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="font-display text-charcoal mb-4 text-3xl sm:text-4xl">{title}</h1>
        <p className="text-graphite mx-auto max-w-md">{description}</p>
        <Link to="/" className="pill pill-primary mt-8">
          Go home
        </Link>
      </div>
    </SiteLayout>
  );
}
