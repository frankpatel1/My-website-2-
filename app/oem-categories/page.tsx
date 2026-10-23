"use client";

import React, { useState } from "react";

// Compatible with Next.js App Router and standalone React environments
const Link = ({ href, children, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);
import {
  Camera,
  Network,
  Flame,
  KeyRound,
  Cpu,
  ShieldCheck,
  Check,
  ArrowRight,
  Layers,
  Sparkles,
  PhoneCall,
  CalendarCheck,
  Radio,
  Server,
  Share2,
} from "lucide-react";

export interface OEMCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  certifications: string[];
  focusPillars: string[];
  partners: Array<{
    name: string;
    tier: string;
    specialization: string;
  }>;
  specifications: string[];
  protocols: string[];
}

export const OEM_CATEGORIES_DATA: OEMCategory[] = [
  {
    id: "surveillance-ai",
    number: "01",
    title: "Surveillance & AI Spatial Intelligence",
    subtitle: "High-definition visual perimeter detection, behavioral deep learning & encrypted VMS",
    icon: Camera,
    certifications: ["Enterprise CCTV", "UL 2802 Performance", "NDAA Compliant Options", "IP67 / IK10 Rated"],
    focusPillars: [
      "On-Camera Edge AI",
      "4K UHD Resolution",
      "Thermal Optical Radar",
      "Deep-Learning ANPR",
      "Encrypted VMS Storage",
    ],
    partners: [
      { name: "Bosch", tier: "Tier-1 Global", specialization: "Starlight low-light & Video Analytics" },
      { name: "Honeywell", tier: "Global Partner", specialization: "Enterprise Security & MAXPRO VMS" },
      { name: "Hikvision", tier: "Enterprise Core", specialization: "AcuSense Edge-AI & ANPR cameras" },
      { name: "Dahua", tier: "AIoT Pioneer", specialization: "WizMind deep-learning PTZ tracking" },
      { name: "Pelco", tier: "ATEX / Hazchem", specialization: "Explosion-proof heavy industrial housings" },
      { name: "CP Plus", tier: "Commercial", specialization: "High-density facility camera distributions" },
    ],
    specifications: [
      "Sub-second perimeter intrusion classification with zero false alarms from foliage or weather.",
      "Hardware-accelerated edge neural processing units (NPU) for local vehicular and pedestrian metadata extraction.",
      "Redundant SAN/NAS RAID-6 storage integration engineered for 90-day uninterrupted 4K retention.",
      "ATEX and IECEx certified camera housings engineered for refinery hazardous Zones 1 and 2.",
    ],
    protocols: ["ONVIF Profile S/G/T", "RTSP / H.265+", "REST API", "MQTT Telemetry"],
  },
  {
    id: "networking-compute",
    number: "02",
    title: "Enterprise Networking & Core Compute",
    subtitle: "High-throughput managed PoE+ distribution, single-mode fiber rings & edge server arrays",
    icon: Network,
    certifications: ["Zero-Trust Core", "TIA-568-D.2", "IEEE 802.3bt 90W PoE", "Fluke DSX Certified"],
    focusPillars: [
      "Layer 2/3 Managed PoE+ Switches",
      "Structured Fiber Backbones",
      "Zero-Trust VLAN Segmentation",
      "High-Density Server Racks",
      "Multi-Gigabit Optical Rings",
    ],
    partners: [
      { name: "Cisco", tier: "Tier-1 Enterprise", specialization: "Catalyst & Nexus core switches" },
      { name: "HPE", tier: "Core Compute", specialization: "Aruba networking & high-density servers" },
      { name: "Dell Technologies", tier: "Compute & Storage", specialization: "PowerEdge VMS processing nodes" },
      { name: "Lenovo", tier: "Infrastructure", specialization: "Industrial rackmount servers" },
      { name: "D-Link", tier: "PoE+ Switching", specialization: "Commercial smart managed switches" },
      { name: "CommScope", tier: "Structured Cabling", specialization: "Systimax Cat6A copper & fiber backbones" },
    ],
    specifications: [
      "40 Gbps aggregate optical core rings with sub-50ms self-healing ring protocols (ERPS G.8032).",
      "High-wattage IEEE 802.3bt PoE++ (up to 90W per port) to power high-draw PTZ thermal cameras and heated housings.",
      "Strict physical and logical segmentation isolating CCTV, Access, Fire, and BMS streams onto dedicated zero-trust VLANs.",
      "End-to-end OTDR and permanent link certification guaranteeing low-loss fiber connectivity.",
    ],
    protocols: ["IEEE 802.1Q VLAN", "OSPF / BGP", "SNMP v3", "LLDP-MED"],
  },
  {
    id: "fire-life-safety",
    number: "03",
    title: "Life Safety & Building Automation (BAS/BMS)",
    subtitle: "Addressable fire loops, clean-agent suppression, EN 54 voice evacuation & micro-climate control",
    icon: Flame,
    certifications: ["NBC 2016 Part 4", "EN 54 Evacuation", "NFPA 72 & 2001", "UL / FM Approved"],
    focusPillars: [
      "Addressable Smoke & Gas Sensors",
      "Novec 1230 Clean-Agent Suppression",
      "Fire Alarm Control Panels (FACP)",
      "Multi-Zone Phased Voice Alarms",
      "Differential Pressure Air Interlocks",
    ],
    partners: [
      { name: "Siemens", tier: "Tier-1 Industrial", specialization: "Desigo CC & Cerberus PRO fire panels" },
      { name: "Johnson Controls", tier: "Global Leader", specialization: "Simplex addressable life-safety loops" },
      { name: "Ravel", tier: "Life Safety Core", specialization: "Microprocessor addressable alarm panels" },
      { name: "Agni", tier: "Certified Hardware", specialization: "Industrial detectors & manual call points" },
    ],
    specifications: [
      "Multi-criteria optical and thermal detectors programmed to detect smoldering and flaming fires in under 3 seconds.",
      "Clean-agent Novec 1230 gas suppression designed for mission-critical server rooms, cleanrooms, and electrical panels.",
      "Phased voice evacuation messaging (EN 54-16) that overrides background audio to guide occupants toward unhindered exits.",
      "Hardware dry-contact and BACnet/IP cross-system relays that instantly release access doors upon verified alarm trigger.",
    ],
    protocols: ["BACnet / IP", "Modbus RTU/TCP", "Dry-Contact Egress Relays", "OPC UA"],
  },
  {
    id: "access-identity",
    number: "04",
    title: "Access Control & Identity Flow Management",
    subtitle: "Touchless biometric authentication, optical speed gates & encrypted OSDP controller infrastructure",
    icon: KeyRound,
    certifications: ["OSDP AES-128", "Anti-Passback Logic", "USFDA 21 CFR Compliant", "Fire Egress Certified"],
    focusPillars: [
      "Biometric Facial Recognition",
      "Motorized Speed Turnstiles",
      "OSDP Encrypted Readers",
      "Dynamic Time-Limited QR Access",
      "Sterile Cleanroom Interlocks",
    ],
    partners: [
      { name: "Spectra", tier: "Enterprise Hardware", specialization: "High-security IP access controllers & biometric readers" },
      { name: "eSSL", tier: "Turnstile & Flow", specialization: "Motorized optical speed gates & biometric terminals" },
      { name: "HID", tier: "Global Identity Leader", specialization: "Seos encrypted credentials & mobile Bluetooth access" },
    ],
    specifications: [
      "Sub-200ms touchless authentication using dual-camera infrared facial recognition with liveness anti-spoofing.",
      "High-throughput optical flap barriers and swing speed turnstiles accommodating up to 45 authorized individuals per minute per lane.",
      "OSDP v2 protocol with AES-128 bit encryption to eliminate Wiegand credential interception and man-in-the-middle attacks.",
      "Custom airlock interlocking firmware for pharmaceutical plants maintaining positive differential pressure barriers.",
    ],
    protocols: ["OSDP v2 AES-128", "Wiegand 34-Bit", "Active Directory / LDAP", "REST Webhooks"],
  },
];

export default function OEMCategoriesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? OEM_CATEGORIES_DATA
      : OEM_CATEGORIES_DATA.filter((cat) => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* ================= 1. HERO HEADER ================= */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-24 pb-16">
        
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -left-48 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-wider text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              CONVERGED TECHNOLOGY ARCHITECTURE // TIER-1 PARTNERS
            </span>

            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl">
              OEM Technology Categories &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Hardware Ecosystem
              </span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              We select field-proven enterprise hardware from world leaders, architect it into a single living nervous system, and guarantee 100% operational uptime for life.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:bg-cyan-300 shadow-lg shadow-cyan-500/20"
              >
                <CalendarCheck className="h-4 w-4" />
                Request Specification Consultation
              </Link>
              <Link
                href="/track-record/"
                className="inline-flex items-center gap-2 rounded-md border border-cyan-400/40 bg-slate-900/80 px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-cyan-300 transition hover:bg-slate-800"
              >
                <Layers className="h-4 w-4" />
                View Sector Track Record
              </Link>
            </div>

          </div>

          {/* Integration-First Callout Banner */}
          <div className="mt-12 overflow-hidden rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 p-6 shadow-xl backdrop-blur-md">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-400">
                  <Share2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white sm:text-lg">
                    Integration First: Multi-Vendor Harmony via Open Standards
                  </h3>
                  <p className="text-xs text-slate-300 sm:text-sm">
                    We deploy multi-vendor systems connected via unified open protocols: ONVIF, BACnet, Modbus, MQTT, and REST APIs. Zero proprietary lock-in.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-cyan-300">
                <span className="rounded bg-slate-800/90 px-2 py-1 border border-slate-700">ONVIF Profile S/G/T</span>
                <span className="rounded bg-slate-800/90 px-2 py-1 border border-slate-700">BACnet/IP</span>
                <span className="rounded bg-slate-800/90 px-2 py-1 border border-slate-700">Modbus TCP</span>
                <span className="rounded bg-slate-800/90 px-2 py-1 border border-slate-700">MQTT</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. STICKY NAV FILTER BAR ================= */}
      <nav className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span className="hidden font-mono text-xs uppercase tracking-wider text-slate-400 md:inline-block">
            Hardware Vertical:
          </span>
          <div className="flex w-full items-center gap-2 overflow-x-auto pb-1 md:w-auto md:pb-0">
            {[
              { id: "all", label: "All Verticals (4)" },
              { id: "surveillance-ai", label: "Surveillance & AI" },
              { id: "networking-compute", label: "Networking & Compute" },
              { id: "fire-life-safety", label: "Life Safety & BAS/BMS" },
              { id: "access-identity", label: "Access & Flow" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`whitespace-nowrap rounded-md px-3.5 py-1.5 font-heading text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === tab.id
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

      {/* ================= 3. FOUR DISTINCT OEM HARDWARE VERTICALS ================= */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;

            return (
              <article
                key={category.id}
                id={category.id}
                className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 lg:p-8"
              >
                
                {/* Header & Category Identity */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800/80 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-cyan-400">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-slate-500">
                          VERTICAL {category.number}
                        </span>
                        <span className="text-slate-700">•</span>
                        <span className="font-mono text-xs text-cyan-400">
                          HARDWARE ECOSYSTEM
                        </span>
                      </div>
                      <h2 className="mt-0.5 font-heading text-2xl font-bold text-white sm:text-3xl">
                        {category.title}
                      </h2>
                      <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Certifications & Standard Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-semibold text-cyan-300"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Focus Pillars Strip */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="self-center font-mono text-[11px] uppercase tracking-wider text-slate-400 mr-2">
                    Key Focus Capabilities:
                  </span>
                  {category.focusPillars.map((pillar, idx) => (
                    <span
                      key={idx}
                      className="rounded border border-slate-700 bg-slate-850 px-2.5 py-1 text-xs font-medium text-slate-200"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>

                {/* Partner OEM Grid */}
                <div className="mt-6">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-3">
                    Tier-1 OEM Technology Partners:
                  </span>
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {category.partners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="group flex flex-col justify-between rounded-lg border border-slate-800 bg-slate-950/70 p-4 transition-all hover:border-cyan-400 hover:bg-slate-900"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="font-heading text-base font-bold text-white group-hover:text-cyan-300">
                              {partner.name}
                            </h4>
                            <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-cyan-400">
                              {partner.tier}
                            </span>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-slate-400">
                            {partner.specialization}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Specifications Grid */}
                <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950/80 p-5">
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                    Engineering Delivery Specifications:
                  </h4>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {category.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 sm:text-sm">
                        <Check className="h-4 w-4 flex-shrink-0 text-cyan-400 mt-0.5" />
                        <span className="leading-relaxed">{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Open Protocols */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-800/80 pt-3">
                    <span className="font-mono text-[11px] text-slate-400">Supported Standards & Protocols:</span>
                    {category.protocols.map((proto, idx) => (
                      <span key={idx} className="rounded bg-slate-900 px-2 py-0.5 font-mono text-[11px] text-cyan-300 border border-slate-700">
                        {proto}
                      </span>
                    ))}
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
            ENGINEERING SPECIFICATION & SIZING
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
