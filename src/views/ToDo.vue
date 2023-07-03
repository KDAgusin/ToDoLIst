<template>
  <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /></head>
  <div class="Form">
    <h1> TO DO LIST </h1>
      <div class="taskbar">
        <form class="textbar" @submit.prevent="addTask">
          <input class="textbox" type="text" name="text" v-model="text" autocomplete="off" placeholder="Enter Task Here!"/>
          <br>
          <button1 @click="addTask()">Let's do This!</button1>
        </form>
      </div>
  </div>
  <ul>
       <task_item></task_item>    
  </ul>
  <body>
    <div class="glowing">
        
        <span style="--i:1;"></span>
        
        <span style="--i:2;"></span>
        
        <span style="--i:3;"></span>
        
      </div>
    </body>
    <body>
      
      <div class="glowing">
        
        <span style="--i:1;"></span>
        
        <span style="--i:2;"></span>
        
        <span style="--i:3;"></span>
        
      </div>
    </body>
    <body>
      
      <div class="glowing">
        
        <span style="--i:1;"></span>
        
        <span style="--i:2;"></span>
        
        <span style="--i:3;"></span>
        
      </div>
    </body>
    <body>
      
      <div class="glowing">
        
        <span style="--i:1;"></span>
        
        <span style="--i:2;"></span>
        
        <span style="--i:3;"></span>
        
      </div>
    </body>
    <body>
      
      <div class="glowing">
        
        <span style="--i:1;"></span>
        
        <span style="--i:2;"></span>
        
        <span style="--i:3;"></span>
        
      </div>
    </body>
    <body>
      <div class="glowing">
        
        <span style="--i:1;"></span>
        
        <span style="--i:2;"></span>
        
        <span style="--i:;"></span>
        
      </div>
    </body>
</template>



<script lang="ts" >
import { defineComponent} from 'vue';
import { useToDo } from '@/composables/use-todo';
import task_item from "@/components/task_item.vue";




export default defineComponent({
  name: "ToDo",

  components:{
    task_item,
  },

  setup(){
    const {addTask,text,tasks} = useToDo();
    return {addTask, text, tasks}
    
  }
});
</script>

<style></style>
