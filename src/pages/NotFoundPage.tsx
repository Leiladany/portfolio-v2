import { Link } from "react-router-dom";
import { SiteLayout } from "../components/layout/SiteLayout";
import { notFoundContent } from "../data/site";

type NotFoundPageProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function NotFoundPage({
  eyebrow = notFoundContent.page.eyebrow,
  title = notFoundContent.page.title,
  description = notFoundContent.page.description,
}: NotFoundPageProps) {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-32">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="font-display text-charcoal mb-4 text-3xl sm:text-4xl">
          {title}
        </h1>
        <p className="text-graphite mx-auto max-w-md">{description}</p>
        <Link to="/" className="pill pill-primary mt-8">
          {notFoundContent.homeLinkLabel}
        </Link>
      </div>
    </SiteLayout>
  );
}
