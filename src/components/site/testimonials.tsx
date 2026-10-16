import { useState } from "react";
import { Image, Play, Maximize2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { testimonials, type Testimonial } from "@/data/testimonials";

function Placeholder({ item }: { item: Testimonial }) {
  const Icon = item.format === "video" ? Play : Image;
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="flex size-16 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand"><Icon className="size-7" aria-hidden="true" /></span>
      <span className="font-display text-lg font-extrabold">{item.title}</span>
      <span className="text-sm font-medium text-paper/60">{item.format === "video" ? "Video coming soon" : "Screenshot coming soon"}</span>
    </div>
  );
}

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
          <CarouselContent className="-ml-6">
            {testimonials.map((item) => (
              <CarouselItem key={item.id} className="basis-full pl-6 md:basis-1/2" aria-label={item.title}>
                <article className="mx-auto w-full max-w-[380px] overflow-hidden rounded-sm border border-paper/15 bg-ink-soft">
                  <Button variant="ghost" className="group relative block aspect-[9/16] h-auto w-full whitespace-normal rounded-none p-0 text-paper hover:bg-paper/5 hover:text-paper focus-visible:ring-brand" aria-label={`Open ${item.title}`} onClick={() => setSelected(item)}>
                    {item.youtubeId ? (
                      <><img src={`https://i.ytimg.com/vi/${item.youtubeId}/oardefault.jpg`} alt={item.title} loading="lazy" decoding="async" className="h-full w-full object-cover" /><span className="absolute inset-0 flex items-center justify-center"><span className="flex size-16 items-center justify-center rounded-full bg-brand text-brand-foreground"><Play className="size-7" /></span></span></>
                    ) : item.src ? (
                      item.format === "video" ? <><video src={item.src} poster={item.poster} preload="metadata" className="h-full w-full object-contain" muted playsInline /><span className="absolute inset-0 flex items-center justify-center"><span className="flex size-16 items-center justify-center rounded-full bg-brand text-brand-foreground"><Play className="size-7" /></span></span></> : <img src={item.src} alt={item.title} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                    ) : <Placeholder item={item} />}
                    <Maximize2 className="absolute right-4 top-4 text-paper/60" aria-hidden="true" />
                  </Button>
                  <div className="flex items-center justify-between gap-3 border-t border-paper/10 px-5 py-4">
                    <span className="flex items-center gap-2 text-sm font-bold">{item.format === "video" ? <Play className="size-4 text-brand" /> : <Image className="size-4 text-brand" />}{item.format === "video" ? "Video testimonial" : "Client screenshot"}</span>
                    {!item.src && !item.youtubeId && <span className="text-xs text-paper/55">Placeholder</span>}
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
        <DialogContent className="max-h-[92dvh] w-[94vw] max-w-[1000px] overflow-y-auto border-paper/20 bg-ink p-4 pt-12 text-paper" aria-describedby={undefined}>
          <DialogTitle className="font-display">{selected?.title}</DialogTitle>
          {selected && (selected.youtubeId ? (
            <iframe key={selected.id} src={`https://www.youtube.com/embed/${selected.youtubeId}?autoplay=1&rel=0`} title={selected.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="aspect-video w-full rounded-sm" />
          ) : selected.src ? (
            selected.format === "video" ? <video key={selected.id} src={selected.src} poster={selected.poster} controls autoPlay playsInline className="max-h-[70dvh] w-full" /> : <img src={selected.src} alt={selected.title} className="h-auto w-full object-contain" />
          ) : <div className="aspect-video bg-ink-soft"><Placeholder item={selected} /></div>)}
        </DialogContent>
      </Dialog>
    </section>
  );
}