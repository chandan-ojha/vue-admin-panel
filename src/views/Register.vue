<template>
  <div class="bg-primary">
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header">
                    <h3 class="text-center font-weight-light my-4">
                      Create Account
                    </h3>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="handleSubmit">
                      <message v-if="message.value" :message="message" />
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <div class="form-floating mb-3 mb-md-0">
                            <input
                              class="form-control"
                              v-model="name"
                              id="inputFirstName"
                              type="text"
                              placeholder="Enter your name"
                            />
                            <label for="inputFirstName">Name</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating">
                            <input
                              class="form-control"
                              v-model="email"
                              id="inputEmail"
                              type="email"
                              placeholder="name@example.com"
                            />
                            <label for="inputEmail">Email address</label>
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <div class="form-floating mb-3 mb-md-0">
                            <input
                              class="form-control"
                              v-model="password"
                              id="inputPassword"
                              type="password"
                              placeholder="Create a password"
                            />
                            <label for="inputPassword">Password</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating mb-3 mb-md-0">
                            <input
                              class="form-control"
                              v-model="password_confirm"
                              id="inputPasswordConfirm"
                              type="password"
                              placeholder="Confirm password"
                            />
                            <label for="inputPasswordConfirm">
                              Confirm Password
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="mt-4 mb-0">
                        <div class="d-grid">
                          <!--<a class="btn btn-primary btn-block">Create Account</a>-->
                          <button class="btn btn-primary btn-block">
                            Create Account
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer text-center py-3">
                    <div class="small">
                      <router-link to="/login">
                        Have an account? Go to login
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
import axios from "@/axios";
import Message from "./Message.vue";

export default {
  name: "Register",
  components: { Message },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      message: {
        value: "",
        type: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const data = {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm,
        };
        const response = await axios.post("register", data);

        if (response.data.status_code === 200) {
          this.message = {
            value: response.data.message,
            type: "success",
          };
          setTimeout(() => {
            this.$router.push("/login");
          }, 1000);
        } else {
          this.message = {
            value: response.data.message,
            type: "danger",
          };
        }
      } catch (e) {
        this.error = "Bad Request !";
      }
    },
  },
};
</script>

<style scoped></style>
