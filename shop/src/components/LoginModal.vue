<template>
  <form class="log-in" @submit.prevent="logIn">

    

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
            type="text"
            id="formControlLg"
            class="form-control form-control-lg"
            placeholder="password"
            autocomplete="off"

          />
          <label class="form-label" for="formControlLg"></label>
        </div>
        <div class="form-outline">


    <button type="submit" class="btn btn-primary btn-block">LOGIN</button>

   
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
    ...mapGetters(["loggedIn"]),
  },

  methods: {

    ...mapActions(["login"]),
    logIn() {
      let user = {
        email: this.email,
        password: this.password,
      }


     let route = this.$route.query.redirect;
      this.login({ user, route });

    },


  },
};
</script>

<style scoped>

.sign-up {
  color: rgb(4, 0, 255);
}

.log-in{
  height: 100%;
  background-color: rgba(255, 228, 196, 0.301);
}

.card {
  margin: auto;
}
</style>