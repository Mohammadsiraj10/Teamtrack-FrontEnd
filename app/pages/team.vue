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
        <NuxtLink to="/tasks" class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition">
          <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></span> Tasks
        </NuxtLink>
        <NuxtLink to="/team" class="flex items-center gap-3 bg-[#2563EB] text-white px-4 py-3 rounded-xl font-semibold">
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
      <header class="bg-white border-b border-[#E2E8F0] px-8 py-5 flex items-center justify-between">
        <div>
          <h2 class="text-[28px] font-bold text-[#0F172A]">Team</h2>
          <p class="text-[14px] text-[#94A3B8] mt-1">Manage members, roles, and invitations for your project workspace.</p>
        </div>
        <div class="flex items-center gap-3">
          <button @click="showJoinCode = true" class="bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#2563EB] text-[14px] font-semibold px-5 py-3 rounded-xl transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg> Join Code
          </button>
          <button @click="showInviteMember = true" class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[14px] font-semibold px-5 py-3 rounded-xl transition shadow-sm hover:shadow-lg">
            + Invite Member
          </button>
        </div>
      </header>

      <div class="p-8">

        <!-- STATS CARDS -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#EBF0FF] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div>
              <span class="text-[12px] text-[#10B981] font-semibold">Active</span>
            </div>
            <p class="text-[14px] text-[#94A3B8] mb-1">Total Members</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">{{ members.length }}</h3>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#DCFCE7] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
              <span class="text-[12px] text-[#2563EB] font-semibold">Leaders</span>
            </div>
            <p class="text-[14px] text-[#94A3B8] mb-1">Leaders</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">{{ members.filter(m => m.role === 'Leader').length }}</h3>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#FEF3C7] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <span class="text-[12px] text-[#F59E0B] font-semibold">Pending</span>
            </div>
            <p class="text-[14px] text-[#94A3B8] mb-1">Pending Invites</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">{{ pendingInvites.length }}</h3>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#F3E8FF] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg></div>
              <span class="text-[12px] text-[#9333EA] font-semibold">Log</span>
            </div>
            <p class="text-[14px] text-[#94A3B8] mb-1">Role Changes</p>
            <h3 class="text-[32px] font-bold text-[#0F172A]">{{ roleChangeLog.length }}</h3>
          </div>
        </div>

        <!-- SEARCH & FILTER -->
        <div class="bg-white border border-[#E2E8F0]/70 rounded-3xl p-5 mb-8 shadow-sm">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h3 class="text-[18px] font-bold text-[#0F172A]">Team Members</h3>
              <p class="text-[13px] text-[#94A3B8] mt-1">Membership list with names, emails, and roles (FR 3.3.3.5)</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
              <input v-model="searchQuery" type="text" placeholder="Search members..." class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB] w-[220px]" />
              <select v-model="filterRole" class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]">
                <option value="All">All Roles</option>
                <option value="Leader">Leader</option>
                <option value="Member">Member</option>
                <option value="Instructor">Instructor</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div>
        </div>

        <!-- MEMBERS GRID -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          <div v-for="member in filteredMembers" :key="member.id" class="bg-white border border-[#E2E8F0]/70 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-[20px]" :style="{ backgroundColor: member.color }">
                  {{ member.initial }}
                </div>
                <div>
                  <h3 class="text-[18px] font-bold text-[#0F172A]">{{ member.name }}</h3>
                  <p class="text-[13px] text-[#94A3B8]">{{ member.email }}</p>
                </div>
              </div>
              <span :class="roleBadgeClass(member.role)" class="text-[12px] font-bold px-3 py-1 rounded-full">
                {{ member.role }}
              </span>
            </div>

            <!-- Member Details -->
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="bg-[#F8FAFC] rounded-2xl p-4">
                <p class="text-[12px] text-[#94A3B8] mb-1">Tasks Assigned</p>
                <p class="text-[14px] font-bold text-[#0F172A]">{{ member.tasksAssigned }}</p>
              </div>
              <div class="bg-[#F8FAFC] rounded-2xl p-4">
                <p class="text-[12px] text-[#94A3B8] mb-1">Tasks Completed</p>
                <p class="text-[14px] font-bold text-[#0F172A]">{{ member.tasksCompleted }}</p>
              </div>
              <div class="bg-[#F8FAFC] rounded-2xl p-4">
                <p class="text-[12px] text-[#94A3B8] mb-1">Time Logged</p>
                <p class="text-[14px] font-bold text-[#0F172A]">{{ member.timeLogged }}</p>
              </div>
              <div class="bg-[#F8FAFC] rounded-2xl p-4">
                <p class="text-[12px] text-[#94A3B8] mb-1">Joined</p>
                <p class="text-[14px] font-bold text-[#0F172A]">{{ member.joinedDate }}</p>
              </div>
            </div>

            <!-- Contribution Bar -->
            <div class="mb-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[13px] font-semibold text-[#475569]">Contribution</span>
                <span class="text-[13px] font-bold" :class="member.contribution >= 70 ? 'text-[#10B981]' : member.contribution >= 40 ? 'text-[#F59E0B]' : 'text-[#F87171]'">{{ member.contribution }}%</span>
              </div>
              <div class="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                <div class="h-2 rounded-full transition-all duration-500" :class="member.contribution >= 70 ? 'bg-[#10B981]' : member.contribution >= 40 ? 'bg-[#F59E0B]' : 'bg-[#F87171]'" :style="{ width: member.contribution + '%' }"></div>
              </div>
            </div>

            <!-- Actions (Leader only) -->
            <div v-if="isLeader" class="flex items-center gap-2 pt-4 border-t border-[#F1F5F9]">
              <button v-if="member.role === 'Member'" @click="promoteMember(member)" class="text-[12px] font-semibold text-[#2563EB] bg-[#EFF6FF] hover:bg-[#DBEAFE] px-3 py-2 rounded-xl transition flex items-center gap-1">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                Promote to Leader (FR 3.3.3.7)
              </button>
              <button v-if="member.role === 'Leader' && member.id !== currentUser.id" @click="demoteLeader(member)" class="text-[12px] font-semibold text-[#9333EA] bg-purple-50 hover:bg-purple-100 px-3 py-2 rounded-xl transition flex items-center gap-1">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                Demote to Member
              </button>
              <button v-if="member.role !== 'Admin' && member.id !== currentUser.id" @click="confirmRemoveMember(member)" class="text-[12px] font-semibold text-[#F87171] bg-red-50 hover:bg-red-100 px-3 py-2 rounded-xl transition flex items-center gap-1 ml-auto">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 7l-10 10M7 7l10 10" /></svg>
                Remove (FR 3.3.3.8)
              </button>
            </div>

            <!-- Instructor/Admin badge -->
            <div v-if="member.role === 'Instructor'" class="pt-4 border-t border-[#F1F5F9]">
              <p class="text-[11px] text-[#94A3B8] italic">Read-only access — can view project progress, analytics, and activity logs (FR 3.2.3.5)</p>
            </div>
            <div v-if="member.role === 'Admin'" class="pt-4 border-t border-[#F1F5F9]">
              <p class="text-[11px] text-[#94A3B8] italic">Platform management access — cannot edit project-specific academic content (FR 3.2.3.6)</p>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="filteredMembers.length === 0" class="bg-white border border-[#E2E8F0] rounded-3xl p-10 text-center">
          <h3 class="text-[20px] font-bold text-[#0F172A] mb-2">No members found</h3>
          <p class="text-[#94A3B8] text-[14px]">Try changing your search or role filter.</p>
        </div>

        <!-- PENDING INVITATIONS -->
        <div v-if="pendingInvites.length > 0" class="mb-8">
          <h3 class="text-[18px] font-bold text-[#0F172A] mb-4">Pending Invitations</h3>
          <div class="space-y-3">
            <div v-for="invite in pendingInvites" :key="invite.id" class="bg-white border border-[#E2E8F0]/70 rounded-2xl p-4 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#94A3B8]">
                  <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p class="text-[14px] font-bold text-[#0F172A]">{{ invite.email }}</p>
                  <p class="text-[12px] text-[#94A3B8]">Invited as {{ invite.role }} &middot; {{ invite.date }}</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[12px] font-semibold text-[#F59E0B] bg-[#FEF3C7] px-3 py-1 rounded-full">Pending</span>
                <button v-if="isLeader" @click="cancelInvite(invite)" class="text-[#F87171] hover:bg-red-50 p-2 rounded-xl transition">
                  <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 7l-10 10M7 7l10 10" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- ROLE CHANGE LOG (FR 3.2.3.11) -->
        <div class="mb-8">
          <h3 class="text-[18px] font-bold text-[#0F172A] mb-4">Role Change History Log <span class="text-[12px] font-normal text-[#94A3B8]">(FR 3.2.3.11)</span></h3>
          <div class="bg-white border border-[#E2E8F0]/70 rounded-3xl overflow-hidden">
            <table class="w-full">
              <thead>
                <tr class="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                  <th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3">Date</th>
                  <th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3">Member</th>
                  <th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Previous Role</th>
                  <th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3">New Role</th>
                  <th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden md:table-cell">Changed By</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="entry in roleChangeLog" :key="entry.id" class="border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition">
                  <td class="px-5 py-4 text-[13px] text-[#64748B]">{{ entry.date }}</td>
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-2">
                      <div class="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white" :style="{ backgroundColor: entry.memberColor }">{{ entry.memberInitial }}</div>
                      <span class="text-[14px] font-semibold text-[#0F172A]">{{ entry.memberName }}</span>
                    </div>
                  </td>
                  <td class="px-5 py-4 hidden sm:table-cell">
                    <span class="text-[12px] font-semibold px-2.5 py-1 rounded-full" :class="roleBadgeClass(entry.previousRole)">{{ entry.previousRole }}</span>
                  </td>
                  <td class="px-5 py-4">
                    <span class="text-[12px] font-semibold px-2.5 py-1 rounded-full" :class="roleBadgeClass(entry.newRole)">{{ entry.newRole }}</span>
                  </td>
                  <td class="px-5 py-4 hidden md:table-cell text-[13px] text-[#64748B]">{{ entry.changedBy }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>

    <!-- INVITE MEMBER MODAL (FR 3.3.3.4) -->
    <div v-if="showInviteMember" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6">
      <div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[520px] p-7">

        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-[22px] font-bold text-[#0F172A]">Invite Member</h3>
            <p class="text-[13px] text-[#94A3B8] mt-1">Add a registered university user via email (FR 3.3.3.4)</p>
          </div>
          <button @click="showInviteMember = false" class="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] flex items-center justify-center">
            ✕
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-[13px] font-semibold text-[#334155] mb-2">University Email *</label>
            <input v-model="inviteEmail" type="email" placeholder="e.g. student@university.edu" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]" />
            <p class="text-[11px] text-[#94A3B8] mt-1">Must be a registered university email address</p>
          </div>

          <div>
            <label class="block text-[13px] font-semibold text-[#334155] mb-2">Assign Role</label>
            <select v-model="inviteRole" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]">
              <option value="Member">Student Team Member</option>
              <option value="Leader">Team Leader</option>
              <option value="Instructor">Instructor (Read-only)</option>
            </select>
          </div>

          <div class="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-xl p-4">
            <div class="flex items-start gap-2">
              <svg class="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <p class="text-[13px] font-semibold text-[#92400E]">Permission Notice</p>
                <p class="text-[12px] text-[#78350F]/80 mt-0.5">Team Leaders can add members and assign work (FR 3.2.3.3). Instructors have read-only access (FR 3.2.3.5). Student Members can only update their own data (FR 3.2.3.4).</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-7">
          <button @click="showInviteMember = false" class="px-5 py-3 rounded-xl bg-[#F8FAFC] text-[#475569] font-semibold hover:bg-[#E2E8F0] transition">Cancel</button>
          <button @click="sendInvite" class="px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1E40AF] transition">Send Invitation</button>
        </div>
      </div>
    </div>

    <!-- JOIN CODE MODAL (FR 3.3.3.3) -->
    <div v-if="showJoinCode" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6">
      <div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[480px] p-7">

        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-[22px] font-bold text-[#0F172A]">Project Join Code</h3>
            <p class="text-[13px] text-[#94A3B8] mt-1">Unique alphanumeric code for this workspace (FR 3.3.3.3)</p>
          </div>
          <button @click="showJoinCode = false" class="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] flex items-center justify-center">
            ✕
          </button>
        </div>

        <div class="text-center py-6">
          <div class="inline-flex items-center justify-center bg-[#F8FAFC] border-2 border-dashed border-[#2563EB]/30 rounded-2xl px-8 py-6 mb-4">
            <span class="text-[32px] font-bold text-[#2563EB] tracking-[0.3em]">{{ joinCode }}</span>
          </div>
          <p class="text-[13px] text-[#94A3B8] mb-4">Share this code with teammates so they can join the project.</p>
          <button @click="copyJoinCode" class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[14px] font-semibold px-6 py-3 rounded-xl transition">
            <template v-if="joinCodeCopied">Copied!</template><template v-else><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy Code</template>
          </button>
        </div>

        <div class="bg-[#EFF6FF] border border-[#2563EB]/20 rounded-xl p-4">
          <p class="text-[12px] text-[#2563EB]">
            <span class="font-semibold">How it works:</span> When a student enters this code via the "Join Project" interface, they are automatically added as a Student Team Member and given access to the project dashboard.
          </p>
        </div>
      </div>
    </div>

    <!-- CONFIRM REMOVE MODAL -->
    <div v-if="memberToRemove" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6">
      <div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[440px] p-7">

        <div class="text-center mb-6">
          <div class="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" fill="none" stroke="#F87171" stroke-width="2" viewBox="0 0 24 24"><path d="M17 7l-10 10M7 7l10 10" /></svg>
          </div>
          <h3 class="text-[20px] font-bold text-[#0F172A]">Remove Member</h3>
          <p class="text-[14px] text-[#64748B] mt-2">Are you sure you want to remove <span class="font-bold text-[#0F172A]">{{ memberToRemove.name }}</span> from the workspace?</p>
        </div>

        <div class="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-xl p-4 mb-6">
          <p class="text-[12px] text-[#78350F]/80">This will revoke their access to project data, but their activity history will be retained for transparency (FR 3.3.3.8).</p>
        </div>

        <div class="flex justify-center gap-3">
          <button @click="memberToRemove = null" class="px-5 py-3 rounded-xl bg-[#F8FAFC] text-[#475569] font-semibold hover:bg-[#E2E8F0] transition">Cancel</button>
          <button @click="removeMember" class="px-5 py-3 rounded-xl bg-[#F87171] text-white font-semibold hover:bg-[#EF4444] transition">Remove</button>
        </div>
      </div>
    </div>

    <!-- PROMOTE/DEMOTE CONFIRM MODAL -->
    <div v-if="roleChangeConfirmed" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6">
      <div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[440px] p-7">

        <div class="text-center mb-6">
          <div class="w-16 h-16 rounded-full bg-[#EBF0FF] flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" fill="none" stroke="#2563EB" stroke-width="2" viewBox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </div>
          <h3 class="text-[20px] font-bold text-[#0F172A]">Confirm Role Change</h3>
          <p class="text-[14px] text-[#64748B] mt-2">Change <span class="font-bold text-[#0F172A]">{{ roleChangeConfirmed.name }}</span>'s role from <span class="font-semibold">{{ roleChangeConfirmed.previousRole }}</span> to <span class="font-semibold">{{ roleChangeConfirmed.newRole }}</span>?</p>
        </div>

        <div class="bg-[#EFF6FF] border border-[#2563EB]/20 rounded-xl p-4 mb-6">
          <p class="text-[12px] text-[#2563EB]">This change will be recorded in the Role Change History Log (FR 3.2.3.11).</p>
        </div>

        <div class="flex justify-center gap-3">
          <button @click="roleChangeConfirmed = null" class="px-5 py-3 rounded-xl bg-[#F8FAFC] text-[#475569] font-semibold hover:bg-[#E2E8F0] transition">Cancel</button>
          <button @click="confirmRoleChange" class="px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1E40AF] transition">Confirm</button>
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

const searchQuery = ref('')
const filterRole = ref('All')
const showInviteMember = ref(false)
const showJoinCode = ref(false)
const joinCodeCopied = ref(false)
const inviteEmail = ref('')
const inviteRole = ref('Member')
const memberToRemove = ref(null)
const roleChangeConfirmed = ref(null)

const joinCode = 'TT-X9K2M7'

const isLeader = true

const currentUser = {
  id: 1,
  name: 'Siraj',
  role: 'Leader'
}

const members = ref([
  {
    id: 1,
    name: 'Siraj',
    email: 'siraj@university.edu',
    role: 'Leader',
    initial: 'S',
    color: '#2563EB',
    tasksAssigned: 12,
    tasksCompleted: 8,
    timeLogged: '18h 30m',
    contribution: 85,
    joinedDate: 'Mar 1, 2026'
  },
  {
    id: 2,
    name: 'Maria',
    email: 'maria@university.edu',
    role: 'Member',
    initial: 'M',
    color: '#34D399',
    tasksAssigned: 10,
    tasksCompleted: 7,
    timeLogged: '14h 15m',
    contribution: 72,
    joinedDate: 'Mar 2, 2026'
  },
  {
    id: 3,
    name: 'Omar',
    email: 'omar@university.edu',
    role: 'Member',
    initial: 'O',
    color: '#F87171',
    tasksAssigned: 9,
    tasksCompleted: 5,
    timeLogged: '11h 45m',
    contribution: 58,
    joinedDate: 'Mar 2, 2026'
  },
  {
    id: 4,
    name: 'Zernish',
    email: 'zernish@university.edu',
    role: 'Member',
    initial: 'Z',
    color: '#FBBF24',
    tasksAssigned: 8,
    tasksCompleted: 4,
    timeLogged: '9h 20m',
    contribution: 45,
    joinedDate: 'Mar 3, 2026'
  },
  {
    id: 5,
    name: 'Hashir',
    email: 'hashir@university.edu',
    role: 'Member',
    initial: 'H',
    color: '#60A5FA',
    tasksAssigned: 7,
    tasksCompleted: 3,
    timeLogged: '7h 10m',
    contribution: 38,
    joinedDate: 'Mar 4, 2026'
  },
  {
    id: 6,
    name: 'Dr. Ahmed',
    email: 'ahmed@university.edu',
    role: 'Instructor',
    initial: 'A',
    color: '#9333EA',
    tasksAssigned: 0,
    tasksCompleted: 0,
    timeLogged: '0h',
    contribution: 0,
    joinedDate: 'Mar 1, 2026'
  }
])

const pendingInvites = ref([
  { id: 1, email: 'newmember@university.edu', role: 'Member', date: 'Mar 12, 2026' },
  { id: 2, email: 'ta@university.edu', role: 'Instructor', date: 'Mar 10, 2026' }
])

const roleChangeLog = ref([
  { id: 1, date: 'Mar 11, 2026', memberName: 'Siraj', memberInitial: 'S', memberColor: '#2563EB', previousRole: 'Member', newRole: 'Leader', changedBy: 'System' },
  { id: 2, date: 'Mar 8, 2026', memberName: 'Maria', memberInitial: 'M', memberColor: '#34D399', previousRole: 'Member', newRole: 'Leader', changedBy: 'Siraj' },
  { id: 3, date: 'Mar 9, 2026', memberName: 'Maria', memberInitial: 'M', memberColor: '#34D399', previousRole: 'Leader', newRole: 'Member', changedBy: 'Siraj' }
])

const filteredMembers = computed(() => {
  return members.value.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesRole = filterRole.value === 'All' || member.role === filterRole.value
    return matchesSearch && matchesRole
  })
})

function roleBadgeClass(role) {
  if (role === 'Leader') return 'bg-[#EBF0FF] text-[#2563EB]'
  if (role === 'Member') return 'bg-[#DCFCE7] text-[#10B981]'
  if (role === 'Instructor') return 'bg-[#F3E8FF] text-[#9333EA]'
  if (role === 'Admin') return 'bg-[#FEF3C7] text-[#D97706]'
  return 'bg-[#F1F5F9] text-[#64748B]'
}

function promoteMember(member) {
  roleChangeConfirmed.value = {
    id: member.id,
    name: member.name,
    previousRole: member.role,
    newRole: 'Leader'
  }
}

function demoteLeader(member) {
  roleChangeConfirmed.value = {
    id: member.id,
    name: member.name,
    previousRole: member.role,
    newRole: 'Member'
  }
}

function confirmRoleChange() {
  if (!roleChangeConfirmed.value) return
  const member = members.value.find(m => m.id === roleChangeConfirmed.value.id)
  if (member) {
    const previousRole = member.role
    member.role = roleChangeConfirmed.value.newRole
    roleChangeLog.value.unshift({
      id: Date.now(),
      date: 'Just now',
      memberName: member.name,
      memberInitial: member.initial,
      memberColor: member.color,
      previousRole: previousRole,
      newRole: roleChangeConfirmed.value.newRole,
      changedBy: currentUser.name
    })
  }
  roleChangeConfirmed.value = null
}

function confirmRemoveMember(member) {
  memberToRemove.value = member
}

function removeMember() {
  if (!memberToRemove.value) return
  const idx = members.value.findIndex(m => m.id === memberToRemove.value.id)
  if (idx >= 0) {
    members.value.splice(idx, 1)
  }
  memberToRemove.value = null
}

function sendInvite() {
  if (!inviteEmail.value.trim()) return
  pendingInvites.value.push({
    id: Date.now(),
    email: inviteEmail.value,
    role: inviteRole.value,
    date: 'Just now'
  })
  inviteEmail.value = ''
  inviteRole.value = 'Member'
  showInviteMember.value = false
}

function cancelInvite(invite) {
  const idx = pendingInvites.value.findIndex(i => i.id === invite.id)
  if (idx >= 0) {
    pendingInvites.value.splice(idx, 1)
  }
}

function copyJoinCode() {
  navigator.clipboard.writeText(joinCode).then(() => {
    joinCodeCopied.value = true
    setTimeout(() => { joinCodeCopied.value = false }, 2000)
  }).catch(() => {
    joinCodeCopied.value = true
    setTimeout(() => { joinCodeCopied.value = false }, 2000)
  })
}

const logout = () => {
  router.push('/login')
}
</script>