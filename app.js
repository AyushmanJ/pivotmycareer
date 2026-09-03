/**
 * Pivot My Career - Application Controller
 * Handles 3-tier hybrid model: Free Diagnostic + Resume Upload, ₹1,999 Psychometric Audit, and ₹5,999 Consultant Strategy Call.
 */

document.addEventListener('DOMContentLoaded', () => {
  // App State
  const state = {
    currentStepIndex: 0,
    answers: {},
    activePreset: null,
    resumeFile: null,
    resumeSkills: [],
    scores: {},
    primaryPathId: 'data_analyst',
    availableTracks: ['data_analyst', 'supply_chain_analytics', 'bizops_manager'],
    activeReportTrack: 'data_analyst',
    activeReportTab: 'overview',
    selectedTier: 'tier_free',
    isPhase1Complete: false,
    isPhase2Unlocked: false
  };

  // DOM Elements
  const presetPills = document.querySelectorAll('.preset-btn');
  const questionContainer = document.getElementById('question-flow');
  const stepIndicator = document.getElementById('step-indicator');
  const progressBar = document.getElementById('progress-bar-fill');
  const prevBtn = document.getElementById('prev-step-btn');
  const nextBtn = document.getElementById('next-step-btn');
  const unlockPhase2Btn = document.getElementById('unlock-phase2-btn');
  const resetBtn = document.getElementById('restart-btn');

  // Resume Upload Elements
  const resumeUploadZone = document.getElementById('resume-upload-zone');
  const resumeFileInput = document.getElementById('resume-file-input');
  const resumeParsedContainer = document.getElementById('resume-parsed-container');

  initApp();

  function initApp() {
    setupEventListeners();
    setupResumeUpload();
    renderPricingSection();
    renderConsultantsRoster();
    // Default load Excel Analyst preset to demonstrate immediate capability
    loadPreset('excel_analyst');
  }

  function setupEventListeners() {
    // Preset switchers
    presetPills.forEach(btn => {
      btn.addEventListener('click', () => {
        const presetId = btn.getAttribute('data-preset');
        presetPills.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        if (presetId === 'custom') {
          resetToCustom();
        } else {
          loadPreset(presetId);
        }
      });
    });

    // Step navigation
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const currentQ = CAREER_DATA.questions[state.currentStepIndex];
        if (!state.answers[currentQ.id]) {
          showToast("Please select an option to continue.", "warning");
          return;
        }

        if (state.currentStepIndex < CAREER_DATA.questions.length - 1) {
          state.currentStepIndex++;
          renderQuestion(state.currentStepIndex);
        } else {
          finishDiagnostic();
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (state.currentStepIndex > 0) {
          state.currentStepIndex--;
          renderQuestion(state.currentStepIndex);
        }
      });
    }

    // Unlock Phase 2 (Psychometric Audit or Full Report)
    if (unlockPhase2Btn) {
      unlockPhase2Btn.addEventListener('click', () => {
        state.isPhase2Unlocked = true;
        renderFullReport();
        const reportTarget = document.getElementById('full-report-anchor');
        if (reportTarget) {
          reportTarget.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Retake Diagnostic
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        resetToCustom();
        window.scrollTo({ top: document.getElementById('diagnostic-section').offsetTop - 60, behavior: 'smooth' });
      });
    }

    // Sub-tab switching in report
    document.querySelectorAll('.report-subtab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.report-subtab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeReportTab = btn.getAttribute('data-subtab');
        renderSubTabContent(state.activeReportTab);
      });
    });

    // Print Report
    const printBtn = document.getElementById('print-report-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  function setupResumeUpload() {
    if (!resumeUploadZone || !resumeFileInput) return;

    resumeUploadZone.addEventListener('click', () => {
      resumeFileInput.click();
    });

    resumeFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        processUploadedResume(e.target.files[0].name);
      }
    });

    // Drag & Drop
    ['dragenter', 'dragover'].forEach(eventName => {
      resumeUploadZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        resumeUploadZone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      resumeUploadZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        resumeUploadZone.classList.remove('dragover');
      }, false);
    });

    resumeUploadZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files && files[0]) {
        processUploadedResume(files[0].name);
      }
    });
  }

  function processUploadedResume(filename) {
    showToast(`Parsing ${filename} with AI...`, "info");
    state.resumeFile = filename;
    
    // Simulate smart skill extraction
    setTimeout(() => {
      state.resumeSkills = ["Advanced Spreadsheets", "ERP Systems", "Data Reconciliation", "Process Automation", "Commercial Reporting"];
      renderResumeParsedCard(filename, state.resumeSkills);
      showToast("Resume parsed successfully! Skills extracted.", "info");
      calculateScores();
    }, 600);
  }

  function renderResumeParsedCard(filename, skills) {
    if (!resumeParsedContainer) return;
    resumeParsedContainer.style.display = 'block';
    resumeParsedContainer.innerHTML = `
      <div class="resume-chip">
        <span>📄</span>
        <span><strong>${filename}</strong> (Parsed by AI)</span>
        <button id="remove-resume-btn" style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:1.1rem; margin-left:8px;">✕</button>
      </div>
      <div class="parsed-skills-tags">
        ${skills.map(s => `<span class="parsed-tag">✓ ${s}</span>`).join('')}
      </div>
    `;

    document.getElementById('remove-resume-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      state.resumeFile = null;
      state.resumeSkills = [];
      resumeParsedContainer.style.display = 'none';
      if (resumeFileInput) resumeFileInput.value = '';
      calculateScores();
    });
  }

  function loadPreset(presetId) {
    const preset = CAREER_DATA.presets[presetId];
    if (!preset) return;

    state.activePreset = presetId;
    state.answers = { ...preset.answers };
    state.currentStepIndex = 0;
    state.resumeFile = preset.resumeFileName;
    state.resumeSkills = preset.resumeParsedSkills;

    // Show active persona banner
    const banner = document.getElementById('preset-active-banner');
    if (banner) {
      banner.style.display = 'flex';
      banner.innerHTML = `
        <span class="pulse-dot"></span>
        <span>Simulating Profile: <strong>${preset.name}</strong> · Role: <em>${preset.currentRole}</em> (${preset.vertical})</span>
        <button id="clear-preset-btn" class="text-link" style="margin-left: 14px;">Switch to Custom Assessment</button>
      `;
      document.getElementById('clear-preset-btn')?.addEventListener('click', resetToCustom);
    }

    // Display parsed resume preview
    renderResumeParsedCard(preset.resumeFileName, preset.resumeParsedSkills);

    calculateScores();
    renderQuestion(state.currentStepIndex);
    finishDiagnostic(false);
  }

  function resetToCustom() {
    state.activePreset = null;
    state.answers = {};
    state.currentStepIndex = 0;
    state.resumeFile = null;
    state.resumeSkills = [];
    state.isPhase1Complete = false;
    state.isPhase2Unlocked = false;

    presetPills.forEach(p => p.classList.remove('active'));
    document.querySelector('[data-preset="custom"]')?.classList.add('active');

    const banner = document.getElementById('preset-active-banner');
    if (banner) banner.style.display = 'none';

    if (resumeParsedContainer) resumeParsedContainer.style.display = 'none';
    if (resumeFileInput) resumeFileInput.value = '';

    document.getElementById('phase1-results-card').style.display = 'none';
    document.getElementById('full-report-container').style.display = 'none';

    renderQuestion(0);
    calculateScores();
  }

  function renderQuestion(index) {
    const q = CAREER_DATA.questions[index];
    if (!q) return;

    const total = CAREER_DATA.questions.length;
    if (stepIndicator) {
      stepIndicator.textContent = `Question ${index + 1} of ${total}`;
    }
    if (progressBar) {
      const pct = ((index + 1) / total) * 100;
      progressBar.style.width = `${pct}%`;
    }

    if (prevBtn) {
      prevBtn.disabled = index === 0;
      prevBtn.style.opacity = index === 0 ? '0.4' : '1';
    }

    if (nextBtn) {
      nextBtn.textContent = index === total - 1 ? "Analyze & Map Career Pivot →" : "Next Question →";
    }

    const currentSelection = state.answers[q.id];

    let optionsHtml = q.options.map((opt) => {
      const isSelected = currentSelection === opt.value ? 'selected' : '';
      return `
        <div class="option-card ${isSelected}" data-opt-value="${opt.value}">
          <div class="option-check-circle">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="option-content">
            <div class="option-header">
              <span class="option-title">${opt.label}</span>
              ${opt.badge ? `<span class="badge badge-accent">${opt.badge}</span>` : ''}
            </div>
            ${opt.sub ? `<p class="option-sub">${opt.sub}</p>` : ''}
          </div>
        </div>
      `;
    }).join('');

    questionContainer.innerHTML = `
      <div class="question-header">
        <span class="category-pill">${q.category}</span>
        <h3 class="question-title">${q.title}</h3>
        <p class="question-subtitle">${q.subtitle}</p>
      </div>
      <div class="options-grid">
        ${optionsHtml}
      </div>
    `;

    questionContainer.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        questionContainer.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const val = card.getAttribute('data-opt-value');
        state.answers[q.id] = val;
        calculateScores();
      });
    });
  }

  function calculateScores() {
    const baseScores = {
      analytical_rigor: 62,
      tool_fluency: 64,
      process_orchestration: 65,
      narrative_persuasion: 60,
      commercial_acumen: 66,
      execution_reliability: 72,
      strategic_problem_solving: 68,
      learning_agility: 64,
      stakeholder_empathy: 65,
      autonomy_drive: 62
    };

    // Boost based on resume presence
    if (state.resumeFile) {
      baseScores.execution_reliability += 6;
      baseScores.tool_fluency += 5;
    }

    // Apply answer impacts
    CAREER_DATA.questions.forEach(q => {
      const selectedVal = state.answers[q.id];
      if (selectedVal) {
        const optionObj = q.options.find(o => o.value === selectedVal);
        if (optionObj && optionObj.scoreImpact) {
          for (const [dim, boost] of Object.entries(optionObj.scoreImpact)) {
            if (baseScores[dim] !== undefined) {
              baseScores[dim] = Math.min(98, baseScores[dim] + boost);
            }
          }
        }
      }
    });

    state.scores = baseScores;

    // Dynamic Career Track Routing based on Vertical
    const vertical = state.answers['current_vertical'] || 'reporting_spreadsheets';

    let primaryPath = 'data_analyst';
    let tracks = ['data_analyst', 'supply_chain_analytics', 'bizops_manager'];

    if (vertical === 'reporting_spreadsheets') {
      primaryPath = 'data_analyst';
      tracks = ['data_analyst', 'supply_chain_analytics', 'fpa_finance'];
    } else if (vertical === 'supply_chain_logistics') {
      primaryPath = 'supply_chain_analytics';
      tracks = ['supply_chain_analytics', 'data_analyst', 'bizops_manager'];
    } else if (vertical === 'admin_operations') {
      primaryPath = 'bizops_manager';
      tracks = ['bizops_manager', 'product_marketing', 'data_analyst'];
    } else if (vertical === 'finance_accounting') {
      primaryPath = 'fpa_finance';
      tracks = ['fpa_finance', 'data_analyst', 'bizops_manager'];
    } else if (vertical === 'presentation_marketing') {
      primaryPath = 'product_marketing';
      tracks = ['product_marketing', 'bizops_manager', 'data_analyst'];
    }

    state.primaryPathId = primaryPath;
    state.availableTracks = tracks;
    state.activeReportTrack = primaryPath;
    state.alignmentIndex = Math.floor(88 + (Math.random() * 6));

    renderLiveDimensionMeters();
  }

  function renderLiveDimensionMeters() {
    const listEl = document.getElementById('live-dimensions-list');
    if (!listEl) return;

    listEl.innerHTML = CAREER_DATA.dimensions.slice(0, 6).map(dim => {
      const val = state.scores[dim.id] || 70;
      return `
        <div class="dim-meter-row">
          <div class="dim-meter-label">
            <span>${dim.icon} ${dim.name}</span>
            <strong>${val.toFixed(1)}</strong>
          </div>
          <div class="dim-meter-track">
            <div class="dim-meter-bar" style="width: ${val}%;"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  function finishDiagnostic(scroll = true) {
    state.isPhase1Complete = true;
    calculateScores();

    const resultsCard = document.getElementById('phase1-results-card');
    if (resultsCard) {
      resultsCard.style.display = 'block';

      document.getElementById('p1-alignment-score').textContent = `${state.alignmentIndex}`;
      
      const primaryPath = CAREER_DATA.paths[state.primaryPathId];
      document.getElementById('p1-primary-path').textContent = primaryPath.title;
      document.getElementById('p1-path-category').textContent = primaryPath.category;
      document.getElementById('p1-readiness').textContent = "Tier 1 Signal Ready · Direct 90-Day Pivot";
      document.getElementById('p1-insight-text').textContent = primaryPath.whyYouFit;

      const topDims = CAREER_DATA.dimensions
        .map(d => ({ ...d, score: state.scores[d.id] }))
        .sort((a, b) => b.score - a.score);

      document.getElementById('p1-top-dimension-name').textContent = topDims[0].name;
      document.getElementById('p1-top-dimension-score').textContent = topDims[0].score.toFixed(1);
      document.getElementById('p1-growth-dimension-name').textContent = topDims[topDims.length - 1].name;
      document.getElementById('p1-growth-dimension-score').textContent = topDims[topDims.length - 1].score.toFixed(1);

      if (scroll) {
        resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  function renderFullReport() {
    const fullReportContainer = document.getElementById('full-report-container');
    if (!fullReportContainer) return;

    fullReportContainer.style.display = 'block';

    document.getElementById('report-user-name').textContent = state.activePreset 
      ? CAREER_DATA.presets[state.activePreset].name 
      : "Self-Assessment Professional";
    document.getElementById('report-alignment-index').textContent = `${state.alignmentIndex}/100`;

    renderTrackTabs();

    const dimGrid = document.getElementById('report-dimension-grid');
    if (dimGrid) {
      dimGrid.innerHTML = CAREER_DATA.dimensions.map(dim => {
        const score = state.scores[dim.id] || 75;
        return `
          <div class="dim-card">
            <div class="dim-card-header">
              <span class="dim-card-icon">${dim.icon}</span>
              <span class="dim-card-score">${score.toFixed(1)}</span>
            </div>
            <h4 class="dim-card-title">${dim.name}</h4>
            <p class="dim-card-desc">${dim.description}</p>
            <div class="dim-card-bar-track">
              <div class="dim-card-bar" style="width: ${score}%;"></div>
            </div>
          </div>
        `;
      }).join('');
    }

    renderTrackDetails(state.activeReportTrack);
  }

  function renderTrackTabs() {
    const tabsRow = document.getElementById('report-track-tabs-row');
    if (!tabsRow) return;

    const labels = ["Track A · Optimal Fit", "Track B · Strategic Pivot", "Track C · High-Upside Track"];

    tabsRow.innerHTML = state.availableTracks.map((trackId, idx) => {
      const path = CAREER_DATA.paths[trackId] || CAREER_DATA.paths.data_analyst;
      const isActive = trackId === state.activeReportTrack ? 'active' : '';
      return `
        <button class="track-tab-btn ${isActive}" data-track="${trackId}">
          <span class="track-badge">${labels[idx]}</span>
          <span class="track-name">${path.title}</span>
        </button>
      `;
    }).join('');

    tabsRow.querySelectorAll('.track-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tabsRow.querySelectorAll('.track-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeReportTrack = btn.getAttribute('data-track');
        renderTrackDetails(state.activeReportTrack);
      });
    });
  }

  function renderTrackDetails(trackId) {
    const path = CAREER_DATA.paths[trackId] || CAREER_DATA.paths.data_analyst;

    document.getElementById('track-title').textContent = path.title;
    document.getElementById('track-subtitle').textContent = path.subtitle;
    document.getElementById('track-salary-entry').textContent = path.salaryRange.entry;
    document.getElementById('track-salary-india').textContent = path.salaryRange.india;

    renderSubTabContent(state.activeReportTab);
  }

  function renderSubTabContent(tabKey) {
    const path = CAREER_DATA.paths[state.activeReportTrack] || CAREER_DATA.paths.data_analyst;
    const contentContainer = document.getElementById('report-tab-dynamic-content');
    if (!contentContainer) return;

    if (tabKey === 'overview') {
      contentContainer.innerHTML = `
        <div class="tab-pane-card">
          <div class="banner-box">
            <div class="banner-badge">Why Your Background Transfers Directly</div>
            <p class="banner-body">${path.whyYouFit}</p>
          </div>
          
          <div class="grid-2-col mt-4">
            <div class="info-card">
              <h4>🎯 Why Hiring Managers Value Your Past Experience</h4>
              <p>You do not have to start from scratch. Companies prefer career pivoters who know how real business operates over fresh college graduates.</p>
              <ul class="styled-list">
                <li>Immediate comprehension of business operations, customer pain points, and organizational friction</li>
                <li>Proven execution reliability under quarterly deadlines and commercial targets</li>
                <li>Direct cross-functional empathy with stakeholders who hate confusing technical jargon</li>
              </ul>
            </div>

            <div class="info-card">
              <h4>📈 Market Demand & Sector Velocity</h4>
              <p>${path.demandOutlook}</p>
              <div class="tag-cloud mt-4">
                <span class="tag">B2B SaaS & Tech</span>
                <span class="tag">Enterprise Supply Chain & Logistics</span>
                <span class="tag">BFSI & Fintech</span>
                <span class="tag">Global D2C & Retail</span>
              </div>
            </div>
          </div>

          <!-- Tier 3 Consultant CTA Banner -->
          <div class="consultant-banner-card mt-6" style="background: var(--amber-tint); border: 1.5px solid var(--amber-border); border-left: 4px solid var(--amber); border-radius: var(--radius-md); padding: 22px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="badge badge-amber" style="margin-bottom: 6px;">Tier 3 · 1:1 Expert Guidance</span>
              <h4 style="color: var(--text-primary); font-size: 1.15rem;">Want a Senior Director to Personally Review Your Transition?</h4>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">Book a 60-minute 1-on-1 strategy call with an ex-FAANG / Consulting career mentor to tailor your resume and pressure-test your plan.</p>
            </div>
            <button class="btn btn-amber btn-sm" onclick="openConsultantModal()">Book 1:1 Call (₹5,999) →</button>
          </div>
        </div>
      `;
    } else if (tabKey === 'skill_bridge') {
      const existingRows = path.skillBridge.existing.map(s => `
        <div class="bridge-row existing">
          <div class="bridge-skill">
            <span class="bridge-check">✓</span>
            <strong>${s.skill}</strong>
          </div>
          <div class="bridge-transferability">
            <span class="badge badge-emerald">${s.transferability} Transferable</span>
          </div>
          <div class="bridge-note">${s.note}</div>
        </div>
      `).join('');

      const gapRows = path.skillBridge.toAcquire.map(s => `
        <div class="bridge-row gap">
          <div class="bridge-skill">
            <span class="bridge-cross">+</span>
            <strong>${s.skill}</strong>
          </div>
          <div class="bridge-transferability">
            <span class="badge badge-amber">${s.priority}</span>
          </div>
          <div class="bridge-note">Est. Time: <em>${s.estHours}</em> · Difficulty: <strong>${s.difficulty}</strong></div>
        </div>
      `).join('');

      contentContainer.innerHTML = `
        <div class="tab-pane-card">
          <div class="bridge-header">
            <h3>The Skill Bridge: What You Already Own vs. What You Close</h3>
            <p>You never start from square one. 65% of your existing operational intuition translates directly into this target role.</p>
          </div>

          <div class="bridge-section mt-4">
            <h4 class="text-emerald">✨ Your Transferable Superpowers (What You Bring to the Table)</h4>
            <div class="bridge-table">${existingRows}</div>
          </div>

          <div class="bridge-section mt-6">
            <h4 class="text-amber">⚡ The Target Skill Delta (What You Learn in 90 Days)</h4>
            <div class="bridge-table">${gapRows}</div>
          </div>
        </div>
      `;
    } else if (tabKey === 'blueprint') {
      const phasesHtml = path.blueprint.map((p, idx) => `
        <div class="blueprint-phase-card">
          <div class="phase-timeline-marker">Phase ${idx + 1}</div>
          <div class="phase-body">
            <div class="phase-header">
              <span class="phase-tag">${p.phase}</span>
              <h3 class="phase-title">${p.title}</h3>
              <p class="phase-focus"><strong>Strategic Focus:</strong> ${p.focus}</p>
            </div>
            <ul class="phase-steps">
              ${p.weeklySteps.map(step => `<li>${step}</li>`).join('')}
            </ul>
            <div class="phase-deliverable">
              <span class="deliverable-icon">🏆</span>
              <div>
                <strong>Milestone Proof:</strong> ${p.deliverable}
              </div>
            </div>
          </div>
        </div>
      `).join('');

      contentContainer.innerHTML = `
        <div class="tab-pane-card">
          <div class="blueprint-intro">
            <h3>90-Day Transition Blueprint (Designed for Full-Time Working Professionals)</h3>
            <p>8–12 hours per week. Zero quitting your job or taking predatory loans for bootcamps.</p>
          </div>
          <div class="blueprint-stack mt-4">
            ${phasesHtml}
          </div>
        </div>
      `;
    } else if (tabKey === 'mentor_questions') {
      const qHtml = path.mentorQuestions.map((mq, idx) => `
        <div class="mentor-q-card">
          <div class="mentor-q-num">0${idx + 1}</div>
          <div class="mentor-q-body">
            <p class="mentor-q-text">"${mq.q}"</p>
            <div class="mentor-q-rationale">
              <span class="why-tag">Why ask this:</span> ${mq.whyAsk}
            </div>
          </div>
        </div>
      `).join('');

      contentContainer.innerHTML = `
        <div class="tab-pane-card">
          <div class="mentor-intro">
            <h3>Calibrated Networking & Coffee-Chat Questions</h3>
            <p>Use these exact conversation starters on LinkedIn coffee chats. They immediately position you as a mature thinker rather than an insecure novice.</p>
          </div>
          <div class="mentor-q-stack mt-4">
            ${qHtml}
          </div>
        </div>
      `;
    } else if (tabKey === 'salary') {
      contentContainer.innerHTML = `
        <div class="tab-pane-card">
          <div class="salary-intro">
            <h3>Market Compensation & Growth Trajectory</h3>
            <p>Real-world compensation benchmarks for professionals pivoting into this path.</p>
          </div>

          <div class="salary-cards-grid mt-4">
            <div class="salary-metric-card">
              <span class="sal-tier">Initial Pivot Role (0-1 yr in role)</span>
              <h3 class="sal-figure">${path.salaryRange.india}</h3>
              <span class="sal-global">${path.salaryRange.entry} (Global / US Remote)</span>
              <p class="sal-desc">Achievable by packaging your past domain knowledge with the new technical skill bridge.</p>
            </div>

            <div class="salary-metric-card highlight">
              <span class="sal-tier">Senior / Lead Track (3+ yrs)</span>
              <h3 class="sal-figure">${path.salaryRange.senior}</h3>
              <span class="sal-global">$130,000 - $175,000 (Global / US Remote)</span>
              <p class="sal-desc">Unlocked when you bridge strategic execution, mentor juniors, and influence executive leadership.</p>
            </div>
          </div>
        </div>
      `;
    }
  }

  function renderPricingSection() {
    const grid = document.getElementById('pricing-tiers-grid');
    if (!grid) return;

    grid.innerHTML = CAREER_DATA.tiers.map(tier => {
      const isPop = tier.isPopular ? 'popular' : (tier.id === 'tier_consultant' ? 'executive' : '');
      const badgeCls = tier.id === 'tier_free' ? 'badge-free' : (tier.isPopular ? 'badge-popular' : 'badge-executive');

      const incList = tier.features.map(f => `<li class="included">${f}</li>`).join('');
      const notIncList = (tier.notIncluded || []).map(f => `<li class="not-included">${f}</li>`).join('');

      return `
        <div class="pricing-card ${isPop}">
          <span class="pricing-tier-badge ${badgeCls}">${tier.badge}</span>
          <div>
            <div class="pricing-header">
              <h3 class="pricing-title">${tier.name}</h3>
              <p class="pricing-desc">${tier.description}</p>
            </div>
            <div class="pricing-cost-row">
              <span class="price-main">${tier.price}</span>
              ${tier.discount ? `<span class="price-original">${tier.originalPrice}</span><span class="price-discount-tag">${tier.discount}</span>` : `<span class="price-period">${tier.originalPrice}</span>`}
            </div>
            <div class="price-period">${tier.period}</div>
          </div>

          <ul class="pricing-features-list">
            ${incList}
            ${notIncList}
          </ul>

          <div>
            <button class="btn ${tier.ctaClass} w-full py-4 text-base" style="width:100%;" onclick="handleTierSelect('${tier.id}')">
              ${tier.ctaText}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderConsultantsRoster() {
    const container = document.getElementById('consultants-cards-container');
    if (!container) return;

    container.innerHTML = CAREER_DATA.consultants.map(c => `
      <div class="consultant-card">
        <div class="consultant-header">
          <div class="consultant-avatar">${c.avatar}</div>
          <div>
            <h4 class="consultant-name">${c.name}</h4>
            <div class="consultant-role">${c.role}</div>
          </div>
        </div>
        <div class="consultant-spec">Specialization: ${c.specialization}</div>
        <p class="consultant-bio">${c.bio}</p>
        <div class="mt-4">
          <button class="btn btn-secondary btn-sm" onclick="openConsultantModal('${c.name}')">Book Strategy Call with ${c.name.split(' ')[0]} →</button>
        </div>
      </div>
    `).join('');
  }

  window.handleTierSelect = function(tierId) {
    if (tierId === 'tier_free') {
      window.scrollTo({ top: document.getElementById('diagnostic-section').offsetTop - 60, behavior: 'smooth' });
      showToast("Start with Question 1 and your resume below.", "info");
    } else if (tierId === 'tier_psychometric') {
      openPsychometricCheckoutModal();
    } else if (tierId === 'tier_consultant') {
      openConsultantModal();
    }
  };

  window.openPsychometricCheckoutModal = function() {
    let modal = document.getElementById('app-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'app-modal';
      document.body.appendChild(modal);
    }
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-window">
        <button class="modal-close" onclick="closeModal()">✕</button>
        <div class="badge badge-accent" style="margin-bottom:8px;">Tier 2 · ₹1,999 One-Time</div>
        <h3 style="font-size:1.6rem; color:var(--text-primary); margin-bottom:6px;">Psychometric &amp; Capability Audit</h3>
        <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:20px;">
          Unlock the clinical 40-question psychometric evaluation, 10-dimension behavioral scorecard, full 7–8 page personalized 90-day transition blueprint, and calibrated mentor networking scripts.
        </p>
        
        <div style="background:var(--emerald-tint); border:1px solid var(--emerald-border); border-radius:var(--radius-sm); padding:16px; margin-bottom:20px;">
          <h4 style="color:var(--emerald-dark); font-size:0.95rem; margin-bottom:8px;">🧠 What gets measured in the Psychometric Test:</h4>
          <ul style="font-size:0.85rem; color:var(--text-secondary); padding-left:18px;">
            <li>Ambiguity Tolerance &amp; Unstructured Problem Solving</li>
            <li>Decision Velocity under incomplete data</li>
            <li>Influence style when lacking hierarchical power</li>
            <li>Execution Endurance for 90-day transitions</li>
          </ul>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-subtle); padding-top:18px;">
          <div>
            <span style="font-size:0.8rem; color:var(--text-muted);">Total Investment</span>
            <div style="font-size:1.6rem; font-weight:800; color:var(--text-primary);">₹1,999 <span style="font-size:0.9rem; color:var(--emerald-dark);">(55% Off)</span></div>
          </div>
          <button class="btn btn-primary" onclick="simulateCheckout('Tier 2 Psychometric Audit')">Unlock Audit &amp; Start Test →</button>
        </div>
      </div>
    `;
  };

  window.openConsultantModal = function(preferredConsultant = null) {
    let modal = document.getElementById('app-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'app-modal';
      document.body.appendChild(modal);
    }
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-window">
        <button class="modal-close" onclick="closeModal()">✕</button>
        <div class="badge badge-amber" style="margin-bottom:8px;">Tier 3 · ₹5,999 Complete Package</div>
        <h3 style="font-size:1.6rem; color:var(--text-primary); margin-bottom:6px;">Book 1:1 Senior Career Consultant Call</h3>
        <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:18px;">
          60-minute confidential 1-on-1 video call with an industry director. Includes your full psychometric report, personalized resume teardown, 90-day plan pressure-test, and 30 days of direct WhatsApp access.
        </p>

        <div style="margin-bottom:16px;">
          <label style="display:block; font-size:0.85rem; font-weight:600; color:var(--text-primary); margin-bottom:6px;">Select Your Preferred Industry Consultant:</label>
          <select id="consultant-select" style="width:100%; padding:10px; background:#FFFFFF; border:1px solid var(--border-subtle); border-radius:var(--radius-sm); color:var(--text-primary); font-size:0.9rem;">
            ${CAREER_DATA.consultants.map(c => `
              <option value="${c.name}" ${preferredConsultant && preferredConsultant.includes(c.name.split(' ')[0]) ? 'selected' : ''}>
                ${c.name} — ${c.role}
              </option>
            `).join('')}
          </select>
        </div>

        <div style="margin-bottom:20px;">
          <label style="display:block; font-size:0.85rem; font-weight:600; color:var(--text-primary); margin-bottom:6px;">Preferred Call Timing:</label>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn btn-secondary btn-sm" style="flex:1;">Weekday Evening (7:30 PM IST)</button>
            <button class="btn btn-secondary btn-sm" style="flex:1;">Weekend Slot (Saturday 11 AM IST)</button>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-subtle); padding-top:18px;">
          <div>
            <span style="font-size:0.8rem; color:var(--text-muted);">Package Fee (Includes Report &amp; 30-Day Support)</span>
            <div style="font-size:1.6rem; font-weight:800; color:var(--amber);">₹5,999</div>
          </div>
          <button class="btn btn-amber" onclick="simulateCheckout('Tier 3 Consultant Call')">Confirm &amp; Schedule Call →</button>
        </div>
      </div>
    `;
  };

  window.closeModal = function() {
    const modal = document.getElementById('app-modal');
    if (modal) {
      modal.className = '';
      modal.innerHTML = '';
    }
  };

  window.simulateCheckout = function(tierName) {
    showToast(`Redirecting to secure payment for ${tierName}...`, "info");
    setTimeout(() => {
      closeModal();
      state.isPhase2Unlocked = true;
      renderFullReport();
      document.getElementById('full-report-anchor')?.scrollIntoView({ behavior: 'smooth' });
      showToast(`${tierName} unlocked! Welcome to your transition portal.`, "info");
    }, 900);
  };

  function showToast(msg, type = "info") {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      document.body.appendChild(toast);
    }
    toast.className = `toast ${type} show`;
    toast.textContent = msg;
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
});
