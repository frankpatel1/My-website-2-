"use client";

import React, { useState } from "react";

// Compatible with Next.js App Router and standalone React environments
const Link = ({ href, children, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);
import {
  Shield,
  Zap,
  Flame,
  Building2,
  TestTube2,
  Landmark,
  CheckCircle2,
  Clock,
  Award,
  Layers,
  ArrowRight,
  PhoneCall,
  CalendarCheck,
  Quote,
  Sparkles,
} from "lucide-react";

export interface SectorCaseStudy {
  id: string;
  number: string;
  sectorTitle: string;
  categoryTag: string;
  icon: React.ElementType;
  badgeAccent: string;
  clients: Array<{ name: string; tag: string }>;
  caseStudyTitle: string;
  keyTags: string[];
  challenge: string;
  solution: string;
  result: string;
  metrics: Array<{ label: string; value: string }>;
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export const SECTORS: SectorCaseStudy[] = [
  {
    id: "industrial-energy",
    number: "01",
    sectorTitle: "Industrial & Energy",
    categoryTag: "High-Hazard & Petrochemical Complex",
    icon: Flame,
    badgeAccent: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    clients: [
      { name: "Indian Oil (IOCL)", tag: "Refinery / Pipeline" },
      { name: "OPAL", tag: "Petrochem Complex" },
      { name: "Bodal Chemicals", tag: "Speciality Chemical" },
      { name: "Shivam Alums", tag: "Manufacturing Belt" },
    ],
    caseStudyTitle: "Petrochemical Perimeter & Life-Safety Network Convergence",
    keyTags: ["Zone 1/Zone 2 ATEX", "Thermal Radar", "Redundant Fiber Ring"],
    challenge:
      "Expansive boundary with severe hazardous atmospheric classifications (Zone 1/Zone 2), corrosive chemical exposure, and complex physical topography requiring zero single points of failure across optical loops.",
    solution:
      "Engineered ATEX explosion-proof thermal PTZ surveillance with optical gas imaging, self-healing armored single-mode optical ring backbone, and addressable ultraviolet/infrared flame sensors integrated into the central VMS.",
    result:
      "Sub-second flame detection verification, 100% boundary perimeter classification without false alarms, and continuous automated telemetry sweeps sustained under AMC 2.0.",
    metrics: [
      { label: "Flame Verification", value: "< 450ms" },
      { label: "Perimeter Coverage", value: "100%" },
      { label: "Backbone Availability", value: "99.999%" },
    ],
    quote: {
      text: "TrustNexus delivered a converged infrastructure that gave our HSE and plant security teams a single unified source of truth across our entire manufacturing facility.",
      author: "Senior Head of HSE & Plant Operations",
      role: "Industrial Petrochemicals",
    },
  },
  {
    id: "corporate-finserv",
    number: "02",
    sectorTitle: "Corporate & FinServ",
    categoryTag: "High-Throughput & GIFT City Headquarters",
    icon: Building2,
    badgeAccent: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    clients: [
      { name: "Tata Consultancy Services (TCS)", tag: "Enterprise IT Campus" },
      { name: "Mastercard", tag: "Global Financial Services" },
      { name: "Leaf", tag: "Corporate Workplace" },
    ],
    caseStudyTitle: "High-Throughput Flow & Zero-Trust Turnstile Integration",
    keyTags: ["OSDP AES-128", "Anti-Passback", "HR Directory Sync"],
    challenge:
      "Peak-hour lobby congestion with over 3,000 daily employee and visitor authentications, requiring strict multi-credential verification without manual queue bottlenecks or delayed ingress.",
    solution:
      "Motorized optical speed gates with touchless facial recognition, dynamic QR reader modules, direct Active Directory / HR synchronization, and emergency fire-alarm failsafe drop integration.",
    result:
      "Sustained 45 individuals per minute throughput per lane, zero unauthorized tailgating incidents, and instant egress release in full compliance with local fire codes.",
    metrics: [
      { label: "Throughput / Lane", value: "45 / min" },
      { label: "Auth Latency", value: "< 180ms" },
      { label: "Tailgating Incidents", value: "0" },
    ],
    quote: {
      text: "The flow through our turnstiles is seamless even at peak morning arrivals, and their engineer-led handover left zero loose ends.",
      author: "Head of Corporate Workplace Infrastructure",
      role: "Enterprise IT & FinServ Hub",
    },
  },
  {
    id: "pharma-medical",
    number: "03",
    sectorTitle: "Pharma & Medical",
    categoryTag: "USFDA & Sterile Cleanroom Environments",
    icon: TestTube2,
    badgeAccent: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    clients: [
      { name: "Axaj Pharma", tag: "Sterile Formulation Labs" },
      { name: "Sigma Life Science", tag: "Clinical Diagnostics" },
      { name: "Soni Dental Care", tag: "Healthcare Institution" },
    ],
    caseStudyTitle: "Sterile Airlock Interlocking & Environmental Suppression",
    keyTags: ["21 CFR Part 11", "Novec 1230", "Cleanroom Grade-B"],
    challenge:
      "Preventing differential air pressure drops in Grade-B cleanroom airlocks while preserving tamper-proof, time-stamped digital audit trails for rigorous USFDA and WHO regulatory inspections.",
    solution:
      "Microprocessor-controlled door interlock system with flush-mount optical sensors, clean-agent Novec 1230 gas suppression, and append-only cryptographic event audit logging.",
    result:
      "Zero cross-contamination events, 100% audit pass rate for USFDA regulatory reviews, and routine quarterly sensor recalibrations sustained under AMC 2.0.",
    metrics: [
      { label: "Cross-Contamination", value: "0 Events" },
      { label: "Audit Pass Rate", value: "100%" },
      { label: "Interlock Relay", value: "0ms Bypass" },
    ],
    quote: {
      text: "In pharmaceutical facilities, compliance is non-negotiable. TrustNexus designed an interlock and monitoring system that sailed through stringent audits.",
      author: "Director of Quality & Plant Engineering",
      role: "Sterile Formulations",
    },
  },
  {
    id: "government-institutions",
    number: "04",
    sectorTitle: "Government & Institutions",
    categoryTag: "PSUs & Broad Geographic Campuses",
    icon: Landmark,
    badgeAccent: "border-purple-500/30 bg-purple-500/10 text-purple-400",
    clients: [
      { name: "Gujarat Pollution Control Board (GPCB)", tag: "Govt Telemetry" },
      { name: "Chanderbala Modi Academy", tag: "Educational Campus" },
    ],
    caseStudyTitle: "Campus-Wide Environmental Telemetry & Multi-Zone Voice Evacuation",
    keyTags: ["Ambient AQI Sensing", "IP PA/VA", "Central BMS"],
    challenge:
      "Expansive multi-building geographic campus requiring centralized public address announcements, ambient environmental data ingestion, and rapid zonal life-safety alerting.",
    solution:
      "IP-networked multi-zone audio amplifiers, automated fire alarm voice override, outdoor ambient AQI sensors, and unified command center video telemetry dashboards.",
    result:
      "Immediate acoustic intelligibility across all interior and exterior zones, automated life-safety evacuation broadcast under 2 seconds, and synchronized campus health monitoring.",
    metrics: [
      { label: "Emergency Broadcast", value: "< 2.0s" },
      { label: "Zonal Speech STIPA", value: "> 0.65" },
      { label: "Sensor Polling", value: "Continuous" },
    ],
    quote: {
      text: "Their engineering team worked with complete transparency and provided thorough staff training upon commissioning, ensuring high operational confidence.",
      author: "Estate & Facility Operations Manager",
      role: "Academic & PSU Infrastructure",
    },
  },
];

export default function TrackRecordPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSectors =
    activeTab === "all"
      ? SECTORS
      : SECTORS.filter((s) => s.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* ================= 1. HERO HEADER & METRICS ================= */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-24 pb-16">
        
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -left-48 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-wider text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              PROVEN DEPLOYMENTS & SECTOR CREDIBILITY
            </span>

            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl">
              Proven Deployments &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Sector Credibility
              </span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              From refineries to sterile cleanrooms, we engineer mission-critical ELV systems where zero downtime is the standard.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:bg-cyan-300 shadow-lg shadow-cyan-500/20"
              >
                <CalendarCheck className="h-4 w-4" />
                Book a Free Site Survey
              </Link>
              <Link
                href="/oem-categories/"
                className="inline-flex items-center gap-2 rounded-md border border-cyan-400/40 bg-slate-900/80 px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-cyan-300 transition hover:bg-slate-800"
              >
                <Layers className="h-4 w-4" />
                Explore OEM Architecture
              </Link>
            </div>
          </div>

          {/* Key Metrics Strip (4 columns) */}
          <div className="mt-14 grid grid-cols-2 gap-4 rounded-xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-md lg:grid-cols-4">
            
            <div className="flex flex-col items-center border-b border-slate-800/80 pb-4 text-center sm:border-b-0 sm:border-r sm:pb-0">
              <span className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                120+
              </span>
              <span className="mt-1 font-heading text-xs font-bold uppercase tracking-wider text-cyan-400">
                Turnkey Projects Commissioned
              </span>
              <p className="mt-1 text-xs text-slate-400">Across Gujarat & Western India</p>
            </div>

            <div className="flex flex-col items-center border-b border-slate-800/80 pb-4 text-center sm:border-b-0 sm:border-r sm:pb-0">
              <span className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                150+
              </span>
              <span className="mt-1 font-heading text-xs font-bold uppercase tracking-wider text-cyan-400">
                Facilities Under Active AMC 2.0
              </span>
              <p className="mt-1 text-xs text-slate-400">Continuous preventative monitoring</p>
            </div>

            <div className="flex flex-col items-center border-b border-slate-800/80 pb-4 text-center sm:border-b-0 sm:border-r sm:pb-0">
              <span className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                &lt; 2 hrs
              </span>
              <span className="mt-1 font-heading text-xs font-bold uppercase tracking-wider text-cyan-400">
                Ahmedabad On-Site Response SLA
              </span>
              <p className="mt-1 text-xs text-slate-400">Contractual emergency dispatch</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                100%
              </span>
              <span className="mt-1 font-heading text-xs font-bold uppercase tracking-wider text-cyan-400">
                Subsystem Uptime SLA Guarantee
              </span>
              <p className="mt-1 text-xs text-slate-400">Backed by hardware spare pooling</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 2. SECTOR FILTER BAR ================= */}
      <nav className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span className="hidden font-mono text-xs uppercase tracking-wider text-slate-400 md:inline-block">
            Filter Sector:
          </span>
          <div className="flex w-full items-center gap-2 overflow-x-auto pb-1 md:w-auto md:pb-0">
            {[
              { id: "all", label: "All Sectors (4)" },
              { id: "industrial-energy", label: "Industrial & Energy" },
              { id: "corporate-finserv", label: "Corporate & FinServ" },
              { id: "pharma-medical", label: "Pharma & Medical" },
              { id: "government-institutions", label: "PSUs & Institutions" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap rounded-md px-3.5 py-1.5 font-heading text-xs font-semibold tracking-wide transition-all ${
                  activeTab === tab.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/60 shadow-sm"
                    : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= 3. SECTOR CASE STUDIES ================= */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          
          {filteredSectors.map((sector) => {
            const IconComponent = sector.icon;

            return (
              <article
                key={sector.id}
                id={sector.id}
                className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 lg:p-8"
              >
                {/* Header & Sector Metadata */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800/80 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-cyan-400">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-slate-500">
                          SECTOR {sector.number}
                        </span>
                        <span className="text-slate-700">•</span>
                        <span className="font-mono text-xs text-slate-400">
                          {sector.categoryTag}
                        </span>
                      </div>
                      <h2 className="mt-0.5 font-heading text-2xl font-bold text-white sm:text-3xl">
                        {sector.sectorTitle}
                      </h2>
                    </div>
                  </div>

                  {/* Key Architecture Tags */}
                  <div className="flex flex-wrap gap-2">
                    {sector.keyTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 font-mono text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Clients & Reference Badges */}
                <div className="mt-6 rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    Referenced Client Organizations & Infrastructure:
                  </span>
                  <div className="mt-2.5 flex flex-wrap gap-2.5">
                    {sector.clients.map((client, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 rounded border border-slate-700/80 bg-slate-900 px-3 py-1.5 transition-all hover:border-cyan-400 hover:bg-slate-850"
                      >
                        <span className="font-heading text-xs font-bold text-slate-200">
                          {client.name}
                        </span>
                        <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-cyan-400">
                          {client.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study Core 3-Column Structured Grid */}
                <div className="mt-8">
                  <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                    Case Study: {sector.caseStudyTitle}
                  </h3>

                  <div className="mt-4 grid gap-5 md:grid-cols-3">
                    
                    {/* Challenge */}
                    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-rose-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                        Challenge
                      </div>
                      <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                        {sector.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        Solution
                      </div>
                      <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                        {sector.solution}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Verified Result
                      </div>
                      <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                        {sector.result}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Highlighted Outcome Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-3 rounded-lg border border-slate-800 bg-slate-950/40 p-3 text-center sm:gap-4">
                  {sector.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="font-heading text-lg font-extrabold text-cyan-400 sm:text-2xl">
                        {m.value}
                      </span>
                      <span className="mt-0.5 font-mono text-[11px] text-slate-400">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Clean Pull Quote */}
                <div className="mt-6 rounded-xl border-l-4 border-cyan-400 bg-cyan-950/20 p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <Quote className="h-5 w-5 flex-shrink-0 text-cyan-400/80" />
                    <div>
                      <p className="italic text-sm text-slate-200 sm:text-base leading-relaxed">
                        "{sector.quote.text}"
                      </p>
                      <div className="mt-2 font-mono text-xs text-slate-400">
                        <strong className="text-cyan-300 font-semibold">{sector.quote.author}</strong> — {sector.quote.role}
                      </div>
                    </div>
                  </div>
                </div>

              </article>
            );
          })}

        </div>
      </section>

      {/* ================= 4. GLOBAL CTA BAND ================= */}
      <section className="border-t border-slate-800 bg-slate-900/80 py-16 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-cyan-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-cyan-400 border border-cyan-400/20">
            ENGINEERING CONSULTATION // AMC 2.0
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold text-white sm:text-4xl">
            Ready to upgrade your facility's digital nervous system?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Connect directly with senior ELV systems engineers. We inspect existing cable runs, review plant blueprints, and formulate SLA-driven turnkey proposals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:bg-cyan-300 shadow-lg shadow-cyan-500/20"
            >
              <CalendarCheck className="h-4 w-4" />
              Book a Site Survey
            </Link>
            <Link
              href="https://wa.me/919104801116"
              className="inline-flex items-center gap-2 rounded-md border border-cyan-400/40 bg-slate-900 px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-cyan-300 transition hover:bg-slate-800"
            >
              <PhoneCall className="h-4 w-4" />
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
