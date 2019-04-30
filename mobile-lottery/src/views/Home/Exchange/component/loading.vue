<template>
	<div class="loading"><img src="../../../../assets/img/home/statistics/loading.gif"  alt=""><span>{{loadingWord}}</span></div>
</template>

<script>
export default {
    name: 'loading',
    props:{
    	loadingWord:{
    		type:String
    	}
    } ,
    data () {
        return {

    	};
  	}
};
</script>

<style lang="less" scoped>
	.loading{
		text-align: center;
		z-index: 100;
		width: 100%;
		height:1rem;
		line-height: 1rem;				
		img{
			margin: 0 auto;
			width: 6.5rem;
			height: 6.5rem;
			vertical-align: middle;
		}
		span{
			vertical-align: middle;
			margin-left: 1.4rem;
			font-size:1.4rem
		}
	}
</style>