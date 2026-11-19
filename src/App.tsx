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

const CURRENT_YEAR = new Date().getFullYear();

function App() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

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
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="h-12 w-auto"
              width={34}
              height={48}
            />
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

      <section
        id="home"
        className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#14110d] pt-[72px] text-white"
      >
        {/* Background image */}
        <img
          src={produce}
          alt=""
          aria-hidden="true"
          className="hero-bg absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center] opacity-60 lg:opacity-75"
        />
        {/* Overlays: warm directional scrim, brand tint, bottom fade */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#14110d] via-[#14110d]/85 to-[#14110d]/20" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_40%,rgba(163,59,42,0.35),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#14110d] to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f3c9a8] backdrop-blur-sm">
              <Sprout size={15} /> Built for local trade
            </div>
            <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Fresh produce.
              <br />
              <span className="bg-gradient-to-r from-[#f08a6c] to-[#e4bb91] bg-clip-text text-transparent">
                Fairer markets.
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/75">
              TradeConnect brings farmers and buyers together through trusted,
              administrator-assisted trade — simple to use, transparent, and
              built for every community.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("marketplace")}
                className="rounded-full bg-[#a33b2a] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#a33b2a]/30 transition hover:-translate-y-0.5 hover:bg-[#b54532]"
              >
                Explore marketplace{" "}
                <ArrowRight className="ml-2 inline" size={17} />
              </button>
              <button
                onClick={() => scrollTo("how")}
                className="rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                See how it works
              </button>
            </div>
            {/* <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6 text-sm">
              {[
                ["2,400+", "Products listed"],
                ["1,200+", "Verified users"],
                ["32", "Local markets"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong className="block text-2xl font-black">{value}</strong>
                  <span className="text-white/60">{label}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* <div className="animate-float absolute bottom-10 right-8 hidden rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md lg:block">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#eaf5e8] text-[#3c7b43]">
              <PackageCheck size={20} />
            </span>
            <div>
              <strong className="text-sm">Order confirmed</strong>
              <p className="text-xs text-white/65">Delivered with care</p>
            </div>
          </div>
        </div> */}
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

      <footer className="bg-[#1c1a16] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3"
              aria-label="Back to top"
            >
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-16 w-auto brightness-0 invert"
                width={45}
                height={64}
              />
              <span className="text-2xl font-bold tracking-tight">
                Trade<span className="text-[#e4a387]">Connect</span>
              </span>
            </button>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
              A trusted digital marketplace connecting farmers and buyers
              through fair, administrator-assisted trade.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-[#d9b887]">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {nav.map(([label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-white/65 transition hover:text-white"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-[#d9b887]">
              Platform
            </h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li>For farmers</li>
              <li>For buyers</li>
              <li>For administrators</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-[#d9b887]">
              Get in touch
            </h4>
            <p className="text-sm leading-7 text-white/65">
              Ready to grow your market with us?
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="mt-4 inline-flex items-center rounded-full bg-[#a33b2a] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b54532]"
            >
              Get started <ArrowRight className="ml-2" size={15} />
            </button>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>© {CURRENT_YEAR} TradeConnect. All rights reserved.</p>
            <p>Connecting markets responsibly.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
