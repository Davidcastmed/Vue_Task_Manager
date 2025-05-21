import { defineStore } from 'pinia';
import { reactive, ref, computed } from 'vue';

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useTasksStore = defineStore('tasks', () => {
  // const count = ref(0)
  // const name = ref('Eduardo')
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  
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