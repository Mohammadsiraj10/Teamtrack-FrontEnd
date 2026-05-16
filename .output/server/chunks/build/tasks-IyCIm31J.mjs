import { _ as __nuxt_component_0 } from './nuxt-link-Cyj_sl3k.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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

const STALLING_HOURS = 48;
const _sfc_main = {
  __name: "tasks",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { currentUser, isLeader } = useUserRole();
    const showCreateTask = ref(false);
    const selectedTask = ref(null);
    const viewMode = ref("kanban");
    const searchQuery = ref("");
    const filterAssignee = ref("All");
    const filterPriority = ref("All");
    const currentSort = ref("dueDate");
    const showReassign = ref(false);
    const newComment = ref("");
    const teamMembers = [
      { name: "Siraj", initial: "S", color: "#2563EB", role: "Leader" },
      { name: "Maria", initial: "M", color: "#34D399", role: "Member" },
      { name: "Omar", initial: "O", color: "#F87171", role: "Member" },
      { name: "Zernish", initial: "Z", color: "#FBBF24", role: "Member" },
      { name: "Hashir", initial: "H", color: "#60A5FA", role: "Member" }
    ];
    const columns = [
      { id: "backlog", title: "Backlog", dotClass: "bg-[#64748B]" },
      { id: "in-progress", title: "In Progress", dotClass: "bg-[#2563EB]" },
      { id: "review", title: "Review", dotClass: "bg-[#F59E0B]" },
      { id: "done", title: "Done", dotClass: "bg-[#10B981]" }
    ];
    const sortOptions = [
      { key: "dueDate", label: "Due Date" },
      { key: "priority", label: "Priority" },
      { key: "assignee", label: "Assignee" }
    ];
    const newTask = ref({
      title: "",
      description: "",
      priority: "Medium",
      dueDate: "",
      assignee: "Siraj",
      status: "backlog",
      isBlocked: false,
      blockedReason: "",
      dependencies: []
    });
    const tasks = ref([
      {
        id: 1,
        title: "Design ER diagram",
        description: "Create entity-relationship diagram for the database schema covering users, projects, tasks, time logs, and messages.",
        status: "backlog",
        priority: "Low",
        assignee: "Maria",
        dueDate: "2026-04-05",
        progress: null,
        isBlocked: false,
        blockedReason: "",
        dependencies: [],
        comments: [],
        lastActivityAt: /* @__PURE__ */ new Date("2026-03-10T09:14:00"),
        logs: [
          { id: 1, type: "create", actor: "Siraj", action: "created this task", timestamp: "Mar 10, 09:14 AM" }
        ]
      },
      {
        id: 2,
        title: "Setup auth module",
        description: "Implement Firebase authentication with university email validation, password complexity, and activation email flow.",
        status: "backlog",
        priority: "High",
        assignee: "Hashir",
        dueDate: "2026-03-28",
        progress: null,
        isBlocked: false,
        blockedReason: "",
        dependencies: [],
        comments: [
          { id: 1, author: "Siraj", text: "Please use the university email pattern for validation.", timestamp: "Mar 9, 11:30 AM" }
        ],
        lastActivityAt: /* @__PURE__ */ new Date("2026-03-09T11:00:00"),
        logs: [
          { id: 1, type: "create", actor: "Siraj", action: "created this task", timestamp: "Mar 8, 14:30 PM" }
        ]
      },
      {
        id: 3,
        title: "Write test cases for API",
        description: "Create unit and integration test cases for all CRUD endpoints including tasks, projects, and time logs.",
        status: "backlog",
        priority: "Medium",
        assignee: "Zernish",
        dueDate: "2026-04-10",
        progress: null,
        isBlocked: false,
        blockedReason: "",
        dependencies: [2],
        comments: [],
        lastActivityAt: /* @__PURE__ */ new Date("2026-03-09T11:00:00"),
        logs: [
          { id: 1, type: "create", actor: "Siraj", action: "created this task", timestamp: "Mar 9, 11:00 AM" }
        ]
      },
      {
        id: 4,
        title: "Contribution analytics dashboard",
        description: "Build the visual dashboard showing time spent, task completion stats, and comparative contribution indicators per team member.",
        status: "in-progress",
        priority: "High",
        assignee: "Maria",
        dueDate: "2026-03-30",
        progress: 65,
        isBlocked: false,
        blockedReason: "",
        dependencies: [1],
        comments: [
          { id: 1, author: "Maria", text: "Working on the contribution bar charts first, then the summary cards.", timestamp: "Mar 7, 10:00 AM" },
          { id: 2, author: "Siraj", text: "Make sure to include the workload distribution chart too.", timestamp: "Mar 7, 11:15 AM" }
        ],
        lastActivityAt: /* @__PURE__ */ new Date("2026-03-06T09:15:00"),
        logs: [
          { id: 1, type: "create", actor: "Siraj", action: "created this task", timestamp: "Mar 5, 10:00 AM" },
          { id: 2, type: "status", actor: "Maria", action: "moved from Backlog to In Progress", timestamp: "Mar 6, 09:15 AM" }
        ]
      },
      {
        id: 5,
        title: "Auth & RBAC setup",
        description: "Configure role-based access control for Team Member, Team Leader, Instructor, and Admin roles. Implement role-change audit logging.",
        status: "review",
        priority: "High",
        assignee: "Omar",
        dueDate: "2026-03-25",
        progress: 90,
        isBlocked: true,
        blockedReason: "Waiting for Firebase project credentials from instructor.",
        dependencies: [],
        comments: [
          { id: 1, author: "Omar", text: "All RBAC rules are implemented, just need the Firebase credentials to test the integration.", timestamp: "Mar 12, 12:10 PM" },
          { id: 2, author: "Siraj", text: "I will email the instructor today to get those credentials.", timestamp: "Mar 12, 02:30 PM" }
        ],
        lastActivityAt: /* @__PURE__ */ new Date("2026-03-12T11:58:00"),
        logs: [
          { id: 1, type: "create", actor: "Siraj", action: "created this task", timestamp: "Mar 4, 15:00 PM" },
          { id: 2, type: "status", actor: "Hashir", action: "moved from In Progress to Review", timestamp: "Mar 11, 14:30 PM" },
          { id: 3, type: "blocked", actor: "Omar", action: "marked as blocked: waiting for Firebase credentials", timestamp: "Mar 12, 11:58 AM" }
        ]
      },
      {
        id: 6,
        title: "Project setup",
        description: "Initialise the Nuxt.js frontend project, configure Tailwind CSS, set up folder structure, and create base layouts.",
        status: "done",
        priority: "Medium",
        assignee: "Siraj",
        dueDate: "2026-03-10",
        progress: 100,
        isBlocked: false,
        blockedReason: "",
        dependencies: [],
        comments: [],
        lastActivityAt: /* @__PURE__ */ new Date("2026-03-03T16:00:00"),
        logs: [
          { id: 1, type: "create", actor: "Siraj", action: "created this task", timestamp: "Mar 1, 10:00 AM" },
          { id: 2, type: "status", actor: "Siraj", action: "moved to Done", timestamp: "Mar 3, 16:00 PM" }
        ]
      },
      {
        id: 7,
        title: "Kanban board component",
        description: "Build the Kanban board with Backlog, In Progress, Review, and Done columns as specified in FR-35.",
        status: "done",
        priority: "High",
        assignee: "Siraj",
        dueDate: "2026-03-15",
        progress: 100,
        isBlocked: false,
        blockedReason: "",
        dependencies: [6],
        comments: [],
        lastActivityAt: /* @__PURE__ */ new Date("2026-03-08T14:00:00"),
        logs: [
          { id: 1, type: "create", actor: "Siraj", action: "created this task", timestamp: "Mar 5, 09:00 AM" },
          { id: 2, type: "status", actor: "Siraj", action: "moved to Done", timestamp: "Mar 8, 14:00 PM" }
        ]
      },
      {
        id: 8,
        title: "CI/CD pipeline",
        description: "Set up Bitbucket Pipelines for automated build and deployment of the frontend application.",
        status: "done",
        priority: "Low",
        assignee: "Omar",
        dueDate: "2026-03-12",
        progress: 100,
        isBlocked: false,
        blockedReason: "",
        dependencies: [],
        comments: [],
        lastActivityAt: /* @__PURE__ */ new Date("2026-03-04T17:00:00"),
        logs: [
          { id: 1, type: "create", actor: "Siraj", action: "created this task", timestamp: "Mar 2, 11:00 AM" },
          { id: 2, type: "status", actor: "Omar", action: "moved to Done", timestamp: "Mar 4, 17:00 PM" }
        ]
      },
      {
        id: 9,
        title: "Team chat interface",
        description: "Build project-scoped chat module with persistent messages, sender identification, chronological display, and input sanitisation per FR-60.",
        status: "in-progress",
        priority: "Medium",
        assignee: "Zernish",
        dueDate: "2026-04-02",
        progress: 40,
        isBlocked: false,
        blockedReason: "",
        dependencies: [6],
        comments: [
          { id: 1, author: "Zernish", text: "Message persistence is done, working on input sanitisation now.", timestamp: "Mar 10, 03:45 PM" }
        ],
        lastActivityAt: /* @__PURE__ */ new Date("2026-03-09T08:45:00"),
        logs: [
          { id: 1, type: "create", actor: "Siraj", action: "created this task", timestamp: "Mar 7, 10:30 AM" },
          { id: 2, type: "status", actor: "Zernish", action: "moved from Backlog to In Progress", timestamp: "Mar 9, 08:45 AM" }
        ]
      },
      {
        id: 10,
        title: "Notification centre",
        description: "Implement the notification system with Task, Mention, and System Alert categories. Include deep linking and escalation per FR-81.",
        status: "backlog",
        priority: "Medium",
        assignee: "Omar",
        dueDate: "2026-04-08",
        progress: null,
        isBlocked: false,
        blockedReason: "",
        dependencies: [5],
        comments: [],
        lastActivityAt: /* @__PURE__ */ new Date("2026-03-11T13:00:00"),
        logs: [
          { id: 1, type: "create", actor: "Siraj", action: "created this task", timestamp: "Mar 11, 13:00 PM" }
        ]
      }
    ]);
    const availableDependencies = computed(() => {
      return tasks.value.map((t) => ({ id: t.id, title: t.title }));
    });
    const filteredTasks = computed(() => {
      return tasks.value.filter((t) => {
        const q = searchQuery.value.toLowerCase();
        const matchesSearch = !q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
        const matchesAssignee = filterAssignee.value === "All" || t.assignee === filterAssignee.value;
        const matchesPriority = filterPriority.value === "All" || t.priority === filterPriority.value;
        return matchesSearch && matchesAssignee && matchesPriority;
      });
    });
    const priorityOrder = { "High": 0, "Medium": 1, "Low": 2 };
    const sortedTasks = computed(() => {
      const list = [...filteredTasks.value];
      if (currentSort.value === "dueDate") {
        list.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      } else if (currentSort.value === "priority") {
        list.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
      } else if (currentSort.value === "assignee") {
        list.sort((a, b) => a.assignee.localeCompare(b.assignee));
      }
      return list;
    });
    const deadlineWarningTasks = computed(() => {
      return tasks.value.filter((t) => isDeadlineWarning(t));
    });
    const stallingTasks = computed(() => {
      return tasks.value.filter((t) => isStalling(t));
    });
    function getTasksByStatus(status) {
      return filteredTasks.value.filter((t) => t.status === status);
    }
    function isDeadlineWarning(task) {
      if (task.status === "done") return false;
      const due = new Date(task.dueDate);
      const now = /* @__PURE__ */ new Date();
      const diff = due - now;
      return diff > 0 && diff < 24 * 60 * 60 * 1e3;
    }
    function isStalling(task) {
      if (task.status === "done") return false;
      const now = /* @__PURE__ */ new Date();
      const lastActivity = task.lastActivityAt;
      const diffHours = (now - lastActivity) / (1e3 * 60 * 60);
      return diffHours > STALLING_HOURS;
    }
    function isDepDone(depId) {
      const task = tasks.value.find((t) => t.id === depId);
      return task && task.status === "done";
    }
    function formatDate(dateStr) {
      const d = new Date(dateStr);
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    }
    function getLastActivity(task) {
      if (!task.logs || task.logs.length === 0) return "No activity";
      return task.logs[task.logs.length - 1].timestamp;
    }
    function getAssigneeInitial(name) {
      const member = teamMembers.find((m) => m.name === name);
      return member ? member.initial : name.charAt(0);
    }
    function getAssigneeColor(name) {
      const member = teamMembers.find((m) => m.name === name);
      return member ? member.color : "#64748B";
    }
    function priorityClass(priority) {
      if (priority === "High") return "bg-red-100 text-red-600";
      if (priority === "Medium") return "bg-amber-100 text-amber-600";
      return "bg-green-100 text-green-600";
    }
    function statusClass(status) {
      if (status === "backlog") return "bg-[#F1F5F9] text-[#64748B]";
      if (status === "in-progress") return "bg-[#EBF0FF] text-[#2563EB]";
      if (status === "review") return "bg-[#FEF3C7] text-[#D97706]";
      if (status === "done") return "bg-[#D1FAE5] text-[#10B981]";
      return "bg-[#F1F5F9] text-[#64748B]";
    }
    function statusLabel(status) {
      if (status === "in-progress") return "In Progress";
      return status.charAt(0).toUpperCase() + status.slice(1);
    }
    function getTaskTitle(taskId) {
      const task = tasks.value.find((t) => t.id === taskId);
      return task ? task.title : "";
    }
    function logIconClass(type) {
      if (type === "create") return "bg-green-100";
      if (type === "status") return "bg-blue-100";
      if (type === "blocked") return "bg-amber-100";
      if (type === "reassign") return "bg-purple-100";
      if (type === "comment") return "bg-cyan-100";
      return "bg-gray-100";
    }
    function logTextClass(type) {
      if (type === "create") return "text-green-600";
      if (type === "status") return "text-blue-600";
      if (type === "blocked") return "text-amber-600";
      if (type === "reassign") return "text-purple-600";
      if (type === "comment") return "text-cyan-600";
      return "text-gray-600";
    }
    function logIcon(type) {
      if (type === "create") return "+";
      if (type === "status") return "\u270E";
      if (type === "blocked") return "\u26A0";
      if (type === "reassign") return "\u21BB";
      if (type === "comment") return "\u270E";
      return "\u2022";
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
        class: "flex items-center gap-3 bg-[#2563EB] text-white px-4 py-3 rounded-xl font-semibold"
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
      _push(`</nav><div class="p-4 border-t border-[#F1F5F9]"><div class="bg-[#F8FAFC] rounded-2xl p-4 mb-4"><div class="flex items-center gap-3"><div class="w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold">${ssrInterpolate(unref(currentUser).initial)}</div><div><h3 class="font-semibold text-[14px] text-[#0F172A]">${ssrInterpolate(unref(currentUser).name)}</h3><p class="text-[12px] text-[#94A3B8]">${ssrInterpolate(unref(currentUser).role)}</p></div></div></div><button class="w-full bg-red-50 hover:bg-red-100 text-red-500 font-semibold py-3 rounded-xl transition">Logout</button></div></aside><main class="flex-1 overflow-y-auto pb-20 lg:pb-0"><header class="bg-white border-b border-[#E2E8F0] px-4 md:px-8 py-4 md:py-5 flex items-center justify-between flex-wrap gap-3 md:gap-4"><div><h2 class="text-[22px] md:text-[28px] font-bold text-[#0F172A]">Tasks</h2><p class="text-[12px] md:text-[14px] text-[#94A3B8] mt-1">Task management \u2014 Kanban board, list view, dependencies, and activity tracking.</p></div><div class="flex items-center gap-2 md:gap-3 flex-wrap"><div class="relative"><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search tasks..." class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] w-[160px] md:w-[220px]"><svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg></div><select class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2563EB]"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(filterAssignee.value) ? ssrLooseContain(filterAssignee.value, "All") : ssrLooseEqual(filterAssignee.value, "All")) ? " selected" : ""}>All Assignees</option><!--[-->`);
      ssrRenderList(teamMembers, (m) => {
        _push(`<option${ssrRenderAttr("value", m.name)}${ssrIncludeBooleanAttr(Array.isArray(filterAssignee.value) ? ssrLooseContain(filterAssignee.value, m.name) : ssrLooseEqual(filterAssignee.value, m.name)) ? " selected" : ""}>${ssrInterpolate(m.name)}</option>`);
      });
      _push(`<!--]--></select><select class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2563EB]"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(filterPriority.value) ? ssrLooseContain(filterPriority.value, "All") : ssrLooseEqual(filterPriority.value, "All")) ? " selected" : ""}>All Priority</option><option value="High"${ssrIncludeBooleanAttr(Array.isArray(filterPriority.value) ? ssrLooseContain(filterPriority.value, "High") : ssrLooseEqual(filterPriority.value, "High")) ? " selected" : ""}>High</option><option value="Medium"${ssrIncludeBooleanAttr(Array.isArray(filterPriority.value) ? ssrLooseContain(filterPriority.value, "Medium") : ssrLooseEqual(filterPriority.value, "Medium")) ? " selected" : ""}>Medium</option><option value="Low"${ssrIncludeBooleanAttr(Array.isArray(filterPriority.value) ? ssrLooseContain(filterPriority.value, "Low") : ssrLooseEqual(filterPriority.value, "Low")) ? " selected" : ""}>Low</option></select><div class="flex items-center bg-[#F1F5F9] rounded-xl p-1"><button class="${ssrRenderClass([viewMode.value === "kanban" ? "bg-white shadow-sm text-[#0F172A]" : "text-[#64748B]", "px-3 py-1.5 rounded-lg text-[13px] font-semibold transition"])}">Kanban</button><button class="${ssrRenderClass([viewMode.value === "list" ? "bg-white shadow-sm text-[#0F172A]" : "text-[#64748B]", "px-3 py-1.5 rounded-lg text-[13px] font-semibold transition"])}">List</button></div>`);
      if (unref(isLeader)) {
        _push(`<button class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[14px] font-semibold px-5 py-3 rounded-xl transition shadow-sm hover:shadow-lg">+ New Task</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><div class="p-4 md:p-8">`);
      if (deadlineWarningTasks.value.length > 0) {
        _push(`<div class="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-2xl p-3 md:p-4 mb-4 md:mb-6 flex items-center gap-2 md:gap-3"><div class="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#F59E0B]/20 flex items-center justify-center shrink-0"><svg width="16" height="16" md:width="20" md:height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2"><path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div><p class="text-[13px] md:text-[14px] font-semibold text-[#92400E]">${ssrInterpolate(deadlineWarningTasks.value.length)} task${ssrInterpolate(deadlineWarningTasks.value.length > 1 ? "s" : "")} with deadline &lt; 24h</p><p class="text-[11px] md:text-[12px] text-[#78350F]/70">These tasks have not been completed yet. Take action to keep your project on track. (FR-42)</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (stallingTasks.value.length > 0) {
        _push(`<div class="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-2xl p-4 mb-6 flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div><p class="text-[14px] font-semibold text-[#92400E]">${ssrInterpolate(stallingTasks.value.length)} task${ssrInterpolate(stallingTasks.value.length > 1 ? "s" : "")} stalling (no update in 48h+)</p><p class="text-[12px] text-[#78350F]/70">Task Activity Indicators detected tasks with no activity updates. (FR-39)</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8"><div class="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-[#E2E8F0]/70 shadow-sm"><div class="flex items-center justify-between mb-4"><div class="w-12 h-12 rounded-2xl bg-[#EBF0FF] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></div><span class="text-[12px] text-[#64748B] font-semibold">Total</span></div><p class="text-[12px] md:text-[14px] text-[#94A3B8] mb-1">Total Tasks</p><h3 class="text-[24px] md:text-[32px] font-bold text-[#0F172A]">${ssrInterpolate(tasks.value.length)}</h3></div><div class="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-[#E2E8F0]/70 shadow-sm"><div class="flex items-center justify-between mb-3 md:mb-4"><div class="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#DCFCE7] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></div><span class="text-[12px] text-[#10B981] font-semibold">Done</span></div><p class="text-[12px] md:text-[14px] text-[#94A3B8] mb-1">Completed</p><h3 class="text-[24px] md:text-[32px] font-bold text-[#0F172A]">${ssrInterpolate(tasks.value.filter((t) => t.status === "done").length)}</h3></div><div class="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-[#E2E8F0]/70 shadow-sm"><div class="flex items-center justify-between mb-3 md:mb-4"><div class="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#FEF3C7] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div><span class="text-[12px] text-[#F59E0B] font-semibold">Blocked</span></div><p class="text-[12px] md:text-[14px] text-[#94A3B8] mb-1">Blocked Tasks</p><h3 class="text-[24px] md:text-[32px] font-bold text-[#0F172A]">${ssrInterpolate(tasks.value.filter((t) => t.isBlocked).length)}</h3></div><div class="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-[#E2E8F0]/70 shadow-sm"><div class="flex items-center justify-between mb-3 md:mb-4"><div class="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#F3E8FF] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><span class="text-[12px] text-[#F87171] font-semibold">Warn</span></div><p class="text-[12px] md:text-[14px] text-[#94A3B8] mb-1">Deadline Warnings</p><h3 class="text-[24px] md:text-[32px] font-bold text-[#0F172A]">${ssrInterpolate(deadlineWarningTasks.value.length)}</h3></div></div>`);
      if (viewMode.value === "kanban") {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6"><!--[-->`);
        ssrRenderList(columns, (column) => {
          _push(`<div><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2"><span class="${ssrRenderClass([column.dotClass, "w-2.5 h-2.5 rounded-full"])}"></span><h3 class="text-[15px] font-bold text-[#0F172A]">${ssrInterpolate(column.title)}</h3><span class="text-[12px] font-semibold text-[#94A3B8] bg-[#F1F5F9] rounded-full w-[22px] h-[22px] flex items-center justify-center">${ssrInterpolate(getTasksByStatus(column.id).length)}</span></div></div><div class="space-y-3"><!--[-->`);
          ssrRenderList(getTasksByStatus(column.id), (task) => {
            _push(`<div class="${ssrRenderClass([{ "border-[#F59E0B]/50 bg-[#FFFBEB]/50": isStalling(task) }, "bg-white rounded-2xl border border-[#E2E8F0]/70 p-4 shadow-sm hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-200 cursor-pointer"])}">`);
            if (isStalling(task)) {
              _push(`<div class="mb-2"><span class="text-[11px] font-semibold text-[#D97706] bg-amber-50 px-2 py-0.5 rounded-full flex items-center gap-1 w-fit"><svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Stalling </span></div>`);
            } else {
              _push(`<!---->`);
            }
            if (isDeadlineWarning(task)) {
              _push(`<div class="mb-2"><span class="text-[11px] font-semibold text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-full flex items-center gap-1 w-fit"><svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Due &lt; 24h </span></div>`);
            } else {
              _push(`<!---->`);
            }
            if (task.isBlocked) {
              _push(`<div class="mb-2"><span class="text-[11px] font-semibold text-[#D97706] bg-amber-50 px-2 py-0.5 rounded-full flex items-center gap-1 w-fit"><svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg> Blocked </span></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<div class="flex items-center gap-2 mb-2"><span class="${ssrRenderClass([priorityClass(task.priority), "text-[11px] font-bold px-2 py-0.5 rounded-full"])}">${ssrInterpolate(task.priority)}</span>`);
            if (task.dependencies && task.dependencies.length > 0) {
              _push(`<span class="text-[10px] text-[#94A3B8] flex items-center gap-1"><svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"></path></svg> ${ssrInterpolate(task.dependencies.length)} dep${ssrInterpolate(task.dependencies.length > 1 ? "s" : "")}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><h4 class="${ssrRenderClass([{ "line-through opacity-60": column.id === "done" }, "text-[14px] font-bold text-[#0F172A] mb-1.5 leading-snug"])}">${ssrInterpolate(task.title)}</h4>`);
            if (task.description) {
              _push(`<p class="text-[12px] text-[#64748B] leading-[1.5] mb-3 line-clamp-2">${ssrInterpolate(task.description)}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (column.id === "in-progress" && task.progress) {
              _push(`<div class="mb-3"><div class="w-full bg-[#E2E8F0] rounded-full h-[4px] overflow-hidden"><div class="bg-[#2563EB] h-[4px] rounded-full" style="${ssrRenderStyle({ width: task.progress + "%" })}"></div></div><p class="text-[10px] text-[#94A3B8] mt-1">${ssrInterpolate(task.progress)}% complete</p></div>`);
            } else {
              _push(`<!---->`);
            }
            if (task.comments && task.comments.length > 0) {
              _push(`<div class="mb-2"><span class="text-[10px] text-[#64748B] flex items-center gap-1"><svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> ${ssrInterpolate(task.comments.length)}</span></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<div class="flex items-center justify-between mt-2"><div class="flex items-center gap-2"><div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style="${ssrRenderStyle({ backgroundColor: getAssigneeColor(task.assignee) })}">${ssrInterpolate(getAssigneeInitial(task.assignee))}</div><span class="text-[11px] text-[#64748B]">${ssrInterpolate(task.assignee)}</span></div><div class="flex items-center gap-1.5 text-[#94A3B8]"><svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="text-[10px] font-medium">${ssrInterpolate(formatDate(task.dueDate))}</span></div></div></div>`);
          });
          _push(`<!--]-->`);
          if (getTasksByStatus(column.id).length === 0) {
            _push(`<div class="border-2 border-dashed border-[#E2E8F0] rounded-2xl p-6 text-center"><p class="text-[13px] text-[#94A3B8]">No tasks</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (viewMode.value === "list") {
        _push(`<div><div class="bg-white rounded-2xl border border-[#E2E8F0]/70 overflow-hidden"><div class="flex items-center gap-3 px-5 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]"><span class="text-[12px] font-semibold text-[#64748B]">Sort by:</span><!--[-->`);
        ssrRenderList(sortOptions, (sortOpt) => {
          _push(`<button class="${ssrRenderClass([currentSort.value === sortOpt.key ? "bg-[#2563EB] text-white" : "bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0]", "text-[12px] font-semibold px-3 py-1.5 rounded-lg transition"])}">${ssrInterpolate(sortOpt.label)}</button>`);
        });
        _push(`<!--]--></div><table class="w-full"><thead><tr class="border-b border-[#E2E8F0] bg-[#F8FAFC]"><th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3">Task</th><th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Status</th><th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden md:table-cell">Priority</th><th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Assignee</th><th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden md:table-cell">Due Date</th><th class="text-left text-[12px] font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Activity</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(sortedTasks.value, (task) => {
          _push(`<tr class="border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition cursor-pointer"><td class="px-5 py-4"><div class="flex items-center gap-3">`);
          if (task.status === "done") {
            _push(`<div class="w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center shrink-0"><svg width="12" height="12" fill="none" stroke="white" stroke-width="3" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg></div>`);
          } else {
            _push(`<div class="w-5 h-5 rounded-full border-2 border-[#E2E8F0] shrink-0"></div>`);
          }
          _push(`<div><p class="${ssrRenderClass([{ "line-through opacity-60": task.status === "done" }, "text-[14px] font-semibold text-[#0F172A]"])}">${ssrInterpolate(task.title)}</p><div class="flex items-center gap-2 mt-0.5">`);
          if (task.isBlocked) {
            _push(`<span class="text-[11px] font-semibold text-[#D97706] flex items-center gap-1"><svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg> Blocked </span>`);
          } else {
            _push(`<!---->`);
          }
          if (isStalling(task)) {
            _push(`<span class="text-[11px] font-semibold text-[#D97706] flex items-center gap-1"><svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Stalling </span>`);
          } else {
            _push(`<!---->`);
          }
          if (isDeadlineWarning(task)) {
            _push(`<span class="text-[11px] font-semibold text-[#DC2626]">Due &lt; 24h</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div></td><td class="px-5 py-4 hidden sm:table-cell"><span class="${ssrRenderClass([statusClass(task.status), "text-[12px] font-bold px-2.5 py-1 rounded-full"])}">${ssrInterpolate(statusLabel(task.status))}</span></td><td class="px-5 py-4 hidden md:table-cell"><span class="${ssrRenderClass([priorityClass(task.priority), "text-[12px] font-bold px-2.5 py-1 rounded-full"])}">${ssrInterpolate(task.priority)}</span></td><td class="px-5 py-4 hidden lg:table-cell"><div class="flex items-center gap-2"><div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style="${ssrRenderStyle({ backgroundColor: getAssigneeColor(task.assignee) })}">${ssrInterpolate(getAssigneeInitial(task.assignee))}</div><span class="text-[13px] text-[#475569]">${ssrInterpolate(task.assignee)}</span></div></td><td class="px-5 py-4 hidden md:table-cell"><span class="${ssrRenderClass([{ "text-red-500 font-semibold": isDeadlineWarning(task) }, "text-[13px] text-[#64748B]"])}">${ssrInterpolate(formatDate(task.dueDate))}</span></td><td class="px-5 py-4 hidden lg:table-cell"><span class="text-[11px] text-[#94A3B8]">${ssrInterpolate(getLastActivity(task))}</span></td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
        if (sortedTasks.value.length === 0) {
          _push(`<div class="p-10 text-center"><p class="text-[14px] text-[#94A3B8]">No tasks match your search.</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main>`);
      if (showCreateTask.value) {
        _push(`<div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6"><div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[560px] p-7 max-h-[90vh] overflow-y-auto"><div class="flex items-center justify-between mb-6"><div><h3 class="text-[22px] font-bold text-[#0F172A]">Create Task</h3><p class="text-[13px] text-[#94A3B8] mt-1">Add a new task to the project workspace (FR-33)</p></div><button class="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] flex items-center justify-center text-[#64748B]"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg></button></div><div class="space-y-4"><div><label class="block text-[13px] font-semibold text-[#334155] mb-2">Task Title *</label><input${ssrRenderAttr("value", newTask.value.title)} type="text" placeholder="e.g. Design login page" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"></div><div><label class="block text-[13px] font-semibold text-[#334155] mb-2">Description</label><textarea rows="3" placeholder="Describe the task (min 10 characters for time logs)" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] resize-none">${ssrInterpolate(newTask.value.description)}</textarea></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-[13px] font-semibold text-[#334155] mb-2">Priority *</label><select class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] focus:outline-none focus:border-[#2563EB]"><option value="Low"${ssrIncludeBooleanAttr(Array.isArray(newTask.value.priority) ? ssrLooseContain(newTask.value.priority, "Low") : ssrLooseEqual(newTask.value.priority, "Low")) ? " selected" : ""}>Low</option><option value="Medium"${ssrIncludeBooleanAttr(Array.isArray(newTask.value.priority) ? ssrLooseContain(newTask.value.priority, "Medium") : ssrLooseEqual(newTask.value.priority, "Medium")) ? " selected" : ""}>Medium</option><option value="High"${ssrIncludeBooleanAttr(Array.isArray(newTask.value.priority) ? ssrLooseContain(newTask.value.priority, "High") : ssrLooseEqual(newTask.value.priority, "High")) ? " selected" : ""}>High</option></select></div><div><label class="block text-[13px] font-semibold text-[#334155] mb-2">Deadline *</label><input${ssrRenderAttr("value", newTask.value.dueDate)} type="date" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] focus:outline-none focus:border-[#2563EB]"></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-[13px] font-semibold text-[#334155] mb-2">Assignee (FR-34)</label><select class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] focus:outline-none focus:border-[#2563EB]"><!--[-->`);
        ssrRenderList(teamMembers, (m) => {
          _push(`<option${ssrRenderAttr("value", m.name)}${ssrIncludeBooleanAttr(Array.isArray(newTask.value.assignee) ? ssrLooseContain(newTask.value.assignee, m.name) : ssrLooseEqual(newTask.value.assignee, m.name)) ? " selected" : ""}>${ssrInterpolate(m.name)}${ssrInterpolate(m.role === "Leader" ? " (Leader)" : "")}</option>`);
        });
        _push(`<!--]--></select><p class="text-[11px] text-[#94A3B8] mt-1">Only Leaders can delegate tasks (FR-34)</p></div><div><label class="block text-[13px] font-semibold text-[#334155] mb-2">Status</label><select class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] focus:outline-none focus:border-[#2563EB]"><option value="backlog"${ssrIncludeBooleanAttr(Array.isArray(newTask.value.status) ? ssrLooseContain(newTask.value.status, "backlog") : ssrLooseEqual(newTask.value.status, "backlog")) ? " selected" : ""}>Backlog</option><option value="in-progress"${ssrIncludeBooleanAttr(Array.isArray(newTask.value.status) ? ssrLooseContain(newTask.value.status, "in-progress") : ssrLooseEqual(newTask.value.status, "in-progress")) ? " selected" : ""}>In Progress</option><option value="review"${ssrIncludeBooleanAttr(Array.isArray(newTask.value.status) ? ssrLooseContain(newTask.value.status, "review") : ssrLooseEqual(newTask.value.status, "review")) ? " selected" : ""}>Review</option><option value="done"${ssrIncludeBooleanAttr(Array.isArray(newTask.value.status) ? ssrLooseContain(newTask.value.status, "done") : ssrLooseEqual(newTask.value.status, "done")) ? " selected" : ""}>Done</option></select></div></div><div><label class="block text-[13px] font-semibold text-[#334155] mb-2">Blocked? (FR-40)</label><div class="flex items-center gap-3"><label class="flex items-center gap-2 cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(newTask.value.isBlocked) ? ssrLooseContain(newTask.value.isBlocked, null) : newTask.value.isBlocked) ? " checked" : ""} class="w-4 h-4 text-[#2563EB] rounded border-[#E2E8F0] focus:ring-[#2563EB]"><span class="text-[13px] text-[#475569]">Mark task as blocked</span></label></div>`);
        if (newTask.value.isBlocked) {
          _push(`<input${ssrRenderAttr("value", newTask.value.blockedReason)} type="text" placeholder="Reason for blocking (required)" class="mt-2 w-full bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#D97706] focus:outline-none focus:border-[#F59E0B]">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label class="block text-[13px] font-semibold text-[#334155] mb-2">Dependencies (FR-43)</label><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(availableDependencies.value, (dep) => {
          _push(`<button class="${ssrRenderClass([newTask.value.dependencies.includes(dep.id) ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0]", "text-[12px] font-semibold px-3 py-1.5 rounded-lg border transition"])}">${ssrInterpolate(dep.title)}</button>`);
        });
        _push(`<!--]--></div><p class="text-[11px] text-[#94A3B8] mt-1">Select tasks this task depends on. It cannot start until dependencies are completed.</p></div></div><div class="flex justify-end gap-3 mt-7"><button class="px-5 py-3 rounded-xl bg-[#F8FAFC] text-[#475569] font-semibold hover:bg-[#E2E8F0] transition">Cancel</button><button class="px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1E40AF] transition">Create Task</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedTask.value) {
        _push(`<div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-6"><div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[600px] p-7 max-h-[90vh] overflow-y-auto"><div class="flex items-center justify-between mb-5"><div class="flex items-center gap-2 flex-wrap"><span class="${ssrRenderClass([priorityClass(selectedTask.value.priority), "text-[12px] font-bold px-2.5 py-1 rounded-full"])}">${ssrInterpolate(selectedTask.value.priority)}</span><span class="${ssrRenderClass([statusClass(selectedTask.value.status), "text-[12px] font-bold px-2.5 py-1 rounded-full"])}">${ssrInterpolate(statusLabel(selectedTask.value.status))}</span>`);
        if (selectedTask.value.isBlocked) {
          _push(`<span class="text-[12px] font-bold text-[#D97706] bg-amber-50 px-2.5 py-1 rounded-full">Blocked</span>`);
        } else {
          _push(`<!---->`);
        }
        if (isStalling(selectedTask.value)) {
          _push(`<span class="text-[12px] font-bold text-[#D97706] bg-amber-50 px-2.5 py-1 rounded-full">Stalling</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button class="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] flex items-center justify-center text-[#64748B]"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg></button></div><h3 class="text-[22px] font-bold text-[#0F172A] mb-2">${ssrInterpolate(selectedTask.value.title)}</h3><p class="text-[14px] text-[#64748B] leading-[1.7] mb-6">${ssrInterpolate(selectedTask.value.description)}</p><div class="grid grid-cols-2 gap-4 mb-6"><div class="bg-[#F8FAFC] rounded-xl p-4"><p class="text-[12px] text-[#94A3B8] mb-1">Assignee</p><div class="flex items-center gap-2"><div class="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white" style="${ssrRenderStyle({ backgroundColor: getAssigneeColor(selectedTask.value.assignee) })}">${ssrInterpolate(getAssigneeInitial(selectedTask.value.assignee))}</div><p class="text-[14px] font-bold text-[#0F172A]">${ssrInterpolate(selectedTask.value.assignee)}</p></div>`);
        if (unref(isLeader)) {
          _push(`<button class="mt-2 text-[11px] font-semibold text-[#2563EB] hover:text-[#1E40AF] transition">Reassign (FR-34)</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="bg-[#F8FAFC] rounded-xl p-4"><p class="text-[12px] text-[#94A3B8] mb-1">Due Date</p><p class="${ssrRenderClass([{ "text-red-500": isDeadlineWarning(selectedTask.value) }, "text-[14px] font-bold text-[#0F172A]"])}">${ssrInterpolate(formatDate(selectedTask.value.dueDate))}</p>`);
        if (isDeadlineWarning(selectedTask.value)) {
          _push(`<p class="text-[11px] text-red-500 font-medium mt-1">Less than 24h remaining!</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (selectedTask.value.isBlocked) {
          _push(`<div class="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-xl p-4 mb-6"><p class="text-[13px] font-semibold text-[#92400E] mb-1">Blocked Reason (FR-40):</p><p class="text-[13px] text-[#78350F]/80">${ssrInterpolate(selectedTask.value.blockedReason)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedTask.value.dependencies && selectedTask.value.dependencies.length > 0) {
          _push(`<div class="mb-6"><p class="text-[13px] font-semibold text-[#334155] mb-2">Dependencies (FR-43)</p><div class="flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(selectedTask.value.dependencies, (depId) => {
            _push(`<span class="bg-[#EBF0FF] text-[#2563EB] text-[12px] font-semibold px-3 py-1 rounded-lg flex items-center gap-1.5"><span class="${ssrRenderClass(isDepDone(depId) ? "text-[#10B981]" : "text-[#F59E0B]")}"><svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">`);
            if (isDepDone(depId)) {
              _push(`<path d="M20 6L9 17l-5-5"></path>`);
            } else {
              _push(`<path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`);
            }
            _push(`</svg></span> ${ssrInterpolate(getTaskTitle(depId))}</span>`);
          });
          _push(`<!--]--></div><p class="text-[11px] text-[#94A3B8] mt-1">This task cannot begin until the above dependencies are completed.</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mb-6"><p class="text-[13px] font-semibold text-[#334155] mb-3">Comments (FR-38)</p>`);
        if (selectedTask.value.comments && selectedTask.value.comments.length > 0) {
          _push(`<div class="space-y-3 mb-4"><!--[-->`);
          ssrRenderList(selectedTask.value.comments, (comment) => {
            _push(`<div class="bg-[#F8FAFC] rounded-xl p-3"><div class="flex items-center gap-2 mb-1"><div class="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white" style="${ssrRenderStyle({ backgroundColor: getAssigneeColor(comment.author) })}">${ssrInterpolate(getAssigneeInitial(comment.author))}</div><span class="text-[12px] font-semibold text-[#0F172A]">${ssrInterpolate(comment.author)}</span><span class="text-[11px] text-[#94A3B8]">${ssrInterpolate(comment.timestamp)}</span></div><p class="text-[13px] text-[#475569] leading-[1.6]">${ssrInterpolate(comment.text)}</p></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex gap-2"><input${ssrRenderAttr("value", newComment.value)} type="text" placeholder="Add a comment..." class="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-[13px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"><button class="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[13px] font-semibold px-4 py-2.5 rounded-xl transition">Send</button></div></div><div class="mb-6"><p class="text-[13px] font-semibold text-[#334155] mb-3">Activity Log (FR-37)</p><div class="space-y-3"><!--[-->`);
        ssrRenderList(selectedTask.value.logs, (log) => {
          _push(`<div class="flex items-start gap-3"><div class="${ssrRenderClass([logIconClass(log.type), "w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"])}"><span class="${ssrRenderClass([logTextClass(log.type), "text-[10px]"])}">${ssrInterpolate(logIcon(log.type))}</span></div><div><p class="text-[13px] text-[#0F172A]"><span class="font-semibold">${ssrInterpolate(log.actor)}</span> ${ssrInterpolate(log.action)}</p><p class="text-[11px] text-[#94A3B8]">${ssrInterpolate(log.timestamp)}</p></div></div>`);
        });
        _push(`<!--]--></div></div><div><p class="text-[13px] font-semibold text-[#334155] mb-2">Move to</p><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(columns, (col) => {
          _push(`<button class="${ssrRenderClass([selectedTask.value.status === col.id ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:border-[#2563EB]", "text-[12px] font-semibold px-4 py-2 rounded-xl border transition"])}">${ssrInterpolate(col.title)}</button>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showReassign.value) {
        _push(`<div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[60] px-6"><div class="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl w-full max-w-[400px] p-7"><div class="flex items-center justify-between mb-6"><div><h3 class="text-[20px] font-bold text-[#0F172A]">Reassign Task</h3><p class="text-[13px] text-[#94A3B8] mt-1">Leaders can delegate tasks to members (FR-34)</p></div><button class="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] flex items-center justify-center text-[#64748B]"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg></button></div><div class="space-y-3 mb-6"><!--[-->`);
        ssrRenderList(teamMembers, (m) => {
          _push(`<button class="${ssrRenderClass([selectedTask.value && selectedTask.value.assignee === m.name ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:border-[#2563EB]", "w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition text-left"])}"><div class="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold text-white" style="${ssrRenderStyle({ backgroundColor: m.color })}">${ssrInterpolate(m.initial)}</div><div><p class="text-[14px] font-semibold">${ssrInterpolate(m.name)}</p><p class="text-[12px] opacity-70">${ssrInterpolate(m.role)}</p></div></button>`);
        });
        _push(`<!--]--></div></div></div>`);
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
        class: "flex flex-col items-center gap-0.5 py-2 px-3 text-[#2563EB]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M9 11l3 3L22 4"${_scopeId}></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"${_scopeId}></path></svg><span class="text-[10px] font-bold"${_scopeId}>Tasks</span>`);
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
              createVNode("span", { class: "text-[10px] font-bold" }, "Tasks")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tasks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tasks-IyCIm31J.mjs.map
