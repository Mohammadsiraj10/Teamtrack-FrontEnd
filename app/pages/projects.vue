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
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          <span>📊</span>
          Dashboard
        </NuxtLink>

        <NuxtLink
          to="/projects"
          class="flex items-center gap-3 bg-[#2563EB] text-white px-4 py-3 rounded-xl font-semibold"
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

    <!-- ===== MAIN CONTENT ===== -->
    <main class="flex-1 overflow-y-auto">

      <!-- Topbar -->
      <header class="bg-white border-b border-[#E2E8F0] px-8 py-5 flex items-center justify-between">
        <div>
          <h2 class="text-[28px] font-bold text-[#0F172A]">
            Projects
          </h2>

          <p class="text-[14px] text-[#94A3B8] mt-1">
            Create, manage, and monitor academic group project workspaces.
          </p>
        </div>

        <button
          @click="showCreateProject = true"
          class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[14px] font-semibold px-5 py-3 rounded-xl transition shadow-sm hover:shadow-lg"
        >
          + Create Project
        </button>
      </header>

      <!-- Body -->
      <div class="p-8">

        <!-- ===== PROJECT SUMMARY ===== -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#EBF0FF] flex items-center justify-center text-xl">
                📁
              </div>
              <span class="text-[12px] text-[#10B981] font-semibold">Active</span>
            </div>

            <p class="text-[14px] text-[#94A3B8] mb-1">Total Projects</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">4</h3>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#DCFCE7] flex items-center justify-center text-xl">
                ✅
              </div>
              <span class="text-[12px] text-[#10B981] font-semibold">Tracked</span>
            </div>

            <p class="text-[14px] text-[#94A3B8] mb-1">Completed Tasks</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">24</h3>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#FEF3C7] flex items-center justify-center text-xl">
                ⏰
              </div>
              <span class="text-[12px] text-[#F59E0B] font-semibold">Logged</span>
            </div>

            <p class="text-[14px] text-[#94A3B8] mb-1">Time Logged</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">42h</h3>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#F3E8FF] flex items-center justify-center text-xl">
                👥
              </div>
              <span class="text-[12px] text-[#9333EA] font-semibold">Team</span>
            </div>

            <p class="text-[14px] text-[#94A3B8] mb-1">Members</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">8</h3>
          </div>
        </div>

        <!-- ===== FILTER BAR ===== -->
        <div class="bg-white border border-[#E2E8F0]/70 rounded-3xl p-5 mb-8 shadow-sm">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

            <div>
              <h3 class="text-[18px] font-bold text-[#0F172A]">
                Project Workspaces
              </h3>
              <p class="text-[13px] text-[#94A3B8] mt-1">
                Frontend prototype view for project tracking and academic accountability.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-3">
              <input
                v-model="search"
                type="text"
                placeholder="Search project..."
                class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]"
              />

              <select
                v-model="selectedStatus"
                class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="In Review">In Review</option>
                <option value="At Risk">At Risk</option>
              </select>
            </div>

          </div>
        </div>

        <!-- ===== PROJECT CARDS ===== -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-white border border-[#E2E8F0]/70 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >

            <!-- Project Header -->
            <div class="flex items-start justify-between mb-5">
              <div>
                <h3 class="text-[20px] font-bold text-[#0F172A]">
                  {{ project.name }}
                </h3>

                <p class="text-[13px] text-[#94A3B8] mt-1 leading-[1.6]">
                  {{ project.description }}
                </p>
              </div>

              <span
                class="text-[12px] font-bold px-3 py-1 rounded-full"
                :class="statusClass(project.status)"
              >
                {{ project.status }}
              </span>
            </div>

            <!-- Progress -->
            <div class="mb-5">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[13px] font-semibold text-[#475569]">
                  Project Progress
                </span>
                <span class="text-[13px] font-bold text-[#2563EB]">
                  {{ project.progress }}%
                </span>
              </div>

              <div class="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                <div
                  class="h-2 rounded-full bg-[#2563EB]"
                  :style="{ width: project.progress + '%' }"
                ></div>
              </div>
            </div>

            <!-- Details Grid -->
            <div class="grid grid-cols-2 gap-4 mb-5">
              <div class="bg-[#F8FAFC] rounded-2xl p-4">
                <p class="text-[12px] text-[#94A3B8] mb-1">Deadline</p>
                <p class="text-[14px] font-bold text-[#0F172A]">{{ project.deadline }}</p>
              </div>

              <div class="bg-[#F8FAFC] rounded-2xl p-4">
                <p class="text-[12px] text-[#94A3B8] mb-1">Time Logged</p>
                <p class="text-[14px] font-bold text-[#0F172A]">{{ project.timeLogged }}</p>
              </div>

              <div class="bg-[#F8FAFC] rounded-2xl p-4">
                <p class="text-[12px] text-[#94A3B8] mb-1">Tasks</p>
                <p class="text-[14px] font-bold text-[#0F172A]">{{ project.tasks }}</p>
              </div>

              <div class="bg-[#F8FAFC] rounded-2xl p-4">
                <p class="text-[12px] text-[#94A3B8] mb-1">Contribution</p>
                <p class="text-[14px] font-bold text-[#0F172A]">{{ project.contribution }}</p>
              </div>
            </div>

            <!-- Members -->
            <div class="flex items-center justify-between">
              <div>
                <p class="text-[12px] text-[#94A3B8] mb-2">Assigned Members</p>

                <div class="flex -space-x-2">
                  <div
                    v-for="member in project.members"
                    :key="member"
                    class="w-9 h-9 rounded-full border-2 border-white bg-[#2563EB] text-white flex items-center justify-center text-[12px] font-bold"
                  >
                    {{ member }}
                  </div>
                </div>
              </div>

              <NuxtLink
                to="/tasks"
                class="bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#2563EB] text-[13px] font-bold px-4 py-2.5 rounded-xl transition"
              >
                View Tasks
              </NuxtLink>
            </div>
          </div>

        </div>

        <!-- Empty State -->
        <div
          v-if="filteredProjects.length === 0"
          class="bg-white border border-[#E2E8F0] rounded-3xl p-10 text-center mt-8"
        >
          <h3 class="text-[20px] font-bold text-[#0F172A] mb-2">
            No projects found
          </h3>

          <p class="text-[#94A3B8] text-[14px]">
            Try changing your search or status filter.
          </p>
        </div>

      </div>
    </main>

    <!-- ===== CREATE PROJECT MODAL ===== -->
    <div
      v-if="showCreateProject"
      class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6"
    >
      <div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[520px] p-7">

        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-[22px] font-bold text-[#0F172A]">
              Create Project
            </h3>

            <p class="text-[13px] text-[#94A3B8] mt-1">
              Frontend prototype form for creating an academic project workspace.
            </p>
          </div>

          <button
            @click="showCreateProject = false"
            class="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-[13px] font-semibold text-[#334155] mb-2">
              Project Name
            </label>

            <input
              type="text"
              placeholder="Example: TeamTrack Frontend"
              class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]"
            />
          </div>

          <div>
            <label class="block text-[13px] font-semibold text-[#334155] mb-2">
              Description
            </label>

            <textarea
              rows="3"
              placeholder="Brief project description"
              class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB] resize-none"
            ></textarea>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-[13px] font-semibold text-[#334155] mb-2">
                Deadline
              </label>

              <input
                type="date"
                class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]"
              />
            </div>

            <div>
              <label class="block text-[13px] font-semibold text-[#334155] mb-2">
                Status
              </label>

              <select
                class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]"
              >
                <option>Active</option>
                <option>In Review</option>
                <option>At Risk</option>
              </select>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-7">
          <button
            @click="showCreateProject = false"
            class="px-5 py-3 rounded-xl bg-[#F8FAFC] text-[#475569] font-semibold hover:bg-[#E2E8F0] transition"
          >
            Cancel
          </button>

          <button
            @click="showCreateProject = false"
            class="px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1E40AF] transition"
          >
            Save Prototype
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: false
})

const router = useRouter()

const search = ref('')
const selectedStatus = ref('All')
const showCreateProject = ref(false)

const projects = ref([
  {
    id: 1,
    name: 'TeamTrack Frontend',
    description: 'Landing page, login, dashboard, and responsive UI development.',
    status: 'Active',
    progress: 72,
    deadline: '29 Mar 2026',
    timeLogged: '18h 30m',
    tasks: '8 / 12',
    contribution: 'Balanced',
    members: ['S', 'Z', 'M']
  },
  {
    id: 2,
    name: 'AI Chatbot Prototype',
    description: 'Project-aware chatbot interface with suggested prompts and AI response area.',
    status: 'In Review',
    progress: 65,
    deadline: '24 Mar 2026',
    timeLogged: '9h 45m',
    tasks: '5 / 8',
    contribution: 'Good',
    members: ['S', 'O']
  },
  {
    id: 3,
    name: 'Task Tracking Module',
    description: 'Task board interface showing assigned tasks, status, deadlines, and ownership.',
    status: 'Active',
    progress: 58,
    deadline: '27 Mar 2026',
    timeLogged: '11h 10m',
    tasks: '6 / 10',
    contribution: 'Needs Review',
    members: ['M', 'Z', 'S']
  },
  {
    id: 4,
    name: 'Contribution Analytics',
    description: 'Dashboard widgets for contribution visibility, workload distribution, and logged effort.',
    status: 'At Risk',
    progress: 42,
    deadline: '25 Mar 2026',
    timeLogged: '6h 20m',
    tasks: '3 / 9',
    contribution: 'Uneven',
    members: ['O', 'M']
  }
])

const filteredProjects = computed(() => {
  return projects.value.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(search.value.toLowerCase())
    const matchesStatus = selectedStatus.value === 'All' || project.status === selectedStatus.value

    return matchesSearch && matchesStatus
  })
})

const statusClass = (status) => {
  if (status === 'Active') {
    return 'bg-green-100 text-green-600'
  }

  if (status === 'In Review') {
    return 'bg-blue-100 text-blue-600'
  }

  if (status === 'At Risk') {
    return 'bg-red-100 text-red-600'
  }

  return 'bg-gray-100 text-gray-600'
}

const logout = () => {
  router.push('/login')
}
</script>