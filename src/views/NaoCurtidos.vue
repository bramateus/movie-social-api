<template>
  <div style="background-color: #f3f3f3; min-height: 100vh;"> 

    
    <div class="container">
      <div class="row">
        <div class="col-lg-12" style="text-align: left; margin: 15px 0 15px 0">
        <h1>Filmes Não Curtidos</h1>
        </div>
      </div>
    </div>

    <div class="container" style="min-height: calc(100vh - 180px - 92px); cursor: pointer">
      <div class="row" v-if="itens">
        <div class="col-lg-3 col-sm-6 col-6" v-for="(item, index) in itens" :key="index">
          <div class="card" @click.prevent="show(index)">
            <img  v-bind:src="item.foto" alt="Avatar" style="width:100%;">
            <div class="container" style="padding: 15px 0 0 0">
              <h4 v-if="item.nome" @click.prevent="show(index)" style='color:#000'>{{item.nome}}</h4>
              <h4 v-else @click.prevent="show(index)" style='color:#000'>Titulo Não Informado</h4>
            </div>
          </div>
        </div>
      </div>  
    </div>

    <modal name="iframe" :adaptive="true" styles='background-color: #fff; border-radius: 10px;' @click.prevent="hide()">
      <iframe class="embed-responsive-item" :src="'https://www.youtube.com/embed/'+this.itens[this.index].trailer_key" id="video" allowscriptaccess="always" height="100%" width="100%" allow="autoplay"></iframe>
    </modal>

    <!-- Modal -->
      <modal name="modal-curtidos" :adaptive="true" :height="515" styles='background-color: #fff; border-radius: 10px;'>
        <span @click.prevent="hide()" style="position: absolute; border-radius: 0 0 0 50%; background-color: rgb(255, 255, 255);  right: 0; z-index: 999999999; padding: 10px 20px 10px 20px; top: -0px; font-weight: bold; cursor: pointer">X</span>
        <div v-if="this.itens[this.index].trailer_key" style="height: 100px; background-color: #ff5655; margin: auto 0">
          <img :src=this.itens[this.index].foto alt="imagem-filme" style="width: 100px; margin-top: 25px; border-radius: 10px; cursor: pointer; position: absolute;" @click.prevent="show2()">
          <img style="width: 100px; margin-top: 50px; position: relative; cursor: pointer; left: 0.1rem; " src="https://brauliomateus.com/overlay.png" alt="imagem-player" @click.prevent="show2()">
        </div>
        <div v-else style="height: 100px; background-color: #ff5655; margin: auto 0">
          <img :src=this.itens[this.index].foto alt="imagem-filme" style="width: 100px; margin-top: 25px; border-radius: 10px; cursor: pointer;">
        </div>
        <div style="padding-top: 90px">
          <h3 v-if="this.itens[this.index].nome" style="color: #000; text-transform: uppercase; font-weight: bold; font-size: 1.4rem; line-height: 1.4rem">{{this.itens[this.index].nome}}</h3>
          <h3 v-else style="color: #000; text-transform: uppercase; font-weight: bold; font-size: 1.4rem; line-height: 1.4rem">Titulo não informado</h3>
          <span style="color: #fff; padding: 0px 10px; margin: 5px; background-color: rgb(255,86,85); color: #fff; border-radius: 3px; line-height: 2.4rem; display: inline-block" v-for="(genero, i) in itens[index].generoFilme" :key="i">  {{genero}}</span>
          <div v-if="this.itens[index].data_lancamento" style="padding: 15px 0 0 0">
            <p  class="p-date">{{this.itens[index].data_lancamento}}</p>
          </div>
          <hr style="width: 90%">
          <p style="font-weight: bold; padding: 0 10% 10px 10%; text-align: left; height: 200px; margin-bottom: 5px; overflow-y: scroll;">{{this.itens[this.index].descricao.substring(0,800)+"..."}}</p>
        </div>
      </modal>

  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: "Curtidos",
  components: {
    // Home
  },
  data() {
    return {
      itens: [],
      data: this.$store.state.filmes_nao_curtidos,
      index: 0,
    }
  },
  created() {

   
      
    if (localStorage.getItem("social-movie")) {
      var localStorageDataCurtidos = localStorage.getItem("social-movie");
      this.itens = JSON.parse(localStorageDataCurtidos)[0].naoCurtidos.slice().reverse();
      // Se não existir filme curtidos, redireciona para a home.
    }
    if (this.itens.length == 0) {
      this.$notify({
      title: 'Nenhum filme encontrado.',
      type: 'warn',
      // text: 'Hello user! This is a notification!'
      });
     
      this.$router.push('/');
      
      // alert('Não existe filmes "NÃO CURTIDOS".');
    }
  },
  methods: {
    show(index) {
      this.index = index;
      this.$modal.show('modal-curtidos');
    },
    hide() {
      this.$modal.hide('modal-curtidos');
    },
    show2 () {
      this.hide();
      this.$modal.show('iframe');  
    },
    hide2 () {
      // Nunca cai aqui
      this.$modal.hide('iframe');
    },

  },

  watch: {

  }
}
</script>

<style scoped>
 h1 {
  color: #000;
  font-weight: bold;
  font-family: 'Bakbak One';
  font-style: normal;
  font-weight: 400;
 }

 h4 {
  font-weight: bold;
  font-family: 'Bakbak One';
  font-style: normal;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0;
  font-size: 20px;
 }

</style>