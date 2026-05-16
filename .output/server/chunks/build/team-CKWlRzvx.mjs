import { _ as __nuxt_component_0 } from './nuxt-link-Cyj_sl3k.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useUserRole } from './useUserRole-BM8TzV2p.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const joinCode = "TT-X9K2M7";
const _sfc_main = {
  __name: "team",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { currentUser, isLeader } = useUserRole();
    const searchQuery = ref("");
    const filterRole = ref("All");
    const showInviteMember = ref(false);
    const showJoinCode = ref(false);
    const joinCodeCopied = ref(false);
    const inviteEmail = ref("");
    const inviteRole = ref("Member");
    const memberToRemove = ref(null);
    const roleChangeConfirmed = ref(null);
    const roleMenuOpen = ref(null);
    const members = ref([
      {
        id: 1,
        name: "Siraj",
        email: "siraj@university.edu",
        role: "Leader",
        initial: "S",
        color: "#2563EB",
        tasksAssigned: 12,
        tasksCompleted: 8,
        timeLogged: "18h 30m",
        contribution: 85,
        joinedDate: "Mar 1, 2026"
      },
      {
        id: 2,
        name: "Maria",
        email: "maria@university.edu",
        role: "Member",
        initial: "M",
        color: "#34D399",
        tasksAssigned: 10,
        tasksCompleted: 7,
        timeLogged: "14h 15m",
        contribution: 72,
        joinedDate: "Mar 2, 2026"
      },
      {
        id: 3,
        name: "Omar",
        email: "omar@university.edu",
        role: "Member",
        initial: "O",
        color: "#F87171",
        tasksAssigned: 9,
        tasksCompleted: 5,
        timeLogged: "11h 45m",
        contribution: 58,
        joinedDate: "Mar 2, 2026"
      },
      {
        id: 4,
        name: "Zernish",
        email: "zernish@university.edu",
        role: "Member",
        initial: "Z",
        color: "#FBBF24",
        tasksAssigned: 8,
        tasksCompleted: 4,
        timeLogged: "9h 20m",
        contribution: 45,
        joinedDate: "Mar 3, 2026"
      },
      {
        id: 5,
        name: "Hashir",
        email: "hashir@university.edu",
        role: "Member",
        initial: "H",
        color: "#60A5FA",
        tasksAssigned: 7,
        tasksCompleted: 3,
        timeLogged: "7h 10m",
        contribution: 38,
        joinedDate: "Mar 4, 2026"
      },
      {
        id: 6,
        name: "Dr. Ahmed",
        email: "ahmed@university.edu",
        role: "Instructor",
        initial: "A",
        color: "#9333EA",
        tasksAssigned: 0,
        tasksCompleted: 0,
        timeLogged: "0h",
        contribution: 0,
        joinedDate: "Mar 1, 2026"
      }
    ]);
    const pendingInvites = ref([
      { id: 1, email: "newmember@university.edu", role: "Member", date: "Mar 12, 2026" },
      { id: 2, email: "ta@university.edu", role: "Instructor", date: "Mar 10, 2026" }
    ]);
    const roleChangeLog = ref([
      { id: 1, date: "Mar 11, 2026", memberName: "Siraj", memberInitial: "S", memberColor: "#2563EB", previousRole: "Member", newRole: "Leader", changedBy: "System" },
      { id: 2, date: "Mar 8, 2026", memberName: "Maria", memberInitial: "M", memberColor: "#34D399", previousRole: "Member", newRole: "Leader", changedBy: "Siraj" },
      { id: 3, date: "Mar 9, 2026", memberName: "Maria", memberInitial: "M", memberColor: "#34D399", previousRole: "Leader", newRole: "Member", changedBy: "Siraj" }
    ]);
    const filteredMembers = computed(() => {
      return members.value.filter((member) => {
        const matchesSearch = member.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || member.email.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesRole = filterRole.value === "All" || member.role === filterRole.value;
        return matchesSearch && matchesRole;
      });
    });
    function roleBadgeClass(role) {
      if (role === "Leader") return "bg-[#EBF0FF] text-[#2563EB]";
      if (role === "Member") return "bg-[#DCFCE7] text-[#10B981]";
      if (role === "Instructor") return "bg-[#F3E8FF] text-[#9333EA]";
      if (role === "Admin") return "bg-[#FEF3C7] text-[#D97706]";
      return "bg-[#F1F5F9] text-[#64748B]";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#F8FAFC] flex overflow-hidden" }, _attrs))}><aside class="w-[270px] bg-white border-r border-[#E2E8F0] hidden lg:flex flex-col"><div class="px-6 py-6 border-b border-[#F1F5F9]"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-bold text-lg">T</div><div><h1 class="font-bold text-[18px] text-[#0F172A]">TeamTrack</h1><p class="text-[12px] text-[#94A3B8]">AI Team Workspace</p></div></div></div><nav class="flex-1 px-4 py-6 space-y-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard",
        class: "flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><rect x="3" y="3" width="7" height="7" rx="1"${_scopeId}></rect><rect x="14" y="3" width="7" height="7" rx="1"${_scopeId}></rect><rect x="3" y="14" width="7" height="7" rx="1"${_scopeId}></rect><rect x="14" y="14" width="7" height="7" rx="1"${_scopeId}></rect></svg></span> Dashboard `);
          } else {
            return [
              createVNode("span", null, [
                (openBlock(), createBlock("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("rect", {
                    x: "3",
                    y: "3",
                    width: "7",
                    height: "7",
                    rx: "1"
                  }),
                  createVNode("rect", {
                    x: "14",
                    y: "3",
                    width: "7",
                    height: "7",
                    rx: "1"
                  }),
                  createVNode("rect", {
                    x: "3",
                    y: "14",
                    width: "7",
                    height: "7",
                    rx: "1"
                  }),
                  createVNode("rect", {
                    x: "14",
                    y: "14",
                    width: "7",
                    height: "7",
                    rx: "1"
                  })
                ]))
              ]),
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"${_scopeId}></path></svg></span> Projects `);
          } else {
            return [
              createVNode("span", null, [
                (openBlock(), createBlock("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" })
                ]))
              ]),
              createTextVNode(" Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tasks",
        class: "flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M9 11l3 3L22 4"${_scopeId}></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"${_scopeId}></path></svg></span> Tasks `);
          } else {
            return [
              createVNode("span", null, [
                (openBlock(), createBlock("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M9 11l3 3L22 4" }),
                  createVNode("path", { d: "M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" })
                ]))
              ]),
              createTextVNode(" Tasks ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/team",
        class: "flex items-center gap-3 bg-[#2563EB] text-white px-4 py-3 rounded-xl font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"${_scopeId}></path><circle cx="9" cy="7" r="4"${_scopeId}></circle><path d="M23 21v-2a4 4 0 00-3-3.87"${_scopeId}></path><path d="M16 3.13a4 4 0 010 7.75"${_scopeId}></path></svg></span> Team `);
          } else {
            return [
              createVNode("span", null, [
                (openBlock(), createBlock("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
                  createVNode("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                  }),
                  createVNode("path", { d: "M23 21v-2a4 4 0 00-3-3.87" }),
                  createVNode("path", { d: "M16 3.13a4 4 0 010 7.75" })
                ]))
              ]),
              createTextVNode(" Team ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/chat",
        class: "flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"${_scopeId}></path></svg></span> Team Chat `);
          } else {
            return [
              createVNode("span", null, [
                (openBlock(), createBlock("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" })
                ]))
              ]),
              createTextVNode(" Team Chat ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="p-4 border-t border-[#F1F5F9]"><div class="bg-[#F8FAFC] rounded-2xl p-4 mb-4"><div class="flex items-center gap-3"><div class="w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold">${ssrInterpolate(unref(currentUser).initial)}</div><div><h3 class="font-semibold text-[14px] text-[#0F172A]">${ssrInterpolate(unref(currentUser).name)}</h3><p class="text-[12px] text-[#94A3B8]">${ssrInterpolate(unref(currentUser).role)}</p></div></div></div><button class="w-full bg-red-50 hover:bg-red-100 text-red-500 font-semibold py-3 rounded-xl transition">Logout</button></div></aside><main class="flex-1 overflow-y-auto pb-20 lg:pb-0"><header class="bg-white border-b border-[#E2E8F0] px-4 md:px-8 py-4 md:py-5 flex flex-wrap items-center justify-between gap-3"><div><h2 class="text-[22px] md:text-[28px] font-bold text-[#0F172A]">Team</h2><p class="text-[12px] md:text-[14px] text-[#94A3B8] mt-1">Manage members, roles, and invitations for your project workspace.</p></div><div class="flex items-center gap-2 md:gap-3 flex-wrap">`);
      if (unref(isLeader)) {
        _push(`<button class="bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#2563EB] text-[12px] md:text-[14px] font-semibold px-3 md:px-5 py-2 md:py-3 rounded-xl transition"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"></path></svg> Join Code </button>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isLeader)) {
        _push(`<span class="text-[11px] md:text-[13px] text-[#94A3B8] italic">Invite and role management available to Leaders only</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isLeader)) {
        _push(`<button class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[12px] md:text-[14px] font-semibold px-3 md:px-5 py-2 md:py-3 rounded-xl transition shadow-sm hover:shadow-lg"> + Invite Member </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><div class="p-4 md:p-8"><div class="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8"><div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm"><div class="flex items-center justify-between mb-4"><div class="w-12 h-12 rounded-2xl bg-[#EBF0FF] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg></div><span class="text-[12px] text-[#10B981] font-semibold">Active</span></div><p class="text-[12px] md:text-[14px] text-[#94A3B8] mb-1">Total Members</p><h3 class="text-[24px] md:text-[32px] font-bold text-[#0F172A]">${ssrInterpolate(members.value.length)}</h3></div><div class="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-[#E2E8F0]/70 shadow-sm"><div class="flex items-center justify-between mb-3 md:mb-4"><div class="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#DCFCE7] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div><span class="text-[12px] text-[#2563EB] font-semibold">Leaders</span></div><p class="text-[14px] text-[#94A3B8] mb-1">Leaders</p><h3 class="text-[32px] font-bold text-[#0F172A]">${ssrInterpolate(members.value.filter((m) => m.role === "Leader").length)}</h3></div><div class="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-[#E2E8F0]/70 shadow-sm"><div class="flex items-center justify-between mb-3 md:mb-4"><div class="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#FEF3C7] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><span class="text-[12px] text-[#F59E0B] font-semibold">Pending</span></div><p class="text-[14px] text-[#94A3B8] mb-1">Pending Invites</p><h3 class="text-[32px] font-bold text-[#0F172A]">${ssrInterpolate(pendingInvites.value.length)}</h3></div><div class="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-[#E2E8F0]/70 shadow-sm"><div class="flex items-center justify-between mb-3 md:mb-4"><div class="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#F3E8FF] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></div><span class="text-[12px] text-[#9333EA] font-semibold">Log</span></div><p class="text-[14px] text-[#94A3B8] mb-1">Role Changes</p><h3 class="text-[32px] font-bold text-[#0F172A]">${ssrInterpolate(roleChangeLog.value.length)}</h3></div></div><div class="bg-white border border-[#E2E8F0]/70 rounded-2xl md:rounded-3xl p-4 md:p-5 mb-6 md:mb-8 shadow-sm"><div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 md:gap-4"><div><h3 class="text-[16px] md:text-[18px] font-bold text-[#0F172A]">Team Members</h3><p class="text-[12px] md:text-[13px] text-[#94A3B8] mt-1">Membership list with names, emails, and roles (FR 3.3.3.5)</p></div><div class="flex flex-col sm:flex-row gap-2 md:gap-3"><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search members..." class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-[13px] md:text-[14px] focus:outline-none focus:border-[#2563EB] w-full sm:w-[220px]"><select class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-[13px] md:text-[14px] focus:outline-none focus:border-[#2563EB]"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(filterRole.value) ? ssrLooseContain(filterRole.value, "All") : ssrLooseEqual(filterRole.value, "All")) ? " selected" : ""}>All Roles</option><option value="Leader"${ssrIncludeBooleanAttr(Array.isArray(filterRole.value) ? ssrLooseContain(filterRole.value, "Leader") : ssrLooseEqual(filterRole.value, "Leader")) ? " selected" : ""}>Leader</option><option value="Member"${ssrIncludeBooleanAttr(Array.isArray(filterRole.value) ? ssrLooseContain(filterRole.value, "Member") : ssrLooseEqual(filterRole.value, "Member")) ? " selected" : ""}>Member</option><option value="Instructor"${ssrIncludeBooleanAttr(Array.isArray(filterRole.value) ? ssrLooseContain(filterRole.value, "Instructor") : ssrLooseEqual(filterRole.value, "Instructor")) ? " selected" : ""}>Instructor</option><option value="Admin"${ssrIncludeBooleanAttr(Array.isArray(filterRole.value) ? ssrLooseContain(filterRole.value, "Admin") : ssrLooseEqual(filterRole.value, "Admin")) ? " selected" : ""}>Admin</option></select></div></div></div><div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8"><!--[-->`);
      ssrRenderList(filteredMembers.value, (member) => {
        _push(`<div class="bg-white border border-[#E2E8F0]/70 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300"><div class="flex items-start justify-between mb-3 md:mb-4"><div class="flex items-center gap-3 md:gap-4"><div class="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-[16px] md:text-[20px]" style="${ssrRenderStyle({ backgroundColor: member.color })}">${ssrInterpolate(member.initial)}</div><div><h3 class="text-[15px] md:text-[18px] font-bold text-[#0F172A]">${ssrInterpolate(member.name)}</h3><p class="text-[12px] md:text-[13px] text-[#94A3B8]">${ssrInterpolate(member.email)}</p></div></div>`);
        if (!unref(isLeader)) {
          _push(`<span class="${ssrRenderClass([roleBadgeClass(member.role), "text-[12px] font-bold px-3 py-1 rounded-full"])}">${ssrInterpolate(member.role)}</span>`);
        } else {
          _push(`<div class="relative"><button class="${ssrRenderClass([roleBadgeClass(member.role), "text-[12px] font-bold px-3 py-1 rounded-full cursor-pointer hover:opacity-80 transition flex items-center gap-1"])}">${ssrInterpolate(member.role)} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"></path></svg></button>`);
          if (roleMenuOpen.value === member.id && member.id !== unref(currentUser).id) {
            _push(`<div class="absolute top-full left-0 mt-1 bg-white border border-[#E2E8F0] rounded-xl shadow-lg z-50 min-w-[140px]">`);
            if (member.role !== "Member") {
              _push(`<button class="w-full text-left px-3 py-2 text-[12px] hover:bg-[#F1F5F9] rounded-t-xl transition">Member</button>`);
            } else {
              _push(`<!---->`);
            }
            if (member.role !== "Leader") {
              _push(`<button class="w-full text-left px-3 py-2 text-[12px] hover:bg-[#F1F5F9] rounded-b-xl transition">Leader</button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div><div class="grid grid-cols-2 gap-2 md:gap-4 mb-3 md:mb-4"><div class="bg-[#F8FAFC] rounded-xl md:rounded-2xl p-2 md:p-4"><p class="text-[11px] md:text-[12px] text-[#94A3B8] mb-1">Tasks Assigned</p><p class="text-[13px] md:text-[14px] font-bold text-[#0F172A]">${ssrInterpolate(member.tasksAssigned)}</p></div><div class="bg-[#F8FAFC] rounded-xl md:rounded-2xl p-2 md:p-4"><p class="text-[11px] md:text-[12px] text-[#94A3B8] mb-1">Tasks Completed</p><p class="text-[13px] md:text-[14px] font-bold text-[#0F172A]">${ssrInterpolate(member.tasksCompleted)}</p></div><div class="bg-[#F8FAFC] rounded-xl md:rounded-2xl p-2 md:p-4"><p class="text-[11px] md:text-[12px] text-[#94A3B8] mb-1">Time Logged</p><p class="text-[13px] md:text-[14px] font-bold text-[#0F172A]">${ssrInterpolate(member.timeLogged)}</p></div><div class="bg-[#F8FAFC] rounded-xl md:rounded-2xl p-2 md:p-4"><p class="text-[11px] md:text-[12px] text-[#94A3B8] mb-1">Joined</p><p class="text-[13px] md:text-[14px] font-bold text-[#0F172A]">${ssrInterpolate(member.joinedDate)}</p></div></div><div class="mb-4"><div class="flex items-center justify-between mb-2"><span class="text-[13px] font-semibold text-[#475569]">Contribution</span><span class="${ssrRenderClass([member.contribution >= 70 ? "text-[#10B981]" : member.contribution >= 40 ? "text-[#F59E0B]" : "text-[#F87171]", "text-[13px] font-bold"])}">${ssrInterpolate(member.contribution)}%</span></div><div class="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden"><div class="${ssrRenderClass([member.contribution >= 70 ? "bg-[#10B981]" : member.contribution >= 40 ? "bg-[#F59E0B]" : "bg-[#F87171]", "h-2 rounded-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: member.contribution + "%" })}"></div></div></div>`);
        if (unref(isLeader)) {
          _push(`<div class="flex items-center gap-2 pt-4 border-t border-[#F1F5F9]">`);
          if (member.role === "Member") {
            _push(`<button class="text-[12px] font-semibold text-[#2563EB] bg-[#EFF6FF] hover:bg-[#DBEAFE] px-3 py-2 rounded-xl transition flex items-center gap-1"><svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg> Promote to Leader (FR 3.3.3.7) </button>`);
          } else {
            _push(`<!---->`);
          }
          if (member.role === "Leader" && member.id !== unref(currentUser).id) {
            _push(`<button class="text-[12px] font-semibold text-[#9333EA] bg-purple-50 hover:bg-purple-100 px-3 py-2 rounded-xl transition flex items-center gap-1"><svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg> Demote to Member </button>`);
          } else {
            _push(`<!---->`);
          }
          if (member.role !== "Admin" && member.id !== unref(currentUser).id) {
            _push(`<button class="text-[12px] font-semibold text-[#F87171] bg-red-50 hover:bg-red-100 px-3 py-2 rounded-xl transition flex items-center gap-1 ml-auto"><svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 7l-10 10M7 7l10 10"></path></svg> Remove (FR 3.3.3.8) </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (member.role === "Instructor") {
          _push(`<div class="pt-4 border-t border-[#F1F5F9]"><p class="text-[11px] text-[#94A3B8] italic">Read-only access \u2014 can view project progress, analytics, and activity logs (FR 3.2.3.5)</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (member.role === "Admin") {
          _push(`<div class="pt-4 border-t border-[#F1F5F9]"><p class="text-[11px] text-[#94A3B8] italic">Platform management access \u2014 cannot edit project-specific academic content (FR 3.2.3.6)</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (filteredMembers.value.length === 0) {
        _push(`<div class="bg-white border border-[#E2E8F0] rounded-3xl p-10 text-center"><h3 class="text-[20px] font-bold text-[#0F172A] mb-2">No members found</h3><p class="text-[#94A3B8] text-[14px]">Try changing your search or role filter.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (pendingInvites.value.length > 0) {
        _push(`<div class="mb-8"><h3 class="text-[18px] font-bold text-[#0F172A] mb-4">Pending Invitations</h3><div class="space-y-3"><!--[-->`);
        ssrRenderList(pendingInvites.value, (invite) => {
          _push(`<div class="bg-white border border-[#E2E8F0]/70 rounded-2xl p-4 flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#94A3B8]"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><p class="text-[14px] font-bold text-[#0F172A]">${ssrInterpolate(invite.email)}</p><p class="text-[12px] text-[#94A3B8]">Invited as ${ssrInterpolate(invite.role)} \xB7 ${ssrInterpolate(invite.date)}</p></div></div><div class="flex items-center gap-2"><span class="text-[12px] font-semibold text-[#F59E0B] bg-[#FEF3C7] px-3 py-1 rounded-full">Pending</span>`);
          if (unref(isLeader)) {
            _push(`<button class="text-[#F87171] hover:bg-red-50 p-2 rounded-xl transition"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 7l-10 10M7 7l10 10"></path></svg></button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-6 md:mb-8"><h3 class="text-[16px] md:text-[18px] font-bold text-[#0F172A] mb-3 md:mb-4">Role Change History Log <span class="text-[11px] md:text-[12px] font-normal text-[#94A3B8]">(FR 3.2.3.11)</span></h3><div class="bg-white border border-[#E2E8F0]/70 rounded-2xl md:rounded-3xl overflow-hidden overflow-x-auto"><table class="w-full"><thead><tr class="border-b border-[#E2E8F0] bg-[#F8FAFC]"><th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3">Date</th><th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3">Member</th><th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Previous Role</th><th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3">New Role</th><th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden md:table-cell">Changed By</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(roleChangeLog.value, (entry) => {
        _push(`<tr class="border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition"><td class="px-5 py-4 text-[13px] text-[#64748B]">${ssrInterpolate(entry.date)}</td><td class="px-5 py-4"><div class="flex items-center gap-2"><div class="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white" style="${ssrRenderStyle({ backgroundColor: entry.memberColor })}">${ssrInterpolate(entry.memberInitial)}</div><span class="text-[14px] font-semibold text-[#0F172A]">${ssrInterpolate(entry.memberName)}</span></div></td><td class="px-5 py-4 hidden sm:table-cell"><span class="${ssrRenderClass([roleBadgeClass(entry.previousRole), "text-[12px] font-semibold px-2.5 py-1 rounded-full"])}">${ssrInterpolate(entry.previousRole)}</span></td><td class="px-5 py-4"><span class="${ssrRenderClass([roleBadgeClass(entry.newRole), "text-[12px] font-semibold px-2.5 py-1 rounded-full"])}">${ssrInterpolate(entry.newRole)}</span></td><td class="px-5 py-4 hidden md:table-cell text-[13px] text-[#64748B]">${ssrInterpolate(entry.changedBy)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></main>`);
      if (showInviteMember.value) {
        _push(`<div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6"><div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[520px] p-7"><div class="flex items-center justify-between mb-6"><div><h3 class="text-[22px] font-bold text-[#0F172A]">Invite Member</h3><p class="text-[13px] text-[#94A3B8] mt-1">Add a registered university user via email (FR 3.3.3.4)</p></div><button class="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] flex items-center justify-center"> \u2715 </button></div><div class="space-y-4"><div><label class="block text-[13px] font-semibold text-[#334155] mb-2">University Email *</label><input${ssrRenderAttr("value", inviteEmail.value)} type="email" placeholder="e.g. student@university.edu" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]"><p class="text-[11px] text-[#94A3B8] mt-1">Must be a registered university email address</p></div><div><label class="block text-[13px] font-semibold text-[#334155] mb-2">Assign Role</label><select class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563EB]"><option value="Member"${ssrIncludeBooleanAttr(Array.isArray(inviteRole.value) ? ssrLooseContain(inviteRole.value, "Member") : ssrLooseEqual(inviteRole.value, "Member")) ? " selected" : ""}>Student Team Member</option><option value="Leader"${ssrIncludeBooleanAttr(Array.isArray(inviteRole.value) ? ssrLooseContain(inviteRole.value, "Leader") : ssrLooseEqual(inviteRole.value, "Leader")) ? " selected" : ""}>Team Leader</option><option value="Instructor"${ssrIncludeBooleanAttr(Array.isArray(inviteRole.value) ? ssrLooseContain(inviteRole.value, "Instructor") : ssrLooseEqual(inviteRole.value, "Instructor")) ? " selected" : ""}>Instructor (Read-only)</option></select></div><div class="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-xl p-4"><div class="flex items-start gap-2"><svg class="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div><p class="text-[13px] font-semibold text-[#92400E]">Permission Notice</p><p class="text-[12px] text-[#78350F]/80 mt-0.5">Team Leaders can add members and assign work (FR 3.2.3.3). Instructors have read-only access (FR 3.2.3.5). Student Members can only update their own data (FR 3.2.3.4).</p></div></div></div></div><div class="flex justify-end gap-3 mt-7"><button class="px-5 py-3 rounded-xl bg-[#F8FAFC] text-[#475569] font-semibold hover:bg-[#E2E8F0] transition">Cancel</button><button class="px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1E40AF] transition">Send Invitation</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showJoinCode.value) {
        _push(`<div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6"><div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[480px] p-7"><div class="flex items-center justify-between mb-6"><div><h3 class="text-[22px] font-bold text-[#0F172A]">Project Join Code</h3><p class="text-[13px] text-[#94A3B8] mt-1">Unique alphanumeric code for this workspace (FR 3.3.3.3)</p></div><button class="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] flex items-center justify-center"> \u2715 </button></div><div class="text-center py-6"><div class="inline-flex items-center justify-center bg-[#F8FAFC] border-2 border-dashed border-[#2563EB]/30 rounded-2xl px-8 py-6 mb-4"><span class="text-[32px] font-bold text-[#2563EB] tracking-[0.3em]">${ssrInterpolate(joinCode)}</span></div><p class="text-[13px] text-[#94A3B8] mb-4">Share this code with teammates so they can join the project.</p><button class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[14px] font-semibold px-6 py-3 rounded-xl transition">`);
        if (joinCodeCopied.value) {
          _push(`<!--[-->Copied!<!--]-->`);
        } else {
          _push(`<!--[--><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path></svg> Copy Code<!--]-->`);
        }
        _push(`</button></div><div class="bg-[#EFF6FF] border border-[#2563EB]/20 rounded-xl p-4"><p class="text-[12px] text-[#2563EB]"><span class="font-semibold">How it works:</span> When a student enters this code via the &quot;Join Project&quot; interface, they are automatically added as a Student Team Member and given access to the project dashboard. </p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (memberToRemove.value) {
        _push(`<div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6"><div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[440px] p-7"><div class="text-center mb-6"><div class="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4"><svg width="28" height="28" fill="none" stroke="#F87171" stroke-width="2" viewBox="0 0 24 24"><path d="M17 7l-10 10M7 7l10 10"></path></svg></div><h3 class="text-[20px] font-bold text-[#0F172A]">Remove Member</h3><p class="text-[14px] text-[#64748B] mt-2">Are you sure you want to remove <span class="font-bold text-[#0F172A]">${ssrInterpolate(memberToRemove.value.name)}</span> from the workspace?</p></div><div class="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-xl p-4 mb-6"><p class="text-[12px] text-[#78350F]/80">This will revoke their access to project data, but their activity history will be retained for transparency (FR 3.3.3.8).</p></div><div class="flex justify-center gap-3"><button class="px-5 py-3 rounded-xl bg-[#F8FAFC] text-[#475569] font-semibold hover:bg-[#E2E8F0] transition">Cancel</button><button class="px-5 py-3 rounded-xl bg-[#F87171] text-white font-semibold hover:bg-[#EF4444] transition">Remove</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (roleChangeConfirmed.value) {
        _push(`<div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6"><div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[440px] p-7"><div class="text-center mb-6"><div class="w-16 h-16 rounded-full bg-[#EBF0FF] flex items-center justify-center mx-auto mb-4"><svg width="28" height="28" fill="none" stroke="#2563EB" stroke-width="2" viewBox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg></div><h3 class="text-[20px] font-bold text-[#0F172A]">Confirm Role Change</h3><p class="text-[14px] text-[#64748B] mt-2">Change <span class="font-bold text-[#0F172A]">${ssrInterpolate(roleChangeConfirmed.value.name)}</span>&#39;s role from <span class="font-semibold">${ssrInterpolate(roleChangeConfirmed.value.previousRole)}</span> to <span class="font-semibold">${ssrInterpolate(roleChangeConfirmed.value.newRole)}</span>?</p></div><div class="bg-[#EFF6FF] border border-[#2563EB]/20 rounded-xl p-4 mb-6"><p class="text-[12px] text-[#2563EB]">This change will be recorded in the Role Change History Log (FR 3.2.3.11).</p></div><div class="flex justify-center gap-3"><button class="px-5 py-3 rounded-xl bg-[#F8FAFC] text-[#475569] font-semibold hover:bg-[#E2E8F0] transition">Cancel</button><button class="px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1E40AF] transition">Confirm</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] z-50 px-2 pb-[env(safe-area-inset-bottom)]"><div class="flex items-center justify-around">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard",
        class: "flex flex-col items-center gap-0.5 py-2 px-3 text-[#94A3B8]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><rect x="3" y="3" width="7" height="7" rx="1"${_scopeId}></rect><rect x="14" y="3" width="7" height="7" rx="1"${_scopeId}></rect><rect x="3" y="14" width="7" height="7" rx="1"${_scopeId}></rect><rect x="14" y="14" width="7" height="7" rx="1"${_scopeId}></rect></svg><span class="text-[10px] font-semibold"${_scopeId}>Dashboard</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("rect", {
                  x: "3",
                  y: "3",
                  width: "7",
                  height: "7",
                  rx: "1"
                }),
                createVNode("rect", {
                  x: "14",
                  y: "3",
                  width: "7",
                  height: "7",
                  rx: "1"
                }),
                createVNode("rect", {
                  x: "3",
                  y: "14",
                  width: "7",
                  height: "7",
                  rx: "1"
                }),
                createVNode("rect", {
                  x: "14",
                  y: "14",
                  width: "7",
                  height: "7",
                  rx: "1"
                })
              ])),
              createVNode("span", { class: "text-[10px] font-semibold" }, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "flex flex-col items-center gap-0.5 py-2 px-3 text-[#94A3B8]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"${_scopeId}></path></svg><span class="text-[10px] font-semibold"${_scopeId}>Projects</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" })
              ])),
              createVNode("span", { class: "text-[10px] font-semibold" }, "Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tasks",
        class: "flex flex-col items-center gap-0.5 py-2 px-3 text-[#94A3B8]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M9 11l3 3L22 4"${_scopeId}></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"${_scopeId}></path></svg><span class="text-[10px] font-semibold"${_scopeId}>Tasks</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "M9 11l3 3L22 4" }),
                createVNode("path", { d: "M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" })
              ])),
              createVNode("span", { class: "text-[10px] font-semibold" }, "Tasks")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/team",
        class: "flex flex-col items-center gap-0.5 py-2 px-3 text-[#2563EB]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"${_scopeId}></path><circle cx="9" cy="7" r="4"${_scopeId}></circle><path d="M23 21v-2a4 4 0 00-3-3.87"${_scopeId}></path><path d="M16 3.13a4 4 0 010 7.75"${_scopeId}></path></svg><span class="text-[10px] font-bold"${_scopeId}>Team</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
                createVNode("circle", {
                  cx: "9",
                  cy: "7",
                  r: "4"
                }),
                createVNode("path", { d: "M23 21v-2a4 4 0 00-3-3.87" }),
                createVNode("path", { d: "M16 3.13a4 4 0 010 7.75" })
              ])),
              createVNode("span", { class: "text-[10px] font-bold" }, "Team")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/chat",
        class: "flex flex-col items-center gap-0.5 py-2 px-3 text-[#94A3B8]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"${_scopeId}></path></svg><span class="text-[10px] font-semibold"${_scopeId}>Chat</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" })
              ])),
              createVNode("span", { class: "text-[10px] font-semibold" }, "Chat")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=team-CKWlRzvx.mjs.map
