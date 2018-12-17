<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input  @openList="showHandle"></select-input>
        <list v-show="listShow"></list>
      </div>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

/*let listData = [
	{
		'title':'js'
	},
	{
		'title':'html+css'
	},
	{
		'title':'jQuery'
	},
	{
		'title':'js'
	},
	{
		'title':'html+css'
	},
	{
		'title':'jQuery'
	}
]
*/
export default {
  data(){
      return {
        listShow:false,
      }
  },
  methods: {
  	showHandle(){
  		this.listShow = !this.listShow	
  	}
  },
  components: {
    selectInput,
    list
  }
}
</script>
