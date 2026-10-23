/**
 * TrustNexus Technologies - Specialized Interactive Engineering Engines
 * 1. Home Isometric Building Visualizer (Static Structure vs Living Entity)
 * 2. Overview 4-Layer Exploded Building
 * 3. Systems Orchestration Emergency Simulation Engine (with Replay)
 * 4. Access Control 3-Step Flow & Life-Safety Red Override
 * 5. AMC 2.0 Rotating Infinity Loop
 * 6. Contact Survey Form Validation & Ref Code Generator
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Home Isometric Building Visualizer
  // ==========================================================================
  const heroWireframes = document.querySelectorAll('.building-wireframe');
  const livingElements = document.querySelectorAll('.living-network-layer');
  const stateLabel = document.getElementById('buildingStateLabel');
  const packetCount = document.getElementById('hudPacketCount');

  // Keep living nervous system continuously active
  heroWireframes.forEach((el) => {
    el.classList.add('active-nerve');
  });

  livingElements.forEach((el) => {
    el.style.opacity = '1';
  });

  if (stateLabel) {
    stateLabel.textContent = 'Living Nervous System';
    stateLabel.style.color = '#38BDF8';
  }

  // Auto update telemetry packet counter (Active only when element is in DOM)
  if (packetCount) {
    setInterval(() => {
      const count = Math.floor(1240 + Math.random() * 48);
      packetCount.textContent = count + ' pkts/sec';
    }, 1600);
  }

  // Scroll effect: transition smoothly
  window.addEventListener('scroll', function () {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > 280) {
      // keep active
    }
  }, { passive: true });

  // ==========================================================================
  // 2. Overview 4-Layer Exploded Building Visualizer
  // ==========================================================================
  const layerButtons = document.querySelectorAll('.layer-select-btn');
  const buildingSlices = document.querySelectorAll('.building-slice');

  const layerData = {
    '1': {
      title: 'Layer 01 // Base & Physical Infrastructure',
      summary: 'Heavy-gauge GI cable trays, separated containment conduits for ELV and HT power, dedicated low-impedance earthing pits (<1 ohm), and uninterruptible power busbars with dual ATS redundancy.',
      standards: ['EIA/TIA 568.0-D', 'IS 3043 Grounding Code', 'UL Listed Fire-Stop Sealants'],
      subsystems: ['Containment Conduits', 'Dual UPS Busbars', 'Earth Pits & Surge Suppression', 'Raceway Thermal Isolation']
    },
    '2': {
      title: 'Layer 02 // Perimeter & Controlled Ingress',
      summary: 'Perimeter intrusion detection radar, anti-crash crash-rated bollards (ASTM M30/P1), motorized optical turnstiles with 0.2s wing retreat, and biometric facial access terminals.',
      standards: ['ASTM F2656 Crash Standards', 'OSDP v2 Encrypted Protocols', 'Wiegand Replacement Specs'],
      subsystems: ['Biometric Flap Barriers', 'Under-Vehicle Surveillance (UVSS)', 'Perimeter Microphonic Fencing', 'Automated Boom Gates']
    },
    '3': {
      title: 'Layer 03 // Active Sensor Nodes & Edge IP',
      summary: '4K Ultra-HD AI IP cameras with deep-learning neural chips, multi-criteria optical-smoke and thermal heat detectors, IoT indoor air quality sensors, and industrial 10GbE PoE++ edge switches.',
      standards: ['ONVIF Profile S/G/T Compliant', 'IEEE 802.3bt Type 4 (90W PoE)', 'EN 54-7 Optical Smoke Criteria'],
      subsystems: ['AI Video Surveillance', 'Addressable Smoke & Heat Nodes', 'LoRaWAN IoT Air Sensors', 'PoE++ Distribution Switches']
    },
    '4': {
      title: 'Layer 04 // The Brain // Converged PSIM & BMS Orchestrator',
      summary: 'Physical Security Information Management (PSIM) and Converged Building Management Server. Synthesizes millions of daily sensor events into a single real-time operational map with automated cross-system workflows.',
      standards: ['BACnet/IP ISO 16484-5', 'MQTT & REST APIs', 'IEC 62443 Industrial Cybersecurity'],
      subsystems: ['Unified Incident Command UI', 'Cross-System Logic Matrix', 'Automated Life-Safety Overrides', 'Predictive Asset Telemetry Engine']
    }
  };

  const layerLinks = {
    '1': { url: '../solutions/network-it-infra/', label: 'Explore Network & IT Backbone →' },
    '2': { url: '../solutions/access-control/', label: 'Explore Perimeter & Access Control →' },
    '3': { url: '../solutions/smart-cctv-ai/', label: 'Explore AI Surveillance & Sensors →' },
    '4': { url: '../solutions/amc-2-0/', label: 'Explore PSIM & AMC 2.0 Support →' }
  };

  function selectLayer(layerId) {
    layerButtons.forEach((btn) => {
      const match = btn.getAttribute('data-layer') === layerId;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-pressed', match ? 'true' : 'false');
    });

    buildingSlices.forEach((slice) => {
      const match = slice.getAttribute('data-layer') === layerId;
      slice.classList.toggle('active-slice', match);
    });

    const infoBox = document.getElementById('activeLayerInfo');
    if (infoBox && layerData[layerId]) {
      const data = layerData[layerId];
      const link = layerLinks[layerId];
      infoBox.innerHTML = `
        <span class="step-number">ARCHITECTURE TIER 0${layerId}</span>
        <h3 class="layer-title" style="margin-top: 4px; font-size: 1.35rem; color: var(--navy);">${data.title}</h3>
        <p class="layer-summary" style="margin: 12px 0 16px; font-size: 0.95rem; line-height: 1.6;">${data.summary}</p>
        <div style="margin-top: 16px;">
          <h4 class="layer-subsystems-heading" style="font-family: var(--font-heading); font-size: 0.85rem; color: var(--navy); margin-bottom: 8px;">Convergence subsystems</h4>
          <div class="layer-tags">
            ${data.subsystems.map(s => `<span class="layer-subsystem-tag">${s}</span>`).join('')}
          </div>
        </div>
        <div style="margin-top: 16px; padding-top: 14px; border-top: 1px dashed var(--border-light);">
          <h4 class="layer-protocols-heading" style="font-family: var(--font-heading); font-size: 0.82rem; color: var(--slate); margin-bottom: 6px;">Compliance & engineering protocols</h4>
          <div style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--cyan-deep); margin-bottom: 16px;">
            ${data.standards.join(' • ')}
          </div>
          ${link ? `<a href="${link.url}" class="layer-secondary-link" style="display: inline-flex; align-items: center; gap: 6px; font-size: 0.85rem;">${link.label}</a>` : ''}
        </div>
      `;
    }
  }

  if (layerButtons.length > 0) {
    layerButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        selectLayer(this.getAttribute('data-layer'));
      });
      btn.addEventListener('mouseenter', function () {
        selectLayer(this.getAttribute('data-layer'));
      });
    });

    buildingSlices.forEach((slice) => {
      slice.addEventListener('click', function () {
        selectLayer(this.getAttribute('data-layer'));
      });
      slice.addEventListener('mouseenter', function () {
        selectLayer(this.getAttribute('data-layer'));
      });
    });

    // Auto-initialize first architecture tier
    selectLayer('1');
  }

  // ==========================================================================
  // 3. Systems Orchestration Emergency Simulation Engine
  // ==========================================================================
  const triggerSimBtn = document.getElementById('btnTriggerEmergencySim');
  const replaySimBtn = document.getElementById('btnReplayEmergencySim');
  const simSensorCard = document.getElementById('simSensorCard');
  const simActionDoors = document.getElementById('simActionDoors');
  const simActionCameras = document.getElementById('simActionCameras');
  const simActionAudio = document.getElementById('simActionAudio');
  const simStatusDot = document.getElementById('simStatusDot');
  const simStatusHeadline = document.getElementById('simStatusHeadline');
  const simStatusSub = document.getElementById('simStatusSub');
  const simEventTerminal = document.getElementById('simEventTerminal');

  let simTimeouts = [];

  function addLogEntry(type, text) {
    if (!simEventTerminal) return;
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
    const row = document.createElement('div');
    row.className = 'event-log-entry';
    let typeClass = 'event-type-system';
    if (type === 'ALERT') typeClass = 'event-type-alert';
    if (type === 'ACTION') typeClass = 'event-type-action';

    row.innerHTML = `
      <span class="event-timestamp">[${timeStr}]</span>
      <span class="${typeClass}">[${type}]</span>
      <span>${text}</span>
    `;
    simEventTerminal.prepend(row);
  }

  function resetSimulation() {
    simTimeouts.forEach(clearTimeout);
    simTimeouts = [];

    if (simSensorCard) simSensorCard.classList.remove('tripped');
    if (simActionDoors) simActionDoors.classList.remove('firing');
    if (simActionCameras) simActionCameras.classList.remove('firing');
    if (simActionAudio) simActionAudio.classList.remove('firing');

    if (simStatusDot) {
      simStatusDot.classList.remove('emergency-active');
      simStatusDot.style.background = 'var(--success-green)';
    }

    if (simStatusHeadline) simStatusHeadline.textContent = 'CONVERGED SYSTEM STATUS: ALL NODES NOMINAL';
    if (simStatusSub) simStatusSub.textContent = 'Standby mode • 0 alerts • Monitoring 412 converged zones';

    if (simEventTerminal) {
      simEventTerminal.innerHTML = `
        <div class="event-log-entry">
          <span class="event-timestamp">[00:00:00.000]</span>
          <span class="event-type-system">[STANDBY]</span>
          <span>TrustNexus Converged Orchestration Engine initialized. Listening to BACnet/IP, OSDP and ONVIF event bus...</span>
        </div>
      `;
    }

    if (triggerSimBtn) triggerSimBtn.disabled = false;
  }

  function runEmergencySimulation() {
    if (triggerSimBtn) triggerSimBtn.disabled = true;

    // Phase 1: Trigger Smoke in Sector B
    addLogEntry('ALERT', 'CRITICAL EVENT: Optical Smoke Detector #FD-B09 tripped in Sector B (Pharma Cleanroom / Server Annex). Obscuration: 4.8%/ft.');

    if (simSensorCard) simSensorCard.classList.add('tripped');
    if (simStatusDot) {
      simStatusDot.classList.add('emergency-active');
      simStatusDot.style.background = 'var(--alert-red)';
    }
    if (simStatusHeadline) {
      simStatusHeadline.textContent = 'CRITICAL EMERGENCY: SECTOR B FIRE DETECTED';
      simStatusHeadline.style.color = '#FFFFFF';
    }
    if (simStatusSub) {
      simStatusSub.textContent = 'Orchestrator fired 3 automated life-safety workflows within 180ms';
    }

    // Phase 2: Action 1 - Doors Unlock (180ms)
    simTimeouts.push(setTimeout(() => {
      if (simActionDoors) simActionDoors.classList.add('firing');
      addLogEntry('ACTION', 'ACCESS CONTROL: Failsafe relay activated. Maglocks released on Sector B Exit Doors #E01-E04. Turnstile arms dropped for zero-friction evacuation.');
    }, 350));

    // Phase 3: Action 2 - Cameras slew & track (420ms)
    simTimeouts.push(setTimeout(() => {
      if (simActionCameras) simActionCameras.classList.add('firing');
      addLogEntry('ACTION', 'SMART CCTV: PTZ Dome #CAM-B02 slewed to coordinates X:142 Y:88. Optical zoom 6x engaged. Thermal feed routed to Central Security Command Video Wall.');
    }, 750));

    // Phase 4: Action 3 - Voice Evacuation & HVAC Dampers (700ms)
    simTimeouts.push(setTimeout(() => {
      if (simActionAudio) simActionAudio.classList.add('firing');
      addLogEntry('ACTION', 'LIFE SAFETY & BMS: Zonal PA/VA emergency directive broadcasting in English & Gujarati. Sector B HVAC fire dampers sealed to contain smoke.');
    }, 1150));

    // Phase 5: Complete state confirmation
    simTimeouts.push(setTimeout(() => {
      addLogEntry('SYSTEM', 'CONVERGENCE VERIFIED: All 3 autonomous subsystems synchronized in 1.15 seconds. No human dispatcher delay.');
      if (triggerSimBtn) triggerSimBtn.disabled = false;
    }, 1800));
  }

  if (triggerSimBtn) {
    triggerSimBtn.addEventListener('click', runEmergencySimulation);
  }

  if (replaySimBtn) {
    replaySimBtn.addEventListener('click', function () {
      resetSimulation();
      setTimeout(runEmergencySimulation, 250);
    });
  }

  // ==========================================================================
  // 4. Access Control Interactive Node State
  // ==========================================================================
  const triggerOverrideBtn = document.getElementById('btnTriggerOverride');
  if (triggerOverrideBtn) {
    triggerOverrideBtn.remove();
  }

  // ==========================================================================
  // 5. AMC 2.0 Interactive Infinity Loop / Node Hub
  // ==========================================================================
  const loopNodes = document.querySelectorAll('.amc-loop-node');
  const amcDetailContent = document.getElementById('amcDetailContent');

  const amcData = {
    '1': {
      title: 'Guarantee 01 // Predictive Maintenance',
      badge: 'THE AMC 2.0 GUARANTEE',
      desc: 'Routine health checks and proactive replacement before hardware degrades. Continuous telemetry and scheduled hardware inspections eliminate surprises.',
      points: [
        'Routine health checks across all ELV and IT layers',
        'Proactive replacement before hardware components degrade',
        'Zero-surprise uptime sustained through SLA management',
        'Quarterly sensor drift and optical recalibration'
      ]
    },
    '2': {
      title: 'Guarantee 02 // Firmware & Optimisation',
      badge: 'THE AMC 2.0 GUARANTEE',
      desc: 'Continuous software updates to the AI and security layers. We patch CVE vulnerabilities, tune neural models, and maintain strict cyber compliance.',
      points: [
        'Continuous software updates to AI & security layers',
        'Regular CVE security vulnerability mitigation',
        'Edge device credential hardening and 802.1X certificates',
        'VMS and NVR engine throughput optimisation'
      ]
    },
    '3': {
      title: 'Guarantee 03 // 24/7 Command Support',
      badge: 'THE AMC 2.0 GUARANTEE',
      desc: 'A transparent ticket-management portal for SLA compliance visibility, allowing facility and IT leaders to track response times and resolutions in real time.',
      points: [
        'Transparent ticket-management portal for SLA compliance visibility',
        'Real-time incident tracking from dispatch to resolution',
        'Comprehensive audit logbooks for statutory inspectors',
        'Dedicated senior technical escalation managers'
      ]
    },
    '4': {
      title: 'Guarantee 04 // Certified On-Site Dispatch',
      badge: 'THE AMC 2.0 GUARANTEE',
      desc: 'Trained technical engineers deployed for rapid, critical recovery directly to your premises with necessary diagnostic tools and replacement units.',
      points: [
        'Trained technical engineers deployed for rapid critical recovery',
        'Direct local dispatch across Ahmedabad and regional industrial belts',
        'Hot-swappable replacement controllers and spares buffer',
        'Full post-incident root-cause analysis documentation'
      ]
    }
  };

  function selectAmcNode(nodeId) {
    loopNodes.forEach((node) => {
      if (node.getAttribute('data-node') === nodeId) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });

    if (amcDetailContent && amcData[nodeId]) {
      const data = amcData[nodeId];
      amcDetailContent.innerHTML = `
        <span class="tech-badge" style="margin-bottom: 12px;">${data.badge}</span>
        <h3 style="font-family: var(--font-heading); font-size: 1.45rem; color: var(--navy); margin-bottom: 8px;">${data.title}</h3>
        <p style="font-size: 0.96rem; line-height: 1.6; color: var(--slate); margin-bottom: 20px;">${data.desc}</p>
        <div style="border-top: 1px solid var(--border-light); padding-top: 16px;">
          <h5 style="font-family: var(--font-heading); font-size: 0.88rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--navy); margin-bottom: 12px;">Key Engineering Commitments:</h5>
          ${data.points.map(pt => `
            <div class="amc-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span style="font-size: 0.9rem; color: var(--navy); font-weight: 500;">${pt}</span>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  if (loopNodes.length > 0) {
    loopNodes.forEach((node) => {
      node.addEventListener('click', function () {
        selectAmcNode(this.getAttribute('data-node'));
      });
      node.addEventListener('mouseenter', function () {
        selectAmcNode(this.getAttribute('data-node'));
      });
    });
  }

  // ==========================================================================
  // 6. Contact Survey Form Validation & Ref Code Generator
  // ==========================================================================
  const surveyForm = document.getElementById('siteSurveyForm');
  const formSuccessBox = document.getElementById('surveySuccessBox');
  const refCodeDisplay = document.getElementById('surveyRefCode');
  const resetFormBtn = document.getElementById('btnResetSurveyForm');

  if (surveyForm) {
    surveyForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Check honeypot
      const honeypot = document.getElementById('formHoneypot');
      if (honeypot && honeypot.value !== '') {
        console.warn('Spam submission intercepted.');
        return;
      }

      let isValid = true;

      // Required fields validation
      const fields = ['surveyName', 'surveyCompany', 'surveyRole', 'surveyEmail', 'surveyPhone', 'surveyIndustry', 'surveySolution'];

      fields.forEach((fieldId) => {
        const input = document.getElementById(fieldId);
        const errorEl = document.getElementById(fieldId + 'Error');
        if (!input) return;

        let fieldValid = true;

        if (!input.value.trim()) {
          fieldValid = false;
        } else if (input.type === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value.trim())) {
            fieldValid = false;
          }
        } else if (fieldId === 'surveyPhone') {
          const phoneClean = input.value.replace(/[^0-9]/g, '');
          if (phoneClean.length < 9) {
            fieldValid = false;
          }
        }

        if (!fieldValid) {
          isValid = false;
          input.classList.add('is-invalid');
          if (errorEl) errorEl.classList.add('visible');
        } else {
          input.classList.remove('is-invalid');
          if (errorEl) errorEl.classList.remove('visible');
        }
      });

      if (!isValid) {
        // Focus first invalid field
        const firstInvalid = surveyForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Simulate submission loading & success
      const submitBtn = document.getElementById('btnSubmitSurvey');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg style="animation: spin 1s linear infinite;" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10"></path>
          </svg>
          Transmitting Survey Scope...
        `;
      }

      setTimeout(() => {
        // Generate random reference code e.g. TN-SRV-2026-B849
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const refCode = `TN-SRV-2026-X${randomNum}`;

        if (refCodeDisplay) {
          refCodeDisplay.textContent = refCode;
        }

        surveyForm.style.display = 'none';
        if (formSuccessBox) {
          formSuccessBox.classList.add('is-active');
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Submit Survey Request';
        }
      }, 950);
    });

    if (resetFormBtn) {
      resetFormBtn.addEventListener('click', function () {
        surveyForm.reset();
        surveyForm.style.display = 'block';
        if (formSuccessBox) {
          formSuccessBox.classList.remove('is-active');
        }
      });
    }
  }
})();
