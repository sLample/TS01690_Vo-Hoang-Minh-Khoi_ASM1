import { reactive, watch } from 'vue'

const storedUsers = JSON.parse(localStorage.getItem('users')) || [
  { name: 'Admin', email: 'admin@gmail.com', password: '123456' }
]

const storedUser = JSON.parse(localStorage.getItem('currentUser'))

export const auth = reactive({
  users: storedUsers,
  user: storedUser,

  register(name, email, password) {
    if (!name || !email || !password) return false
    if (this.users.find(u => u.email === email)) return false

    this.users.push({ name, email, password })
    this.user = { name, email }
    return true
  },

  login(email, password) {
    const u = this.users.find(
      u => u.email === email && u.password === password
    )
    if (!u) return false
    this.user = { name: u.name, email: u.email }
    return true
  },

  logout() {
    this.user = null
  }
})

watch(
  () => auth.users,
  v => localStorage.setItem('users', JSON.stringify(v)),
  { deep: true }
)

watch(
  () => auth.user,
  v => {
    if (v) localStorage.setItem('currentUser', JSON.stringify(v))
    else localStorage.removeItem('currentUser')
  }
)
