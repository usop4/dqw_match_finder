import * as mod from "./wasm.js";
(async () => {
    await mod.default();
    var app = new Vue({
      el: '#app',
      data: {
        monsters: null,
        combis: null,
        job: "戦士",
        cost: 350,
        param: "cost",
        remove: "",
        combis_size: 10
      },
      mounted: function(){
        axios.get("./monster.json").then(
            response => ( this.monsters = response.data )
        );
      },
      methods:{
        listCombis: function(){
          let s = mod.return_all_combis2(
            this.monsters,
            {
              cost: parseInt(this.cost),
              job: this.job,
              param: this.param,
              remove: this.remove,
              combis_size: parseInt(this.combis_size),
            });
          this.combis = s.combis;
          return s.combis;
        },
        test: function(i){
          console.log(i);
          //radar.drawRadar(this.combis[i]);          
        }
      }
    })
})();


