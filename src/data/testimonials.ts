export type Testimonial = {
  id: string;
  format: "video" | "screenshot";
  title: string;
  src?: string;
  poster?: string;
};

// Replace these explicitly labelled placeholders with the owner's real media.
export const testimonials: Testimonial[] = [
  { id: "video-1", format: "video", title: "Video testimonial 01" },
  { id: "screenshot-1", format: "screenshot", title: "Testimonial screenshot 01" },
  { id: "video-2", format: "video", title: "Video testimonial 02" },
  { id: "screenshot-2", format: "screenshot", title: "Testimonial screenshot 02" },
];