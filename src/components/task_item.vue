<template>
    <div class="list">
        <dl v-for="(item, index) in tasks" :key="index">
            <input type="checkbox" id="text" v-model="item.finished"/>
            <span :class="{ 'completed-content': item.finished }">{{ item.content }}</span>
            <button3 @click="removeTask(index)"><i class="fa-sharp fa-solid fa-trash fa-shake"></i></button3>
            <button2 @click="editTask(index)"><i class="fa-solid fa-pen-to-square fa-shake"></i></button2> 
        </dl>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import {useToDo} from '@/composables/use-todo';
    // import {useData} from '@/composables/use-data';

    export default defineComponent({
        Name: "task_item",
        setup(){
            // const{todolist} = useData();
            const {editTask, removeTask, tasks } = useToDo();
            return {editTask, removeTask, tasks};
        }
    });

</script>