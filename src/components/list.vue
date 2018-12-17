<template>
    <ul class="list">
      <li v-for="item in data" @click="sendTitle(item.title)">{{item.title}}</li>
    </ul>
</template>

<script>
export default {
  computed:{
  	data(){
  		return this.$store.state.selectModule.listData
  	}
  },
  methods:{
    sendTitle(title){
    	this.$store.commit('changeTitle',{
    		title:title
    	})
    }
  },
  created(){
    this.$store.dispatch('getListAction')
  }
}
</script>
