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
        combis_size: 10,
        csv: null
      },
      mounted: function(){
        axios.get("./monster.json").then(
            response => ( this.monsters = response.data )
        );
        axios.get("./monster.csv").then(
          response => ( this.csv = response.data )
        );
    },
      methods:{
        /*
        listCombis: function(){
          let s = mod.return_all_combis2(
            this.monsters,
            {
              cost: parseInt(this.cost),
              job: this.job,
              param: this.param,
              remove: this.remove,
              combis_size: parseInt(this.combis_size)
            });
          this.combis = s.combis;
          return s.combis;
        },
        */
        listCombisCsv: function(){
          let s = mod.return_all_combis2_csv(
            this.csv,
            {
              cost: parseInt(this.cost),
              job: this.job,
              param: this.param,
              remove: this.remove,
              combis_size: parseInt(this.combis_size)
            });
          this.combis = s.combis;
          return s.combis;
        },
        csvtest: function(event){
          console.log(this.csv);
          mod.csv_test(this.csv);
        }
      }
    })
})();


