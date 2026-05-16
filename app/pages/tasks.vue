<template>
  <div class="min-h-screen bg-[#F8FAFC] flex overflow-hidden">

    <!-- SIDEBAR -->
    <aside class="w-[270px] bg-white border-r border-[#E2E8F0] hidden lg:flex flex-col">

      <div class="px-6 py-6 border-b border-[#F1F5F9]">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-bold text-lg">T</div>
          <div>
            <h1 class="font-bold text-[18px] text-[#0F172A]">TeamTrack</h1>
            <p class="text-[12px] text-[#94A3B8]">AI Team Workspace</p>
          </div>
        </div>
      </div>

      <nav class="flex-1 px-4 py-6 space-y-2">
        <NuxtLink to="/dashboard" class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition">
          <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span> Dashboard
        </NuxtLink>
        <NuxtLink to="/projects" class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition">
          <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg></span> Projects
        </NuxtLink>
        <NuxtLink to="/tasks" class="flex items-center gap-3 bg-[#2563EB] text-white px-4 py-3 rounded-xl font-semibold">
          <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></span> Tasks
        </NuxtLink>
        <NuxtLink to="/team" class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition">
          <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></span> Team
        </NuxtLink>
        <NuxtLink to="/chat" class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition">
          <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span> Team Chat
        </NuxtLink>
      </nav>

      <div class="p-4 border-t border-[#F1F5F9]">
        <div class="bg-[#F8FAFC] rounded-2xl p-4 mb-4">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold">S</div>
            <div>
              <h3 class="font-semibold text-[14px] text-[#0F172A]">Siraj</h3>
              <p class="text-[12px] text-[#94A3B8]">Team Leader</p>
            </div>
          </div>
        </div>
        <button @click="logout" class="w-full bg-red-50 hover:bg-red-100 text-red-500 font-semibold py-3 rounded-xl transition">Logout</button>
      </div>
    </aside>

    <!-- MAIN -->
    <main class="flex-1 overflow-y-auto">

      <!-- Topbar -->
      <header class="bg-white border-b border-[#E2E8F0] px-8 py-5 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 class="text-[28px] font-bold text-[#0F172A]">Tasks</h2>
          <p class="text-[14px] text-[#94A3B8] mt-1">Task management — Kanban board, list view, dependencies, and activity tracking.</p>
        </div>
        <div class="flex items-center gap-3 flex-wrap">
          <div class="relative">
            <input v-model="searchQuery" type="text" placeholder="Search tasks..." class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] w-[220px]" />
            <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
          </div>
          <select v-model="filterAssignee" class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2563EB]">
            <option value="All">All Assignees</option>
            <option v-for="m in teamMembers" :key="m.name" :value="m.name">{{ m.name }}</option>
          </select>
          <select v-model="filterPriority" class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2563EB]">
            <option value="All">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <div class="flex items-center bg-[#F1F5F9] rounded-xl p-1">
            <button @click="viewMode = 'kanban'" :class="viewMode === 'kanban' ? 'bg-white shadow-sm text-[#0F172A]' : 'text-[#64748B]'" class="px-3 py-1.5 rounded-lg text-[13px] font-semibold transition">Kanban</button>
            <button @click="viewMode = 'list'" :class="viewMode === 'list' ? 'bg-white shadow-sm text-[#0F172A]' : 'text-[#64748B]'" class="px-3 py-1.5 rounded-lg text-[13px] font-semibold transition">List</button>
          </div>
          <button v-if="isLeader" @click="openCreateTask" class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[14px] font-semibold px-5 py-3 rounded-xl transition shadow-sm hover:shadow-lg">+ New Task</button>
        </div>
      </header>

      <div class="p-8">

        <!-- Deadline warning banner (FR-42) -->
        <div v-if="deadlineWarningTasks.length > 0" class="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-2xl p-4 mb-6 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2"><path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <p class="text-[14px] font-semibold text-[#92400E]">{{ deadlineWarningTasks.length }} task{{ deadlineWarningTasks.length > 1 ? 's' : '' }} with deadline &lt; 24h</p>
            <p class="text-[12px] text-[#78350F]/70">These tasks have not been completed yet. Take action to keep your project on track. (FR-42)</p>
          </div>
        </div>

        <!-- Stalling indicator banner (FR-39) -->
        <div v-if="stallingTasks.length > 0" class="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-2xl p-4 mb-6 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <p class="text-[14px] font-semibold text-[#92400E]">{{ stallingTasks.length }} task{{ stallingTasks.length > 1 ? 's' : '' }} stalling (no update in 48h+)</p>
            <p class="text-[12px] text-[#78350F]/70">Task Activity Indicators detected tasks with no activity updates. (FR-39)</p>
          </div>
        </div>

        <!-- STATS CARDS -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#EBF0FF] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg></div>
              <span class="text-[12px] text-[#64748B] font-semibold">Total</span>
            </div>
            <p class="text-[14px] text-[#94A3B8] mb-1">Total Tasks</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">{{ tasks.length }}</h3>
          </div>
          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#DCFCE7] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
              <span class="text-[12px] text-[#10B981] font-semibold">Done</span>
            </div>
            <p class="text-[14px] text-[#94A3B8] mb-1">Completed</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">{{ tasks.filter(t => t.status === 'done').length }}</h3>
          </div>
          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#FEF3C7] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
              <span class="text-[12px] text-[#F59E0B] font-semibold">Blocked</span>
            </div>
            <p class="text-[14px] text-[#94A3B8] mb-1">Blocked Tasks</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">{{ tasks.filter(t => t.isBlocked).length }}</h3>
          </div>
          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#F3E8FF] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <span class="text-[12px] text-[#F87171] font-semibold">Warn</span>
            </div>
            <p class="text-[14px] text-[#94A3B8] mb-1">Deadline Warnings</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">{{ deadlineWarningTasks.length }}</h3>
          </div>
        </div>

        <!-- KANBAN VIEW -->
        <div v-if="viewMode === 'kanban'" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div v-for="column in columns" :key="column.id">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <span :class="column.dotClass" class="w-2.5 h-2.5 rounded-full"></span>
                <h3 class="text-[15px] font-bold text-[#0F172A]">{{ column.title }}</h3>
                <span class="text-[12px] font-semibold text-[#94A3B8] bg-[#F1F5F9] rounded-full w-[22px] h-[22px] flex items-center justify-center">{{ getTasksByStatus(column.id).length }}</span>
              </div>
            </div>

            <div class="space-y-3">
              <div
                v-for="task in getTasksByStatus(column.id)"
                :key="task.id"
                class="bg-white rounded-2xl border border-[#E2E8F0]/70 p-4 shadow-sm hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-200 cursor-pointer"
                :class="{ 'border-[#F59E0B]/50 bg-[#FFFBEB]/50': isStalling(task) }"
                @click="openTaskDetail(task)"
              >
                <!-- Stalling indicator (FR-39) -->
                <div v-if="isStalling(task)" class="mb-2">
                  <span class="text-[11px] font-semibold text-[#D97706] bg-amber-50 px-2 py-0.5 rounded-full flex items-center gap-1 w-fit">
                    <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Stalling
                  </span>
                </div>

                <!-- Deadline <24h indicator (FR-42) -->
                <div v-if="isDeadlineWarning(task)" class="mb-2">
                  <span class="text-[11px] font-semibold text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-full flex items-center gap-1 w-fit">
                    <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Due &lt; 24h
                  </span>
                </div>

                <!-- Blocked indicator (FR-40) -->
                <div v-if="task.isBlocked" class="mb-2">
                  <span class="text-[11px] font-semibold text-[#D97706] bg-amber-50 px-2 py-0.5 rounded-full flex items-center gap-1 w-fit">
                    <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    Blocked
                  </span>
                </div>

                <!-- Priority + Dependencies -->
                <div class="flex items-center gap-2 mb-2">
                  <span :class="priorityClass(task.priority)" class="text-[11px] font-bold px-2 py-0.5 rounded-full">{{ task.priority }}</span>
                  <span v-if="task.dependencies && task.dependencies.length > 0" class="text-[10px] text-[#94A3B8] flex items-center gap-1">
                    <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
                    {{ task.dependencies.length }} dep{{ task.dependencies.length > 1 ? 's' : '' }}
                  </span>
                </div>

                <!-- Title -->
                <h4 class="text-[14px] font-bold text-[#0F172A] mb-1.5 leading-snug" :class="{ 'line-through opacity-60': column.id === 'done' }">{{ task.title }}</h4>
                <p v-if="task.description" class="text-[12px] text-[#64748B] leading-[1.5] mb-3 line-clamp-2">{{ task.description }}</p>

                <!-- Progress bar for in-progress -->
                <div v-if="column.id === 'in-progress' && task.progress" class="mb-3">
                  <div class="w-full bg-[#E2E8F0] rounded-full h-[4px] overflow-hidden">
                    <div class="bg-[#2563EB] h-[4px] rounded-full" :style="{ width: task.progress + '%' }"></div>
                  </div>
                  <p class="text-[10px] text-[#94A3B8] mt-1">{{ task.progress }}% complete</p>
                </div>

                <!-- Comments indicator -->
                <div v-if="task.comments && task.comments.length > 0" class="mb-2">
                  <span class="text-[10px] text-[#64748B] flex items-center gap-1">
                    <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    {{ task.comments.length }}
                  </span>
                </div>

                <!-- Footer -->
                <div class="flex items-center justify-between mt-2">
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" :style="{ backgroundColor: getAssigneeColor(task.assignee) }">{{ getAssigneeInitial(task.assignee) }}</div>
                    <span class="text-[11px] text-[#64748B]">{{ task.assignee }}</span>
                  </div>
                  <div class="flex items-center gap-1.5 text-[#94A3B8]">
                    <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span class="text-[10px] font-medium">{{ formatDate(task.dueDate) }}</span>
                  </div>
                </div>
              </div>

              <!-- Empty state -->
              <div v-if="getTasksByStatus(column.id).length === 0" class="border-2 border-dashed border-[#E2E8F0] rounded-2xl p-6 text-center">
                <p class="text-[13px] text-[#94A3B8]">No tasks</p>
              </div>
            </div>
          </div>
        </div>

        <!-- LIST VIEW (FR-36: sort by due date, priority, assignee) -->
        <div v-if="viewMode === 'list'">
          <div class="bg-white rounded-2xl border border-[#E2E8F0]/70 overflow-hidden">
            <div class="flex items-center gap-3 px-5 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
              <span class="text-[12px] font-semibold text-[#64748B]">Sort by:</span>
              <button v-for="sortOpt in sortOptions" :key="sortOpt.key" @click="currentSort = sortOpt.key" :class="currentSort === sortOpt.key ? 'bg-[#2563EB] text-white' : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0]'" class="text-[12px] font-semibold px-3 py-1.5 rounded-lg transition">{{ sortOpt.label }}</button>
            </div>
            <table class="w-full">
              <thead>
                <tr class="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                  <th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3">Task</th>
                  <th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Status</th>
                  <th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden md:table-cell">Priority</th>
                  <th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Assignee</th>
                  <th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden md:table-cell">Due Date</th>
                  <th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="task in sortedTasks" :key="task.id" class="border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition cursor-pointer" @click="openTaskDetail(task)">
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      <div v-if="task.status === 'done'" class="w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center shrink-0">
                        <svg width="12" height="12" fill="none" stroke="white" stroke-width="3" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <div v-else class="w-5 h-5 rounded-full border-2 border-[#E2E8F0] shrink-0"></div>
                      <div>
                        <p class="text-[14px] font-semibold text-[#0F172A]" :class="{ 'line-through opacity-60': task.status === 'done' }">{{ task.title }}</p>
                        <div class="flex items-center gap-2 mt-0.5">
                          <span v-if="task.isBlocked" class="text-[11px] font-semibold text-[#D97706] flex items-center gap-1">
                            <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
                            Blocked
                          </span>
                          <span v-if="isStalling(task)" class="text-[11px] font-semibold text-[#D97706] flex items-center gap-1">
                            <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Stalling
                          </span>
                          <span v-if="isDeadlineWarning(task)" class="text-[11px] font-semibold text-[#DC2626]">Due &lt; 24h</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-4 hidden sm:table-cell">
                    <span :class="statusClass(task.status)" class="text-[12px] font-bold px-2.5 py-1 rounded-full">{{ statusLabel(task.status) }}</span>
                  </td>
                  <td class="px-5 py-4 hidden md:table-cell">
                    <span :class="priorityClass(task.priority)" class="text-[12px] font-bold px-2.5 py-1 rounded-full">{{ task.priority }}</span>
                  </td>
                  <td class="px-5 py-4 hidden lg:table-cell">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" :style="{ backgroundColor: getAssigneeColor(task.assignee) }">{{ getAssigneeInitial(task.assignee) }}</div>
                      <span class="text-[13px] text-[#475569]">{{ task.assignee }}</span>
                    </div>
                  </td>
                  <td class="px-5 py-4 hidden md:table-cell">
                    <span class="text-[13px] text-[#64748B]" :class="{ 'text-red-500 font-semibold': isDeadlineWarning(task) }">{{ formatDate(task.dueDate) }}</span>
                  </td>
                  <td class="px-5 py-4 hidden lg:table-cell">
                    <span class="text-[11px] text-[#94A3B8]">{{ getLastActivity(task) }}</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div v-if="sortedTasks.length === 0" class="p-10 text-center">
              <p class="text-[14px] text-[#94A3B8]">No tasks match your search.</p>
            </div>
          </div>
        </div>

      </div>
    </main>

    <!-- CREATE TASK MODAL (FR-33) -->
    <div v-if="showCreateTask" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6">
      <div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[560px] p-7 max-h-[90vh] overflow-y-auto">

        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-[22px] font-bold text-[#0F172A]">Create Task</h3>
            <p class="text-[13px] text-[#94A3B8] mt-1">Add a new task to the project workspace (FR-33)</p>
          </div>
          <button @click="showCreateTask = false" class="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] flex items-center justify-center text-[#64748B]">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-[13px] font-semibold text-[#334155] mb-2">Task Title *</label>
            <input v-model="newTask.title" type="text" placeholder="e.g. Design login page" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]" />
          </div>

          <div>
            <label class="block text-[13px] font-semibold text-[#334155] mb-2">Description</label>
            <textarea v-model="newTask.description" rows="3" placeholder="Describe the task (min 10 characters for time logs)" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] resize-none"></textarea>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-[13px] font-semibold text-[#334155] mb-2">Priority *</label>
              <select v-model="newTask.priority" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] focus:outline-none focus:border-[#2563EB]">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <label class="block text-[13px] font-semibold text-[#334155] mb-2">Deadline *</label>
              <input v-model="newTask.dueDate" type="date" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] focus:outline-none focus:border-[#2563EB]" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-[13px] font-semibold text-[#334155] mb-2">Assignee (FR-34)</label>
              <select v-model="newTask.assignee" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] focus:outline-none focus:border-[#2563EB]">
                <option v-for="m in teamMembers" :key="m.name" :value="m.name">{{ m.name }}{{ m.role === 'Leader' ? ' (Leader)' : '' }}</option>
              </select>
              <p class="text-[11px] text-[#94A3B8] mt-1">Only Leaders can delegate tasks (FR-34)</p>
            </div>
            <div>
              <label class="block text-[13px] font-semibold text-[#334155] mb-2">Status</label>
              <select v-model="newTask.status" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] focus:outline-none focus:border-[#2563EB]">
                <option value="backlog">Backlog</option>
                <option value="in-progress">In Progress</option>
                <option value="review">Review</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>

          <!-- Blocked (FR-40) -->
          <div>
            <label class="block text-[13px] font-semibold text-[#334155] mb-2">Blocked? (FR-40)</label>
            <div class="flex items-center gap-3">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" v-model="newTask.isBlocked" class="w-4 h-4 text-[#2563EB] rounded border-[#E2E8F0] focus:ring-[#2563EB]" />
                <span class="text-[13px] text-[#475569]">Mark task as blocked</span>
              </label>
            </div>
            <input v-if="newTask.isBlocked" v-model="newTask.blockedReason" type="text" placeholder="Reason for blocking (required)" class="mt-2 w-full bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#D97706] focus:outline-none focus:border-[#F59E0B]" />
          </div>

          <!-- Dependencies (FR-43) -->
          <div>
            <label class="block text-[13px] font-semibold text-[#334155] mb-2">Dependencies (FR-43)</label>
            <div class="flex flex-wrap gap-2">
              <button v-for="dep in availableDependencies" :key="dep.id" @click="toggleDependency(dep.id)" :class="newTask.dependencies.includes(dep.id) ? 'bg-[#2563EB] text-white border-[#2563EB]' : 'bg-[#F8FAFC] text-[#475569] border-[#E2E8F0]'" class="text-[12px] font-semibold px-3 py-1.5 rounded-lg border transition">
                {{ dep.title }}
              </button>
            </div>
            <p class="text-[11px] text-[#94A3B8] mt-1">Select tasks this task depends on. It cannot start until dependencies are completed.</p>
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-7">
          <button @click="showCreateTask = false" class="px-5 py-3 rounded-xl bg-[#F8FAFC] text-[#475569] font-semibold hover:bg-[#E2E8F0] transition">Cancel</button>
          <button @click="createTask" class="px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1E40AF] transition">Create Task</button>
        </div>
      </div>
    </div>

    <!-- TASK DETAIL MODAL -->
    <div v-if="selectedTask" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6">
      <div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[600px] p-7 max-h-[90vh] overflow-y-auto">

        <div class="flex items-center justify-between mb-5">
          <div class="flex items-center gap-2 flex-wrap">
            <span :class="priorityClass(selectedTask.priority)" class="text-[12px] font-bold px-2.5 py-1 rounded-full">{{ selectedTask.priority }}</span>
            <span :class="statusClass(selectedTask.status)" class="text-[12px] font-bold px-2.5 py-1 rounded-full">{{ statusLabel(selectedTask.status) }}</span>
            <span v-if="selectedTask.isBlocked" class="text-[12px] font-bold text-[#D97706] bg-amber-50 px-2.5 py-1 rounded-full">Blocked</span>
            <span v-if="isStalling(selectedTask)" class="text-[12px] font-bold text-[#D97706] bg-amber-50 px-2.5 py-1 rounded-full">Stalling</span>
          </div>
          <button @click="selectedTask = null" class="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] flex items-center justify-center text-[#64748B]">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
          </button>
        </div>

        <h3 class="text-[22px] font-bold text-[#0F172A] mb-2">{{ selectedTask.title }}</h3>
        <p class="text-[14px] text-[#64748B] leading-[1.7] mb-6">{{ selectedTask.description }}</p>

        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-[#F8FAFC] rounded-xl p-4">
            <p class="text-[12px] text-[#94A3B8] mb-1">Assignee</p>
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white" :style="{ backgroundColor: getAssigneeColor(selectedTask.assignee) }">{{ getAssigneeInitial(selectedTask.assignee) }}</div>
              <p class="text-[14px] font-bold text-[#0F172A]">{{ selectedTask.assignee }}</p>
            </div>
            <!-- Reassign button (FR-34: Leader only) -->
            <button v-if="isLeader" @click="showReassign = true" class="mt-2 text-[11px] font-semibold text-[#2563EB] hover:text-[#1E40AF] transition">Reassign (FR-34)</button>
          </div>
          <div class="bg-[#F8FAFC] rounded-xl p-4">
            <p class="text-[12px] text-[#94A3B8] mb-1">Due Date</p>
            <p class="text-[14px] font-bold text-[#0F172A]" :class="{ 'text-red-500': isDeadlineWarning(selectedTask) }">{{ formatDate(selectedTask.dueDate) }}</p>
            <p v-if="isDeadlineWarning(selectedTask)" class="text-[11px] text-red-500 font-medium mt-1">Less than 24h remaining!</p>
          </div>
        </div>

        <!-- Blocked Reason (FR-40) -->
        <div v-if="selectedTask.isBlocked" class="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-xl p-4 mb-6">
          <p class="text-[13px] font-semibold text-[#92400E] mb-1">Blocked Reason (FR-40):</p>
          <p class="text-[13px] text-[#78350F]/80">{{ selectedTask.blockedReason }}</p>
        </div>

        <!-- Dependencies (FR-43) -->
        <div v-if="selectedTask.dependencies && selectedTask.dependencies.length > 0" class="mb-6">
          <p class="text-[13px] font-semibold text-[#334155] mb-2">Dependencies (FR-43)</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="depId in selectedTask.dependencies" :key="depId" class="bg-[#EBF0FF] text-[#2563EB] text-[12px] font-semibold px-3 py-1 rounded-lg flex items-center gap-1.5">
              <span :class="isDepDone(depId) ? 'text-[#10B981]' : 'text-[#F59E0B]'">
                <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path v-if="isDepDone(depId)" d="M20 6L9 17l-5-5" /><path v-else d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              {{ getTaskTitle(depId) }}
            </span>
          </div>
          <p class="text-[11px] text-[#94A3B8] mt-1">This task cannot begin until the above dependencies are completed.</p>
        </div>

        <!-- Comments (FR-38) -->
        <div class="mb-6">
          <p class="text-[13px] font-semibold text-[#334155] mb-3">Comments (FR-38)</p>
          <div v-if="selectedTask.comments && selectedTask.comments.length > 0" class="space-y-3 mb-4">
            <div v-for="comment in selectedTask.comments" :key="comment.id" class="bg-[#F8FAFC] rounded-xl p-3">
              <div class="flex items-center gap-2 mb-1">
                <div class="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white" :style="{ backgroundColor: getAssigneeColor(comment.author) }">{{ getAssigneeInitial(comment.author) }}</div>
                <span class="text-[12px] font-semibold text-[#0F172A]">{{ comment.author }}</span>
                <span class="text-[11px] text-[#94A3B8]">{{ comment.timestamp }}</span>
              </div>
              <p class="text-[13px] text-[#475569] leading-[1.6]">{{ comment.text }}</p>
            </div>
          </div>
          <div class="flex gap-2">
            <input v-model="newComment" type="text" placeholder="Add a comment..." class="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-[13px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]" @keyup.enter="addComment" />
            <button @click="addComment" class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[13px] font-semibold px-4 py-2.5 rounded-xl transition">Send</button>
          </div>
        </div>

        <!-- Activity Log (FR-37) -->
        <div class="mb-6">
          <p class="text-[13px] font-semibold text-[#334155] mb-3">Activity Log (FR-37)</p>
          <div class="space-y-3">
            <div v-for="log in selectedTask.logs" :key="log.id" class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" :class="logIconClass(log.type)">
                <span class="text-[10px]" :class="logTextClass(log.type)">{{ logIcon(log.type) }}</span>
              </div>
              <div>
                <p class="text-[13px] text-[#0F172A]"><span class="font-semibold">{{ log.actor }}</span> {{ log.action }}</p>
                <p class="text-[11px] text-[#94A3B8]">{{ log.timestamp }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Change Status -->
        <div>
          <p class="text-[13px] font-semibold text-[#334155] mb-2">Move to</p>
          <div class="flex flex-wrap gap-2">
            <button v-for="col in columns" :key="col.id" @click="moveTask(selectedTask, col.id)" :class="selectedTask.status === col.id ? 'bg-[#2563EB] text-white border-[#2563EB]' : 'bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:border-[#2563EB]'" class="text-[12px] font-semibold px-4 py-2 rounded-xl border transition">
              {{ col.title }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- REASSIGN MODAL (FR-34) -->
    <div v-if="showReassign" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[60] px-6">
      <div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[400px] p-7">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-[20px] font-bold text-[#0F172A]">Reassign Task</h3>
            <p class="text-[13px] text-[#94A3B8] mt-1">Leaders can delegate tasks to members (FR-34)</p>
          </div>
          <button @click="showReassign = false" class="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] flex items-center justify-center text-[#64748B]">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
          </button>
        </div>

        <div class="space-y-3 mb-6">
          <button v-for="m in teamMembers" :key="m.name" @click="reassignTask(m.name)" :class="selectedTask && selectedTask.assignee === m.name ? 'bg-[#2563EB] text-white border-[#2563EB]' : 'bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:border-[#2563EB]'" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition text-left">
            <div class="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold text-white" :style="{ backgroundColor: m.color }">{{ m.initial }}</div>
            <div>
              <p class="text-[14px] font-semibold">{{ m.name }}</p>
              <p class="text-[12px] opacity-70">{{ m.role }}</p>
            </div>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({ layout: false })

const router = useRouter()
const showCreateTask = ref(false)
const selectedTask = ref(null)
const viewMode = ref('kanban')
const searchQuery = ref('')
const filterAssignee = ref('All')
const filterPriority = ref('All')
const currentSort = ref('dueDate')
const showReassign = ref(false)
const newComment = ref('')

const STALLING_HOURS = 48

const isLeader = true

const currentUser = { name: 'Siraj', role: 'Leader' }

const teamMembers = [
  { name: 'Siraj', initial: 'S', color: '#2563EB', role: 'Leader' },
  { name: 'Maria', initial: 'M', color: '#34D399', role: 'Member' },
  { name: 'Omar', initial: 'O', color: '#F87171', role: 'Member' },
  { name: 'Zernish', initial: 'Z', color: '#FBBF24', role: 'Member' },
  { name: 'Hashir', initial: 'H', color: '#60A5FA', role: 'Member' }
]

const columns = [
  { id: 'backlog', title: 'Backlog', dotClass: 'bg-[#64748B]' },
  { id: 'in-progress', title: 'In Progress', dotClass: 'bg-[#2563EB]' },
  { id: 'review', title: 'Review', dotClass: 'bg-[#F59E0B]' },
  { id: 'done', title: 'Done', dotClass: 'bg-[#10B981]' }
]

const sortOptions = [
  { key: 'dueDate', label: 'Due Date' },
  { key: 'priority', label: 'Priority' },
  { key: 'assignee', label: 'Assignee' }
]

const newTask = ref({
  title: '',
  description: '',
  priority: 'Medium',
  dueDate: '',
  assignee: 'Siraj',
  status: 'backlog',
  isBlocked: false,
  blockedReason: '',
  dependencies: []
})

const tasks = ref([
  {
    id: 1,
    title: 'Design ER diagram',
    description: 'Create entity-relationship diagram for the database schema covering users, projects, tasks, time logs, and messages.',
    status: 'backlog',
    priority: 'Low',
    assignee: 'Maria',
    dueDate: '2026-04-05',
    progress: null,
    isBlocked: false,
    blockedReason: '',
    dependencies: [],
    comments: [],
    lastActivityAt: new Date('2026-03-10T09:14:00'),
    logs: [
      { id: 1, type: 'create', actor: 'Siraj', action: 'created this task', timestamp: 'Mar 10, 09:14 AM' }
    ]
  },
  {
    id: 2,
    title: 'Setup auth module',
    description: 'Implement Firebase authentication with university email validation, password complexity, and activation email flow.',
    status: 'backlog',
    priority: 'High',
    assignee: 'Hashir',
    dueDate: '2026-03-28',
    progress: null,
    isBlocked: false,
    blockedReason: '',
    dependencies: [],
    comments: [
      { id: 1, author: 'Siraj', text: 'Please use the university email pattern for validation.', timestamp: 'Mar 9, 11:30 AM' }
    ],
    lastActivityAt: new Date('2026-03-09T11:00:00'),
    logs: [
      { id: 1, type: 'create', actor: 'Siraj', action: 'created this task', timestamp: 'Mar 8, 14:30 PM' }
    ]
  },
  {
    id: 3,
    title: 'Write test cases for API',
    description: 'Create unit and integration test cases for all CRUD endpoints including tasks, projects, and time logs.',
    status: 'backlog',
    priority: 'Medium',
    assignee: 'Zernish',
    dueDate: '2026-04-10',
    progress: null,
    isBlocked: false,
    blockedReason: '',
    dependencies: [2],
    comments: [],
    lastActivityAt: new Date('2026-03-09T11:00:00'),
    logs: [
      { id: 1, type: 'create', actor: 'Siraj', action: 'created this task', timestamp: 'Mar 9, 11:00 AM' }
    ]
  },
  {
    id: 4,
    title: 'Contribution analytics dashboard',
    description: 'Build the visual dashboard showing time spent, task completion stats, and comparative contribution indicators per team member.',
    status: 'in-progress',
    priority: 'High',
    assignee: 'Maria',
    dueDate: '2026-03-30',
    progress: 65,
    isBlocked: false,
    blockedReason: '',
    dependencies: [1],
    comments: [
      { id: 1, author: 'Maria', text: 'Working on the contribution bar charts first, then the summary cards.', timestamp: 'Mar 7, 10:00 AM' },
      { id: 2, author: 'Siraj', text: 'Make sure to include the workload distribution chart too.', timestamp: 'Mar 7, 11:15 AM' }
    ],
    lastActivityAt: new Date('2026-03-06T09:15:00'),
    logs: [
      { id: 1, type: 'create', actor: 'Siraj', action: 'created this task', timestamp: 'Mar 5, 10:00 AM' },
      { id: 2, type: 'status', actor: 'Maria', action: 'moved from Backlog to In Progress', timestamp: 'Mar 6, 09:15 AM' }
    ]
  },
  {
    id: 5,
    title: 'Auth & RBAC setup',
    description: 'Configure role-based access control for Team Member, Team Leader, Instructor, and Admin roles. Implement role-change audit logging.',
    status: 'review',
    priority: 'High',
    assignee: 'Omar',
    dueDate: '2026-03-25',
    progress: 90,
    isBlocked: true,
    blockedReason: 'Waiting for Firebase project credentials from instructor.',
    dependencies: [],
    comments: [
      { id: 1, author: 'Omar', text: 'All RBAC rules are implemented, just need the Firebase credentials to test the integration.', timestamp: 'Mar 12, 12:10 PM' },
      { id: 2, author: 'Siraj', text: 'I will email the instructor today to get those credentials.', timestamp: 'Mar 12, 02:30 PM' }
    ],
    lastActivityAt: new Date('2026-03-12T11:58:00'),
    logs: [
      { id: 1, type: 'create', actor: 'Siraj', action: 'created this task', timestamp: 'Mar 4, 15:00 PM' },
      { id: 2, type: 'status', actor: 'Hashir', action: 'moved from In Progress to Review', timestamp: 'Mar 11, 14:30 PM' },
      { id: 3, type: 'blocked', actor: 'Omar', action: 'marked as blocked: waiting for Firebase credentials', timestamp: 'Mar 12, 11:58 AM' }
    ]
  },
  {
    id: 6,
    title: 'Project setup',
    description: 'Initialise the Nuxt.js frontend project, configure Tailwind CSS, set up folder structure, and create base layouts.',
    status: 'done',
    priority: 'Medium',
    assignee: 'Siraj',
    dueDate: '2026-03-10',
    progress: 100,
    isBlocked: false,
    blockedReason: '',
    dependencies: [],
    comments: [],
    lastActivityAt: new Date('2026-03-03T16:00:00'),
    logs: [
      { id: 1, type: 'create', actor: 'Siraj', action: 'created this task', timestamp: 'Mar 1, 10:00 AM' },
      { id: 2, type: 'status', actor: 'Siraj', action: 'moved to Done', timestamp: 'Mar 3, 16:00 PM' }
    ]
  },
  {
    id: 7,
    title: 'Kanban board component',
    description: 'Build the Kanban board with Backlog, In Progress, Review, and Done columns as specified in FR-35.',
    status: 'done',
    priority: 'High',
    assignee: 'Siraj',
    dueDate: '2026-03-15',
    progress: 100,
    isBlocked: false,
    blockedReason: '',
    dependencies: [6],
    comments: [],
    lastActivityAt: new Date('2026-03-08T14:00:00'),
    logs: [
      { id: 1, type: 'create', actor: 'Siraj', action: 'created this task', timestamp: 'Mar 5, 09:00 AM' },
      { id: 2, type: 'status', actor: 'Siraj', action: 'moved to Done', timestamp: 'Mar 8, 14:00 PM' }
    ]
  },
  {
    id: 8,
    title: 'CI/CD pipeline',
    description: 'Set up Bitbucket Pipelines for automated build and deployment of the frontend application.',
    status: 'done',
    priority: 'Low',
    assignee: 'Omar',
    dueDate: '2026-03-12',
    progress: 100,
    isBlocked: false,
    blockedReason: '',
    dependencies: [],
    comments: [],
    lastActivityAt: new Date('2026-03-04T17:00:00'),
    logs: [
      { id: 1, type: 'create', actor: 'Siraj', action: 'created this task', timestamp: 'Mar 2, 11:00 AM' },
      { id: 2, type: 'status', actor: 'Omar', action: 'moved to Done', timestamp: 'Mar 4, 17:00 PM' }
    ]
  },
  {
    id: 9,
    title: 'Team chat interface',
    description: 'Build project-scoped chat module with persistent messages, sender identification, chronological display, and input sanitisation per FR-60.',
    status: 'in-progress',
    priority: 'Medium',
    assignee: 'Zernish',
    dueDate: '2026-04-02',
    progress: 40,
    isBlocked: false,
    blockedReason: '',
    dependencies: [6],
    comments: [
      { id: 1, author: 'Zernish', text: 'Message persistence is done, working on input sanitisation now.', timestamp: 'Mar 10, 03:45 PM' }
    ],
    lastActivityAt: new Date('2026-03-09T08:45:00'),
    logs: [
      { id: 1, type: 'create', actor: 'Siraj', action: 'created this task', timestamp: 'Mar 7, 10:30 AM' },
      { id: 2, type: 'status', actor: 'Zernish', action: 'moved from Backlog to In Progress', timestamp: 'Mar 9, 08:45 AM' }
    ]
  },
  {
    id: 10,
    title: 'Notification centre',
    description: 'Implement the notification system with Task, Mention, and System Alert categories. Include deep linking and escalation per FR-81.',
    status: 'backlog',
    priority: 'Medium',
    assignee: 'Omar',
    dueDate: '2026-04-08',
    progress: null,
    isBlocked: false,
    blockedReason: '',
    dependencies: [5],
    comments: [],
    lastActivityAt: new Date('2026-03-11T13:00:00'),
    logs: [
      { id: 1, type: 'create', actor: 'Siraj', action: 'created this task', timestamp: 'Mar 11, 13:00 PM' }
    ]
  }
])

const availableDependencies = computed(() => {
  return tasks.value.map(t => ({ id: t.id, title: t.title }))
})

const filteredTasks = computed(() => {
  return tasks.value.filter(t => {
    const q = searchQuery.value.toLowerCase()
    const matchesSearch = !q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)
    const matchesAssignee = filterAssignee.value === 'All' || t.assignee === filterAssignee.value
    const matchesPriority = filterPriority.value === 'All' || t.priority === filterPriority.value
    return matchesSearch && matchesAssignee && matchesPriority
  })
})

const priorityOrder = { 'High': 0, 'Medium': 1, 'Low': 2 }

const sortedTasks = computed(() => {
  const list = [...filteredTasks.value]
  if (currentSort.value === 'dueDate') {
    list.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
  } else if (currentSort.value === 'priority') {
    list.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
  } else if (currentSort.value === 'assignee') {
    list.sort((a, b) => a.assignee.localeCompare(b.assignee))
  }
  return list
})

const deadlineWarningTasks = computed(() => {
  return tasks.value.filter(t => isDeadlineWarning(t))
})

const stallingTasks = computed(() => {
  return tasks.value.filter(t => isStalling(t))
})

function getTasksByStatus(status) {
  return filteredTasks.value.filter(t => t.status === status)
}

function isDeadlineWarning(task) {
  if (task.status === 'done') return false
  const due = new Date(task.dueDate)
  const now = new Date()
  const diff = due - now
  return diff > 0 && diff < 24 * 60 * 60 * 1000
}

function isStalling(task) {
  if (task.status === 'done') return false
  const now = new Date()
  const lastActivity = task.lastActivityAt
  const diffHours = (now - lastActivity) / (1000 * 60 * 60)
  return diffHours > STALLING_HOURS
}

function isDepDone(depId) {
  const task = tasks.value.find(t => t.id === depId)
  return task && task.status === 'done'
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}

function getLastActivity(task) {
  if (!task.logs || task.logs.length === 0) return 'No activity'
  return task.logs[task.logs.length - 1].timestamp
}

function getAssigneeInitial(name) {
  const member = teamMembers.find(m => m.name === name)
  return member ? member.initial : name.charAt(0)
}

function getAssigneeColor(name) {
  const member = teamMembers.find(m => m.name === name)
  return member ? member.color : '#64748B'
}

function priorityClass(priority) {
  if (priority === 'High') return 'bg-red-100 text-red-600'
  if (priority === 'Medium') return 'bg-amber-100 text-amber-600'
  return 'bg-green-100 text-green-600'
}

function statusClass(status) {
  if (status === 'backlog') return 'bg-[#F1F5F9] text-[#64748B]'
  if (status === 'in-progress') return 'bg-[#EBF0FF] text-[#2563EB]'
  if (status === 'review') return 'bg-[#FEF3C7] text-[#D97706]'
  if (status === 'done') return 'bg-[#D1FAE5] text-[#10B981]'
  return 'bg-[#F1F5F9] text-[#64748B]'
}

function statusLabel(status) {
  if (status === 'in-progress') return 'In Progress'
  return status.charAt(0).toUpperCase() + status.slice(1)
}

function openCreateTask() {
  newTask.value = {
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
    assignee: 'Siraj',
    status: 'backlog',
    isBlocked: false,
    blockedReason: '',
    dependencies: []
  }
  showCreateTask.value = true
}

function openTaskDetail(task) {
  selectedTask.value = { ...task }
}

function toggleDependency(depId) {
  const idx = newTask.value.dependencies.indexOf(depId)
  if (idx >= 0) {
    newTask.value.dependencies.splice(idx, 1)
  } else {
    newTask.value.dependencies.push(depId)
  }
}

function getTaskTitle(taskId) {
  const task = tasks.value.find(t => t.id === taskId)
  return task ? task.title : ''
}

function createTask() {
  if (!newTask.value.title.trim()) return

  tasks.value.push({
    id: Date.now(),
    title: newTask.value.title,
    description: newTask.value.description,
    status: newTask.value.status,
    priority: newTask.value.priority,
    assignee: newTask.value.assignee,
    dueDate: newTask.value.dueDate,
    progress: newTask.value.status === 'in-progress' ? 10 : (newTask.value.status === 'done' ? 100 : null),
    isBlocked: newTask.value.isBlocked,
    blockedReason: newTask.value.blockedReason,
    dependencies: [...newTask.value.dependencies],
    comments: [],
    lastActivityAt: new Date(),
    logs: [
      { id: Date.now(), type: 'create', actor: currentUser.name, action: 'created this task', timestamp: 'Just now' }
    ]
  })

  newTask.value = {
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
    assignee: 'Siraj',
    status: 'backlog',
    isBlocked: false,
    blockedReason: '',
    dependencies: []
  }
  showCreateTask.value = false
}

function moveTask(task, newStatus) {
  const idx = tasks.value.findIndex(t => t.id === task.id)
  if (idx >= 0) {
    const oldStatus = tasks.value[idx].status
    tasks.value[idx].status = newStatus
    tasks.value[idx].lastActivityAt = new Date()
    tasks.value[idx].logs.push({
      id: Date.now(),
      type: 'status',
      actor: currentUser.name,
      action: `moved from ${statusLabel(oldStatus)} to ${statusLabel(newStatus)}`,
      timestamp: 'Just now'
    })
    if (newStatus === 'done') {
      tasks.value[idx].progress = 100
    }
    selectedTask.value = { ...tasks.value[idx] }
  }
}

function reassignTask(newAssignee) {
  if (!selectedTask.value) return
  const idx = tasks.value.findIndex(t => t.id === selectedTask.value.id)
  if (idx >= 0) {
    const oldAssignee = tasks.value[idx].assignee
    tasks.value[idx].assignee = newAssignee
    tasks.value[idx].lastActivityAt = new Date()
    tasks.value[idx].logs.push({
      id: Date.now(),
      type: 'reassign',
      actor: currentUser.name,
      action: `reassigned from ${oldAssignee} to ${newAssignee}`,
      timestamp: 'Just now'
    })
    selectedTask.value = { ...tasks.value[idx] }
  }
  showReassign.value = false
}

function addComment() {
  if (!newComment.value.trim() || !selectedTask.value) return
  const idx = tasks.value.findIndex(t => t.id === selectedTask.value.id)
  if (idx >= 0) {
    const comment = {
      id: Date.now(),
      author: currentUser.name,
      text: newComment.value.trim(),
      timestamp: 'Just now'
    }
    tasks.value[idx].comments.push(comment)
    tasks.value[idx].lastActivityAt = new Date()
    tasks.value[idx].logs.push({
      id: Date.now(),
      type: 'comment',
      actor: currentUser.name,
      action: `added a comment: "${newComment.value.trim().substring(0, 40)}${newComment.value.trim().length > 40 ? '...' : ''}"`,
      timestamp: 'Just now'
    })
    selectedTask.value = { ...tasks.value[idx] }
    newComment.value = ''
  }
}

function logIconClass(type) {
  if (type === 'create') return 'bg-green-100'
  if (type === 'status') return 'bg-blue-100'
  if (type === 'blocked') return 'bg-amber-100'
  if (type === 'reassign') return 'bg-purple-100'
  if (type === 'comment') return 'bg-cyan-100'
  return 'bg-gray-100'
}

function logTextClass(type) {
  if (type === 'create') return 'text-green-600'
  if (type === 'status') return 'text-blue-600'
  if (type === 'blocked') return 'text-amber-600'
  if (type === 'reassign') return 'text-purple-600'
  if (type === 'comment') return 'text-cyan-600'
  return 'text-gray-600'
}

function logIcon(type) {
  if (type === 'create') return '+'
  if (type === 'status') return '\u270E'
  if (type === 'blocked') return '\u26A0'
  if (type === 'reassign') return '\u21BB'
  if (type === 'comment') return '\u270E'
  return '\u2022'
}

const logout = () => {
  router.push('/login')
}
</script>