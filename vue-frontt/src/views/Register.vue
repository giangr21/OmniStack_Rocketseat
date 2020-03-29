<template>
  <div class="register-container">
    <div class="content">
      <section>
        <img alt="Heroes" src="../assets/logo.svg" />
        <h1>Cadastro</h1>
        <p>Faca seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
        <router-link to="/" class="back-link">
          <img alt="Heroes" src="../assets/arrow-left.svg" />
          Voltar
        </router-link>
      </section>
      <form @submit.prevent="handleRegister">
        <input v-model="name" placeholder="Nome da ONG" />
        <input v-model="email" placeholder="Email" />
        <input v-model="whatsapp" placeholder="WhatsApp" />
        <div class="input-group">
          <input v-model="city" placeholder="Cidade" />
          <input v-model="uf" style="width: 80px" placeholder="UF" />
        </div>
        <button class="button" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      whatsapp: '',
      city: '',
      uf: ''
    }
  },
  methods: {
    async handleRegister () {
      const data = {
        name: this.name,
        email: this.email,
        whatsapp: this.whatsapp,
        city: this.city,
        uf: this.uf
      }
      try {
        const response = await this.$axios.post('ongs', data)
        alert(`Seu ID de acesso ${response.data.id}`)
        this.$router.push('/')
      } catch (err) {
        console.log(err)
        alert('Erro no cadastro tente novamente !')
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.register-container .content {
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.register-container .content section {
  width: 100%;
  max-width: 380px;
}

.register-container .content section h1 {
  margin: 64px 0 32px;
  font-size: 32px;
}

.register-container .content section p {
  font-size: 18px;
  color: #737380;
  line-height: 32px;
}

.register-container .content form {
  width: 100%;
  max-width: 450px;
}

.register-container .content form input {
  margin-top: 8px;
}

.register-container .content form .input-group {
  display: flex;
}

.register-container .content form .input-group input + input {
  margin-left: 8px;
}
</style>
