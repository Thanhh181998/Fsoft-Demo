<template>
  <div class="d-flex justify-content-center">
   <div class="home">

   <!-- <div class="message">
     <p v-if="loginSuccess"> Login successfull </p>
     <p v-else> The username and password is not exist </p>
   </div> -->


    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password: " label-for="input-2">
        <b-form-input 
          type="password"
          id="input-2"
          v-model="form.password"
          required
          placeholder="Enter you password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
          loginSuccess: false
        },
        show: true
      }
    },
    methods: {
      onSubmit: function(evt) {
        evt.preventDefault()
        if (this.form.email !== 'admin@fsoft.com.vn' || this.form.password !== '12345678') {
          alert("The user or password not exist!");
        } else {
          alert("Login successfull!");
          
        }
      },
      onReset: function(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
      }
    }
  }
</script>

<style>

.home {
  border: solid 1px black;
  border-radius: 10px;
  width: 30%;
  padding: 5px;
  padding-top: 10px;
}

</style>
