<template>
    <div class="clearFix">
      <input
        readonly='readonly'
        class="keyWord"
        @click="showList"
        :value="title"
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>

export default {
  computed:{
    title(){
    	return this.$store.state.selectModule.title
    }
  },
  methods: {
    showList(){
    	this.$emit("openList")
    }
  }
}
</script>
