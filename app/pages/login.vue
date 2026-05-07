<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow w-full max-w-md">

      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>

      <!-- Error message -->
      <p v-if="error" class="text-red-500 text-sm mb-4 text-center">
        {{ error }}
      </p>

      <!-- FORM -->
      <form @submit.prevent="handleLogin" class="space-y-4">

        <!-- Email -->
        <div>
          <label class="block mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter email"
            class="w-full border p-2 rounded"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter password"
            class="w-full border p-2 rounded"
          />
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

      </form>

      <!-- Link -->
      <p class="text-sm mt-4 text-center">
        Don’t have an account?
        <NuxtLink to="/signup" class="text-blue-500">Signup</NuxtLink>
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = () => {
  error.value = ''

  if (!email.value || !password.value) {
    error.value = 'Please fill all fields'
    return
  }

  if (!email.value.includes('@')) {
    error.value = 'Enter a valid email'
    return
  }

  // SUCCESS (simulate login)
  console.log('Email:', email.value)

  // 🔥 Redirect to dashboard
  router.push('/dashboard')
}
</script>