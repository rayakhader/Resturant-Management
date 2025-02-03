<template>
  <div class="min-h-screen bg-gray-100">
    <Header />
    <div class="max-w-5xl mx-auto mt-8">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">
        🍽️ Restaurants List
      </h1>

      <div class="bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-blue-600 text-white">
              <th class="p-4 text-left">ID</th>
              <th class="p-4 text-left">Name</th>
              <th class="p-4 text-left">Contact</th>
              <th class="p-4 text-left">Address</th>
              <th class="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="item in paginatedRestaurants" 
              :key="item.id" 
              class="border-b hover:bg-gray-100 transition cursor-pointer"
              v-on:click="viewResturant(item.id)"
            >
              <td class="p-4">{{ item.id }}</td>
              <td class="p-4 font-semibold text-gray-800">{{ item.name }}</td>
              <td class="p-4">{{ item.contact }}</td>
              <td class="p-4">{{ item.address }}</td>
              <td class="p-4 text-center">
                <router-link 
                  :to="'/update/' + item.id" 
                  @click.native.stop
                  class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  ✏️ Update
                </router-link>
                <button 
                  @click.stop="deleteResturant(item.id)"
                  class="ml-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between items-center mt-4">
          <button 
            @click="prevPage"
            :disabled="currentPage===1" 
            class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
          >
            ⬅️ Prev
          </button>

          <span class="text-gray-700">Page {{ currentPage }} of {{ totalPages }}</span>

          <button 
            @click="nextPage" 
            :disabled="currentPage === totalPages"
            class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
          >
            Next ➡️
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "HomePage",
  components: { Header },
  data() {
    return {
      name: "",
      resturants: [],
      currentPage :1,
      itemsPerPage : 6
    };
  },
  computed:{
    totalPages(){
     return Math.ceil(this.resturants.length / this.itemsPerPage);
    },
    paginatedRestaurants(){
      let start = (this.currentPage-1) * this.itemsPerPage;
      return this.resturants.slice(start , start+this.itemsPerPage)
    }
  },
  methods: {
    async deleteResturant(id) {
      let response = await axios.delete(
        `http://localhost:3000/resturants/${id}`
      );
      if (response.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: "SignUp" });
      } else {
        this.name = JSON.parse(user).name;
        let response = await axios.get(`http://localhost:3000/resturants`);
        this.resturants = response.data;
      }
    },
    nextPage(){
      if(this.currentPage < this.totalPages)
      this.currentPage++;
    },
    prevPage(){
      if(this.currentPage > 1)
      this.currentPage--;
    },
    viewResturant(id){
      this.$router.push({name:'View',params: {id}})
    }
  },
  async mounted() {
    this.loadData();
  },
};
</script>

