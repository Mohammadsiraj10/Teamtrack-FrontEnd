<template>
  <div class="min-h-screen flex bg-gray-100">

    <!-- Sidebar -->
    <div class="w-64 bg-white shadow p-5">
      <h1 class="text-xl font-bold text-blue-600 mb-6">TeamTrack</h1>

      <nav class="space-y-3">
        <NuxtLink to="/dashboard" class="block hover:text-blue-500">Dashboard</NuxtLink>
        <NuxtLink to="/projects" class="block hover:text-blue-500">Projects</NuxtLink>
        <NuxtLink to="/tasks" class="block hover:text-blue-500">Tasks</NuxtLink>
        <NuxtLink to="/team" class="block hover:text-blue-500">Team</NuxtLink>
        <NuxtLink to="/chat" class="block hover:text-blue-500">Chat</NuxtLink>
      </nav>

      <button @click="logout" class="mt-10 text-red-500">Logout</button>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-6">

      <h2 class="text-2xl font-semibold mb-6">Dashboard</h2>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded shadow">
          <p class="text-gray-500">Projects</p>
          <p class="text-2xl font-bold">3</p>
        </div>

        <div class="bg-white p-6 rounded shadow">
          <p class="text-gray-500">Tasks</p>
          <p class="text-2xl font-bold">12</p>
        </div>

        <div class="bg-white p-6 rounded shadow">
          <p class="text-gray-500">Members</p>
          <p class="text-2xl font-bold">5</p>
        </div>
      </div>

      <!-- Small Preview ONLY -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- Recent Projects -->
        <div class="bg-white p-5 rounded shadow">
          <h3 class="font-semibold mb-3">Recent Projects</h3>
          <ul class="space-y-2">
            <li>TeamTrack UI</li>
            <li>Backend Setup</li>
          </ul>
        </div>

        <!-- Recent Tasks -->
        <div class="bg-white p-5 rounded shadow">
          <h3 class="font-semibold mb-3">Recent Tasks</h3>
          <ul class="space-y-2">
            <li>Login Page - Done</li>
            <li>Dashboard UI - In Progress</li>
          </ul>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  router.push('/login')
}
</script>