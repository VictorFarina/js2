<template>
  <div>
    <!-- Default form register -->
    <form
      @submit.prevent="addUser"
      class="text-center register"
      action="#!"
    >
      <p class="h4 mb-4">Sign up</p>
      <div class="form-row mb-4">
        <div class="col">
          <!-- First name -->
          <input
            v-model="user.firstName"
            type="text"
            id="defaultRegisterFormFirstName"
            class="form-control"
            placeholder="First name"
          />
        </div>
        <div class="col">
          <!-- Last name -->
          <input
            v-model="user.lastName"
            type="text"
            id="defaultRegisterFormLastName"
            class="form-control"
            placeholder="Last name"
          />
        </div>
      </div>
      <!-- E-mail -->
      <input
        v-model="user.email"
        type="email"
        id="defaultRegisterFormEmail"
        class="form-control mb-4"
        placeholder="E-mail"
      />
      <!-- Password -->
      <input
        v-model="user.password"
        type="password"

       

        class="form-control"
        placeholder="Password"
       
      />
      <small
        id="defaultRegisterFormPasswordHelpBlock"
        class="form-text text-muted mb-4"
      >
        At least 8 characters and 1 digit
      </small>
      <small
        id="defaultRegisterFormPhoneHelpBlock"
        class="form-text text-muted mb-4"
      >
        Optional - for two step authentication
      </small>
      <!-- Sign up button -->
      <button class="btn btn-dark" type="submit">Bli medlem</button>

    </form>
    <!-- Default form register -->
  </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
export default {
  name:'Register',

  data() {

        return {
          user: {
          firstName:'',
          lastName:'',
          password:'',
          email:'',
        }
      }
  },
  computed: {
    ...mapGetters(['cart','loggedIn'])
  },
  methods: { 
    ...mapActions(['register']),

    addUser() {
      // return console.log(this.user);
      this.register(this.user)
      
    }
  }
}
</script>

<style scoped>

.register{
  width: 700px;
  margin: auto;
  box-shadow: 1px 1px 1px 1px rgba(51, 51, 51, 0.253);
  margin-top: 5rem;
}
.register button{
  width: 70%;
  margin: auto;
  margin-bottom: 5rem;
  background: rgb(2,0,36);
}

</style>


