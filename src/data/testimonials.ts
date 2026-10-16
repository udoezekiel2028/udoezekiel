export type Testimonial = {
  id: string;
  format: "video" | "screenshot";
  title: string;
  src?: string;
  poster?: string;
  youtubeId?: string;
};

// YouTube videos play right on the page; replace the remaining labelled
// placeholders with the owner's real media as it becomes available.
export const testimonials: Testimonial[] = [
  {
    id: "video-1",
    format: "video",
    title: "Client Testimony on my expertize on website development and AI automation",
    youtubeId: "l__IoQVaYIQ",
  },
  { id: "screenshot-1", format: "screenshot", title: "Testimonial screenshot 01" },
  { id: "video-2", format: "video", title: "Video testimonial 02" },
  { id: "screenshot-2", format: "screenshot", title: "Testimonial screenshot 02" },
];
