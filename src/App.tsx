import { useState } from "react";
import {
  ArrowRight,
  Check,
  Leaf,
  Menu,
  PackageCheck,
  ShieldCheck,
  Sprout,
  Store,
  Users,
  X,
} from "lucide-react";
import marketplace from "./assets/Marketplace_00039.png";
import dashboard from "./assets/dash_00039.png";
import produce from "./assets/Produce_00059.png";
import farmer from "./assets/Just farmer_00039.png";
import buyer from "./assets/Just Buyer OO_00039.png";
import logo from "./assets/Logo.png";

const nav = [
  ["Home", "home"],
  ["About", "about"],
  ["How it works", "how"],
  ["Marketplace", "marketplace"],
  ["Admin", "admin"],
];

function App() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const CONTACT_EMAIL = "hello@rexise.com";
const CURRENT_YEAR = new Date().getFullYear();

  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#24231f]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#fbfaf7]/95 backdrop-blur-md">
        <nav
          className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8"
          aria-label="Main navigation"
        >
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 font-bold tracking-tight"
            aria-label="Tradeconnect home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#a33b2a] text-white">
              <Leaf size={19} />
            </span>
            <span className="text-xl">
              Trade<span className="text-[#a33b2a]">Connect</span>
            </span>
          </button>
          <div className="hidden items-center gap-7 md:flex">
            {nav.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-semibold text-[#68665f] transition hover:text-[#a33b2a]"
              >
                {label}
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => scrollTo("marketplace")}
              className="px-3 py-2 text-sm font-bold"
            >
              Log in
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full bg-[#a33b2a] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#a33b2a]/15 transition hover:-translate-y-0.5"
            >
              Get started <ArrowRight className="ml-1 inline" size={15} />
            </button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#e5dfd4] md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="border-t border-black/5 bg-white px-5 py-5 md:hidden">
            <div className="flex flex-col gap-1">
              {nav.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="rounded-lg px-3 py-3 text-left font-semibold"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="hero-grid relative min-h-[720px] pt-[72px]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-24">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a33b2a]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#a33b2a]">
              <Sprout size={15} /> Built for local trade
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-[1.02] tracking-[-0.055em] text-[#24231f] sm:text-6xl lg:text-[72px]">
              Fresh produce.
              <br />
              <span className="text-[#a33b2a]">Fairer markets.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#68665f]">
              TradeConnect brings farmers and buyers together through trusted,
              administrator-assisted trade — simple to use, transparent, and
              built for every community.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("marketplace")}
                className="rounded-full bg-[#a33b2a] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#a33b2a]/20"
              >
                Explore marketplace{" "}
                <ArrowRight className="ml-2 inline" size={17} />
              </button>
              <button
                onClick={() => scrollTo("how")}
                className="rounded-full border border-[#d9d3c7] bg-white px-7 py-4 text-sm font-bold"
              >
                See how it works
              </button>
            </div>
            <div className="mt-10 flex gap-8 border-t border-[#ddd7cb] pt-6 text-sm">
              <div>
                <strong className="block text-xl">2,400+</strong>
                <span className="text-[#77756e]">Products listed</span>
              </div>
              <div>
                <strong className="block text-xl">1,200+</strong>
                <span className="text-[#77756e]">Verified users</span>
              </div>
              <div>
                <strong className="block text-xl">32</strong>
                <span className="text-[#77756e]">Local markets</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[670px]">
            <div className="absolute -inset-8 rounded-full bg-[#e4bb91]/25 blur-3xl" />
            <img
              src={produce}
              alt="Fresh produce marketplace interface"
              className="relative w-full rounded-[28px] shadow-[0_35px_70px_rgba(62,43,26,.18)]"
            />
            <div className="animate-float absolute -bottom-7 -left-2 rounded-2xl border border-white/70 bg-white p-4 shadow-xl sm:left-[-30px]">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#eaf5e8] text-[#3c7b43]">
                  <PackageCheck size={20} />
                </span>
                <div>
                  <strong className="text-sm">Order confirmed</strong>
                  <p className="text-xs text-[#77756e]">Delivered with care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#a33b2a]">
                About TradeConnect
              </p>
              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                A simpler way to grow local trade.
              </h2>
              <p className="mt-6 max-w-xl leading-7 text-[#68665f]">
                Farmers with limited digital experience can sell with confidence
                while buyers discover fresh, trusted products nearby.
                TradeConnect is the bridge — making every step easier.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "For farmers",
                    "Create listings with administrator support.",
                    farmer,
                  ],
                  [
                    "For buyers",
                    "Browse, order and track produce easily.",
                    buyer,
                  ],
                ].map(([title, copy, image]) => (
                  <div
                    key={String(title)}
                    className="rounded-3xl border border-[#ebe6dc] p-5"
                  >
                    <img
                      src={String(image)}
                      alt=""
                      className="mb-5 h-36 w-full rounded-2xl object-cover"
                    />
                    <h3 className="font-black">{String(title)}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#77756e]">
                      {String(copy)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[#ecdfc9]" />
              <img
                src={marketplace}
                alt="TradeConnect marketplace"
                className="relative rounded-[32px] border-[10px] border-[#f5f1e8] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="bg-[#2f4a3a] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#d9b887]">
                How it works
              </p>
              <h2 className="max-w-xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                From farm to buyer,
                <br />
                without the friction.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/65">
              One trusted process for listing, ordering, communication and
              fulfilment.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                n: "01",
                icon: Sprout,
                title: "Farmers list produce",
                text: "Farmers share available goods while the admin helps verify listings and keep information accurate.",
              },
              {
                n: "02",
                icon: Store,
                title: "Buyers place orders",
                text: "Buyers browse the marketplace, choose products and send an order in a few simple steps.",
              },
              {
                n: "03",
                icon: ShieldCheck,
                title: "Admin completes the trade",
                text: "Administrators confirm orders, coordinate delivery and resolve disputes transparently.",
              },
            ].map(({ n, icon: Icon, title, text }) => (
              <article
                key={n}
                className="rounded-[28px] border border-white/10 bg-white/[0.06] p-7"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-sm font-black text-[#d9b887]">{n}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#d9b887] text-[#2f4a3a]">
                    <Icon size={23} />
                  </span>
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-white/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="marketplace" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#a33b2a]">
              The marketplace
            </p>
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Everything needed to trade.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[32px] bg-[#f1ede4] p-6 sm:p-10">
              <div className="mb-8">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#a33b2a] text-white">
                  <Users size={20} />
                </span>
                <h3 className="text-2xl font-black">For the buyer</h3>
                <p className="mt-2 text-[#68665f]">
                  A clear, friendly view of fresh produce and active orders.
                </p>
              </div>
              <img
                src={buyer}
                alt="Buyer experience"
                className="w-full rounded-2xl shadow-xl"
              />
            </article>
            <article className="rounded-[32px] bg-[#e8eee8] p-6 sm:p-10">
              <div className="mb-8">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#2f4a3a] text-white">
                  <Leaf size={20} />
                </span>
                <h3 className="text-2xl font-black">For the farmer</h3>
                <p className="mt-2 text-[#68665f]">
                  Simple listing tools supported by a trusted administrator.
                </p>
              </div>
              <img
                src={farmer}
                alt="Farmer experience"
                className="w-full rounded-2xl shadow-xl"
              />
            </article>
          </div>
        </div>
      </section>

      <section id="admin" className="bg-[#f1ede4] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <img
            src={dashboard}
            alt="TradeConnect administrator dashboard"
            className="w-full rounded-[28px] border-[8px] border-white shadow-2xl"
          />
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#a33b2a]">
              Admin-assisted by design
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              Control and clarity at every step.
            </h2>
            <p className="mt-6 leading-7 text-[#68665f]">
              One central system gives administrators the tools to verify users,
              manage listings, track orders and resolve issues fairly.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Verify farmers and buyers",
                "Manage product listings",
                "Track confirmed orders",
                "Resolve disputes with transparency",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 font-bold shadow-sm"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e5eee5] text-[#2f4a3a]">
                    <Check size={15} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#a33b2a] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold text-[#efcfbd]">
              Ready to trade differently?
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Grow your market with us.
            </h2>
          </div>
          <button
            onClick={() => scrollTo("home")}
            className="rounded-full bg-white px-7 py-4 text-sm font-black text-[#a33b2a] shadow-xl"
          >
            Join TradeConnect <ArrowRight className="ml-2 inline" size={17} />
          </button>
        </div>
      </section>

  
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Rexise — one mannequin, multiple fits, more possibilities" width="200" height="88" loading="lazy" />
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {nav.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            {/* <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li> */}
            <li>
              <a href="#contact">Send an enquiry</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <img src={logo} alt="" width="84" height="33" aria-hidden="true" />
        <p>© {CURRENT_YEAR} Rexise. All rights reserved.</p>
      </div>
    </footer>
 

      {/* <footer className="bg-[#24231f] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-2.5 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#a33b2a]">
              <Leaf size={16} />
            </span>
            TradeConnect
          </div>
          <p className="text-sm text-white/50">
            © 2026 TradeConnect. Connecting markets responsibly.
          </p>
        </div>
      </footer> */}
    </main>
  );
}

export default App;
