import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const projects = [
  {
    title: "Davis Islands",
    subtitle: "Complete Pool Renovation",
    image: "/frontline/project-davis-islands.webp",
    tags: ["Resurfacing", "Glass Tile", "Automation"],
  },
  {
    title: "South Tampa",
    subtitle: "Pool + Deck Transformation",
    image: "/frontline/project-south-tampa.webp",
    tags: ["Decking", "Tile", "Resurfacing"],
  },
  {
    title: "Citrus Park",
    subtitle: "Modern Pool Upgrade",
    image: "/frontline/project-citrus-park.webp",
    tags: ["StoneScapes", "Equipment", "Lighting"],
  },
];

const services = [
  {
    number: "01",
    title: "Pool Remodeling",
    description:
        "Complete renovations that update the look, feel, and functionality of your backyard.",
  },
  {
    number: "02",
    title: "Pool Resurfacing",
    description:
        "Refresh worn surfaces with premium finishes designed for Florida pools.",
  },
  {
    number: "03",
    title: "Tile & Coping",
    description:
        "Modernize the details that make the biggest visual difference.",
  },
  {
    number: "04",
    title: "Equipment",
    description:
        "Upgrade pumps, heating, filtration, lighting, and smart automation.",
  },
];

function ArrowIcon() {
  return (
      <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4"
          aria-hidden="true"
      >
        <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
  );
}

function CheckIcon() {
  return (
      <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          aria-hidden="true"
      >
        <path
            d="m5 12 4 4L19 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
  );
}

export default function Home() {
  return (
      <div className="min-h-screen overflow-hidden bg-white text-[#15203c]">
        {/* HEADER */}
        <header className="absolute inset-x-0 top-0 z-50">
          <div className="border-b border-white/10 bg-[#263a7a]/95 backdrop-blur-xl">
            <div className="mx-auto flex h-[82px] max-w-[1320px] items-center justify-between px-4 sm:h-[92px] sm:px-6 md:px-8 lg:h-[104px] lg:px-10">
              {/* Logo */}
              <Link
                  href="/"
                  aria-label="Frontline Pools home"
                  className="flex shrink-0 items-center"
              >
                <div className="relative h-[58px] w-[145px] sm:h-[68px] sm:w-[175px] lg:h-[78px] lg:w-[210px]">
                  <Image
                      src="/frontline/logo.webp"
                      alt="Frontline Pools"
                      fill
                      priority
                      sizes="(max-width: 640px) 145px, (max-width: 1024px) 175px, 210px"
                      className="object-contain object-left"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-1 lg:flex">
                {[
                  ["Services", "#services"],
                  ["Projects", "#projects"],
                  ["About", "#about"],
                  ["Reviews", "#reviews"],
                  ["Financing", "#financing"],
                ].map(([label, href]) => (
                    <Link
                        key={label}
                        href={href}
                        className="group relative rounded-full px-4 py-3 text-[14px] font-semibold text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      {label}

                      <span className="absolute bottom-[7px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#f5c53a] transition-all duration-300 group-hover:w-5" />
                    </Link>
                ))}
              </nav>

              {/* Desktop Actions */}
              <div className="hidden items-center gap-5 lg:flex">
                <a
                    href="tel:+18136062697"
                    className="hidden text-[13px] font-bold tracking-[-0.01em] text-white/90 transition hover:text-[#f5c53a] xl:block"
                >
                  (813) 606-2697
                </a>

                <Link
                    href="#estimate"
                    className={cn(
                        buttonVariants(),
                        "h-[46px] rounded-full border border-[#f5c53a] bg-[#f5c53a] px-6 text-[13px] font-extrabold text-[#263a7a] shadow-[0_8px_25px_rgba(245,197,58,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffda55]"
                    )}
                >
                  Free Estimate
                  <ArrowIcon />
                </Link>
              </div>

              {/* Mobile Actions */}
              <div className="flex items-center gap-2 lg:hidden">
                {/* Keep CTA visible on phones */}
                <Link
                    href="#estimate"
                    className={cn(
                        buttonVariants(),
                        "hidden h-10 rounded-full bg-[#f5c53a] px-4 text-xs font-extrabold text-[#263a7a] hover:bg-[#ffda55] sm:inline-flex"
                    )}
                >
                  Free Estimate
                </Link>

                {/* Mobile Menu */}
                <Sheet>
                  <SheetTrigger
                      aria-label="Open navigation menu"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white transition hover:bg-white/[0.12]"
                  >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        aria-hidden="true"
                    >
                      <path
                          d="M4 7h16M4 12h16M4 17h16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                      />
                    </svg>
                  </SheetTrigger>

                  <SheetContent
                      side="right"
                      className="w-[88%] border-l border-white/10 bg-[#263a7a] p-0 text-white sm:max-w-[390px]"
                  >
                    <div className="flex h-full flex-col">
                      {/* Drawer Header */}
                      <SheetHeader className="border-b border-white/10 px-6 py-5">
                        <SheetTitle className="sr-only">
                          Frontline Pools Navigation
                        </SheetTitle>

                        <div className="flex items-center justify-between pr-8">
                          <div className="relative h-[66px] w-[170px]">
                            <Image
                                src="/frontline/logo.webp"
                                alt="Frontline Pools"
                                fill
                                className="object-contain object-left"
                            />
                          </div>
                        </div>
                      </SheetHeader>

                      {/* Menu Links */}
                      <nav className="flex flex-1 flex-col px-6 py-7">
                        <div className="flex flex-col">
                          {[
                            ["Services", "#services"],
                            ["Projects", "#projects"],
                            ["About", "#about"],
                            ["Reviews", "#reviews"],
                            ["Financing", "#financing"],
                          ].map(([label, href], index) => (
                              <SheetClose asChild key={label}>
                                <Link
                                    href={href}
                                    className="group flex items-center justify-between border-b border-white/10 py-5 text-[22px] font-bold tracking-[-0.025em] text-white transition hover:text-[#f5c53a]"
                                >
                                  <span>{label}</span>

                                  <span className="text-lg text-[#f5c53a] transition-transform group-hover:translate-x-1">
                          →
                        </span>
                                </Link>
                              </SheetClose>
                          ))}
                        </div>

                        {/* Contact */}
                        <div className="mt-auto pt-8">
                          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                            Talk to Frontline
                          </p>

                          <a
                              href="tel:+18136062697"
                              className="text-xl font-bold text-white transition hover:text-[#f5c53a]"
                          >
                            (813) 606-2697
                          </a>

                          <SheetClose asChild>
                            <Link
                                href="#estimate"
                                className={cn(
                                    buttonVariants(),
                                    "mt-6 flex h-14 w-full rounded-full bg-[#f5c53a] text-[15px] font-extrabold text-[#263a7a] hover:bg-[#ffda55]"
                                )}
                            >
                              Request Free Estimate
                              <ArrowIcon />
                            </Link>
                          </SheetClose>

                          <p className="mt-4 text-center text-xs text-white/40">
                            Serving homeowners throughout Tampa Bay
                          </p>
                        </div>
                      </nav>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="relative min-h-[850px] overflow-hidden bg-[#253673]">
            {/* Real pool photography */}
            <Image
                src="/frontline/pool-feature.webp"
                alt="Frontline Pools luxury pool renovation"
                fill
                priority
                className="object-cover object-center"
            />

            {/* Base brand overlay */}
            <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(19,34,86,0.98)_0%,rgba(32,54,116,0.90)_37%,rgba(33,62,125,0.43)_69%,rgba(20,50,105,0.18)_100%)]" />

            {/* Pool depth overlay */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#192b68]/85 via-transparent to-[#14265a]/20" />

            {/* Extra subtle moving caustic light */}
            <div className="hero-caustics pointer-events-none absolute inset-0 z-[3]" />

            {/* Top-right branded yellow accent */}
            <div className="pointer-events-none absolute -right-32 top-[170px] z-[4] hidden h-[290px] w-[290px] rotate-12 rounded-[72px] bg-[#f5c53a]/92 shadow-[0_30px_90px_rgba(245,197,58,0.12)] lg:block" />

            {/* Tiny bubble accents */}
            <div className="pointer-events-none absolute right-[13%] top-[25%] z-[4] hidden lg:block">
              <div className="h-2 w-2 rounded-full border border-white/30 bg-white/10 backdrop-blur" />
            </div>

            <div className="pointer-events-none absolute right-[20%] top-[34%] z-[4] hidden lg:block">
              <div className="h-4 w-4 rounded-full border border-white/20 bg-white/5 backdrop-blur" />
            </div>

            <div className="pointer-events-none absolute right-[10%] top-[47%] z-[4] hidden lg:block">
              <div className="h-2.5 w-2.5 rounded-full border border-white/25 bg-white/10 backdrop-blur" />
            </div>

            {/* Hero content */}
            <div className="relative z-10 mx-auto flex min-h-[850px] max-w-[1450px] items-center px-5 pb-28 pt-32 sm:pt-36 md:px-8 lg:px-12 lg:pt-40">
              <div className="max-w-[760px]">
                <h1 className="max-w-[820px] font-heading text-[44px] font-extrabold leading-[0.95] tracking-[-0.05em] text-white sm:text-[58px] md:text-[68px] lg:text-[86px]">
                  Make your pool
                  <span className="mt-1 block text-[#f5c53a]">
          worth showing off.
        </span>
                </h1>

                <p className="mt-7 max-w-[650px] text-[17px] font-medium leading-8 tracking-[-0.01em] text-white/72 sm:text-[18px] md:text-xl">
                  Pool renovations, resurfacing, tile, decking, equipment
                  upgrades, and full backyard transformations throughout Tampa
                  Bay.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                      href="#estimate"
                      className={cn(
                          buttonVariants({ size: "lg" }),
                          "group h-14 rounded-full bg-[#f5c53a] px-8 text-base font-extrabold text-[#24346e] shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffda55] hover:shadow-[0_18px_45px_rgba(0,0,0,0.24)]"
                      )}
                  >
                    Request Free Estimate

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
                  </Link>

                  <Link
                      href="#projects"
                      className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "lg",
                          }),
                          "h-14 rounded-full border-white/25 bg-white/[0.08] px-8 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white/50 hover:bg-white hover:text-[#253673]"
                      )}
                  >
                    See Our Work
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-white/75">
                  <div className="flex items-center gap-2">
          <span className="tracking-[0.08em] text-[#f5c53a]">
            ★★★★★
          </span>

                    <span>85+ Five-Star Reviews</span>
                  </div>

                  <div className="hidden h-5 w-px bg-white/20 sm:block" />

                  <span>Licensed &amp; Insured</span>

                  <div className="hidden h-5 w-px bg-white/20 sm:block" />

                  <span>20+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Bottom water wave */}
            <div className="pointer-events-none absolute bottom-[-2px] left-0 z-20 w-full">
              <svg
                  viewBox="0 0 1440 115"
                  preserveAspectRatio="none"
                  className="h-[80px] w-full md:h-[115px]"
                  aria-hidden="true"
              >
                <path
                    fill="#ffffff"
                    d="M0,85 C250,130 390,20 720,65 C1040,110 1210,20 1440,45 L1440,115 L0,115 Z"
                />
              </svg>
            </div>
          </section>

          {/* TRUST BAR */}
          <section className="relative z-20 -mt-4 px-5 md:px-8 lg:px-12">
            <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[26px] border border-[#dfe4f1] bg-white shadow-[0_18px_60px_rgba(29,47,105,0.14)] sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["85+", "5-Star Reviews"],
                ["20+", "Years Experience"],
                ["150+", "Pools Serviced"],
                ["Tampa Bay", "Locally Focused"],
              ].map(([value, label], index) => (
                  <div
                      key={label}
                      className={`relative px-7 py-7 ${
                          index !== 3 ? "lg:border-r lg:border-[#e3e7f0]" : ""
                      }`}
                  >
                    <div className="mb-3 h-1 w-10 rounded-full bg-[#f5c53a]" />

                    <div className="text-2xl font-black tracking-tight text-[#263a7a]">
                      {value}
                    </div>

                    <div className="mt-1 text-sm font-medium text-[#6f7890]">
                      {label}
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* INTRO */}
          <section id="about" className="relative px-5 py-28 md:px-8 lg:px-12">
            <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#dceeff]/60 blur-3xl" />

            <div className="relative mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="relative">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[36px_8px_36px_8px]">
                  <Image
                      src="/frontline/project-davis-islands.webp"
                      alt="Frontline Pools renovation project in Davis Islands"
                      fill
                      className="object-cover"
                  />
                </div>

                <Card className="absolute -bottom-8 -right-2 max-w-[260px] border-none bg-[#f5c53a] shadow-2xl md:right-[-28px]">
                  <CardContent className="p-6">
                    <div className="text-sm font-black uppercase tracking-[0.14em] text-[#263a7a]">
                      Built for Florida
                    </div>

                    <p className="mt-3 text-sm font-semibold leading-6 text-[#263a7a]/80">
                      Durable materials, modern equipment, and finishes built for
                      Tampa Bay backyards.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:pl-12">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#dfa90d]">
                  Your Backyard, Reimagined
                </p>

                <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.045em] text-[#263a7a] sm:text-5xl lg:text-6xl">
                  Stop settling for a pool that feels outdated.
                </h2>

                <p className="mt-7 max-w-xl text-lg leading-8 text-[#68718a]">
                  Frontline Pools helps homeowners turn aging pools into
                  completely refreshed outdoor spaces — with better finishes,
                  cleaner design, upgraded equipment, and craftsmanship you can
                  actually see.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Premium pool finishes and materials",
                    "Clear communication from start to finish",
                    "Modern equipment and smart automation",
                  ].map((item) => (
                      <div
                          key={item}
                          className="flex items-center gap-3 font-semibold text-[#35466e]"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf3ff] text-[#2b4d9b]">
                          <CheckIcon />
                        </div>

                        {item}
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section
              id="projects"
              className="relative overflow-hidden bg-[#263a7a] px-5 py-28 text-white md:px-8 lg:px-12"
          >
            <div className="absolute -right-20 -top-40 h-[460px] w-[460px] rounded-full bg-[#3556ac] blur-[80px]" />

            <div className="absolute bottom-0 left-[-100px] h-64 w-[420px] rotate-[-8deg] rounded-[60px] bg-[#f5c53a]" />

            <div className="relative mx-auto max-w-[1320px]">
              <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
                <div>
                  <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                    Real pools.
                    <br />
                    <span className="text-[#f5c53a]">Real transformations.</span>
                  </h2>
                </div>

                <p className="max-w-md text-base leading-7 text-white/65">
                  See how outdated pools across Tampa Bay became cleaner, more
                  modern, and more enjoyable spaces.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <Card className="group overflow-hidden border-none bg-[#1f3066] p-0 text-white shadow-none">
                  <div className="relative min-h-[540px]">
                    <Image
                        src={projects[0].image}
                        alt={projects[0].title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.025]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#101c4a]/95 via-[#101c4a]/25 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                      <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#f5c53a]">
                        {projects[0].title}
                      </div>

                      <h3 className="font-heading text-3xl font-extrabold tracking-[-0.035em] text-white">
                        {projects[0].subtitle}
                      </h3>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {projects[0].tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="border border-white/15 bg-white/15 text-white backdrop-blur-md hover:bg-white/20"
                            >
                              {tag}
                            </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid gap-6">
                  {projects.slice(1).map((project) => (
                      <Card
                          key={project.title}
                          className="group overflow-hidden border-none bg-[#1f3066] p-0 text-white shadow-none"
                      >
                        <div className="relative min-h-[258px]">
                          <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition duration-700 group-hover:scale-[1.04]"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#101c4a]/95 via-[#101c4a]/20 to-transparent" />

                          <div className="absolute inset-x-0 bottom-0 p-6">
                            <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f5c53a]">
                              {project.title}
                            </div>

                            <h3 className="mt-2 font-heading text-[22px] font-extrabold leading-tight tracking-[-0.025em] text-white">
                              {project.subtitle}
                            </h3>
                          </div>
                        </div>
                      </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section
              id="services"
              className="relative bg-[#f6f8fc] px-5 py-28 md:px-8 lg:px-12"
          >
            <div className="mx-auto max-w-[1320px]">
              <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.045em] text-[#263a7a] sm:text-5xl">
                    One team for your entire pool renovation.
                  </h2>

                  <p className="mt-6 max-w-md text-lg leading-8 text-[#6b7389]">
                    From simple surface updates to a complete backyard
                    transformation.
                  </p>

                  <Link
                      href="#estimate"
                      className={cn(
                          buttonVariants(),
                          "mt-8 rounded-full bg-[#263a7a] px-6 font-bold text-white hover:bg-[#1c2d63]"
                      )}
                  >
                    Talk About Your Project
                    <ArrowIcon />
                  </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {services.map((service, index) => (
                      <Card
                          key={service.title}
                          className={cn(
                              "group border-[#dde3ef] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#b9c8eb] hover:shadow-xl",
                              index === 1 && "sm:mt-8"
                          )}
                      >
                        <CardContent className="p-7">
                          <div className="flex items-start justify-between">
          <span className="text-sm font-black text-[#e0aa0f]">
            {service.number}
          </span>

                            <div className="h-2.5 w-2.5 rounded-full bg-[#f5c53a]" />
                          </div>

                          <h3 className="mt-12 text-2xl font-black tracking-tight text-[#263a7a]">
                            {service.title}
                          </h3>

                          <p className="mt-4 leading-7 text-[#747c90]">
                            {service.description}
                          </p>

                          <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#2f4b91]">
                            Learn more
                            <ArrowIcon />
                          </div>
                        </CardContent>
                      </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* REVIEW */}
          <section
              id="reviews"
              className="relative overflow-hidden bg-white px-5 py-28 md:px-8 lg:px-12"
          >
            <div className="mx-auto max-w-[1160px]">
              <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <div className="text-3xl tracking-[0.08em] text-[#f5c53a]">
                    ★★★★★
                  </div>

                  <div className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-[#263a7a]">
                    85+ Five-Star Reviews
                  </div>

                  <p className="mt-4 max-w-sm leading-7 text-[#70798e]">
                    Real homeowners. Real projects. Real feedback about working
                    with Frontline Pools.
                  </p>
                </div>

                <Card className="relative border-none bg-[#eef3ff] shadow-none">
                  <CardContent className="p-8 md:p-12">
                    <div className="absolute -left-5 -top-8 font-serif text-[110px] leading-none text-[#f5c53a]">
                      “
                    </div>

                    <blockquote className="relative text-2xl font-bold leading-[1.45] tracking-[-0.025em] text-[#263a7a] md:text-3xl">
                      Frontline delivered everything they promised. Their
                      communication was excellent, the work was high quality,
                      and we couldn't be happier with how the pool turned out.
                    </blockquote>

                    <div className="mt-8 border-t border-[#263a7a]/10 pt-6">
                      <div className="font-black text-[#263a7a]">
                        Frontline Pools Customer
                      </div>
                      <div className="mt-1 text-sm text-[#7a8396]">
                        Tampa Bay, Florida
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* ESTIMATE CTA */}
          <section id="estimate" className="bg-[#263a7a] px-5 py-24 md:px-8 lg:px-12">
            <div className="mx-auto grid max-w-[1260px] overflow-hidden rounded-[36px] bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden bg-[#f5c53a] p-8 md:p-12 lg:p-14">
                <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-[#263a7a]/10" />

                <h2 className="relative mt-6 text-4xl font-black leading-[1.03] tracking-[-0.045em] text-[#263a7a] md:text-5xl">
                  Let's see what your pool could become.
                </h2>

                <p className="relative mt-6 max-w-md text-lg leading-8 text-[#3f4b6d]">
                  Tell us what you're looking to change and we'll help you figure
                  out the best next step.
                </p>

                <div className="relative mt-10 border-t border-[#263a7a]/15 pt-8">
                  <div className="text-sm font-bold text-[#536083]">
                    Prefer to call?
                  </div>

                  <a
                      href="tel:+18136062697"
                      className="mt-1 block text-2xl font-black text-[#263a7a]"
                  >
                    (813) 606-2697
                  </a>
                </div>
              </div>

              <form className="space-y-5 p-8 md:p-12 lg:p-14">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold text-[#33436e]"
                    >
                      Name
                    </label>
                    <Input
                        id="name"
                        placeholder="Your name"
                        className="h-12 border-[#dce1ec] bg-[#fafbfe]"
                    />
                  </div>

                  <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-bold text-[#33436e]"
                    >
                      Phone
                    </label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="(813) 555-0123"
                        className="h-12 border-[#dce1ec] bg-[#fafbfe]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#33436e]">
                    What are you looking for?
                  </label>

                  <Select>
                    <SelectTrigger className="h-14 w-full rounded-xl border-[#d7ddec] bg-white px-5 text-[15px] font-medium text-[#263a7a] shadow-none focus-visible:ring-2 focus-visible:ring-[#263a7a]/15">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="Complete Pool Remodel">
                        Complete Pool Remodel
                      </SelectItem>

                      <SelectItem value="Pool Resurfacing">
                        Pool Resurfacing
                      </SelectItem>

                      <SelectItem value="Tile & Coping">
                        Tile & Coping
                      </SelectItem>

                      <SelectItem value="Deck Renovation">
                        Deck Renovation
                      </SelectItem>

                      <SelectItem value="Equipment Upgrade">
                        Equipment Upgrade
                      </SelectItem>

                      <SelectItem value="Not Sure Yet">
                        Not Sure Yet
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                      htmlFor="details"
                      className="mb-2 block text-sm font-bold text-[#33436e]"
                  >
                    Tell us about your project
                  </label>

                  <Textarea
                      id="details"
                      rows={5}
                      placeholder="What would you like to change about your pool?"
                      className="resize-none border-[#dce1ec] bg-[#fafbfe]"
                  />
                </div>

                <Button
                    type="submit"
                    className="h-13 w-full rounded-full bg-[#263a7a] py-6 text-base font-black text-white hover:bg-[#1f3065]"
                >
                  Request My Free Estimate
                  <ArrowIcon />
                </Button>

                <p className="text-center text-xs leading-5 text-[#8a91a1]">
                  No obligation. Frontline will contact you about your project.
                </p>
              </form>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#1d2d63] px-5 py-14 text-white md:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <div className="text-xl font-black tracking-[0.12em]">
                FRONTLINE
              </div>

              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f5c53a]">
                Pools
              </div>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
                Pool remodeling, resurfacing, tile, equipment upgrades, and
                backyard transformations throughout Tampa Bay.
              </p>
            </div>

            <div className="text-sm text-white/45">
              © {new Date().getFullYear()} Frontline Pools
            </div>
          </div>
        </footer>
      </div>
  );
}