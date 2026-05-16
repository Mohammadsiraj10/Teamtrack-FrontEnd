<template>
  <div class="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#EEF2FF] flex overflow-hidden">

    <!-- ===== SIDEBAR ===== -->
    <aside class="w-[280px] bg-white/95 backdrop-blur-xl border-r border-[#E2E8F0] hidden lg:flex flex-col">

      <!-- Logo -->
      <div class="px-6 py-6 border-b border-[#F1F5F9]">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1E40AF] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/20">
            T
          </div>

          <div>
            <h1 class="font-black text-[19px] text-[#0F172A] tracking-tight">
              TeamTrack
            </h1>
            <p class="text-[12px] text-[#94A3B8] font-medium">
              AI Team Workspace
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-4 py-6 space-y-2">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          class="flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-[14px] transition-all duration-200"
          :class="item.active
            ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/20'
            : 'text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]'"
        >
          <span class="w-6 h-6 flex items-center justify-center" v-html="item.icon"></span>
          {{ item.name }}
        </NuxtLink>
      </nav>

      <!-- Mini Sprint Card -->
      <div class="px-4 pb-4">
        <div class="rounded-3xl bg-gradient-to-br from-[#EFF6FF] to-[#EEF2FF] border border-[#DBEAFE] p-5">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></div>

            <span class="text-[11px] font-black text-[#2563EB] bg-white px-3 py-1 rounded-full">
              LIVE
            </span>
          </div>

          <h3 class="text-[14px] font-black text-[#0F172A] mb-2">
            Sprint Progress
          </h3>

          <div class="w-full bg-white rounded-full h-2 overflow-hidden mb-2">
            <div class="h-2 bg-[#2563EB] rounded-full" style="width: 72%"></div>
          </div>

          <p class="text-[12px] text-[#64748B]">
            72% complete this week
          </p>
        </div>
      </div>

      <!-- Bottom -->
      <div class="p-4 border-t border-[#F1F5F9]">
        <div class="bg-[#F8FAFC] rounded-3xl p-4 mb-4 border border-[#E2E8F0]">
          <div class="flex items-center gap-3">
            <div class="relative">
              <div class="w-11 h-11 rounded-2xl bg-[#2563EB] flex items-center justify-center text-white font-black">
                S
              </div>
              <span class="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            <div>
              <h3 class="font-bold text-[14px] text-[#0F172A]">
                Siraj
              </h3>
              <p class="text-[12px] text-[#94A3B8]">
                Team Leader
              </p>
            </div>
          </div>
        </div>

        <button
          @click="logout"
          class="w-full bg-red-50 hover:bg-red-100 text-red-500 font-bold py-3 rounded-2xl transition"
        >
          Logout
        </button>
      </div>
    </aside>

    <!-- ===== MAIN ===== -->
    <main class="flex-1 overflow-y-auto">

      <!-- Topbar -->
      <header class="bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] px-8 py-5 flex items-center justify-between sticky top-0 z-40">

        <div>
          <div class="flex items-center gap-3 mb-1">
            <h2 class="text-[30px] font-black tracking-tight text-[#0F172A]">
              Dashboard
            </h2>

            <span class="bg-[#ECFDF5] text-[#059669] border border-[#BBF7D0] text-[12px] font-black px-3 py-1 rounded-full">
              Active Sprint
            </span>
          </div>

          <p class="text-[14px] text-[#64748B]">
            Welcome back, Siraj. Here is your team performance overview.
          </p>
        </div>

        <div class="flex items-center gap-4">

          <!-- Search -->
          <div class="hidden xl:flex items-center gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-4 py-3 w-[330px]">
            <span class="w-4 h-4 text-[#94A3B8]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></span>

            <input
              type="text"
              placeholder="Search projects, tasks, members..."
              class="w-full bg-transparent text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] outline-none"
            />
          </div>

          <!-- Notification -->
          <div class="relative">
            <button
              @click="showNotifications = !showNotifications"
              class="relative w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center hover:bg-[#EFF6FF] hover:border-[#BFDBFE] transition"
              aria-label="Notifications"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>

              <span
                v-if="notifications.length > 0"
                class="absolute -top-2 -right-2 min-w-[23px] h-[23px] bg-red-500 text-white text-[11px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-lg shadow-red-500/30"
              >
                {{ notifications.length }}
              </span>
            </button>

            <!-- Notification Dropdown -->
            <div
              v-if="showNotifications"
              class="absolute right-0 mt-3 w-[360px] bg-white border border-[#E2E8F0] rounded-3xl shadow-2xl shadow-slate-900/10 z-50 overflow-hidden"
            >
              <div class="px-5 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <h3 class="font-black text-[#0F172A] text-[17px]">
                    Notifications
                  </h3>
                  <p class="text-[12px] text-[#94A3B8]">
                    {{ notifications.length }} new workspace updates
                  </p>
                </div>

                <button
                  v-if="notifications.length > 0"
                  @click="clearNotifications"
                  class="text-[12px] font-bold text-[#2563EB] hover:underline"
                >
                  Clear
                </button>
              </div>

              <div
                v-if="notifications.length > 0"
                class="max-h-[300px] overflow-y-auto"
              >
                <div
                  v-for="notification in notifications"
                  :key="notification.id"
                  class="px-5 py-4 border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition"
                >
                  <div class="flex gap-3">
                    <div
                       class="w-10 h-10 rounded-2xl flex items-center justify-center"
                       :class="notification.bg"
                     >
                       <span v-html="notification.icon"></span>
                    </div>

                    <div>
                      <h4 class="text-[14px] font-black text-[#0F172A]">
                        {{ notification.title }}
                      </h4>
                      <p class="text-[12px] text-[#64748B] mt-1 leading-[1.6]">
                        {{ notification.message }}
                      </p>
                      <p class="text-[11px] text-[#94A3B8] mt-2">
                        {{ notification.time }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-else
                class="px-5 py-8 text-center"
              >
                <div class="text-[28px] mb-2"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/><line x1="1" y1="1" x2="23" y2="23"/></svg></div>
                <p class="text-[14px] font-black text-[#0F172A]">
                  No notifications
                </p>
                <p class="text-[12px] text-[#94A3B8] mt-1">
                  You are all caught up.
                </p>
              </div>

              <NuxtLink
                to="/tasks"
                class="block w-full py-3 text-center text-[13px] font-black text-[#2563EB] hover:bg-[#EFF6FF] transition"
              >
                View all updates
              </NuxtLink>
            </div>
          </div>

          <!-- User -->
          <div class="flex items-center gap-3">
            <div class="text-right hidden sm:block">
              <p class="text-[14px] font-black text-[#0F172A]">
                Siraj
              </p>
              <p class="text-[12px] text-[#94A3B8]">
                Admin
              </p>
            </div>

            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1E40AF] flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/20">
              S
            </div>
          </div>
        </div>
      </header>

      <!-- BODY -->
      <div class="p-8">

        <!-- ===== STATS ===== -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="relative overflow-hidden bg-white rounded-[28px] p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300"
          >
            <div
              class="absolute -right-8 -top-8 w-28 h-28 rounded-full opacity-70"
              :class="stat.glow"
            ></div>

            <div class="relative flex items-center justify-between mb-6">
              <div
                class="w-12 h-12 rounded-2xl flex items-center justify-center"
                :class="stat.bg"
              >
                <span v-html="stat.icon"></span>
              </div>

              <span
                class="text-[12px] font-black px-2.5 py-1 rounded-full"
                :class="stat.badgeClass"
              >
                {{ stat.badge }}
              </span>
            </div>

            <p class="relative text-[14px] text-[#64748B] font-semibold mb-1">
              {{ stat.label }}
            </p>

            <div class="relative flex items-end gap-2">
              <h3 class="text-[34px] font-black tracking-tight text-[#0F172A]">
                {{ stat.value }}
              </h3>
              <p class="text-[12px] text-[#94A3B8] font-semibold mb-2">
                {{ stat.caption }}
              </p>
            </div>
          </div>
        </div>

        <!-- ===== MAIN GRID ===== -->
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">

          <!-- LEFT -->
          <div class="xl:col-span-2 space-y-8">

            <!-- Timer + Performance -->
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">

              <!-- Timer -->
              <div class="lg:col-span-2 bg-white rounded-[30px] border border-[#E2E8F0] p-6 shadow-sm">
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <h3 class="text-[20px] font-black text-[#0F172A]">
                      Time Tracker
                    </h3>
                    <p class="text-[13px] text-[#64748B] mt-1">
                      Track work sessions.
                    </p>
                  </div>

                  <div class="w-11 h-11 rounded-2xl bg-[#EFF6FF] flex items-center justify-center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3L2 6"/><path d="M22 6l-3-3"/></svg></div>
                </div>

                <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-5 mb-5">
                  <p class="text-[12px] font-bold text-[#94A3B8] mb-1">
                    Current Task
                  </p>
                  <h4 class="text-[15px] font-black text-[#0F172A]">
                    Dashboard UI in Progress
                  </h4>
                </div>

                <div class="text-center bg-[#0F172A] rounded-3xl p-6 mb-5">
                  <p class="text-[12px] text-[#94A3B8] font-bold mb-2">
                    Current Session
                  </p>
                  <div class="text-[38px] font-black text-white tracking-tight">
                    {{ formattedTimer }}
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-3">
                  <button
                    @click="startTimer"
                    :disabled="timerRunning"
                    class="bg-[#2563EB] hover:bg-[#1E40AF] disabled:opacity-50 disabled:cursor-not-allowed text-white text-[13px] font-black py-3 rounded-2xl transition"
                  >
                    Start
                  </button>

                  <button
                    @click="pauseTimer"
                    :disabled="!timerRunning"
                    class="bg-[#FEF3C7] hover:bg-[#FDE68A] disabled:opacity-50 disabled:cursor-not-allowed text-[#92400E] text-[13px] font-black py-3 rounded-2xl transition"
                  >
                    Pause
                  </button>

                  <button
                    @click="resetTimer"
                    class="bg-red-50 hover:bg-red-100 text-red-500 text-[13px] font-black py-3 rounded-2xl transition"
                  >
                    Stop
                  </button>
                </div>
              </div>

              <!-- Performance Chart -->
              <div class="lg:col-span-3 bg-white rounded-[30px] border border-[#E2E8F0] p-6 shadow-sm">
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <h3 class="text-[20px] font-black text-[#0F172A]">
                      Sprint Performance
                    </h3>
                    <p class="text-[13px] text-[#64748B] mt-1">
                      Weekly task delivery overview.
                    </p>
                  </div>

                  <span class="text-[12px] font-black text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1.5 rounded-full">
                    Week 4
                  </span>
                </div>

                <div class="h-[220px] flex items-end gap-4 px-2">
                  <div
                    v-for="bar in performanceBars"
                    :key="bar.day"
                    class="flex-1 flex flex-col items-center gap-3"
                  >
                    <div class="w-full h-[170px] bg-[#F1F5F9] rounded-2xl flex items-end overflow-hidden">
                      <div
                        class="w-full rounded-2xl bg-gradient-to-t from-[#2563EB] to-[#60A5FA]"
                        :style="{ height: bar.height + '%' }"
                      ></div>
                    </div>

                    <div class="text-center">
                      <p class="text-[12px] font-black text-[#0F172A]">
                        {{ bar.value }}
                      </p>
                      <p class="text-[11px] text-[#94A3B8] font-semibold">
                        {{ bar.day }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Active Projects -->
            <div class="bg-white rounded-[30px] border border-[#E2E8F0] p-6 shadow-sm">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-[20px] font-black text-[#0F172A]">
                    Active Projects
                  </h3>
                  <p class="text-[13px] text-[#64748B] mt-1">
                    Current running projects and progress.
                  </p>
                </div>

                <NuxtLink
                  to="/projects"
                  class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[14px] font-black px-5 py-3 rounded-2xl transition shadow-lg shadow-blue-500/20"
                >
                  View Projects
                </NuxtLink>
              </div>

              <div class="space-y-5">
                <div
                  v-for="project in projects"
                  :key="project.name"
                  class="border border-[#E2E8F0] rounded-3xl p-5 hover:border-[#BFDBFE] hover:shadow-lg hover:shadow-slate-900/5 transition-all"
                >
                  <div class="flex items-center justify-between mb-5">
                    <div>
                      <div class="flex items-center gap-3">
                        <h4 class="font-black text-[#0F172A]">
                          {{ project.name }}
                        </h4>
                        <span
                          class="text-[11px] font-black px-2.5 py-1 rounded-full"
                          :class="project.statusClass"
                        >
                          {{ project.status }}
                        </span>
                      </div>

                      <p class="text-[13px] text-[#64748B] mt-1">
                        {{ project.description }}
                      </p>
                    </div>

                    <div class="text-right">
                      <p class="text-[22px] font-black text-[#0F172A]">
                        {{ project.progress }}%
                      </p>
                      <p class="text-[11px] text-[#94A3B8] font-semibold">
                        Complete
                      </p>
                    </div>
                  </div>

                  <div class="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden mb-4">
                    <div
                      class="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] h-2.5 rounded-full"
                      :style="{ width: project.progress + '%' }"
                    ></div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex -space-x-2">
                      <div
                        v-for="member in project.members"
                        :key="member"
                        class="w-9 h-9 rounded-2xl border-2 border-white text-white text-[11px] font-black flex items-center justify-center"
                        :class="memberColors[member] || 'bg-[#64748B]'"
                      >
                        {{ member }}
                      </div>
                    </div>

                    <span class="text-[12px] text-[#64748B] font-bold">
                      Due {{ project.due }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Tasks -->
            <div class="bg-white rounded-[30px] border border-[#E2E8F0] p-6 shadow-sm">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-[20px] font-black text-[#0F172A]">
                    Recent Tasks
                  </h3>
                  <p class="text-[13px] text-[#64748B] mt-1">
                    Latest task movements from your workspace.
                  </p>
                </div>
              </div>

              <div class="space-y-4">
                <div
                  v-for="task in recentTasks"
                  :key="task.title"
                  class="flex items-center justify-between bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4"
                >
                  <div class="flex items-center gap-4">
                    <div
                       class="w-11 h-11 rounded-2xl flex items-center justify-center"
                       :class="task.bg"
                     >
                       <span v-html="task.icon"></span>
                    </div>

                    <div>
                      <h4 class="font-black text-[#0F172A] text-[14px]">
                        {{ task.title }}
                      </h4>
                      <p class="text-[13px] text-[#64748B] mt-0.5">
                        {{ task.meta }}
                      </p>
                    </div>
                  </div>

                  <span class="text-[12px] text-[#94A3B8] font-bold">
                    {{ task.time }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT -->
          <div class="space-y-8">

            <!-- AI Insight -->
            <div class="relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-[30px] p-6 text-white shadow-xl shadow-blue-500/20">
              <div class="absolute -right-14 -top-14 w-40 h-40 rounded-full bg-white/10 blur-xl"></div>

              <div class="relative flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-2xl bg-white/20 border border-white/10 flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>

                <div>
                  <h3 class="font-black text-[19px]">
                    Team AI
                  </h3>
                  <p class="text-blue-100 text-[13px]">
                    Smart productivity insights
                  </p>
                </div>
              </div>

              <div class="relative space-y-4">
                <div class="bg-white/10 border border-white/10 rounded-3xl p-4">
                  <p class="text-[12px] text-blue-100 font-black mb-2">
                    PRODUCTIVITY
                  </p>
                  <p class="text-[14px] leading-[1.7] text-blue-50">
                    Your team is currently 18% more productive this week.
                  </p>
                </div>

                <div class="bg-white/10 border border-white/10 rounded-3xl p-4">
                  <p class="text-[12px] text-blue-100 font-black mb-2">
                    RECOMMENDATION
                  </p>
                  <p class="text-[14px] leading-[1.7] text-blue-50">
                    One task is taking longer than expected. Consider reviewing workload balance.
                  </p>
                </div>
              </div>
            </div>

            <!-- Workload Balance -->
            <div class="bg-white rounded-[30px] border border-[#E2E8F0] p-6 shadow-sm">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-[20px] font-black text-[#0F172A]">
                    Workload Balance
                  </h3>
                  <p class="text-[13px] text-[#64748B] mt-1">
                    Team contribution distribution.
                  </p>
                </div>

                <span class="text-[12px] bg-[#ECFDF5] text-[#059669] font-black px-3 py-1 rounded-full">
                  Balanced
                </span>
              </div>

              <div class="space-y-5">
                <div
                  v-for="member in workload"
                  :key="member.name"
                >
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-8 h-8 rounded-xl text-white text-[11px] font-black flex items-center justify-center"
                        :class="member.color"
                      >
                        {{ member.initial }}
                      </div>
                      <p class="text-[13px] font-black text-[#0F172A]">
                        {{ member.name }}
                      </p>
                    </div>

                    <span class="text-[12px] font-black text-[#64748B]">
                      {{ member.value }}%
                    </span>
                  </div>

                  <div class="h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                    <div
                      class="h-2.5 rounded-full"
                      :class="member.color"
                      :style="{ width: member.value + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Time Logs -->
            <div class="bg-white rounded-[30px] border border-[#E2E8F0] p-6 shadow-sm">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-[20px] font-black text-[#0F172A]">
                    Recent Time Logs
                  </h3>
                  <p class="text-[13px] text-[#64748B] mt-1">
                    Latest tracked sessions.
                  </p>
                </div>

                <span class="text-[12px] bg-[#EFF6FF] text-[#2563EB] font-black px-3 py-1 rounded-full">
                  Today
                </span>
              </div>

              <div class="space-y-4">
                <div
                  v-for="log in timeLogs"
                  :key="log.title"
                  class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4"
                >
                  <div class="flex items-center justify-between mb-1">
                    <h4 class="text-[14px] font-black text-[#0F172A]">
                      {{ log.title }}
                    </h4>
                    <span class="text-[13px] font-black text-[#2563EB]">
                      {{ log.duration }}
                    </span>
                  </div>

                  <p class="text-[12px] text-[#94A3B8] font-semibold">
                    Logged by {{ log.owner }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Team Chat -->
            <div class="bg-white rounded-[30px] border border-[#E2E8F0] p-6 shadow-sm">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-[20px] font-black text-[#0F172A]">
                    Team Chat
                  </h3>
                  <p class="text-[13px] text-[#64748B] mt-1">
                    Latest message preview.
                  </p>
                </div>

                <span class="text-[12px] bg-green-100 text-green-600 font-black px-3 py-1 rounded-full">
                  3 online
                </span>
              </div>

              <div class="flex gap-3 mb-5">
                <div class="w-10 h-10 rounded-2xl bg-[#2563EB] text-white text-[12px] font-black flex items-center justify-center">
                  A
                </div>

                <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4 flex-1">
                  <div class="flex items-center justify-between mb-1">
                    <h4 class="font-black text-[14px] text-[#0F172A]">
                      Alex
                    </h4>

                    <span class="text-[11px] text-[#94A3B8] font-semibold">
                      10:24 AM
                    </span>
                  </div>

                  <p class="text-[13px] text-[#475569] leading-[1.6]">
                    API integration is done 🚀
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <input
                  v-model="chatMessage"
                  type="text"
                  maxlength="200"
                  placeholder="Send a message..."
                  class="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]"
                />

                <button
                  @click="sendMessage"
                  class="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-5 py-3 rounded-2xl font-black transition"
                >
                  Send
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: false
})

const router = useRouter()

const navigation = [
  {
    name: 'Dashboard',
    to: '/dashboard',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    active: true
  },
  {
    name: 'Projects',
    to: '/projects',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
    active: false
  },
  {
    name: 'Tasks',
    to: '/tasks',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
    active: false
  },
  {
    name: 'Team',
    to: '/team',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    active: false
  },
  {
    name: 'Team Chat',
    to: '/chat',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
    active: false
  }
]

const stats = [
  {
    label: 'Projects',
    value: '12',
    caption: 'active',
    badge: '+12%',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
    bg: 'bg-[#EFF6FF]',
    glow: 'bg-[#DBEAFE]',
    badgeClass: 'bg-green-50 text-green-600'
  },
  {
    label: 'Tasks Completed',
    value: '84',
    caption: 'this sprint',
    badge: '+8%',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
    bg: 'bg-[#ECFDF5]',
    glow: 'bg-[#BBF7D0]',
    badgeClass: 'bg-green-50 text-green-600'
  },
  {
    label: 'Team Members',
    value: '16',
    caption: 'online team',
    badge: '+4',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    bg: 'bg-[#FFFBEB]',
    glow: 'bg-[#FDE68A]',
    badgeClass: 'bg-amber-50 text-amber-600'
  },
  {
    label: 'Tracked Hours',
    value: '18h',
    caption: 'today',
    badge: 'Today',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    bg: 'bg-[#F5F3FF]',
    glow: 'bg-[#DDD6FE]',
    badgeClass: 'bg-purple-50 text-purple-600'
  }
]

const showNotifications = ref(false)

const notifications = ref([
  {
    id: 1,
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
    title: 'Task completed',
    message: 'Alex completed the Login Page task.',
    time: '2 minutes ago',
    bg: 'bg-green-100'
  },
  {
    id: 2,
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    title: 'Time log added',
    message: 'Siraj logged 2h 10m on Dashboard UI.',
    time: '15 minutes ago',
    bg: 'bg-[#EFF6FF]'
  },
  {
    id: 3,
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
    title: 'Project updated',
    message: 'TeamTrack Frontend progress moved to 72%.',
    time: '1 hour ago',
    bg: 'bg-purple-100'
  }
])

const clearNotifications = () => {
  notifications.value = []
}

const performanceBars = [
  { day: 'Mon', value: '62', height: 62 },
  { day: 'Tue', value: '74', height: 74 },
  { day: 'Wed', value: '58', height: 58 },
  { day: 'Thu', value: '86', height: 86 },
  { day: 'Fri', value: '91', height: 91 },
  { day: 'Sat', value: '68', height: 68 },
  { day: 'Sun', value: '79', height: 79 }
]

const projects = [
  {
    name: 'TeamTrack Frontend',
    description: 'Dashboard redesign and responsive UI implementation.',
    progress: 72,
    status: 'Active',
    statusClass: 'bg-green-100 text-green-600',
    due: 'Friday',
    members: ['S', 'A', 'M']
  },
  {
    name: 'Authentication Flow',
    description: 'Login, signup, route protection, and user session handling.',
    progress: 54,
    status: 'In Review',
    statusClass: 'bg-blue-100 text-blue-600',
    due: 'Monday',
    members: ['S', 'A']
  }
]

const memberColors = {
  S: 'bg-[#2563EB]',
  A: 'bg-[#059669]',
  M: 'bg-[#D97706]'
}

const recentTasks = [
  {
    title: 'Login Page Completed',
    meta: 'Completed by Alex',
    time: '2h ago',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
    bg: 'bg-green-100'
  },
  {
    title: 'Dashboard UI in Progress',
    meta: 'Assigned to Siraj',
    time: 'Now',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    bg: 'bg-yellow-100'
  },
  {
    title: 'Project Board Updated',
    meta: 'Updated by Maria',
    time: '4h ago',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
    bg: 'bg-[#EFF6FF]'
  }
]

const workload = [
  { name: 'Siraj', initial: 'S', value: 78, color: 'bg-[#2563EB]' },
  { name: 'Alex', initial: 'A', value: 64, color: 'bg-[#059669]' },
  { name: 'Maria', initial: 'M', value: 58, color: 'bg-[#D97706]' },
  { name: 'Sarah', initial: 'S', value: 43, color: 'bg-[#7C3AED]' }
]

const timeLogs = [
  { title: 'Dashboard UI', duration: '2h 10m', owner: 'Siraj' },
  { title: 'Login Page', duration: '1h 35m', owner: 'Alex' },
  { title: 'Project Board', duration: '45m', owner: 'Sarah' }
]

const chatMessage = ref('')

const sendMessage = () => {
  if (!chatMessage.value.trim()) return
  chatMessage.value = ''
}

const timerSeconds = ref(0)
const timerRunning = ref(false)
let timerInterval = null

const formattedTimer = computed(() => {
  const hours = Math.floor(timerSeconds.value / 3600)
  const minutes = Math.floor((timerSeconds.value % 3600) / 60)
  const seconds = timerSeconds.value % 60

  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, '0'))
    .join(':')
})

const startTimer = () => {
  if (timerRunning.value) return

  timerRunning.value = true

  timerInterval = setInterval(() => {
    timerSeconds.value += 1
  }, 1000)
}

const pauseTimer = () => {
  timerRunning.value = false

  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

const resetTimer = () => {
  pauseTimer()
  timerSeconds.value = 0
}

const logout = () => {
  pauseTimer()
  router.push('/login')
}

onUnmounted(() => {
  pauseTimer()
})
</script>