<template>
    <nav class="bg-blue-600 shadow-md">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center py-3">
          <div class="flex space-x-6">
            <router-link to="/" class="nav-link">🏠 Home</router-link>
            <router-link to="/add" class="nav-link">➕ Add Restaurant</router-link>
          </div>
  
          <div>
            <a @click="logout" href="#" class="nav-link bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg">
              🚪 Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Header",
    methods: {
      logout() {
        localStorage.clear();
        this.$router.push({ name: "Login" });
      },
    },
  };
  </script>
  
  <style>
  .nav-link {
    color: white;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    padding: 10px 15px;
    border-radius: 8px;
  }
  
  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .router-link-active {
    background-color: white;
    color: #1e40af;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 8px;
  }
  </style>
