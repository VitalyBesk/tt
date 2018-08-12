<template>
  <section class="form">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="title-secondary title-secondary--form">Contact Us</h2>
        </div>
        <div class="col-xs-12 col-sm-6">
          <form class="form__inner" @submit.prevent="submit" id="form">
            <div class="form__group">
              <input
              type="text"
              class="form__input"
              v-model="name"
              @input="$v.name.$touch()">
              <span
              class="form__label"
              :class="{'form__label--error': $v.name.$error }">Name</span>
              <span class="form__error" v-if="$v.name.$error">The  name field is required</span>
            </div>

            <div class="form__group">
              <input
              v-input-mask
              type="tel"
              class="form__input"
              v-model="phone"
              @input="$v.phone.$touch()">
              <span
              class="form__label"
              :class="{'form__label--error': $v.phone.$error }">Phone</span>
              <span class="form__error" v-if="$v.phone.$error">The  phone field is required</span>
            </div>

            <div class="form__group">
              <input type="email"
              class="form__input"
              v-model.lazy="email"
              @input="$v.email.$touch()">
              <span
              class="form__label"
              :class="{'form__label--error': $v.email.$error }">E-mail</span>
              <span class="form__error" v-if="$v.email.$error && $v.email.email">The  email field is required</span>
              <span class="form__error" v-if="!$v.email.email">The email field must be a valid email</span>
            </div>

            <div class="form__group form__group--checkbox">
              <label
              class="form__checkbox"
              :class="{'form__checkbox--error': $v.terms.$error }">
              <input
              type="checkbox"
              v-model="terms"
              @input="$v.terms.$touch()">
              <span class="form__checkmark"></span>
            </label>
            <a class="form__label-checkbox" href="" target="_blank">I agree the processing of personal data</a>
            <span class="form__error" v-if="$v.terms.$error">The terms field is required</span>
          </div>

          <div class="form__group">
            <button class="btn btn-primary" :disabled="isDisabled">Get in touch</button>
          </div>

        </form>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p class="form__descr">Please tell us more about your request and give us info about your company and country</p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios'
import { required, email, sameAs } from 'vuelidate/lib/validators'


export default {
  props: ['action'],
  data() {
    return {
      email: '',
      name: '',
      phone: '',
      terms: false,
      isDisabled: false
    }
  },

  validations: {
    email: {
      required,
      email
    },
    name: {
      required
    },
    phone: {
      required
    },
    terms: {
      sameAs: sameAs(() => true)
    }
  },

  computed: {
    createdData() {
      return {
        email: this.email,
        phone: this.phone,
        name: this.name,
        terms: this.terms
      }
    }
  },

  methods: {
    // REQUESTS
    create() {
      axios.post(this.action,  this.createdData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    },

    // FORM
    submit() {
      var isValid = !this.$v.email.$invalid  && !this.$v.name.$invalid  && !this.$v.phone.$invalid && !this.$v.terms.$invalid;

      this.$v.email.$touch();
      this.$v.name.$touch();
      this.$v.phone.$touch();
      this.$v.terms.$touch();
      this.$emit('on-validate', this.$data, isValid);

      if (isValid) {
        this.isDisabled = true;
        this.create();
        this.email = '';
        this.phone= '';
        this.name = '';
        this.terms = false;
        this.$v.$reset();
      }
      return isValid
    }
  }
}
</script>
