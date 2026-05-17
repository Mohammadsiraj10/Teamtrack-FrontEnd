<script setup>
const activeHash = ref('#hero')
const scrolled = ref(false)

const sections = ['hero', 'why', 'workflow', 'modules', 'trust']

function go(id) {
  const el = document.getElementById(id)
  if (el) {
    const headerOffset = 70
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
    activeHash.value = '#' + id
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 20

  const headerOffset = 100
  let current = 'hero'
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= headerOffset) {
      current = id
    }
  }
  activeHash.value = '#' + current
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="min-h-screen bg-[#FAFBFF] relative overflow-hidden">
    <div
      class="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-30 pointer-events-none"
      style="background: radial-gradient(circle, rgba(37,99,235,0.10) 0%, rgba(37,99,235,0.02) 50%, transparent 70%);"
    />
    <div
      class="fixed -bottom-[20%] -right-[10%] w-[55%] h-[55%] rounded-full opacity-20 pointer-events-none"
      style="background: radial-gradient(circle, rgba(96,165,250,0.08) 0%, rgba(37,99,235,0.02) 50%, transparent 70%);"
    />
    <div
      class="fixed -bottom-[10%] left-[20%] w-[30%] h-[40%] rounded-full opacity-15 pointer-events-none"
      style="background: radial-gradient(circle, rgba(251,146,60,0.08) 0%, transparent 60%);"
    />

    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E2E8F0]/40 transition-shadow duration-500" :class="scrolled ? 'shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(37,99,235,0.06)]' : 'shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_16px_rgba(37,99,235,0.04)]'">
      <div
        class="max-w-[1200px] mx-auto h-[52px] sm:h-[62px] flex items-center justify-between px-4 sm:px-6"
      >
        <NuxtLink to="/" class="flex items-center pl-3 sm:pl-5 rounded-lg transition-opacity duration-200 hover:opacity-80" @click.prevent="go('hero')">
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
          <NuxtLink to="/login" class="hidden sm:inline-flex items-center text-[#475569] hover:text-[#2563EB] text-[13px] font-semibold tracking-[-0.01em] px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#EFF6FF] hover:shadow-sm">Log in</NuxtLink>
          <NuxtLink to="/signup" class="hidden sm:inline-flex items-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_8px_24px_-6px_rgba(37,99,235,0.4)] hover:-translate-y-[1px] active:translate-y-0">Get Started &mdash; Free</NuxtLink>
          <NuxtLink to="/signup" class="sm:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white transition-all duration-300 hover:shadow-[0_6px_20px_-4px_rgba(37,99,235,0.4)] hover:-translate-y-[1px] active:translate-y-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>
      </div>
    </header>

    <main class="relative z-10 pt-[52px] sm:pt-[62px]">
      <slot />
    </main>

    <footer class="relative border-t border-[#E2E8F0]/40 bg-gradient-to-b from-[#FAFBFF] to-[#F8FAFC]">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div class="flex flex-col items-center gap-5">
          <div class="flex items-center gap-3">
            <img src="~/assets/images/logo-transparent.png" alt="TeamTrack" class="h-8 w-auto opacity-90" />
          </div>
          <p class="text-[13px] text-[#94A3B8] text-center max-w-[400px] leading-relaxed">Academic project management. Built by students, for students.</p>
          <div class="flex items-center gap-1.5 mt-1">
            <NuxtLink to="/signup" class="text-[13px] text-[#64748B] hover:text-[#2563EB] font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#EFF6FF]">Sign Up</NuxtLink>
            <span class="text-[#E2E8F0] text-[10px]">&#9679;</span>
            <NuxtLink to="/login" class="text-[13px] text-[#64748B] hover:text-[#2563EB] font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#EFF6FF]">Log In</NuxtLink>
          </div>
          <div class="w-12 h-[1px] bg-[#E2E8F0]/60 my-2"></div>
          <p class="text-[11px] text-[#CBD5E1] tracking-wide">2025 TeamTrack. Fair by design.</p>
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
  position: relative;
}
.nav-pill::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: #2563EB;
  border-radius: 1px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
}
.nav-pill:hover {
  color: #2563EB;
  background: rgba(37,99,235,0.06);
}
.nav-pill:hover::after {
  width: 16px;
}
.nav-pill-active {
  color: #2563EB;
  background: #FFFFFF;
  box-shadow: 0 1px 4px rgba(37,99,235,0.1);
}
.nav-pill-active::after {
  width: 20px;
  background: #2563EB;
}
.nav-pill-active:hover {
  color: #1D4ED8;
  background: #FFFFFF;
}
</style>