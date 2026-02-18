# Specification

## Summary
**Goal:** Add a brief, subtle early-2000s-style pink loading spinner on initial app load that fits the existing retro portal aesthetic.

**Planned changes:**
- Add a small pink, retro/low-res styled spinner overlay that appears only on first page load for a short fixed duration (~400–1200ms) and then auto-hides.
- Ensure the spinner is visually contained within the 480p portal frame UI (not full-screen) and does not cause layout shifts when shown/hidden.
- Ensure the spinner does not block interaction longer than necessary and the rest of the UI behaves the same after it disappears.

**User-visible outcome:** On first visiting/loading the page, users briefly see a small pink retro spinner inside the portal frame, then the normal experience continues unchanged.
