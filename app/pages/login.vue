<template>
  <div class="min-h-[80vh] flex items-center justify-center px-6 py-16 bg-[#F8FAFC]">
    <div class="w-full max-w-[420px]">

      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <img
          src="~/assets/images/logo-transparent.png"
          alt="TeamTrack"
          class="h-10 w-auto"
        />
      </div>

      <!-- FREE badge -->
      <div
        class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6 mx-auto w-fit"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10B981"
          stroke-width="2.5"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>

        <span class="text-[13px] font-bold text-emerald-600 tracking-tight">
          Totally free for teams
        </span>
      </div>

      <!-- Card -->
      <div
        class="bg-white rounded-[24px] border border-[#E2E8F0]/60 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]"
      >
        <h1
          class="font-heading text-[26px] text-[#0F172A] mb-1 tracking-tight"
        >
          Welcome back, teammate
        </h1>

        <p class="text-[14px] text-[#94A3B8] mb-7">
          Sign in to manage your team.
        </p>

        <!-- Error -->
        <div
          v-if="error"
          class="mb-5 bg-red-50 border border-red-200 text-red-500 text-[13px] px-4 py-3 rounded-xl"
        >
          {{ error }}
        </div>

        <!-- Email -->
        <div class="mb-5">
          <label
            class="block text-[13px] font-semibold text-[#334155] mb-2"
          >
            Email address
          </label>

          <input
            v-model="email"
            type="email"
            placeholder="you@university.edu"
            class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
          />
        </div>

        <!-- Password -->
        <div class="mb-6">
          <label
            class="block text-[13px] font-semibold text-[#334155] mb-2"
          >
            Password
          </label>

          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
          />
        </div>

        <!-- Submit -->
        <button
          @click="login"
          class="w-full bg-[#2563EB] hover:bg-[#1E40AF] text-white text-[15px] font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 mb-5"
        >
          Log in to your team
        </button>

        <!-- Divider -->
        <div class="flex items-center gap-3 mb-5">
          <div class="flex-1 h-[1px] bg-[#E2E8F0]" />
          <span class="text-[12px] text-[#94A3B8] font-medium">or</span>
          <div class="flex-1 h-[1px] bg-[#E2E8F0]" />
        </div>

        <!-- Google -->
        <button
          class="w-full flex items-center justify-center gap-2.5 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#0F172A] text-[14px] font-semibold py-3 rounded-xl transition-all duration-200 mb-6"
        >
          Continue with Google
        </button>

        <p class="text-center text-[13px] text-[#94A3B8]">
          Need a team space?

          <NuxtLink
            to="/signup"
            class="text-[#2563EB] font-semibold hover:underline"
          >
            Sign up for free
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

const login = () => {

  if (!email.value || !password.value) {
    error.value = 'Please fill all fields'
    return
  }

  // Fake login for demo
  localStorage.setItem('loggedIn', 'true')

  // Redirect
  router.push('/dashboard')
}
</script>