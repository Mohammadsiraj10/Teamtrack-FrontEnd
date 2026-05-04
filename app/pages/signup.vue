<template>
  <div class="min-h-[80vh] flex items-center justify-center px-6 py-16">
    <div class="w-full max-w-[420px]">

      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <img src="~/assets/images/logo-transparent.png" alt="TeamTrack" class="h-10 w-auto" />
      </div>

      <!-- FREE badge -->
      <div class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6 mx-auto w-fit">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5">
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <span class="text-[13px] font-bold text-emerald-600 tracking-tight">Totally free for teams</span>
      </div>

      <div class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]">
        <h1 class="font-heading text-[26px] text-[#0F172A] mb-1 tracking-tight">Start your team</h1>
        <p class="text-[14px] text-[#94A3B8] mb-7">Create your free team space in seconds.</p>

        <!-- Name -->
        <div class="mb-5">
          <label class="block text-[13px] font-semibold text-[#334155] mb-2">Your name</label>
          <input type="text" placeholder="Alex Johnson" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all" />
        </div>

        <!-- Email -->
        <div class="mb-5">
          <label class="block text-[13px] font-semibold text-[#334155] mb-2">Team / University email</label>
          <input type="email" placeholder="alex@university.edu" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all" />
        </div>

        <!-- Password -->
        <div class="mb-6">
          <label class="block text-[13px] font-semibold text-[#334155] mb-2">Password</label>
          <input type="password" placeholder="Min. 8 characters" class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all" />
        </div>

        <!-- Submit -->
        <button class="w-full bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[15px] font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 mb-5">
          Create Free Team Account
        </button>

        <!-- Divider -->
        <div class="flex items-center gap-3 mb-5">
          <div class="flex-1 h-[1px] bg-[#E2E8F0]" />
          <span class="text-[12px] text-[#94A3B8] font-medium">or</span>
          <div class="flex-1 h-[1px] bg-[#E2E8F0]" />
        </div>

        <!-- Google -->
        <button class="w-full flex items-center justify-center gap-2.5 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#0F172A] text-[14px] font-semibold py-3 rounded-xl transition-all duration-200 mb-6">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C4 20.36 7.71 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.71 1 4 3.64 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        <!-- Free checklist -->
        <div class="bg-[#F8FAFC] rounded-xl p-5 mb-5 border border-[#E2E8F0]/60">
          <p class="text-[13px] font-bold text-[#0F172A] mb-3">Everything included, everyone free:</p>
          <div class="space-y-2">
            <div v-for="item in [
              'Unlimited team members',
              'Unlimited projects & tasks',
              'AI insights for your team',
              'Time tracking & analytics',
              'Team chat & notifications'
            ]" :key="item" class="flex items-center gap-2.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span class="text-[13px] text-[#475569] font-medium">{{ item }}</span>
            </div>
          </div>
        </div>

        <p class="text-center text-[13px] text-[#94A3B8]">
          Already have a team?
          <NuxtLink to="/login" class="text-[#2563EB] font-semibold hover:underline">Log in</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
