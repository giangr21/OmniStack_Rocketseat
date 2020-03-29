<template>
  <div class="new-incident">
    <div class="content">
      <section>
        <img alt="Heroes" src="../assets/logo.svg" />
        <h1>Cadastrar novo caso</h1>
        <p>Descreva o caso detalhadamente para encontar um heroi para resolver isso</p>
        <router-link to="/profile" class="back-link">
          <img alt="Heroes" src="../assets/arrow-left.svg" />
          Voltar para Home
        </router-link>
      </section>
      <form @submit.prevent="handleNewIncident">
        <input placeholder="Titulo do caso" v-model="title" />
        <textarea placeholder="Descricao" v-model="description" />
        <input placeholder="Valor em reais" v-model="value" />
        <button class="button" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      value: '',
      ongId: localStorage.getItem('ongId')
    }
  },
  methods: {
    async handleNewIncident () {
      const data = {
        title: this.title,
        description: this.description,
        value: this.value
      }

      try {
        await this.$axios.post('incidents', data, {
          headers: {
            Authorization: this.ongId
          }
        })
        alert('Ong registrada com sucesso!!')
        this.$router.push('/profile')
      } catch (err) {
        console.log(err)
        alert('Erro no cadastro tente novamente !')
      }
    }
  }
}
</script>

<style>
.new-incident {
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.new-incident .content {
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.new-incident .content section {
  width: 100%;
  max-width: 380px;
}

.new-incident .content section h1 {
  margin: 64px 0 32px;
  font-size: 32px;
}

.new-incident .content section p {
  font-size: 18px;
  color: #737380;
  line-height: 32px;
}

.new-incident .content form {
  width: 100%;
  max-width: 450px;
}

.new-incident .content form input,
.new-incident .content form textarea {
  margin-top: 8px;
}
</style>
