import { reactive, watch } from 'vue'

// ===== USER MẶC ĐỊNH (LUÔN CÓ ADMIN) =====
const defaultUsers = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: '123456',
    role: 'admin'
  },
  {
    name: 'User',
    email: 'khoi@gmail.com',
    password: '123',
    role: 'user'
    
  }
]

// ===== LẤY USERS TỪ LOCALSTORAGE =====
let storedUsers = JSON.parse(localStorage.getItem('users'))

// Nếu chưa có users hoặc users rỗng → dùng default
if (!storedUsers || storedUsers.length === 0) {
  storedUsers = defaultUsers
  localStorage.setItem('users', JSON.stringify(defaultUsers))
}

// ===== LẤY USER ĐANG ĐĂNG NHẬP =====
const storedUser = JSON.parse(localStorage.getItem('currentUser'))

export const auth = reactive({
  users: storedUsers,
  user: storedUser,

  // ===== REGISTER =====
  register(name, email, password) {
    if (!name || !email || !password) return false

    email = email.trim()
    password = password.trim()

    if (this.users.find(u => u.email === email)) return false

    const newUser = {
      name,
      email,
      password,
      role: 'user'
    }

    this.users.push(newUser)

    // auto login sau khi đăng ký
    this.user = {
      name,
      email,
      role: 'user'
    }

    return true
  },

  // ===== LOGIN =====
  login(email, password) {
    email = email.trim()
    password = password.trim()

    const u = this.users.find(
      user => user.email === email && user.password === password
    )

    if (!u) return false

    this.user = {
      name: u.name,
      email: u.email,
      role: u.role
    }

    return true
  },

  // ===== LOGOUT =====
  logout() {
    this.user = null
  }
})

// ===== SAVE USERS =====
watch(
  () => auth.users,
  v => localStorage.setItem('users', JSON.stringify(v)),
  { deep: true }
)

// ===== SAVE CURRENT USER =====
watch(
  () => auth.user,
  v => {
    if (v) localStorage.setItem('currentUser', JSON.stringify(v))
    else localStorage.removeItem('currentUser')
  }
)
