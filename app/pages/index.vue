<template>
  <div class="relative">

    <!-- ===== HERO ===== -->
    <section id="hero" class="max-w-[1200px] mx-auto px-6 pt-20 pb-28">
      <div class="max-w-[720px] mx-auto text-center">
        <div class="inline-flex items-center gap-2.5 bg-[#EBF0FF]/80 border border-[#2563EB]/10 rounded-full pl-[3px] pr-4 py-[3px] mb-8 backdrop-blur-sm">
          <span class="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#2563EB]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5"><path d="M20 6L9 17l-5-5" /></svg>
          </span>
          <span class="text-[12.5px] font-semibold text-[#2563EB] tracking-tight">Academic project management, built for fairness</span>
        </div>

        <h1 class="font-heading text-[44px] sm:text-[52px] lg:text-[60px] leading-[1.08] text-[#0F172A] mb-6 tracking-[-0.02em]">
          Track every contribution.<br />
          <span class="text-[#2563EB]">Keep your team accountable.</span>
        </h1>

        <p class="text-[#64748B] text-[18px] leading-[1.7] mb-10 max-w-[560px] mx-auto">
          TeamTrack is the project management platform built for academic teams. Plan tasks, log time, view contribution analytics, and let AI surface the insights that keep everyone aligned and accountable.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <NuxtLink to="/signup" class="inline-flex items-center bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[16px] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-[1px] active:translate-y-0">
            Get Started &mdash; Free for Teams
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </NuxtLink>
          <NuxtLink to="/login" class="inline-flex items-center text-[#475569] hover:text-[#0F172A] text-[15px] font-semibold px-6 py-4 rounded-full border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all duration-200">
            Log in
          </NuxtLink>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] text-[#64748B] font-medium">
          <span class="flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><path d="M20 6L9 17l-5-5" /></svg>
            University email signup
          </span>
          <span class="flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><path d="M20 6L9 17l-5-5" /></svg>
            4 user roles &amp; RBAC
          </span>
          <span class="flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><path d="M20 6L9 17l-5-5" /></svg>
            AI-powered insights
          </span>
        </div>
      </div>
    </section>

    <!-- ===== DASHBOARD PREVIEW ===== -->
    <section class="max-w-[1200px] mx-auto px-6 pb-24">
      <div class="relative">
        <div class="absolute -inset-10 rounded-[40px] opacity-50 blur-3xl pointer-events-none" style="background: radial-gradient(circle at 40% 50%, rgba(37,99,235,0.10), transparent 60%);" />

        <div class="relative bg-white rounded-[28px] border border-[#E2E8F0]/70 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.10)] overflow-hidden">
          <!-- Browser bar -->
          <div class="flex items-center gap-3 px-6 py-3.5 border-b border-[#F1F5F9] bg-[#FAFBFF]">
            <div class="flex gap-[6px]">
              <span class="w-[12px] h-[12px] rounded-full bg-[#FF5F57]" />
              <span class="w-[12px] h-[12px] rounded-full bg-[#FEBC2E]" />
              <span class="w-[12px] h-[12px] rounded-full bg-[#28C840]" />
            </div>
            <div class="flex-1 flex justify-center">
              <div class="flex items-center gap-2 bg-[#F1F5F9]/80 rounded-lg px-4 py-1.5 text-[12px] text-[#94A3B8] font-medium">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                teamtrack.io/dashboard
              </div>
            </div>
          </div>

          <!-- Dashboard mockup matching actual dashboard.vue -->
          <div class="flex min-h-[480px]">
            <!-- Sidebar -->
            <div class="w-[60px] bg-white border-r border-[#E2E8F0]/70 hidden sm:flex flex-col items-center py-4 gap-3">
              <div class="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white text-[11px] font-bold">T</div>
              <div class="w-8 h-8 rounded-lg bg-[#EBF0FF] flex items-center justify-center text-[12px]">
                <span>&#128202;</span>
              </div>
              <div class="w-8 h-8 rounded-lg hover:bg-[#F1F5F9] flex items-center justify-center text-[12px] transition">
                <span>&#128193;</span>
              </div>
              <div class="w-8 h-8 rounded-lg hover:bg-[#F1F5F9] flex items-center justify-center text-[12px] transition">
                <span>&#9989;</span>
              </div>
              <div class="w-8 h-8 rounded-lg hover:bg-[#F1F5F9] flex items-center justify-center text-[12px] transition">
                <span>&#128101;</span>
              </div>
              <div class="w-8 h-8 rounded-lg hover:bg-[#F1F5F9] flex items-center justify-center text-[12px] transition">
                <span>&#128172;</span>
              </div>
            </div>

            <!-- Main content -->
            <div class="flex-1 p-5 bg-[#F8FAFC] overflow-hidden">
              <!-- Topbar -->
              <div class="flex items-center justify-between mb-5">
                <div>
                  <div class="text-[14px] font-bold text-[#0F172A]">Welcome back &#128075;</div>
                  <div class="text-[11px] text-[#94A3B8]">Here's what's happening with your team today.</div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="relative w-7 h-7 rounded-lg bg-[#F8FAFC] flex items-center justify-center text-[12px]">
                    &#128276;
                    <span class="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  </div>
                  <div class="w-7 h-7 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-[10px] font-bold">S</div>
                </div>
              </div>

              <!-- Stats row -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                <div class="bg-white rounded-2xl p-3.5 border border-[#E2E8F0]/70 shadow-sm">
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-8 h-8 rounded-xl bg-[#EBF0FF] flex items-center justify-center text-[13px]">&#128193;</div>
                    <span class="text-[10px] font-semibold text-green-500">+12%</span>
                  </div>
                  <p class="text-[10px] text-[#94A3B8] mb-0.5">Projects</p>
                  <div class="text-[22px] font-bold text-[#0F172A]">4</div>
                </div>
                <div class="bg-white rounded-2xl p-3.5 border border-[#E2E8F0]/70 shadow-sm">
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-8 h-8 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[13px]">&#9989;</div>
                    <span class="text-[10px] font-semibold text-green-500">+8%</span>
                  </div>
                  <p class="text-[10px] text-[#94A3B8] mb-0.5">Tasks Done</p>
                  <div class="text-[22px] font-bold text-[#0F172A]">24</div>
                </div>
                <div class="bg-white rounded-2xl p-3.5 border border-[#E2E8F0]/70 shadow-sm">
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-8 h-8 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[13px]">&#9200;</div>
                    <span class="text-[10px] font-semibold text-[#F59E0B]">Today</span>
                  </div>
                  <p class="text-[10px] text-[#94A3B8] mb-0.5">Hours Logged</p>
                  <div class="text-[22px] font-bold text-[#0F172A]">18h</div>
                </div>
                <div class="bg-white rounded-2xl p-3.5 border border-[#E2E8F0]/70 shadow-sm">
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-8 h-8 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[13px]">&#128101;</div>
                    <span class="text-[10px] font-semibold text-purple-600">Team</span>
                  </div>
                  <p class="text-[10px] text-[#94A3B8] mb-0.5">Members</p>
                  <div class="text-[22px] font-bold text-[#0F172A]">8</div>
                </div>
              </div>

              <!-- Grid: left (timer + project) | right (AI + logs + chat) -->
              <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
                <!-- Left -->
                <div class="xl:col-span-2 space-y-4">
                  <!-- Time Tracker -->
                  <div class="bg-white rounded-2xl border border-[#E2E8F0]/70 p-4 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                      <div class="w-9 h-9 rounded-xl bg-[#EBF0FF] flex items-center justify-center text-[14px]">&#9201;&#65039;</div>
                      <div>
                        <div class="text-[13px] font-bold text-[#0F172A]">Time Tracker</div>
                        <div class="text-[10px] text-[#94A3B8]">Track work sessions for contribution visibility</div>
                      </div>
                    </div>
                    <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 mb-3">
                      <div class="text-[10px] text-[#94A3B8] mb-0.5">Current Task</div>
                      <div class="text-[12px] font-bold text-[#0F172A]">Dashboard UI in Progress</div>
                    </div>
                    <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-center">
                      <div class="text-[10px] text-[#94A3B8] mb-1">Current Session</div>
                      <div class="text-[28px] font-bold text-[#0F172A] tracking-tight mb-3">01:24:37</div>
                      <div class="flex items-center justify-center gap-2">
                        <span class="bg-[#2563EB] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg">Start</span>
                        <span class="bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold px-3 py-1.5 rounded-lg">Pause</span>
                        <span class="bg-red-50 text-red-500 text-[10px] font-bold px-3 py-1.5 rounded-lg">Stop</span>
                      </div>
                    </div>
                  </div>

                  <!-- Active Project -->
                  <div class="bg-white rounded-2xl border border-[#E2E8F0]/70 p-4 shadow-sm">
                    <div class="flex items-center justify-between mb-3">
                      <div>
                        <div class="text-[13px] font-bold text-[#0F172A]">Active Projects</div>
                        <div class="text-[10px] text-[#94A3B8]">Your current running projects</div>
                      </div>
                      <span class="bg-[#2563EB] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg">View</span>
                    </div>
                    <div class="border border-[#E2E8F0] rounded-xl p-3.5">
                      <div class="flex items-center justify-between mb-2">
                        <div>
                          <div class="text-[12px] font-bold text-[#0F172A]">TeamTrack Frontend</div>
                          <div class="text-[10px] text-[#94A3B8]">Dashboard redesign and responsive UI</div>
                        </div>
                        <span class="bg-green-100 text-green-600 text-[9px] font-bold px-2 py-0.5 rounded-full">Active</span>
                      </div>
                      <div class="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden mb-2">
                        <div class="bg-[#2563EB] h-1.5 rounded-full" style="width:72%;" />
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] text-[#64748B]">Progress: 72%</span>
                        <div class="flex -space-x-1.5">
                          <div class="w-5 h-5 rounded-full bg-blue-400 border-2 border-white text-[8px] text-white font-bold flex items-center justify-center">S</div>
                          <div class="w-5 h-5 rounded-full bg-green-400 border-2 border-white text-[8px] text-white font-bold flex items-center justify-center">Z</div>
                          <div class="w-5 h-5 rounded-full bg-yellow-400 border-2 border-white text-[8px] text-white font-bold flex items-center justify-center">M</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Right -->
                <div class="space-y-4">
                  <!-- AI -->
                  <div class="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-2xl p-4 text-white">
                    <div class="flex items-center gap-2.5 mb-3">
                      <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-[14px]">&#129302;</div>
                      <div>
                        <div class="text-[13px] font-bold">Team AI</div>
                        <div class="text-[10px] text-blue-200">System-generated suggestions</div>
                      </div>
                    </div>
                    <div class="bg-white/10 rounded-xl p-3 mb-2.5">
                      <p class="text-[11px] leading-[1.6] text-blue-100">
                        <span class="text-white font-semibold">Workload Alert:</span> Student A has logged 80% of total project time. Consider rebalancing tasks.
                      </p>
                    </div>
                    <div class="bg-white/10 rounded-xl p-3">
                      <p class="text-[11px] leading-[1.6] text-blue-100">
                        <span class="text-white font-semibold">Deadline Risk:</span> Analytics task is 78% likely to miss its due date.
                      </p>
                    </div>
                    <p class="text-[9px] text-blue-300 mt-2 italic">All AI suggestions require human approval.</p>
                  </div>

                  <!-- Time Logs -->
                  <div class="bg-white rounded-2xl border border-[#E2E8F0]/70 p-4 shadow-sm">
                    <div class="flex items-center justify-between mb-3">
                      <div>
                        <div class="text-[13px] font-bold text-[#0F172A]">Recent Time Logs</div>
                        <div class="text-[10px] text-[#94A3B8]">Latest tracked sessions</div>
                      </div>
                      <span class="text-[9px] bg-[#EFF6FF] text-[#2563EB] font-bold px-2 py-0.5 rounded-full">Today</span>
                    </div>
                    <div class="space-y-2">
                      <div class="bg-[#F8FAFC] rounded-xl p-2.5">
                        <div class="flex items-center justify-between mb-0.5">
                          <span class="text-[11px] font-bold text-[#0F172A]">Dashboard UI</span>
                          <span class="text-[11px] font-bold text-[#2563EB]">2h 10m</span>
                        </div>
                        <div class="text-[9px] text-[#94A3B8]">Logged by Siraj</div>
                      </div>
                      <div class="bg-[#F8FAFC] rounded-xl p-2.5">
                        <div class="flex items-center justify-between mb-0.5">
                          <span class="text-[11px] font-bold text-[#0F172A]">Login Page</span>
                          <span class="text-[11px] font-bold text-[#2563EB]">1h 35m</span>
                        </div>
                        <div class="text-[9px] text-[#94A3B8]">Logged by Alex</div>
                      </div>
                    </div>
                  </div>

                  <!-- Chat -->
                  <div class="bg-white rounded-2xl border border-[#E2E8F0]/70 p-4 shadow-sm">
                    <div class="flex items-center justify-between mb-3">
                      <div class="text-[13px] font-bold text-[#0F172A]">Team Chat</div>
                      <span class="text-[9px] bg-green-100 text-green-600 font-bold px-2 py-0.5 rounded-full">3 online</span>
                    </div>
                    <div class="flex gap-2 mb-3">
                      <div class="w-7 h-7 rounded-full bg-blue-400 shrink-0 flex items-center justify-center text-[9px] text-white font-bold">A</div>
                      <div class="bg-[#F8FAFC] rounded-xl p-2 flex-1">
                        <div class="flex items-center justify-between mb-0.5">
                          <span class="text-[10px] font-semibold text-[#0F172A]">Alex</span>
                          <span class="text-[8px] text-[#94A3B8]">10:24 AM</span>
                        </div>
                        <p class="text-[10px] text-[#475569] leading-[1.5]">API integration is done &#128640;</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2 text-[10px] text-[#94A3B8]">Send a message...</div>
                      <div class="bg-[#2563EB] text-white text-[10px] font-bold px-3 py-2 rounded-lg">Send</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TRUST STATS ===== -->
    <section class="border-y border-[#E2E8F0]/60 bg-white/50">
      <div class="max-w-[1200px] mx-auto px-6 py-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div class="font-heading text-[40px] text-[#0F172A] mb-1">4</div>
            <div class="text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest">User Roles</div>
            <div class="text-[12px] text-[#64748B] mt-1">Member, Leader, Instructor, Admin</div>
          </div>
          <div>
            <div class="font-heading text-[40px] text-[#0F172A] mb-1">8</div>
            <div class="text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest">Core Modules</div>
            <div class="text-[12px] text-[#64748B] mt-1">Auth, Workspaces, Tasks, Time, Chat, Analytics, AI, Alerts</div>
          </div>
          <div>
            <div class="font-heading text-[40px] text-[#0F172A] mb-1">&lt;2s</div>
            <div class="text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest">Max Response</div>
            <div class="text-[12px] text-[#64748B] mt-1">All page loads under 2 seconds</div>
          </div>
          <div>
            <div class="font-heading text-[40px] text-[#0F172A] mb-1">99%</div>
            <div class="text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest">Target Uptime</div>
            <div class="text-[12px] text-[#64748B] mt-1">Available 24/7 during semester</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== WHY TEAMTRACK ===== -->
    <section id="why" class="max-w-[1200px] mx-auto px-6 pt-28 pb-24">
      <div class="max-w-[640px] mx-auto text-center mb-16">
        <span class="inline-block text-[12.5px] font-semibold text-[#2563EB] tracking-tight uppercase mb-4">Why TeamTrack</span>
        <h2 class="font-heading text-[40px] lg:text-[48px] leading-[1.1] text-[#0F172A] mb-6 tracking-[-0.02em]">
          Built for the realities of <span class="text-[#2563EB]">academic teamwork</span>
        </h2>
        <p class="text-[#64748B] text-[17px] leading-[1.75]">
          Most project tools ignore the realities of student group work — free riders, invisible contributions, and workload imbalances. TeamTrack is designed to solve exactly those problems.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-300">
          <div class="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-[#EBF0FF]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          </div>
          <h3 class="text-[18px] font-bold text-[#0F172A] mb-3">Role-Based Access & Privacy</h3>
          <p class="text-[14.5px] text-[#64748B] leading-[1.7]">Four distinct roles — Team Member, Team Leader, Instructor (read-only), and Admin — each with scoped permissions. Instructors can view contribution analytics without editing project data.</p>
        </div>

        <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-300">
          <div class="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-[#D1FAE5]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 class="text-[18px] font-bold text-[#0F172A] mb-3">Fair Contribution Tracking</h3>
          <p class="text-[14.5px] text-[#64748B] leading-[1.7]">Start/stop timers, manual logs with mandatory descriptions, and immutable timesheets after 24 hours. Contribution analytics show exactly who did what — no disputes, no ambiguity.</p>
        </div>

        <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-300">
          <div class="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-[#FEF3C7]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 class="text-[18px] font-bold text-[#0F172A] mb-3">Transparent AI Assistance</h3>
          <p class="text-[14.5px] text-[#64748B] leading-[1.7]">AI detects workload imbalances and deadline risks, then surfaces labelled System-Generated Suggestions. Humans always approve before any action is taken — no hidden automation.</p>
        </div>
      </div>
    </section>

    <!-- ===== HOW IT WORKS ===== -->
    <section id="workflow" class="border-y border-[#E2E8F0]/60 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div class="max-w-[1200px] mx-auto px-6 py-24">
        <div class="max-w-[640px] mx-auto text-center mb-16">
          <span class="inline-block text-[12.5px] font-semibold text-[#2563EB] tracking-tight uppercase mb-4">How it works</span>
          <h2 class="font-heading text-[40px] lg:text-[48px] leading-[1.1] text-[#0F172A] mb-6 tracking-[-0.02em]">
            From signup to insights in <span class="text-[#2563EB]">5 steps</span>
          </h2>
          <p class="text-[#64748B] text-[17px] leading-[1.75]">
            Matching the actual TeamTrack system workflow, from registration to contribution analytics.
          </p>
        </div>

        <div class="grid md:grid-cols-5 gap-6">
          <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div class="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] mx-auto mb-4">1</div>
            <h4 class="text-[15px] font-bold text-[#0F172A] mb-2">Register &amp; Login</h4>
            <p class="text-[13px] text-[#64748B] leading-[1.6]">Sign up with your university email. Activate your account. Secure session with auto-timeout after 60 min idle.</p>
          </div>

          <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div class="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] mx-auto mb-4">2</div>
            <h4 class="text-[15px] font-bold text-[#0F172A] mb-2">Create or Join a Workspace</h4>
            <p class="text-[13px] text-[#64748B] leading-[1.6]">Leaders create projects with a unique join code. Members join and get assigned their role. Instructors get read-only access.</p>
          </div>

          <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div class="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] mx-auto mb-4">3</div>
            <h4 class="text-[15px] font-bold text-[#0F172A] mb-2">Plan &amp; Assign Tasks</h4>
            <p class="text-[13px] text-[#64748B] leading-[1.6]">Kanban or list view. Set priorities, deadlines, dependencies. Flag blocked tasks. Every change is logged in the Activity Log.</p>
          </div>

          <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div class="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] mx-auto mb-4">4</div>
            <h4 class="text-[15px] font-bold text-[#0F172A] mb-2">Log Time &amp; Collaborate</h4>
            <p class="text-[13px] text-[#64748B] leading-[1.6]">Start/stop timers on tasks or submit manual logs. Chat within the project. All time entries become immutable after 24 hours.</p>
          </div>

          <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div class="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] mx-auto mb-4">5</div>
            <h4 class="text-[15px] font-bold text-[#0F172A] mb-2">Review Analytics &amp; AI Insights</h4>
            <p class="text-[13px] text-[#64748B] leading-[1.6]">See contribution breakdowns, workload alerts, and deadline risks. AI flags issues before they become problems. All labelled and transparent.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CORE MODULES ===== -->
    <section id="modules" class="max-w-[1200px] mx-auto px-6 pt-28 pb-24">
      <div class="max-w-[640px] mx-auto text-center mb-16">
        <span class="inline-block text-[12.5px] font-semibold text-[#2563EB] tracking-tight uppercase mb-4">Core modules</span>
        <h2 class="font-heading text-[40px] lg:text-[48px] leading-[1.1] text-[#0F172A] mb-6 tracking-[-0.02em]">
          8 modules. <span class="text-[#2563EB]">One platform.</span>
        </h2>
        <p class="text-[#64748B] text-[17px] leading-[1.75]">
          Every feature your academic team needs, purpose-built for fair collaboration.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Module 1: Auth -->
        <div class="group bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-5">
            <div class="w-14 h-14 rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-[#0F172A] mb-2">Secure Authentication &amp; RBAC</h3>
              <p class="text-[14px] text-[#64748B] leading-[1.7]">University email registration with activation links. Password complexity enforcement. Role-Based Access Control with four roles — Member, Leader, Instructor (read-only), and Admin. Sessions auto-expire after 60 minutes of inactivity.</p>
            </div>
          </div>
        </div>

        <!-- Module 2: Projects -->
        <div class="group bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-5">
            <div class="w-14 h-14 rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-[#0F172A] mb-2">Project Workspaces</h3>
              <p class="text-[14px] text-[#64748B] leading-[1.7]">Create workspaces with unique join codes. Leaders manage members, assign roles, and edit project details. Instructors join with read-only access. Finished projects are archived with all data preserved for academic review.</p>
            </div>
          </div>
        </div>

        <!-- Module 3: Tasks -->
        <div class="group bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-5">
            <div class="w-14 h-14 rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-[#0F172A] mb-2">Kanban Task Boards</h3>
              <p class="text-[14px] text-[#64748B] leading-[1.7]">Tasks in Backlog, In Progress, Review, and Done columns. Set priority (Low/Medium/High), deadlines, and dependencies. Flag blocked tasks with reasons. Search tasks by keyword. Dashboard alerts for tasks due within 24 hours.</p>
            </div>
          </div>
        </div>

        <!-- Module 4: Time -->
        <div class="group bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-5">
            <div class="w-14 h-14 rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-[#0F172A] mb-2">Time Tracking &amp; Effort Logging</h3>
              <p class="text-[14px] text-[#64748B] leading-[1.7]">Start/stop timers on assigned tasks. Submit manual logs for offline work with required descriptions (min 10 characters). Personal and team timesheets. Logs become immutable after 24 hours to protect analytics integrity. Only one active timer at a time.</p>
            </div>
          </div>
        </div>

        <!-- Module 5: Chat -->
        <div class="group bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-5">
            <div class="w-14 h-14 rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-[#0F172A] mb-2">Team Chat &amp; Communication</h3>
              <p class="text-[14px] text-[#64748B] leading-[1.7]">Project-scoped messaging with persistent history. Messages show sender name and timestamp. Content is sanitised for security. Only project members can access the chat. Task-level comments provide context-specific discussion.</p>
            </div>
          </div>
        </div>

        <!-- Module 6: Analytics -->
        <div class="group bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-5">
            <div class="w-14 h-14 rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-[#0F172A] mb-2">Contribution Analytics Dashboard</h3>
              <p class="text-[14px] text-[#64748B] leading-[1.7]">Visual summaries of time spent, task completion, and activity per member. Comparative indicators show each person relative to the team average. Workload imbalance is highlighted automatically. Leaders and instructors can export reports.</p>
            </div>
          </div>
        </div>

        <!-- Module 7: AI -->
        <div class="group bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-5">
            <div class="w-14 h-14 rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-[#0F172A] mb-2">AI-Driven Project Assistant</h3>
              <p class="text-[14px] text-[#64748B] leading-[1.7]">Natural language queries about deadlines, progress, and activity. Workload Variance Score and Deadline Risk Probability calculated automatically. Smart task assignment suggestions. Inactivity alerts after 72 hours. All suggestions labelled as System-Generated and require human approval.</p>
            </div>
          </div>
        </div>

        <!-- Module 8: Notifications -->
        <div class="group bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-5">
            <div class="w-14 h-14 rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-[#0F172A] mb-2">Smart Notifications &amp; Reminders</h3>
              <p class="text-[14px] text-[#64748B] leading-[1.7]">Priority-based alerting with escalation for urgent deadline warnings. Actionable vs. passive notifications are separated. Low-priority updates are batched into weekly email digests. Deep linking takes you directly to the relevant task or chat. @mentions bypass Do Not Disturb.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== NFR / TRUST SECTION ===== -->
    <section id="trust" class="border-y border-[#E2E8F0]/60 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div class="max-w-[1200px] mx-auto px-6 py-24">
        <div class="max-w-[640px] mx-auto text-center mb-14">
          <span class="inline-block text-[12.5px] font-semibold text-[#2563EB] tracking-tight uppercase mb-4">Engineered for trust</span>
          <h2 class="font-heading text-[40px] lg:text-[48px] leading-[1.1] text-[#0F172A] mb-6 tracking-[-0.02em]">Security. Performance. Usability.</h2>
          <p class="text-[#64748B] text-[17px] leading-[1.75]">Non-functional requirements that make TeamTrack reliable, fast, and safe for academic use.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)]">
            <div class="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center bg-[#FEE2E2]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
            </div>
            <h3 class="text-[18px] font-bold text-[#0F172A] mb-3">Security</h3>
            <ul class="space-y-3 text-[14px] text-[#64748B] leading-[1.6]">
              <li class="flex items-start gap-2.5"><span class="text-[#10B981] text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Encrypted data in transit and at rest</li>
              <li class="flex items-start gap-2.5"><span class="text-[#10B981] text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Role-Based Access Control (4 roles)</li>
              <li class="flex items-start gap-2.5"><span class="text-[#10B981] text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Input sanitisation &amp; session timeouts</li>
              <li class="flex items-start gap-2.5"><span class="text-[#10B981] text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Immutable audit trail for all actions</li>
            </ul>
          </div>

          <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)]">
            <div class="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center bg-[#DBEAFE]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-7l1-8z" /></svg>
            </div>
            <h3 class="text-[18px] font-bold text-[#0F172A] mb-3">Performance</h3>
            <ul class="space-y-3 text-[14px] text-[#64748B] leading-[1.6]">
              <li class="flex items-start gap-2.5"><span class="text-[#10B981] text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Page loads under 2 seconds</li>
              <li class="flex items-start gap-2.5"><span class="text-[#10B981] text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> 30+ concurrent users supported</li>
              <li class="flex items-start gap-2.5"><span class="text-[#10B981] text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Chat messages delivered in 1&ndash;2 seconds</li>
              <li class="flex items-start gap-2.5"><span class="text-[#10B981] text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Analytics dashboard loads within 3 seconds</li>
            </ul>
          </div>

          <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)]">
            <div class="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center bg-[#D1FAE5]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M9 12l2 2 4-4" /></svg>
            </div>
            <h3 class="text-[18px] font-bold text-[#0F172A] mb-3">Usability</h3>
            <ul class="space-y-3 text-[14px] text-[#64748B] leading-[1.6]">
              <li class="flex items-start gap-2.5"><span class="text-[#10B981] text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Consistent design across all pages</li>
              <li class="flex items-start gap-2.5"><span class="text-[#10B981] text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Task creation in under 1 minute</li>
              <li class="flex items-start gap-2.5"><span class="text-[#10B981] text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Clear feedback for every user action</li>
              <li class="flex items-start gap-2.5"><span class="text-[#10B981] text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> WCAG basic accessibility compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ACTIVITY LOG / AUDIT TRAIL SECTION ===== -->
    <section class="max-w-[1200px] mx-auto px-6 pt-24 pb-16">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span class="inline-block text-[12.5px] font-semibold text-[#2563EB] tracking-tight uppercase mb-4">Full traceability</span>
          <h2 class="font-heading text-[36px] leading-[1.15] text-[#0F172A] mb-6 tracking-[-0.02em]">Every action.<br /><span class="text-[#2563EB]">Logged. Immutable. Auditable.</span></h2>
          <p class="text-[#64748B] text-[16px] leading-[1.75] mb-8">
            The Activity Log records every CRUD operation with Before/After states, actor identity, and timestamps. No one — not even Admins — can modify or delete audit entries. Instructors can export the complete trail as a timestamped PDF or CSV for grading.
          </p>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-[#D1FAE5] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <div>
                <p class="text-[14px] font-semibold text-[#0F172A]">Version control on text fields</p>
                <p class="text-[13px] text-[#64748B]">See older versions of task descriptions to retrieve overwritten information.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-[#D1FAE5] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <div>
                <p class="text-[14px] font-semibold text-[#0F172A]">Post-completion edit flagging</p>
                <p class="text-[13px] text-[#64748B]">Edits to tasks after completion are flagged — Team Leaders are warned of potential revision.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-[#D1FAE5] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <div>
                <p class="text-[14px] font-semibold text-[#0F172A]">Data retention for at least one academic year</p>
                <p class="text-[13px] text-[#64748B]">Activity logs are retained for the full academic cycle and available for grade audits.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Audit log visual mockup -->
        <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden">
          <div class="px-6 py-4 border-b border-[#F1F5F9] flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-[#EBF0FF] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="2" /></svg>
            </div>
            <span class="text-[14px] font-bold text-[#0F172A]">Activity Log &amp; Audit Trail</span>
          </div>
          <div class="p-5 space-y-3">
            <div class="flex items-start gap-3 py-3 border-b border-[#F1F5F9]">
              <div class="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-[10px] font-bold text-green-600 mt-0.5">+</div>
              <div>
                <p class="text-[13px] font-semibold text-[#0F172A]">Task created: "Design ER diagram"</p>
                <p class="text-[11px] text-[#94A3B8]">by Maria &middot; Mar 10, 2026 09:14 AM &middot; IP logged</p>
              </div>
            </div>
            <div class="flex items-start gap-3 py-3 border-b border-[#F1F5F9]">
              <div class="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-[10px] font-bold text-blue-600 mt-0.5">&#9998;</div>
              <div>
                <p class="text-[13px] font-semibold text-[#0F172A]">Status changed: In Progress &rarr; Review</p>
                <p class="text-[11px] text-[#94A3B8]">by Siraj &middot; Mar 11, 2026 02:30 PM &middot; Before/After recorded</p>
              </div>
            </div>
            <div class="flex items-start gap-3 py-3 border-b border-[#F1F5F9]">
              <div class="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-[10px] font-bold text-amber-600 mt-0.5">&#9888;</div>
              <div>
                <p class="text-[13px] font-semibold text-[#0F172A]">Post-completion edit flagged: task "Auth setup"</p>
                <p class="text-[11px] text-[#94A3B8]">by Omar &middot; Mar 12, 2026 11:58 AM &middot; Leader notified</p>
              </div>
            </div>
            <div class="flex items-start gap-3 py-3">
              <div class="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-[10px] font-bold text-purple-600 mt-0.5">&#8635;</div>
              <div>
                <p class="text-[13px] font-semibold text-[#0F172A]">Role changed: Member &rarr; Leader</p>
                <p class="text-[11px] text-[#94A3B8]">by Siraj &middot; Mar 8, 2026 04:10 PM &middot; Role-change logged</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FINAL CTA ===== -->
    <section class="max-w-[1200px] mx-auto px-6 pb-28">
      <div class="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-[28px] px-8 py-16 text-white text-center">
        <h2 class="font-heading text-[32px] lg:text-[42px] leading-[1.1] mb-4">Ready to make every contribution count?</h2>
        <p class="text-blue-100 text-[17px] leading-[1.7] mb-8 max-w-[540px] mx-auto">
          From task boards and time tracking to AI-powered insights and contribution analytics — TeamTrack keeps academic teams fair, transparent, and on schedule.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/signup" class="inline-flex items-center bg-white text-[#2563EB] text-[16px] font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0">
            Create Your Free Team
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </NuxtLink>
          <span class="text-blue-200 text-[13px]">4 roles &middot; 8 modules &middot; Fair by design.</span>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
</script>