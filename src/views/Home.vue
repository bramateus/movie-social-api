<template>
  <div class="home">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    

    <div class="container col-xl-6 col-lg-10 col-sm-10 col-md-10 col-mdd-10 col-12">
      <div class="cellphone-container">
        <div class="movie" @click.prevent="show">

          <div v-if="this.itens[index].foto_wide.includes('.jpg')" class="movie-img" 
           :style="{backgroundImage: 'url('+this.itens[index].foto_wide+')'}">
            <span style="right: 0; position: absolute; color: #fff; font-size: 12px; padding: 5px; opacity: 0.8">{{id_filme}}</span>
            <div style="left: 0; position: absolute; color: #fff; font-size: 12px; padding: 5px; opacity: 0.8;">
              <img style="width: 2rem;" :src="'https://www.gravatar.com/avatar/'+this.gravatar_hash+'.jpg'" alt="gravatar-autor">
            </div>
            <div class="text-movie-cont">
              <div class="mr-grid">
                <div class="item-bottom">
                  <div class="row">
                    <div class="col-lg-9" style="padding-bottom: 5px">

                      <h2 v-if="this.itens[index].nome" style="font-weight: bolder; color: #fff; font-size: 1.7rem; text-align: left;">{{this.itens[index].nome}}</h2>
                      <h2 v-else style="font-weight: bolder; color: #fff; font-size: 1.7rem; text-align: left;">Titulo não informado</h2>
                      <span v-if="this.itens[index].data_lancamento" style="color: #000; background-color: #fff; padding: 0px 0; padding: 2px 5px; border: 1.5px solid #fff; border-radius: 5px; margin-top:5px; margin-right: 15px; margin-bottom: 5px; display: inline-block;">{{invertDate(this.itens[index].data_lancamento)}}
                        <img v-if="this.trailerKey" style="width: 20px; vertical-align: sub;" src="https://brauliomateus.com/tira-de-filme.png" alt="icone-filmagens"></span>
                      <div style="display: inline" v-else>
                        <span v-if="this.trailerKey" style="color: #000; background-color: #fff; padding: 0px 0; padding: 2px 5px; border: 1.5px solid #fff; border-radius: 5px; margin-top:5px; margin-right: 15px; margin-bottom: 5px; display: inline-block;">
                        <img style="width: 20px; vertical-align: sub;" src="https://brauliomateus.com/tira-de-filme.png" alt="icone-filmagens">
                        </span>
                      </div>
                      <span style="color: #fff; padding: 0px 0; padding: 2px 5px; border: 1.5px solid #fff; border-radius: 5px; margin-right: 5px; display: inline-block" v-for="item in this.genero_filme" v-bind:key="item">{{item}}</span>
                      
                    </div>
                    <div class="col-lg-3" style="padding-top: 0px">
                      <div style="text-align: right; color: #fff">
                        <div class="stars">
                          {{avaliacao_porcentagem}}%
                          <i v-for="(values, i) in this.avaliacaoFilme(this.itens[index].avaliacao)" :key="i" class="fa fa-heart"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p style="color: #fff; font-size: 14px; padding: 5px 0; text-align: left; letter-spacing: 1px">{{this.itens[index].descricao.substring(0,140)+"..."}}<a @click.prevent="show" href="#">Ver Sinopse</a></p>
                </div>
              </div>
            </div>
          </div>

       

          <!-- Imagem Não Encontrada -->
          <div v-else class="movie-img" :style="{backgroundImage: 'url('+this.itens[index].foto+')'}">
            <span style="right: 0; position: absolute; color: #fff; font-size: 12px; padding: 5px; opacity: 0.8">{{id_filme}}</span>
            <div class="text-movie-cont">
              <div class="mr-grid">
                <div class="item-bottom">
                  <div class="row">
                    <div class="col-lg-9" style="padding-bottom: 5px">
                      <h2 v-if="this.itens[index].nome" style="font-weight: bolder; color: #fff; font-size: 1.7rem; text-align: left;">{{this.itens[index].nome}}</h2>
                      <h2 v-else style="font-weight: bolder; color: #fff; font-size: 1.7rem; text-align: left;">Titulo não informado</h2>
                      <span v-if="this.itens[index].data_lancamento" style="color: #000; background-color: #fff; padding: 0px 0; padding: 2px 5px; border: 1.5px solid #fff; border-radius: 5px; margin-top:5px; margin-right: 15px; margin-bottom: 5px; display: inline-block;">{{invertDate(this.itens[index].data_lancamento)}}
                        <img v-if="this.trailerKey" style="width: 20px; vertical-align: sub;" src="https://brauliomateus.com/tira-de-filme.png" alt="icone-filmagens"></span>
                      <div style="display: inline" v-else>
                        <span v-if="this.trailerKey" style="color: #000; background-color: #fff; padding: 0px 0; padding: 2px 5px; border: 1.5px solid #fff; border-radius: 5px; margin-top:5px; margin-right: 15px; margin-bottom: 5px; display: inline-block;">
                        <img style="width: 20px; vertical-align: sub;" src="https://brauliomateus.com/tira-de-filme.png" alt="icone-filmagens">
                        </span>
                      </div>
                      <span style="color: #fff; padding: 0px 0; padding: 2px 5px; border: 1.5px solid #fff; border-radius: 5px; margin-right: 5px; display: inline-block" v-for="item in this.genero_filme" v-bind:key="item">{{item}}</span> 
                    </div>
                    <div class="col-lg-3" style="padding-top: 0px">
                      <div style="text-align: right; color: #fff">
                        <div class="stars">
                          {{avaliacao_porcentagem}}%
                          <i v-for="(values, i) in this.avaliacaoFilme(this.itens[index].avaliacao)" :key="i" class="fa fa-heart"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p style="color: #fff; font-size: 14px">{{this.itens[index].descricao.substring(0,140)+"..."}}<a @click.prevent="show" href="#">Ver Sinopse</a></p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-12 flex-between">
              <a class="button-oval" href="" style="text-decoration: none;" @click.prevent="nao_curti_filme(index)">
                <img src="https://brauliomateus.com/curti2.png" alt="botão-descurtida" style="transform: rotate(180deg);">
              </a>
              <button class="button-oval" @click.prevent="pular_filme(index)">
                <a href="" style="text-decoration: none;">Pular</a>
              </button>
              <a class="button-oval" href="" style="text-decoration: none;" @click.prevent="curti_filme(index)">
                <img src="https://brauliomateus.com/curti2.png" alt="botão-curtir">
              </a>
          </div>
        </div>
      </div>

        <modal name="iframe" :adaptive="true" styles='background-color: #fff; border-radius: 10px;' @click.prevent="hide()">
          <iframe class="embed-responsive-item" :src="'https://www.youtube.com/embed/'+trailerKey" id="video" allowscriptaccess="always" height="100%" width="100%" allow="autoplay"></iframe>
        </modal>

        <!-- Modal -->
        <modal name="my-first-modal" :height="600" :adaptive="true" styles='background-color: #fff; border-radius: 10px;'>
          <span @click.prevent="hide()" style="position: absolute; border-radius: 0 0 0 50%; background-color: rgb(255, 255, 255);  right: 0; z-index: 999999999; padding: 10px 20px 10px 20px; top: -0px; font-weight: bold; cursor: pointer">X</span>

          <div v-if="trailerKey" style="height: 100px; background-color: #ff5655; margin: auto 0">
            <img :src=this.itens[index].foto alt="imagem-filme" style="width: 100px; margin-top: 25px; border-radius: 10px; cursor: pointer; position: absolute;" @click.prevent="show2()">
            <img style="width: 100px; margin-top: 50px; position: relative; cursor: pointer; left: 0.1rem; " src="https://brauliomateus.com/overlay.png" alt="imagem-player" @click.prevent="show2()">
          </div>
          <div v-else style="height: 100px; background-color: #ff5655; margin: auto 0">
            <img :src=this.itens[index].foto alt="imagem-filme" style="width: 100px; margin-top: 25px; border-radius: 10px; cursor: pointer;">
          </div>

          

          <div style="padding-top: 90px;">
            <h3 v-if="this.itens[index].nome" style="color: #000; text-transform: uppercase; font-weight: bold; font-size: 1.4rem; line-height: 1.4rem">{{this.itens[index].nome}}</h3>
            <h3 v-else style="color: #000; text-transform: uppercase; font-weight: bold; font-size: 1.4rem; line-height: 1.4rem">Titulo não informado</h3>
            <span style="color: #fff; padding: 0px 10px; margin: 5px; background-color: rgb(255,86,85); color: #fff; border-radius: 3px; line-height: 2.4rem; display: inline-block" v-for="item in this.genero_filme" v-bind:key="item">{{item}}</span>
            <div v-if="this.itens[index].data_lancamento" style="padding: 15px 0 0 0">
              <p  class="p-date">{{invertDate(this.itens[index].data_lancamento)}}</p>
            </div>
            <div v-else></div>
            <div class="stars" style="padding: 10px 0 5px 0">
              <i v-for="(values, i) in this.avaliacaoFilme(this.itens[index].avaliacao)" :key="i" class="fa fa-heart"></i>
            </div>
            <hr style="width: 90%">
            <p style="font-weight: bold; padding: 0 10% 10px 10%; text-align: left; height: 200px; margin-bottom: 5px; overflow-y: scroll; ">{{this.itens[index].descricao.substring(0,800)+""}}</p>
          </div>
        </modal>


    </div>
  </div>

</template>

<script>
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
      id_filme: 0,
      descricao_filme: "",
      avaliacao_filme: "",
      avaliacao_porcentagem: 0,
      foto_filme: [],
      genero_filme: [],
      data_lancamento: [],
      current_page: 1,
      filtrados: [],
      genero_descricao: "",
      qtd_generos: 99999,
      gravatar_hash: "",
      random: 0,
      corPrimaria: "",
      corSecundaria: "",
      trailerKey: "",
      language: ['pt-BR','en-US']
  

    }
  },
    methods: {
      avaliacaoFilme(ava) {
        if (ava) {
          let valor = (ava * 100) / 10;
          this.avaliacao_porcentagem = valor.toFixed();
          let resultado = (valor / 20);
          return parseInt(resultado.toFixed());
        } else {
          return ava = 0;
        }
      },
      // 81345 - sem capa
        // 13256 prn
        // 1613 bom pra gravar
      // fetchApi() {
        // 49354
      fetchApi(random) {
        fetch("https://api.themoviedb.org/4/list/"+random+"?page="+this.current_page+"&api_key=e474bd6e23bb7b2cbdea1ebaa1e6a50e&language=pt-BR")
        // fetch("https://api.themoviedb.org/4/list/1?page="+this.current_page+"&api_key=e474bd6e23bb7b2cbdea1ebaa1e6a50e&language=pt-BR")
        .then((t) => t.json())
        .then((t) => {
          this.genero_descricao = t.description; 
          this.id_filme = t.id; 
          this.gravatar_hash = t.created_by.gravatar_hash;

            if (!t.results.length) {
              this.fetchApi(this.consultaPagina(false));
            } 

            if (this.$store.state.filmes_nao_curados.length != 0) {  
              console.log("FIM LISTA");
            } 
            else {
              this.$store.commit("UPDATE_TOTAL_PAGES", {
                "total_pages" : t.total_pages,
              });

              this.filtrados = this.comparaIdStorage(t.results);
              this.filtrados.forEach((e) => {

                //Remove conteúdo adulto do array;
                if (e.adult) {
                  e.shift();
                }

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
          }).catch(err => 
            this.fetchApi(this.consultaPagina(false) || err)
          );
      },

      buscaTrailer() {
        // https://www.youtube.com/embed/ODmJXjcRzG0
        // console.log(this.itens);
        this.trailerKey = "";
        this.language.forEach(e => {
          console.log(e);
        
          fetch("https://api.themoviedb.org/3/movie/"+this.itens[0].id_filme+"/videos?api_key=e474bd6e23bb7b2cbdea1ebaa1e6a50e&language="+e+"")
          .then((r) => r.json())
          .then((r) => {
            if (r.results[0].key) {
              this.trailerKey = "";
              this.trailerKey = r.results[0].key;
            }
            console.log("Akn: ",this.itens[0].id_filme);
            console.log("Key: ",r);
          });

        });


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
        window.navigator.vibrate(50);
          this.$store.commit("UPDATE_LISTA_CURTIDAS", {
            "id_filme"   : this.itens[index].id_filme,
            "nome"       : this.itens[index].nome, 
            "descricao"  : this.itens[index].descricao,
            "avaliacao"  : this.itens[index].avaliacao, 
            "foto"       : this.itens[index].foto,
            "foto_wide"  : this.itens[index].foto_wide
          });

          if (localStorage['social-movie']) {
            var cart;
            cart = JSON.parse(localStorage['social-movie']);
            cart[0].curtidos.push({
              "id_filme"   : this.itens[index].id_filme,
              "nome"       : this.itens[index].nome, 
              "descricao"  : this.itens[index].descricao,
              "avaliacao"  : this.itens[index].avaliacao, 
              "foto"       : this.itens[index].foto,
              "foto_wide"  : this.itens[index].foto_wide,
              "generoFilme": this.genero_filme,
              "trailer_key": this.trailerKey,
              "data_lancamento": this.invertDate(this.itens[index].data_lancamento)
            });
            localStorage.setItem('social-movie', JSON.stringify(cart));
          }

          this.$store.state.filmes_nao_curados.shift();
          this.index = 0;

          if (this.$store.state.filmes_nao_curados.length == 0) {

            // Busca mais registro sem mudar a categoria"
            if (this.current_page < this.$store.state.total_pages) {
              console.log("Mudando sem Mudar Categoria - Atualizand page");
              this.current_page += 1;
              cart[0].current_page = this.current_page;
              localStorage.setItem('social-movie', JSON.stringify(cart));
              this.fetchApi(this.consultaPagina(true));
              } 
              // Store Genero ++
            else {
              cart[0].current_page = 1;
              cart[0].genero_page += 1;
              this.current_page = 1;
              cart[0].indice += 1;
              localStorage.setItem('social-movie', JSON.stringify(cart));
              setTimeout(() => {
                this.fetchApi(this.consultaPagina(false));
              }, 500);
            }
          } 
      },

      nao_curti_filme(index) {
        window.navigator.vibrate(50);
          this.$store.commit("UPDATE_LISTA_NAO_CURTIDOS", {
            "id_filme"   : this.itens[index].id_filme,
            "nome"       : this.itens[index].nome, 
            "descricao"  : this.itens[index].descricao,
            "avaliacao"  : this.itens[index].avaliacao, 
            "foto"       : this.itens[index].foto,
            "foto_wide"  : this.itens[index].foto_wide
          });
          // Salva no LocalStorage o Filme Não-Curtido.
          if (localStorage['social-movie']) {
            var cart;
            cart = JSON.parse(localStorage['social-movie']);
            cart[0].naoCurtidos.push({
              "id_filme"   : this.itens[index].id_filme,
              "nome"       : this.itens[index].nome, 
              "descricao"  : this.itens[index].descricao,
              "avaliacao"  : this.itens[index].avaliacao, 
              "foto"       : this.itens[index].foto,
              "foto_wide"  : this.itens[index].foto_wide,
              "generoFilme": this.genero_filme,
              "trailer_key": this.trailerKey,
              "data_lancamento": this.itens[index].data_lancamento
            });
            cart[0].current_page = this.current_page;
            localStorage.setItem('social-movie', JSON.stringify(cart));
          }

          this.$store.state.filmes_nao_curados.shift();
          this.index = 0;

          if (this.$store.state.filmes_nao_curados.length == 0) {

            // Busca mais registro sem mudar a categoria"
            if (this.current_page < this.$store.state.total_pages) {
              console.log("Mudando sem Mudar Categoria - Atualizand page");
              this.current_page += 1;
              cart[0].current_page = this.current_page;
              localStorage.setItem('social-movie', JSON.stringify(cart));
              this.fetchApi(this.consultaPagina(true));
              } 
              // Store Genero ++
            else {
              cart[0].current_page = 1;
              cart[0].genero_page += 1;
              this.current_page = 1;
              cart[0].indice += 1;
              localStorage.setItem('social-movie', JSON.stringify(cart));
              setTimeout(() => {
                this.fetchApi(this.consultaPagina(false));
              }, 500);
            }
          } 
      }, 

      pular_filme(index) {
        window.navigator.vibrate(25);
          // Salva no LocalStorage os Filmes que foram Pulados.
          if (localStorage['social-movie']) {
            var cart;
            cart = JSON.parse(localStorage['social-movie']);
            cart[0].pulados.push({
              "id_filme"   : this.itens[index].id_filme,
              "nome"       : this.itens[index].nome, 
              "descricao"  : this.itens[index].descricao,
              "avaliacao"  : this.itens[index].avaliacao, 
              "foto"       : this.itens[index].foto,
              "foto_wide"  : this.itens[index].foto_wide,
              "generoFilme": this.genero_filme,
              "data_lancamento": this.itens[index].data_lancamento
            });
            cart[0].current_page = this.current_page;
            localStorage.setItem('social-movie', JSON.stringify(cart));
          }
            this.$store.state.filmes_nao_curados.shift();
            this.index = 0;
            
          if (this.$store.state.filmes_nao_curados.length == 0) {

            // Busca mais registro sem mudar a categoria"
            if (this.current_page < this.$store.state.total_pages) {
              console.log("Mudando sem Mudar Categoria - Atualizand page");
              this.current_page += 1;
              cart[0].current_page = this.current_page;
              localStorage.setItem('social-movie', JSON.stringify(cart));
              this.fetchApi(this.consultaPagina(true));
              } 
              // Store Genero ++
            else {
              cart[0].current_page = 1;
              cart[0].genero_page += 1;
              this.current_page = 1;
              cart[0].indice += 1;
              localStorage.setItem('social-movie', JSON.stringify(cart));
              setTimeout(() => {
                this.fetchApi(this.consultaPagina(false));
              }, 500);
            }
          } 
      },

      consultaPagina(page) {
        if (page) {
          return this.random;
        } else {
        this.current_page = 1;
        this.random = Math.floor(Math.random() * this.qtd_generos)+1;
        return this.random;
        }
      },

      comparaIdStorage(filmes) {
        if (localStorage.getItem("social-movie")) {
          var localStorageData = localStorage.getItem("social-movie");
          const data = filmes; 

          var intersection = data.filter(function(x) {
           return !localStorageData.includes(x.id); 
          });

          if (intersection.length == 0) {
            return this.fetchApi(this.consultaPagina(false))
          } 
          return intersection;

        } else {
          return filmes;
        }
      },

      show () {
        this.$modal.show('my-first-modal');      
        
      },
      hide () {
        console.log("caiu no hide");
        this.$modal.hide('my-first-modal');
      },
      show2 () {
        this.hide();
        this.$modal.show('iframe');  
      },
      hide2 () {
        // Nunca cai aqui
        this.$modal.hide('iframe');
      },
      invertDate(date){
        if (date) {
          return date.split('-').reverse().join('/');
        }
      }
    }, // FIM METHODS:

   
  created() {
    console.log("Started Created");
    this.buscaCategoria();
    
    if(localStorage['social-movie']) {
      let current_page_lg = JSON.parse(localStorage.getItem("social-movie"))[0].current_page;
      this.current_page = current_page_lg;
    }

    if (localStorage) {
      var cart;
      if (!localStorage['social-movie']) cart = [{"curtidos": [], "naoCurtidos": [], "pulados": [], "current_page": 1, "indice": 1, "generosRandom": []}];
      else cart = JSON.parse(localStorage['social-movie']);            
      
      if (!(cart instanceof Array)) cart = [{"curtidos": [], "naoCurtidos": [], "pulados": [], "current_page": this.current_page, "indice" : 1, "generosRandom": []}];
      localStorage.setItem('social-movie', JSON.stringify(cart));                                
    } 
    this.fetchApi(this.consultaPagina(false));
    this.buscaTrailer();
  },
  computed: {

  },
  watch: {
    itens: function () {
      this.buscaTrailer();
        if (this.itens[0].foto_wide.substr(-4) === 'null') {
          document.body.style.backgroundImage = 'linear-gradient( to bottom, rgba(255,28,28,0.9), rgba(255,86,86,0.9) ), url("'+this.itens[0].foto+'")';
        } else {
          const getColors = require('get-image-colors')
          const options = {
            count: 2,
            type: 'image/jpg'
          }
          getColors((this.itens[0].foto_wide), options).then(colors => {
            this.corPrimaria   = colors.map(color => color.rgb())[0]
            this.corSecundaria = colors.map(color => color.rgb())[1]

            document.body.style.backgroundImage = 'linear-gradient(to bottom, rgba('+this.corPrimaria[0]+','+this.corPrimaria[1]+','+this.corPrimaria[2]+',0.96), rgba('+this.corSecundaria[0]+','+this.corSecundaria[1]+','+this.corSecundaria[2]+',0.90) ), url("'+this.itens[0].foto+'")';
            document.body.style.backgroundSize = 'auto';
            document.body.style.height = '100% + 100px';
          })
        } 
        this.buscaCategoria();
        
    },
  },
  mounted: function() {

  },

}
</script>


<style>
.vm--overlay {
  background: rgb(0,0,0,0.8);
}
.vm--modal {
  background: rgb(0,0,0,0.8);
}
.vm--container {
  background: rgb(0,0,0,0.95);
}

::-webkit-scrollbar {
    width: 7px;
}
::-webkit-scrollbar-track {
    background: gray;
    border: 5px solid transparent;
    background-clip: content-box;   /* THIS IS IMPORTANT */
}

::-webkit-scrollbar-thumb {
    background: rgb(255,86,85);
}

.flex-wrapper {
  display: flex;
  flex-flow: row nowrap;
}

.single-chart {
  width: 33%;
  justify-content: space-around ;
}

.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.circular-chart.orange .circle {
  stroke: #ff9f00;
}

.circular-chart.green .circle {
  stroke: #4CC790;
}

.circular-chart.blue .circle {
  stroke: #3c9ee5;
}

.percentage {
  fill: #666;
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
}


i {
  color: red;
  padding: 0 3px;
}


p {
  display: block;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 0;
}

h2 {
  line-height: 1em;
}

h3 {
  margin-bottom: 0
}

a {
  color: red;
}

.button-oval {
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: #fff;
  padding: 10px 10px;
  margin: 15px 0;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.button-oval a {
  padding: 0 20px;
  font-size: 25px;
  text-transform: uppercase;
  text-decoration: none;
  color: #3E4854;
  font-weight: 600;
}

.button-oval img {
  width: 70px;
  border-radius: 5px;
}

.p-date {
  width: fit-content;
  margin: 0px auto;
  border: 2px solid #FF5655;
  padding: 0px 15px;
  border-radius: 4px;
  color: #FF5655;
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
  width: 100%;
}


.cellphone-container {
  width: 100%;
  height: 480px;
  /* background-color: #1e1b26; */
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0px auto 0 auto;
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
  height: 480px;
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
  width: 100%;
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

h2 {
  font-size: 1.1rem;
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

.flex-between {
  display: flex;
  justify-content: space-between;
}
</style>










