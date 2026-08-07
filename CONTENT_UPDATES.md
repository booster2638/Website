# Updating Site Content

Most recurring website updates live in `data/site-content.js`.

## Season Highlights

Edit the `season` object:

```js
season: {
  kicker: "2026 Season Highlights",
  title: "What a season for Team 2638.",
  summary: "Short season summary.",
  rank: {
    value: "#112",
    text: "Ranking description."
  },
  highlights: [
    "FIRST World Championship qualifier in Houston",
    "Award or milestone"
  ]
}
```

The heading, summary, rank box, and checklist will update automatically.

## News Section

Edit the `news` list. Each item controls one card:

```js
{
  label: "Season Wrap",
  title: "Team 2638 heads to Worlds",
  text: "Short description shown on the card.",
  url: "https://example.com/full-post",
  cta: "Read More"
}
```

Add a new object for a new card. Remove an object to remove a card.

## Sponsorship Tiers

Edit `sponsorship.tiers`.

```js
{ tier: "Gold", amount: "$7,500+", recognition: "Major recognition package" }
```

The table will update automatically.

## Sponsors

Edit `sponsors.featured` for the large top sponsor tiles.

Keep featured sponsors in donation-size order when exact giving levels are known. If amounts are private or unknown, keep the approved stewardship order.

Use a logo when an approved image is available:

```js
{
  name: "Sponsor Name",
  url: "https://sponsor.example.com",
  logo: "images/sponsor-logo.png",
  note: "Short recognition line"
}
```

Use a wordmark-style tile when there is no logo file:

```js
{
  name: "Sponsor Name",
  url: "https://sponsor.example.com",
  style: "zebra",
  note: "Short recognition line"
}
```

Edit `sponsors.notes` for community partners and additional supporters.

## Board

Edit the `board` list:

```js
{ role: "President", name: "Name Here" }
```

The board list will update automatically.

## Images

Place new image files in `images/`, then reference them from `data/site-content.js` as:

```js
logo: "images/file-name.png"
```
