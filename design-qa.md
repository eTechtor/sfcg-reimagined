# SCFI hero and navigation — design QA

## Result

final result: passed

The selected reference has been adapted to the existing SCFI logo and exact original hero wording, as requested. No actionable P0/P1/P2 findings remain. This is a local implementation; no commit, push or deployment was performed.

## Evidence and comparison setup

- Source visual truth: `/Users/chagbeemmanuel/Documents/Codex/scfi-hero-qa/reference.png` (copy of the user attachment).
- Original attachment: `/var/folders/r3/cf1qnnzx3szc1q2dhqnl95s40000gn/T/codex-clipboard-e58ee436-58d5-4621-8f5d-fbb5664f172f.png`.
- Implementation: `http://127.0.0.1:5173/`.
- Final desktop screenshot: `/Users/chagbeemmanuel/Documents/Codex/scfi-hero-qa/desktop-final.png`.
- Source and implementation: 1672 × 941 pixels; implementation CSS viewport 1672 × 941, devicePixelRatio 1, visualViewport scale 1. No density normalization needed for the final capture.
- State: homepage, top of page, closed dialogs, no hovered or focused navigation controls.
- Full-view comparison: the source and rendered screenshot were emitted together in the same comparison tool input, both before and after fixes.
- Focused regions: a separate crop was unnecessary: the full-resolution comparison made the logo, menu, search/heart icons, CTA borders and typography readable. Mobile-menu and search states were captured separately.
- A premature resize capture and an oversized clip capture were discarded as capture artifacts, not treated as design defects.

## Findings and iteration history

1. **[P2, resolved] Navigation crowded toward the right.**
   - Evidence: initial `/Users/chagbeemmanuel/Documents/Codex/scfi-hero-qa/desktop.png` placed Home around x685, versus approximately x535 in the reference.
   - Fix: distribute the six links across available space, with a responsive gap after the brand.
   - Post-fix: `desktop-final.png` places Home around x528 and preserves the right-aligned search and Donate controls.
2. **[P2, resolved] Awkward headline balance.**
   - Evidence: the initial four-line heading isolated “economically” and widened the following green line.
   - Fix: preserve every word but emphasize “empowered communities”, producing three lines at the reference viewport. Use the existing Barlow sans family, with an explicitly loaded 700 weight.
   - Post-fix: `desktop-final.png` shows a coherent three-line heading and readable full introduction, without obscuring the central/right subjects unnecessarily.
3. **[P2, resolved] Button text contrast during color refinement.**
   - Evidence: the intermediate action color `oklch(0.56 0.17 146)` provided approximately 4.33:1 white-text contrast.
   - Fix: use `oklch(0.55 0.17 146)`, approximately 4.52:1, and retain the brighter green for large headline accents.
   - Post-fix: `desktop-final.png` shows the final action color; the contrast calculation passes the normal-text AA threshold.
4. **[P2, resolved] Shared dialog close control was too small for mobile.**
   - Fix: locally increase search/menu close-button hit areas to 44 × 44 pixels without changing unrelated dialogs.
   - Post-fix: browser DOM verification and the final search capture confirm the new size; Escape dismissal also returns focus to its trigger.

## Required fidelity surfaces

- **Fonts and typography:** existing Barlow sans used for the hero and navigation; Barlow Condensed retained for the brand wordmark. Added the real 700/800 font weights. Sentence case, bold white heading and light-green emphasis follow the reference. The existing longer text requires a smaller desktop title than the shorter reference; intentional.
- **Spacing and layout:** edge-to-edge photo, overlaid header, approximately 63px desktop side margin, left-aligned copy, rounded rectangular CTAs, open photo space on the right. Header links fit at 1280px. Below that, accessible mobile navigation replaces the desktop row.
- **Colors and tokens:** green action controls, light-green active underline/headline, white lettering and dark photo scrims. The slightly darker action green supports readable white text. Existing interior-page tokens remain unchanged.
- **Image quality and asset fidelity:** clean 1672 × 941 photographic asset produced from the supplied reference using built-in ImageGen. Subjects and framing retained closely; baked-in UI removed. Optimized JPEG is 466,688 bytes. Existing `scfi-mark.png` was reused without editing. Lucide's search, heart, arrow, menu and play icons match the reference's simple icon style; no handcrafted replacement artwork.
- **Copy and content:** original heading, eyebrow, full introduction and three CTA labels retained. The six requested navigation labels are present in desktop and mobile versions. No invented impact figures or new page content. Contact details, official social links and SDG removal are unchanged.

## Responsive and interaction checks

- Desktop 1672 × 941: exact reference viewport; hero fills the viewport; no horizontal overflow.
- Desktop 1280 × 800: `/Users/chagbeemmanuel/Documents/Codex/scfi-hero-qa/desktop-1280.png`; all six navigation links, search and Donate fit.
- Tablet 768 × 1024: `/Users/chagbeemmanuel/Documents/Codex/scfi-hero-qa/tablet.png`; full brand, menu/search and CTAs visible; no horizontal overflow.
- Mobile 390 × 844: `/Users/chagbeemmanuel/Documents/Codex/scfi-hero-qa/mobile-top.png`; compact logo/SCFI lockup, search, Donate and menu remain accessible; full copy and stacked actions.
- Mobile 320 × 740: `/Users/chagbeemmanuel/Documents/Codex/scfi-hero-qa/mobile-320.png`; no horizontal overflow. Long original copy extends the hero naturally and remains scrollable.
- Mobile menu: `/Users/chagbeemmanuel/Documents/Codex/scfi-hero-qa/mobile-menu.png`; six links and Donate; selecting Our Impact closes the dialog and renders the existing `/approach` page.
- Search: `/Users/chagbeemmanuel/Documents/Codex/scfi-hero-qa/search.png`; “health” returns Our Work and navigates to `/what-we-do`; “volunteer” returns Get Involved; nonsense query shows a clear empty state.
- Search opens with its input focused; Escape closes it and restores focus to the search trigger. Radix provides modal focus management and accessible dialog naming.
- Donate header link navigates to `/donate`, rendering “Your Support Can Help Create Opportunity”. No payment was submitted.
- Main navigation destinations checked: Home `/`, About Us `/about`, Our Work `/what-we-do`, Our Impact `/approach`, News & Stories `/resources`, Get Involved `/get-involved`.
- Existing hero CTAs still lead to `/what-we-do`, `/donate`, and `/about`.
- Browser console checked: no error-level messages during testing.
- Production build and TypeScript check passed. Header/root component ESLint checks passed. Existing build-tool deprecation warnings do not block the build.

## Intentional adaptations / remaining scope

- The latest image-based reference replaces the previous remote video hero.
- The user's own logo and much longer hero copy take precedence over the screenshot's different logo and wording.
- Our Impact reuses the sustainable-change/approach page; News & Stories reuses the resources/updates page. No new routes were created.
- Search filters a local index of existing page titles/descriptions, not a remote full-text backend.
- “Watch Our Story” retains its existing About destination; no new video player was invented.
- Generated photography is a reconstruction of the supplied reference, not independent documentary evidence of an SCFI event.
- Verification was in the Codex in-app browser; no separate Safari/Firefox or live-host deployment check.
- Running the existing toolchain regenerated TanStack Start's route type-registration footer in `src/routeTree.gen.ts`; no route definitions changed.

## Asset provenance

Final project asset: `/Users/chagbeemmanuel/Documents/SCFI/src/assets/hero-community-outreach.jpg`.
Generation mode: built-in `image_gen.imagegen`, image edit with the user attachment as its reference. Original generated PNG retained at `/Users/chagbeemmanuel/Documents/Codex/hero-community-outreach.png`. JPEG conversion used macOS `sips` at quality 86.

Exact generation prompt:

> Use case: precise-object-edit.
> Asset type: clean full-bleed website hero background photograph, landscape 16:9, ideally 2048x1152.
> Input image 1 is the edit target: a health outreach photograph with website user-interface graphics overlaid.
> Primary request: Remove ONLY every overlaid website graphic: top-left foundation logo and lettering, all navigation labels, underline, search icon, Donate button, the entire overlaid headline, eyebrow, paragraph, and two lower-left buttons. Reconstruct the photographic areas underneath these removed UI elements naturally. Remove the baked-in dark UI gradient/overlay so that this is a naturally lit photograph; the website will add a real overlay separately.
> Invariants: preserve the same people and their facial appearance, poses, clothing, placement, foreground laptop and papers, hospital setting, background crowd and trees, camera viewpoint and wide framing. Preserve the central man in purple checked shirt, left foreground woman in white and right foreground woman in pink with glasses. Keep the people centered/right with photographic detail on the left available for live text overlay. No change of story or added objects.
> Style: natural realistic editorial photograph, textured skin, crisp but natural fabrics and foliage, believable daylight.
> Avoid: Any UI, foundation branding, overlaid text, buttons, added text, logos or watermarks. Existing natural hospital signage may remain as scenery, not a new text overlay.

## Implementation checklist

- [x] Reuse original logo and complete hero copy.
- [x] Implement reference-led hero with a project-owned photo asset.
- [x] Add requested desktop/mobile navigation, search and Donate.
- [x] Test search, keyboard dismissal, navigation and mobile layouts.
- [x] Compare source and rendered implementation together, fix P2 issues and recapture.
- [x] Build/type-check; leave local preview running.
- [ ] Commit/push only after user approval of this version.

---

## Photo placement update — 2026-09-26

final result: passed

- User direction: retain the existing community-outreach hero image and use the two newly supplied photos only where non-hero images were previously displayed.
- Homepage hero retained: `src/assets/hero-community-outreach.jpg`.
- Training-session photo: `src/assets/scfi-training.jpg`, now used in the first explanatory image and the lower full-width support image.
- Board-meeting photo: `src/assets/scfi-board-meeting.jpg`, now used beside the sustainable-change content.
- Source attachments: `/var/folders/r3/cf1qnnzx3szc1q2dhqnl95s40000gn/T/codex-clipboard-1d54f077-ce4a-4e1b-bcc9-316451855825.png` and `/var/folders/r3/cf1qnnzx3szc1q2dhqnl95s40000gn/T/codex-clipboard-363e9a1b-1a34-4459-a902-c1129b4b4036.png`.
- Browser verification: each photo loaded at its native 1448px width; their visible mobile placements were inspected on the local homepage. The hero continued to load at 1672px. No browser console errors occurred.
- Accessibility: alt text now accurately describes each supplied photograph.
- Build verification: production build passed after the image substitutions.
