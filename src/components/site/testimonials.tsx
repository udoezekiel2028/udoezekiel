import { useState } from "react";
import { Image, Play, Maximize2, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { testimonials, type Testimonial } from "@/data/testimonials";

export function Testimonials() {
  const [selected, setSelected] = useState<Testimonial | null>(null);
  return (
    <section className="bg-ink py-20 text-paper md:py-24" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-[1222px] px-4">
        <div className="mb-10 flex items-start gap-4">
          <Quote className="mt-1 size-9 shrink-0 text-brand" aria-hidden="true" />
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-brand">Testimonials</p>
            <h2 id="testimonials-title" className="font-display text-3xl font-black leading-tight md:text-4xl">What my clients say</h2>
          </div>
        </div>
        <Carousel opts={{ align: "start", loop: true }} aria-label="Client testimonials" className="pb-16">
          <CarouselContent className="-ml-2 items-stretch">
            {testimonials.map((item) => (
              <CarouselItem key={item.id} className="basis-full pl-2 md:basis-1/2 flex flex-col" aria-label={item.title}>
                <article className="flex h-full w-full flex-col overflow-hidden rounded-sm border border-paper/15 bg-ink-soft">
                  <button
                    type="button"
                    className="group relative block aspect-[4/3] w-full overflow-hidden bg-ink-soft p-0 text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
                    aria-label={`Open ${item.title}`}
                    onClick={() => setSelected(item)}
                  >
                    {item.youtubeId ? (
                      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-black">
                        {/* Ambient blurred backdrop for portrait video */}
                        <img
                          src={`https://i.ytimg.com/vi/${item.youtubeId}/oardefault.jpg`}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-xl"
                        />
                        {/* Clean portrait video thumbnail fitting completely without cutoff */}
                        <img
                          src={`https://i.ytimg.com/vi/${item.youtubeId}/oardefault.jpg`}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="relative z-10 h-full w-auto max-w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        {/* High-visibility play button */}
                        <span className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                          <span className="flex size-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xl transition-transform duration-300 group-hover:scale-110">
                            <Play className="ml-1 size-6 fill-current" />
                          </span>
                        </span>
                      </div>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-ink-soft p-4 sm:p-6">
                        <img
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                      </div>
                    )}
                    <Maximize2 className="absolute right-3 top-3 z-30 size-4 text-paper/70 transition-colors group-hover:text-brand" aria-hidden="true" />
                  </button>
                  <div className="mt-auto flex h-12 shrink-0 items-center gap-2 border-t border-paper/10 px-4 text-sm font-bold">
                    {item.youtubeId ? <Play className="size-4 text-brand" /> : <Image className="size-4 text-brand" />}
                    <span>{item.source}</span>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious aria-label="Previous testimonial" className="bottom-0 left-auto right-14 top-auto size-10 translate-y-0 rounded-sm border-paper/25 bg-ink-soft text-paper hover:bg-brand hover:text-brand-foreground" />
          <CarouselNext aria-label="Next testimonial" className="bottom-0 right-0 top-auto size-10 translate-y-0 rounded-sm border-paper/25 bg-ink-soft text-paper hover:bg-brand hover:text-brand-foreground" />
        </Carousel>
      </div>
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className={`max-h-[92dvh] w-[94vw] overflow-y-auto border-paper/20 bg-ink p-4 pt-12 text-paper ${selected?.youtubeId ? "max-w-[520px]" : "max-w-[1000px]"}`} aria-describedby={undefined}>
          <DialogTitle className="font-display">{selected?.title}</DialogTitle>
          {selected && (selected.youtubeId ? (
            <div className="mx-auto aspect-[9/16]" style={{ height: "min(78dvh, 800px)" }}>
              <iframe key={selected.id} src={`https://www.youtube.com/embed/${selected.youtubeId}?autoplay=1&rel=0`} title={selected.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="h-full w-full rounded-sm" />
            </div>
          ) : selected.src ? (
            <img src={selected.src} alt={selected.title} className="h-auto max-h-[75dvh] w-full object-contain" />
          ) : null)}
        </DialogContent>
      </Dialog>
    </section>
  );
}
