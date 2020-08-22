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
        message: "--",
        combi_num: 0
      },
      mounted: function(){
        axios.get("./monster.json").then(
            response => ( this.monsters = response.data )
        );
      },
      computed: {
        rust_function_test: function(){
          return mod.function_test();
        }
      },
      methods:{
        testAlert: function(){
          alert("test");
        },
        listCombis: function(){
          let s = mod.return_all_combis3(this.monsters,this.job,this.cost,this.param);
          this.combi_num = s.num;
          return s.combis;
        }
      }
    })
})();