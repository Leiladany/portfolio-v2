export function CurrentStatusBanner() {
  return (
    <section className="pb-8 sm:pb-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal border-blush bg-blush-soft text-charcoal flex w-full items-center gap-3 rounded-xl border px-5 py-3 text-xs sm:text-base">
          <span
            className="bg-rose h-2.5 w-2.5 shrink-0 rounded-full"
            aria-hidden
          />
          <span className="text-graphite">
            <strong>Currently</strong> looking for my first junior role in UX/UI
            and frontend - remote or Lisbon.
          </span>
        </div>
      </div>
    </section>
  );
}
