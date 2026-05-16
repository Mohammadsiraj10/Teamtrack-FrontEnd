import { _ as __nuxt_component_0 } from './nuxt-link-Cyj_sl3k.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { currentUser, isLeader } = useUserRole();
    const navigation = [
      {
        name: "Dashboard",
        to: "/dashboard",
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
        active: true
      },
      {
        name: "Projects",
        to: "/projects",
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
        active: false
      },
      {
        name: "Tasks",
        to: "/tasks",
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
        active: false
      },
      {
        name: "Team",
        to: "/team",
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
        active: false
      },
      {
        name: "Team Chat",
        to: "/chat",
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
        active: false
      }
    ];
    const stats = [
      {
        label: "Projects",
        value: "12",
        caption: "active",
        badge: "+12%",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
        bg: "bg-[#EFF6FF]",
        glow: "bg-[#DBEAFE]",
        badgeClass: "bg-green-50 text-green-600"
      },
      {
        label: "Tasks Completed",
        value: "84",
        caption: "this sprint",
        badge: "+8%",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
        bg: "bg-[#ECFDF5]",
        glow: "bg-[#BBF7D0]",
        badgeClass: "bg-green-50 text-green-600"
      },
      {
        label: "Team Members",
        value: "16",
        caption: "online team",
        badge: "+4",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
        bg: "bg-[#FFFBEB]",
        glow: "bg-[#FDE68A]",
        badgeClass: "bg-amber-50 text-amber-600"
      },
      {
        label: "Tracked Hours",
        value: "18h",
        caption: "today",
        badge: "Today",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        bg: "bg-[#F5F3FF]",
        glow: "bg-[#DDD6FE]",
        badgeClass: "bg-purple-50 text-purple-600"
      }
    ];
    const showNotifications = ref(false);
    const showProfile = ref(false);
    const notifications = ref([
      {
        id: 1,
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
        title: "Task completed",
        message: "Hashir completed the Login Page task.",
        time: "2 minutes ago",
        bg: "bg-green-100"
      },
      {
        id: 2,
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        title: "Time log added",
        message: "Siraj logged 2h 10m on Dashboard UI.",
        time: "15 minutes ago",
        bg: "bg-[#EFF6FF]"
      },
      {
        id: 3,
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
        title: "Project updated",
        message: "TeamTrack Frontend progress moved to 72%.",
        time: "1 hour ago",
        bg: "bg-purple-100"
      }
    ]);
    const performanceBars = [
      { day: "Mon", value: "62", height: 62 },
      { day: "Tue", value: "74", height: 74 },
      { day: "Wed", value: "58", height: 58 },
      { day: "Thu", value: "86", height: 86 },
      { day: "Fri", value: "91", height: 91 },
      { day: "Sat", value: "68", height: 68 },
      { day: "Sun", value: "79", height: 79 }
    ];
    const projects = [
      {
        name: "TeamTrack Frontend",
        description: "Dashboard redesign and responsive UI implementation.",
        progress: 72,
        status: "Active",
        statusClass: "bg-green-100 text-green-600",
        due: "Friday",
        members: ["S", "A", "M"]
      },
      {
        name: "Authentication Flow",
        description: "Login, signup, route protection, and user session handling.",
        progress: 54,
        status: "In Review",
        statusClass: "bg-blue-100 text-blue-600",
        due: "Monday",
        members: ["S", "A"]
      }
    ];
    const memberColors = {
      S: "bg-[#2563EB]",
      A: "bg-[#059669]",
      M: "bg-[#D97706]"
    };
    const recentTasks = [
      {
        title: "Login Page Completed",
        meta: "Completed by Hashir",
        time: "2h ago",
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
        bg: "bg-green-100"
      },
      {
        title: "Dashboard UI in Progress",
        meta: "Assigned to Siraj",
        time: "Now",
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        bg: "bg-yellow-100"
      },
      {
        title: "Project Board Updated",
        meta: "Updated by Maria",
        time: "4h ago",
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
        bg: "bg-[#EFF6FF]"
      }
    ];
    const workload = [
      { name: "Siraj", initial: "S", value: 78, color: "bg-[#2563EB]" },
      { name: "Maria", initial: "M", value: 64, color: "bg-[#34D399]" },
      { name: "Omar", initial: "O", value: 58, color: "bg-[#F87171]" },
      { name: "Zernish", initial: "Z", value: 43, color: "bg-[#FBBF24]" }
    ];
    const timeLogs = [
      { title: "Dashboard UI", duration: "2h 10m", owner: "Siraj" },
      { title: "Login Page", duration: "1h 35m", owner: "Hashir" },
      { title: "Project Board", duration: "45m", owner: "Zernish" }
    ];
    const chatMessage = ref("");
    const timerSeconds = ref(0);
    const timerRunning = ref(false);
    const formattedTimer = computed(() => {
      const hours = Math.floor(timerSeconds.value / 3600);
      const minutes = Math.floor(timerSeconds.value % 3600 / 60);
      const seconds = timerSeconds.value % 60;
      return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#EEF2FF] flex overflow-hidden" }, _attrs))}><aside class="w-[280px] bg-white/95 backdrop-blur-xl border-r border-[#E2E8F0] hidden lg:flex flex-col"><div class="px-6 py-6 border-b border-[#F1F5F9]"><div class="flex items-center gap-3"><div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1E40AF] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/20"> T </div><div><h1 class="font-black text-[19px] text-[#0F172A] tracking-tight"> TeamTrack </h1><p class="text-[12px] text-[#94A3B8] font-medium"> AI Team Workspace </p></div></div></div><nav class="flex-1 px-4 py-6 space-y-2"><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: item.to,
          class: ["flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-[14px] transition-all duration-200", item.active ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/20" : "text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a;
            if (_push2) {
              _push2(`<span class="w-6 h-6 flex items-center justify-center"${_scopeId}>${(_a = item.icon) != null ? _a : ""}</span> ${ssrInterpolate(item.name)}`);
            } else {
              return [
                createVNode("span", {
                  class: "w-6 h-6 flex items-center justify-center",
                  innerHTML: item.icon
                }, null, 8, ["innerHTML"]),
                createTextVNode(" " + toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="px-4 pb-4"><div class="rounded-3xl bg-gradient-to-br from-[#EFF6FF] to-[#EEF2FF] border border-[#DBEAFE] p-5"><div class="flex items-center justify-between mb-4"><div class="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect></svg></div><span class="text-[11px] font-black text-[#2563EB] bg-white px-3 py-1 rounded-full"> LIVE </span></div><h3 class="text-[14px] font-black text-[#0F172A] mb-2"> Sprint Progress </h3><div class="w-full bg-white rounded-full h-2 overflow-hidden mb-2"><div class="h-2 bg-[#2563EB] rounded-full" style="${ssrRenderStyle({ "width": "72%" })}"></div></div><p class="text-[12px] text-[#64748B]"> 72% complete this week </p></div></div><div class="p-4 border-t border-[#F1F5F9]"><div class="bg-[#F8FAFC] rounded-3xl p-4 mb-4 border border-[#E2E8F0]"><div class="flex items-center gap-3"><div class="relative"><div class="w-11 h-11 rounded-2xl bg-[#2563EB] flex items-center justify-center text-white font-black">${ssrInterpolate(unref(currentUser).initial)}</div><span class="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span></div><div><h3 class="font-bold text-[14px] text-[#0F172A]">${ssrInterpolate(unref(currentUser).name)}</h3><p class="text-[12px] text-[#94A3B8]">${ssrInterpolate(unref(currentUser).role)}</p></div></div></div><button class="w-full bg-red-50 hover:bg-red-100 text-red-500 font-bold py-3 rounded-2xl transition"> Logout </button></div></aside><main class="flex-1 overflow-y-auto pb-20 lg:pb-0"><header class="relative z-50 bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] px-4 md:px-8 py-4 md:py-5"><div class="flex items-center justify-between mb-2 md:mb-0"><div class="flex items-center gap-2 md:gap-3"><h2 class="text-[22px] md:text-[30px] font-black tracking-tight text-[#0F172A]"> Dashboard </h2><span class="bg-[#ECFDF5] text-[#059669] border border-[#BBF7D0] text-[10px] md:text-[12px] font-black px-2 md:px-3 py-1 rounded-full"> Active Sprint </span></div><div class="relative flex items-center gap-2 md:gap-4"><button class="relative w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center hover:bg-[#EFF6FF] hover:border-[#BFDBFE] transition" aria-label="Notifications"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 01-3.46 0"></path></svg>`);
      if (notifications.value.length > 0) {
        _push(`<span class="absolute -top-2 -right-2 min-w-[20px] h-[20px] md:min-w-[23px] md:h-[23px] bg-red-500 text-white text-[10px] md:text-[11px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-lg shadow-red-500/30">${ssrInterpolate(notifications.value.length)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
      if (showNotifications.value) {
        _push(`<div class="notif-dropdown absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] md:w-[360px] max-w-[360px] bg-white border border-[#E2E8F0] rounded-3xl shadow-2xl shadow-slate-900/10 z-50 overflow-hidden"><div class="px-4 md:px-5 py-4 border-b border-[#E2E8F0] flex items-center justify-between"><div><h3 class="font-black text-[#0F172A] text-[15px] md:text-[17px]"> Notifications </h3><p class="text-[11px] md:text-[12px] text-[#94A3B8]">${ssrInterpolate(notifications.value.length)} new workspace updates </p></div>`);
        if (notifications.value.length > 0) {
          _push(`<button class="text-[11px] md:text-[12px] font-bold text-[#2563EB] hover:underline"> Clear </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (notifications.value.length > 0) {
          _push(`<div class="max-h-[300px] overflow-y-auto"><!--[-->`);
          ssrRenderList(notifications.value, (notification) => {
            var _a;
            _push(`<div class="px-4 md:px-5 py-3 md:py-4 border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition"><div class="flex gap-3"><div class="${ssrRenderClass([notification.bg, "w-9 h-9 md:w-10 md:h-10 rounded-2xl flex items-center justify-center shrink-0"])}"><span>${(_a = notification.icon) != null ? _a : ""}</span></div><div><h4 class="text-[13px] md:text-[14px] font-black text-[#0F172A]">${ssrInterpolate(notification.title)}</h4><p class="text-[11px] md:text-[12px] text-[#64748B] mt-1 leading-[1.6]">${ssrInterpolate(notification.message)}</p><p class="text-[10px] md:text-[11px] text-[#94A3B8] mt-2">${ssrInterpolate(notification.time)}</p></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="px-5 py-8 text-center"><p class="text-[14px] font-black text-[#0F172A]"> No notifications </p><p class="text-[12px] text-[#94A3B8] mt-1"> You are all caught up. </p></div>`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/tasks",
          class: "block w-full py-3 text-center text-[12px] md:text-[13px] font-black text-[#2563EB] hover:bg-[#EFF6FF] transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View all updates `);
            } else {
              return [
                createTextVNode(" View all updates ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative"><button class="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1E40AF] flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition" aria-label="Profile">${ssrInterpolate(unref(currentUser).initial)}</button>`);
      if (showProfile.value) {
        _push(`<div class="profile-dropdown absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] md:w-[280px] max-w-[280px] bg-white border border-[#E2E8F0] rounded-3xl shadow-2xl shadow-slate-900/10 z-50 overflow-hidden"><div class="px-4 md:px-5 py-4 border-b border-[#F1F5F9]"><div class="flex items-center gap-3"><div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1E40AF] flex items-center justify-center text-white font-black text-[14px] shadow-lg shadow-blue-500/20">${ssrInterpolate(unref(currentUser).initial)}</div><div class="min-w-0"><h3 class="font-black text-[#0F172A] text-[14px] truncate">${ssrInterpolate(unref(currentUser).name)}</h3><p class="text-[11px] text-[#94A3B8] truncate">${ssrInterpolate(unref(currentUser).email)}</p></div></div></div><div class="px-4 md:px-5 py-3 border-b border-[#F1F5F9]"><div class="flex items-center gap-2"><span class="${ssrRenderClass([unref(currentUser).role === "Leader" ? "bg-[#EBF0FF] text-[#2563EB]" : unref(currentUser).role === "Admin" ? "bg-purple-50 text-purple-600" : unref(currentUser).role === "Instructor" ? "bg-amber-50 text-amber-600" : "bg-green-50 text-green-600", "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold"])}">${ssrInterpolate(unref(currentUser).role)}</span></div></div><button class="w-full px-4 md:px-5 py-3 flex items-center gap-3 hover:bg-red-50 transition text-left"><div class="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></div><div><p class="text-[13px] font-bold text-red-600">Log out</p><p class="text-[10px] text-[#94A3B8]">Sign out of your account</p></div></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><p class="text-[13px] md:text-[14px] text-[#64748B]"> Welcome back, ${ssrInterpolate(unref(currentUser).name)}. Here is your team performance overview. </p></header><div class="p-4 md:p-8"><div class="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        var _a;
        _push(`<div class="relative overflow-hidden bg-white rounded-2xl md:rounded-[28px] p-4 md:p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300"><div class="${ssrRenderClass([stat.glow, "absolute -right-8 -top-8 w-28 h-28 rounded-full opacity-70"])}"></div><div class="relative flex items-center justify-between mb-4 md:mb-6"><div class="${ssrRenderClass([stat.bg, "w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center"])}"><span>${(_a = stat.icon) != null ? _a : ""}</span></div><span class="${ssrRenderClass([stat.badgeClass, "text-[10px] md:text-[12px] font-black px-2 md:px-2.5 py-1 rounded-full"])}">${ssrInterpolate(stat.badge)}</span></div><p class="relative text-[12px] md:text-[14px] text-[#64748B] font-semibold mb-1">${ssrInterpolate(stat.label)}</p><div class="relative flex items-end gap-2"><h3 class="text-[24px] md:text-[34px] font-black tracking-tight text-[#0F172A]">${ssrInterpolate(stat.value)}</h3><p class="text-[10px] md:text-[12px] text-[#94A3B8] font-semibold mb-2">${ssrInterpolate(stat.caption)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-8"><div class="xl:col-span-2 space-y-8"><div class="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6"><div class="lg:col-span-2 bg-white rounded-2xl md:rounded-[30px] border border-[#E2E8F0] p-4 md:p-6 shadow-sm"><div class="flex items-center justify-between mb-4 md:mb-6"><div><h3 class="text-[16px] md:text-[20px] font-black text-[#0F172A]"> Time Tracker </h3><p class="text-[12px] md:text-[13px] text-[#64748B] mt-1"> Track work sessions. </p></div><div class="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-[#EFF6FF] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M5 3L2 6"></path><path d="M22 6l-3-3"></path></svg></div></div><div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl md:rounded-3xl p-3 md:p-5 mb-3 md:mb-5"><p class="text-[11px] md:text-[12px] font-bold text-[#94A3B8] mb-1"> Current Task </p><h4 class="text-[13px] md:text-[15px] font-black text-[#0F172A]"> Dashboard UI in Progress </h4></div><div class="text-center bg-[#0F172A] rounded-2xl md:rounded-3xl p-4 md:p-6 mb-3 md:mb-5"><p class="text-[11px] md:text-[12px] text-[#94A3B8] font-bold mb-2"> Current Session </p><div class="text-[28px] md:text-[38px] font-black text-white tracking-tight">${ssrInterpolate(formattedTimer.value)}</div></div><div class="grid grid-cols-3 gap-3">`);
      if (unref(isLeader)) {
        _push(`<button${ssrIncludeBooleanAttr(timerRunning.value) ? " disabled" : ""} class="bg-[#2563EB] hover:bg-[#1E40AF] disabled:opacity-50 disabled:cursor-not-allowed text-white text-[13px] font-black py-3 rounded-2xl transition"> Start </button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isLeader)) {
        _push(`<button${ssrIncludeBooleanAttr(!timerRunning.value) ? " disabled" : ""} class="bg-[#FEF3C7] hover:bg-[#FDE68A] disabled:opacity-50 disabled:cursor-not-allowed text-[#92400E] text-[13px] font-black py-3 rounded-2xl transition"> Pause </button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isLeader)) {
        _push(`<button class="bg-red-50 hover:bg-red-100 text-red-500 text-[13px] font-black py-3 rounded-2xl transition"> Stop </button>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isLeader)) {
        _push(`<p class="col-span-3 text-[12px] text-[#94A3B8] italic py-2">Timer controls available to Leaders only</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="lg:col-span-3 bg-white rounded-2xl md:rounded-[30px] border border-[#E2E8F0] p-4 md:p-6 shadow-sm"><div class="flex items-center justify-between mb-4 md:mb-6"><div><h3 class="text-[16px] md:text-[20px] font-black text-[#0F172A]"> Sprint Performance </h3><p class="text-[12px] md:text-[13px] text-[#64748B] mt-1"> Weekly task delivery overview. </p></div><span class="text-[10px] md:text-[12px] font-black text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-2 md:px-3 py-1 md:py-1.5 rounded-full"> Week 4 </span></div><div class="h-[220px] flex items-end gap-4 px-2"><!--[-->`);
      ssrRenderList(performanceBars, (bar) => {
        _push(`<div class="flex-1 flex flex-col items-center gap-3"><div class="w-full h-[170px] bg-[#F1F5F9] rounded-2xl flex items-end overflow-hidden"><div class="w-full rounded-2xl bg-gradient-to-t from-[#2563EB] to-[#60A5FA]" style="${ssrRenderStyle({ height: bar.height + "%" })}"></div></div><div class="text-center"><p class="text-[12px] font-black text-[#0F172A]">${ssrInterpolate(bar.value)}</p><p class="text-[11px] text-[#94A3B8] font-semibold">${ssrInterpolate(bar.day)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="bg-white rounded-2xl md:rounded-[30px] border border-[#E2E8F0] p-4 md:p-6 shadow-sm"><div class="flex items-center justify-between mb-4 md:mb-6"><div><h3 class="text-[16px] md:text-[20px] font-black text-[#0F172A]"> Active Projects </h3><p class="text-[12px] md:text-[13px] text-[#64748B] mt-1"> Current running projects and progress. </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[12px] md:text-[14px] font-black px-3 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl transition shadow-lg shadow-blue-500/20"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View `);
          } else {
            return [
              createTextVNode(" View ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-3 md:space-y-5"><!--[-->`);
      ssrRenderList(projects, (project) => {
        _push(`<div class="border border-[#E2E8F0] rounded-2xl md:rounded-3xl p-3 md:p-5 hover:border-[#BFDBFE] hover:shadow-lg hover:shadow-slate-900/5 transition-all"><div class="flex items-center justify-between mb-3 md:mb-5"><div><div class="flex items-center gap-2 md:gap-3"><h4 class="font-black text-[#0F172A] text-[13px] md:text-[15px]">${ssrInterpolate(project.name)}</h4><span class="${ssrRenderClass([project.statusClass, "text-[10px] md:text-[11px] font-black px-2 md:px-2.5 py-1 rounded-full"])}">${ssrInterpolate(project.status)}</span></div><p class="text-[11px] md:text-[13px] text-[#64748B] mt-1">${ssrInterpolate(project.description)}</p></div><div class="text-right"><p class="text-[18px] md:text-[22px] font-black text-[#0F172A]">${ssrInterpolate(project.progress)}% </p><p class="text-[10px] md:text-[11px] text-[#94A3B8] font-semibold"> Complete </p></div></div><div class="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden mb-4"><div class="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] h-2.5 rounded-full" style="${ssrRenderStyle({ width: project.progress + "%" })}"></div></div><div class="flex items-center justify-between"><div class="flex -space-x-2"><!--[-->`);
        ssrRenderList(project.members, (member) => {
          _push(`<div class="${ssrRenderClass([memberColors[member] || "bg-[#64748B]", "w-9 h-9 rounded-2xl border-2 border-white text-white text-[11px] font-black flex items-center justify-center"])}">${ssrInterpolate(member)}</div>`);
        });
        _push(`<!--]--></div><span class="text-[12px] text-[#64748B] font-bold"> Due ${ssrInterpolate(project.due)}</span></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-white rounded-2xl md:rounded-[30px] border border-[#E2E8F0] p-4 md:p-6 shadow-sm"><div class="flex items-center justify-between mb-4 md:mb-6"><div><h3 class="text-[16px] md:text-[20px] font-black text-[#0F172A]"> Recent Tasks </h3><p class="text-[12px] md:text-[13px] text-[#64748B] mt-1"> Latest task movements from your workspace. </p></div></div><div class="space-y-3 md:space-y-4"><!--[-->`);
      ssrRenderList(recentTasks, (task) => {
        var _a;
        _push(`<div class="flex items-center justify-between bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl md:rounded-3xl p-3 md:p-4"><div class="flex items-center gap-3 md:gap-4"><div class="${ssrRenderClass([task.bg, "w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl flex items-center justify-center"])}"><span>${(_a = task.icon) != null ? _a : ""}</span></div><div><h4 class="font-black text-[#0F172A] text-[12px] md:text-[14px]">${ssrInterpolate(task.title)}</h4><p class="text-[11px] md:text-[13px] text-[#64748B] mt-0.5">${ssrInterpolate(task.meta)}</p></div></div><span class="text-[10px] md:text-[12px] text-[#94A3B8] font-bold">${ssrInterpolate(task.time)}</span></div>`);
      });
      _push(`<!--]--></div></div></div><div class="space-y-8"><div class="relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-2xl md:rounded-[30px] p-4 md:p-6 text-white shadow-xl shadow-blue-500/20"><div class="absolute -right-14 -top-14 w-40 h-40 rounded-full bg-white/10 blur-xl"></div><div class="relative flex items-center gap-3 mb-4 md:mb-6"><div class="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/20 border border-white/10 flex items-center justify-center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg></div><div><h3 class="font-black text-[16px] md:text-[19px]"> Team AI </h3><p class="text-blue-100 text-[11px] md:text-[13px]"> Smart productivity insights </p></div></div><div class="relative space-y-4"><div class="bg-white/10 border border-white/10 rounded-3xl p-4"><p class="text-[12px] text-blue-100 font-black mb-2"> PRODUCTIVITY </p><p class="text-[14px] leading-[1.7] text-blue-50"> Your team is currently 18% more productive this week. </p></div><div class="bg-white/10 border border-white/10 rounded-3xl p-4"><p class="text-[12px] text-blue-100 font-black mb-2"> RECOMMENDATION </p><p class="text-[14px] leading-[1.7] text-blue-50"> One task is taking longer than expected. Consider reviewing workload balance. </p></div></div></div><div class="bg-white rounded-2xl md:rounded-[30px] border border-[#E2E8F0] p-4 md:p-6 shadow-sm"><div class="flex items-center justify-between mb-4 md:mb-6"><div><h3 class="text-[16px] md:text-[20px] font-black text-[#0F172A]"> Workload Balance </h3><p class="text-[12px] md:text-[13px] text-[#64748B] mt-1"> Team contribution distribution. </p></div><span class="text-[12px] bg-[#ECFDF5] text-[#059669] font-black px-3 py-1 rounded-full"> Balanced </span></div><div class="space-y-3 md:space-y-5"><!--[-->`);
      ssrRenderList(workload, (member) => {
        _push(`<div><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2 md:gap-3"><div class="${ssrRenderClass([member.color, "w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl text-white text-[10px] md:text-[11px] font-black flex items-center justify-center"])}">${ssrInterpolate(member.initial)}</div><p class="text-[12px] md:text-[13px] font-black text-[#0F172A]">${ssrInterpolate(member.name)}</p></div><span class="text-[11px] md:text-[12px] font-black text-[#64748B]">${ssrInterpolate(member.value)}% </span></div><div class="h-2 md:h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden"><div class="${ssrRenderClass([member.color, "h-2.5 rounded-full"])}" style="${ssrRenderStyle({ width: member.value + "%" })}"></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-white rounded-2xl md:rounded-[30px] border border-[#E2E8F0] p-4 md:p-6 shadow-sm"><div class="flex items-center justify-between mb-4 md:mb-6"><div><h3 class="text-[16px] md:text-[20px] font-black text-[#0F172A]"> Recent Time Logs </h3><p class="text-[12px] md:text-[13px] text-[#64748B] mt-1"> Latest tracked sessions. </p></div><span class="text-[12px] bg-[#EFF6FF] text-[#2563EB] font-black px-3 py-1 rounded-full"> Today </span></div><div class="space-y-3 md:space-y-4"><!--[-->`);
      ssrRenderList(timeLogs, (log) => {
        _push(`<div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl md:rounded-3xl p-3 md:p-4"><div class="flex items-center justify-between mb-1"><h4 class="text-[13px] md:text-[14px] font-black text-[#0F172A]">${ssrInterpolate(log.title)}</h4><span class="text-[12px] md:text-[13px] font-black text-[#2563EB]">${ssrInterpolate(log.duration)}</span></div><p class="text-[11px] md:text-[12px] text-[#94A3B8] font-semibold"> Logged by ${ssrInterpolate(log.owner)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-white rounded-2xl md:rounded-[30px] border border-[#E2E8F0] p-4 md:p-6 shadow-sm"><div class="flex items-center justify-between mb-4 md:mb-6"><div><h3 class="text-[16px] md:text-[20px] font-black text-[#0F172A]"> Team Chat </h3><p class="text-[12px] md:text-[13px] text-[#64748B] mt-1"> Latest message preview. </p></div><span class="text-[12px] bg-green-100 text-green-600 font-black px-3 py-1 rounded-full"> 3 online </span></div><div class="flex gap-2 md:gap-3 mb-3 md:mb-5"><div class="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-2xl bg-[#2563EB] text-white text-[10px] md:text-[12px] font-black flex items-center justify-center shrink-0"> M </div><div class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl md:rounded-3xl p-3 md:p-4 flex-1"><div class="flex items-center justify-between mb-1"><h4 class="font-black text-[#0F172A] text-[12px] md:text-[14px]"> Maria </h4><span class="text-[10px] md:text-[11px] text-[#94A3B8] font-semibold"> 10:24 AM </span></div><p class="text-[12px] md:text-[13px] text-[#475569] leading-[1.6]"> API integration is done </p></div></div><div class="flex items-center gap-2 md:gap-3"><input${ssrRenderAttr("value", chatMessage.value)} type="text" maxlength="200" placeholder="Send a message..." class="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl md:rounded-2xl px-3 md:px-4 py-2.5 md:py-3 text-[13px] md:text-[14px] focus:outline-none focus:border-[#2563EB]"><button class="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-3 md:px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl font-black text-[12px] md:text-[14px] transition"> Send </button></div></div></div></div></div></main><nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] z-50 px-2 pb-[env(safe-area-inset-bottom)]"><div class="flex items-center justify-around">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard",
        class: "flex flex-col items-center gap-0.5 py-2 px-3 text-[#2563EB]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><rect x="3" y="3" width="7" height="7" rx="1"${_scopeId}></rect><rect x="14" y="3" width="7" height="7" rx="1"${_scopeId}></rect><rect x="3" y="14" width="7" height="7" rx="1"${_scopeId}></rect><rect x="14" y="14" width="7" height="7" rx="1"${_scopeId}></rect></svg><span class="text-[10px] font-bold"${_scopeId}>Dashboard</span>`);
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
              createVNode("span", { class: "text-[10px] font-bold" }, "Dashboard")
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
        class: "flex flex-col items-center gap-0.5 py-2 px-3 text-[#94A3B8]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"${_scopeId}></path><circle cx="9" cy="7" r="4"${_scopeId}></circle><path d="M23 21v-2a4 4 0 00-3-3.87"${_scopeId}></path><path d="M16 3.13a4 4 0 010 7.75"${_scopeId}></path></svg><span class="text-[10px] font-semibold"${_scopeId}>Team</span>`);
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
              createVNode("span", { class: "text-[10px] font-semibold" }, "Team")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-BnS13dKM.mjs.map
