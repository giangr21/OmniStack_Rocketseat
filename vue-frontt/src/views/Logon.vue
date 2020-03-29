<template>
  <div class="logon-container">
    <section class="form">
      <img alt="Heroes" src="../assets/logo.svg" />
      <form @submit.prevent="handleLogin">
        <h1>Faca seu logon</h1>
        <input placeholder="Sua ID" v-model="id" />
        <button type="submit" class="button">Entrar</button>
        <router-link to="/register" class="back-link">
          <img alt="Heroes" src="../assets/log-in.svg" />
          Nao tenho cadastro
        </router-link>
      </form>
    </section>
    <img alt="Heroes" src="../assets/heroes.png" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      id: ''
    }
  },
  methods: {
    async handleLogin () {
      try {
        const response = await this.$axios.post('sessions', { id: this.id })
        localStorage.setItem('ongId', this.id)
        localStorage.setItem('ongName', response.data.name)
        this.$router.push('/profile')
      } catch (err) {
        alert('Falha ao fazer logon !')
      }
    }
  }
}
</script>

<style scoped>
.logon-container {
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logon-container section.form {
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
}

.logon-container section.form form {
  margin-top: 100px;
}

.logon-container section.form form h1 {
  font-size: 32px;
  margin-bottom: 32px;
}
</style>
