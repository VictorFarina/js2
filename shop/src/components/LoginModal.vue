<template>
  <form class="log-in" @submit.prevent="handleForm">

     

    <div class="input-group">
      <div class="col-5 card">
        <div class="form-outline">
          <input
            v-model="email"
            type="text"
            id="formControlLg"
            class="form-control form-control-lg !is-invalid !is-valid"
            placeholder="e-mail"
            autocomplete="off"
          />

          <label class="form-label" for="formControlLg"></label>

        </div>
        <div class="form-outline">

          <input
            v-model="password"
            type="password"
            id="formControlLg"
            class="form-control form-control-lg"
            placeholder="password"
            autocomplete="off"
          />


          <label class="form-label" for="formControlLg"></label>

        </div>
        <div class="form-outline">


    <button type="submit" class="btn btn-dark btn-block">LOGGA IN</button>

   
          <router-link class="nav-link active sign-up" to="/register">NOT A MEMBER?</router-link>
  



        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LoginModal",
      data() {
    return {

      email: "",
      password: ""

    }
  },
  computed: {
    ...mapGetters(['loggedIn']),
  },

  methods: {

    ...mapActions(['login']),

    handleForm() {
       const user = {
        email: this.email,
        password: this.password
       }
      let route = this.$route.query.redirect
      this.login(user,route);

    }


  }

}
</script>

<style scoped>

.sign-up {
  color: rgb(4, 0, 255);
}

.log-in {
  align-content: center;
  margin-top: 5rem;
  height: 100%;
}
.log-in input{

  margin-top: 2rem;
}

.card {
  margin: auto;
}
</style>