<template>
  <div style="background-color: #f3f3f3; min-height: 100vh;"> 
    <div class="container">
      <div class="row">
        <div class="col-lg-12" style="text-align: left; margin: 15px 0 15px 0">
        <h1>Filmes Curtidos</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row" v-if="data.length">
        <div class="col-lg-3" v-for="item in data" :key="item.id_filme">
          <div class="card">
            <img @click.prevent="show" v-bind:src="item.foto" alt="Avatar" style="width:100%">
            <div class="container">
              <h4 style='color:#000'>{{item.nome}}</h4>
              <!-- <a @click.prevent="show" href="#">Ver Sinopse</a> -->
              <!-- <p>Architect & Engineer</p> -->
            </div>
          </div>
        </div>
      </div> 
      <div v-else>
        <div class="row">
          <div class="col-lg-12">
            <div style="text-align: center;">
              <img style="padding: 50px 0 15px 0" src="../assets/video-camera-vazio.png" alt="imagem camera vazia">
              <h1>NENHUM FILME</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Curtidos",
  components: {
    // Home
  },
  data() {
    return {
      data: this.$store.state.filmes_curtidos,
    }
  },
  created() {
    document.body.style.backgroundImage = 'linear-gradient( to bottom, rgba(255,28,28,0.9), rgba(255,86,86,0.7) )';
  },
  methods: {

  }
}
</script>

<style scoped>
 h1 {
   color: #000;
   font-weight: bold;
 }

</style>