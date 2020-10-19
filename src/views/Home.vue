<template>

  <div class="home">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   

    <div class="container">
      <div class="cellphone-container">
        <div class="movie" @click.prevent="show">
          <div class="movie-img" v-bind:style="{ backgroundImage: 'url('+this.itens[index].foto_wide+')'}">
         
          <div class="text-movie-cont">
            <div class="mr-grid">
              <div class="item-bottom">
                <div class="row">
                  <div class="col-lg-9">
                    <h2 style="font-weight: bolder; color: #fff">{{this.itens[index].nome}}</h2>
                    <span style="color: #fff; padding: 0px 0" v-for="item in this.genero_filme" v-bind:key="item">  {{item}} | </span> 
                    <span style="color: #fff; padding: 0px 0">{{this.itens[index].data_lancamento}}</span>
                  </div>
                  <div class="col-lg-3" style="padding-top: 15px">
                    <div style="text-align: right; color: #fff">
                      <div class="stars">
                        {{this.itens[index].avaliacao}}
                        <i style="color: red; padding: 0 3px" class="fa fa-heart"></i>
                        <i style="color: red; padding: 0 3px" class="fa fa-heart"></i>
                        <i style="color: red; padding: 0 3px" class="fa fa-heart"></i>
                        <i style="color: red; padding: 0 3px" class="fa fa-heart"></i>
                        <i style="color: white; padding: 0 3px" class="fa fa-heart"></i>
                      </div><!--stars end-->
                      <!-- <p>(120 Avaliações)</p> -->
                    </div>
                  </div>
                </div>
                <!-- <h2>{{ this.$store.state.page}}</h2> -->
                <!-- {{ username.substring(0,8)+".." }} -->
                <p style="color: #fff; font-size: 14px">{{this.itens[index].descricao.substring(0,180)+"..."}}<a @click.prevent="show" href="#">Ver Sinopse</a></p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>


      <div class="container">
        <div class="row">
        <div class="col-lg-12">
          <button class="button-oval" @click.prevent="nao_curti_filme(index)">
            <a href="" style="text-decoration: none">
              <img src="../assets/n-curti.png" alt="">
              <!-- <span>Não Curti</span> -->
            </a>
          </button>
          <button class="button-oval" @click.prevent="pular_filme(index)"><a href="" style="text-decoration: none">Pular</a></button>
          <button class="button-oval" @click.prevent="curti_filme(index)">
            <a href="" style="text-decoration: none">
              <img src="../assets/curti.png" alt="">
              <!-- <span>Curti</span> -->
            </a>
          </button>
        </div>
        </div>
      </div>

       <modal name="my-first-modal" draggable=".window-header" :height="550"  :width="auto" :adaptive="true" styles='background-color: #fff; border-radius: 10px;'>
         <div style="height: 18%; background-color: #ff5655; margin: auto 0">
           <img :src=this.itens[index].foto alt="" style="width: 15%; margin-top: 5%; border-radius: 10px; ">
         </div>
         <div style="padding-top: 12%">
           <h3 style="color: #000; text-transform: uppercase; font-weight: bold">{{this.itens[index].nome}}</h3>
           <span style="color: #000; padding: 0px 0" v-for="item in this.genero_filme" v-bind:key="item">  {{item}} | </span> 
           <span>{{this.itens[index].data_lancamento}}</span>
           <div class="stars" style="padding: 5px 0">
              <i style="color: red; padding: 0 3px" class="fa fa-heart"></i>
              <i style="color: red; padding: 0 3px" class="fa fa-heart"></i>
              <i style="color: red; padding: 0 3px" class="fa fa-heart"></i>
              <i style="color: red; padding: 0 3px" class="fa fa-heart"></i>
              <i style="color: gray; padding: 0 3px" class="fa fa-heart"></i>
            </div>
            <!-- <span>(120 Avaliações)</span> -->
            <hr style="width: 60%">
            <p style="font-weight: bold; padding: 0 10%; text-align: justify; ">{{this.itens[index].descricao.substring(0,300)+"..."}}</p>
         </div>
        <!-- This is my first modal -->
      </modal>
        <!-- {{this.index}} -->
        <!-- {{this.itens[0]}} -->
        <!-- {{base}} -->
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      base: "https://image.tmdb.org/t/p/w500",
      itens: this.$store.state.filmes_nao_curados,
      index: 0,
      nome_filme: [],
      descricao_filme: "",
      avaliacao_filme: "",
      foto_filme: [],
      genero_filme: [],
      data_lancamento: []
      
    }
  },
  methods: {
    fetchApi() {
        fetch("https://api.themoviedb.org/4/list/"+this.$store.state.page+"?api_key=e474bd6e23bb7b2cbdea1ebaa1e6a50e&language=pt-BR")
        .then((t) => t.json())
        .then((t) => {
            if (this.$store.state.filmes_nao_curados.length != 0) {  
              // console.log('STORE FILME NAO CURADOS JA EXISTE DADOS');
            } 
            else {
              
              t.results.forEach(e => {
                console.log('POPULADO A LISTA INICIAL');
                this.$store.commit("UPDATE_LISTA_NAO_CURADOS", {
                  "id_filme"       : e.id,
                  "nome"           : e.title, 
                  "descricao"      : e.overview,
                  "avaliacao"      : e.vote_average, 
                  "foto"           : 'https://image.tmdb.org/t/p/w500'+e.poster_path,
                  "foto_wide"      : 'https://image.tmdb.org/t/p/w500'+e.backdrop_path,
                  "generos"        : e.genre_ids,
                  "data_lancamento": e.release_date
                });
              });

              
            }
            // console.log(this.itens);
            // console.log('Tamanho do Array: '+this.itens.length);

          }).catch(err => console.log('err:' + err));
      },

      buscaCategoria() {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e474bd6e23bb7b2cbdea1ebaa1e6a50e&language=pt-BR")
        .then((t) => t.json())
        .then((t) => {
          this.genero_filme = [];
          for(var j=0; j<this.itens[0].generos.length ; j++){
            for(var i=0; i<t.genres.length; i++) {
              if(t.genres[i].id == this.itens[0].generos[j]) {
                  this.genero_filme.push(t.genres[i].name);
              }
            }
          }
        }).catch(err => console.log('err:' + err));
      },

      curti_filme(index) {
          this.$store.commit("UPDATE_LISTA_CURTIDAS", {
            "id_filme"   : this.itens[index].id_filme,
            "nome"       : this.itens[index].nome, 
            "descricao"  : this.itens[index].descricao,
            "avaliacao"  : this.itens[index].avaliacao, 
            "foto"       : this.itens[index].foto,
            "foto_wide"  : this.itens[index].foto_wide
          });
          this.$store.state.filmes_nao_curados.shift();
          this.index = 0;

          if (this.$store.state.filmes_nao_curados.length == 0) {
            this.$store.state.page++;
            this.fetchApi();
          }
        
      },

      nao_curti_filme(index) {
          this.$store.commit("UPDATE_LISTA_NAO_CURTIDOS", {
            "id_filme"   : this.itens[index].id_filme,
            "nome"       : this.itens[index].nome, 
            "descricao"  : this.itens[index].descricao,
            "avaliacao"  : this.itens[index].avaliacao, 
            "foto"       : this.itens[index].foto,
            "foto_wide"  : this.itens[index].foto_wide
          });
          this.$store.state.filmes_nao_curados.shift();
          this.index = 0;

          if (this.$store.state.filmes_nao_curados.length == 0) {
            this.$store.state.page++;
            this.fetchApi();
          }
          // this.itens.shift();
          // console.log(this.itens);
          
      },

      pular_filme() {
          this.$store.state.filmes_nao_curados.shift();
          this.index = 0;
          if (this.$store.state.filmes_nao_curados.length == 0) {
            this.$store.state.page++;
            this.fetchApi();
          }
      },

      show () {
          this.$modal.show('my-first-modal');
            

      },
      hide () {
          this.$modal.hide('my-first-modal');
      }

      
   },
   created() {
     console.log("Started Created ");
     if (this.$store.state.filmes_nao_curados.length == 0) {
      //  console.log("ACABOU A LISTA 1");
     }
     this.fetchApi();
     
     setTimeout(() => {
       document.body.style.backgroundImage = 'linear-gradient( to bottom, rgba(255,28,28,0.9), rgba(255,86,86,0.9) ), url("'+this.itens[0].foto+'")';
     }, 200);
     
  },

  // beforeCreate() {
  //   console.log("Caiu no beforeCreate");
  // },
  computed: {

  },
  watch: {
    itens: function () {
        document.body.style.backgroundImage = 'linear-gradient( to bottom, rgba(255,28,28,0.9), rgba(255,86,86,0.9) ), url("'+this.itens[0].foto+'")';
        document.body.style.backgroundSize = 'auto';
        this.buscaCategoria();
    },

  },
  mounted: function() {
    document.body.style.backgroundImage = 'linear-gradient( to bottom, rgba(255,28,28,0.9), rgba(255,86,86,0.9) ), url("'+this.itens[0].foto+'")';
    
    },

}
</script>

<style>

p {
  display: block;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

h2 {
  line-height: 1em;
}

a {
  color: red;
}

.button-oval {
  padding: 18px;
  border: 1px solid transparent;
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  margin: 20px;
  cursor: pointer
}

.button-oval a {
  padding: 0 20px;
  font-size: 22px;
  text-transform: uppercase;
  text-decoration: none;
  color: #3E4854;
  font-weight: 600;
}

.container {
  width: 100%;
  height: 50%;
}
.item-bottom {
  position: absolute;
  bottom: 0;
  padding: 15px 15px 0 15px;
  background-color: #111;
  opacity: 0.9;
}


.cellphone-container {
  width: 700px;
  height: 460px;
  /* background-color: #1e1b26; */
  background-color: rgba(0, 0, 0, 0.5);
  margin: 30px auto 0 auto;
  box-shadow: 5px 5px 115px -14px black;
  border-radius: 4px;
}
.menu {
  position: absolute;
  right: 12px;
  top: 6px;
  z-index: 999;
}
.menu i {
  font-size: 40px;
  color: #fe4141;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5));
}
.movie-img {
  width: 100%;
  height: 460px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 111 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  /* -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.35, rgba(0, 0, 0, 1)),
    color-stop(0.5, rgba(0, 0, 0, 1)),
    color-stop(0.55, rgba(0, 0, 0, 1)),
    color-stop(0.95, rgba(0, 0, 0, 0.6)),
    color-stop(1, rgba(0, 0, 0, 0)) 
  );  */


/* rgba(236, 236, 236, 1) */
  /* background-image: linear-gradient(red, yellow); */
   /* filter: grayscale(10%); */

  position: relative;
}
.movie {
  /* IE6-9 */
  /* position: absolute; */
  background-size: contain;
  background-size: cover;
  z-index: 1 !important;
  width: 700px;
  cursor: pointer;
  /* height: 660px; */
  display: block;
  border-radius: 4px;
}
.text-movie-cont {
  text-align: justify;
}
.action-btn {
  text-align: right;
}
.action-btn i {
  color: #fe4141;
  font-size: 28px;
  text-align: right;
}
.watch-btn {
  display: block;
  border: 1px solid #fe4141;
  border-radius: 5px;
  padding: 4px;
  width: 140px;
}
.watch-btn h3 i {
  font-size: 14px;
  margin-right: 2px;
  position: relative;
  float: left;
  line-height: 1;
}
.action-row {
  margin-top: 24px;
}
.summary-row {
  margin-top: 12px;
}
/* TYPOGRAPHY STARTS */
/* Fonts */
h1,
h2,
h3,
h4,
h5 {
  font-family: "Montserrat", sans-serif;
  color: #e7e7e7;
  margin: 0px;
}
h1 {
  font-size: 36px;
  font-weight: 400;
}

h3 {
  font-size: 14px;
  font-weight: 400;
  color: #fe4141;
}
h5 {
  font-size: 12px;
  font-weight: 400;
}
.movie-gen,
.movie-likes {
  margin: 0px;
  padding: 0px;
}
.movie-gen li,
.movie-likes li {
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  color: #818181;
  width: auto;
  display: block;
  float: left;
  margin-right: 6px;
  font-weight: 600;
}
.movie-likes {
  float: right;
}
.movie-likes li {
  color: #fe4141;
}
.movie-likes li:last-child {
  margin-right: 0px;
}
.movie-likes li i {
  font-size: 14px;
  margin-right: 4px;
  position: relative;
  float: left;
  line-height: 1;
}
.movie-details {
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #b4b4b4;
}
.movie-description {
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #9b9b9b;
  text-align: justify;
  line-height: 1.3;
}
.movie-actors {
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #e7e7e7;
  font-style: italic;
}
/* TYPOGRAPHY ENDS */
/** GRID STARTS **/
.thegrid {
  margin: 0 auto;
}
.elements-distance,
.movie-details,
.movie-description,
.movie-actors {
  margin: 0px;
}
.mr-grid {
  width: 100%;
}
.mr-grid:before,
.mr-grid:after {
  content: "";
  display: table;
}
.mr-grid:after {
  clear: both;
}
.mr-grid {
  *zoom: 1;
}
.col1,
.col2,
.col3,
.col3rest,
.col4,
.col4rest,
.col5,
.col5rest,
.col6,
.col6rest {
  margin: 0% 0.5% 0.5% 0.5%;
  padding: 1%;
  float: left;
  display: block;
}
/* Columns match, minus margin sum. E.G. margin-left+margin-right=1%, col2=50%-1% - added padding:1%*/
.col1 {
  width: 98%;
}
.col2 {
  width: 47%;
}
.col3 {
  width: 30.3333333333%;
}
.col4 {
  width: 22%;
}
.col5 {
  width: 17%;
}
.col6 {
  width: 13.6666666667%;
}
/* Columns match with their individual number. E.G. col3+col3rest=full width row */
.col3rest {
  width: 63.6666666667%;
}
.col4rest {
  width: 72%;
}
.col5rest {
  width: 77%;
}
.col6rest {
  width: 80.3333333333%;
}
.dribbble-link {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 15px;
  right: 15px;
  border-radius: 50px;
}
</style>










