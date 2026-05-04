<template>
  <div class="relative">

    <!-- ===== HOME / HERO ===== -->
    <section id="home" class="max-w-[1200px] mx-auto px-6 pt-14 pb-24">
      <div class="grid lg:grid-cols-[1fr_0.95fr] gap-16 items-center">
        <!-- Left: Text -->
        <div class="max-w-[540px]">
          <div class="inline-flex items-center gap-2.5 bg-[#EBF0FF]/80 border border-[#2563EB]/10 rounded-full pl-[3px] pr-4 py-[3px] mb-8 backdrop-blur-sm">
            <span class="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#2563EB]">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <span class="text-[12.5px] font-semibold text-[#2563EB] tracking-tight">Team project management, reimagined</span>
          </div>

          <h1 class="font-heading text-[48px] lg:text-[56px] leading-[1.08] text-[#0F172A] mb-6 tracking-[-0.02em]">
            Manage your team
            <span class="text-[#2563EB]">smarter.</span> <br />
            Track progress
            <span class="text-[#2563EB]">simpler.</span>
          </h1>

          <p class="text-[#64748B] text-[17px] leading-[1.7] mb-8 max-w-[460px]">
            TeamTrack is the free project management platform built for teams — especially university squads. Plan tasks, track who does what, and let AI surface the insights that keep everyone aligned.
          </p>

          <div class="flex flex-wrap items-center gap-5 mb-8">
            <NuxtLink to="/signup" class="inline-flex items-center bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-[1px] active:translate-y-0">
              Start Your Team — Its Free
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </NuxtLink>
            <span class="text-[13px] text-[#94A3B8] font-medium">100% free. No card required.</span>
          </div>

          <div class="flex items-center gap-4">
            <div class="flex -space-x-[5px]">
              <div v-for="c in ['#2563EB','#60A5FA','#34D399','#FBBF24','#F87171']" :key="c" class="w-[32px] h-[32px] rounded-full border-[2.5px] border-[#FAFBFF]" :style="{ backgroundColor: c }" />
            </div>
            <p class="text-[13px] text-[#64748B] font-medium">Trusted by <span class="text-[#0F172A] font-bold">5,000+ teams</span> worldwide</p>
          </div>
        </div>

        <!-- Right: Dashboard mockup -->
        <div class="relative">
          <div class="absolute -inset-10 rounded-[40px] opacity-60 blur-2xl pointer-events-none"
            style="background: radial-gradient(circle at 30% 50%, rgba(59,130,246,0.12), transparent 55%);"
          />
          <div class="relative bg-white rounded-[26px] border border-[#E2E8F0]/70 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.5)] overflow-hidden">
            <div class="flex items-center gap-3 px-5 py-3 border-b border-[#F1F5F9]">
              <div class="flex gap-[6px]">
                <span class="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
                <span class="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
                <span class="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
              </div>
              <div class="flex-1 flex justify-center">
                <div class="flex items-center gap-2 bg-[#F1F5F9]/70 rounded-lg px-3.5 py-1 text-[11px] text-[#94A3B8] font-medium">
                  <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  teamtrack.io
                </div>
              </div>
            </div>

            <div class="flex p-3.5 gap-3 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9]/50">
              <div class="w-[40px] bg-white rounded-xl p-1.5 flex flex-col items-center gap-2.5 shadow-sm hidden sm:flex">
                <span class="w-5 h-5 rounded-md bg-[#2563EB]" />
                <span v-for="i in 4" :key="i" class="w-5 h-5 rounded-md bg-[#E2E8F0] hover:bg-[#CBD5E1] transition-colors" />
              </div>

              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-2.5 px-0.5">
                  <span class="text-[11px] font-bold text-[#1E293B] tracking-tight">Team Board</span>
                  <div class="flex -space-x-[5px]">
                    <div v-for="c in ['#60A5FA','#34D399','#FBBF24','#F87171']" :key="c" class="w-[18px] h-[18px] rounded-full border-[2.5px] border-[#F8FAFC]" :style="{ backgroundColor: c }" />
                  </div>
                </div>
                <div class="flex gap-2.5">
                  <div class="flex-1 bg-white rounded-xl p-2.5 shadow-sm border border-[#F1F5F9]/80">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-[9px] font-extrabold text-[#64748B] uppercase tracking-[0.08em]">To Do</span>
                      <span class="text-[10px] font-bold text-[#64748B] bg-[#F1F5F9] rounded-full w-[20px] h-[20px] flex items-center justify-center">3</span>
                    </div>
                    <div class="space-y-2">
                      <div v-for="(task, idx) in ['Design system tokens','Profile API endpoints','Invite flow test']" :key="idx" class="bg-[#F8FAFC] rounded-lg p-2 border border-[#F1F5F9] hover:border-[#CBD5E1] transition-all duration-200 group cursor-default">
                        <div class="text-[10px] font-semibold text-[#1E293B] mb-1 leading-snug">{{ task }}</div>
                        <div class="flex items-center justify-between">
                          <span class="w-[14px] h-[14px] rounded-full" :style="{ backgroundColor: ['#60A5FA','#34D399','#FBBF24'][idx] }" />
                          <div class="flex items-center gap-[3px] text-[#94A3B8]">
                            <svg width="9" height="9" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="text-[8px] font-medium">{{ ['2h','4h','1d'][idx] }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex-1 bg-white rounded-xl p-2.5 shadow-sm border border-[#F1F5F9]/80 hidden sm:block">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-[9px] font-extrabold text-[#2563EB] uppercase tracking-[0.08em]">Doing</span>
                      <span class="text-[10px] font-bold text-[#2563EB] bg-[#EBF0FF] rounded-full w-[20px] h-[20px] flex items-center justify-center">1</span>
                    </div>
                    <div class="space-y-2">
                      <div class="bg-[#F8FAFC] rounded-lg p-2 border border-[#2563EB]/20">
                        <div class="text-[10px] font-semibold text-[#1E293B] mb-1.5 leading-snug">Analytics dashboard</div>
                        <div class="w-full bg-[#E2E8F0] rounded-full h-[3px] mb-1.5 overflow-hidden">
                          <div class="bg-[#2563EB] h-[3px] rounded-full" style="width: 65%;" />
                        </div>
                        <div class="flex items-center justify-between">
                          <span class="w-[14px] h-[14px] rounded-full bg-[#FBBF24]" />
                          <span class="text-[9px] font-medium text-[#94A3B8]">65%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex-1 bg-white rounded-xl p-2.5 shadow-sm border border-[#F1F5F9]/80 hidden md:block">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-[9px] font-extrabold text-[#10B981] uppercase tracking-[0.08em]">Done</span>
                      <span class="text-[10px] font-bold text-[#10B981] bg-[#D1FAE5] rounded-full w-[20px] h-[20px] flex items-center justify-center">5</span>
                    </div>
                    <div class="space-y-2">
                      <div v-for="task in ['Auth setup','Logo design','CI/CD pipeline']" :key="task" class="bg-[#F8FAFC] rounded-lg p-2 border border-[#F1F5F9] opacity-65">
                        <div class="flex items-center gap-1.5">
                          <svg width="9" height="9" fill="none" stroke="#10B981" stroke-width="2.5" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          <span class="text-[10px] font-semibold text-[#1E293B] line-through">{{ task }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="px-3.5 pb-3.5">
              <div class="flex items-center gap-3 bg-gradient-to-r from-[#EBF0FF] to-[#F0F4FF] rounded-xl px-4 py-2.5 border border-[#2563EB]/8">
                <div class="w-[22px] h-[22px] rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 9v3l2 2" />
                  </svg>
                </div>
                <div class="min-w-0">
                  <div class="text-[11px] font-bold text-[#2563EB] mb-[1px]">Team AI</div>
                  <div class="text-[10px] text-[#64748B] font-medium leading-snug">Your team is 2h ahead of schedule this week. Nice alignment!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== STATS STRIP ===== -->
    <section class="border-y border-[#E2E8F0]/60 bg-white/50">
      <div class="max-w-[1200px] mx-auto px-6 py-14">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div class="font-heading text-[36px] text-[#0F172A] mb-1">5K+</div>
            <div class="text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest">Active teams</div>
          </div>
          <div>
            <div class="font-heading text-[36px] text-[#0F172A] mb-1">120+</div>
            <div class="text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest">Universities</div>
          </div>
          <div>
            <div class="font-heading text-[36px] text-[#0F172A] mb-1">4.9</div>
            <div class="text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest">Team rating</div>
          </div>
          <div>
            <div class="font-heading text-[36px] text-[#0F172A] mb-1">2M+</div>
            <div class="text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest">Tasks tracked</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ABOUT ===== -->
    <section id="about" class="max-w-[1200px] mx-auto px-6 pt-24 pb-24">
      <div class="max-w-[640px] mx-auto text-center mb-16">
        <div class="inline-flex items-center gap-2.5 bg-[#EBF0FF]/80 border border-[#2563EB]/10 rounded-full pl-[3px] pr-4 py-[3px] mb-8">
          <span class="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#2563EB]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
          <span class="text-[12.5px] font-semibold text-[#2563EB] tracking-tight">Built for teams, by students</span>
        </div>
        <h2 class="font-heading text-[40px] lg:text-[48px] leading-[1.1] text-[#0F172A] mb-6 tracking-[-0.02em]">
          Why teams choose <span class="text-[#2563EB]">TeamTrack</span>
        </h2>
        <p class="text-[#64748B] text-[17px] leading-[1.75]">
          Most team tools are built for companies with 200 engineers. We built TeamTrack for <strong class="text-[#0F172A]">your team</strong> — the 4-person project squad, the 12-student research group, the startup co-founders juggling everything.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-24">
        <div class="bg-white rounded-[20px] border border-[#E2E8F0]/60 p-7 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-300">
          <div class="w-10 h-10 rounded-xl mb-5 flex items-center justify-center bg-[#EBF0FF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB]">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 class="text-[16px] font-bold text-[#0F172A] mb-2">Complete transparency</h3>
          <p class="text-[14px] text-[#64748B] leading-[1.7]">Every teammate sees who is working on what. No more mystery about who contributed to a project. Fair credit, always.</p>
        </div>

        <div class="bg-white rounded-[20px] border border-[#E2E8F0]/60 p-7 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-300">
          <div class="w-10 h-10 rounded-xl mb-5 flex items-center justify-center bg-[#D1FAE5]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#10B981]">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-[16px] font-bold text-[#0F172A] mb-2">Real accountability</h3>
          <p class="text-[14px] text-[#64748B] leading-[1.7]">Time tracking, contribution analytics, and clear task ownership means everyone knows exactly where they stand.</p>
        </div>

        <div class="bg-white rounded-[20px] border border-[#E2E8F0]/60 p-7 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-300">
          <div class="w-10 h-10 rounded-xl mb-5 flex items-center justify-center bg-[#FEF3C7]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#F59E0B]">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-[16px] font-bold text-[#0F172A] mb-2">AI-powered insights</h3>
          <p class="text-[14px] text-[#64748B] leading-[1.7]">Your team gets smart alerts about blockers, workload imbalances, and deadlines — so nothing slips through the cracks.</p>
        </div>
      </div>

      <!-- How it works -->
      <div class="relative">
        <div class="max-w-[640px] mx-auto text-center mb-14">
          <h2 class="font-heading text-[32px] text-[#0F172A] mb-4 tracking-tight">How it works for your team</h2>
          <p class="text-[#64748B] text-[16px] leading-[1.7]">Three simple steps from zero to a fully organized team.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-10 relative">
          <!-- Connecting line on desktop -->
          <div class="hidden md:block absolute top-12 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-[#E2E8F0] via-[#2563EB] to-[#E2E8F0]" />

          <div class="relative">
            <div class="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] mx-auto mb-5 relative z-10">1</div>
            <h4 class="text-[16px] font-bold text-[#0F172A] mb-2 text-center">Create your team space</h4>
            <p class="text-[14px] text-[#64748B] leading-[1.7] text-center">Sign up in 30 seconds. Invite your teammates with a link. No card, no waiting.</p>
          </div>
          <div class="relative">
            <div class="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] mx-auto mb-5 relative z-10">2</div>
            <h4 class="text-[16px] font-bold text-[#0F172A] mb-2 text-center">Set up your first project</h4>
            <p class="text-[14px] text-[#64748B] leading-[1.7] text-center">Add tasks, assign owners, and track time. Your board becomes your teams single source of truth.</p>
          </div>
          <div class="relative">
            <div class="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] mx-auto mb-5 relative z-10">3</div>
            <h4 class="text-[16px] font-bold text-[#0F172A] mb-2 text-center">Let AI keep you aligned</h4>
            <p class="text-[14px] text-[#64748B] leading-[1.7] text-center">Team AI watches progress, flags risks, and surfaces the insights your team needs to ship on time.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FEATURES ===== -->
    <section id="features" class="max-w-[1200px] mx-auto px-6 pt-8 pb-28">
      <div class="max-w-[640px] mx-auto text-center mb-14">
        <div class="inline-flex items-center gap-2.5 bg-[#EBF0FF]/80 border border-[#2563EB]/10 rounded-full pl-[3px] pr-4 py-[3px] mb-8">
          <span class="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#2563EB]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
          <span class="text-[12.5px] font-semibold text-[#2563EB] tracking-tight">Built for how teams actually work</span>
        </div>
        <h2 class="font-heading text-[40px] lg:text-[48px] leading-[1.1] text-[#0F172A] mb-6 tracking-[-0.02em]">
          Everything your <span class="text-[#2563EB]">team</span> needs
        </h2>
        <p class="text-[#64748B] text-[17px] leading-[1.75]">
          From task boards to AI insights — everything is included. And yes, its all free for your team.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1: Task Boards -->
        <div class="group bg-white rounded-[20px] border border-[#E2E8F0]/60 p-7 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="w-11 h-11 rounded-xl mb-5 flex items-center justify-center bg-[#EBF0FF] group-hover:bg-[#2563EB] transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
            </svg>
          </div>
          <h3 class="text-[16px] font-bold text-[#0F172A] mb-2">Team Task Boards</h3>
          <p class="text-[14px] text-[#64748B] leading-[1.7]">Kanban boards designed for team workflows. Drag, drop, assign — everyone sees exactly what is happening.</p>
        </div>

        <!-- Card 2: Time Tracking -->
        <div class="group bg-white rounded-[20px] border border-[#E2E8F0]/60 p-7 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="w-11 h-11 rounded-xl mb-5 flex items-center justify-center bg-[#EBF0FF] group-hover:bg-[#2563EB] transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h3 class="text-[16px] font-bold text-[#0F172A] mb-2">Team Time Tracking</h3>
          <p class="text-[14px] text-[#64748B] leading-[1.7]">Built-in timers and timesheets so your team records exactly where hours go — no guesswork, no arguments.</p>
        </div>

        <!-- Card 3: AI Insights -->
        <div class="group bg-white rounded-[20px] border border-[#E2E8F0]/60 p-7 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="w-11 h-11 rounded-xl mb-5 flex items-center justify-center bg-[#EBF0FF] group-hover:bg-[#2563EB] transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3 class="text-[16px] font-bold text-[#0F172A] mb-2">AI Team Insights</h3>
          <p class="text-[14px] text-[#64748B] leading-[1.7]">Smart suggestions on blockers, workload gaps, and who needs a hand — surfaced before your team even asks.</p>
        </div>

        <!-- Card 4: Team Chat -->
        <div class="group bg-white rounded-[20px] border border-[#E2E8F0]/60 p-7 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="w-11 h-11 rounded-xl mb-5 flex items-center justify-center bg-[#EBF0FF] group-hover:bg-[#2563EB] transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <h3 class="text-[16px] font-bold text-[#0F172A] mb-2">Team Chat</h3>
          <p class="text-[14px] text-[#64748B] leading-[1.7]">Contextual messaging tied to tasks and projects. Your team never has to hunt through ten threads for one decision.</p>
        </div>

        <!-- Card 5: Contribution Analytics -->
        <div class="group bg-white rounded-[20px] border border-[#E2E8F0]/60 p-7 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="w-11 h-11 rounded-xl mb-5 flex items-center justify-center bg-[#EBF0FF] group-hover:bg-[#2563EB] transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>
          <h3 class="text-[16px] font-bold text-[#0F172A] mb-2">Team Analytics</h3>
          <p class="text-[14px] text-[#64748B] leading-[1.7]">Fair, transparent dashboards showing who contributed what. Perfect for academic accountability and team fairness.</p>
        </div>

        <!-- Card 6: Smart Notifications -->
        <div class="group bg-white rounded-[20px] border border-[#E2E8F0]/60 p-7 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="w-11 h-11 rounded-xl mb-5 flex items-center justify-center bg-[#EBF0FF] group-hover:bg-[#2563EB] transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#2563EB] group-hover:text-white transition-colors duration-300">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </div>
          <h3 class="text-[16px] font-bold text-[#0F172A] mb-2">Smart Team Alerts</h3>
          <p class="text-[14px] text-[#64748B] leading-[1.7]">Stay in the loop without drowning in noise. Customize what matters to your team, silence the rest.</p>
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIAL / QUOTE ===== -->
    <section class="max-w-[1200px] mx-auto px-6 pb-10">
      <div class="max-w-[720px] mx-auto text-center">
        <div class="mb-8">
          <div class="flex justify-center mb-5">
            <div class="flex -space-x-[6px]">
              <div v-for="c in ['#2563EB','#60A5FA','#34D399','#FBBF24']" :key="c" class="w-[40px] h-[40px] rounded-full border-[3px] border-[#FAFBFF]" :style="{ backgroundColor: c }" />
            </div>
          </div>
          <blockquote class="font-heading text-[24px] lg:text-[30px] leading-[1.3] text-[#0F172A] mb-5 tracking-tight">
            TeamTrack turned our group project from chaos into an actual workflow. We hit every deadline.
          </blockquote>
          <p class="text-[14px] text-[#64748B] font-medium"><span class="text-[#0F172A] font-bold">Sarah M.</span>, Team Lead at UCL Engineering</p>
        </div>
      </div>
    </section>

    <!-- ===== FINAL CTA ===== -->
    <section class="max-w-[1200px] mx-auto px-6 pb-28">
      <div class="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-[28px] px-8 py-16 text-white text-center">
        <h2 class="font-heading text-[32px] lg:text-[42px] leading-[1.1] mb-4">Ready to run your team better?</h2>
        <p class="text-blue-100 text-[17px] leading-[1.7] mb-8 max-w-[540px] mx-auto">Join thousands of teams already shipping faster, staying aligned, and keeping everyone accountable — all for free.</p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/signup" class="inline-flex items-center bg-white text-[#2563EB] text-[16px] font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0">
            Create Your Free Team
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </NuxtLink>
          <span class="text-blue-200 text-[13px]">100% free for teams.</span>
        </div>
      </div>
    </section>
  </div>
</template>
