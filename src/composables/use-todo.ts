import {ref} from 'vue'
import Task from '@/interface/task'
import {useData} from '@/composables/use-data'


export function useToDo(){
    const text = ref('');


    const {todolist} = useData()

    const tasks = ref(todolist)

    function addTask(){
      if(text.value.trim() !== '')
        {  
          const data: Task = {
            content: text.value,
            finished: false,
            id: Math.random()*10000,
          };
            tasks.value.push(data);
            console.log(tasks.value);
            text.value = '';
        }
    }

    function removeTask(data: number){
      tasks.value.splice(data, 1);
    }

    function editTask(data: number){
      const update = prompt('Enter new text: ', tasks.value[data].content)
      if (update){
        tasks.value[data].content = update;
      }
    }

    

    return {text,tasks, addTask, removeTask, editTask}
}

