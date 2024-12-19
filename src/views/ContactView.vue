<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <title-header titleHeader="Contact us" />
        <!-- <h1 class="title-big">Contact us</h1> -->
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="submit($event)" action="/" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    id="name-input"
                  />
                  <!-- <span v-for="error in v$.name.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span> -->
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="email-input"
                  />
                  <!-- <span v-for="error in v$.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span> -->
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="phone"
                    type="tel"
                    class="form-control"
                    id="phone-input"
                  />
                  <!-- <span v-for="error in v$.phone.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span> -->
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-start">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    v-model="message"
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                  ></textarea>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button class="btn btn-outline-dark send-btn">Send us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import TitleHeader from "@/components/TitleHeader.vue";

// import { useVuelidate } from "@vuelidate/core";
// import { required, email } from "@vuelidate/validators";

export default {
  components: { NavBarComponent, TitleHeader },
  // setup() {
  //   return { v$: useVuelidate() };
  // },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  // validations() {
  //   return {
  //     name: { required },
  //     email: { required, email },
  //     phone: { required },
  //     message: {},
  //   };
  // },
  methods: {
    submit() {
      // console.log(this.form);
    },
  },
};
</script>


