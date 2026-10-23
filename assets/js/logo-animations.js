/**
 * TrustNexus Technologies - 2026 Converged ELV Ecosystem
 * Logo Ecosystem Animation Engine & Interactive Spotlight Theater
 */

(function () {
  'use strict';

  // Catalog of organized OEM Partners and Marquee Clients
  const LOGO_CATALOG = [
    // 01 Surveillance & Edge AI
    {
      id: 'bosch',
      name: 'Bosch',
      category: 'surveillance',
      categoryLabel: 'Surveillance & Edge AI',
      tier: 'Tier-1 Global Leader',
      src: 'assets/images/logos/oem-partners/surveillance/bosch.jpg',
      desc: 'Industry-standard ultra-HD surveillance, perimeter thermal radar, and intelligent Public Address/Voice Evacuation systems.'
    },
    {
      id: 'honeywell',
      name: 'Honeywell',
      category: 'surveillance',
      categoryLabel: 'Surveillance & Edge AI',
      tier: 'Enterprise Global',
      src: 'assets/images/logos/oem-partners/surveillance/honeywell.jpg',
      desc: 'Commercial building automation, integrated security management systems, and high-reliability fire detection solutions.'
    },
    {
      id: 'hikvision',
      name: 'Hikvision',
      category: 'surveillance',
      categoryLabel: 'Surveillance & Edge AI',
      tier: 'Global Volume Leader',
      src: 'assets/images/logos/oem-partners/surveillance/hikvision.jpg',
      desc: '4K AcuSense Edge-AI camera systems, deep-learning ANPR vehicular access, and thermal perimeter security.'
    },
    {
      id: 'dahua',
      name: 'Dahua',
      category: 'surveillance',
      categoryLabel: 'Surveillance & Edge AI',
      tier: 'AIoT Pioneer',
      src: 'assets/images/logos/oem-partners/surveillance/dahua.jpg',
      desc: 'WizMind deep-learning edge video analytics, active perimeter deterrence cameras, and optical flow telemetry.'
    },
    {
      id: 'pelco',
      name: 'Pelco',
      category: 'surveillance',
      categoryLabel: 'Surveillance & Edge AI',
      tier: 'ATEX / Hazardous Zone',
      src: 'assets/images/logos/oem-partners/surveillance/pelco.jpg',
      desc: 'Heavy-duty explosion-proof camera housings and mission-critical oil & gas perimeter surveillance (Motorola Solutions Company).'
    },
    {
      id: 'cp-plus',
      name: 'CP Plus',
      category: 'surveillance',
      categoryLabel: 'Surveillance & Edge AI',
      tier: 'Commercial Standard',
      src: 'assets/images/logos/oem-partners/surveillance/cp-plus.jpg',
      desc: 'High-density IP surveillance systems, network video recorders, and scalable commercial facility security.'
    },

    // 02 Enterprise Networking & Compute
    {
      id: 'cisco',
      name: 'Cisco',
      category: 'networking',
      categoryLabel: 'Enterprise Networking & Compute',
      tier: 'Core Backbone Partner',
      src: 'assets/images/logos/oem-partners/networking-compute/cisco.jpg',
      desc: 'Catalyst & Nexus zero-trust Layer 2/3 enterprise switching, 40 Gbps backbone optical routing, and encrypted VLAN distribution.'
    },
    {
      id: 'hpe',
      name: 'HPE',
      category: 'networking',
      categoryLabel: 'Enterprise Networking & Compute',
      tier: 'Core Compute / Aruba',
      src: 'assets/images/logos/oem-partners/networking-compute/hpe.jpg',
      desc: 'High-density server racks, Aruba enterprise Wi-Fi 7 access points, and low-latency edge AI compute nodes.'
    },
    {
      id: 'dell',
      name: 'Dell Technologies',
      category: 'networking',
      categoryLabel: 'Enterprise Networking & Compute',
      tier: 'VMS Storage & Compute',
      src: 'assets/images/logos/oem-partners/networking-compute/dell.jpg',
      desc: 'PowerEdge rack servers and SAN/NAS high-throughput video storage arrays engineered for multi-petabyte VMS retention.'
    },
    {
      id: 'commscope',
      name: 'CommScope',
      category: 'networking',
      categoryLabel: 'Enterprise Networking & Compute',
      tier: 'Structured Cabling OEM',
      src: 'assets/images/logos/oem-partners/networking-compute/commscope.jpg',
      desc: 'Fluke-certified Cat6A/Cat7 copper infrastructure, high-density patch panels, and armored single-mode optical fiber backbones.'
    },
    {
      id: 'd-link',
      name: 'D-Link',
      category: 'networking',
      categoryLabel: 'Enterprise Networking & Compute',
      tier: 'PoE+ Switching OEM',
      src: 'assets/images/logos/oem-partners/networking-compute/d-link.jpg',
      desc: 'Managed PoE+ distribution switches supplying robust high-wattage power to IP surveillance and access controllers.'
    },
    {
      id: 'schneider',
      name: 'Schneider Electric',
      category: 'networking',
      categoryLabel: 'Enterprise Networking & Compute',
      tier: 'Critical Power / BMS',
      src: 'assets/images/logos/oem-partners/networking-compute/schneider.jpg',
      desc: 'Modular online UPS systems, precision data-center rack power distribution units, and integrated building telemetry.'
    },

    // 03 Life Safety & Building Automation
    {
      id: 'siemens',
      name: 'Siemens',
      category: 'lifesafety',
      categoryLabel: 'Life Safety & Automation',
      tier: 'Industrial Grade Leader',
      src: 'assets/images/logos/oem-partners/life-safety/siemens.jpg',
      desc: 'Desigo CC integrated building management, industrial PLCs, and addressable multi-criteria life-safety fire systems.'
    },
    {
      id: 'johnson-controls',
      name: 'Johnson Controls',
      category: 'lifesafety',
      categoryLabel: 'Life Safety & Automation',
      tier: 'Global Safety OEM',
      src: 'assets/images/logos/oem-partners/life-safety/johnson-controls.jpg',
      desc: 'Metasys building automation, York environmental controls, and integrated enterprise security access orchestration.'
    },
    {
      id: 'ravel',
      name: 'Ravel',
      category: 'lifesafety',
      categoryLabel: 'Life Safety & Automation',
      tier: 'Addressable Fire OEM',
      src: 'assets/images/logos/oem-partners/life-safety/ravel.jpg',
      desc: 'NBC 2016 Part 4 compliant microprocessor-based addressable fire alarm control panels and intelligent optical loop sensors.'
    },
    {
      id: 'agni',
      name: 'Agni',
      category: 'lifesafety',
      categoryLabel: 'Life Safety & Automation',
      tier: 'Gas Suppression OEM',
      src: 'assets/images/logos/oem-partners/life-safety/agni.jpg',
      desc: 'Clean-agent Novec 1230 & FM-200 automatic fire suppression systems protecting server rooms and pharma cleanrooms.'
    },

    // 04 Access Control & Flow Management
    {
      id: 'spectra',
      name: 'Spectra',
      category: 'access',
      categoryLabel: 'Access Control & Flow',
      tier: 'Enterprise Access OEM',
      src: 'assets/images/logos/oem-partners/access-control/spectra.jpg',
      desc: 'OSDP v2 encrypted controllers, touchless facial recognition biometric terminals, and secure enterprise turnstile logic.'
    },
    {
      id: 'essl',
      name: 'eSSL',
      category: 'access',
      categoryLabel: 'Access Control & Flow',
      tier: 'Biometrics Pioneer',
      src: 'assets/images/logos/oem-partners/access-control/essl.jpg',
      desc: 'High-throughput optical speed turnstiles, biometric fingerprint readers, and anti-passback physical flow control.'
    },

    // 05 Client Track Record
    {
      id: 'iocl',
      name: 'Indian Oil (IOCL)',
      category: 'clients',
      categoryLabel: 'Energy & Heavy Industry',
      tier: 'Maharatna PSU Client',
      src: 'assets/images/logos/clients-track-record/energy-chemicals/iocl.jpg',
      desc: 'Hazardous hydrocarbon refinery and pipeline terminal converged ELV, ATEX thermal CCTV, and integrated safety systems.'
    },
    {
      id: 'opal',
      name: 'ONGC Petro additions (OPaL)',
      category: 'clients',
      categoryLabel: 'Energy & Heavy Industry',
      tier: 'Mega Petrochem Complex',
      src: 'assets/images/logos/clients-track-record/energy-chemicals/opal.jpg',
      desc: 'Dahej SEZ multi-billion dollar petrochemical plant perimeter defense, IP PA/VA voice evacuation, and optical backbones.'
    },
    {
      id: 'tcs',
      name: 'Tata Consultancy Services',
      category: 'clients',
      categoryLabel: 'Enterprise IT Campus',
      tier: 'Global Tech Giant',
      src: 'assets/images/logos/clients-track-record/enterprise-it-finance/tcs.jpg',
      desc: 'High-volume zero-trust speed gates, encrypted mobile BLE credentialing, and multi-tier server room physical interlocks.'
    },
    {
      id: 'mastercard',
      name: 'Mastercard',
      category: 'clients',
      categoryLabel: 'Global Financial Services',
      tier: 'Global Payment FinTech',
      src: 'assets/images/logos/clients-track-record/enterprise-it-finance/mastercard.jpg',
      desc: 'Security Operations Center (SOC) video monitoring, multi-factor biometric authentication, and redundant fiber infrastructure.'
    },
    {
      id: 'axaj',
      name: 'Axaj Pharma',
      category: 'clients',
      categoryLabel: 'Pharma & Cleanroom Labs',
      tier: 'Sterile Formulations',
      src: 'assets/images/logos/clients-track-record/pharma-cleanrooms/axaj-pharma.jpg',
      desc: 'USFDA 21 CFR Part 11 cleanroom airshower access interlocks, Novec 1230 fire suppression, and environmental AQI logging.'
    },
    {
      id: 'sigma',
      name: 'Sigma Life Science',
      category: 'clients',
      categoryLabel: 'Pharma & Cleanroom Labs',
      tier: 'Clinical Diagnostics',
      src: 'assets/images/logos/clients-track-record/pharma-cleanrooms/sigma-lifescience.jpg',
      desc: 'GMP cleanroom environmental telemetry, sterile lab access control, and 100% uptime SLA under TrustNexus AMC 2.0.'
    },
    {
      id: 'bodal',
      name: 'Bodal Chemicals Ltd',
      category: 'clients',
      categoryLabel: 'Energy & Heavy Industry',
      tier: 'Speciality Chemical Giant',
      src: 'assets/images/logos/clients-track-record/energy-chemicals/bodal.jpg',
      desc: 'Harsh corrosive environment fiber optic distribution, explosion-proof CCTV deployment, and continuous AMC 2.0 health maintenance.'
    },
    {
      id: 'gpcb',
      name: 'GPCB',
      category: 'clients',
      categoryLabel: 'Government & Institutions',
      tier: 'Statutory Board Client',
      src: 'assets/images/logos/clients-track-record/government-institutions/gpcb.jpg',
      desc: 'Gujarat Pollution Control Board environmental data telemetry, high-definition regional surveillance, and hardened IT networks.'
    }
  ];

  // Clone marquee items for infinite seamless looping (Guarded against duplicate execution)
  function initMarqueeClones() {
    const tracks = document.querySelectorAll('.logo-marquee-track');
    tracks.forEach((track) => {
      if (track.dataset.cloned === 'true') return;
      track.dataset.cloned = 'true';
      // Duplicate each child cleanly without destroying listeners or innerHTML
      const children = Array.from(track.children);
      children.forEach((child) => {
        track.appendChild(child.cloneNode(true));
      });
    });
  }

  // Boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initMarqueeClones();
    });
  } else {
    initMarqueeClones();
  }
})();
