(function () {
  const content = window.siteContent;

  if (!content) {
    return;
  }

  function appendText(parent, tagName, text, className) {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    element.textContent = text;
    parent.appendChild(element);
    return element;
  }

  function createLinkOrSpan(item, className) {
    const element = item.url ? document.createElement("a") : document.createElement("span");
    element.className = className;
    element.textContent = item.name;
    if (item.url) {
      element.href = item.url;
    }
    return element;
  }

  function renderSeason() {
    const season = content.season;
    if (!season) {
      return;
    }

    const kicker = document.getElementById("season-kicker");
    const title = document.getElementById("season-title");
    const summary = document.getElementById("season-summary");
    const rank = document.getElementById("season-rank");
    const list = document.getElementById("season-highlights");

    if (kicker) {
      kicker.textContent = season.kicker;
    }

    if (title) {
      title.textContent = season.title;
    }

    if (summary) {
      summary.textContent = season.summary;
    }

    if (rank && season.rank) {
      rank.replaceChildren();
      appendText(rank, "strong", season.rank.value);
      appendText(rank, "span", season.rank.text);
    }

    if (list) {
      list.replaceChildren();
      season.highlights.forEach((highlight) => appendText(list, "li", highlight));
    }
  }

  function renderTiers() {
    const table = document.getElementById("sponsorship-tiers");
    if (!table || !content.sponsorship) {
      return;
    }

    table.replaceChildren();
    const header = document.createElement("div");
    header.className = "tier-row tier-head";
    header.setAttribute("role", "row");
    ["Tier", "Amount", "Headline Recognition"].forEach((label) => {
      const cell = appendText(header, "span", label);
      cell.setAttribute("role", "columnheader");
    });
    table.appendChild(header);

    content.sponsorship.tiers.forEach((tier) => {
      const row = document.createElement("div");
      row.className = "tier-row";
      row.setAttribute("role", "row");
      appendText(row, "span", tier.tier);
      appendText(row, "span", tier.amount);
      appendText(row, "span", tier.recognition);
      table.appendChild(row);
    });
  }

  function renderFeaturedSponsors() {
    const container = document.getElementById("featured-sponsors");
    if (!container || !content.sponsors) {
      return;
    }

    container.replaceChildren();
    content.sponsors.featured.forEach((sponsor) => {
      const tile = document.createElement("a");
      tile.className = sponsor.logo ? "sponsor-tile logo-tile" : "sponsor-tile wordmark-tile";
      if (sponsor.style) {
        tile.classList.add(sponsor.style);
      }
      tile.href = sponsor.url;

      if (sponsor.logo) {
        const image = document.createElement("img");
        image.src = sponsor.logo;
        image.alt = sponsor.name;
        tile.appendChild(image);
      } else {
        appendText(tile, "strong", sponsor.name);
      }

      appendText(tile, "span", sponsor.note);
      container.appendChild(tile);
    });
  }

  function renderSponsorNotes() {
    const container = document.getElementById("sponsor-context");
    if (!container || !content.sponsors) {
      return;
    }

    container.replaceChildren();
    content.sponsors.notes.forEach((note) => {
      const card = document.createElement("div");
      card.className = "sponsor-note";
      appendText(card, "h3", note.heading);

      if (note.type === "rotary") {
        const link = document.createElement("a");
        link.className = "rotary-feature";
        link.href = note.url;

        const image = document.createElement("img");
        image.src = note.logo;
        image.alt = `${note.name} logo`;
        link.appendChild(image);
        appendText(link, "span", note.name);
        card.appendChild(link);
      }

      if (note.supporters) {
        const list = document.createElement("div");
        list.className = "supporter-list";
        list.setAttribute("aria-label", note.heading);
        note.supporters.forEach((supporter) => {
          list.appendChild(createLinkOrSpan(supporter, "supporter-name"));
        });
        card.appendChild(list);
      }

      appendText(card, "p", note.text);
      container.appendChild(card);
    });
  }

  function renderNews() {
    const container = document.getElementById("news-cards");
    if (!container || !content.news) {
      return;
    }

    container.replaceChildren();
    content.news.forEach((item) => {
      const card = document.createElement("article");
      card.className = "update-card";
      appendText(card, "span", item.label);
      appendText(card, "h3", item.title);
      appendText(card, "p", item.text);

      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.cta;
      card.appendChild(link);

      container.appendChild(card);
    });
  }

  function renderBoard() {
    const container = document.getElementById("board-list");
    if (!container || !content.board) {
      return;
    }

    container.replaceChildren();
    content.board.forEach((member) => {
      const row = document.createElement("p");
      const role = document.createElement("strong");
      role.textContent = `${member.role}:`;
      row.appendChild(role);
      row.append(` ${member.name}`);
      container.appendChild(row);
    });
  }

  renderSeason();
  renderTiers();
  renderFeaturedSponsors();
  renderSponsorNotes();
  renderNews();
  renderBoard();
})();
