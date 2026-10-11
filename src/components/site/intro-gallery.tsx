import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const assets = import.meta.glob<{ url: string }>("/src/assets/intro-*.asset.json", { eager: true, import: "default" });
const names = ["Bible-Davids1", "CBD-Oil1", "Mapstat-Global", "ihepsut-skincare1", "Goli-Gummies1", "Bluepictures-Distribution", "ECommHive1", "Bluepictures-Cinema", "MichaelRalph-Consult1", "Joy-Odiete", "Utospices1", "Ethel-Women-Initiative1"];
const images = names.flatMap((name) => {
  const asset = assets[`/src/assets/intro-${name}.jpg.asset.json`];
  return asset ? [{ src: asset.url, name: name.replace(/1$/, "").replace(/-/g, " ") }] : [];
});

export function IntroGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState<(typeof images)[number] | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api || paused || selected || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => api.scrollNext(), 5000);
    return () => window.clearInterval(timer);
  }, [api, paused, selected]);

  return (
    <div className="flex min-w-0 items-center px-4 py-10 md:px-6" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
      <Carousel className="w-full min-w-0 pb-14" style={{ transform: "scale(1.02)" }} aria-label="Website design gallery" opts={{ loop: true, align: "start", slidesToScroll: 3 }} setApi={setApi}>
        <CarouselContent className="-ml-3">
          {images.map((image) => (
            <CarouselItem key={image.src} className="basis-1/3 pl-3">
              <Button variant="ghost" className="block h-auto w-full overflow-hidden rounded-none border border-ink/10 p-0 shadow-md hover:bg-transparent focus-visible:ring-brand" aria-label={`View ${image.name} full size`} onClick={() => setSelected(image)}>
                <img src={image.src} alt={`${image.name} website design`} loading="lazy" width={1410} height={2250} className="aspect-[1410/2250] w-full object-cover" />
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bottom-0 left-auto right-12 top-auto translate-y-0 rounded-sm border-ink/20 bg-paper text-ink hover:bg-brand hover:text-brand-foreground" />
        <CarouselNext className="bottom-0 right-0 top-auto translate-y-0 rounded-sm border-ink/20 bg-paper text-ink hover:bg-brand hover:text-brand-foreground" />
      </Carousel>
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className="max-h-[92dvh] w-[94vw] max-w-[1000px] overflow-y-auto p-4 pt-12" aria-describedby={undefined}>
          <DialogTitle className="sr-only">{selected?.name} website design</DialogTitle>
          {selected && <img src={selected.src} alt={`${selected.name} website design, full size`} className="mx-auto h-auto w-full max-w-full" />}
        </DialogContent>
      </Dialog>
    </div>
  );
}