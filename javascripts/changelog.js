/*
 * Renders the latest commits straight from the GitHub REST API into the
 * #commit-feed element on the Changelog page. No build step, no token -
 * it just uses the public, unauthenticated commits endpoint, the same
 * approach GitHub's own "recently pushed" widgets use.
 */
(function () {
  const REPO = "abbasjhanjhi010/pomorodo-desktop";
  const COMMITS_API = `https://api.github.com/repos/${REPO}/commits?per_page=10`;
  const COMMITS_URL = `https://github.com/${REPO}/commits/main`;

  function timeAgo(dateString) {
    const seconds = Math.floor((Date.now() - new Date(dateString)) / 1000);
    const units = [
      ["year", 31536000],
      ["month", 2592000],
      ["day", 86400],
      ["hour", 3600],
      ["minute", 60],
    ];
    for (const [name, secondsInUnit] of units) {
      const value = Math.floor(seconds / secondsInUnit);
      if (value >= 1) return `${value} ${name}${value > 1 ? "s" : ""} ago`;
    }
    return "just now";
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function renderCommits(container, commits) {
    const list = document.createElement("ul");
    list.className = "commit-feed";

    commits.forEach((entry) => {
      const message = entry.commit.message.split("\n")[0];
      const sha = entry.sha.slice(0, 7);
      const authorName = entry.commit.author?.name || "unknown";
      const authorLogin = entry.author?.login;
      const avatar = entry.author?.avatar_url;
      const date = entry.commit.author?.date;

      const item = document.createElement("li");
      item.innerHTML = `
        ${avatar ? `<img class="avatar" src="${avatar}" alt="${escapeHtml(authorLogin || authorName)}" loading="lazy">` : ""}
        <div>
          <div class="commit-message">
            <a href="${entry.html_url}" target="_blank" rel="noopener">${escapeHtml(message)}</a>
          </div>
          <div class="commit-meta">
            <span class="commit-sha">${sha}</span>
            &middot; ${escapeHtml(authorLogin || authorName)}
            &middot; ${date ? timeAgo(date) : ""}
          </div>
        </div>
      `;
      list.appendChild(item);
    });

    container.innerHTML = "";
    container.appendChild(list);

    const link = document.createElement("p");
    link.innerHTML = `<a href="${COMMITS_URL}" target="_blank" rel="noopener">View full commit history on GitHub &rarr;</a>`;
    container.appendChild(link);
  }

  function init() {
    const container = document.getElementById("commit-feed");
    if (!container) return;

    container.innerHTML = '<p class="commit-feed-status">Loading recent commits from GitHub&hellip;</p>';

    fetch(COMMITS_API, { headers: { Accept: "application/vnd.github+json" } })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
        return res.json();
      })
      .then((commits) => renderCommits(container, commits))
      .catch(() => {
        container.innerHTML = `<p class="commit-feed-status">Couldn't load live commits right now &mdash;
          <a href="${COMMITS_URL}" target="_blank" rel="noopener">see the commit history on GitHub</a> instead.</p>`;
      });
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);

  // Re-run on instant-navigation page swaps (navigation.instant feature)
  if (window.document$) {
    window.document$.subscribe(init);
  }
})();
