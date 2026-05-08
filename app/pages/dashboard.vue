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
          <span>📊</span>
          Dashboard
        </NuxtLink>

        <NuxtLink
          to="/projects"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          <span>📁</span>
          Projects
        </NuxtLink>

        <NuxtLink
          to="/tasks"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          <span>✅</span>
          Tasks
        </NuxtLink>

        <NuxtLink
          to="/team"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          <span>👥</span>
          Team
        </NuxtLink>

        <NuxtLink
          to="/chat"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          <span>💬</span>
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
            <span class="text-[18px]">🔔</span>
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

          <!-- Projects -->
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

          <!-- Tasks Completed -->
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

          <!-- Team Members -->
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

          <!-- Tracked Hours -->
          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between mb-5">
              <div class="w-12 h-12 rounded-2xl bg-[#F3E8FF] flex items-center justify-center">
                ⏰
              </div>

              <span class="text-[12px] font-semibold text-[#9333EA]">
                Today
              </span>
            </div>

            <p class="text-[14px] text-[#94A3B8] mb-1">Tracked Hours</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">18h</h3>
          </div>
        </div>

        <!-- ===== GRID ===== -->
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">

          <!-- LEFT -->
          <div class="xl:col-span-2 space-y-8">

            <!-- Timer Control -->
            <div class="bg-white rounded-3xl border border-[#E2E8F0]/70 p-6 shadow-sm">
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                <div>
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-12 h-12 rounded-2xl bg-[#EBF0FF] flex items-center justify-center">
                      ⏱️
                    </div>

                    <div>
                      <h3 class="text-[20px] font-bold text-[#0F172A]">
                        Time Tracker
                      </h3>
                      <p class="text-[13px] text-[#94A3B8]">
                        Track work sessions for project contribution visibility.
                      </p>
                    </div>
                  </div>

                  <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 mt-4">
                    <p class="text-[12px] text-[#94A3B8] mb-1">Current Task</p>
                    <h4 class="text-[15px] font-bold text-[#0F172A]">
                      Dashboard UI in Progress
                    </h4>
                  </div>
                </div>

                <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-6 min-w-[280px]">
                  <p class="text-[12px] text-[#94A3B8] text-center mb-2">
                    Current Session
                  </p>

                  <div class="text-center text-[38px] font-bold text-[#0F172A] tracking-tight mb-5">
                    {{ formattedTimer }}
                  </div>

                  <div class="flex items-center justify-center gap-3">
                    <button
                      @click="startTimer"
                      :disabled="timerRunning"
                      class="bg-[#2563EB] hover:bg-[#1E40AF] disabled:opacity-50 disabled:cursor-not-allowed text-white text-[13px] font-bold px-5 py-3 rounded-xl transition"
                    >
                      Start
                    </button>

                    <button
                      @click="pauseTimer"
                      :disabled="!timerRunning"
                      class="bg-[#FEF3C7] hover:bg-[#FDE68A] disabled:opacity-50 disabled:cursor-not-allowed text-[#92400E] text-[13px] font-bold px-5 py-3 rounded-xl transition"
                    >
                      Pause
                    </button>

                    <button
                      @click="resetTimer"
                      class="bg-red-50 hover:bg-red-100 text-red-500 text-[13px] font-bold px-5 py-3 rounded-xl transition"
                    >
                      Stop
                    </button>
                  </div>
                </div>

              </div>
            </div>

            <!-- Active Projects -->
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

                <NuxtLink
                  to="/projects"
                  class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[14px] font-semibold px-5 py-2.5 rounded-xl transition"
                >
                  View Projects
                </NuxtLink>
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

                <div class="flex items-center justify-between bg-[#F8FAFC] rounded-2xl p-4">
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                      ⏳
                    </div>

                    <div>
                      <h4 class="font-semibold text-[#0F172A]">
                        Dashboard UI in Progress
                      </h4>

                      <p class="text-[13px] text-[#94A3B8]">
                        Assigned to Siraj
                      </p>
                    </div>
                  </div>

                  <span class="text-[12px] text-[#94A3B8]">
                    Now
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

              <div class="bg-white/10 rounded-2xl p-4 mb-4">
                <p class="text-[14px] leading-[1.7] text-blue-50">
                  Your team is currently 18% more productive this week.
                </p>
              </div>

              <div class="bg-white/10 rounded-2xl p-4">
                <p class="text-[14px] leading-[1.7] text-blue-50">
                  One task is taking longer than expected. Consider reviewing workload balance.
                </p>
              </div>
            </div>

            <!-- Recent Time Logs -->
            <div class="bg-white rounded-3xl border border-[#E2E8F0]/70 p-6 shadow-sm">

              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-[20px] font-bold text-[#0F172A]">
                    Recent Time Logs
                  </h3>
                  <p class="text-[13px] text-[#94A3B8]">
                    Latest tracked work sessions
                  </p>
                </div>

                <span class="text-[12px] bg-[#EFF6FF] text-[#2563EB] font-bold px-3 py-1 rounded-full">
                  Today
                </span>
              </div>

              <div class="space-y-4">
                <div class="bg-[#F8FAFC] rounded-2xl p-4">
                  <div class="flex items-center justify-between mb-1">
                    <h4 class="text-[14px] font-bold text-[#0F172A]">
                      Dashboard UI
                    </h4>
                    <span class="text-[13px] font-bold text-[#2563EB]">
                      2h 10m
                    </span>
                  </div>

                  <p class="text-[12px] text-[#94A3B8]">
                    Logged by Siraj
                  </p>
                </div>

                <div class="bg-[#F8FAFC] rounded-2xl p-4">
                  <div class="flex items-center justify-between mb-1">
                    <h4 class="text-[14px] font-bold text-[#0F172A]">
                      Login Page
                    </h4>
                    <span class="text-[13px] font-bold text-[#2563EB]">
                      1h 35m
                    </span>
                  </div>

                  <p class="text-[12px] text-[#94A3B8]">
                    Logged by Alex
                  </p>
                </div>

                <div class="bg-[#F8FAFC] rounded-2xl p-4">
                  <div class="flex items-center justify-between mb-1">
                    <h4 class="text-[14px] font-bold text-[#0F172A]">
                      Project Board
                    </h4>
                    <span class="text-[13px] font-bold text-[#2563EB]">
                      45m
                    </span>
                  </div>

                  <p class="text-[12px] text-[#94A3B8]">
                    Logged by Sarah
                  </p>
                </div>
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
import { computed, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: false
})

const router = useRouter()

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