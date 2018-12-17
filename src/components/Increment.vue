<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="reduce({n:11})"/>
      <span>{{count}}</span>
      <input type="button" value="+" @click="add" />
			<p>{{filterNum}}</p>
    </div>
  </div>
</template>

<script>
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
      data(){
      	return {

      	}
      },
      /*computed:{
      	num(){
      		return this.$store.state.count
      	},
      	num2(){
      		return this.$store.getters.filterNum
      	}
      },*/
	     computed:{
	     	/*num2(){
      		return this.$store.getters.filterNum
      	},*/
	     	...mapState(['count']),
	     	...mapGetters(['filterNum'])
	     },
      methods:{
      	/*reduce(){
      		this.$store.commit('reduceAction',{
      			n:5
      		})
      	},*/
      	...mapActions({
      		add:'addAction'
      	}),
      	...mapMutations({
      		reduce:'reduceAction'
      	})
      	/*add(){
      		this.$store.dispatch('addAction')
      	}*/
      }

    }
</script>
<style>

</style>
