
const Mant ={
    data(){
        return {
          year:"2017",
          mantList:[],
          actions: {
            numberList: [
              {
                title: "特码出现期数最多的号码",
                key:'teMaReMen',
                con:[]
              },
              {
                title: "特码当前期遗漏期数最多的号码",
                con: [],
                key:'teMaYiLou'
              },
              {
                title: "平码出现期数最多的号码",
                con: [],
                key:'danMaReMen'
              },
              {
                title: "平码当前期遗漏期数最多的号码",
                con: [],
                key:'danMaYiLou'
              }
            ],
            Effective: [
              {
                title: "特码出现期数最多的生肖:",
                con: [],
                key:'teMaSXReMen'
              },
              {
                title: "特码当前遗漏期数最多的生肖:",
                con: [],
                key:'teMaSXYiLou'
              },
              {
                title: "正常出现期数最多的生肖:",
                con: [],
                key:'danMaSXReMen'
              },
              {
                title: "正常当前遗漏期数最多的生肖:",
                con: [],
                key:'danMaSXYiLou'
              }
            ],
            WaveColor: [
              {
                title: "特码出现期数最多的波色:",
                con: [],
                key:'danMaSeBoReMen'
              },
              {
                title: "特码当前遗漏期数最多的波色:",
                con: [],
                key:'danMaSeBoYiLou'
              },
              {
                title: "正常出现期数最多的波色:",
                con: [],
                key:'danMaSeBoReMen'
              },
              {
                title: "正常当前遗漏期数最多的生肖:",
                con: [],
                key:'danMaSeBoYiLou'
              }
            ],
            mantissaList: [
              {
                title: "特码出现期数最多的尾数:",
                con: [],
                key:'teMaWeiShuReMen'
              },
              {
                title: "特码当前遗漏期数最多的尾数:",
                con: [],
                key:'teMaWeiShuYiLou' 
              }
            ]
          },
          colums: ["近50期", "近100期", "近150期", "近200期"],
          yearList:['2010','2011','2012','2013','2014','2015','2016','2017','2018'],
          selected:this.$store.state.selected.value
        }
    },
    methods:{
        async getMant() {
            try {
              let res = await this.$api.statistics.getMant({
                year: this.selected
              });
              if (res && res.code ==200) {
                this.mantList = res.body;
                console.log(this.mantList)
              }
            } catch (err) {
              console.log(err);
            }
          },
        async getLh(){
          try {
            let res = await this.$api.statistics.getLh({
              count: this.selected
            });
            if (res && res.code ==200) {
              let lhList = res.body;
              for(let i in this.actions){
                this.actions[i].forEach((element,i) => {
                  Object.keys(lhList).forEach((item,i)=>{
                    if(element.key==item){
                      element.con= []
                      element.con.push(...Object.values(lhList)[i])                      
                     }
                  })
                });
              }
            }
          } catch (err) {
            console.log(err);
          }
        }
    },
}

export default Mant