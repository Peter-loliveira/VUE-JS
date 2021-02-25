<template>
  <div class="counters">
      <span> {{ counter }} </span>
      <button @click="ADD">ADD</button>
      <button @click="SUB">SUB</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            counter: 0,
        }
    },
    methods: {
        ADD(){
            this.counter++
        },
        SUB(){
            this.counter--
        }
    }
}
</script>

<style>
    .counters {
        margin-bottom: 5px;
    }
    .counters span{
        border-bottom: 1px solid rgba(52, 52, 240, 0.473);
        height: 40px;
        padding: 5px 25px;
    }
    .counters button{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: crimson;
        color: white;
        font-weight: bold;
        margin-left: 10px;
        outline: none;
    }
</style>