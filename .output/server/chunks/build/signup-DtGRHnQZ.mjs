import { _ as __nuxt_component_0 } from './nuxt-link-Cyj_sl3k.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-transparent-CogftluF.mjs';
import { useRouter } from 'vue-router';
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
  __name: "signup",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const role = ref("Student Team Member");
    const acceptedTerms = ref(false);
    const errorMessage = ref("");
    const successMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[88vh] flex items-start justify-center px-6 pt-10 pb-16 bg-[#FAFBFF]" }, _attrs))}><div class="w-full max-w-[1080px] grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start"><div class="hidden lg:block pt-16"><div class="max-w-[460px]"><div class="inline-flex items-center gap-2 bg-[#EBF0FF] border border-[#2563EB]/10 rounded-full px-4 py-2 mb-7"><span class="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span><span class="text-[13px] font-bold text-[#2563EB]"> Built for academic project teams </span></div><h1 class="font-heading text-[46px] leading-[1.08] text-[#0F172A] tracking-[-0.02em] mb-5"> Start your project <br> space with <span class="text-[#2563EB]">TeamTrack.</span></h1><p class="text-[#64748B] text-[16px] leading-[1.8] mb-8"> Create a team workspace to manage tasks, track effort, communicate clearly, and support fair contribution visibility. </p><div class="grid grid-cols-2 gap-4"><div class="bg-white border border-[#E2E8F0]/70 rounded-3xl p-5 shadow-sm"><div class="w-11 h-11 rounded-2xl bg-[#EBF0FF] flex items-center justify-center mb-4"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path></svg></div><h3 class="text-[15px] font-bold text-[#0F172A] mb-1">Projects</h3><p class="text-[13px] text-[#94A3B8] leading-[1.6]"> Create and manage academic workspaces. </p></div><div class="bg-white border border-[#E2E8F0]/70 rounded-3xl p-5 shadow-sm"><div class="w-11 h-11 rounded-2xl bg-[#DCFCE7] flex items-center justify-center mb-4"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></div><h3 class="text-[15px] font-bold text-[#0F172A] mb-1">Tasks</h3><p class="text-[13px] text-[#94A3B8] leading-[1.6]"> Assign, update, and track team work. </p></div><div class="bg-white border border-[#E2E8F0]/70 rounded-3xl p-5 shadow-sm"><div class="w-11 h-11 rounded-2xl bg-[#F3E8FF] flex items-center justify-center mb-4"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><h3 class="text-[15px] font-bold text-[#0F172A] mb-1">Time Logs</h3><p class="text-[13px] text-[#94A3B8] leading-[1.6]"> Record effort using timers and logs. </p></div><div class="bg-white border border-[#E2E8F0]/70 rounded-3xl p-5 shadow-sm"><div class="w-11 h-11 rounded-2xl bg-[#FEF3C7] flex items-center justify-center mb-4"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg></div><h3 class="text-[15px] font-bold text-[#0F172A] mb-1">AI Insights</h3><p class="text-[13px] text-[#94A3B8] leading-[1.6]"> View supportive project suggestions. </p></div></div></div></div><div class="w-full max-w-[470px] mx-auto"><div class="flex justify-center mb-6"><img${ssrRenderAttr("src", _imports_0)} alt="TeamTrack" class="h-10 w-auto"></div><div class="flex justify-center"><div class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"></path></svg><span class="text-[13px] font-bold text-emerald-600 tracking-tight"> Free for student teams </span></div></div><div class="bg-white rounded-[28px] border border-[#E2E8F0]/70 p-8 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.18)]"><h1 class="font-heading text-[28px] text-[#0F172A] mb-1 tracking-tight"> Create your account </h1><p class="text-[14px] text-[#94A3B8] mb-7"> Sign up to start managing your academic project team. </p>`);
      if (successMessage.value) {
        _push(`<div class="mb-5 bg-green-50 border border-green-200 text-green-600 rounded-xl px-4 py-3 text-[13px] font-semibold">${ssrInterpolate(successMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<div class="mb-5 bg-red-50 border border-red-200 text-red-500 rounded-xl px-4 py-3 text-[13px] font-semibold">${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-5"><label class="block text-[13px] font-semibold text-[#334155] mb-2"> Full name </label><input${ssrRenderAttr("value", fullName.value)} type="text" placeholder="Mohammed Siraj Hussain" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"></div><div class="mb-5"><label class="block text-[13px] font-semibold text-[#334155] mb-2"> University email </label><input${ssrRenderAttr("value", email.value)} type="email" placeholder="you@university.edu" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"></div><div class="mb-5"><label class="block text-[13px] font-semibold text-[#334155] mb-2"> Password </label><input${ssrRenderAttr("value", password.value)} type="password" placeholder="Minimum 8 characters" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"></div><div class="mb-5"><label class="block text-[13px] font-semibold text-[#334155] mb-2"> Confirm password </label><input${ssrRenderAttr("value", confirmPassword.value)} type="password" placeholder="Retype your password" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"></div><div class="mb-5"><label class="block text-[13px] font-semibold text-[#334155] mb-2"> Account role </label><select class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"><option value="Student Team Member"${ssrIncludeBooleanAttr(Array.isArray(role.value) ? ssrLooseContain(role.value, "Student Team Member") : ssrLooseEqual(role.value, "Student Team Member")) ? " selected" : ""}>Student Team Member</option><option value="Team Leader"${ssrIncludeBooleanAttr(Array.isArray(role.value) ? ssrLooseContain(role.value, "Team Leader") : ssrLooseEqual(role.value, "Team Leader")) ? " selected" : ""}>Team Leader</option><option value="Instructor / Supervisor"${ssrIncludeBooleanAttr(Array.isArray(role.value) ? ssrLooseContain(role.value, "Instructor / Supervisor") : ssrLooseEqual(role.value, "Instructor / Supervisor")) ? " selected" : ""}>Instructor / Supervisor</option></select></div><label class="flex items-start gap-3 mb-6 cursor-pointer"><input${ssrIncludeBooleanAttr(Array.isArray(acceptedTerms.value) ? ssrLooseContain(acceptedTerms.value, null) : acceptedTerms.value) ? " checked" : ""} type="checkbox" class="mt-1 w-4 h-4 accent-[#2563EB]"><span class="text-[13px] text-[#64748B] leading-[1.6]"> I agree to use TeamTrack for academic project collaboration, contribution visibility, and responsible team communication. </span></label><button class="w-full bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[15px] font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 mb-5"> Create TeamTrack Account </button><div class="flex items-center gap-3 mb-5"><div class="flex-1 h-[1px] bg-[#E2E8F0]"></div><span class="text-[12px] text-[#94A3B8] font-medium">or</span><div class="flex-1 h-[1px] bg-[#E2E8F0]"></div></div><button class="w-full flex items-center justify-center gap-2.5 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#0F172A] text-[14px] font-semibold py-3 rounded-xl transition-all duration-200 mb-6"><svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C4 20.36 7.71 23 12 23z"></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.71 1 4 3.64 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path></svg> Continue with Google </button><div class="bg-[#F8FAFC] rounded-xl p-5 mb-5 border border-[#E2E8F0]/60"><p class="text-[13px] font-bold text-[#0F172A] mb-3"> TeamTrack supports: </p><div class="space-y-2"><!--[-->`);
      ssrRenderList([
        "Project workspace management",
        "Task assignment and progress tracking",
        "Start / stop time tracking",
        "Team chat and activity visibility",
        "Contribution analytics and AI-assisted insights"
      ], (item) => {
        _push(`<div class="flex items-center gap-2.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"></path></svg><span class="text-[13px] text-[#475569] font-medium">${ssrInterpolate(item)}</span></div>`);
      });
      _push(`<!--]--></div></div><p class="text-center text-[13px] text-[#94A3B8]"> Already have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-[#2563EB] font-semibold hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log in `);
          } else {
            return [
              createTextVNode(" Log in ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signup-DtGRHnQZ.mjs.map
