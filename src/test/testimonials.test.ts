import { describe, expect, it } from "vitest";
import { testimonials } from "@/data/testimonials";

describe("homepage testimonials", () => {
  it("shows only reviews with an image or playable video", () => {
    expect(testimonials).toHaveLength(4);
    expect(testimonials.every((item) => Boolean(item.src || item.youtubeId))).toBe(true);
  });

  it("includes each of the three supplied review screenshots", () => {
    const screenshots = testimonials.filter((item) => item.format === "screenshot");
    expect(screenshots).toHaveLength(3);
    expect(screenshots.every((item) => item.src?.startsWith("/__l5e/assets-v1/"))).toBe(true);
  });
});