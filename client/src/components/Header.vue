<template>
  <div class="header">
    <div class="header-container">
      <div class="header-logo">
        <router-link to="/" class="header-logo-link">
          <img src="@/assets/logo.png" alt="logo" class="header-logo-img" />
        </router-link>
      </div>
      <div class="header-nav">
        <router-link to="/quizzs" class="header-nav-link"
          >Les quizz</router-link
        >
        <router-link to="/account" class="header-nav-link"
          >Mon compte</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
}

.header-container {
  display: flex;
  margin: auto;
  justify-content: space-between;
  max-width: 1500px;
  align-items: center;
}

.header-logo-link > img {
  height: 75px;
}

.header-nav-link {
  margin: 2rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--secondary-color);
}

.router-link-exact-active {
  color: var(--primary-color);
  font-weight: 600;
}
</style>
