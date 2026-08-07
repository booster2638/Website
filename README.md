# Rebel Robotics Booster Club Website

Static GitHub Pages website for Rebel Robotics Booster Club, Inc., supporting FIRST Robotics Competition Team 2638 at Great Neck South High School.

The site is intentionally simple: HTML, CSS, one JavaScript renderer, and one content data file. Most regular updates should happen in `data/site-content.js`, not in the layout files.

## File Map

- `index.html`: page structure and section containers.
- `style.css`: visual design, layout, responsive behavior, and sponsor tile styling.
- `script.js`: renders updateable sections from `data/site-content.js`.
- `data/site-content.js`: editable content for season highlights, sponsorship tiers, sponsors, news, and board.
- `CONTENT_UPDATES.md`: quick reference for common content edits.
- `images/`: team photos, logos, and sponsor images used by the site.
- `docs/`: downloadable PDFs, including the sponsorship brochure.
- `CNAME`: custom GitHub Pages domain.

## Local Preview

From this folder, run a simple static server:

```sh
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

If port `4173` is busy, use another port, for example:

```sh
python3 -m http.server 4180
```

## Regular Content Updates

Most repeatable updates live in:

```text
data/site-content.js
```

Edit the text between quotes, add or remove list objects, and keep commas between items. After editing, refresh the local preview.

## Season Highlights

Edit the `season` object in `data/site-content.js`.

Update these fields when the season changes:

- `kicker`: small orange label above the section.
- `title`: main heading.
- `summary`: paragraph beside the ranking box.
- `rank.value`: large ranking/stat text.
- `rank.text`: explanation under the ranking/stat.
- `highlights`: checklist items.

Example:

```js
season: {
  kicker: "2027 Season Highlights",
  title: "A new season for Team 2638.",
  summary: "Short summary of major awards and outcomes.",
  rank: {
    value: "#112",
    text: "Ranking explanation."
  },
  highlights: [
    "Award or milestone",
    "Competition result"
  ]
}
```

## News Section

Edit the `news` list in `data/site-content.js`.

Each item creates one card:

```js
{
  label: "Season Wrap",
  title: "Team 2638 heads to Worlds",
  text: "Short card description.",
  url: "https://example.com/full-post",
  cta: "Read More"
}
```

To add a news item, add another object inside the `news` array. To remove one, delete that object.

## Sponsorship Tiers

Edit `sponsorship.tiers` in `data/site-content.js`.

Each item creates one row in the sponsorship table:

```js
{ tier: "Gold", amount: "$7,500+", recognition: "Major recognition package" }
```

Keep the table aligned with the current sponsorship brochure in `docs/`.

## Featured Sponsors

Edit `sponsors.featured` in `data/site-content.js`.

Keep featured sponsors in donation-size order when exact giving levels are known. If amounts are private or unknown, keep the approved stewardship order.

Use this format when an approved logo is available:

```js
{
  name: "Sponsor Name",
  url: "https://sponsor.example.com",
  logo: "images/sponsor-logo.png",
  style: "optional-style-name",
  note: "Short recognition line"
}
```

Use this format when no logo is available:

```js
{
  name: "Sponsor Name",
  url: "https://sponsor.example.com",
  style: "optional-style-name",
  note: "Short recognition line"
}
```

Logo files should go in `images/`. Use clear filenames, such as:

```text
images/sponsor-example-name.svg
```

If adding a logo with unusual proportions, the tile may need one small sizing rule in `style.css`, following the existing examples for `.sponsor-tile.svam img` or `.sponsor-tile.parachute img`.

## Sponsor Notes

Edit `sponsors.notes` in `data/site-content.js`.

This area is for important recognition that should not appear as a standard featured logo tile, such as:

- Community foundation partners.
- Alumni-connected support.
- Student-founded support.
- Supporters without approved logos.

For simple name tiles, use:

```js
{
  heading: "Additional 2026 Supporters",
  supporters: [
    { name: "Create2Donate" },
    { name: "Galvin Bros., Inc.", url: "https://example.com" }
  ],
  text: "Short recognition sentence."
}
```

## Board

Edit the `board` list in `data/site-content.js`.

Each item creates one board line:

```js
{ role: "President", name: "Name Here" }
```

Keep spellings and titles aligned with approved Booster Club records.

## Photos

Current season photos are referenced directly in `index.html` because their layout positions are part of the design.

Common image files:

- `images/hero-worlds-arena.jpg`
- `images/season-team-awards.jpg`
- `images/season-saturn-v.jpg`
- `images/season-pit-work.jpg`
- `images/season-proclamation.jpg`

When replacing a photo, keep the filename the same if you want the layout to update automatically. If you use a new filename, update the matching `<img src="...">` in `index.html`.

## Downloadable Documents

Place public PDFs in `docs/`.

The sponsorship brochure link currently points to:

```text
docs/rebel-robotics-2025-26-sponsorship-packet.pdf
```

To replace the brochure without changing code, overwrite that PDF with the updated version using the same filename.

## What Not To Edit For Routine Updates

Avoid editing these for normal content updates:

- `script.js`, unless adding a new type of repeatable section.
- `style.css`, unless changing layout or visual design.
- `index.html`, unless adding/removing a major section or changing fixed photos.

## Pre-Publish Checklist

Before publishing:

- Preview locally and click the main navigation links.
- Confirm sponsor logos load.
- Confirm the brochure downloads.
- Confirm donation and email links work.
- Confirm board names and titles are current.
- Confirm sponsor order is approved.
- Confirm no private financial, W-9, EIN, or bank details are included.

## GitHub Pages Notes

The site is deployable as static files from the repository root. GitHub Pages should serve:

- `index.html`
- `style.css`
- `script.js`
- `data/site-content.js`
- `images/`
- `docs/`
- `CNAME`
