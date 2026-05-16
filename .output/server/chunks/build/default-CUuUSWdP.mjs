import { _ as __nuxt_component_0 } from './nuxt-link-Cyj_sl3k.mjs';
import { ref, mergeProps, withCtx, createVNode, unref, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-transparent-CogftluF.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const activeHash = ref("#hero");
    function go(id) {
      const el = (void 0).getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      activeHash.value = "#" + id;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#FAFBFF] relative overflow-hidden" }, _attrs))} data-v-083e6961><div class="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-40 pointer-events-none" style="${ssrRenderStyle({ "background": "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0.03) 50%, transparent 70%)" })}" data-v-083e6961></div><div class="fixed -bottom-[20%] -right-[10%] w-[55%] h-[55%] rounded-full opacity-30 pointer-events-none" style="${ssrRenderStyle({ "background": "radial-gradient(circle, rgba(96,165,250,0.10) 0%, rgba(59,130,246,0.03) 50%, transparent 70%)" })}" data-v-083e6961></div><div class="fixed -bottom-[10%] left-[20%] w-[30%] h-[40%] rounded-full opacity-20 pointer-events-none" style="${ssrRenderStyle({ "background": "radial-gradient(circle, rgba(251,146,60,0.10) 0%, transparent 60%)" })}" data-v-083e6961></div><header class="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5" data-v-083e6961><div class="max-w-[1200px] mx-auto h-[52px] sm:h-[62px] bg-white/[0.72] backdrop-blur-2xl rounded-xl sm:rounded-2xl border border-white/40 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(37,99,235,0.06)] flex items-center justify-between px-2 sm:px-2" data-v-083e6961>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center pl-3 sm:pl-5",
        onClick: ($event) => go("hero")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="TeamTrack" class="h-7 sm:h-9 w-auto" data-v-083e6961${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "TeamTrack",
                class: "h-7 sm:h-9 w-auto"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center bg-[#F3F4F6]/50 rounded-xl px-2 py-1.5" data-v-083e6961><a class="${ssrRenderClass([{ "nav-pill-active": unref(activeHash) === "#hero" }, "nav-pill"])}" data-v-083e6961>Home</a><a class="${ssrRenderClass([{ "nav-pill-active": unref(activeHash) === "#why" }, "nav-pill"])}" data-v-083e6961>Why</a><a class="${ssrRenderClass([{ "nav-pill-active": unref(activeHash) === "#workflow" }, "nav-pill"])}" data-v-083e6961>Workflow</a><a class="${ssrRenderClass([{ "nav-pill-active": unref(activeHash) === "#modules" }, "nav-pill"])}" data-v-083e6961>Modules</a><a class="${ssrRenderClass([{ "nav-pill-active": unref(activeHash) === "#trust" }, "nav-pill"])}" data-v-083e6961>Trust</a></nav><div class="flex items-center gap-3 pr-3" data-v-083e6961>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "hidden sm:inline-flex items-center text-[#475569] hover:text-[#0F172A] text-[13px] font-semibold tracking-[-0.01em] px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#F1F5F9]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Log in`);
          } else {
            return [
              createTextVNode("Log in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        class: "hidden sm:inline-flex items-center bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[13px] font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-[1px] active:translate-y-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get Started \u2014 Free`);
          } else {
            return [
              createTextVNode("Get Started \u2014 Free")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        class: "sm:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-[#2563EB] hover:bg-[#1E40AF] text-white transition-all duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-083e6961${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-083e6961${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><main class="relative z-10 pt-[72px] sm:pt-[92px]" data-v-083e6961>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="border-t border-[#E2E8F0]/60 bg-white/50" data-v-083e6961><div class="max-w-[1200px] mx-auto px-6 py-12" data-v-083e6961><div class="flex flex-col md:flex-row items-center justify-between gap-6" data-v-083e6961><div class="flex items-center gap-3" data-v-083e6961><img${ssrRenderAttr("src", _imports_0)} alt="TeamTrack" class="h-7 w-auto" data-v-083e6961><span class="text-[13px] text-[#94A3B8]" data-v-083e6961>Academic project management. Built by students, for students.</span></div><div class="flex items-center gap-6" data-v-083e6961>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        class: "text-[13px] text-[#64748B] hover:text-[#2563EB] font-medium transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign Up \u2014 Free`);
          } else {
            return [
              createTextVNode("Sign Up \u2014 Free")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-[13px] text-[#64748B] hover:text-[#2563EB] font-medium transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Log In`);
          } else {
            return [
              createTextVNode("Log In")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-[12px] text-[#CBD5E1]" data-v-083e6961>2025 TeamTrack. Fair by design.</p></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-083e6961"]]);

export { _default as default };
//# sourceMappingURL=default-CUuUSWdP.mjs.map
