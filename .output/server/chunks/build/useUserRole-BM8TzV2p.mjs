import { computed, ref } from 'vue';

const currentUser = ref({
  id: 1,
  name: "Siraj",
  email: "teamtrackleader@university.edu",
  role: "Leader",
  initial: "S"
});
const isLeader = computed(() => currentUser.value.role === "Leader");
const isMember = computed(() => currentUser.value.role === "Member");
const isInstructor = computed(() => currentUser.value.role === "Instructor");
const isAdmin = computed(() => currentUser.value.role === "Admin");
function useUserRole() {
  function setRole(role) {
    currentUser.value.role = role;
  }
  function setUser(user) {
    currentUser.value = user;
  }
  return {
    currentUser,
    isLeader,
    isMember,
    isInstructor,
    isAdmin,
    setRole,
    setUser
  };
}

export { useUserRole as u };
//# sourceMappingURL=useUserRole-BM8TzV2p.mjs.map
