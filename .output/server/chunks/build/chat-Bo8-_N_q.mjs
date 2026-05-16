import { _ as __nuxt_component_0 } from './nuxt-link-Cyj_sl3k.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "chat",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { currentUser } = useUserRole();
    const activeThreadId = ref(1);
    const messageInput = ref("");
    const sentMessages = ref([]);
    const mobileView = ref("list");
    const showNotifications = ref(false);
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
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
        title: "New message",
        message: "Siraj posted in TeamTrack Frontend thread.",
        time: "15 minutes ago",
        bg: "bg-[#EFF6FF]"
      },
      {
        id: 3,
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        title: "Time log added",
        message: "Omar logged 1h 35m on API Integration.",
        time: "1 hour ago",
        bg: "bg-purple-100"
      }
    ]);
    const threads = ref([
      {
        id: 1,
        name: "TeamTrack Frontend",
        description: "Main discussion for homepage, login, dashboard, and project workspace UI.",
        preview: "Dashboard timer and project page are looking clean.",
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
        iconBg: "bg-[#EBF0FF]",
        type: "Project",
        badgeClass: "bg-[#EFF6FF] text-[#2563EB]",
        unread: 2,
        time: "10:24 AM",
        task: "Dashboard UI in Progress",
        status: "In Progress",
        priority: "High",
        dueDate: "29 Mar",
        owner: "Siraj"
      },
      {
        id: 2,
        name: "Dashboard UI",
        description: "Task-linked discussion for dashboard widgets, timer, and recent timings.",
        preview: "Timer section should stay because it supports effort tracking.",
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3L2 6"/><path d="M22 6l-3-3"/></svg>',
        iconBg: "bg-[#F3E8FF]",
        type: "Task",
        badgeClass: "bg-purple-100 text-purple-600",
        unread: 1,
        time: "11:10 AM",
        task: "Dashboard Time Tracker",
        status: "Review",
        priority: "High",
        dueDate: "26 Mar",
        owner: "Siraj"
      },
      {
        id: 3,
        name: "AI Assistant",
        description: "Discussion about project-aware prompts and AI response preview.",
        preview: "AI should provide suggestions, not automatic decisions.",
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
        iconBg: "bg-[#DCFCE7]",
        type: "AI",
        badgeClass: "bg-green-100 text-green-600",
        unread: 0,
        time: "Yesterday",
        task: "AI Chatbot Prototype",
        status: "In Review",
        priority: "Medium",
        dueDate: "24 Mar",
        owner: "Omar"
      },
      {
        id: 4,
        name: "Contribution Analytics",
        description: "Discussion around tracked hours, workload balance, and contribution visibility.",
        preview: "Contribution should be transparent but not judgmental.",
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
        iconBg: "bg-[#FEF3C7]",
        type: "Analytics",
        badgeClass: "bg-yellow-100 text-yellow-600",
        unread: 0,
        time: "Monday",
        task: "Contribution Dashboard",
        status: "At Risk",
        priority: "Medium",
        dueDate: "25 Mar",
        owner: "Maria"
      }
    ]);
    const messages = ref({
      1: [
        {
          id: 1,
          sender: "Maria",
          initial: "M",
          avatarClass: "bg-[#34D399]",
          time: "10:24 AM",
          text: "Dashboard timer and recent time logs are now aligned with the TeamTrack requirements.",
          tag: "Project Update",
          mine: false
        },
        {
          id: 2,
          sender: "Siraj",
          initial: "S",
          avatarClass: "bg-[#2563EB]",
          time: "10:28 AM",
          text: "Yes, keep the timer. Time tracking is one of the core parts of TeamTrack.",
          tag: "Decision",
          mine: true
        },
        {
          id: 3,
          sender: "Zernish",
          initial: "Z",
          avatarClass: "bg-[#FBBF24]",
          time: "10:35 AM",
          text: "Projects page also looks good. Logged time, tasks, progress, and contribution all make sense together.",
          tag: "Feedback",
          mine: false
        }
      ],
      2: [
        {
          id: 4,
          sender: "Maria",
          initial: "M",
          avatarClass: "bg-[#34D399]",
          time: "11:10 AM",
          text: "The timer card should show Start, Pause, and Stop clearly so users understand the workflow.",
          tag: "Task Discussion",
          mine: false
        },
        {
          id: 5,
          sender: "Siraj",
          initial: "S",
          avatarClass: "bg-[#2563EB]",
          time: "11:14 AM",
          text: "Done. I also added recent time logs so the dashboard shows past tracked sessions.",
          tag: "Completed",
          mine: true
        }
      ],
      3: [
        {
          id: 6,
          sender: "Omar",
          initial: "O",
          avatarClass: "bg-[#F87171]",
          time: "Yesterday",
          text: "AI assistant should answer project-related questions using task, time, and contribution data.",
          tag: "AI Scope",
          mine: false
        },
        {
          id: 7,
          sender: "Siraj",
          initial: "S",
          avatarClass: "bg-[#2563EB]",
          time: "Yesterday",
          text: "For frontend, we can show suggested prompts and prototype responses only.",
          tag: "Frontend Only",
          mine: true
        }
      ],
      4: [
        {
          id: 8,
          sender: "Zernish",
          initial: "Z",
          avatarClass: "bg-[#FBBF24]",
          time: "Monday",
          text: "Contribution analytics should show workload balance and effort visibility without grading automatically.",
          tag: "Analytics",
          mine: false
        }
      ]
    });
    const activeThread = computed(() => {
      return threads.value.find((thread) => thread.id === activeThreadId.value) || threads.value[0];
    });
    const activeMessages = computed(() => {
      return messages.value[activeThreadId.value] || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#F8FAFC] flex overflow-hidden" }, _attrs))}><aside class="w-[270px] bg-white border-r border-[#E2E8F0] hidden lg:flex flex-col"><div class="px-6 py-6 border-b border-[#F1F5F9]"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-bold text-lg"> T </div><div><h1 class="font-bold text-[18px] text-[#0F172A]">TeamTrack</h1><p class="text-[12px] text-[#94A3B8]">AI Team Workspace</p></div></div></div><nav class="flex-1 px-4 py-6 space-y-2">`);
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
        class: "flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F1F5F9] transition"
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
        class: "flex items-center gap-3 bg-[#2563EB] text-white px-4 py-3 rounded-xl font-semibold"
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
      _push(`</nav><div class="p-4 border-t border-[#F1F5F9]"><div class="bg-[#F8FAFC] rounded-2xl p-4 mb-4"><div class="flex items-center gap-3"><div class="w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold">${ssrInterpolate(unref(currentUser).initial)}</div><div><h3 class="font-semibold text-[14px] text-[#0F172A]">${ssrInterpolate(unref(currentUser).name)}</h3><p class="text-[12px] text-[#94A3B8]">${ssrInterpolate(unref(currentUser).role)}</p></div></div></div><button class="w-full bg-red-50 hover:bg-red-100 text-red-500 font-semibold py-3 rounded-xl transition"> Logout </button></div></aside><main class="flex-1 overflow-y-auto pb-20 lg:pb-0"><header class="bg-white border-b border-[#E2E8F0] px-8 py-5 items-center justify-between hidden md:flex"><div><h2 class="text-[28px] font-bold text-[#0F172A]"> Team Chat </h2><p class="text-[14px] text-[#94A3B8] mt-1"> Keep project discussions, decisions, and task updates in one workspace. </p></div><div class="relative flex items-center gap-4"><button class="relative w-11 h-11 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center hover:bg-[#EFF6FF] hover:border-[#BFDBFE] transition" aria-label="Notifications"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 01-3.46 0"></path></svg>`);
      if (notifications.value.length > 0) {
        _push(`<span class="absolute -top-2 -right-2 min-w-[20px] h-[20px] bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-lg shadow-red-500/30">${ssrInterpolate(notifications.value.length)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
      if (showNotifications.value) {
        _push(`<div class="absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] md:w-[360px] max-w-[360px] bg-white border border-[#E2E8F0] rounded-3xl shadow-2xl shadow-slate-900/10 z-50 overflow-hidden"><div class="px-4 md:px-5 py-4 border-b border-[#E2E8F0] flex items-center justify-between"><div><h3 class="font-black text-[#0F172A] text-[15px] md:text-[17px]"> Notifications </h3><p class="text-[11px] md:text-[12px] text-[#94A3B8]">${ssrInterpolate(notifications.value.length)} new workspace updates </p></div>`);
        if (notifications.value.length > 0) {
          _push(`<button class="text-[11px] md:text-[12px] font-bold text-[#2563EB] hover:underline"> Clear </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (notifications.value.length > 0) {
          _push(`<div class="max-h-[300px] overflow-y-auto"><!--[-->`);
          ssrRenderList(notifications.value, (notification) => {
            var _a2;
            _push(`<div class="px-4 md:px-5 py-3 md:py-4 border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition"><div class="flex gap-3"><div class="${ssrRenderClass([notification.bg, "w-9 h-9 md:w-10 md:h-10 rounded-2xl flex items-center justify-center shrink-0"])}"><span>${(_a2 = notification.icon) != null ? _a2 : ""}</span></div><div><h4 class="text-[13px] md:text-[14px] font-black text-[#0F172A]">${ssrInterpolate(notification.title)}</h4><p class="text-[11px] md:text-[12px] text-[#64748B] mt-1 leading-[1.6]">${ssrInterpolate(notification.message)}</p><p class="text-[10px] md:text-[11px] text-[#94A3B8] mt-2">${ssrInterpolate(notification.time)}</p></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="py-10 text-center"><p class="text-[13px] text-[#94A3B8]">No new notifications</p></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-3"><div class="text-right hidden sm:block"><p class="text-[14px] font-semibold text-[#0F172A]">${ssrInterpolate(unref(currentUser).name)}</p><p class="text-[12px] text-[#94A3B8]">${ssrInterpolate(unref(currentUser).role)}</p></div><div class="w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold">${ssrInterpolate(unref(currentUser).initial)}</div></div></div></header>`);
      if (mobileView.value === "list") {
        _push(`<div class="md:hidden flex flex-col h-full"><div class="bg-[#2563EB] px-4 py-3 flex items-center justify-between"><h2 class="text-[20px] font-bold text-white">Team Chat</h2><button class="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 01-3.46 0"></path></svg>`);
        if (notifications.value.length > 0) {
          _push(`<span class="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-[#2563EB] shadow-lg">${ssrInterpolate(notifications.value.length)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div>`);
        if (showNotifications.value) {
          _push(`<div class="bg-white border-b border-[#E2E8F0] shadow-lg z-50"><div class="px-4 py-3 border-b border-[#F1F5F9] flex items-center justify-between"><div><h3 class="font-black text-[#0F172A] text-[14px]">Notifications</h3><p class="text-[10px] text-[#94A3B8]">${ssrInterpolate(notifications.value.length)} new workspace updates</p></div>`);
          if (notifications.value.length > 0) {
            _push(`<button class="text-[11px] font-bold text-[#2563EB] hover:underline"> Clear </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (notifications.value.length > 0) {
            _push(`<div class="max-h-[260px] overflow-y-auto"><!--[-->`);
            ssrRenderList(notifications.value, (notification) => {
              var _a2;
              _push(`<div class="px-4 py-3 border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition"><div class="flex gap-3"><div class="${ssrRenderClass([notification.bg, "w-8 h-8 rounded-xl flex items-center justify-center shrink-0"])}"><span>${(_a2 = notification.icon) != null ? _a2 : ""}</span></div><div><h4 class="text-[12px] font-black text-[#0F172A]">${ssrInterpolate(notification.title)}</h4><p class="text-[11px] text-[#64748B] mt-0.5 leading-[1.5]">${ssrInterpolate(notification.message)}</p><p class="text-[10px] text-[#94A3B8] mt-1">${ssrInterpolate(notification.time)}</p></div></div></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<div class="py-8 text-center"><p class="text-[12px] text-[#94A3B8]">No new notifications</p></div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="px-3 py-2 bg-white border-b border-[#E2E8F0]"><div class="flex items-center gap-2 bg-[#F1F5F9] rounded-xl px-3 py-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg><input type="text" placeholder="Search chats..." class="flex-1 bg-transparent text-[13px] text-[#0F172A] placeholder:text-[#94A3B8] outline-none"></div></div><div class="flex-1 overflow-y-auto bg-white"><!--[-->`);
        ssrRenderList(threads.value, (thread) => {
          var _a2;
          _push(`<button class="${ssrRenderClass([activeThreadId.value === thread.id ? "bg-[#EFF6FF]" : "", "w-full text-left flex items-center gap-3 px-4 py-3 border-b border-[#F1F5F9] hover:bg-[#F8FAFC] active:bg-[#EFF6FF] transition"])}"><div class="${ssrRenderClass([thread.iconBg, "w-12 h-12 rounded-full flex items-center justify-center shrink-0"])}"><span>${(_a2 = thread.icon) != null ? _a2 : ""}</span></div><div class="flex-1 min-w-0"><div class="flex items-center justify-between"><h4 class="text-[15px] font-bold text-[#0F172A] truncate">${ssrInterpolate(thread.name)}</h4><span class="text-[11px] text-[#94A3B8] shrink-0 ml-2">${ssrInterpolate(thread.time)}</span></div><div class="flex items-center justify-between mt-0.5"><p class="text-[13px] text-[#64748B] truncate pr-2">${ssrInterpolate(thread.preview)}</p>`);
          if (thread.unread > 0) {
            _push(`<span class="bg-[#2563EB] text-white text-[10px] font-bold min-w-5 h-5 rounded-full flex items-center justify-center px-1.5 shrink-0">${ssrInterpolate(thread.unread)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (mobileView.value === "chat") {
        _push(`<div class="md:hidden flex flex-col h-full"><div class="bg-[#2563EB] px-2 py-2 flex items-center gap-2"><button class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition shrink-0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg></button><div class="${ssrRenderClass([activeThread.value.iconBg, "w-9 h-9 rounded-full flex items-center justify-center shrink-0"])}"><span>${(_a = activeThread.value.icon) != null ? _a : ""}</span></div><div class="flex-1 min-w-0"><h4 class="text-[15px] font-bold text-white truncate">${ssrInterpolate(activeThread.value.name)}</h4><p class="text-[11px] text-blue-200">${ssrInterpolate(activeThread.value.description)}</p></div><button class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button></div><div class="flex-1 bg-[#F0F2F5] p-3 space-y-3 overflow-y-auto"><!--[-->`);
        ssrRenderList(activeMessages.value, (message) => {
          _push(`<div class="${ssrRenderClass([message.mine ? "justify-end" : "justify-start", "flex"])}">`);
          if (!message.mine) {
            _push(`<div class="${ssrRenderClass([message.avatarClass, "w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 mr-2 mt-1"])}">${ssrInterpolate(message.initial)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="max-w-[80%]">`);
          if (!message.mine) {
            _push(`<div class="flex items-center gap-1.5 mb-0.5"><p class="text-[12px] font-bold text-[#0F172A]">${ssrInterpolate(message.sender)}</p><span class="text-[10px] text-[#94A3B8]">${ssrInterpolate(message.time)}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="${ssrRenderClass([message.mine ? "bg-[#D9FDD3] text-[#0F172A] rounded-tr-none" : "bg-white text-[#334155] rounded-tl-none", "rounded-xl px-3 py-2 shadow-sm"])}"><p class="text-[14px] leading-[1.5]">${ssrInterpolate(message.text)}</p></div>`);
          if (message.tag) {
            _push(`<div class="${ssrRenderClass([message.mine ? "text-right" : "text-left", "mt-1"])}"><span class="inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB]">${ssrInterpolate(message.tag)}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
        if (sentMessages.value.length > 0) {
          _push(`<div class="space-y-3"><!--[-->`);
          ssrRenderList(sentMessages.value, (message) => {
            _push(`<div class="flex justify-end"><div class="max-w-[80%]"><div class="bg-[#D9FDD3] text-[#0F172A] rounded-xl rounded-tr-none px-3 py-2 shadow-sm"><p class="text-[14px] leading-[1.5]">${ssrInterpolate(message.text)}</p></div><p class="text-[10px] text-[#94A3B8] mt-0.5 text-right">Just now</p></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="bg-[#F0F2F5] border-t border-[#E2E8F0] px-3 py-2 flex items-center gap-2"><input${ssrRenderAttr("value", messageInput.value)} type="text" maxlength="220" placeholder="Type a message..." class="flex-1 bg-white rounded-xl px-3 py-2.5 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none border border-[#E2E8F0]"><button class="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"></path><path d="M22 2l-7 20-4-9-9-4 20-7z"></path></svg></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="hidden md:block p-8"><div class="grid grid-cols-3 gap-6 mb-8"><div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm"><div class="flex items-center justify-between mb-4"><div class="w-12 h-12 rounded-2xl bg-[#EBF0FF] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg></div><span class="text-[12px] font-semibold text-[#2563EB]">Today</span></div><p class="text-[14px] text-[#94A3B8] mb-1">Project Messages</p><h3 class="text-[32px] font-bold text-[#0F172A]">18</h3></div><div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm"><div class="flex items-center justify-between mb-4"><div class="w-12 h-12 rounded-2xl bg-[#DCFCE7] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg></div><span class="text-[12px] font-semibold text-green-500">Online</span></div><p class="text-[14px] text-[#94A3B8] mb-1">Active Members</p><h3 class="text-[32px] font-bold text-[#0F172A]">3</h3></div><div class="bg-white rounded-3xl p-6 border border-[#E2E8F0]/70 shadow-sm"><div class="flex items-center justify-between mb-4"><div class="w-12 h-12 rounded-2xl bg-[#FEF3C7] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg></div><span class="text-[12px] font-semibold text-[#F59E0B]">Pinned</span></div><p class="text-[14px] text-[#94A3B8] mb-1">Task Discussions</p><h3 class="text-[32px] font-bold text-[#0F172A]">5</h3></div></div><div class="grid grid-cols-1 xl:grid-cols-[330px_1fr_360px] gap-8"><section class="bg-white rounded-3xl border border-[#E2E8F0]/70 shadow-sm overflow-hidden"><div class="p-6 border-b border-[#F1F5F9]"><h3 class="text-[20px] font-bold text-[#0F172A]"> Project Threads </h3><p class="text-[13px] text-[#94A3B8] mt-1"> Project-level and task-linked discussions. </p></div><div class="p-4 space-y-3"><!--[-->`);
      ssrRenderList(threads.value, (thread) => {
        var _a2;
        _push(`<button class="${ssrRenderClass([activeThreadId.value === thread.id ? "bg-[#EBF0FF] border-[#2563EB]/30" : "bg-[#F8FAFC] border-transparent hover:bg-[#F1F5F9]", "w-full text-left rounded-2xl p-4 transition border"])}"><div class="flex items-start justify-between gap-3"><div class="flex items-start gap-3"><div class="${ssrRenderClass([thread.iconBg, "w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"])}"><span>${(_a2 = thread.icon) != null ? _a2 : ""}</span></div><div><h4 class="text-[14px] font-bold text-[#0F172A]">${ssrInterpolate(thread.name)}</h4><p class="text-[12px] text-[#94A3B8] mt-1 leading-[1.5]">${ssrInterpolate(thread.preview)}</p></div></div>`);
        if (thread.unread > 0) {
          _push(`<span class="bg-[#2563EB] text-white text-[11px] font-bold min-w-6 h-6 rounded-full flex items-center justify-center px-2">${ssrInterpolate(thread.unread)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center justify-between mt-3"><span class="text-[11px] text-[#94A3B8]">${ssrInterpolate(thread.time)}</span><span class="${ssrRenderClass([thread.badgeClass, "text-[11px] font-bold px-2.5 py-1 rounded-full"])}">${ssrInterpolate(thread.type)}</span></div></button>`);
      });
      _push(`<!--]--></div></section><section class="bg-white rounded-3xl border border-[#E2E8F0]/70 shadow-sm overflow-hidden flex flex-col min-h-[720px]"><div class="p-6 border-b border-[#F1F5F9] flex items-center justify-between"><div class="flex items-center gap-4"><div class="${ssrRenderClass([activeThread.value.iconBg, "w-12 h-12 rounded-2xl flex items-center justify-center"])}"><span>${(_b = activeThread.value.icon) != null ? _b : ""}</span></div><div><h3 class="text-[20px] font-bold text-[#0F172A]">${ssrInterpolate(activeThread.value.name)}</h3><p class="text-[13px] text-[#94A3B8] mt-1">${ssrInterpolate(activeThread.value.description)}</p></div></div><span class="hidden sm:inline-flex bg-green-100 text-green-600 text-[12px] font-bold px-3 py-1 rounded-full"> 3 online </span></div><div class="flex-1 bg-[#F8FAFC] p-6 space-y-5 overflow-y-auto"><!--[-->`);
      ssrRenderList(activeMessages.value, (message) => {
        _push(`<div class="${ssrRenderClass([message.mine ? "justify-end" : "justify-start", "flex gap-3"])}">`);
        if (!message.mine) {
          _push(`<div class="${ssrRenderClass([message.avatarClass, "w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0"])}">${ssrInterpolate(message.initial)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([message.mine ? "items-end" : "items-start", "max-w-[72%]"])}">`);
        if (!message.mine) {
          _push(`<div class="flex items-center gap-2 mb-1"><p class="text-[13px] font-bold text-[#0F172A]">${ssrInterpolate(message.sender)}</p><span class="text-[11px] text-[#94A3B8]">${ssrInterpolate(message.time)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([message.mine ? "bg-[#2563EB] text-white border-[#2563EB] rounded-tr-sm" : "bg-white text-[#334155] border-[#E2E8F0] rounded-tl-sm", "rounded-2xl px-4 py-3 shadow-sm border"])}"><p class="text-[14px] leading-[1.7]">${ssrInterpolate(message.text)}</p></div>`);
        if (message.tag) {
          _push(`<div class="${ssrRenderClass([message.mine ? "text-right" : "text-left", "mt-2"])}"><span class="${ssrRenderClass([message.mine ? "bg-[#DBEAFE] text-[#2563EB]" : "bg-[#EFF6FF] text-[#2563EB]", "inline-flex text-[11px] font-bold px-2.5 py-1 rounded-full"])}">${ssrInterpolate(message.tag)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (message.mine) {
          _push(`<div class="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-[13px] font-bold shrink-0"> S </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (sentMessages.value.length > 0) {
        _push(`<div class="space-y-5"><!--[-->`);
        ssrRenderList(sentMessages.value, (message) => {
          _push(`<div class="flex justify-end gap-3"><div class="max-w-[72%]"><div class="bg-[#2563EB] text-white border border-[#2563EB] rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm"><p class="text-[14px] leading-[1.7]">${ssrInterpolate(message.text)}</p></div><p class="text-[11px] text-[#94A3B8] mt-1 text-right"> Just now </p></div><div class="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-[13px] font-bold shrink-0"> S </div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-white border-t border-[#E2E8F0] p-5"><div class="flex items-center gap-3"><input${ssrRenderAttr("value", messageInput.value)} type="text" maxlength="220" placeholder="Write a project update..." class="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 py-4 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"><button class="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-6 py-4 rounded-2xl font-bold transition"> Send </button></div><p class="text-[11px] text-[#94A3B8] mt-3"> Frontend prototype only \u2014 messages are shown as UI state and will connect to backend later. </p></div></section><section class="space-y-8 hidden xl:block"><div class="bg-white rounded-3xl border border-[#E2E8F0]/70 p-6 shadow-sm"><div class="flex items-center gap-3 mb-5"><div class="w-12 h-12 rounded-2xl bg-[#EBF0FF] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></div><div><h3 class="text-[18px] font-bold text-[#0F172A]"> Linked Work Item </h3><p class="text-[13px] text-[#94A3B8]"> Chat context for accountability </p></div></div><div class="bg-[#F8FAFC] rounded-2xl p-4 mb-4"><p class="text-[12px] text-[#94A3B8] mb-1">Current Task</p><h4 class="text-[15px] font-bold text-[#0F172A]">${ssrInterpolate(activeThread.value.task)}</h4></div><div class="grid grid-cols-2 gap-3"><div class="bg-[#F8FAFC] rounded-2xl p-4"><p class="text-[12px] text-[#94A3B8] mb-1">Status</p><p class="text-[14px] font-bold text-[#0F172A]">${ssrInterpolate(activeThread.value.status)}</p></div><div class="bg-[#F8FAFC] rounded-2xl p-4"><p class="text-[12px] text-[#94A3B8] mb-1">Priority</p><p class="text-[14px] font-bold text-[#0F172A]">${ssrInterpolate(activeThread.value.priority)}</p></div><div class="bg-[#F8FAFC] rounded-2xl p-4"><p class="text-[12px] text-[#94A3B8] mb-1">Due Date</p><p class="text-[14px] font-bold text-[#0F172A]">${ssrInterpolate(activeThread.value.dueDate)}</p></div><div class="bg-[#F8FAFC] rounded-2xl p-4"><p class="text-[12px] text-[#94A3B8] mb-1">Owner</p><p class="text-[14px] font-bold text-[#0F172A]">${ssrInterpolate(activeThread.value.owner)}</p></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tasks",
        class: "mt-5 w-full inline-flex items-center justify-center bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#2563EB] text-[14px] font-bold px-5 py-3 rounded-xl transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Related Task `);
          } else {
            return [
              createTextVNode(" View Related Task ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white rounded-3xl border border-[#E2E8F0]/70 p-6 shadow-sm"><div class="flex items-center justify-between mb-5"><div><h3 class="text-[18px] font-bold text-[#0F172A]"> Pinned Decision </h3><p class="text-[13px] text-[#94A3B8]"> Important project note </p></div><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg></div><div class="bg-[#FEF3C7]/70 border border-[#FDE68A] rounded-2xl p-4"><p class="text-[14px] text-[#92400E] leading-[1.7]"> Dashboard timer and recent time logs will stay in the prototype because time tracking is a core TeamTrack feature. </p></div></div><div class="bg-white rounded-3xl border border-[#E2E8F0]/70 p-6 shadow-sm"><h3 class="text-[18px] font-bold text-[#0F172A] mb-5"> Chat Activity </h3><div class="space-y-4"><div class="flex gap-3"><div class="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center"> \u2713 </div><div><p class="text-[14px] font-bold text-[#0F172A]"> Message logged </p><p class="text-[12px] text-[#94A3B8]"> Maria posted an update 12 minutes ago. </p></div></div><div class="flex gap-3"><div class="w-9 h-9 rounded-xl bg-[#EBF0FF] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg></div><div><p class="text-[14px] font-bold text-[#0F172A]"> Task discussion active </p><p class="text-[12px] text-[#94A3B8]"> Dashboard UI thread has new replies. </p></div></div><div class="flex gap-3"><div class="w-9 h-9 rounded-xl bg-[#F3E8FF] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg></div><div><p class="text-[14px] font-bold text-[#0F172A]"> AI-ready context </p><p class="text-[12px] text-[#94A3B8]"> Chat history can support future AI summaries. </p></div></div></div></div></section></div></div></main><nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] z-50 px-2 pb-[env(safe-area-inset-bottom)]"><div class="flex items-center justify-around">`);
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
        class: "flex flex-col items-center gap-0.5 py-2 px-3 text-[#2563EB]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"${_scopeId}></path></svg><span class="text-[10px] font-bold"${_scopeId}>Chat</span>`);
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
              createVNode("span", { class: "text-[10px] font-bold" }, "Chat")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chat-Bo8-_N_q.mjs.map
