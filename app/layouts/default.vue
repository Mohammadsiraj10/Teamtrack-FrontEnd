<script setup>
const activeHash = ref('#hero')

function onScroll() {
  const ids = ['hero', 'why', 'workflow', 'modules', 'trust']
  for (let i = ids.length - 1; i >= 0; i--) {
    const el = document.getElementById(ids[i])
    if (el && el.getBoundingClientRect().top <= 160) {
      activeHash.value = '#' + ids[i]
      return
    }
  }
  activeHash.value = '#hero'
}

function go(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  activeHash.value = '#' + id
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
</script>

<template>
  <div class="min-h-screen bg-[#FAFBFF] relative overflow-hidden">
    <div
      class="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-40 pointer-events-none"
      style="background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0.03) 50%, transparent 70%);"
    />
    <div
      class="fixed -bottom-[20%] -right-[10%] w-[55%] h-[55%] rounded-full opacity-30 pointer-events-none"
      style="background: radial-gradient(circle, rgba(96,165,250,0.10) 0%, rgba(59,130,246,0.03) 50%, transparent 70%);"
    />
    <div
      class="fixed -bottom-[10%] left-[20%] w-[30%] h-[40%] rounded-full opacity-20 pointer-events-none"
      style="background: radial-gradient(circle, rgba(251,146,60,0.10) 0%, transparent 60%);"
    />

    <header class="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5">
      <div
        class="max-w-[1200px] mx-auto h-[52px] sm:h-[62px] bg-white/[0.72] backdrop-blur-2xl rounded-xl sm:rounded-2xl border border-white/40 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(37,99,235,0.06)] flex items-center justify-between px-2 sm:px-2"
      >
        <NuxtLink to="/" class="flex items-center pl-3 sm:pl-5" @click.prevent="go('hero')">
          <img src="~/assets/images/logo-transparent.png" alt="TeamTrack" class="h-7 sm:h-9 w-auto" />
        </NuxtLink>

        <nav class="hidden md:flex items-center bg-[#F3F4F6]/50 rounded-xl px-2 py-1.5">
          <a class="nav-pill" :class="{ 'nav-pill-active': activeHash === '#hero' }" @click.prevent="go('hero')">Home</a>
          <a class="nav-pill" :class="{ 'nav-pill-active': activeHash === '#why' }" @click.prevent="go('why')">Why</a>
          <a class="nav-pill" :class="{ 'nav-pill-active': activeHash === '#workflow' }" @click.prevent="go('workflow')">Workflow</a>
          <a class="nav-pill" :class="{ 'nav-pill-active': activeHash === '#modules' }" @click.prevent="go('modules')">Modules</a>
          <a class="nav-pill" :class="{ 'nav-pill-active': activeHash === '#trust' }" @click.prevent="go('trust')">Trust</a>
        </nav>

        <div class="flex items-center gap-3 pr-3">
          <NuxtLink to="/login" class="hidden sm:inline-flex items-center text-[#475569] hover:text-[#0F172A] text-[13px] font-semibold tracking-[-0.01em] px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#F1F5F9]">Log in</NuxtLink>
          <NuxtLink to="/signup" class="hidden sm:inline-flex items-center bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[13px] font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-[1px] active:translate-y-0">Get Started &mdash; Free</NuxtLink>
          <NuxtLink to="/signup" class="sm:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-[#2563EB] hover:bg-[#1E40AF] text-white transition-all duration-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>
      </div>
    </header>

    <main class="relative z-10 pt-[72px] sm:pt-[92px]">
      <slot />
    </main>

    <footer class="border-t border-[#E2E8F0]/60 bg-white/50">
      <div class="max-w-[1200px] mx-auto px-6 py-12">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <img src="~/assets/images/logo-transparent.png" alt="TeamTrack" class="h-7 w-auto" />
            <span class="text-[13px] text-[#94A3B8]">Academic project management. Built by students, for students.</span>
          </div>
          <div class="flex items-center gap-6">
            <NuxtLink to="/signup" class="text-[13px] text-[#64748B] hover:text-[#2563EB] font-medium transition-colors">Sign Up &mdash; Free</NuxtLink>
            <NuxtLink to="/login" class="text-[13px] text-[#64748B] hover:text-[#2563EB] font-medium transition-colors">Log In</NuxtLink>
          </div>
          <p class="text-[12px] text-[#CBD5E1]">2025 TeamTrack. Fair by design.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.nav-pill {
  font-size: 13.5px;
  font-weight: 600;
  color: #64748B;
  letter-spacing: -0.01em;
  padding: 7px 18px;
  border-radius: 10px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  user-select: none;
}
.nav-pill:hover {
  color: #1E293B;
  background: rgba(255,255,255,0.6);
}
.nav-pill-active {
  color: #2563EB;
  background: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.nav-pill-active:hover {
  background: #FFFFFF;
}
</style>