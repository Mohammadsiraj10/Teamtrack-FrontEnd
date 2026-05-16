<template>
  <div class="relative">

    <!-- ===== HERO ===== -->
    <section id="hero" class="max-w-[1200px] mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-28">
      <div class="max-w-[720px] mx-auto text-center">
        <div class="inline-flex items-center gap-2 bg-[#EBF0FF]/80 border border-[#2563EB]/10 rounded-full pl-[3px] pr-3 sm:pr-4 py-[3px] mb-6 sm:mb-8 backdrop-blur-sm">
          <span class="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#2563EB]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5"><path d="M20 6L9 17l-5-5" /></svg>
          </span>
          <span class="text-[10px] sm:text-[12.5px] font-semibold text-[#2563EB] tracking-tight">Academic project management, built for fairness</span>
        </div>

        <h1 class="font-heading text-[28px] sm:text-[36px] lg:text-[52px] xl:text-[60px] leading-[1.08] text-[#0F172A] mb-4 sm:mb-6 tracking-[-0.02em]">
          Track every contribution.<br />
          <span class="text-[#2563EB]">Keep your team accountable.</span>
        </h1>

        <p class="text-[#64748B] text-[15px] sm:text-[18px] leading-[1.7] mb-8 sm:mb-10 max-w-[560px] mx-auto">
          TeamTrack is the project management platform built for academic teams. Plan tasks, log time, view contribution analytics, and let AI surface the insights that keep everyone aligned and accountable.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <NuxtLink to="/signup" class="inline-flex items-center bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[13px] sm:text-[16px] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-[1px] active:translate-y-0">
            Get Started &mdash; Free for Teams
            <svg class="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </NuxtLink>
          <NuxtLink to="/login" class="inline-flex items-center text-[#475569] hover:text-[#0F172A] text-[13px] sm:text-[15px] font-semibold px-5 sm:px-6 py-3 sm:py-4 rounded-full border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all duration-200">
            Log in
          </NuxtLink>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[12px] sm:text-[13.5px] text-[#64748B] font-medium">
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
    <section class="max-w-[1200px] mx-auto px-4 sm:px-6 pb-12 sm:pb-24">
      <div class="text-center mb-4 sm:mb-8">
        <span class="inline-block text-[11px] sm:text-[12.5px] font-semibold text-[#2563EB] tracking-tight uppercase mb-2 sm:mb-3">Preview</span>
        <h2 class="font-heading text-[24px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-[#0F172A] tracking-[-0.02em]">See what your team will look like</h2>
        <p class="text-[#64748B] text-[13px] sm:text-[16px] leading-[1.7] mt-2 sm:mt-3 max-w-[520px] mx-auto">Explore each tab to preview the Dashboard, Projects, Tasks, Team, and Chat pages before signing up.</p>
      </div>
      <div class="relative">
        <div class="absolute -inset-5 sm:-inset-10 rounded-[20px] sm:rounded-[40px] opacity-50 blur-3xl pointer-events-none" style="background: radial-gradient(circle at 40% 50%, rgba(37,99,235,0.10), transparent 60%);" />

        <div class="relative bg-white rounded-[16px] sm:rounded-[28px] border border-[#E2E8F0]/70 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.10)] overflow-hidden">
          <!-- Browser bar -->
          <div class="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 border-b border-[#F1F5F9] bg-[#FAFBFF]">
            <div class="flex gap-[5px] sm:gap-[6px]">
              <span class="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full bg-[#FF5F57]" />
              <span class="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full bg-[#FEBC2E]" />
              <span class="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full bg-[#28C840]" />
            </div>
            <div class="flex-1 flex justify-center">
              <div class="flex items-center gap-1.5 sm:gap-2 bg-[#F1F5F9]/80 rounded-lg px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[12px] text-[#94A3B8] font-medium">
                <svg width="10" height="10" class="sm:w-[12px] sm:h-[12px]" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                teamtrack.io/dashboard
              </div>
            </div>
          </div>

          <!-- Interactive Dashboard Preview -->
          <div class="flex flex-col md:flex-row min-h-[340px] sm:min-h-[480px] md:min-h-[560px]">
            <!-- Sidebar (desktop only) -->
            <div class="w-full md:w-[200px] bg-white/95 backdrop-blur-xl border-b md:border-b-0 md:border-r border-[#E2E8F0]/70 hidden md:flex flex-col shrink-0">
              <div class="px-4 py-4 border-b border-[#F1F5F9]">
                <div class="flex items-center gap-2.5">
                  <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1E40AF] flex items-center justify-center text-white font-bold text-[14px] shadow-sm shadow-blue-500/20">T</div>
                  <div>
                    <div class="font-bold text-[15px] text-[#0F172A] tracking-tight">TeamTrack</div>
                    <div class="text-[10px] text-[#94A3B8]">AI Team Workspace</div>
                  </div>
                </div>
              </div>

              <nav class="flex-1 px-3 py-4 space-y-1.5 pointer-events-auto">
                <button
                  v-for="tab in previewTabs"
                  :key="tab.id"
                  @click="activePreviewTab = tab.id"
                  class="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[12px] font-semibold transition-all duration-200"
                  :class="activePreviewTab === tab.id
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                    : 'text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]'"
                >
                  <span class="w-5 h-5 flex items-center justify-center" v-html="tab.icon"></span>
                  {{ tab.name }}
                </button>
              </nav>

              <div class="px-3 pb-3">
                <div class="rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#EEF2FF] border border-[#DBEAFE] p-3">
                  <div class="flex items-center justify-between mb-3">
                    <div class="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                    </div>
                    <span class="text-[9px] font-bold text-[#2563EB] bg-white px-2 py-0.5 rounded-full">LIVE</span>
                  </div>
                  <div class="text-[11px] font-bold text-[#0F172A] mb-1.5">Sprint Progress</div>
                  <div class="w-full bg-white rounded-full h-1.5 overflow-hidden mb-1.5">
                    <div class="h-1.5 bg-[#2563EB] rounded-full transition-all duration-1000" style="width:72%"></div>
                  </div>
                  <div class="text-[10px] text-[#64748B]">72% this week</div>
                </div>
              </div>

              <div class="px-3 pb-3 border-t border-[#F1F5F9] pt-3">
                <div class="flex items-center gap-2.5">
                  <div class="relative">
                    <div class="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-bold text-[12px]">?</div>
                    <span class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <div class="font-bold text-[12px] text-[#0F172A]">Your Name</div>
                    <div class="text-[10px] text-[#94A3B8]">Your Role</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main content area -->
            <div class="flex-1 bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#EEF2FF] overflow-hidden flex flex-col">
              <!-- Mobile-style top header -->
              <div class="md:hidden bg-white border-b border-[#E2E8F0] px-4 py-3 flex items-center justify-between">
                <div>
                  <div class="text-[16px] font-black text-[#0F172A]">{{ activePreviewTab === 'dashboard' ? 'Dashboard' : activePreviewTab === 'projects' ? 'Projects' : activePreviewTab === 'tasks' ? 'Tasks' : activePreviewTab === 'team' ? 'Team' : 'Chat' }}</div>
                  <div class="text-[11px] text-[#94A3B8]">Welcome back, Your Name</div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="relative w-8 h-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
                    <span class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-[7px] text-white font-bold flex items-center justify-center">3</span>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold text-[12px]">?</div>
                </div>
              </div>

              <!-- Desktop topbar -->
              <div class="hidden md:block bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] px-5 py-3 flex items-center justify-between">
                <div>
                  <div class="flex items-center gap-2 mb-0.5">
                    <div class="text-[16px] font-black text-[#0F172A] tracking-tight">{{ activePreviewTab === 'dashboard' ? 'Dashboard' : activePreviewTab === 'projects' ? 'Projects' : activePreviewTab === 'tasks' ? 'Tasks' : activePreviewTab === 'team' ? 'Team' : 'Team Chat' }}</div>
                    <span v-if="activePreviewTab === 'dashboard'" class="bg-[#ECFDF5] text-[#059669] border border-[#BBF7D0] text-[9px] font-bold px-2 py-0.5 rounded-full">Active Sprint</span>
                  </div>
                  <div class="text-[11px] text-[#94A3B8]">Here is your team performance overview.</div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="relative w-8 h-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center hover:bg-[#EFF6FF] transition cursor-pointer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
                    <span class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white text-[7px] text-white font-bold flex items-center justify-center">3</span>
                  </div>
                  <div class="w-8 h-8 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] font-bold text-[11px]">?</div>
                </div>
              </div>

              <!-- Tab content (scrollable on mobile) -->
              <div class="flex-1 p-2 sm:p-4 overflow-y-auto max-h-[60vh] md:max-h-none select-none pointer-events-none">

              <!-- ====== MOBILE CONTENT (md:hidden) ====== -->
              <div class="md:hidden space-y-3">
                <!-- Dashboard mobile -->
                <div v-if="activePreviewTab === 'dashboard'">
                  <div class="grid grid-cols-2 gap-2.5">
                    <div v-for="stat in previewStats" :key="stat.label" class="bg-white rounded-2xl p-3 border border-[#E2E8F0]">
                      <div class="flex items-center justify-between mb-1.5">
                        <div :class="stat.bg" class="w-8 h-8 rounded-lg flex items-center justify-center"><span v-html="stat.icon"></span></div>
                        <span :class="stat.badgeClass" class="text-[8px] font-bold px-1.5 py-0.5 rounded-full">{{ stat.badge }}</span>
                      </div>
                      <p class="text-[9px] text-[#64748B] font-semibold">{{ stat.label }}</p>
                      <div class="text-[18px] font-black text-[#0F172A]">{{ stat.value }}</div>
                    </div>
                  </div>
                  <div class="mt-3 bg-white rounded-2xl border border-[#E2E8F0] p-3">
                    <div class="text-[13px] font-bold text-[#0F172A] mb-2">Time Tracker</div>
                    <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2 mb-2">
                      <div class="text-[9px] text-[#94A3B8]">Current Task</div>
                      <div class="text-[12px] font-bold text-[#0F172A]">Dashboard UI in Progress</div>
                    </div>
                    <div class="text-center bg-[#0F172A] rounded-xl p-3">
                      <div class="text-[8px] text-[#94A3B8] font-bold mb-0.5">Current Session</div>
                      <div class="text-[22px] font-black text-white">01:24:07</div>
                    </div>
                  </div>
                  <div class="mt-3 bg-white rounded-2xl border border-[#E2E8F0] p-3">
                    <div class="text-[13px] font-bold text-[#0F172A] mb-2">AI Insights</div>
                    <div class="bg-[#EFF6FF] rounded-xl p-2.5">
                      <div class="text-[9px] font-bold text-[#2563EB] mb-1">PRODUCTIVITY</div>
                      <div class="text-[11px] text-[#334155]">Your team is 18% more productive this week.</div>
                    </div>
                  </div>
                  <div class="mt-3 bg-white rounded-2xl border border-[#E2E8F0] p-3">
                    <div class="flex items-center justify-between mb-2">
                      <div class="text-[13px] font-bold text-[#0F172A]">Recent Time Logs</div>
                      <span class="text-[8px] bg-[#EFF6FF] text-[#2563EB] font-bold px-2 py-0.5 rounded-full">Today</span>
                    </div>
                    <div class="space-y-2">
                      <div class="bg-[#F8FAFC] rounded-xl p-2 flex items-center justify-between">
                        <div><div class="text-[11px] font-bold text-[#0F172A]">Dashboard UI</div><div class="text-[9px] text-[#94A3B8]">2h 10m ago</div></div>
                        <span class="text-[11px] font-bold text-[#2563EB]">2h 10m</span>
                      </div>
                      <div class="bg-[#F8FAFC] rounded-xl p-2 flex items-center justify-between">
                        <div><div class="text-[11px] font-bold text-[#0F172A]">Login Page</div><div class="text-[9px] text-[#94A3B8]">Earlier today</div></div>
                        <span class="text-[11px] font-bold text-[#2563EB]">1h 35m</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Projects mobile -->
                <div v-if="activePreviewTab === 'projects'">
                  <div class="grid grid-cols-2 gap-2.5">
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]">
                      <div class="w-8 h-8 rounded-lg bg-[#EBF0FF] flex items-center justify-center mb-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg></div>
                      <p class="text-[9px] text-[#64748B]">Total Projects</p>
                      <div class="text-[18px] font-black text-[#0F172A]">4</div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]">
                      <div class="w-8 h-8 rounded-lg bg-[#DCFCE7] flex items-center justify-center mb-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg></div>
                      <p class="text-[9px] text-[#64748B]">Completed</p>
                      <div class="text-[18px] font-black text-[#0F172A]">22</div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]">
                      <div class="w-8 h-8 rounded-lg bg-[#FEF3C7] flex items-center justify-center mb-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                      <p class="text-[9px] text-[#64748B]">Time Logged</p>
                      <div class="text-[18px] font-black text-[#0F172A]">45h</div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]">
                      <div class="w-8 h-8 rounded-lg bg-[#F3E8FF] flex items-center justify-center mb-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
                      <p class="text-[9px] text-[#64748B]">Members</p>
                      <div class="text-[18px] font-black text-[#0F172A]">12</div>
                    </div>
                  </div>
                  <div class="mt-3 space-y-2.5">
                    <div v-for="project in previewProjects" :key="project.name" class="bg-white rounded-2xl border border-[#E2E8F0] p-3">
                      <div class="flex items-center justify-between mb-2">
                        <div><div class="text-[12px] font-bold text-[#0F172A]">{{ project.name }}</div><div class="text-[10px] text-[#94A3B8]">{{ project.description }}</div></div>
                        <span :class="project.statusClass" class="text-[8px] font-bold px-2 py-0.5 rounded-full">{{ project.status }}</span>
                      </div>
                      <div class="mb-2">
                        <div class="flex justify-between mb-1"><span class="text-[10px] font-bold text-[#475569]">Progress</span><span class="text-[10px] font-bold text-[#2563EB]">{{ project.progress }}%</span></div>
                        <div class="w-full bg-[#E2E8F0] h-1.5 rounded-full"><div class="h-1.5 bg-[#2563EB] rounded-full" :style="{ width: project.progress + '%' }"></div></div>
                      </div>
                      <div class="flex -space-x-1.5">
                        <div v-for="m in project.members" :key="m" class="w-5 h-5 rounded-full border-2 border-white text-[7px] text-white font-bold flex items-center justify-center" :class="memberColors[m]">{{ m }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Tasks mobile -->
                <div v-if="activePreviewTab === 'tasks'">
                  <div class="grid grid-cols-2 gap-2.5">
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]"><div class="w-8 h-8 rounded-lg bg-[#EBF0FF] flex items-center justify-center mb-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></div><div class="text-[9px] text-[#94A3B8]">Total</div><div class="text-[18px] font-black text-[#0F172A]">10</div></div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]"><div class="w-8 h-8 rounded-lg bg-[#DCFCE7] flex items-center justify-center mb-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg></div><div class="text-[9px] text-[#94A3B8]">Done</div><div class="text-[18px] font-black text-[#0F172A]">3</div></div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]"><div class="w-8 h-8 rounded-lg bg-[#FEF3C7] flex items-center justify-center mb-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg></div><div class="text-[9px] text-[#94A3B8]">Blocked</div><div class="text-[18px] font-black text-[#0F172A]">1</div></div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]"><div class="w-8 h-8 rounded-lg bg-[#F3E8FF] flex items-center justify-center mb-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="text-[9px] text-[#94A3B8]">Warnings</div><div class="text-[18px] font-black text-[#0F172A]">2</div></div>
                  </div>
                  <div class="mt-3 space-y-2.5">
                    <div v-for="col in previewColumns" :key="col.id" class="bg-white rounded-2xl border border-[#E2E8F0] p-3">
                      <div class="flex items-center gap-2 mb-2">
                        <span :class="col.dotClass" class="w-2 h-2 rounded-full"></span>
                        <span class="text-[12px] font-bold text-[#0F172A]">{{ col.title }}</span>
                        <span class="text-[9px] bg-[#F1F5F9] text-[#94A3B8] font-bold px-2 py-0.5 rounded-full">{{ col.tasks.length }}</span>
                      </div>
                      <div class="space-y-2">
                        <div v-for="task in col.tasks" :key="task" class="bg-[#F8FAFC] rounded-xl p-2.5 flex items-center justify-between">
                          <div><div class="text-[11px] font-bold text-[#0F172A]" :class="{ 'line-through opacity-60': col.id === 'done' }">{{ task }}</div></div>
                          <div class="w-5 h-5 rounded-full bg-[#34D399] text-[7px] text-white font-bold flex items-center justify-center">U</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Team mobile -->
                <div v-if="activePreviewTab === 'team'">
                  <div class="grid grid-cols-2 gap-2.5">
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]"><div class="w-8 h-8 rounded-lg bg-[#EBF0FF] flex items-center justify-center mb-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><div class="text-[9px] text-[#94A3B8]">Members</div><div class="text-[18px] font-black text-[#0F172A]">6</div></div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]"><div class="w-8 h-8 rounded-lg bg-[#DCFCE7] flex items-center justify-center mb-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div><div class="text-[9px] text-[#94A3B8]">Leaders</div><div class="text-[18px] font-black text-[#0F172A]">1</div></div>
                  </div>
                  <div class="mt-3 space-y-2.5">
                    <div v-for="member in previewTeamMembers" :key="member.name" class="bg-white rounded-2xl border border-[#E2E8F0] p-3">
                      <div class="flex items-center gap-3 mb-2">
                        <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px]" :style="{ backgroundColor: member.color }">{{ member.initial }}</div>
                        <div class="flex-1 min-w-0">
                          <div class="text-[12px] font-bold text-[#0F172A]">{{ member.name }}</div>
                          <div class="text-[10px] text-[#94A3B8]">user@university.edu</div>
                        </div>
                        <span :class="member.roleBadge" class="text-[8px] font-bold px-2 py-0.5 rounded-full">{{ member.role }}</span>
                      </div>
                      <div class="flex items-center justify-between mb-1">
                        <span class="text-[9px] font-semibold text-[#475569]">Contribution</span>
                        <span class="text-[9px] font-bold" :class="member.contribution >= 70 ? 'text-[#10B981]' : member.contribution >= 40 ? 'text-[#F59E0B]' : 'text-[#F87171]'">{{ member.contribution }}%</span>
                      </div>
                      <div class="w-full bg-[#E2E8F0] h-1.5 rounded-full"><div class="h-1.5 rounded-full" :class="member.contribution >= 70 ? 'bg-[#10B981]' : member.contribution >= 40 ? 'bg-[#F59E0B]' : 'bg-[#F87171]'" :style="{ width: member.contribution + '%' }"></div></div>
                    </div>
                  </div>
                </div>

                <!-- Chat mobile -->
                <div v-if="activePreviewTab === 'chat'">
                  <!-- Stats row -->
                  <div class="grid grid-cols-3 gap-2">
                    <div class="bg-white rounded-2xl p-2.5 border border-[#E2E8F0] text-center">
                      <div class="text-[16px] font-black text-[#0F172A]">18</div>
                      <div class="text-[8px] text-[#94A3B8]">Messages</div>
                    </div>
                    <div class="bg-white rounded-2xl p-2.5 border border-[#E2E8F0] text-center">
                      <div class="text-[16px] font-black text-[#0F172A]">3</div>
                      <div class="text-[8px] text-[#94A3B8]">Online</div>
                    </div>
                    <div class="bg-white rounded-2xl p-2.5 border border-[#E2E8F0] text-center">
                      <div class="text-[16px] font-black text-[#0F172A]">5</div>
                      <div class="text-[8px] text-[#94A3B8]">Discussions</div>
                    </div>
                  </div>
                  <!-- Thread list (WhatsApp style) -->
                  <div class="mt-2.5 bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
                    <div v-for="thread in previewThreads" :key="thread.id" class="flex items-center gap-3 px-3 py-2.5 border-b border-[#F1F5F9] last:border-b-0" :class="thread.active ? 'bg-[#EFF6FF]' : ''">
                      <div class="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-white text-[12px]" :class="thread.activeBg || 'bg-[#2563EB]'">
                        <span v-html="thread.mobileIcon || thread.icon"></span>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between">
                          <div class="text-[12px] font-bold text-[#0F172A] truncate">{{ thread.name }}</div>
                          <div class="text-[9px] text-[#94A3B8] shrink-0 ml-2">{{ thread.time }}</div>
                        </div>
                        <div class="text-[10px] text-[#64748B] truncate">{{ thread.preview }}</div>
                      </div>
                      <span v-if="thread.unread" class="bg-[#2563EB] text-white text-[8px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1 shrink-0">{{ thread.unread }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ====== DESKTOP CONTENT (hidden md:block) ====== -->
              <div class="hidden md:block space-y-4">
                <!-- Dashboard tab -->
                <div v-if="activePreviewTab === 'dashboard'" class="space-y-4">
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div v-for="stat in previewStats" :key="stat.label" class="relative overflow-hidden bg-white rounded-2xl p-3.5 border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group">
                      <div :class="stat.glow" class="absolute -right-6 -top-6 w-20 h-20 rounded-full opacity-60"></div>
                      <div class="relative flex items-center justify-between mb-3">
                        <div :class="stat.bg" class="w-9 h-9 rounded-xl flex items-center justify-center">
                          <span v-html="stat.icon"></span>
                        </div>
                        <span :class="stat.badgeClass" class="text-[9px] font-bold px-2 py-0.5 rounded-full">{{ stat.badge }}</span>
                      </div>
                      <p class="relative text-[10px] text-[#64748B] font-semibold mb-0.5">{{ stat.label }}</p>
                      <div class="relative flex items-end gap-1">
                        <div class="text-[20px] font-black tracking-tight text-[#0F172A]">{{ stat.value }}</div>
                        <p class="text-[9px] text-[#94A3B8] font-semibold mb-1">{{ stat.caption }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 xl:grid-cols-3 gap-3">
                    <div class="xl:col-span-2 space-y-3">
                      <div class="grid grid-cols-1 lg:grid-cols-5 gap-3">
                        <div class="lg:col-span-2 bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-sm">
                          <div class="flex items-center justify-between mb-3">
                            <div>
                              <div class="text-[13px] font-bold text-[#0F172A]">Time Tracker</div>
                              <div class="text-[10px] text-[#94A3B8]">Track work sessions.</div>
                            </div>
                            <div class="w-8 h-8 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3L2 6"/><path d="M22 6l-3-3"/></svg>
                            </div>
                          </div>
                          <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 mb-3">
                            <div class="text-[9px] text-[#94A3B8] font-bold mb-0.5">Current Task</div>
                            <div class="text-[12px] font-black text-[#0F172A]">Dashboard UI in Progress</div>
                          </div>
                          <div class="text-center bg-[#0F172A] rounded-xl p-4 mb-3">
                            <div class="text-[9px] text-[#94A3B8] font-bold mb-1">Current Session</div>
                            <div class="text-[24px] font-black text-white tracking-tight">01:24:07</div>
                          </div>
                        </div>

                        <div class="lg:col-span-3 bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-sm">
                          <div class="flex items-center justify-between mb-3">
                            <div>
                              <div class="text-[13px] font-bold text-[#0F172A]">Sprint Performance</div>
                              <div class="text-[10px] text-[#94A3B8]">Weekly task delivery.</div>
                            </div>
                            <span class="text-[9px] font-bold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-full">Week 4</span>
                          </div>
                          <div class="h-[130px] flex items-end gap-2 px-1">
                            <div v-for="bar in previewBars" :key="bar.day" class="flex-1 flex flex-col items-center gap-1.5">
                              <div class="w-full h-[100px] bg-[#F1F5F9] rounded-xl flex items-end overflow-hidden">
                                <div class="w-full rounded-xl bg-gradient-to-t from-[#2563EB] to-[#60A5FA] transition-all duration-1000" :style="{ height: bar.height + '%' }"></div>
                              </div>
                              <div class="text-center">
                                <div class="text-[9px] font-bold text-[#0F172A]">{{ bar.value }}</div>
                                <div class="text-[8px] text-[#94A3B8] font-semibold">{{ bar.day }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                          <div>
                            <div class="text-[13px] font-bold text-[#0F172A]">Active Projects</div>
                            <div class="text-[10px] text-[#94A3B8]">Current running projects.</div>
                          </div>
                          <span class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition cursor-pointer">View</span>
                        </div>
                        <div class="space-y-2.5">
                          <div v-for="project in previewProjects" :key="project.name" class="border border-[#E2E8F0] rounded-xl p-3 hover:border-[#BFDBFE] hover:shadow-md transition-all cursor-pointer">
                            <div class="flex items-center justify-between mb-2">
                              <div>
                                <div class="text-[12px] font-bold text-[#0F172A]">{{ project.name }}</div>
                                <div class="text-[10px] text-[#94A3B8]">{{ project.description }}</div>
                              </div>
                              <span :class="project.statusClass" class="text-[9px] font-bold px-2 py-0.5 rounded-full">{{ project.status }}</span>
                            </div>
                            <div class="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden mb-1.5">
                              <div class="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] h-1.5 rounded-full transition-all duration-1000" :style="{ width: project.progress + '%' }"></div>
                            </div>
                            <div class="flex items-center justify-between">
                              <span class="text-[10px] text-[#64748B] font-bold">{{ project.progress }}%</span>
                              <div class="flex -space-x-1.5">
                                <div v-for="m in project.members" :key="m" class="w-5 h-5 rounded-full border-2 border-white text-[7px] text-white font-bold flex items-center justify-center" :class="memberColors[m]">{{ m }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-2xl p-4 text-white shadow-xl shadow-blue-500/20">
                        <div class="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-white/10 blur-xl"></div>
                        <div class="relative flex items-center gap-2.5 mb-3">
                          <div class="w-9 h-9 rounded-xl bg-white/20 border border-white/10 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                          </div>
                          <div>
                            <div class="text-[13px] font-bold">Team AI</div>
                            <div class="text-[10px] text-blue-200">Smart insights</div>
                          </div>
                        </div>
                        <div class="relative space-y-2.5">
                          <div class="bg-white/10 border border-white/10 rounded-xl p-3">
                            <div class="text-[9px] text-blue-100 font-bold mb-1">PRODUCTIVITY</div>
                            <div class="text-[11px] leading-[1.5] text-blue-50">Your team is 18% more productive this week.</div>
                          </div>
                          <div class="bg-white/10 border border-white/10 rounded-xl p-3">
                            <div class="text-[9px] text-blue-100 font-bold mb-1">RECOMMENDATION</div>
                            <div class="text-[11px] leading-[1.5] text-blue-50">Consider reviewing workload balance for the analytics module.</div>
                          </div>
                        </div>
                        <div class="text-[8px] text-blue-300 mt-2 italic">All AI suggestions require human approval.</div>
                      </div>

                      <div class="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                          <div>
                            <div class="text-[13px] font-bold text-[#0F172A]">Recent Time Logs</div>
                            <div class="text-[10px] text-[#94A3B8]">Latest sessions.</div>
                          </div>
                          <span class="text-[9px] bg-[#EFF6FF] text-[#2563EB] font-bold px-2 py-0.5 rounded-full">Today</span>
                        </div>
                        <div class="space-y-2">
                          <div class="bg-[#F8FAFC] rounded-xl p-2.5 hover:bg-[#F1F5F9] transition cursor-pointer">
                            <div class="flex items-center justify-between mb-0.5">
                              <span class="text-[11px] font-bold text-[#0F172A]">Dashboard UI</span>
                              <span class="text-[11px] font-bold text-[#2563EB]">2h 10m</span>
                            </div>
                            <div class="text-[9px] text-[#94A3B8]">02h 10m ago</div>
                           </div>
                           <div class="bg-[#F8FAFC] rounded-xl p-2.5 hover:bg-[#F1F5F9] transition cursor-pointer">
                             <div class="flex items-center justify-between mb-0.5">
                               <span class="text-[11px] font-bold text-[#0F172A]">Login Page</span>
                               <span class="text-[11px] font-bold text-[#2563EB]">1h 35m</span>
                             </div>
                             <div class="text-[9px] text-[#94A3B8]">Earlier today</div>
                          </div>
                        </div>
                      </div>

                      <div class="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                          <div class="text-[13px] font-bold text-[#0F172A]">Team Chat</div>
                          <span class="text-[9px] bg-green-100 text-green-600 font-bold px-2 py-0.5 rounded-full">3 online</span>
                        </div>
                        <div class="flex gap-2 mb-2.5">
                          <div class="w-7 h-7 rounded-full bg-blue-400 shrink-0 flex items-center justify-center text-[9px] text-white font-bold">U</div>
                          <div class="bg-[#F8FAFC] rounded-xl p-2 flex-1">
                            <div class="flex items-center justify-between mb-0.5">
                              <span class="text-[10px] font-semibold text-[#0F172A]">Team Member</span>
                              <span class="text-[8px] text-[#94A3B8]">10:24 AM</span>
                            </div>
                            <p class="text-[10px] text-[#475569] leading-[1.5]">API integration is done</p>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <div class="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-1.5 text-[10px] text-[#94A3B8]">Send a message...</div>
                          <div class="bg-[#2563EB] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg">Send</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Projects tab -->
                <div v-if="activePreviewTab === 'projects'" class="space-y-3">
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div class="relative overflow-hidden bg-white rounded-2xl p-3 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div class="absolute -right-5 -top-5 w-16 h-16 rounded-full opacity-60 bg-[#DBEAFE]"></div>
                      <div class="relative flex items-center justify-between mb-3">
                        <div class="w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
                        </div>
                        <span class="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-green-50 text-green-600">Active</span>
                      </div>
                      <p class="relative text-[9px] text-[#64748B] font-semibold mb-0.5">Total Projects</p>
                      <div class="relative text-[18px] font-black tracking-tight text-[#0F172A]">4</div>
                    </div>
                    <div class="relative overflow-hidden bg-white rounded-2xl p-3 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div class="absolute -right-5 -top-5 w-16 h-16 rounded-full opacity-60 bg-[#BBF7D0]"></div>
                      <div class="relative flex items-center justify-between mb-3">
                        <div class="w-9 h-9 rounded-xl bg-[#ECFDF5] flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                        </div>
                        <span class="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-green-50 text-green-600">Tracked</span>
                      </div>
                      <p class="relative text-[9px] text-[#64748B] font-semibold mb-0.5">Completed Tasks</p>
                      <div class="relative text-[18px] font-black tracking-tight text-[#0F172A]">22</div>
                    </div>
                    <div class="relative overflow-hidden bg-white rounded-2xl p-3 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div class="absolute -right-5 -top-5 w-16 h-16 rounded-full opacity-60 bg-[#FDE68A]"></div>
                      <div class="relative flex items-center justify-between mb-3">
                        <div class="w-9 h-9 rounded-xl bg-[#FFFBEB] flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        </div>
                        <span class="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-600">Logged</span>
                      </div>
                      <p class="relative text-[9px] text-[#64748B] font-semibold mb-0.5">Time Logged</p>
                      <div class="relative text-[18px] font-black tracking-tight text-[#0F172A]">45h</div>
                    </div>
                    <div class="relative overflow-hidden bg-white rounded-2xl p-3 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div class="absolute -right-5 -top-5 w-16 h-16 rounded-full opacity-60 bg-[#DDD6FE]"></div>
                      <div class="relative flex items-center justify-between mb-3">
                        <div class="w-9 h-9 rounded-xl bg-[#F5F3FF] flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                        </div>
                        <span class="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-purple-50 text-purple-600">Live</span>
                      </div>
                      <p class="relative text-[9px] text-[#64748B] font-semibold mb-0.5">Team Members</p>
                      <div class="relative text-[18px] font-black tracking-tight text-[#0F172A]">12</div>
                    </div>
                  </div>
                  <div class="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-sm">
                    <div class="flex items-center justify-between mb-3">
                      <div class="text-[13px] font-bold text-[#0F172A]">Project Workspaces</div>
                      <span class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition cursor-pointer">+ Create Project</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div v-for="project in previewProjects" :key="project.name" class="bg-white border border-[#E2E8F0] rounded-2xl p-3.5 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 cursor-pointer">
                        <div class="flex items-start justify-between mb-3">
                          <div>
                            <div class="text-[12px] font-bold text-[#0F172A]">{{ project.name }}</div>
                            <div class="text-[10px] text-[#94A3B8]">{{ project.description }}</div>
                          </div>
                          <span :class="project.statusClass" class="text-[9px] font-bold px-2 py-0.5 rounded-full">{{ project.status }}</span>
                        </div>
                        <div class="mb-3">
                          <div class="flex items-center justify-between mb-1.5">
                            <span class="text-[10px] font-bold text-[#475569]">Progress</span>
                            <span class="text-[10px] font-bold text-[#2563EB]">{{ project.progress }}%</span>
                          </div>
                          <div class="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                            <div class="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] h-2 rounded-full transition-all duration-1000" :style="{ width: project.progress + '%' }"></div>
                          </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2 mb-3">
                          <div class="bg-[#F8FAFC] rounded-xl p-2">
                            <span class="text-[9px] text-[#94A3B8]">Deadline</span>
                            <div class="text-[10px] font-bold text-[#0F172A]">29 Mar</div>
                          </div>
                          <div class="bg-[#F8FAFC] rounded-xl p-2">
                            <span class="text-[9px] text-[#94A3B8]">Time</span>
                            <div class="text-[10px] font-bold text-[#0F172A]">18h 30m</div>
                          </div>
                        </div>
                        <div class="flex items-center justify-between">
                          <span class="text-[9px] text-[#94A3B8]">Due Friday</span>
                          <div class="flex -space-x-1.5">
                            <div v-for="m in project.members" :key="m" class="w-5 h-5 rounded-lg border-2 border-white text-[7px] text-white font-bold flex items-center justify-center" :class="memberColors[m]">{{ m }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-2xl p-4 text-white shadow-xl shadow-blue-500/20">
                    <div class="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-white/10 blur-xl"></div>
                    <div class="relative flex items-center gap-2.5 mb-3">
                      <div class="w-9 h-9 rounded-xl bg-white/20 border border-white/10 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                      </div>
                      <div>
                        <div class="text-[13px] font-bold">Project Intelligence</div>
                        <div class="text-[10px] text-blue-200">Workspace-level guidance</div>
                      </div>
                    </div>
                    <div class="relative space-y-2.5">
                      <div class="bg-white/10 border border-white/10 rounded-xl p-3">
                        <div class="text-[9px] text-blue-100 font-bold mb-1">PROJECT HEALTH</div>
                        <div class="text-[11px] leading-[1.5] text-blue-50">3 of 4 active projects are progressing normally.</div>
                      </div>
                      <div class="bg-white/10 border border-white/10 rounded-xl p-3">
                        <div class="text-[9px] text-blue-100 font-bold mb-1">TIME TRACKING</div>
                        <div class="text-[11px] leading-[1.5] text-blue-50">45h 40m logged across active workspaces.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Tasks tab -->
                <div v-if="activePreviewTab === 'tasks'" class="space-y-3">
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]/70 shadow-sm">
                      <div class="flex items-center justify-between mb-2">
                        <div class="w-9 h-9 rounded-xl bg-[#EBF0FF] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg></div>
                        <span class="text-[9px] text-[#64748B] font-semibold">Total</span>
                      </div>
                      <p class="text-[9px] text-[#94A3B8] mb-0.5">Total Tasks</p>
                      <div class="text-[18px] font-bold text-[#0F172A]">10</div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]/70 shadow-sm">
                      <div class="flex items-center justify-between mb-2">
                        <div class="w-9 h-9 rounded-xl bg-[#DCFCE7] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
                        <span class="text-[9px] text-[#10B981] font-semibold">Done</span>
                      </div>
                      <p class="text-[9px] text-[#94A3B8] mb-0.5">Completed</p>
                      <div class="text-[18px] font-bold text-[#0F172A]">3</div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]/70 shadow-sm">
                      <div class="flex items-center justify-between mb-2">
                        <div class="w-9 h-9 rounded-xl bg-[#FEF3C7] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
                        <span class="text-[9px] text-[#F59E0B] font-semibold">Blocked</span>
                      </div>
                      <p class="text-[9px] text-[#94A3B8] mb-0.5">Blocked Tasks</p>
                      <div class="text-[18px] font-bold text-[#0F172A]">1</div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]/70 shadow-sm">
                      <div class="flex items-center justify-between mb-2">
                        <div class="w-9 h-9 rounded-xl bg-[#F3E8FF] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                        <span class="text-[9px] text-[#F87171] font-semibold">Warn</span>
                      </div>
                      <p class="text-[9px] text-[#94A3B8] mb-0.5">Deadline Warnings</p>
                      <div class="text-[18px] font-bold text-[#0F172A]">2</div>
                    </div>
                  </div>
                  <div class="bg-white rounded-2xl border border-[#E2E8F0]/70 p-4 shadow-sm">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center gap-1.5">
                        <div class="flex items-center bg-[#F1F5F9] rounded-lg p-0.5">
                          <span class="bg-white shadow-sm text-[#0F172A] px-2 py-1 rounded-md text-[10px] font-semibold">Kanban</span>
                          <span class="text-[#64748B] px-2 py-1 text-[10px] font-semibold">List</span>
                        </div>
                      </div>
                      <span class="bg-[#2563EB] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg">+ New Task</span>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5">
                      <div v-for="col in previewColumns" :key="col.id">
                        <div class="flex items-center gap-1.5 mb-2.5">
                          <span :class="col.dotClass" class="w-2 h-2 rounded-full"></span>
                          <span class="text-[11px] font-bold text-[#0F172A]">{{ col.title }}</span>
                          <span class="text-[9px] font-semibold text-[#94A3B8] bg-[#F1F5F9] rounded-full w-4 h-4 flex items-center justify-center">{{ col.tasks.length }}</span>
                        </div>
                        <div class="space-y-2">
                          <div v-for="task in col.tasks" :key="task" class="bg-white rounded-xl border border-[#E2E8F0]/70 p-2.5 shadow-sm hover:shadow-md hover:border-[#2563EB]/30 transition-all cursor-pointer">
                            <div class="mb-1.5">
                              <span :class="col.id === 'backlog' ? 'bg-[#F1F5F9] text-[#64748B]' : col.id === 'in-progress' ? 'bg-[#EBF0FF] text-[#2563EB]' : col.id === 'review' ? 'bg-[#FEF3C7] text-[#D97706]' : 'bg-[#D1FAE5] text-[#10B981]'" class="text-[8px] font-bold px-1.5 py-0.5 rounded-full">Medium</span>
                            </div>
                            <div class="text-[10px] font-bold text-[#0F172A] mb-1.5" :class="{ 'line-through opacity-60': col.id === 'done' }">{{ task }}</div>
                            <div v-if="col.id === 'in-progress'" class="mb-1.5">
                              <div class="w-full bg-[#E2E8F0] rounded-full h-1 overflow-hidden">
                                <div class="bg-[#2563EB] h-1 rounded-full" style="width:65%"></div>
                              </div>
                            </div>
                            <div class="flex items-center justify-between">
                              <div class="flex items-center gap-1.5">
                                <div class="w-4 h-4 rounded-full bg-[#34D399] text-[7px] text-white font-bold flex items-center justify-center">U</div>
                                <span class="text-[9px] text-[#64748B]">Assignee</span>
                              </div>
                              <div class="flex items-center gap-1 text-[#94A3B8]">
                                <svg width="8" height="8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                <span class="text-[8px] font-medium">5 Apr</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Team tab -->
                <div v-if="activePreviewTab === 'team'" class="space-y-3">
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]/70 shadow-sm">
                      <div class="flex items-center justify-between mb-2">
                        <div class="w-9 h-9 rounded-xl bg-[#EBF0FF] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div>
                        <span class="text-[9px] text-[#10B981] font-semibold">Active</span>
                      </div>
                      <p class="text-[9px] text-[#94A3B8] mb-0.5">Total Members</p>
                      <div class="text-[18px] font-bold text-[#0F172A]">6</div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]/70 shadow-sm">
                      <div class="flex items-center justify-between mb-2">
                        <div class="w-9 h-9 rounded-xl bg-[#DCFCE7] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                        <span class="text-[9px] text-[#2563EB] font-semibold">Leaders</span>
                      </div>
                      <p class="text-[9px] text-[#94A3B8] mb-0.5">Leaders</p>
                      <div class="text-[18px] font-bold text-[#0F172A]">1</div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]/70 shadow-sm">
                      <div class="flex items-center justify-between mb-2">
                        <div class="w-9 h-9 rounded-xl bg-[#FEF3C7] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                        <span class="text-[9px] text-[#F59E0B] font-semibold">Pending</span>
                      </div>
                      <p class="text-[9px] text-[#94A3B8] mb-0.5">Pending Invites</p>
                      <div class="text-[18px] font-bold text-[#0F172A]">2</div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]/70 shadow-sm">
                      <div class="flex items-center justify-between mb-2">
                        <div class="w-9 h-9 rounded-xl bg-[#F3E8FF] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg></div>
                        <span class="text-[9px] text-[#9333EA] font-semibold">Log</span>
                      </div>
                      <p class="text-[9px] text-[#94A3B8] mb-0.5">Role Changes</p>
                      <div class="text-[18px] font-bold text-[#0F172A]">3</div>
                    </div>
                  </div>
                  <div class="bg-white rounded-2xl border border-[#E2E8F0]/70 p-4 shadow-sm">
                    <div class="flex items-center justify-between mb-3">
                      <div>
                        <div class="text-[13px] font-bold text-[#0F172A]">Team Members</div>
                        <div class="text-[10px] text-[#94A3B8]">Membership list with names, emails, and roles</div>
                      </div>
                      <span class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition cursor-pointer">+ Invite Member</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div v-for="member in previewTeamMembers" :key="member.name" class="border border-[#E2E8F0]/70 rounded-2xl p-3.5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div class="flex items-start justify-between mb-3">
                          <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-[14px]" :style="{ backgroundColor: member.color }">{{ member.initial }}</div>
                            <div>
                              <div class="text-[12px] font-bold text-[#0F172A]">{{ member.name }}</div>
                              <div class="text-[10px] text-[#94A3B8]">user@university.edu</div>
                            </div>
                          </div>
                          <span :class="member.roleBadge" class="text-[9px] font-bold px-2 py-0.5 rounded-full">{{ member.role }}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-2 mb-2.5">
                          <div class="bg-[#F8FAFC] rounded-lg p-2">
                            <div class="text-[8px] text-[#94A3B8]">Tasks Assigned</div>
                            <div class="text-[11px] font-bold text-[#0F172A]">{{ member.tasksAssigned }}</div>
                          </div>
                          <div class="bg-[#F8FAFC] rounded-lg p-2">
                            <div class="text-[8px] text-[#94A3B8]">Tasks Completed</div>
                            <div class="text-[11px] font-bold text-[#0F172A]">{{ member.tasksCompleted }}</div>
                          </div>
                        </div>
                        <div class="flex items-center justify-between mb-1">
                          <span class="text-[9px] font-semibold text-[#475569]">Contribution</span>
                          <span class="text-[9px] font-bold" :class="member.contribution >= 70 ? 'text-[#10B981]' : member.contribution >= 40 ? 'text-[#F59E0B]' : 'text-[#F87171]'">{{ member.contribution }}%</span>
                        </div>
                        <div class="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden">
                          <div class="h-1.5 rounded-full transition-all duration-500" :class="member.contribution >= 70 ? 'bg-[#10B981]' : member.contribution >= 40 ? 'bg-[#F59E0B]' : 'bg-[#F87171]'" :style="{ width: member.contribution + '%' }"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Chat tab -->
                <div v-if="activePreviewTab === 'chat'" class="space-y-3">
                  <div class="grid grid-cols-3 gap-2.5">
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]/70 shadow-sm">
                      <div class="flex items-center justify-between mb-2">
                        <div class="w-9 h-9 rounded-xl bg-[#EBF0FF] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
                        <span class="text-[9px] font-semibold text-[#2563EB]">Today</span>
                      </div>
                      <p class="text-[9px] text-[#94A3B8] mb-0.5">Project Messages</p>
                      <div class="text-[18px] font-bold text-[#0F172A]">18</div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]/70 shadow-sm">
                      <div class="flex items-center justify-between mb-2">
                        <div class="w-9 h-9 rounded-xl bg-[#DCFCE7] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div>
                        <span class="text-[9px] font-semibold text-green-500">Online</span>
                      </div>
                      <p class="text-[9px] text-[#94A3B8] mb-0.5">Active Members</p>
                      <div class="text-[18px] font-bold text-[#0F172A]">3</div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 border border-[#E2E8F0]/70 shadow-sm">
                      <div class="flex items-center justify-between mb-2">
                        <div class="w-9 h-9 rounded-xl bg-[#FEF3C7] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
                        <span class="text-[9px] font-semibold text-[#F59E0B]">Pinned</span>
                      </div>
                      <p class="text-[9px] text-[#94A3B8] mb-0.5">Task Discussions</p>
                      <div class="text-[18px] font-bold text-[#0F172A]">5</div>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 xl:grid-cols-[140px_1fr_120px] gap-2.5">
                    <!-- Thread List -->
                    <div class="hidden xl:block bg-white rounded-2xl border border-[#E2E8F0]/70 shadow-sm overflow-hidden">
                      <div class="p-3 border-b border-[#F1F5F9]">
                        <div class="text-[11px] font-bold text-[#0F172A]">Project Threads</div>
                        <div class="text-[8px] text-[#94A3B8]">Project-level discussions</div>
                      </div>
                      <div class="p-2 space-y-1.5">
                        <div v-for="thread in previewThreads" :key="thread.id" class="rounded-lg p-2 transition cursor-pointer" :class="thread.active ? 'bg-[#EBF0FF] border border-[#2563EB]/30' : 'bg-[#F8FAFC] border border-transparent hover:bg-[#F1F5F9]'">
                          <div class="flex items-center gap-1.5">
                            <div class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" :class="thread.iconBg">
                              <span v-html="thread.icon"></span>
                            </div>
                            <div class="min-w-0">
                              <div class="text-[9px] font-bold text-[#0F172A] truncate">{{ thread.name }}</div>
                              <div class="text-[7px] text-[#94A3B8]">{{ thread.time }}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Main Chat Area -->
                    <div class="bg-white rounded-2xl border border-[#E2E8F0]/70 shadow-sm overflow-hidden flex flex-col min-h-[240px]">
                      <div class="p-3 border-b border-[#F1F5F9] flex items-center justify-between">
                        <div class="flex items-center gap-2">
                          <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-[#EBF0FF]">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
                          </div>
                          <div>
                            <div class="text-[11px] font-bold text-[#0F172A]">TeamTrack Frontend</div>
                            <div class="text-[8px] text-[#94A3B8]">Dashboard redesign and responsive UI</div>
                          </div>
                        </div>
                        <span class="bg-green-100 text-green-600 text-[8px] font-bold px-1.5 py-0.5 rounded-full">3 online</span>
                      </div>
                      <div class="flex-1 bg-[#F8FAFC] p-3 space-y-2.5 overflow-y-auto">
                        <div class="flex gap-2">
                          <div class="w-6 h-6 rounded-full bg-[#34D399] shrink-0 flex items-center justify-center text-[8px] text-white font-bold">O</div>
                          <div class="bg-white border border-[#E2E8F0] rounded-xl rounded-tl-sm p-2 max-w-[85%]">
                            <div class="flex items-center gap-1 mb-0.5"><span class="text-[9px] font-bold text-[#0F172A]">Omar</span><span class="text-[7px] text-[#94A3B8]">10:24 AM</span></div>
                            <p class="text-[9px] text-[#334155] leading-[1.5]">Dashboard timer and recent time logs are aligned.</p>
                          </div>
                        </div>
                        <div class="flex gap-2 justify-end">
                          <div class="bg-[#2563EB] text-white border border-[#2563EB] rounded-xl rounded-tr-sm p-2 max-w-[75%]">
                            <p class="text-[9px] leading-[1.5]">Yes, keep the timer. Time tracking is core.</p>
                          </div>
                          <div class="w-6 h-6 rounded-full bg-[#2563EB] shrink-0 flex items-center justify-center text-[8px] text-white font-bold">S</div>
                        </div>
                        <div class="flex gap-2">
                          <div class="w-6 h-6 rounded-full bg-[#FBBF24] shrink-0 flex items-center justify-center text-[8px] text-white font-bold">Z</div>
                          <div class="bg-white border border-[#E2E8F0] rounded-xl rounded-tl-sm p-2 max-w-[85%]">
                            <div class="flex items-center gap-1 mb-0.5"><span class="text-[9px] font-bold text-[#0F172A]">Zernish</span><span class="text-[7px] text-[#94A3B8]">10:35 AM</span></div>
                            <p class="text-[9px] text-[#334155] leading-[1.5]">Projects page also looks good.</p>
                          </div>
                        </div>
                        <div class="flex gap-2 justify-end">
                          <div class="bg-[#2563EB] text-white border border-[#2563EB] rounded-xl rounded-tr-sm p-2 max-w-[75%]">
                            <p class="text-[9px] leading-[1.5]">Great. Let's finalize by Friday.</p>
                          </div>
                          <div class="w-6 h-6 rounded-full bg-[#2563EB] shrink-0 flex items-center justify-center text-[8px] text-white font-bold">S</div>
                        </div>
                      </div>
                      <div class="bg-white border-t border-[#E2E8F0] p-2">
                        <div class="flex items-center gap-2">
                          <div class="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-2 py-1.5 text-[9px] text-[#94A3B8]">Write a project update...</div>
                          <div class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[9px] font-bold px-3 py-1.5 rounded-xl transition">Send</div>
                        </div>
                      </div>
                    </div>
                    <!-- Right Context Panel -->
                    <div class="hidden xl:block space-y-2.5">
                      <div class="bg-white rounded-2xl border border-[#E2E8F0]/70 p-3 shadow-sm">
                        <div class="flex items-center gap-2 mb-2">
                          <div class="w-7 h-7 rounded-lg bg-[#EBF0FF] flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
                          <div class="text-[10px] font-bold text-[#0F172A]">Linked Work Item</div>
                        </div>
                        <div class="bg-[#F8FAFC] rounded-lg p-2 mb-1.5">
                          <div class="text-[8px] text-[#94A3B8]">Current Task</div>
                          <div class="text-[10px] font-bold text-[#0F172A]">Dashboard UI</div>
                        </div>
                        <div class="grid grid-cols-2 gap-1.5">
                          <div class="bg-[#F8FAFC] rounded-lg p-1.5"><div class="text-[7px] text-[#94A3B8]">Status</div><div class="text-[9px] font-bold text-[#10B981]">In Progress</div></div>
                          <div class="bg-[#F8FAFC] rounded-lg p-1.5"><div class="text-[7px] text-[#94A3B8]">Priority</div><div class="text-[9px] font-bold text-[#F87171]">High</div></div>
                        </div>
                      </div>
                      <div class="bg-white rounded-2xl border border-[#E2E8F0]/70 p-3 shadow-sm">
                        <div class="flex items-center gap-2 mb-2">
                          <div class="w-7 h-7 rounded-lg bg-[#FEF3C7] flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
                          <div class="text-[10px] font-bold text-[#0F172A]">Pinned Decision</div>
                        </div>
                        <div class="bg-[#FFFBEB] border border-[#FDE68A]/40 rounded-lg p-2">
                          <p class="text-[8px] text-[#92400E] leading-[1.5]">Use blue theme for all primary actions.</p>
                          <p class="text-[7px] text-[#94A3B8] mt-1">Pinned by Siraj</p>
                        </div>
                      </div>
                      <div class="bg-white rounded-2xl border border-[#E2E8F0]/70 p-3 shadow-sm">
                        <div class="text-[10px] font-bold text-[#0F172A] mb-2">Chat Activity</div>
                        <div class="space-y-2">
                          <div class="flex gap-1.5">
                            <div class="w-5 h-5 rounded-lg bg-green-100 flex items-center justify-center text-[8px] font-bold text-green-600">+</div>
                            <div>
                              <div class="text-[9px] font-bold text-[#0F172A]">Message logged</div>
                              <div class="text-[7px] text-[#94A3B8]">12m ago</div>
                            </div>
                          </div>
                          <div class="flex gap-1.5">
                            <div class="w-5 h-5 rounded-lg bg-[#EBF0FF] flex items-center justify-center"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
                            <div>
                              <div class="text-[9px] font-bold text-[#0F172A]">Task discussion</div>
                              <div class="text-[7px] text-[#94A3B8]">New replies today</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <!-- End scrollable content area -->

              <!-- Mobile Bottom Tab Bar (matches actual app) -->
              <div class="md:hidden border-t border-[#E2E8F0]/70 bg-white/95 backdrop-blur-xl px-2 py-1.5">
                <div class="flex items-center justify-around">
                  <button
                    v-for="tab in previewTabs"
                    :key="tab.id"
                    @click="activePreviewTab = tab.id"
                    class="flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-all duration-200"
                    :class="activePreviewTab === tab.id ? 'text-[#2563EB]' : 'text-[#94A3B8]'"
                  >
                    <span class="w-[18px] h-[18px] flex items-center justify-center" v-html="tab.icon"></span>
                    <span class="text-[8px] font-bold mt-0.5">{{ tab.name }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TRUST STATS ===== -->
    <section class="border-y border-[#E2E8F0]/60 bg-white/50">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center">
          <div>
            <div class="font-heading text-[28px] sm:text-[40px] text-[#0F172A] mb-1">4</div>
            <div class="text-[10px] sm:text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest">User Roles</div>
            <div class="text-[10px] sm:text-[12px] text-[#64748B] mt-1">Member, Leader, Instructor, Admin</div>
          </div>
          <div>
            <div class="font-heading text-[28px] sm:text-[40px] text-[#0F172A] mb-1">8</div>
            <div class="text-[10px] sm:text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest">Core Modules</div>
            <div class="text-[10px] sm:text-[12px] text-[#64748B] mt-1">Auth, Workspaces, Tasks, Time, Chat, Analytics, AI, Alerts</div>
          </div>
          <div>
            <div class="font-heading text-[28px] sm:text-[40px] text-[#0F172A] mb-1">&lt;2s</div>
            <div class="text-[10px] sm:text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest">Max Response</div>
            <div class="text-[10px] sm:text-[12px] text-[#64748B] mt-1">All page loads under 2 seconds</div>
          </div>
          <div>
            <div class="font-heading text-[28px] sm:text-[40px] text-[#0F172A] mb-1">99%</div>
            <div class="text-[10px] sm:text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest">Target Uptime</div>
            <div class="text-[10px] sm:text-[12px] text-[#64748B] mt-1">Available 24/7 during semester</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== WHY TEAMTRACK ===== -->
    <section id="why" class="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16 sm:pt-28 pb-14 sm:pb-24">
      <div class="max-w-[640px] mx-auto text-center mb-10 sm:mb-16">
        <span class="inline-block text-[11px] sm:text-[12.5px] font-semibold text-[#2563EB] tracking-tight uppercase mb-3 sm:mb-4">Why TeamTrack</span>
        <h2 class="font-heading text-[26px] sm:text-[40px] lg:text-[48px] leading-[1.1] text-[#0F172A] mb-4 sm:mb-6 tracking-[-0.02em]">
          Built for the realities of <span class="text-[#2563EB]">academic teamwork</span>
        </h2>
        <p class="text-[#64748B] text-[14px] sm:text-[17px] leading-[1.75]">
          Most project tools ignore the realities of student group work — free riders, invisible contributions, and workload imbalances. TeamTrack is designed to solve exactly those problems.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
        <div class="bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-300">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center bg-[#EBF0FF]">
            <svg width="20" height="20" class="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          </div>
          <h3 class="text-[15px] sm:text-[18px] font-bold text-[#0F172A] mb-2 sm:mb-3">Role-Based Access & Privacy</h3>
          <p class="text-[13px] sm:text-[14.5px] text-[#64748B] leading-[1.7]">Four distinct roles — Team Member, Team Leader, Instructor (read-only), and Admin — each with scoped permissions. Instructors can view contribution analytics without editing project data.</p>
        </div>

        <div class="bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-300">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center bg-[#D1FAE5]">
            <svg width="20" height="20" class="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 class="text-[15px] sm:text-[18px] font-bold text-[#0F172A] mb-2 sm:mb-3">Fair Contribution Tracking</h3>
          <p class="text-[13px] sm:text-[14.5px] text-[#64748B] leading-[1.7]">Start/stop timers, manual logs with mandatory descriptions, and immutable timesheets after 24 hours. Contribution analytics show exactly who did what — no disputes, no ambiguity.</p>
        </div>

        <div class="bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-300 sm:col-span-2 md:col-span-1">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center bg-[#FEF3C7]">
            <svg width="20" height="20" class="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 class="text-[15px] sm:text-[18px] font-bold text-[#0F172A] mb-2 sm:mb-3">Transparent AI Assistance</h3>
          <p class="text-[13px] sm:text-[14.5px] text-[#64748B] leading-[1.7]">AI detects workload imbalances and deadline risks, then surfaces labelled System-Generated Suggestions. Humans always approve before any action is taken — no hidden automation.</p>
        </div>
      </div>
    </section>

    <!-- ===== HOW IT WORKS ===== -->
    <section id="workflow" class="border-y border-[#E2E8F0]/60 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-24">
        <div class="max-w-[640px] mx-auto text-center mb-10 sm:mb-16">
          <span class="inline-block text-[11px] sm:text-[12.5px] font-semibold text-[#2563EB] tracking-tight uppercase mb-3 sm:mb-4">How it works</span>
          <h2 class="font-heading text-[26px] sm:text-[40px] lg:text-[48px] leading-[1.1] text-[#0F172A] mb-4 sm:mb-6 tracking-[-0.02em]">
            From signup to insights in <span class="text-[#2563EB]">5 steps</span>
          </h2>
          <p class="text-[#64748B] text-[14px] sm:text-[17px] leading-[1.75]">
            Matching the actual TeamTrack system workflow, from registration to contribution analytics.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          <div class="bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[13px] sm:text-[15px] mx-auto mb-3 sm:mb-4">1</div>
            <h4 class="text-[13px] sm:text-[15px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">Register &amp; Login</h4>
            <p class="text-[11px] sm:text-[13px] text-[#64748B] leading-[1.6]">Sign up with your university email. Activate your account. Secure session with auto-timeout after 60 min idle.</p>
          </div>

          <div class="bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[13px] sm:text-[15px] mx-auto mb-3 sm:mb-4">2</div>
            <h4 class="text-[13px] sm:text-[15px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">Create or Join a Workspace</h4>
            <p class="text-[11px] sm:text-[13px] text-[#64748B] leading-[1.6]">Leaders create projects with a unique join code. Members join and get assigned their role. Instructors get read-only access.</p>
          </div>

          <div class="bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[13px] sm:text-[15px] mx-auto mb-3 sm:mb-4">3</div>
            <h4 class="text-[13px] sm:text-[15px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">Plan &amp; Assign Tasks</h4>
            <p class="text-[11px] sm:text-[13px] text-[#64748B] leading-[1.6]">Kanban or list view. Set priorities, deadlines, dependencies. Flag blocked tasks. Every change is logged in the Activity Log.</p>
          </div>

          <div class="bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[13px] sm:text-[15px] mx-auto mb-3 sm:mb-4">4</div>
            <h4 class="text-[13px] sm:text-[15px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">Log Time &amp; Collaborate</h4>
            <p class="text-[11px] sm:text-[13px] text-[#64748B] leading-[1.6]">Start/stop timers on tasks or submit manual logs. Chat within the project. All time entries become immutable after 24 hours.</p>
          </div>

          <div class="bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center col-span-2 sm:col-span-1">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[13px] sm:text-[15px] mx-auto mb-3 sm:mb-4">5</div>
            <h4 class="text-[13px] sm:text-[15px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">Review Analytics &amp; AI Insights</h4>
            <p class="text-[11px] sm:text-[13px] text-[#64748B] leading-[1.6]">See contribution breakdowns, workload alerts, and deadline risks. AI flags issues before they become problems. All labelled and transparent.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CORE MODULES ===== -->
    <section id="modules" class="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16 sm:pt-28 pb-14 sm:pb-24">
      <div class="max-w-[640px] mx-auto text-center mb-10 sm:mb-16">
        <span class="inline-block text-[11px] sm:text-[12.5px] font-semibold text-[#2563EB] tracking-tight uppercase mb-3 sm:mb-4">Core modules</span>
        <h2 class="font-heading text-[26px] sm:text-[40px] lg:text-[48px] leading-[1.1] text-[#0F172A] mb-4 sm:mb-6 tracking-[-0.02em]">
          8 modules. <span class="text-[#2563EB]">One platform.</span>
        </h2>
        <p class="text-[#64748B] text-[14px] sm:text-[17px] leading-[1.75]">
          Every feature your academic team needs, purpose-built for fair collaboration.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div class="group bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-3 sm:gap-5">
            <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="20" height="20" class="sm:w-[24px] sm:h-[24px] text-[#2563EB] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
            </div>
            <div>
              <h3 class="text-[14px] sm:text-[17px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">Secure Authentication &amp; RBAC</h3>
              <p class="text-[12px] sm:text-[14px] text-[#64748B] leading-[1.7]">University email registration with activation links. Password complexity enforcement. Role-Based Access Control with four roles — Member, Leader, Instructor (read-only), and Admin. Sessions auto-expire after 60 minutes of inactivity.</p>
            </div>
          </div>
        </div>

        <!-- Module 2: Projects -->
        <div class="group bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-3 sm:gap-5">
            <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="20" height="20" class="sm:w-[24px] sm:h-[24px] text-[#2563EB] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
            </div>
            <div>
              <h3 class="text-[14px] sm:text-[17px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">Project Workspaces</h3>
              <p class="text-[12px] sm:text-[14px] text-[#64748B] leading-[1.7]">Create workspaces with unique join codes. Leaders manage members, assign roles, and edit project details. Instructors join with read-only access. Finished projects are archived with all data preserved for academic review.</p>
            </div>
          </div>
        </div>

        <!-- Module 3: Tasks -->
        <div class="group bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-3 sm:gap-5">
            <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="20" height="20" class="sm:w-[24px] sm:h-[24px] text-[#2563EB] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg>
            </div>
            <div>
              <h3 class="text-[14px] sm:text-[17px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">Kanban Task Boards</h3>
              <p class="text-[12px] sm:text-[14px] text-[#64748B] leading-[1.7]">Tasks in Backlog, In Progress, Review, and Done columns. Set priority (Low/Medium/High), deadlines, and dependencies. Flag blocked tasks with reasons. Search tasks by keyword. Dashboard alerts for tasks due within 24 hours.</p>
            </div>
          </div>
        </div>

        <!-- Module 4: Time -->
        <div class="group bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-3 sm:gap-5">
            <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="20" height="20" class="sm:w-[24px] sm:h-[24px] text-[#2563EB] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            <div>
              <h3 class="text-[14px] sm:text-[17px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">Time Tracking &amp; Effort Logging</h3>
              <p class="text-[12px] sm:text-[14px] text-[#64748B] leading-[1.7]">Start/stop timers on assigned tasks. Submit manual logs for offline work with required descriptions (min 10 characters). Personal and team timesheets. Logs become immutable after 24 hours to protect analytics integrity. Only one active timer at a time.</p>
            </div>
          </div>
        </div>

        <!-- Module 5: Chat -->
        <div class="group bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-3 sm:gap-5">
            <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="20" height="20" class="sm:w-[24px] sm:h-[24px] text-[#2563EB] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
            </div>
            <div>
              <h3 class="text-[14px] sm:text-[17px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">Team Chat &amp; Communication</h3>
              <p class="text-[12px] sm:text-[14px] text-[#64748B] leading-[1.7]">Project-scoped messaging with persistent history. Messages show sender name and timestamp. Content is sanitised for security. Only project members can access the chat. Task-level comments provide context-specific discussion.</p>
            </div>
          </div>
        </div>

        <!-- Module 6: Analytics -->
        <div class="group bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-3 sm:gap-5">
            <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="20" height="20" class="sm:w-[24px] sm:h-[24px] text-[#2563EB] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
            </div>
            <div>
              <h3 class="text-[14px] sm:text-[17px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">Contribution Analytics Dashboard</h3>
              <p class="text-[12px] sm:text-[14px] text-[#64748B] leading-[1.7]">Visual summaries of time spent, task completion, and activity per member. Comparative indicators show each person relative to the team average. Workload imbalance is highlighted automatically. Leaders and instructors can export reports.</p>
            </div>
          </div>
        </div>

        <!-- Module 7: AI -->
        <div class="group bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-3 sm:gap-5">
            <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="20" height="20" class="sm:w-[24px] sm:h-[24px] text-[#2563EB] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
            </div>
            <div>
              <h3 class="text-[14px] sm:text-[17px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">AI-Driven Project Assistant</h3>
              <p class="text-[12px] sm:text-[14px] text-[#64748B] leading-[1.7]">Natural language queries about deadlines, progress, and activity. Workload Variance Score and Deadline Risk Probability calculated automatically. Smart task assignment suggestions. Inactivity alerts after 72 hours. All suggestions labelled as System-Generated and require human approval.</p>
            </div>
          </div>
        </div>

        <!-- Module 8: Notifications -->
        <div class="group bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_44px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-[2px] transition-all duration-300">
          <div class="flex items-start gap-3 sm:gap-5">
            <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#EBF0FF] group-hover:bg-[#2563EB] flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="20" height="20" class="sm:w-[24px] sm:h-[24px] text-[#2563EB] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
            </div>
            <div>
              <h3 class="text-[14px] sm:text-[17px] font-bold text-[#0F172A] mb-1.5 sm:mb-2">Smart Notifications &amp; Reminders</h3>
              <p class="text-[12px] sm:text-[14px] text-[#64748B] leading-[1.7]">Priority-based alerting with escalation for urgent deadline warnings. Actionable vs. passive notifications are separated. Low-priority updates are batched into weekly email digests. Deep linking takes you directly to the relevant task or chat. @mentions bypass Do Not Disturb.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== NFR / TRUST SECTION ===== -->
    <section id="trust" class="border-y border-[#E2E8F0]/60 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-24">
        <div class="max-w-[640px] mx-auto text-center mb-10 sm:mb-14">
          <span class="inline-block text-[11px] sm:text-[12.5px] font-semibold text-[#2563EB] tracking-tight uppercase mb-3 sm:mb-4">Engineered for trust</span>
          <h2 class="font-heading text-[26px] sm:text-[40px] lg:text-[48px] leading-[1.1] text-[#0F172A] mb-4 sm:mb-6 tracking-[-0.02em]">Security. Performance. Usability.</h2>
          <p class="text-[#64748B] text-[14px] sm:text-[17px] leading-[1.75]">Non-functional requirements that make TeamTrack reliable, fast, and safe for academic use.</p>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          <div class="bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)]">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl mb-4 sm:mb-5 flex items-center justify-center bg-[#FEE2E2]">
              <svg width="20" height="20" class="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
            </div>
            <h3 class="text-[15px] sm:text-[18px] font-bold text-[#0F172A] mb-2 sm:mb-3">Security</h3>
            <ul class="space-y-2 sm:space-y-3 text-[12px] sm:text-[14px] text-[#64748B] leading-[1.6]">
              <li class="flex items-start gap-2 sm:gap-2.5"><span class="text-[#10B981] text-[14px] sm:text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Encrypted data in transit and at rest</li>
              <li class="flex items-start gap-2 sm:gap-2.5"><span class="text-[#10B981] text-[14px] sm:text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Role-Based Access Control (4 roles)</li>
              <li class="flex items-start gap-2 sm:gap-2.5"><span class="text-[#10B981] text-[14px] sm:text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Input sanitisation &amp; session timeouts</li>
              <li class="flex items-start gap-2 sm:gap-2.5"><span class="text-[#10B981] text-[14px] sm:text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Immutable audit trail for all actions</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)]">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl mb-4 sm:mb-5 flex items-center justify-center bg-[#DBEAFE]">
              <svg width="20" height="20" class="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-7l1-8z" /></svg>
            </div>
            <h3 class="text-[15px] sm:text-[18px] font-bold text-[#0F172A] mb-2 sm:mb-3">Performance</h3>
            <ul class="space-y-2 sm:space-y-3 text-[12px] sm:text-[14px] text-[#64748B] leading-[1.6]">
              <li class="flex items-start gap-2 sm:gap-2.5"><span class="text-[#10B981] text-[14px] sm:text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Page loads under 2 seconds</li>
              <li class="flex items-start gap-2 sm:gap-2.5"><span class="text-[#10B981] text-[14px] sm:text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> 30+ concurrent users supported</li>
              <li class="flex items-start gap-2 sm:gap-2.5"><span class="text-[#10B981] text-[14px] sm:text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Chat messages delivered in 1&ndash;2 seconds</li>
              <li class="flex items-start gap-2 sm:gap-2.5"><span class="text-[#10B981] text-[14px] sm:text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Analytics dashboard loads within 3 seconds</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 p-5 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] sm:col-span-2 md:col-span-1">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl mb-4 sm:mb-5 flex items-center justify-center bg-[#D1FAE5]">
              <svg width="20" height="20" class="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M9 12l2 2 4-4" /></svg>
            </div>
            <h3 class="text-[15px] sm:text-[18px] font-bold text-[#0F172A] mb-2 sm:mb-3">Usability</h3>
            <ul class="space-y-2 sm:space-y-3 text-[12px] sm:text-[14px] text-[#64748B] leading-[1.6]">
              <li class="flex items-start gap-2 sm:gap-2.5"><span class="text-[#10B981] text-[14px] sm:text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Consistent design across all pages</li>
              <li class="flex items-start gap-2 sm:gap-2.5"><span class="text-[#10B981] text-[14px] sm:text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Task creation in under 1 minute</li>
              <li class="flex items-start gap-2 sm:gap-2.5"><span class="text-[#10B981] text-[14px] sm:text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> Clear feedback for every user action</li>
              <li class="flex items-start gap-2 sm:gap-2.5"><span class="text-[#10B981] text-[14px] sm:text-[16px] leading-[1.4] mt-[1px]">&#10003;</span> WCAG basic accessibility compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ACTIVITY LOG / AUDIT TRAIL SECTION ===== -->
    <section class="max-w-[1200px] mx-auto px-4 sm:px-6 pt-14 sm:pt-24 pb-10 sm:pb-16">
      <div class="grid sm:grid-cols-2 gap-8 sm:gap-16 items-center">
        <div>
          <span class="inline-block text-[11px] sm:text-[12.5px] font-semibold text-[#2563EB] tracking-tight uppercase mb-3 sm:mb-4">Full traceability</span>
          <h2 class="font-heading text-[22px] sm:text-[36px] leading-[1.15] text-[#0F172A] mb-4 sm:mb-6 tracking-[-0.02em]">Every action.<br /><span class="text-[#2563EB]">Logged. Immutable. Auditable.</span></h2>
          <p class="text-[#64748B] text-[13px] sm:text-[16px] leading-[1.75] mb-6 sm:mb-8">
            The Activity Log records every CRUD operation with Before/After states, actor identity, and timestamps. No one — not even Admins — can modify or delete audit entries. Instructors can export the complete trail as a timestamped PDF or CSV for grading.
          </p>
          <div class="space-y-3 sm:space-y-4">
            <div class="flex items-start gap-2.5 sm:gap-3">
              <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#D1FAE5] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="10" height="10" class="sm:w-[12px] sm:h-[12px]" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <div>
                <p class="text-[13px] sm:text-[14px] font-semibold text-[#0F172A]">Version control on text fields</p>
                <p class="text-[12px] sm:text-[13px] text-[#64748B]">See older versions of task descriptions to retrieve overwritten information.</p>
              </div>
            </div>
            <div class="flex items-start gap-2.5 sm:gap-3">
              <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#D1FAE5] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="10" height="10" class="sm:w-[12px] sm:h-[12px]" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <div>
                <p class="text-[13px] sm:text-[14px] font-semibold text-[#0F172A]">Post-completion edit flagging</p>
                <p class="text-[12px] sm:text-[13px] text-[#64748B]">Edits to tasks after completion are flagged — Team Leaders are warned of potential revision.</p>
              </div>
            </div>
            <div class="flex items-start gap-2.5 sm:gap-3">
              <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#D1FAE5] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="10" height="10" class="sm:w-[12px] sm:h-[12px]" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <div>
                <p class="text-[13px] sm:text-[14px] font-semibold text-[#0F172A]">Data retention for at least one academic year</p>
                <p class="text-[12px] sm:text-[13px] text-[#64748B]">Activity logs are retained for the full academic cycle and available for grade audits.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Audit log visual mockup -->
        <div class="bg-white rounded-2xl sm:rounded-[24px] border border-[#E2E8F0]/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden">
          <div class="px-4 sm:px-6 py-3 sm:py-4 border-b border-[#F1F5F9] flex items-center gap-2 sm:gap-3">
            <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#EBF0FF] flex items-center justify-center">
              <svg width="14" height="14" class="sm:w-[16px] sm:h-[16px]" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="2" /></svg>
            </div>
            <span class="text-[12px] sm:text-[14px] font-bold text-[#0F172A]">Activity Log &amp; Audit Trail</span>
          </div>
          <div class="p-3 sm:p-5 space-y-2 sm:space-y-3">
            <div class="flex items-start gap-2 sm:gap-3 py-2 sm:py-3 border-b border-[#F1F5F9]">
              <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-[9px] sm:text-[10px] font-bold text-green-600 mt-0.5">+</div>
              <div>
                <p class="text-[12px] sm:text-[13px] font-semibold text-[#0F172A]">Task created: "Design ER diagram"</p>
                <p class="text-[10px] sm:text-[11px] text-[#94A3B8]">by Maria &middot; Mar 10, 2026 09:14 AM &middot; IP logged</p>
              </div>
            </div>
            <div class="flex items-start gap-2 sm:gap-3 py-2 sm:py-3 border-b border-[#F1F5F9]">
              <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-[9px] sm:text-[10px] font-bold text-blue-600 mt-0.5">&#9998;</div>
              <div>
                <p class="text-[12px] sm:text-[13px] font-semibold text-[#0F172A]">Status changed: In Progress &rarr; Review</p>
                <p class="text-[10px] sm:text-[11px] text-[#94A3B8]">by Siraj &middot; Mar 11, 2026 02:30 PM &middot; Before/After recorded</p>
              </div>
            </div>
            <div class="flex items-start gap-2 sm:gap-3 py-2 sm:py-3 border-b border-[#F1F5F9]">
              <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-[9px] sm:text-[10px] font-bold text-amber-600 mt-0.5">&#9888;</div>
              <div>
                <p class="text-[12px] sm:text-[13px] font-semibold text-[#0F172A]">Post-completion edit flagged: task "Auth setup"</p>
                <p class="text-[10px] sm:text-[11px] text-[#94A3B8]">by Omar &middot; Mar 12, 2026 11:58 AM &middot; Leader notified</p>
              </div>
            </div>
            <div class="flex items-start gap-2 sm:gap-3 py-2 sm:py-3">
              <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-[9px] sm:text-[10px] font-bold text-purple-600 mt-0.5">&#8635;</div>
              <div>
                <p class="text-[12px] sm:text-[13px] font-semibold text-[#0F172A]">Role changed: Member &rarr; Leader</p>
                <p class="text-[10px] sm:text-[11px] text-[#94A3B8]">by Siraj &middot; Mar 8, 2026 04:10 PM &middot; Role-change logged</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FINAL CTA ===== -->
    <section class="max-w-[1200px] mx-auto px-4 sm:px-6 pb-16 sm:pb-28">
      <div class="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-2xl sm:rounded-[28px] px-5 sm:px-8 py-10 sm:py-16 text-white text-center">
        <h2 class="font-heading text-[22px] sm:text-[32px] lg:text-[42px] leading-[1.1] mb-3 sm:mb-4">Ready to make every contribution count?</h2>
        <p class="text-blue-100 text-[13px] sm:text-[17px] leading-[1.7] mb-6 sm:mb-8 max-w-[540px] mx-auto">
          From task boards and time tracking to AI-powered insights and contribution analytics — TeamTrack keeps academic teams fair, transparent, and on schedule.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <NuxtLink to="/signup" class="inline-flex items-center bg-white text-[#2563EB] text-[14px] sm:text-[16px] font-bold px-7 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0">
            Create Your Free Team
            <svg class="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </NuxtLink>
          <span class="text-blue-200 text-[11px] sm:text-[13px]">4 roles &middot; 8 modules &middot; Fair by design.</span>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const activePreviewTab = ref('dashboard')

const previewTabs = [
  { id: 'dashboard', name: 'Dashboard', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>' },
  { id: 'projects', name: 'Projects', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>' },
  { id: 'tasks', name: 'Tasks', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>' },
  { id: 'team', name: 'Team', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>' },
  { id: 'chat', name: 'Chat', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>' }
]

const previewStats = [
  { label: 'Projects', value: '12', caption: 'active', badge: '+12%', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>', bg: 'bg-[#EFF6FF]', glow: 'bg-[#DBEAFE]', badgeClass: 'bg-green-50 text-green-600' },
  { label: 'Tasks Done', value: '84', caption: 'sprint', badge: '+8%', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>', bg: 'bg-[#ECFDF5]', glow: 'bg-[#BBF7D0]', badgeClass: 'bg-green-50 text-green-600' },
  { label: 'Team Members', value: '16', caption: 'online', badge: '+4', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>', bg: 'bg-[#FFFBEB]', glow: 'bg-[#FDE68A]', badgeClass: 'bg-amber-50 text-amber-600' },
  { label: 'Tracked Hours', value: '18h', caption: 'today', badge: 'Today', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>', bg: 'bg-[#F5F3FF]', glow: 'bg-[#DDD6FE]', badgeClass: 'bg-purple-50 text-purple-600' }
]

const previewBars = [
  { day: 'Mon', value: '62', height: 62 },
  { day: 'Tue', value: '74', height: 74 },
  { day: 'Wed', value: '58', height: 58 },
  { day: 'Thu', value: '86', height: 86 },
  { day: 'Fri', value: '91', height: 91 },
  { day: 'Sat', value: '68', height: 68 },
  { day: 'Sun', value: '79', height: 79 }
]

const previewProjects = [
  { name: 'TeamTrack Frontend', description: 'Dashboard redesign and responsive UI.', progress: 72, status: 'Active', statusClass: 'bg-green-100 text-green-600', members: ['S', 'A', 'M'] },
  { name: 'Authentication Flow', description: 'Login, signup, and session handling.', progress: 54, status: 'In Review', statusClass: 'bg-blue-100 text-blue-600', members: ['S', 'A'] }
]

const memberColors = {
  S: 'bg-[#2563EB]',
  A: 'bg-[#059669]',
  M: 'bg-[#D97706]',
  Z: 'bg-[#7C3AED]',
  O: 'bg-[#F87171]'
}

const previewColumns = [
  { id: 'backlog', title: 'Backlog', dotClass: 'bg-[#64748B]', tasks: ['Design ER diagram', 'Setup auth module'] },
  { id: 'in-progress', title: 'In Progress', dotClass: 'bg-[#2563EB]', tasks: ['Analytics dashboard', 'Chat interface'] },
  { id: 'review', title: 'Review', dotClass: 'bg-[#F59E0B]', tasks: ['Auth & RBAC setup'] },
  { id: 'done', title: 'Done', dotClass: 'bg-[#10B981]', tasks: ['Project setup', 'Kanban board'] }
]

const previewTeamMembers = [
  { name: 'Member 1', initial: 'M1', color: '#2563EB', role: 'Leader', roleBadge: 'bg-[#EBF0FF] text-[#2563EB]', tasksAssigned: 12, tasksCompleted: 8, contribution: 85 },
  { name: 'Member 2', initial: 'M2', color: '#34D399', role: 'Member', roleBadge: 'bg-[#DCFCE7] text-[#10B981]', tasksAssigned: 10, tasksCompleted: 7, contribution: 72 },
  { name: 'Member 3', initial: 'M3', color: '#F87171', role: 'Member', roleBadge: 'bg-[#DCFCE7] text-[#10B981]', tasksAssigned: 9, tasksCompleted: 5, contribution: 58 },
  { name: 'Member 4', initial: 'M4', color: '#FBBF24', role: 'Member', roleBadge: 'bg-[#DCFCE7] text-[#10B981]', tasksAssigned: 8, tasksCompleted: 4, contribution: 45 }
]

const previewThreads = [
  { id: 1, name: 'TeamTrack FE', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>', mobileIcon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>', iconBg: 'bg-[#EBF0FF]', activeBg: 'bg-[#2563EB]', time: '10:24 AM', active: true, preview: 'Dashboard timer and recent time logs are aligned.', unread: 2 },
  { id: 2, name: 'Dashboard UI', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3L2 6"/><path d="M22 6l-3-3"/></svg>', mobileIcon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3L2 6"/><path d="M22 6l-3-3"/></svg>', iconBg: 'bg-[#F3E8FF]', activeBg: 'bg-[#7C3AED]', time: '11:10 AM', active: false, preview: 'Yes, keep the timer. Time tracking is core.', unread: 0 },
  { id: 3, name: 'AI Assistant', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>', mobileIcon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>', iconBg: 'bg-[#DCFCE7]', activeBg: 'bg-[#10B981]', time: 'Yesterday', active: false, preview: 'Your team is 18% more productive this week.', unread: 1 },
  { id: 4, name: 'Analytics', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>', mobileIcon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>', iconBg: 'bg-[#FEF3C7]', activeBg: 'bg-[#F59E0B]', time: 'Monday', active: false, preview: 'Contribution report is ready for review.', unread: 0 }
]
</script>