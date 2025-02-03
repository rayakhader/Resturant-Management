 <template>
    <div class="min-h-screen bg-gray-100">
      <Header />
      <div class="max-w-lg mx-auto mt-10">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">➕ Add New Restaurant</h1>
  
        <div class="bg-white shadow-lg rounded-lg p-6">
          <form @submit.prevent="addResturant" class="flex flex-col space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Enter Name" 
              v-model="resturant.name" 
              class="input-field"
            />
  
            <input 
              type="text" 
              name="address" 
              placeholder="Enter Address" 
              v-model="resturant.address" 
              class="input-field"
            />
  
            <input 
              type="text" 
              name="contact" 
              placeholder="Enter Contact" 
              v-model="resturant.contact" 
              class="input-field"
            />
  
            <button 
              type="submit" 
              class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
               Add New Restaurant
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Header from './Header.vue';
  
  export default {
    name: "Add",
    components: { Header },
    data() {
      return {
        resturant: {
          name: "",
          contact: "",
          address: "",
        },
      };
    },
    methods: {
      async addResturant() {
        let response = await axios.post("http://localhost:3000/resturants", {
          name: this.resturant.name,
          contact: this.resturant.contact,
          address: this.resturant.address,
        });
        if (response.status == 201) {
          this.$router.push({ name: "HomePage" });
        }
      },
    },
    mounted() {
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
    },
  };
  </script>
  
  <style>
  .input-field {
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 8px;
    width: 100%;
    font-size: 16px;
    transition: all 0.3s ease;
  }
  
  .input-field:focus {
    border-color: #1e40af;
    outline: none;
    box-shadow: 0 0 8px rgba(30, 64, 175, 0.3);
  }
  </style>
  