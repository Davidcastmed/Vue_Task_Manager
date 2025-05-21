import { defineStore } from 'pinia';
import { reactive, ref, computed } from 'vue';
export const useTasksStore = defineStore('tasks', () => { 
let tasks= reactive(JSON.parse(localStorage.getItem('tasks')) || []);
let filterBy = ref("todo");
let modalIsActive = ref(false);
function setFilter(value){
filterBy.value = value
};
function addTask(newTask){
if(newTask.name && newTask.description){
  newTask.id = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1; // the biggest id
  tasks.push(newTask);
  closeModal();
}else
alert("They are Blank")
}
function toggleCompleted(id){
  // console.log('id', id)
  tasks.forEach(task =>{
    if(task.id === id){
      task.completed =!task.completed;
    }
  })
}
const filteredTasks = computed(()=>{
switch(filterBy.value){
  case 'todo':
    return tasks.filter(task => !task.completed);
  case 'done':
    return tasks.filter(task => task.completed);
  default:
    return tasks;
}
});
function openModal(){
  modalIsActive.value = true
}
function closeModal(){
  modalIsActive.value = false
}
  return { tasks, filterBy, setFilter, filteredTasks, addTask, toggleCompleted,openModal, closeModal, modalIsActive }
})