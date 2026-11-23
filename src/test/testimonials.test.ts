import { describe, expect, it } from "vitest";
import { testimonials } from "@/data/testimonials";

describe("homepage testimonials", () => {
  it("shows only reviews with an image or playable video", () => {
    expect(testimonials.length).toBeGreaterThanOrEqual(4);
    expect(testimonials.every((item) => Boolean(item.src || item.youtubeId))).toBe(true);
  });

  it("includes review screenshots with valid image paths", () => {
    const screenshots = testimonials.filter((item) => item.format === "screenshot");
    expect(screenshots.length).toBeGreaterThanOrEqual(3);
    expect(screenshots.every((item) => Boolean(item.src))).toBe(true);
  });
});
