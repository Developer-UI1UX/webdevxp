const plans = [
  { name: "DS 1", series: "DS Series", price: 30000, daily: 3000, days: 30, total: 90000, profit: 60000 },
  { name: "DS 2", series: "DS Series", price: 50000, daily: 4500, days: 30, total: 135000, profit: 85000 },
  { name: "DS 3", series: "DS Series", price: 70000, daily: 5000, days: 30, total: 150000, profit: 80000 },
  { name: "R 1", series: "R Series", price: 150000, daily: 9000, days: 25, total: 225000, profit: 75000 },
  { name: "R 2", series: "R Series", price: 200000, daily: 10000, days: 25, total: 250000, profit: 50000 },
  { name: "R 3", series: "R Series", price: 250000, daily: 12500, days: 25, total: 312500, profit: 62500 },
  { name: "R 4", series: "R Series", price: 300000, daily: 15000, days: 25, total: 375000, profit: 75000 },
  { name: "T 1", series: "T Series", price: 200000, daily: 20000, days: 30, total: 600000, profit: 400000 },
  { name: "T 2", series: "T Series", price: 300000, daily: 30000, days: 30, total: 900000, profit: 600000 },
  { name: "T 3", series: "T Series", price: 400000, daily: 40000, days: 30, total: 1200000, profit: 800000 },
  { name: "T 4", series: "T Series", price: 500000, daily: 50000, days: 30, total: 1500000, profit: 1000000 },
  { name: "T 5", series: "T Series", price: 600000, daily: 60000, days: 30, total: 1800000, profit: 1200000 },
  { name: "T 6", series: "T Series", price: 700000, daily: 70000, days: 30, total: 2100000, profit: 1400000 },
  { name: "DX 1", series: "DX Series", price: 100000, daily: 8500, days: 25, total: 212500, profit: 112500 },
  { name: "DX 2", series: "DX Series", price: 200000, daily: 18000, days: 25, total: 450000, profit: 250000 },
  { name: "DX 3", series: "DX Series", price: 300000, daily: 30000, days: 25, total: 750000, profit: 450000 },
  { name: "DX 4", series: "DX Series", price: 400000, daily: 40000, days: 25, total: 1000000, profit: 600000 },
  { name: "VIP 1", series: "VIP Series · VIP 1", price: 20000, daily: 2000, days: 20, total: 40000, profit: 20000 },
  { name: "VIP 1 PRO", series: "VIP Series · VIP 1", price: 30000, daily: 3000, days: 40, total: 120000, profit: 90000 },
  { name: "VIP 1 MAX", series: "VIP Series · VIP 1", price: 55000, daily: 10000, days: 20, total: 200000, profit: 145000 },
  { name: "VIP 2", series: "VIP Series · VIP 2", price: 50000, daily: 5000, days: 20, total: 100000, profit: 50000 },
  { name: "VIP 2 PRO", series: "VIP Series · VIP 2", price: 50000, daily: 5000, days: 40, total: 200000, profit: 150000 },
  { name: "VIP 2 MAX", series: "VIP Series · VIP 2", price: 100000, daily: 10000, days: 40, total: 400000, profit: 300000 },
  { name: "VIP 3", series: "VIP Series · VIP 3", price: 100000, daily: 10000, days: 20, total: 200000, profit: 100000 },
  { name: "VIP 3 PRO", series: "VIP Series · VIP 3", price: 100000, daily: 10000, days: 40, total: 400000, profit: 300000 },
  { name: "VIP 3 MAX", series: "VIP Series · VIP 3", price: 300000, daily: 12500, days: 40, total: 500000, profit: 200000 },
  { name: "VIP 4", series: "VIP Series · VIP 4", price: 200000, daily: 26000, days: 20, total: 520000, profit: 320000 },
  { name: "VIP 4 PRO", series: "VIP Series · VIP 4", price: 300000, daily: 25000, days: 40, total: 1000000, profit: 700000 },
  { name: "VIP 4 MAX", series: "VIP Series · VIP 4", price: 400000, daily: 30000, days: 40, total: 1200000, profit: 800000 },
  { name: "VIP 5", series: "VIP Series · VIP 5", price: 300000, daily: 50000, days: 20, total: 1000000, profit: 700000 },
  { name: "VIP 5 PRO", series: "VIP Series · VIP 5", price: 400000, daily: 37500, days: 40, total: 1500000, profit: 1100000 },
  { name: "VIP 5 MAX", series: "VIP Series · VIP 5", price: 600000, daily: 55000, days: 40, total: 2200000, profit: 1600000 }
];

const initialState = {
  view: "login",
  authMode: "login",
  authed: false,
  user: null,
  phone: "",
  wallet: 0,
  balance: 0,
  hasDeposited: false,
  activePlans: [],
  machines: [],
  team: [],
  transactions: [],
  adminStats: null,
  adminUsers: [],
  allTransactions: [],
  gatewayStatus: null,
  teamTab: "all",
  adminTab: "overview",
  modal: null,
  query: "",
  seriesFilter: "All series",
  chatMessages: [],
  profile: { username: "", phone: "", withdrawName: "", withdrawNumber: "" },
  settings: { telegram: "https://t.me/+MZ8nQgmlDuAwMGE0", whatsapp: "https://chat.whatsapp.com/JVsuq4vnyEZ4M2ha4aYHUq", support: "079340296" }
};

const state = { ...initialState, profile: { ...initialState.profile }, settings: { ...initialState.settings } };
const app = document.getElementById("app");
const toastEl = document.getElementById("toast");
const navItems = [
  { id: "dashboard", label: "Overview", icon: "◫", group: "Workspace" },
  { id: "miners", label: "Mining machines", icon: "₿" },
  { id: "activity", label: "Activity monitor", icon: "⌁" },
  { id: "team", label: "My team", icon: "♧" },
  { id: "wallet", label: "Wallet & payouts", icon: "◈" },
  { id: "account", label: "Account settings", icon: "⚙" },
  { id: "support", label: "Customer care", icon: "✉" },
  { id: "super-admin", label: "Owner preview", icon: "▤", group: "Administration" }
];

function save() {
  try {
    localStorage.setItem("harxpay-preferences", JSON.stringify({
      view: state.view,
      authMode: state.authMode,
      teamTab: state.teamTab,
      adminTab: state.adminTab,
      query: state.query,
      seriesFilter: state.seriesFilter
    }));
  } catch (error) {
    console.warn("Harx Pay prototype state could not be saved.", error);
    showToast("This browser could not save the changes.");
  }
}
function money(amount) {
  return `UGX ${Number(amount || 0).toLocaleString("en-UG")}`;
}
function safeExternalUrl(value) {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toastEl.classList.remove("show"), 2800);
}
function formatDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "—" : date.toLocaleString("en-UG");
}
function machineFromApi(machine) {
  const name = machine.name || "Miner";
  const series = machine.series || name.split(/\s+/)[0] + " Series";
  const days = Number(machine.durationDays) || 30;
  const daily = Number(machine.incomePerDay) || Number(machine.incomePerHour) * 24 || 0;
  const total = daily * days;
  return { ...machine, series, daily, days, total, profit: total - Number(machine.price || 0) };
}
function transactionFromApi(tx) {
  const negative = /purchase|withdrawal/i.test(tx.type || "");
  return {
    ...tx,
    detail: tx.description || tx.paymentMethod || tx.reference || "",
    date: formatDate(tx.createdAt),
    amount: negative ? -Math.abs(Number(tx.amount || 0)) : Number(tx.amount || 0)
  };
}
async function refreshAccount() {
  const [me, wallet, transactions, purchases] = await Promise.all([
    HarxApi.request("/auth/me"),
    HarxApi.request("/wallet/balance"),
    HarxApi.request("/wallet/transactions?page=1&limit=100"),
    HarxApi.request("/purchase/my-purchases")
  ]);
  state.user = me.user;
  state.profile = {
    username: me.user.name || "",
    phone: me.user.phone || "",
    withdrawName: me.user.withdrawName || "",
    withdrawNumber: me.user.withdrawNumber || ""
  };
  state.phone = me.user.phone || "";
  state.wallet = Number(wallet.wallet || 0);
  state.balance = Number(wallet.balance || 0);
  state.hasDeposited = Boolean(wallet.hasDeposited);
  state.transactions = (transactions.transactions || [])
    .filter(tx => tx.type !== "Activity")
    .map(transactionFromApi);
  state.activePlans = (purchases.machines || []).map(machineFromApi);
}
async function loadViewData(view = state.view) {
  if (!state.user) return;
  if (view === "miners") {
    const result = await HarxApi.request("/mining/machines");
    state.machines = (result.machines || []).map(machineFromApi);
  }
  if (view === "team") {
    const result = await HarxApi.request("/team/my-team");
    state.team = result.team || [];
  }
  if (view === "super-admin" && ["admin", "superadmin"].includes(state.user.role)) {
    const [stats, transactions, machines, users] = await Promise.all([
      HarxApi.request("/admin/stats"),
      HarxApi.request("/admin/all-transactions"),
      HarxApi.request("/admin/machines"),
      HarxApi.request("/admin/users")
    ]);
    state.adminStats = stats;
    state.allTransactions = (transactions.transactions || []).map(tx => ({
      ...transactionFromApi(tx),
      userName: tx.user?.name || "Account",
      userPhone: tx.user?.phone || ""
    }));
    state.machines = (machines.machines || []).map(machineFromApi);
    state.adminUsers = users.users || [];
    if (state.adminTab === "integrations" && state.user.role === "superadmin") {
      state.gatewayStatus = await HarxApi.request("/superadmin/api/status");
    }
  }
}
async function bootstrapSession() {
  if (!HarxApi.hasToken()) return;
  try {
    await refreshAccount();
    state.authed = true;
    state.view = "dashboard";
    await loadViewData(state.view);
  } catch (error) {
    state.authed = false;
    showToast(error.message);
  }
  render();
}
function pageTitle(view) {
  const item = navItems.find(link => link.id === view);
  return item ? item.label : "Overview";
}
function render() {
  app.innerHTML = state.authed ? renderShell() : renderAuth();
}
function renderAuth() {
  const registering = state.authMode === "register";
  return `
    <div class="auth-wrap">
      <section class="auth-intro">
        <a class="brand" href="#" aria-label="Harx Pay home"><span class="brand-mark">H</span> HARX PAY</a>
        <div class="eyebrow" style="margin-top:58px">A new way to build</div>
        <h1>Digital mining.<br><span>Made simple.</span></h1>
        <p>Explore the Harx Pay mining dashboard, follow platform activity and keep your account in one place.</p>
        <div class="feature-list">
          <div class="feature"><span class="feature-icon">◈</span> Track your balance and wallet separately</div>
          <div class="feature"><span class="feature-icon">₿</span> Explore digital mining machine packages</div>
          <div class="feature"><span class="feature-icon">♧</span> Share your invite link and manage your team</div>
        </div>
      </section>
      <section class="auth-card">
        <div class="eyebrow">Welcome to Harx Pay</div>
        <h2>${registering ? "Create your account" : "Welcome back"}</h2>
        <p class="subtext">${registering ? "Get started with your phone number and a secure password." : "Sign in to continue to your mining dashboard."}</p>
        <div class="auth-switch">
          <button type="button" class="${!registering ? "active" : ""}" data-auth-mode="login">Sign in</button>
          <button type="button" class="${registering ? "active" : ""}" data-auth-mode="register">Create account</button>
        </div>
        <form id="auth-form">
          ${registering ? `<div class="field"><label for="auth-name">Username</label><input id="auth-name" name="username" placeholder="How should we call you?" required /></div>` : ""}
          <div class="field">
            <label for="auth-phone">Phone number</label>
            <div class="input-wrap"><span class="prefix">+256</span><input id="auth-phone" class="phone-input" name="phone" inputmode="tel" autocomplete="tel" placeholder="7XX XXX XXX" required /></div>
          </div>
          <div class="field"><label for="auth-password">Password</label><input id="auth-password" name="password" type="password" autocomplete="${registering ? "new-password" : "current-password"}" minlength="${registering ? 10 : 1}" placeholder="${registering ? "At least 10 characters" : "Enter your password"}" required /></div>
          ${registering ? `<div class="field"><label for="auth-referral">Invite code <span style="color:var(--muted);font-weight:400">(optional)</span></label><input id="auth-referral" name="referral" value="${escapeHtml(new URLSearchParams(location.search).get("ref") || "")}" placeholder="Paste an invite code" /></div>` : ""}
          ${registering ? `<div class="notice notice-blue" style="margin-bottom:16px">The account credit, if enabled, is recorded by the server. A verified deposit is required before first withdrawal.</div>` : ""}
          <button class="btn btn-primary btn-wide" type="submit">${registering ? "Create account" : "Sign in"} <span>→</span></button>
        </form>
        <div class="prototype-note">Your account and transaction data are loaded from the Harx Pay API. Payment processing is unavailable until the provider contract is configured and verified.</div>
        <div class="auth-footer">By continuing, you agree to Harx Pay's terms and privacy policy.</div>
      </section>
    </div>`;
}
function renderShell() {
  return `
    <div class="shell">
      <section class="main-column">
        <header class="topbar">
          <div style="display:flex;align-items:center;gap:12px"><a class="brand top-brand" href="#" data-view="dashboard"><span class="brand-mark">H</span> HARX PAY</a><div class="breadcrumbs">Harx Pay <span style="color:#53617a">/</span> <strong>${escapeHtml(pageTitle(state.view))}</strong></div></div>
          <div class="top-actions"><button class="top-icon" type="button" data-view="support" aria-label="Customer support">✉</button><button class="top-icon" type="button" data-action="logout" aria-label="Sign out">↗</button></div>
        </header>
        <main class="content">${renderPage()}</main>
      </section>
      <nav class="bottom-nav" aria-label="Main navigation">${navItems.filter(item => item.id !== "super-admin" || ["admin", "superadmin"].includes(state.user?.role)).map(navLink).join("")}</nav>
      ${state.modal ? renderModal() : ""}
    </div>`;
}
function navLink(item) {
  return `<button type="button" class="nav-link ${state.view === item.id ? "active" : ""}" data-view="${item.id}" aria-current="${state.view === item.id ? "page" : "false"}" aria-label="${item.label}" title="${item.label}"><span class="nav-icon">${item.icon}</span><span class="nav-label">${item.label}</span></button>`;
}
function heading(kicker, title, description, actions = "") {
  return `<div class="page-heading"><div><div class="eyebrow">${kicker}</div><h1>${title}</h1><p>${description}</p></div><div class="heading-actions">${actions}</div></div>`;
}
function renderPage() {
  switch (state.view) {
    case "miners": return renderMiners();
    case "activity": return renderActivity();
    case "team": return renderTeam();
    case "wallet": return renderWallet();
    case "account": return renderAccount();
    case "support": return renderSupport();
    case "super-admin": return ["admin", "superadmin"].includes(state.user?.role) ? renderAdmin() : renderDashboard();
    default: return renderDashboard();
  }
}
function statCard(label, value, note, icon, positive = false) {
  return `<article class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon">${icon}</span></div><div class="stat-value">${value}</div><div class="stat-foot ${positive ? "positive" : ""}">${note}</div></article>`;
}
function chartSvg() {
  return `<div class="chart-area"><svg viewBox="0 0 700 225" role="img" aria-label="Illustrative earnings trend chart">
    <defs><linearGradient id="areaGreen" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#57d99d" stop-opacity=".25"/><stop offset="1" stop-color="#57d99d" stop-opacity="0"/></linearGradient><linearGradient id="areaBlue" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#829fff" stop-opacity=".13"/><stop offset="1" stop-color="#829fff" stop-opacity="0"/></linearGradient></defs>
    <g class="chart-grid"><line x1="0" y1="35" x2="700" y2="35"/><line x1="0" y1="83" x2="700" y2="83"/><line x1="0" y1="131" x2="700" y2="131"/><line x1="0" y1="179" x2="700" y2="179"/></g>
    <path d="M0 180 C35 165 49 169 78 149 S126 159 158 130 S203 147 236 111 S281 128 316 98 S360 114 393 83 S440 107 472 66 S520 83 553 55 S605 74 631 43 S673 52 700 23 L700 200 L0 200Z" fill="url(#areaGreen)"/>
    <path d="M0 180 C35 165 49 169 78 149 S126 159 158 130 S203 147 236 111 S281 128 316 98 S360 114 393 83 S440 107 472 66 S520 83 553 55 S605 74 631 43 S673 52 700 23" fill="none" stroke="#61dfa4" stroke-width="2.5"/>
    <path d="M0 185 C44 184 58 166 94 174 S145 151 177 163 S218 139 254 154 S299 135 335 144 S378 114 413 136 S453 107 488 118 S532 95 568 109 S613 86 651 99 S680 74 700 80 L700 200 L0 200Z" fill="url(#areaBlue)"/>
    <path d="M0 185 C44 184 58 166 94 174 S145 151 177 163 S218 139 254 154 S299 135 335 144 S378 114 413 136 S453 107 488 118 S532 95 568 109 S613 86 651 99 S680 74 700 80" fill="none" stroke="#829fff" stroke-width="1.5" stroke-dasharray="5 5"/>
  </svg></div><div class="chart-labels"><span>01 Oct</span><span>05 Oct</span><span>10 Oct</span><span>15 Oct</span><span>20 Oct</span><span>25 Oct</span><span>30 Oct</span></div>`;
}
function renderDashboard() {
  const daily = state.activePlans.reduce((sum, item) => sum + Number(item.incomePerDay || 0), 0);
  return `${heading("Workspace / overview", `Good morning, ${escapeHtml(state.profile.username || "member")}`, "Here's a snapshot of your mining activity and account balances.", `<button class="btn btn-primary" data-modal="deposit">＋ Deposit</button><button class="btn" data-view="miners">Explore machines →</button>`)}
    <div class="grid stats-grid">
      ${statCard("Available balance", money(state.balance), state.hasDeposited ? "Internal account · withdrawable" : "Deposit required before first withdrawal", "◈", state.hasDeposited)}
      ${statCard("External wallet", money(state.wallet), "Confirmed deposits · transferable", "↗")}
      ${statCard("Daily machine rate", money(daily), "Configured active machine rates", "⌁", true)}
      ${statCard("Active machines", state.activePlans.length.toString(), "Mining cycles in progress", "₿")}
    </div>
    <div class="grid two-col">
      <section class="panel"><div class="panel-head"><div><h2>Account activity</h2><small>Recorded account movement</small></div><div class="chart-legend"><span><i class="legend-dot"></i>See transaction ledger</span></div></div><div class="panel-body"><div class="activity-list">${state.transactions.slice(0, 5).map(transactionRow).join("") || `<div class="empty-state">No account activity yet.</div>`}</div></div></section>
      <section class="panel"><div class="panel-head"><div><h2>Mining machines</h2><small>Your active packages</small></div><button class="btn btn-ghost" data-view="miners">View all →</button></div><div class="panel-body"><div class="earning-summary"><div class="label">Configured daily rate</div><strong>${money(daily)}</strong><small>Actual earnings are calculated and credited by the API.</small></div><div class="miner-preview">${state.activePlans.slice(0, 3).map(machine => `<div class="miner-row"><div class="miner-ident"><span class="coin-icon">₿</span><div><strong>${escapeHtml(machine.name)} Miner</strong><small>${escapeHtml(machine.series)} · purchased ${formatDate(machine.purchasedAt)}</small></div></div><button class="btn btn-ghost" data-claim="${escapeHtml(machine._id || "")}">Claim</button></div>`).join("") || `<div class="empty-state">You don't have any active machines yet.</div>`}</div><button class="btn" data-action="claim-all" ${state.activePlans.length ? "" : "disabled"}>Claim all available earnings</button></div></section>
    </div>
    <section class="panel section-spacer"><div class="panel-head"><div><h2>Recent activity</h2><small>Your latest account events</small></div><button class="btn btn-ghost" data-view="activity">View activity →</button></div><div class="panel-body"><div class="activity-list">${state.transactions.slice(0, 4).map(transactionRow).join("")}</div></div></section>
    <div class="notice section-spacer"><strong>Important:</strong> Machine rates are configured by the operator and are not guarantees of profit. Deposits, withdrawals, and earnings depend on the verified provider contract, deployment, and applicable requirements.</div>`;
}
function planCard(plan, index) {
  return `<article class="plan-card ${index === 0 ? "featured" : ""}"><div class="plan-top"><span class="series">${escapeHtml(plan.series)}</span><span class="pill">${index === 0 ? "Popular" : "Miner"}</span></div><div class="plan-name">₿ ${escapeHtml(plan.name)}</div><div class="plan-price">${money(plan.price)} <small>one-time</small></div><div class="plan-details"><span>Daily estimate<strong>${money(plan.daily)}</strong></span><span>Cycle length<strong>${plan.days} active days</strong></span><span>Total estimate<strong>${money(plan.total)}</strong></span><span>Illustrative profit<strong>${money(plan.profit)}</strong></span></div><div class="plan-return"><span>Weekdays only</span><strong>Sample terms</strong></div><button class="btn ${index === 0 ? "btn-primary" : ""}" data-buy="${escapeHtml(plan.name)}">Purchase</button></article>`;
}
function renderMiners() {
  const filtered = state.machines.filter(plan => (state.seriesFilter === "All series" || plan.series.toLowerCase().includes(state.seriesFilter.toLowerCase().replace(" series", ""))) && `${plan.name} ${plan.series}`.toLowerCase().includes(state.query.toLowerCase()));
  return `${heading("Mining machines", "Choose your machine", "Packages and prices are loaded from the Harx Pay server.", `<button class="btn" data-view="activity">⌁ Activity monitor</button>`)}
    <div class="notice notice-blue" style="margin-bottom:17px">Review the listed purchase price and earnings terms before paying. Returns are not guaranteed.</div>
    <div class="panel" style="margin-bottom:17px"><div class="panel-body" style="padding:12px 15px"><div class="filters"><input class="input" type="search" placeholder="Search machines…" value="${escapeHtml(state.query)}" data-filter="query" aria-label="Search machines"><select class="select" data-filter="series" aria-label="Filter by series">${["All series", "DS Series", "R Series", "T Series", "DX Series", "VIP Series"].map(s => `<option ${state.seriesFilter === s ? "selected" : ""}>${s}</option>`).join("")}</select><span class="footnote" style="align-self:center">${filtered.length} machines</span></div></div></div>
    <div class="grid plan-grid">${filtered.map(planCard).join("") || `<div class="empty-state">No packages match your search.</div>`}</div>
    <div class="footnote section-spacer">Machine purchase and earnings are recorded by the server. The published rates are operator-configured and should not be treated as guaranteed returns.</div>`;
}
function transactionRow(tx) {
  const negative = tx.amount < 0;
  const symbol = tx.type.toLowerCase().includes("withdraw") ? "↗" : tx.type.toLowerCase().includes("purchase") ? "₿" : tx.type.toLowerCase().includes("deposit") ? "＋" : "⌁";
  return `<div class="activity-item"><span class="activity-symbol ${negative ? "orange" : ""}">${symbol}</span><div><strong>${escapeHtml(tx.type)}</strong><small>${escapeHtml(tx.detail)} · ${escapeHtml(tx.date)}</small></div><div class="activity-amount ${negative ? "" : "positive"}">${negative ? "−" : "+"}${money(Math.abs(tx.amount))}<small>${escapeHtml(tx.status)}</small></div></div>`;
}
function renderActivity() {
  const completed = state.transactions.filter(tx => tx.status === "Completed").length;
  const pending = state.transactions.filter(tx => tx.status === "Pending").length;
  return `${heading("System monitor", "Platform activity", "Transactions recorded for your account by the Harx Pay API.", `<button class="btn" data-action="export">↓ Export CSV</button>`)}
    <div class="grid stats-grid">${statCard("Transactions shown", state.transactions.length.toString(), "Latest 100 records", "↔")}${statCard("Completed", completed.toString(), "Server-confirmed", "✓", true)}${statCard("Pending", pending.toString(), "Awaiting provider or review", "◷")}${statCard("Last event", state.transactions[0]?.date || "—", "Latest account record", "⌁")}</div>
    <section class="panel"><div class="panel-head"><div><h2>Account movement</h2><small>Deposits, machine purchases, earnings and withdrawals</small></div></div><div class="panel-body"><div class="activity-list">${state.transactions.map(transactionRow).join("") || `<div class="empty-state">No transactions recorded yet.</div>`}</div></div></section>`;
}
function renderTeam() {
  const referral = `${location.origin}/?ref=${encodeURIComponent(state.user?.inviteCode || state.user?.id || "")}`;
  return `${heading("Community", "Your referral team", "Invite members with your unique account code.", `<button class="btn btn-primary" data-action="share">↗ Share invite</button>`)}
    <div class="team-hero"><section class="referral-box"><div class="eyebrow">Your invite link</div><h2>Invite your community</h2><p>New accounts using this link are connected to your team.</p><div class="copy-row"><input id="referral-link" readonly value="${escapeHtml(referral)}" aria-label="Your invite link"><button class="btn btn-primary" data-action="copy-referral">Copy link</button></div></section><div class="team-stats"><div class="team-stat"><span>Direct team members</span><strong>${state.team.length}</strong></div><div class="team-stat"><span>Referral rate</span><strong>—</strong></div><div class="team-stat"><span>Deposited members</span><strong>${state.team.filter(member => member.hasDeposited).length}</strong></div><div class="team-stat"><span>Referral rewards</span><strong>—</strong></div></div></div>
    <section class="panel section-spacer"><div class="panel-head"><div><h2>Team members</h2><small>Direct referrals from your account</small></div></div><div class="table-wrap"><table><thead><tr><th>Member</th><th>Phone</th><th>Joined</th><th>Deposit status</th></tr></thead><tbody>${state.team.map(member => `<tr><td><strong>${escapeHtml(member.name)}</strong></td><td>${escapeHtml(member.phone)}</td><td>${escapeHtml(formatDate(member.createdAt))}</td><td><span class="pill ${member.hasDeposited ? "" : "pending"}">${member.hasDeposited ? "Deposited" : "Not deposited"}</span></td></tr>`).join("") || `<tr><td colspan="4">No direct referrals yet.</td></tr>`}</tbody></table></div></section>`;
}
function renderWallet() {
  return `${heading("Accounts", "Wallet & payouts", "Keep external funding separate from your internal balance. Withdrawals use the internal balance account.", `<button class="btn btn-primary" data-modal="deposit">＋ Deposit funds</button>`)}
    <div class="notice" style="margin-bottom:17px"><strong>Withdrawals:</strong> minimum ${money(5000)} · 10% stated charge · requests between 8:00 AM and 10:00 PM · stated processing target 30 minutes. Actual processing is not connected.</div>
    <div class="grid wallet-grid">
      <article class="panel wallet-card wallet-funding"><div class="wallet-label">External wallet · funding</div><div class="wallet-value">${money(state.wallet)}</div><div class="wallet-hint">Confirmed deposits from outside the platform</div><div class="wallet-actions"><button class="btn btn-primary" data-modal="deposit">Deposit</button><button class="btn" data-action="transfer" ${state.wallet <= 0 ? "disabled" : ""}>Transfer to balance</button></div></article>
      <article class="panel wallet-card wallet-balance"><div class="wallet-label">Internal balance · available</div><div class="wallet-value">${money(state.balance)}</div><div class="wallet-hint">Used for machine purchases and withdrawals</div><div class="wallet-actions"><button class="btn btn-primary" data-modal="withdraw" ${!state.hasDeposited ? "disabled" : ""}>Withdraw</button><button class="btn" data-view="miners">Buy a machine</button></div></article>
    </div>
    <div class="grid two-col section-spacer"><section class="panel"><div class="panel-head"><div><h2>Recent movements</h2><small>Server ledger</small></div><button class="btn btn-ghost" data-view="activity">Full activity →</button></div><div class="panel-body"><div class="activity-list">${state.transactions.slice(0, 4).map(transactionRow).join("") || `<div class="empty-state">No transactions yet.</div>`}</div></div></section><section class="panel"><div class="panel-head"><div><h2>Withdrawal details</h2><small>Current payout destination</small></div><button class="btn btn-ghost" data-view="account">Edit →</button></div><div class="panel-body"><p style="font-size:12px;margin:4px 0 7px">${escapeHtml(state.profile.withdrawName || "No account added")}</p><p class="footnote" style="margin:0">${escapeHtml(state.profile.withdrawNumber || "Add mobile money details in account settings")}</p></div></section></div>
    ${!state.hasDeposited ? `<div class="notice section-spacer">Please make a deposit before requesting your first withdrawal.</div>` : ""}
    <div class="server-note">Deposit funds are credited only after the backend receives and verifies a confirmed payment callback.</div>`;
}
function renderAccount() {
  return `${heading("Account", "Profile & preferences", "Manage your contact details and withdrawal destination.")}
    <div class="grid two-col"><section class="panel"><div class="panel-head"><div><h2>Personal details</h2><small>Updates are saved by the account API</small></div></div><div class="panel-body"><form id="profile-form" class="form-grid"><div class="field"><label for="profile-name">Username</label><input id="profile-name" name="username" value="${escapeHtml(state.profile.username)}" required></div><div class="field"><label for="profile-phone">Phone number</label><input id="profile-phone" name="phone" inputmode="tel" value="${escapeHtml(state.profile.phone || state.phone)}" placeholder="+256 7XX XXX XXX" required></div><div class="field"><label for="current-password">Current password (required to change password)</label><input id="current-password" name="currentPassword" type="password" autocomplete="current-password"></div><div class="field"><label for="new-password">New password</label><input id="new-password" name="password" type="password" minlength="10" autocomplete="new-password" placeholder="Leave blank to keep current"></div><div class="full"><button type="submit" class="btn btn-primary">Save profile</button></div></form></div></section>
      <section class="panel"><div class="panel-head"><div><h2>Withdrawal account</h2><small>Mobile money details</small></div></div><div class="panel-body"><form id="withdraw-account-form"><div class="field"><label for="withdraw-name">Account holder name</label><input id="withdraw-name" name="withdrawName" value="${escapeHtml(state.profile.withdrawName)}" placeholder="Name as registered with provider" required></div><div class="field"><label for="withdraw-number">Mobile money number</label><input id="withdraw-number" name="withdrawNumber" inputmode="tel" value="${escapeHtml(state.profile.withdrawNumber)}" placeholder="+256 7XX XXX XXX" required></div><button type="submit" class="btn btn-primary">Save payout details</button></form></div></section></div>
    <div class="notice section-spacer">Use a unique password for this account. Password changes require your current password.</div>`;
}
function renderSupport() {
  const telegram = safeExternalUrl(state.settings.telegram);
  const whatsapp = safeExternalUrl(state.settings.whatsapp);
  const phone = /^[+\d\s()-]+$/.test(state.settings.support) ? state.settings.support : "";
  return `${heading("Help center", "Customer care", "Contact the support channels configured for this service.", `<a class="btn" href="${escapeHtml(telegram || "#")}" target="_blank" rel="noreferrer">Open Telegram ↗</a>`)}
    <div class="panel"><div class="panel-head"><h2>Contact channels</h2></div><div class="panel-body support-links"><a class="support-link" href="tel:${escapeHtml(phone)}"><span class="support-icon">☎</span><span><strong>Call customer care</strong><small>${escapeHtml(state.settings.support)}</small></span></a><a class="support-link" href="${escapeHtml(telegram || "#")}" target="_blank" rel="noreferrer"><span class="support-icon">➤</span><span><strong>Telegram group</strong><small>Join our community</small></span></a><a class="support-link" href="https://telegram.org/dl" target="_blank" rel="noreferrer"><span class="support-icon">↗</span><span><strong>Get Telegram</strong><small>Download the app</small></span></a><a class="support-link" href="${escapeHtml(whatsapp || "#")}" target="_blank" rel="noreferrer"><span class="support-icon">◉</span><span><strong>WhatsApp group</strong><small>Join the group chat</small></span></a></div></div>`;
}
function renderAdmin() {
  const tabs = ["overview", "transactions", "plans", "members", ...(state.user.role === "superadmin" ? ["integrations"] : [])];
  return `${heading(state.user.role === "superadmin" ? "Super administrator" : "Administration", "Control room", "Live account data and management actions are served by authenticated admin endpoints.")}
    <div class="admin-tabs">${tabs.map(tab => `<button class="${state.adminTab === tab ? "active" : ""}" data-admin-tab="${tab}">${tab[0].toUpperCase() + tab.slice(1)}</button>`).join("")}</div>
    ${state.adminTab === "overview" ? renderAdminOverview() : state.adminTab === "transactions" ? renderAdminTransactions() : state.adminTab === "plans" ? renderAdminPlans() : state.adminTab === "members" ? renderAdminMembers() : state.user.role === "superadmin" ? renderIntegrations() : ""}`;
}
function renderAdminOverview() {
  const stats = state.adminStats || {};
  return `<div class="grid stats-grid">${statCard("Total users", Number(stats.totalUsers || 0).toLocaleString(), "Registered accounts", "♧", true)}${statCard("Total deposits", money(stats.totalDeposited), "Confirmed deposit records", "◈")}${statCard("Total payouts", money(stats.totalWithdrawn), "Completed payout totals", "↗")}${statCard("Machines sold", Number(stats.totalMachinesSold || 0).toLocaleString(), "Active and completed purchases", "₿")}</div><div class="grid stats-grid">${statCard("Total earnings credited", money(stats.totalEarned), "Ledger aggregate", "⌁")}${statCard("Outstanding balances", money(stats.totalBalance), "Across non-deleted accounts", "◈")}</div><section class="panel section-spacer"><div class="panel-head"><div><h2>Recent platform transactions</h2><small>Latest account records</small></div><button class="btn" data-admin-tab="transactions">All transactions →</button></div><div class="panel-body"><div class="activity-list">${state.allTransactions.slice(0, 5).map(transactionRow).join("") || `<div class="empty-state">No transactions recorded.</div>`}</div></div></section>`;
}
function renderAdminTransactions() {
  return `<section class="panel"><div class="panel-head"><div><h2>All transactions</h2><small>Server ledger, latest first</small></div></div><div class="table-wrap"><table><thead><tr><th>Type</th><th>Account</th><th>Details</th><th>Time</th><th>Amount</th><th>Status</th></tr></thead><tbody>${state.allTransactions.map(tx => `<tr><td><strong>${escapeHtml(tx.type)}</strong></td><td>${escapeHtml(tx.userName)}<small>${escapeHtml(tx.userPhone)}</small></td><td>${escapeHtml(tx.detail)}</td><td>${escapeHtml(tx.date)}</td><td>${tx.amount < 0 ? "−" : "+"}${money(Math.abs(tx.amount))}</td><td><span class="pill">${escapeHtml(tx.status)}</span></td></tr>`).join("") || `<tr><td colspan="6">No transactions recorded.</td></tr>`}</tbody></table></div></section>`;
}
function renderAdminPlans() {
  return `<section class="panel"><div class="panel-head"><div><h2>Machine catalog</h2><small>${state.machines.length} server-configured machines</small></div></div><div class="panel-body"><form id="machine-form" class="form-grid"><div class="field"><label>Machine name</label><input name="name" required></div><div class="field"><label>Series</label><input name="series" required></div><div class="field"><label>Price (UGX)</label><input name="price" type="number" min="1" required></div><div class="field"><label>Income per hour</label><input name="incomePerHour" type="number" min="0" required></div><div class="field"><label>Income per day</label><input name="incomePerDay" type="number" min="0" required></div><div class="field"><label>Duration (days)</label><input name="durationDays" type="number" min="1" value="30" required></div><div class="field"><label>Machine image URL (HTTPS)</label><input name="image" type="url" placeholder="https://…"></div><div class="full"><button type="submit" class="btn btn-primary">Add machine</button></div></form></div><div class="table-wrap"><table><thead><tr><th>Machine</th><th>Series</th><th>Price</th><th>Daily</th><th>Duration</th><th>Image</th><th>Actions</th></tr></thead><tbody>${state.machines.map(machine => `<tr><td><strong>${escapeHtml(machine.name)}</strong></td><td>${escapeHtml(machine.series || "")}</td><td>${money(machine.price)}</td><td>${money(machine.incomePerDay)}</td><td>${Number(machine.durationDays) || 30} days</td><td>${machine.image ? `<a href="${escapeHtml(machine.image)}" target="_blank" rel="noreferrer">View</a>` : "—"}</td><td><button class="btn btn-ghost" data-edit-plan="${escapeHtml(machine._id)}">Edit</button><button class="btn" data-delete-machine="${escapeHtml(machine._id)}">Remove</button></td></tr>`).join("") || `<tr><td colspan="7">No machines configured.</td></tr>`}</tbody></table></div></section>`;
}
function renderAdminMembers() {
  return `<section class="panel"><div class="panel-head"><div><h2>Member accounts</h2><small>Server-managed accounts; super-admins are protected</small></div></div><div class="table-wrap"><table><thead><tr><th>Member</th><th>Phone</th><th>Role</th><th>Balance</th><th>Status</th><th>Controls</th></tr></thead><tbody>${state.adminUsers.map(user => `<tr><td><strong>${escapeHtml(user.name)}</strong></td><td>${escapeHtml(user.phone)}</td><td>${escapeHtml(user.role)}</td><td>${money(user.balance)}</td><td><span class="pill ${user.isBanned ? "pending" : ""}">${user.isBanned ? "Banned" : "Active"}</span></td><td>${user.role === "superadmin" ? "Protected" : `<button class="btn" data-user-edit="${escapeHtml(user._id)}">Edit</button><button class="btn" data-user-ban="${escapeHtml(user._id)}" data-banned="${user.isBanned}">${user.isBanned ? "Unban" : "Ban"}</button>${state.user.role === "superadmin" ? `<button class="btn" data-user-delete="${escapeHtml(user._id)}">Delete</button>` : ""}`}</td></tr>`).join("") || `<tr><td colspan="6">No users found.</td></tr>`}</tbody></table></div></section>`;
}
function renderIntegrations() {
  return `<div class="grid two-col"><section class="panel"><div class="panel-head"><div><h2>PesaJet payment gateway</h2><small>Secrets are encrypted on the server and never returned to the browser</small></div><span class="pill ${state.gatewayStatus?.enabled ? "" : "pending"}">${state.gatewayStatus?.enabled ? "Enabled" : "Disabled"}</span></div><div class="panel-body"><form id="integration-form"><div class="field"><label for="gateway-url">API base URL</label><input id="gateway-url" name="apiUrl" value="${escapeHtml(state.gatewayStatus?.apiUrl || "")}" placeholder="https://payments.pesajet.com/api/v1"></div><div class="field"><label for="api-key">API key</label><input id="api-key" name="apiKey" type="password" autocomplete="new-password" placeholder="Leave blank to keep saved key"></div><div class="field"><label for="webhook-secret">Webhook signing secret</label><input id="webhook-secret" name="webhookSecret" type="password" autocomplete="new-password" placeholder="Leave blank to keep saved secret"></div><div class="field"><label for="callback-url">Webhook callback URL</label><input id="callback-url" readonly value="${escapeHtml(state.gatewayStatus?.callbackUrl || HarxApi.callbackUrl)}"></div><div class="field"><label><input type="checkbox" name="enabled" ${state.gatewayStatus?.enabled ? "checked" : ""} ${state.gatewayStatus?.contractConfirmed ? "" : "disabled"}> Enable PesaJet requests</label></div><p class="footnote">${state.gatewayStatus?.contractConfirmed ? "API contract marked confirmed in backend configuration." : "Live enablement is locked until the exact PesaJet API contract has been verified and PESAJET_API_CONTRACT_CONFIRMED=true is set by the operator."}</p><button class="btn btn-primary" type="submit">Save gateway settings</button><button class="btn" type="button" data-action="test-pesajet">Test connection</button></form></div></section>
      <section class="panel"><div class="panel-head"><div><h2>Provider setup</h2><small>Production checklist</small></div></div><div class="panel-body"><p>This integration follows the PesaJet Node SDK contract: collections and disbursements use <code>POST /payments</code>, status uses <code>GET /payments/:transactionId</code>, and requests authenticate with <code>X-API-Key</code>.</p><p class="footnote">Run the connection test with your provider account, set the public callback URL in PesaJet, and keep live requests disabled until sandbox verification is complete.</p></div></section></div>
    <div class="server-note"><strong>Never send credentials in chat.</strong> Enter them only after the backend is deployed over HTTPS and you are signed in as the super-admin. The webhook URL must resolve publicly to this backend.</div>
    <section class="panel section-spacer"><div class="panel-head"><div><h2>Payout policies</h2><small>Current stated settings</small></div></div><div class="panel-body"><div class="grid stats-grid" style="margin:0">${statCard("Minimum withdrawal", money(5000), "Per request", "↗")}${statCard("Withdrawal charge", "10%", "Stated terms", "◈")}${statCard("Payout window", "08:00–22:00", "East Africa Time", "◷")}${statCard("Processing target", "30 min", "Not guaranteed", "⌁")}</div></div></section>`;
}
function renderModal() {
  if (state.modal.type === "buy") {
    const plan = state.machines.find(item => item.name === state.modal.name);
    if (!plan) return "";
    const usesPesajet = (state.modal.options || []).includes("Wallet");
    return `<div class="modal-backdrop" data-action="backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-head"><h2 id="modal-title">Purchase ${escapeHtml(plan.name)} miner</h2><button class="close-button" data-action="close-modal" aria-label="Close">×</button></div><div class="earning-summary"><div class="label">Package price</div><strong>${money(plan.price)}</strong><small>Configured daily rate: ${money(plan.incomePerDay)}</small></div><div class="modal-result">Choose a funding method. Provider payments remain pending until Pesajet confirms them through the signed callback.</div>${usesPesajet ? `<div class="field"><label for="purchase-provider">Mobile money network</label><select id="purchase-provider"><option value="mtn">MTN Mobile Money</option><option value="airtel">Airtel Money</option></select></div>` : ""}${(state.modal.options || ["Use Balance"]).map(method => `<button class="btn btn-primary btn-wide" data-action="confirm-buy" data-method="${escapeHtml(method)}" ${method === "Use Balance" && state.balance < plan.price ? "disabled" : ""}>${method === "Use Balance" ? `Use balance · ${money(state.balance)}` : "Pay with Pesajet"}</button>`).join("")}</section></div>`;
  }
  if (state.modal.type === "machine-edit") {
    const machine = state.machines.find(item => item._id === state.modal.machineId);
    if (!machine) return "";
    return `<div class="modal-backdrop" data-action="backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-head"><h2 id="modal-title">Edit ${escapeHtml(machine.name)}</h2><button class="close-button" data-action="close-modal" aria-label="Close">×</button></div><form id="machine-edit-form"><input type="hidden" name="machineId" value="${escapeHtml(machine._id)}"><div class="field"><label>Machine name</label><input name="name" value="${escapeHtml(machine.name)}" required></div><div class="field"><label>Series</label><input name="series" value="${escapeHtml(machine.series || "")}" required></div><div class="field"><label>Price (UGX)</label><input name="price" type="number" min="1" value="${Number(machine.price)}" required></div><div class="field"><label>Income per hour</label><input name="incomePerHour" type="number" min="0" value="${Number(machine.incomePerHour)}" required></div><div class="field"><label>Income per day</label><input name="incomePerDay" type="number" min="0" value="${Number(machine.incomePerDay)}" required></div><div class="field"><label>Duration (days)</label><input name="durationDays" type="number" min="1" value="${Number(machine.durationDays) || 30}" required></div><div class="field"><label>Machine image URL (HTTPS)</label><input name="image" type="url" value="${escapeHtml(machine.image || "")}"></div><label><input type="checkbox" name="isActive" ${machine.isActive ? "checked" : ""}> Available for purchase</label><button class="btn btn-primary btn-wide" type="submit">Save machine</button></form></section></div>`;
  }
  if (state.modal.type === "user-edit") {
    const user = state.adminUsers.find(item => item._id === state.modal.userId);
    if (!user || user.role === "superadmin") return "";
    return `<div class="modal-backdrop" data-action="backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-head"><h2 id="modal-title">Edit ${escapeHtml(user.name)}</h2><button class="close-button" data-action="close-modal" aria-label="Close">×</button></div><form id="user-edit-form"><input type="hidden" name="userId" value="${escapeHtml(user._id)}"><div class="field"><label>Username</label><input name="name" value="${escapeHtml(user.name)}" required></div><div class="field"><label>Balance (UGX)</label><input name="balance" type="number" min="0" value="${Number(user.balance)}" required></div>${state.user.role === "superadmin" ? `<div class="field"><label>Role</label><select name="role"><option value="user" ${user.role === "user" ? "selected" : ""}>User</option><option value="admin" ${user.role === "admin" ? "selected" : ""}>Admin</option></select></div>` : ""}<button class="btn btn-primary btn-wide" type="submit">Save account</button></form></section></div>`;
  }
  if (state.modal.type === "deposit") {
    return `<div class="modal-backdrop" data-action="backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-head"><h2 id="modal-title">Add funds to wallet</h2><button class="close-button" data-action="close-modal" aria-label="Close">×</button></div><form id="deposit-form"><div class="field"><label for="deposit-amount">Deposit amount (UGX)</label><input id="deposit-amount" name="amount" type="number" min="1000" step="1000" placeholder="e.g. 50,000" required></div><div class="field"><label for="deposit-provider">Mobile money network</label><select id="deposit-provider" name="provider"><option value="mtn">MTN Mobile Money</option><option value="airtel">Airtel Money</option></select></div><div class="modal-result">A payment request will be sent to your registered phone. Wallet funds are credited only after the verified payment callback.</div><button class="btn btn-primary btn-wide" type="submit">Continue with Pesajet</button></form></section></div>`;
  }
  return `<div class="modal-backdrop" data-action="backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-head"><h2 id="modal-title">Request a withdrawal</h2><button class="close-button" data-action="close-modal" aria-label="Close">×</button></div>${!state.hasDeposited ? `<div class="notice">Deposit funds before requesting your first withdrawal.</div>` : `<form id="withdraw-form"><div class="field"><label for="withdraw-amount">Amount to withdraw (UGX)</label><input id="withdraw-amount" name="amount" type="number" min="5000" step="1000" max="${state.balance}" placeholder="Minimum UGX 5,000" required><small class="footnote">The server deducts the stated 10% charge.</small></div><div class="field"><label for="withdraw-provider">Mobile money network</label><select id="withdraw-provider" name="provider"><option value="mtn">MTN Mobile Money</option><option value="airtel">Airtel Money</option></select></div><div id="withdraw-preview" class="modal-result">Enter an amount to view the estimated payout after the 10% fee.</div><button class="btn btn-primary btn-wide" type="submit">Request withdrawal</button></form>`}<p class="footnote" style="margin-top:13px">Permitted window: 08:00–22:00 EAT. Processing times depend on the payment provider.</p></section></div>`;
}

app.addEventListener("click", async event => {
  const target = event.target.closest("button, a, [data-buy]");
  if (!target) {
    if (event.target.classList.contains("modal-backdrop")) closeModal();
    return;
  }
  if (target.dataset.authMode) { state.authMode = target.dataset.authMode; render(); return; }
  if (target.dataset.view) {
    event.preventDefault();
    state.view = target.dataset.view;
    try { await refreshAccount(); await loadViewData(); }
    catch (error) { showToast(error.message); }
    render();
    return;
  }
  if (target.dataset.modal) { state.modal = { type: target.dataset.modal }; render(); return; }
  if (target.dataset.buy) {
    const machine = state.machines.find(item => item.name === target.dataset.buy);
    if (!machine) { showToast("Machine data is out of date. Reload the catalog."); return; }
    try {
      const options = await HarxApi.request("/purchase/options", { method: "POST", body: { machineId: machine._id } });
      state.modal = { type: "buy", name: machine.name, machineId: machine._id, options: options.options };
      render();
    } catch (error) { showToast(error.message); }
    return;
  }
  if (target.dataset.adminTab) {
    state.adminTab = target.dataset.adminTab;
    try { await loadViewData("super-admin"); } catch (error) { showToast(error.message); }
    render();
    return;
  }
  if (target.dataset.teamTab) { state.teamTab = target.dataset.teamTab; render(); return; }
  if (target.dataset.editPlan) { state.modal = { type: "machine-edit", machineId: target.dataset.editPlan }; render(); return; }
  if (target.dataset.deleteMachine) {
    if (!window.confirm("Remove this machine from the catalog? Existing purchases remain unchanged.")) return;
    try {
      await HarxApi.request(`/admin/machine/remove/${encodeURIComponent(target.dataset.deleteMachine)}`, { method: "DELETE" });
      await loadViewData("super-admin");
      render();
      showToast("Machine removed.");
    } catch (error) { showToast(error.message); }
    return;
  }
  if (target.dataset.userEdit) { state.modal = { type: "user-edit", userId: target.dataset.userEdit }; render(); return; }
  if (target.dataset.userBan) {
    const banned = target.dataset.banned === "true";
    try {
      await HarxApi.request(`/admin/${banned ? "unban-user" : "ban-user"}`, {
        method: "POST",
        body: banned ? { userId: target.dataset.userBan } : { userId: target.dataset.userBan, reason: "Admin action" }
      });
      await loadViewData("super-admin");
      render();
      showToast(banned ? "User unbanned." : "User banned.");
    } catch (error) { showToast(error.message); }
    return;
  }
  if (target.dataset.userDelete) {
    if (!window.confirm("Permanently delete this user account?")) return;
    try {
      await HarxApi.request("/admin/delete-user", { method: "DELETE", body: { userId: target.dataset.userDelete } });
      await loadViewData("super-admin");
      render();
      showToast("User deleted.");
    } catch (error) { showToast(error.message); }
    return;
  }
  if (target.dataset.action === "close-modal") { closeModal(); return; }
  if (target.dataset.action === "logout") {
    HarxApi.clearToken();
    Object.assign(state, { ...initialState, profile: { ...initialState.profile }, settings: { ...initialState.settings } });
    state.view = "login";
    save();
    render();
    return;
  }
  if (target.dataset.action === "backdrop" && event.target === target) { closeModal(); return; }
  if (target.dataset.action === "confirm-buy") {
    const provider = target.dataset.method === "Wallet" ? document.getElementById("purchase-provider")?.value : undefined;
    await activatePlan(state.modal.machineId, target.dataset.method, provider);
    return;
  }
  if (target.dataset.action === "transfer") { await transferFunds(); return; }
  if (target.dataset.action === "claim-all") {
    try {
      const result = await HarxApi.request("/mining/claim-all", { method: "POST", body: {} });
      await refreshAccount();
      render();
      showToast(`Claimed ${money(result.earnings)}.`);
    } catch (error) { showToast(error.message); }
    return;
  }
  if (target.dataset.claim) {
    try {
      const result = await HarxApi.request("/mining/claim", { method: "POST", body: { machineId: target.dataset.claim } });
      await refreshAccount();
      render();
      showToast(`Claimed ${money(result.earnings)}.`);
    } catch (error) { showToast(error.message); }
    return;
  }
  if (target.dataset.action === "copy-referral") {
    const input = document.getElementById("referral-link");
    try { await navigator.clipboard.writeText(input.value); showToast("Invite link copied."); } catch { input.select(); document.execCommand("copy"); showToast("Invite link copied."); }
    return;
  }
  if (target.dataset.action === "share") {
    const url = document.getElementById("referral-link")?.value;
    if (navigator.share && url) { try { await navigator.share({ title: "Join Harx Pay", url }); } catch (error) { if (error.name !== "AbortError") showToast("Could not open the share sheet."); } }
    else { try { await navigator.clipboard.writeText(url); showToast("Invite link copied. You can paste it into a message."); } catch { showToast(url || "Open My team to copy your invite link."); } }
    return;
  }
  if (target.dataset.action === "export") { exportTransactions(); return; }
  if (target.dataset.action === "test-pesajet") {
    try {
      const result = await HarxApi.request("/superadmin/api/test", { method: "POST", body: {} });
      showToast(result.message || "Connection test completed.");
    } catch (error) { showToast(error.message); }
    return;
  }
});
app.addEventListener("input", event => {
  if (event.target.dataset.filter === "query") { state.query = event.target.value; const caret = event.target.selectionStart; render(); const field = app.querySelector('[data-filter="query"]'); field?.focus(); field?.setSelectionRange(caret, caret); }
});
app.addEventListener("change", event => {
  if (event.target.dataset.filter === "series") { state.seriesFilter = event.target.value; render(); }
  if (event.target.dataset.action === "image-upload") {
    const file = event.target.files?.[0];
    if (file) showToast(`${file.name} selected. Uploading requires a server.`);
  }
});
app.addEventListener("input", event => {
  if (event.target.id === "withdraw-amount") {
    const amount = Number(event.target.value);
    const preview = document.getElementById("withdraw-preview");
    if (preview) preview.textContent = amount >= 5000 ? `10% charge: ${money(amount * .1)} · Estimated payout: ${money(amount * .9)}` : "Minimum withdrawal is UGX 5,000.";
  }
});
app.addEventListener("submit", async event => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  if (form.id === "auth-form") {
    const phone = String(data.get("phone") || "").trim();
    if (phone.replace(/\D/g, "").length < 9) { showToast("Enter a valid phone number."); return; }
    const body = { phone, password: String(data.get("password") || "") };
    const path = state.authMode === "register" ? "/auth/signup" : "/auth/login";
    if (state.authMode === "register") {
      body.name = String(data.get("username") || "").trim();
      body.referral = String(data.get("referral") || "").trim();
    }
    try {
      const result = await HarxApi.request(path, { method: "POST", body });
      HarxApi.setToken(result.token);
      await refreshAccount();
      state.authed = true;
      state.view = "dashboard";
      save();
      render();
    } catch (error) { showToast(error.message); }
    return;
  }
  if (form.id === "deposit-form") {
    const amount = Number(data.get("amount"));
    if (!Number.isFinite(amount) || amount < 1000) { showToast("Enter a deposit of at least UGX 1,000."); return; }
    try {
      await HarxApi.request("/wallet/deposit", { method: "POST", body: { amount, method: "PESAJET", provider: data.get("provider") } });
      await refreshAccount();
      closeModal();
      showToast("Payment request submitted. Funds appear after the provider confirms payment.");
    } catch (error) { showToast(error.message); }
    return;
  }
  if (form.id === "withdraw-form") {
    const amount = Number(data.get("amount"));
    if (!state.hasDeposited) { showToast("Please deposit before your first withdrawal."); return; }
    if (amount < 5000 || amount > state.balance) { showToast("Enter at least UGX 5,000 and no more than your balance."); return; }
    if (!state.profile.withdrawNumber) { showToast("Add a payout account in Account settings first."); return; }
    try {
      await HarxApi.request("/wallet/withdraw", {
        method: "POST",
        body: { amount, phone: state.profile.withdrawNumber, provider: data.get("provider") }
      });
      await refreshAccount();
      closeModal();
      showToast("Withdrawal request submitted. It remains pending until the provider confirms it.");
    } catch (error) { showToast(error.message); }
    return;
  }
  if (form.id === "profile-form") {
    const password = String(data.get("password") || "");
    const body = {
      name: String(data.get("username") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      currentPassword: String(data.get("currentPassword") || "")
    };
    if (password) body.newPassword = password;
    try {
      await HarxApi.request("/auth/profile", { method: "PATCH", body });
      await refreshAccount();
      render();
      showToast("Profile updated.");
    } catch (error) { showToast(error.message); }
    return;
  }
  if (form.id === "withdraw-account-form") {
    try {
      await HarxApi.request("/auth/profile", {
        method: "PATCH",
        body: {
          withdrawName: String(data.get("withdrawName") || "").trim(),
          withdrawNumber: String(data.get("withdrawNumber") || "").trim()
        }
      });
      await refreshAccount();
      render();
      showToast("Withdrawal account saved.");
    } catch (error) { showToast(error.message); }
    return;
  }
  if (form.id === "machine-form") {
    try {
      await HarxApi.request("/admin/machine/add", {
        method: "POST",
        body: {
          name: data.get("name"),
          series: data.get("series"),
          price: Number(data.get("price")),
          incomePerHour: Number(data.get("incomePerHour")),
          incomePerDay: Number(data.get("incomePerDay")),
          durationDays: Number(data.get("durationDays")),
          image: data.get("image")
        }
      });
      await loadViewData("super-admin");
      render();
      showToast("Machine added.");
    } catch (error) { showToast(error.message); }
    return;
  }
  if (form.id === "machine-edit-form") {
    const machineId = String(data.get("machineId") || "");
    try {
      await HarxApi.request(`/admin/machine/edit/${encodeURIComponent(machineId)}`, {
        method: "PUT",
        body: {
          name: data.get("name"),
          series: data.get("series"),
          price: Number(data.get("price")),
          incomePerHour: Number(data.get("incomePerHour")),
          incomePerDay: Number(data.get("incomePerDay")),
          durationDays: Number(data.get("durationDays")),
          image: data.get("image"),
          isActive: data.has("isActive")
        }
      });
      state.modal = null;
      await loadViewData("super-admin");
      render();
      showToast("Machine updated.");
    } catch (error) { showToast(error.message); }
    return;
  }
  if (form.id === "user-edit-form") {
    const body = {
      userId: data.get("userId"),
      name: data.get("name"),
      balance: Number(data.get("balance"))
    };
    if (data.get("role")) body.role = data.get("role");
    try {
      await HarxApi.request("/admin/edit-user", { method: "POST", body });
      state.modal = null;
      await loadViewData("super-admin");
      render();
      showToast("Account updated.");
    } catch (error) { showToast(error.message); }
    return;
  }
  if (form.id === "integration-form") {
    const apiUrl = String(data.get("apiUrl") || "").trim();
    const apiKey = String(data.get("apiKey") || "");
    const webhookSecret = String(data.get("webhookSecret") || "");
    const enabled = data.has("enabled");
    try {
      await HarxApi.request("/superadmin/api/change", {
        method: "POST",
        body: { apiUrl, apiKey, webhookSecret }
      });
      await HarxApi.request("/superadmin/api/toggle", { method: "POST", body: { enabled } });
      state.gatewayStatus = await HarxApi.request("/superadmin/api/status");
      render();
      showToast("Gateway settings saved. Confirm the provider contract before enabling live transactions.");
    } catch (error) { showToast(error.message); }
  }
});
function closeModal() { state.modal = null; render(); }
async function activatePlan(machineId, paymentMethod, provider) {
  try {
    const result = await HarxApi.request("/purchase/buy", {
      method: "POST",
      body: { machineId, paymentMethod, ...(provider ? { provider } : {}) }
    });
    await refreshAccount();
    closeModal();
    if (result.needPayment) {
      showToast(result.message || "Complete the payment request on your phone.");
    } else {
      showToast("Machine purchased.");
    }
  } catch (error) { showToast(error.message); }
}
async function transferFunds() {
  if (state.wallet <= 0) { showToast("Your external wallet has no funds to transfer."); return; }
  try {
    await HarxApi.request("/wallet/transfer", { method: "POST", body: { amount: state.wallet } });
    await refreshAccount();
    render();
    showToast("Wallet funds transferred to available balance.");
  } catch (error) { showToast(error.message); }
}
function exportTransactions() {
  const rows = [["Type", "Detail", "Date", "Amount (UGX)", "Status"], ...state.transactions.map(tx => [tx.type, tx.detail, tx.date, tx.amount, tx.status])];
  const csv = rows.map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(",")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  const anchor = document.createElement("a");
  anchor.href = url; anchor.download = "harxpay-transactions.csv"; anchor.click();
  URL.revokeObjectURL(url);
}

render();
bootstrapSession();
