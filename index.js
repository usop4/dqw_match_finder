import * as mod from "./wasm.js";
(async () => {
    await mod.default();
    var app = new Vue({
      el: '#app',
      data: {
        monsters: null,
        combis: null,
        job: "戦士",
        cost: "350",
        param: "cost",
      },
      mounted: function(){
        axios.get("./monster.json").then(
            response => ( this.monsters = response.data )
        );
      },
      methods:{
        listCombis: function(){
          let s = mod.return_all_combis3(this.monsters,this.job,this.cost,this.param);
          return s.combis;
        }
      }
    })
})();