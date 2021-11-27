<template>
  <div class="wrapper-login">
    <!-- FORM LOGIN -->
    <div class="card">
      <div class="card-header">
        <h1>Connexion</h1>
        <p>Veuillez entrer vos identifiants</p>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="form-control">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <InputText
              v-model="username"
              :class="{ 'p-invalid': v$.username.$error }"
              placeholder="Nom d'utilisateur"
            />
          </div>
          <span v-if="v$.username.$error">
            <span v-for="(error, index) of v$.username.$errors" :key="index">
              <small class="p-error">{{ error.$message }}</small>
            </span>
          </span>
        </div>

        <div class="form-control">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-lock"></i>
            </span>
            <InputText
              v-model="password"
              type="password"
              :class="{ 'p-invalid': v$.username.$error }"
              placeholder="Mot de passe"
            />
          </div>
          <span v-if="v$.password.$error">
            <span v-for="(error, index) of v$.password.$errors" :key="index">
              <small class="p-error">{{ error.$message }}</small>
            </span>
          </span>
        </div>

        <Button
          label="Se connecter"
          type="submit"
          style="width: 100%; margin-top: 1rem"
          :loading="isLoading"
        />
      </form>
    </div>

    <!-- BACK BUTTON -->
    <div class="btn-wrapper">
      <p>Pas encore de compte ?</p>
      <Button
        label="Inscrivez-vous."
        type="submit"
        style="width: 100%; margin-top: 1rem"
        :loading="isLoading"
      />
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      isLoading: false,
      username: "",
      password: "",
    };
  },
  validations() {
    return {
      username: {
        required: helpers.withMessage(`L'identifiant est requis`, required),
        $autoDirty: true,
      },
      password: {
        required: helpers.withMessage("Le mot de passe est requis", required),
        $autoDirty: true,
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.wrapper-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f3f5fe;
  position: relative;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card {
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  margin-top: 2rem;
}

.form-control:not(:last-of-type) {
  margin-bottom: 1rem;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
}

.card-header > p {
  font-weight: 200;
  margin: 0.5rem 0;
}

.btn-wrapper {
  display: flex;
}
</style>
