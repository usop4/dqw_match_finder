import * as mod from "./wasm.js";
(async () => {
    await mod.default();
    var app = new Vue({
      el: '#app',
      data: {
        monsters: null,
        job: "戦士",
        cost: "300",
        message: "--",
        fields:[
          {key:"name",label:"組み合わせ",sortable:true},
          {key:"cost",label:"コスト",sortable:true},
          {key:"hp",label:"HP",sortable:true},
          {key:"mp",label:"MP",sortable:true},
          {key:"power",label:"ちから",sortable:true},
          {key:"defense",label:"みのまもり",sortable:true},
          {key:"attack",label:"こうげき魔力",sortable:true},
          {key:"recover",label:"かいふく魔力",sortable:true},
          {key:"speed",label:"すばやさ",sortable:true},
          {key:"skill",label:"きようさ",sortable:true},
        ]
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
        /*
        getMaxMonster: function(){
          console.log(this.monsters);
          let s = mod.return_max_monster(this.monsters);
          alert(s.name);
        },
        getDijkstra: function(){
          let s = mod.return_dijkstra(this.monsters);
          alert(s.name);
        },
        */
        listCombis: function(){
          let s = mod.return_all_combis2(this.monsters,this.job,this.cost);
          return s.combis;
        }
      }
    })
})();