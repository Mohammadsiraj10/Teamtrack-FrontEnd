<template>
  <div class="min-h-screen bg-[#F8FAFC] flex overflow-hidden">

    <!-- ===== SIDEBAR ===== -->
    <aside class="w-[270px] bg-white border-r border-[#E2E8F0] hidden lg:flex flex-col">

      <!-- Logo -->
      <div class="px-6 py-6 border-b border-[#F1F5F9]">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-bold text-lg">
            T
          </div>

          <div>
            <h1 class="font-bold text-[18px] text-[#0F172A]">TeamTrack</h1>
            <p class="text-[12px] text-[#94A3B8]">AI Team Workspace</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-4 py-6 space-y-2">

        <NuxtLink
          to="/dashboard"
          class="flex items-center gap-3 bg-[#2563EB] text-white px-4 py-3 rounded-xl font-semibold"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM13 3v4h8V3h-8zM3 21v-4h8v4H3z"/>
          </svg>
          Dashboard
        </NuxtLink>

        <NuxtLink
          to="/projects"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
          Projects
        </NuxtLink>

        <NuxtLink
          to="/tasks"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 11l3 3L22 4"/>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
          </svg>
          Tasks
        </NuxtLink>

        <NuxtLink
          to="/team"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Team
        </NuxtLink>

        <NuxtLink
          to="/chat"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Team Chat
        </NuxtLink>
      </nav>

      <!-- Bottom -->
      <div class="p-4 border-t border-[#F1F5F9]">

        <div class="bg-[#F8FAFC] rounded-2xl p-4 mb-4">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold">
              S
            </div>

            <div>
              <h3 class="font-semibold text-[14px] text-[#0F172A]">Siraj</h3>
              <p class="text-[12px] text-[#94A3B8]">Team Leader</p>
            </div>
          </div>
        </div>

        <button
          @click="logout"
          class="w-full bg-red-50 hover:bg-red-100 text-red-500 font-semibold py-3 rounded-xl transition"
        >
          Logout
        </button>
      </div>
    </aside>

    <!-- ===== MAIN ===== -->
    <main class="flex-1 overflow-y-auto">

      <!-- Topbar -->
      <header class="bg-white border-b border-[#E2E8F0] px-8 py-5 flex items-center justify-between">

        <div>
          <h2 class="text-[28px] font-bold text-[#0F172A]">
            Welcome back 👋
          </h2>

          <p class="text-[14px] text-[#94A3B8] mt-1">
            Here’s what’s happening with your team today.
          </p>
        </div>

        <div class="flex items-center gap-4">

          <!-- Notification -->
          <button class="relative w-11 h-11 rounded-xl bg-[#F8FAFC] flex items-center justify-center hover:bg-[#EFF6FF] transition">
            <svg width="20" height="20" fill="none" stroke="#334155" stroke-width="2">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>

            <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <!-- User -->
          <div class="flex items-center gap-3">
            <div class="text-right hidden sm:block">
              <p class="text-[14px] font-semibold text-[#0F172A]">Siraj</p>
              <p class="text-[12px] text-[#94A3B8]">Admin</p>
            </div>

            <div class="w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold">
              S
            </div>
          </div>
        </div>
      </header>

      <!-- BODY -->
      <div class="p-8">

        <!-- ===== STATS ===== -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

          <!-- Card -->
          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between mb-5">
              <div class="w-12 h-12 rounded-2xl bg-[#EBF0FF] flex items-center justify-center">
                📁
              </div>

              <span class="text-[12px] font-semibold text-green-500">
                +12%
              </span>
            </div>

            <p class="text-[14px] text-[#94A3B8] mb-1">Projects</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">12</h3>
          </div>

          <!-- Card -->
          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between mb-5">
              <div class="w-12 h-12 rounded-2xl bg-[#DCFCE7] flex items-center justify-center">
                ✅
              </div>

              <span class="text-[12px] font-semibold text-green-500">
                +8%
              </span>
            </div>

            <p class="text-[14px] text-[#94A3B8] mb-1">Tasks Completed</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">84</h3>
          </div>

          <!-- Card -->
          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between mb-5">
              <div class="w-12 h-12 rounded-2xl bg-[#FEF3C7] flex items-center justify-center">
                👥
              </div>

              <span class="text-[12px] font-semibold text-green-500">
                +4
              </span>
            </div>

            <p class="text-[14px] text-[#94A3B8] mb-1">Team Members</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">16</h3>
          </div>

          <!-- Card -->
          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between mb-5">
              <div class="w-12 h-12 rounded-2xl bg-[#F3E8FF] flex items-center justify-center">
                ⏰
              </div>

              <span class="text-[12px] font-semibold text-red-500">
                -2h
              </span>
            </div>

            <p class="text-[14px] text-[#94A3B8] mb-1">Hours Remaining</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">18h</h3>
          </div>
        </div>

        <!-- ===== GRID ===== -->
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">

          <!-- LEFT -->
          <div class="xl:col-span-2 space-y-8">

            <!-- Projects -->
            <div class="bg-white rounded-3xl border border-[#E2E8F0]/70 p-6 shadow-sm">

              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-[20px] font-bold text-[#0F172A]">
                    Active Projects
                  </h3>

                  <p class="text-[13px] text-[#94A3B8]">
                    Your current running projects
                  </p>
                </div>

                <button class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[14px] font-semibold px-5 py-2.5 rounded-xl transition">
                  + New Project
                </button>
              </div>

              <div class="space-y-5">

                <!-- Project -->
                <div class="border border-[#E2E8F0] rounded-2xl p-5 hover:border-[#2563EB]/30 hover:shadow-md transition-all">

                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <h4 class="font-bold text-[#0F172A]">
                        TeamTrack Frontend
                      </h4>

                      <p class="text-[13px] text-[#94A3B8] mt-1">
                        Dashboard redesign and responsive UI
                      </p>
                    </div>

                    <span class="bg-green-100 text-green-600 text-[12px] font-bold px-3 py-1 rounded-full">
                      Active
                    </span>
                  </div>

                  <div class="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden mb-3">
                    <div
                      class="bg-[#2563EB] h-2 rounded-full"
                      style="width: 72%"
                    ></div>
                  </div>

                  <div class="flex items-center justify-between">
                    <p class="text-[13px] text-[#64748B]">
                      Progress: 72%
                    </p>

                    <div class="flex -space-x-2">
                      <div class="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
                      <div class="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
                      <div class="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Recent Tasks -->
            <div class="bg-white rounded-3xl border border-[#E2E8F0]/70 p-6 shadow-sm">

              <h3 class="text-[20px] font-bold text-[#0F172A] mb-6">
                Recent Tasks
              </h3>

              <div class="space-y-4">

                <div class="flex items-center justify-between bg-[#F8FAFC] rounded-2xl p-4">
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      ✓
                    </div>

                    <div>
                      <h4 class="font-semibold text-[#0F172A]">
                        Login Page Completed
                      </h4>

                      <p class="text-[13px] text-[#94A3B8]">
                        Completed by Alex
                      </p>
                    </div>
                  </div>

                  <span class="text-[12px] text-[#94A3B8]">
                    2h ago
                  </span>
                </div>

              </div>
            </div>
          </div>

          <!-- RIGHT -->
          <div class="space-y-8">

            <!-- AI -->
            <div class="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-3xl p-6 text-white">

              <div class="flex items-center gap-3 mb-5">
                <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  🤖
                </div>

                <div>
                  <h3 class="font-bold text-[18px]">
                    Team AI
                  </h3>

                  <p class="text-blue-100 text-[13px]">
                    Smart productivity insights
                  </p>
                </div>
              </div>

              <div class="bg-white/10 rounded-2xl p-4">
                <p class="text-[14px] leading-[1.7] text-blue-50">
                  Your team is currently 18% more productive this week.
                </p>
              </div>
            </div>

            <!-- Team Chat -->
            <div class="bg-white rounded-3xl border border-[#E2E8F0]/70 p-6 shadow-sm">

              <div class="flex items-center justify-between mb-6">
                <h3 class="text-[20px] font-bold text-[#0F172A]">
                  Team Chat
                </h3>

                <span class="text-[12px] bg-green-100 text-green-600 font-bold px-3 py-1 rounded-full">
                  3 online
                </span>
              </div>

              <div class="space-y-4 mb-5">

                <div class="flex gap-3">
                  <div class="w-10 h-10 rounded-full bg-blue-400"></div>

                  <div class="bg-[#F8FAFC] rounded-2xl p-3 flex-1">
                    <div class="flex items-center justify-between mb-1">
                      <h4 class="font-semibold text-[14px] text-[#0F172A]">
                        Alex
                      </h4>

                      <span class="text-[11px] text-[#94A3B8]">
                        10:24 AM
                      </span>
                    </div>

                    <p class="text-[13px] text-[#475569] leading-[1.6]">
                      API integration is done 🚀
                    </p>
                  </div>
                </div>

              </div>

              <!-- Input -->
              <div class="flex items-center gap-3">
                <input
                  type="text"
                  maxlength="200"
                  placeholder="Send a message..."
                  class="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]"
                />

                <button class="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-5 py-3 rounded-xl font-semibold transition">
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
import { useRouter } from 'vue-router'

definePageMeta({
  layout: false
})

const router = useRouter()

const logout = () => {
  router.push('/login')
}
</script>