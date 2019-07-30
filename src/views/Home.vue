<template>
  <div class="d-flex justify-content-center">
    <div class="home">
      <!-- <div class="message">
          <p> {{ message }} </p>
      </div>-->
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" @change="checkForInput">
        <div class="message-box">
          <p v-if="check">The username and password not exist</p>
        </div>
        <div id="input-group-1" class="email">
          Username:
          <input id="input-1" v-model="form.email" placeholder="Enter Email" class="input-email" />
        </div>
        <div class="message-box">
          <p v-if="checkemail">The email is valid</p>
        </div>
        <div id="input-group-2" class="password">
          Password:
          <input id="input-2" type="password" v-model="form.password" placeholder="Enter password" class="input-password"/>
        </div>
        <div class="message-box">
          <p v-if="checkpassword">The password is valid</p>
        </div>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
import router from '@/router'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true,
      checkemail: false,
      checkpassword: false,
      check: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      if (!this.form.email) {
        this.checkemail = true
      } else {
        this.checkemail = false
      }
      if (!this.form.password) {
        this.checkpassword = true
      } else {
        this.checkpassword = false
      }

      if (
        this.form.email !== 'admin@fsoft.com.vn' ||
        this.form.password !== '12345678'
      ) {
        this.check = true
      } else {
        router.push('/player/list')
      }

      if (!this.form.email || !this.form.password) {
        this.check = false
      }
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      this.checkemail = false
      this.checkpassword = false
      this.check = false
    },

    checkForInput (evt) {
      let input = event.target
      if (input.value !== '') {
        input.classList.remove('input-no-value-style')
        input.classList.add('input-has-value-style')
      } else {
        input.classList.remove('input-has-value-style')
        input.classList.add('input-no-value-style')
      }
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

.message-box {
  height: 30px;
  color: red;
}

.input-email {
  border-color: blue;
}

.input-password {
  border-color: blue;
}

.input-has-value-style {
  border: 2px solid green;
  background-color:lightgreen;
}

.input-no-value-style {
  border: 2px solid red;
  background-color:pink;
}
</style>
