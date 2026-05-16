<template>
  <div class="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#EEF2FF] flex overflow-hidden">
    <!-- ===== SIDEBAR ===== -->
    <aside class="w-[280px] bg-white/95 backdrop-blur-xl border-r border-[#E2E8F0] hidden lg:flex flex-col">
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

      <div class="px-4 pb-4">
        <div class="rounded-3xl bg-gradient-to-br from-[#EFF6FF] to-[#EEF2FF] border border-[#DBEAFE] p-5">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg></div>

            <span class="text-[11px] font-black text-[#2563EB] bg-white px-3 py-1 rounded-full">
              LIVE
            </span>
          </div>

          <h3 class="text-[14px] font-black text-[#0F172A] mb-2">
            Project Resources
          </h3>

          <p class="text-[12px] text-[#64748B] leading-[1.6]">
            Upload files, folders, reports, and handover evidence.
          </p>
        </div>
      </div>

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
      <header class="bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] px-8 py-5 flex items-center justify-between sticky top-0 z-40">
        <div>
          <div class="flex items-center gap-3 mb-1">
            <h2 class="text-[30px] font-black tracking-tight text-[#0F172A]">
              Projects
            </h2>

            <span class="bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] text-[12px] font-black px-3 py-1 rounded-full">
              Workspace Control
            </span>
          </div>

          <p class="text-[14px] text-[#64748B]">
            Manage academic project workspaces, resources, progress, time logs, and activity.
          </p>
        </div>

        <div class="flex items-center gap-4">
          <button
            @click="openFilePicker"
            class="hidden sm:flex bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#2563EB] border border-[#BFDBFE] text-[14px] font-black px-5 py-3 rounded-2xl transition"
          >
            Upload File
          </button>

          <button
            @click="showCreateProject = true"
            class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[14px] font-black px-5 py-3 rounded-2xl transition shadow-lg shadow-blue-500/20"
          >
            + Create Project
          </button>
        </div>
      </header>

      <input
        ref="fileInput"
        type="file"
        multiple
        class="hidden"
        @change="handleFileUpload"
      />

      <input
        ref="folderInput"
        type="file"
        multiple
        webkitdirectory
        directory
        class="hidden"
        @change="handleFolderUpload"
      />

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

        <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <!-- ===== LEFT ===== -->
          <div class="xl:col-span-2 space-y-8">
            <div class="bg-white rounded-[30px] border border-[#E2E8F0] p-6 shadow-sm">
              <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-5">
                <div>
                  <h3 class="text-[20px] font-black text-[#0F172A]">
                    Project Workspaces
                  </h3>
                  <p class="text-[13px] text-[#64748B] mt-1">
                    Search, filter, and review active academic project spaces.
                  </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-3">
                  <div class="flex items-center gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-4 py-3 min-w-[280px]">
                    <span class="text-[15px]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></span>

                    <input
                      v-model="search"
                      type="text"
                      placeholder="Search projects..."
                      class="w-full bg-transparent text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] outline-none"
                    />
                  </div>

                  <select
                    v-model="selectedStatus"
                    class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-4 py-3 text-[14px] text-[#0F172A] font-semibold outline-none focus:border-[#2563EB]"
                  >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="In Review">In Review</option>
                    <option value="At Risk">At Risk</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-[30px] border border-[#E2E8F0] p-6 shadow-sm">
              <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <div class="flex items-center gap-3 mb-2">
                    <div class="w-11 h-11 rounded-2xl bg-[#EFF6FF] flex items-center justify-center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></div>

                    <div>
                      <h3 class="text-[20px] font-black text-[#0F172A]">
                        Project Resource Upload
                      </h3>
                      <p class="text-[13px] text-[#64748B] mt-1">
                        Upload files or full folders for project documentation.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-3">
                  <button
                    @click="openFilePicker"
                    class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[14px] font-black px-5 py-3 rounded-2xl transition shadow-lg shadow-blue-500/20"
                  >
                    Upload Files
                  </button>

                  <button
                    @click="openFolderPicker"
                    class="bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] text-[14px] font-black px-5 py-3 rounded-2xl transition"
                  >
                    Upload Folder
                  </button>
                </div>
              </div>

              <div class="mt-6 border-2 border-dashed border-[#BFDBFE] bg-[#F8FAFC] rounded-[28px] p-7 text-center">
                <div class="w-14 h-14 mx-auto rounded-3xl bg-white border border-[#E2E8F0] flex items-center justify-center shadow-sm mb-4"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg></div>

                <h4 class="text-[17px] font-black text-[#0F172A]">
                  Add project files or folders
                </h4>

                <p class="text-[13px] text-[#64748B] mt-2 max-w-[540px] mx-auto leading-[1.7]">
                  Select reports, screenshots, UI assets, code folders, meeting notes, or handover evidence.
                  This is a frontend upload preview and can later connect to backend storage.
                </p>

                <div class="flex justify-center gap-3 mt-5">
                  <button
                    @click="openFilePicker"
                    class="bg-white hover:bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE] text-[13px] font-black px-4 py-2.5 rounded-2xl transition"
                  >
                    Choose Files
                  </button>

                  <button
                    @click="openFolderPicker"
                    class="bg-white hover:bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE] text-[13px] font-black px-4 py-2.5 rounded-2xl transition"
                  >
                    Choose Folder
                  </button>
                </div>
              </div>

              <div
                v-if="uploadedItems.length > 0"
                class="mt-6"
              >
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <h4 class="text-[16px] font-black text-[#0F172A]">
                      Uploaded Items
                    </h4>
                    <p class="text-[12px] text-[#94A3B8] mt-1">
                      {{ uploadedItems.length }} item(s) selected • {{ totalUploadSize }}
                    </p>
                  </div>

                  <button
                    @click="clearUploads"
                    class="text-[12px] font-black text-red-500 hover:underline"
                  >
                    Clear All
                  </button>
                </div>

                <div class="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                  <div
                    v-for="item in uploadedItems"
                    :key="item.id"
                    class="flex items-center justify-between bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4"
                  >
                    <div class="flex items-center gap-4 min-w-0">
                      <div
                        class="w-11 h-11 rounded-2xl flex items-center justify-center"
                        :class="item.type === 'Folder' ? 'bg-[#FEF3C7]' : 'bg-[#EFF6FF]'"
                      >
                        <svg v-if="item.type === 'Folder'" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
                        <svg v-else width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      </div>

                      <div class="min-w-0">
                        <h5 class="text-[14px] font-black text-[#0F172A] truncate">
                          {{ item.name }}
                        </h5>
                        <p class="text-[12px] text-[#64748B] mt-0.5 truncate">
                          {{ item.type }} • {{ item.size }} • {{ item.path }}
                        </p>
                      </div>
                    </div>

                    <span class="text-[11px] font-black bg-[#ECFDF5] text-[#059669] px-3 py-1 rounded-full">
                      Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div
                v-for="project in filteredProjects"
                :key="project.id"
                class="bg-white border border-[#E2E8F0] rounded-[30px] p-6 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300"
              >
                <div class="flex items-start justify-between mb-5">
                  <div>
                    <div class="flex items-center gap-3 mb-2">
                      <div
                        class="w-11 h-11 rounded-2xl flex items-center justify-center"
                        :class="project.iconBg"
                      >
                        <span v-html="project.icon"></span>
                      </div>

                      <div>
                        <h3 class="text-[19px] font-black text-[#0F172A]">
                          {{ project.name }}
                        </h3>
                        <p class="text-[12px] text-[#94A3B8] font-semibold">
                          {{ project.code }}
                        </p>
                      </div>
                    </div>

                    <p class="text-[13px] text-[#64748B] leading-[1.7]">
                      {{ project.description }}
                    </p>
                  </div>

                  <span
                    class="text-[11px] font-black px-3 py-1 rounded-full"
                    :class="statusClass(project.status)"
                  >
                    {{ project.status }}
                  </span>
                </div>

                <div
                  v-if="project.inactiveMembers > 0"
                  class="mb-5 bg-red-50 border border-red-100 rounded-3xl p-4 flex items-start gap-3"
                >
                  <div class="w-9 h-9 rounded-2xl bg-white flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>

                  <div>
                    <h4 class="text-[13px] font-black text-red-600">
                      {{ project.inactiveMembers }} inactive member detected
                    </h4>
                    <p class="text-[12px] text-red-500 mt-1 leading-[1.6]">
                      Backend email alert can notify inactive members and team leaders.
                    </p>
                  </div>
                </div>

                <div class="mb-5">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-[13px] font-black text-[#475569]">
                      Progress
                    </span>

                    <span class="text-[13px] font-black text-[#2563EB]">
                      {{ project.progress }}%
                    </span>
                  </div>

                  <div class="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                    <div
                      class="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] h-2.5 rounded-full"
                      :style="{ width: project.progress + '%' }"
                    ></div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-5">
                  <div
                    v-for="metric in project.metrics"
                    :key="metric.label"
                    class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4"
                  >
                    <p class="text-[12px] text-[#94A3B8] font-semibold mb-1">
                      {{ metric.label }}
                    </p>
                    <p class="text-[14px] font-black text-[#0F172A]">
                      {{ metric.value }}
                    </p>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-[12px] text-[#94A3B8] font-semibold mb-2">
                      Members
                    </p>

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
                  </div>

                  <div class="flex gap-2">
                    <button
                      @click="selectedProject = project"
                      class="bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE] text-[13px] font-black px-4 py-2.5 rounded-2xl transition"
                    >
                      Details
                    </button>

                    <NuxtLink
                      to="/tasks"
                      class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[13px] font-black px-4 py-2.5 rounded-2xl transition"
                    >
                      Tasks
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="filteredProjects.length === 0"
              class="bg-white border border-[#E2E8F0] rounded-[30px] p-10 text-center"
            >
              <div class="text-[34px] mb-3"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
              <h3 class="text-[20px] font-black text-[#0F172A] mb-2">
                No projects found
              </h3>
              <p class="text-[#64748B] text-[14px]">
                Try changing your search or status filter.
              </p>
            </div>
          </div>

          <!-- ===== RIGHT ===== -->
          <div class="space-y-8">
            <div class="relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-[30px] p-6 text-white shadow-xl shadow-blue-500/20">
              <div class="absolute -right-14 -top-14 w-40 h-40 rounded-full bg-white/10 blur-xl"></div>

              <div class="relative flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-2xl bg-white/20 border border-white/10 flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>

                <div>
                  <h3 class="font-black text-[19px]">
                    Project Intelligence
                  </h3>
                  <p class="text-blue-100 text-[13px]">
                    Workspace-level guidance
                  </p>
                </div>
              </div>

              <div class="relative space-y-4">
                <div class="bg-white/10 border border-white/10 rounded-3xl p-4">
                  <p class="text-[12px] text-blue-100 font-black mb-2">
                    PROJECT HEALTH
                  </p>
                  <p class="text-[14px] leading-[1.7] text-blue-50">
                    3 of 4 active projects are progressing normally. One project needs review.
                  </p>
                </div>

                <div class="bg-white/10 border border-white/10 rounded-3xl p-4">
                  <p class="text-[12px] text-blue-100 font-black mb-2">
                    TIME TRACKING
                  </p>
                  <p class="text-[14px] leading-[1.7] text-blue-50">
                    {{ totalTimeLogged }} logged across active project workspaces.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-[30px] border border-[#E2E8F0] p-6 shadow-sm">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-[20px] font-black text-[#0F172A]">
                    Time Summary
                  </h3>
                  <p class="text-[13px] text-[#64748B] mt-1">
                    Project-level tracked effort.
                  </p>
                </div>

                <span class="text-[12px] bg-[#EFF6FF] text-[#2563EB] font-black px-3 py-1 rounded-full">
                  Synced by Backend
                </span>
              </div>

              <div class="bg-[#0F172A] rounded-3xl p-6 text-center mb-5">
                <p class="text-[12px] text-[#94A3B8] font-bold mb-2">
                  Total Logged Time
                </p>

                <div class="text-[38px] font-black text-white tracking-tight">
                  {{ totalTimeLogged }}
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4">
                  <p class="text-[12px] text-[#94A3B8]">
                    Completed Tasks
                  </p>
                  <p class="text-[18px] font-black text-[#0F172A] mt-1">
                    {{ totalCompletedTasks }} / {{ totalTaskCount }}
                  </p>
                </div>

                <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4">
                  <p class="text-[12px] text-[#94A3B8]">
                    Inactive Alerts
                  </p>
                  <p class="text-[18px] font-black text-[#0F172A] mt-1">
                    {{ totalInactiveMembers }}
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-[30px] border border-[#E2E8F0] p-6 shadow-sm">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-[20px] font-black text-[#0F172A]">
                    Workspace Preview
                  </h3>
                  <p class="text-[13px] text-[#64748B] mt-1">
                    Selected project summary.
                  </p>
                </div>

                <span class="text-[12px] bg-[#EFF6FF] text-[#2563EB] font-black px-3 py-1 rounded-full">
                  Live
                </span>
              </div>

              <div
                v-if="selectedProject"
                class="space-y-4"
              >
                <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-5">
                  <div class="flex items-center gap-3 mb-3">
                    <div
                      class="w-11 h-11 rounded-2xl flex items-center justify-center"
                      :class="selectedProject.iconBg"
                    >
                      <span v-html="selectedProject.icon"></span>
                    </div>

                    <div>
                      <h4 class="font-black text-[#0F172A]">
                        {{ selectedProject.name }}
                      </h4>
                      <p class="text-[12px] text-[#94A3B8]">
                        {{ selectedProject.code }}
                      </p>
                    </div>
                  </div>

                  <p class="text-[13px] text-[#64748B] leading-[1.7]">
                    {{ selectedProject.description }}
                  </p>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4">
                    <p class="text-[12px] text-[#94A3B8]">Status</p>
                    <p class="text-[14px] font-black text-[#0F172A] mt-1">
                      {{ selectedProject.status }}
                    </p>
                  </div>

                  <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4">
                    <p class="text-[12px] text-[#94A3B8]">Progress</p>
                    <p class="text-[14px] font-black text-[#0F172A] mt-1">
                      {{ selectedProject.progress }}%
                    </p>
                  </div>

                  <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4">
                    <p class="text-[12px] text-[#94A3B8]">Completed</p>
                    <p class="text-[14px] font-black text-[#0F172A] mt-1">
                      {{ selectedProject.completedTasks }}
                    </p>
                  </div>

                  <div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4">
                    <p class="text-[12px] text-[#94A3B8]">Time</p>
                    <p class="text-[14px] font-black text-[#0F172A] mt-1">
                      {{ selectedProject.timeLogged }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-[30px] border border-[#E2E8F0] p-6 shadow-sm">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-[20px] font-black text-[#0F172A]">
                    Recent Activity
                  </h3>
                  <p class="text-[13px] text-[#64748B] mt-1">
                    Latest workspace updates.
                  </p>
                </div>
              </div>

              <div class="space-y-4">
                <div
                  v-for="activity in activities"
                  :key="activity.title"
                  class="flex gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4"
                >
                  <div
                    class="w-10 h-10 rounded-2xl flex items-center justify-center"
                    :class="activity.bg"
                  >
                    <span v-html="activity.icon"></span>
                  </div>

                  <div>
                    <h4 class="text-[14px] font-black text-[#0F172A]">
                      {{ activity.title }}
                    </h4>
                    <p class="text-[12px] text-[#64748B] mt-1 leading-[1.6]">
                      {{ activity.message }}
                    </p>
                    <p class="text-[11px] text-[#94A3B8] mt-2">
                      {{ activity.time }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- ===== CREATE PROJECT MODAL ===== -->
    <div
      v-if="showCreateProject"
      class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6"
    >
      <div class="bg-white rounded-[30px] border border-[#E2E8F0] shadow-2xl shadow-slate-900/20 w-full max-w-[560px] p-7">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-[22px] font-black text-[#0F172A]">
              Create Project
            </h3>

            <p class="text-[13px] text-[#64748B] mt-1">
              Create a frontend prototype workspace.
            </p>
          </div>

          <button
            @click="showCreateProject = false"
            class="w-10 h-10 rounded-2xl bg-[#F8FAFC] hover:bg-[#E2E8F0] flex items-center justify-center font-black transition"
          >
            ×
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-[13px] font-black text-[#334155] mb-2">
              Project Name
            </label>

            <input
              v-model="newProject.name"
              type="text"
              placeholder="Example: Final Report Submission"
              class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]"
            />
          </div>

          <div>
            <label class="block text-[13px] font-black text-[#334155] mb-2">
              Description
            </label>

            <textarea
              v-model="newProject.description"
              rows="3"
              placeholder="Brief project description"
              class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB] resize-none"
            ></textarea>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-[13px] font-black text-[#334155] mb-2">
                Deadline
              </label>

              <input
                v-model="newProject.deadline"
                type="date"
                class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]"
              />
            </div>

            <div>
              <label class="block text-[13px] font-black text-[#334155] mb-2">
                Status
              </label>

              <select
                v-model="newProject.status"
                class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]"
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
            class="px-5 py-3 rounded-2xl bg-[#F8FAFC] text-[#475569] font-black hover:bg-[#E2E8F0] transition"
          >
            Cancel
          </button>

          <button
            @click="createProject"
            class="px-5 py-3 rounded-2xl bg-[#2563EB] text-white font-black hover:bg-[#1E40AF] transition shadow-lg shadow-blue-500/20"
          >
            Save Project
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

const fileInput = ref(null)
const folderInput = ref(null)

const search = ref('')
const selectedStatus = ref('All')
const showCreateProject = ref(false)
const selectedProject = ref(null)
const uploadedItems = ref([])

const newProject = ref({
  name: '',
  description: '',
  deadline: '',
  status: 'Active'
})

const navigation = [
  { name: 'Dashboard', to: '/dashboard', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>', active: false },
  { name: 'Projects', to: '/projects', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>', active: true },
  { name: 'Tasks', to: '/tasks', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>', active: false },
  { name: 'Team', to: '/team', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>', active: false },
  { name: 'Team Chat', to: '/chat', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>', active: false }
]

const projects = ref([
  {
    id: 1,
    code: 'TT-FE-01',
    name: 'TeamTrack Frontend',
    description: 'Landing page, authentication screens, dashboard interface, and responsive project layout.',
    status: 'Active',
    progress: 72,
    inactiveMembers: 0,
    completedTasks: 8,
    totalTasks: 12,
    timeLogged: '18h 30m',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    iconBg: 'bg-[#EFF6FF]',
    metrics: [
      { label: 'Deadline', value: '29 Mar 2026' },
      { label: 'Time Logged', value: '18h 30m' },
      { label: 'Tasks', value: '8 / 12' },
      { label: 'Contribution', value: 'Balanced' }
    ],
    members: ['S', 'Z', 'M']
  },
  {
    id: 2,
    code: 'TT-AI-02',
    name: 'AI Chatbot Prototype',
    description: 'Project-aware assistant interface with suggested prompts, response area, and AI guidance cards.',
    status: 'In Review',
    progress: 65,
    inactiveMembers: 0,
    completedTasks: 5,
    totalTasks: 8,
    timeLogged: '9h 45m',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    iconBg: 'bg-[#F5F3FF]',
    metrics: [
      { label: 'Deadline', value: '24 Mar 2026' },
      { label: 'Time Logged', value: '9h 45m' },
      { label: 'Tasks', value: '5 / 8' },
      { label: 'Contribution', value: 'Good' }
    ],
    members: ['S', 'O']
  },
  {
    id: 3,
    code: 'TT-TASK-03',
    name: 'Task Tracking Module',
    description: 'Kanban task workflow with ownership, status movement, deadlines, and activity visibility.',
    status: 'Active',
    progress: 58,
    inactiveMembers: 1,
    completedTasks: 6,
    totalTasks: 10,
    timeLogged: '11h 10m',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    iconBg: 'bg-[#ECFDF5]',
    metrics: [
      { label: 'Deadline', value: '27 Mar 2026' },
      { label: 'Time Logged', value: '11h 10m' },
      { label: 'Tasks', value: '6 / 10' },
      { label: 'Contribution', value: 'Needs Review' }
    ],
    members: ['M', 'Z', 'S']
  },
  {
    id: 4,
    code: 'TT-AN-04',
    name: 'Contribution Analytics',
    description: 'Dashboard widgets for contribution balance, workload distribution, and time-based evidence.',
    status: 'At Risk',
    progress: 42,
    inactiveMembers: 1,
    completedTasks: 3,
    totalTasks: 9,
    timeLogged: '6h 20m',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    iconBg: 'bg-[#FEF2F2]',
    metrics: [
      { label: 'Deadline', value: '25 Mar 2026' },
      { label: 'Time Logged', value: '6h 20m' },
      { label: 'Tasks', value: '3 / 9' },
      { label: 'Contribution', value: 'Uneven' }
    ],
    members: ['O', 'M']
  }
])

selectedProject.value = projects.value[0]

const memberColors = {
  S: 'bg-[#2563EB]',
  Z: 'bg-[#7C3AED]',
  M: 'bg-[#D97706]',
  O: 'bg-[#059669]'
}

const totalCompletedTasks = computed(() => {
  return projects.value.reduce((total, project) => total + project.completedTasks, 0)
})

const totalTaskCount = computed(() => {
  return projects.value.reduce((total, project) => total + project.totalTasks, 0)
})

const totalInactiveMembers = computed(() => {
  return projects.value.reduce((total, project) => total + project.inactiveMembers, 0)
})

const totalTimeLogged = computed(() => {
  const totalMinutes = projects.value.reduce((total, project) => {
    const match = project.timeLogged.match(/(\d+)h\s*(\d+)?m?/)
    const hours = match ? Number(match[1] || 0) : 0
    const minutes = match ? Number(match[2] || 0) : 0

    return total + hours * 60 + minutes
  }, 0)

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  return `${hours}h ${minutes}m`
})

const totalUploadSize = computed(() => {
  const totalBytes = uploadedItems.value.reduce((sum, item) => sum + item.rawSize, 0)
  return formatFileSize(totalBytes)
})

const stats = computed(() => [
  {
    label: 'Total Projects',
    value: String(projects.value.length),
    caption: 'workspaces',
    badge: 'Active',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
    bg: 'bg-[#EFF6FF]',
    glow: 'bg-[#DBEAFE]',
    badgeClass: 'bg-green-50 text-green-600'
  },
  {
    label: 'Completed Tasks',
    value: String(totalCompletedTasks.value),
    caption: `/ ${totalTaskCount.value} tasks`,
    badge: 'Tracked',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
    bg: 'bg-[#ECFDF5]',
    glow: 'bg-[#BBF7D0]',
    badgeClass: 'bg-green-50 text-green-600'
  },
  {
    label: 'Time Logged',
    value: totalTimeLogged.value,
    caption: 'total',
    badge: 'Logged',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    bg: 'bg-[#FFFBEB]',
    glow: 'bg-[#FDE68A]',
    badgeClass: 'bg-amber-50 text-amber-600'
  },
  {
    label: 'Team Members',
    value: '12',
    caption: 'assigned',
    badge: totalInactiveMembers.value > 0 ? `${totalInactiveMembers.value} alerts` : 'Live',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    bg: 'bg-[#F5F3FF]',
    glow: 'bg-[#DDD6FE]',
    badgeClass: totalInactiveMembers.value > 0 ? 'bg-red-50 text-red-600' : 'bg-purple-50 text-purple-600'
  }
])

const activities = [
  {
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    title: 'Upload area added',
    message: 'Project page supports file and folder selection for handover evidence.',
    time: 'Just now',
    bg: 'bg-[#EFF6FF]'
  },
  {
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    title: 'Time log updated',
    message: 'Total project time has been calculated across active workspaces.',
    time: '8 minutes ago',
    bg: 'bg-[#FEF3C7]'
  },
  {
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
    title: 'Completed tasks tracked',
    message: 'Task completion summary is now visible in the project overview.',
    time: '12 minutes ago',
    bg: 'bg-[#ECFDF5]'
  },
  {
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    title: 'Inactive member warning',
    message: 'Email alerts should be handled by backend and displayed in Team.',
    time: '18 minutes ago',
    bg: 'bg-[#FEF2F2]'
  }
]

const filteredProjects = computed(() => {
  return projects.value.filter((project) => {
    const searchValue = search.value.toLowerCase()

    const matchesSearch =
      project.name.toLowerCase().includes(searchValue) ||
      project.code.toLowerCase().includes(searchValue)

    const matchesStatus =
      selectedStatus.value === 'All' || project.status === selectedStatus.value

    return matchesSearch && matchesStatus
  })
})

const statusClass = (status) => {
  if (status === 'Active') return 'bg-green-100 text-green-600'
  if (status === 'In Review') return 'bg-blue-100 text-blue-600'
  if (status === 'At Risk') return 'bg-red-100 text-red-600'
  return 'bg-gray-100 text-gray-600'
}

const openFilePicker = () => {
  fileInput.value?.click()
}

const openFolderPicker = () => {
  folderInput.value?.click()
}

const handleFileUpload = (event) => {
  const files = Array.from(event.target.files || [])

  const formattedFiles = files.map((file, index) => ({
    id: `file-${Date.now()}-${index}`,
    name: file.name,
    type: 'File',
    size: formatFileSize(file.size),
    rawSize: file.size,
    path: file.name,
    file
  }))

  uploadedItems.value = [...uploadedItems.value, ...formattedFiles]
  event.target.value = ''
}

const handleFolderUpload = (event) => {
  const files = Array.from(event.target.files || [])

  const formattedFiles = files.map((file, index) => ({
    id: `folder-${Date.now()}-${index}`,
    name: file.name,
    type: 'Folder',
    size: formatFileSize(file.size),
    rawSize: file.size,
    path: file.webkitRelativePath || file.name,
    file
  }))

  uploadedItems.value = [...uploadedItems.value, ...formattedFiles]
  event.target.value = ''
}

const clearUploads = () => {
  uploadedItems.value = []
}

const formatFileSize = (bytes) => {
  if (!bytes) return '0 B'

  const units = ['B', 'KB', 'MB', 'GB']
  const index = Math.floor(Math.log(bytes) / Math.log(1024))
  const size = bytes / Math.pow(1024, index)

  return `${size.toFixed(size >= 10 || index === 0 ? 0 : 1)} ${units[index]}`
}

const createProject = () => {
  if (!newProject.value.name.trim()) return

  const project = {
    id: Date.now(),
    code: `TT-NEW-${projects.value.length + 1}`,
    name: newProject.value.name,
    description: newProject.value.description || 'New academic project workspace.',
    status: newProject.value.status,
    progress: 0,
    inactiveMembers: 0,
    completedTasks: 0,
    totalTasks: 0,
    timeLogged: '0h 0m',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    iconBg: 'bg-[#EFF6FF]',
    metrics: [
      { label: 'Deadline', value: newProject.value.deadline || 'Not set' },
      { label: 'Time Logged', value: '0h 0m' },
      { label: 'Tasks', value: '0 / 0' },
      { label: 'Contribution', value: 'Pending' }
    ],
    members: ['S']
  }

  projects.value.unshift(project)
  selectedProject.value = project

  newProject.value = {
    name: '',
    description: '',
    deadline: '',
    status: 'Active'
  }

  showCreateProject.value = false
}

const logout = () => {
  router.push('/login')
}
</script>