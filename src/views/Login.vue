<template>
  <div class="bg-primary">
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header">
                    <h3 class="text-center font-weight-light my-4">Login</h3>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="handleSubmit">
                      <div class="form-floating mb-3">
                        <input class="form-control" v-model="email" id="inputEmail" type="email" placeholder="name@example.com"/>
                        <label for="inputEmail">Email address</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input class="form-control" v-model="password" id="inputPassword" type="password" placeholder="Password"/>
                        <label for="inputPassword">Password</label>
                      </div>
                      <div class="form-check mb-3">
                        <input class="form-check-input" id="inputRememberPassword" type="checkbox" value=""/>
                        <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <router-link class="small" to="/password">
                          Forgot Password?
                        </router-link>
                        <button class="btn btn-primary">Login</button>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer text-center py-3">
                    <div class="small">
                      <router-link to="/register">
                        Need an account? Sign up!
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    async handleSubmit(){
      const data = {
        email: this.email,
        password: this.password
      };
      const response = await axios.post('login',data);
      localStorage.setItem('token',response.data.token)
      console.log(response)
    }
  }
};
</script>

<style scoped>

</style>