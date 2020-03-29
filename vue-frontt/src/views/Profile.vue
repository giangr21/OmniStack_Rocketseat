<template>
  <div class="profile-container">
    <header>
      <img class="img" alt="Heroes" src="../assets/logo.svg" />
      <span>Bem vindo (a), {{ongName}}</span>
      <router-link to="/incidents/new" class="button">Cadastrar Novo Caso</router-link>
      <button @click="handleLogout" type="button">
        <img alt="Heroes" src="../assets/power.svg" />
      </button>
    </header>
    <h1>Casos Cadastrados</h1>
    <ul>
      <li v-for="incident in incidents" :key="incident.id" class="li">
        <strong>Caso:</strong>
        <p>{{incident.title}}</p>

        <strong>Descricao:</strong>
        <p>{{incident.description}}</p>

        <strong>Valor:</strong>
        <p>
          <vue-intl-numberformat
            locale="pt-BR"
            formatStyle="currency"
            currency="BRL"
            :number="Number(incident.value)"
          ></vue-intl-numberformat>
        </p>

        <button @click="handleDeleteIncident(incident.id)" type="button">
          <img alt="Heroes" src="../assets/trash-2.svg" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import VueIntlNumberformat from 'vue-intl-numberformat'
export default {
  components: { VueIntlNumberformat },
  data () {
    return {
      ongName: localStorage.getItem('ongName'),
      incidents: [],
      ongId: localStorage.getItem('ongId')
    }
  },
  methods: {
    handleLogout () {
      localStorage.clear()
      this.$router.push('/')
    },
    async handleDeleteIncident (id) {
      try {
        await this.$axios.delete(`incidents/${id}`, {
          headers: {
            Authorization: this.ongId
          }
        })
        this.incidents = this.incidents.filter(incident => incident.id !== id)
      } catch {
        alert('Erro ao deletar caso')
      }
    }
  },
  // useEffect do react
  mounted () {
    this.$axios
      .get('profiles', {
        headers: {
          Authorization: this.ongId
        }
      })
      .then(response => {
        this.incidents = response.data
      })
  }
}
</script>

<style>
.profile-container {
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
}

.profile-container header {
  display: flex;
  align-items: center;
}

.profile-container header span {
  font-size: 20px;
  margin-left: 24px;
}

.profile-container header .img {
  height: 64px;
}

.profile-container header a {
  width: 260px;
  margin-left: auto;
  margin-top: 0;
}

.profile-container header button {
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;
}

.profile-container header button:hover {
  border-color: #999;
}

.profile-container h1 {
  margin-top: 80px;
  margin-bottom: 24px;
}

.profile-container ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
}

.li {
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
}

.li button {
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
}
.li button:hover {
  opacity: 0.8;
}

.li strong {
  display: block;
  margin-bottom: 16px;
  color: #41414d;
}

.li p + strong {
  margin-top: 32px;
}

.li p {
  color: #737380;
  line-height: 21px;
  font-size: 16px;
}
</style>
