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
          <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span>
          Dashboard
        </NuxtLink>

        <NuxtLink
          to="/projects"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg></span>
          Projects
        </NuxtLink>

        <NuxtLink
          to="/tasks"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></span>
          Tasks
        </NuxtLink>

        <NuxtLink
          to="/team"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></span>
          Team
        </NuxtLink>

        <NuxtLink
          to="/chat"
          class="flex items-center gap-3 bg-[#2563EB] text-white px-4 py-3 rounded-xl font-semibold"
        >
          <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
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
            Team Chat
          </h2>

          <p class="text-[14px] text-[#94A3B8] mt-1">
            Keep project discussions, decisions, and task updates in one workspace.
          </p>
        </div>

        <div class="flex items-center gap-4">
          <button class="relative w-11 h-11 rounded-xl bg-[#F8FAFC] flex items-center justify-center hover:bg-[#EFF6FF] transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

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

      <!-- Body -->
      <div class="p-8">

        <!-- Summary Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#EBF0FF] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              </div>
              <span class="text-[12px] font-semibold text-[#2563EB]">Today</span>
            </div>

            <p class="text-[14px] text-[#94A3B8] mb-1">Project Messages</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">18</h3>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#DCFCE7] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <span class="text-[12px] font-semibold text-green-500">Online</span>
            </div>

            <p class="text-[14px] text-[#94A3B8] mb-1">Active Members</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">3</h3>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#FEF3C7] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <span class="text-[12px] font-semibold text-[#F59E0B]">Pinned</span>
            </div>

            <p class="text-[14px] text-[#94A3B8] mb-1">Task Discussions</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">5</h3>
          </div>
        </div>

        <!-- Chat Workspace -->
        <div class="grid grid-cols-1 xl:grid-cols-[330px_1fr_360px] gap-8">

          <!-- Chat Threads -->
          <section class="bg-white rounded-3xl border border-[#E2E8F0]/70 shadow-sm overflow-hidden">

            <div class="p-6 border-b border-[#F1F5F9]">
              <h3 class="text-[20px] font-bold text-[#0F172A]">
                Project Threads
              </h3>

              <p class="text-[13px] text-[#94A3B8] mt-1">
                Project-level and task-linked discussions.
              </p>
            </div>

            <div class="p-4 space-y-3">
              <button
                v-for="thread in threads"
                :key="thread.id"
                @click="activeThreadId = thread.id"
                class="w-full text-left rounded-2xl p-4 transition border"
                :class="activeThreadId === thread.id
                  ? 'bg-[#EBF0FF] border-[#2563EB]/30'
                  : 'bg-[#F8FAFC] border-transparent hover:bg-[#F1F5F9]'"
              >
                <div class="flex items-start justify-between gap-3">
                  <div class="flex items-start gap-3">
                    <div
                      class="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                      :class="thread.iconBg"
                    >
                      <span v-html="thread.icon"></span>
                    </div>

                    <div>
                      <h4 class="text-[14px] font-bold text-[#0F172A]">
                        {{ thread.name }}
                      </h4>

                      <p class="text-[12px] text-[#94A3B8] mt-1 leading-[1.5]">
                        {{ thread.preview }}
                      </p>
                    </div>
                  </div>

                  <span
                    v-if="thread.unread > 0"
                    class="bg-[#2563EB] text-white text-[11px] font-bold min-w-6 h-6 rounded-full flex items-center justify-center px-2"
                  >
                    {{ thread.unread }}
                  </span>
                </div>

                <div class="flex items-center justify-between mt-3">
                  <span class="text-[11px] text-[#94A3B8]">
                    {{ thread.time }}
                  </span>

                  <span
                    class="text-[11px] font-bold px-2.5 py-1 rounded-full"
                    :class="thread.badgeClass"
                  >
                    {{ thread.type }}
                  </span>
                </div>
              </button>
            </div>
          </section>

          <!-- Main Chat -->
          <section class="bg-white rounded-3xl border border-[#E2E8F0]/70 shadow-sm overflow-hidden flex flex-col min-h-[720px]">

            <!-- Chat Header -->
            <div class="p-6 border-b border-[#F1F5F9] flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-2xl flex items-center justify-center"
                  :class="activeThread.iconBg"
                >
                  <span v-html="activeThread.icon"></span>
                </div>

                <div>
                  <h3 class="text-[20px] font-bold text-[#0F172A]">
                    {{ activeThread.name }}
                  </h3>

                  <p class="text-[13px] text-[#94A3B8] mt-1">
                    {{ activeThread.description }}
                  </p>
                </div>
              </div>

              <span class="hidden sm:inline-flex bg-green-100 text-green-600 text-[12px] font-bold px-3 py-1 rounded-full">
                3 online
              </span>
            </div>

            <!-- Messages -->
            <div class="flex-1 bg-[#F8FAFC] p-6 space-y-5 overflow-y-auto">

              <div
                v-for="message in activeMessages"
                :key="message.id"
                class="flex gap-3"
                :class="message.mine ? 'justify-end' : 'justify-start'"
              >
                <div
                  v-if="!message.mine"
                  class="w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0"
                  :class="message.avatarClass"
                >
                  {{ message.initial }}
                </div>

                <div
                  class="max-w-[72%]"
                  :class="message.mine ? 'items-end' : 'items-start'"
                >
                  <div
                    v-if="!message.mine"
                    class="flex items-center gap-2 mb-1"
                  >
                    <p class="text-[13px] font-bold text-[#0F172A]">
                      {{ message.sender }}
                    </p>

                    <span class="text-[11px] text-[#94A3B8]">
                      {{ message.time }}
                    </span>
                  </div>

                  <div
                    class="rounded-2xl px-4 py-3 shadow-sm border"
                    :class="message.mine
                      ? 'bg-[#2563EB] text-white border-[#2563EB] rounded-tr-sm'
                      : 'bg-white text-[#334155] border-[#E2E8F0] rounded-tl-sm'"
                  >
                    <p class="text-[14px] leading-[1.7]">
                      {{ message.text }}
                    </p>
                  </div>

                  <div
                    v-if="message.tag"
                    class="mt-2"
                    :class="message.mine ? 'text-right' : 'text-left'"
                  >
                    <span
                      class="inline-flex text-[11px] font-bold px-2.5 py-1 rounded-full"
                      :class="message.mine ? 'bg-[#DBEAFE] text-[#2563EB]' : 'bg-[#EFF6FF] text-[#2563EB]'"
                    >
                      {{ message.tag }}
                    </span>
                  </div>
                </div>

                <div
                  v-if="message.mine"
                  class="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-[13px] font-bold shrink-0"
                >
                  S
                </div>
              </div>

              <div
                v-if="sentMessages.length > 0"
                class="space-y-5"
              >
                <div
                  v-for="message in sentMessages"
                  :key="message.id"
                  class="flex justify-end gap-3"
                >
                  <div class="max-w-[72%]">
                    <div class="bg-[#2563EB] text-white border border-[#2563EB] rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm">
                      <p class="text-[14px] leading-[1.7]">
                        {{ message.text }}
                      </p>
                    </div>

                    <p class="text-[11px] text-[#94A3B8] mt-1 text-right">
                      Just now
                    </p>
                  </div>

                  <div class="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-[13px] font-bold shrink-0">
                    S
                  </div>
                </div>
              </div>
            </div>

            <!-- Message Input -->
            <div class="bg-white border-t border-[#E2E8F0] p-5">
              <div class="flex items-center gap-3">
                <input
                  v-model="messageInput"
                  @keyup.enter="sendMessage"
                  type="text"
                  maxlength="220"
                  placeholder="Write a project update..."
                  class="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 py-4 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"
                />

                <button
                  @click="sendMessage"
                  class="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-6 py-4 rounded-2xl font-bold transition"
                >
                  Send
                </button>
              </div>

              <p class="text-[11px] text-[#94A3B8] mt-3">
                Frontend prototype only — messages are shown as UI state and will connect to backend later.
              </p>
            </div>
          </section>

          <!-- Right Context Panel -->
          <section class="space-y-8">

            <!-- Linked Task Context -->
            <div class="bg-white rounded-3xl border border-[#E2E8F0]/70 p-6 shadow-sm">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-12 h-12 rounded-2xl bg-[#EBF0FF] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>

                <div>
                  <h3 class="text-[18px] font-bold text-[#0F172A]">
                    Linked Work Item
                  </h3>

                  <p class="text-[13px] text-[#94A3B8]">
                    Chat context for accountability
                  </p>
                </div>
              </div>

              <div class="bg-[#F8FAFC] rounded-2xl p-4 mb-4">
                <p class="text-[12px] text-[#94A3B8] mb-1">Current Task</p>
                <h4 class="text-[15px] font-bold text-[#0F172A]">
                  {{ activeThread.task }}
                </h4>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="bg-[#F8FAFC] rounded-2xl p-4">
                  <p class="text-[12px] text-[#94A3B8] mb-1">Status</p>
                  <p class="text-[14px] font-bold text-[#0F172A]">
                    {{ activeThread.status }}
                  </p>
                </div>

                <div class="bg-[#F8FAFC] rounded-2xl p-4">
                  <p class="text-[12px] text-[#94A3B8] mb-1">Priority</p>
                  <p class="text-[14px] font-bold text-[#0F172A]">
                    {{ activeThread.priority }}
                  </p>
                </div>

                <div class="bg-[#F8FAFC] rounded-2xl p-4">
                  <p class="text-[12px] text-[#94A3B8] mb-1">Due Date</p>
                  <p class="text-[14px] font-bold text-[#0F172A]">
                    {{ activeThread.dueDate }}
                  </p>
                </div>

                <div class="bg-[#F8FAFC] rounded-2xl p-4">
                  <p class="text-[12px] text-[#94A3B8] mb-1">Owner</p>
                  <p class="text-[14px] font-bold text-[#0F172A]">
                    {{ activeThread.owner }}
                  </p>
                </div>
              </div>

              <NuxtLink
                to="/tasks"
                class="mt-5 w-full inline-flex items-center justify-center bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#2563EB] text-[14px] font-bold px-5 py-3 rounded-xl transition"
              >
                View Related Task
              </NuxtLink>
            </div>

            <!-- Pinned Decision -->
            <div class="bg-white rounded-3xl border border-[#E2E8F0]/70 p-6 shadow-sm">
              <div class="flex items-center justify-between mb-5">
                <div>
                  <h3 class="text-[18px] font-bold text-[#0F172A]">
                    Pinned Decision
                  </h3>

                  <p class="text-[13px] text-[#94A3B8]">
                    Important project note
                  </p>
                </div>

                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>

              <div class="bg-[#FEF3C7]/70 border border-[#FDE68A] rounded-2xl p-4">
                <p class="text-[14px] text-[#92400E] leading-[1.7]">
                  Dashboard timer and recent time logs will stay in the prototype because time tracking is a core TeamTrack feature.
                </p>
              </div>
            </div>

            <!-- Activity Notes -->
            <div class="bg-white rounded-3xl border border-[#E2E8F0]/70 p-6 shadow-sm">
              <h3 class="text-[18px] font-bold text-[#0F172A] mb-5">
                Chat Activity
              </h3>

              <div class="space-y-4">
                <div class="flex gap-3">
                  <div class="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                    ✓
                  </div>

                  <div>
                    <p class="text-[14px] font-bold text-[#0F172A]">
                      Message logged
                    </p>
                    <p class="text-[12px] text-[#94A3B8]">
                      Alex posted an update 12 minutes ago.
                    </p>
                  </div>
                </div>

                <div class="flex gap-3">
                  <div class="w-9 h-9 rounded-xl bg-[#EBF0FF] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  </div>

                  <div>
                    <p class="text-[14px] font-bold text-[#0F172A]">
                      Task discussion active
                    </p>
                    <p class="text-[12px] text-[#94A3B8]">
                      Dashboard UI thread has new replies.
                    </p>
                  </div>
                </div>

                <div class="flex gap-3">
                  <div class="w-9 h-9 rounded-xl bg-[#F3E8FF] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  </div>

                  <div>
                    <p class="text-[14px] font-bold text-[#0F172A]">
                      AI-ready context
                    </p>
                    <p class="text-[12px] text-[#94A3B8]">
                      Chat history can support future AI summaries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: false
})

const router = useRouter()

const activeThreadId = ref(1)
const messageInput = ref('')
const sentMessages = ref([])

const threads = ref([
  {
    id: 1,
    name: 'TeamTrack Frontend',
    description: 'Main discussion for homepage, login, dashboard, and project workspace UI.',
    preview: 'Dashboard timer and project page are looking clean.',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
    iconBg: 'bg-[#EBF0FF]',
    type: 'Project',
    badgeClass: 'bg-[#EFF6FF] text-[#2563EB]',
    unread: 2,
    time: '10:24 AM',
    task: 'Dashboard UI in Progress',
    status: 'In Progress',
    priority: 'High',
    dueDate: '29 Mar',
    owner: 'Siraj'
  },
  {
    id: 2,
    name: 'Dashboard UI',
    description: 'Task-linked discussion for dashboard widgets, timer, and recent timings.',
    preview: 'Timer section should stay because it supports effort tracking.',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3L2 6"/><path d="M22 6l-3-3"/></svg>',
    iconBg: 'bg-[#F3E8FF]',
    type: 'Task',
    badgeClass: 'bg-purple-100 text-purple-600',
    unread: 1,
    time: '11:10 AM',
    task: 'Dashboard Time Tracker',
    status: 'Review',
    priority: 'High',
    dueDate: '26 Mar',
    owner: 'Siraj'
  },
  {
    id: 3,
    name: 'AI Assistant',
    description: 'Discussion about project-aware prompts and AI response preview.',
    preview: 'AI should provide suggestions, not automatic decisions.',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    iconBg: 'bg-[#DCFCE7]',
    type: 'AI',
    badgeClass: 'bg-green-100 text-green-600',
    unread: 0,
    time: 'Yesterday',
    task: 'AI Chatbot Prototype',
    status: 'In Review',
    priority: 'Medium',
    dueDate: '24 Mar',
    owner: 'Omar'
  },
  {
    id: 4,
    name: 'Contribution Analytics',
    description: 'Discussion around tracked hours, workload balance, and contribution visibility.',
    preview: 'Contribution should be transparent but not judgmental.',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    iconBg: 'bg-[#FEF3C7]',
    type: 'Analytics',
    badgeClass: 'bg-yellow-100 text-yellow-600',
    unread: 0,
    time: 'Monday',
    task: 'Contribution Dashboard',
    status: 'At Risk',
    priority: 'Medium',
    dueDate: '25 Mar',
    owner: 'Maria'
  }
])

const messages = ref({
  1: [
    {
      id: 1,
      sender: 'Alex',
      initial: 'A',
      avatarClass: 'bg-blue-400',
      time: '10:24 AM',
      text: 'Dashboard timer and recent time logs are now aligned with the TeamTrack requirements.',
      tag: 'Project Update',
      mine: false
    },
    {
      id: 2,
      sender: 'Siraj',
      initial: 'S',
      avatarClass: 'bg-[#2563EB]',
      time: '10:28 AM',
      text: 'Yes, keep the timer. Time tracking is one of the core parts of TeamTrack.',
      tag: 'Decision',
      mine: true
    },
    {
      id: 3,
      sender: 'Sarah',
      initial: 'S',
      avatarClass: 'bg-green-400',
      time: '10:35 AM',
      text: 'Projects page also looks good. Logged time, tasks, progress, and contribution all make sense together.',
      tag: 'Feedback',
      mine: false
    }
  ],
  2: [
    {
      id: 4,
      sender: 'Maria',
      initial: 'M',
      avatarClass: 'bg-pink-400',
      time: '11:10 AM',
      text: 'The timer card should show Start, Pause, and Stop clearly so users understand the workflow.',
      tag: 'Task Discussion',
      mine: false
    },
    {
      id: 5,
      sender: 'Siraj',
      initial: 'S',
      avatarClass: 'bg-[#2563EB]',
      time: '11:14 AM',
      text: 'Done. I also added recent time logs so the dashboard shows past tracked sessions.',
      tag: 'Completed',
      mine: true
    }
  ],
  3: [
    {
      id: 6,
      sender: 'Omar',
      initial: 'O',
      avatarClass: 'bg-cyan-400',
      time: 'Yesterday',
      text: 'AI assistant should answer project-related questions using task, time, and contribution data.',
      tag: 'AI Scope',
      mine: false
    },
    {
      id: 7,
      sender: 'Siraj',
      initial: 'S',
      avatarClass: 'bg-[#2563EB]',
      time: 'Yesterday',
      text: 'For frontend, we can show suggested prompts and prototype responses only.',
      tag: 'Frontend Only',
      mine: true
    }
  ],
  4: [
    {
      id: 8,
      sender: 'Zernish',
      initial: 'Z',
      avatarClass: 'bg-indigo-400',
      time: 'Monday',
      text: 'Contribution analytics should show workload balance and effort visibility without grading automatically.',
      tag: 'Analytics',
      mine: false
    }
  ]
})

const activeThread = computed(() => {
  return threads.value.find((thread) => thread.id === activeThreadId.value) || threads.value[0]
})

const activeMessages = computed(() => {
  return messages.value[activeThreadId.value] || []
})

const sendMessage = () => {
  const text = messageInput.value.trim()

  if (!text) return

  sentMessages.value.push({
    id: Date.now(),
    text
  })

  messageInput.value = ''
}

const logout = () => {
  router.push('/login')
}
</script>