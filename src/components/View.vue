
<template>
    <div class="min-h-screen bg-gray-100">
      <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-center text-4xl font-extrabold text-gray-800 mb-8 hover:scale-105 transition-all duration-300 ease-in-out">
          {{ resturant.name }}
        </h1>
  
        <div class="relative mb-6">
          <img 
            src="../assets/rest1.jpg" 
            alt="Restaurant Image"
            class="w-full h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110"
          />
        </div>
  
        <div class="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Restaurant Details</h2>
          <ul class="space-y-4 text-gray-700">
            <li>
              <span class="font-semibold text-gray-900">Name:</span> {{ resturant.name }}
            </li>
            <li>
              <span class="font-semibold text-gray-900">Contact:</span> {{ resturant.contact }}
            </li>
            <li>
              <span class="font-semibold text-gray-900">Address:</span> {{ resturant.address }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "View",
    data() {
      return {
        resturant: {
          name: '',
          contact: '',
          address: ''
        }
      };
    },
    methods: {
      async loadData() {
        let user = localStorage.getItem("user-info");
        if (!user) {
          this.$router.push({ name: "SignUp" });
        } else {
          this.name = JSON.parse(user).name;
          let response = await axios.get(`http://localhost:3000/resturants/${this.$route.params.id}`);
          this.resturant = response.data;
        }
      }
    },
    mounted() {
      this.loadData();
    }
  };
  </script>
  
  <style scoped>
  li {
    font-size: 1.1rem;
  }
  
  li span {
    font-weight: 600;
  }
  
  h1:hover {
    color: #1e40af;
  }
  
  h2 {
    color: #1e3a8a;
  }
  
  ul {
    padding-left: 0;
  }
  
  ul li {
    padding: 8px 0;
  }
  
  img {
    transition: transform 0.3s ease-in-out;
  }
  </style>
  