//import {ref} from 'vue'
import Task from '@/interface/task'

const todolist : Task[] = [];

export function useData(){
    return{todolist}
}
