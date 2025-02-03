 <template>
    <div class="min-h-screen bg-gray-100">
      <Header />
      <div class="max-w-lg mx-auto mt-12 bg-white p-8 shadow-lg rounded-lg">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">
          ✏️ Update Restaurant
        </h1>
  
        <form class="flex flex-col space-y-4">
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
            type="button"
            v-on:click="updateResturant"
            class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Update Restaurant
          </button>
  
          <router-link
            to="/"
            class="text-center text-gray-600 hover:underline"
          >
          Cancel and Go Back
          </router-link>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Header from "./Header.vue";
  
  export default {
    name: "Update",
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
    async mounted() {
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let id = this.$route.params.id;
      let response = await axios.get(`http://localhost:3000/resturants/${id}`);
      this.resturant = response.data;
    },
    methods: {
      async updateResturant() {
        let response = await axios.put(
          `http://localhost:3000/resturants/${this.$route.params.id}`,
          {
            name: this.resturant.name,
            contact: this.resturant.contact,
            address: this.resturant.address,
          }
        );
        if (response.status == 200) {
          this.$router.push({ name: "HomePage" });
        }
      },
    },
  };
  </script>
  <style>
</style>
  