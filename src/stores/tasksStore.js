import { defineStore } from 'pinia';
import { reactive } from 'vue';

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
        let tasks= reactive([
            {
              name: "Website design",
              description: "Define the style guide, branding and create the webdesign on Figma.",
              completed: true,
              id:1
            },
            {
              name: "Website development",
              description: "Develop the portfolio website using Vue JS.",
              completed: false,
              id:2
            },
            {
              name: "Hosting and infrastructure",
              description: "Define hosting, domain and infrastructure for the portfolio website.",
              completed: false,
              id:3
            },
            {
              name: "Composition API",
              description: "Learn how to use the composition API and how it compares to the options API.",
              completed: true,
              id:4
            },
            {
              name: "Pinia",
              description: "Learn how to setup a store using Pinia.",
              completed: true,
              id:5
            },
            {
              name: "Groceries",
              description: "Buy rice, apples and potatos.",
              completed: false,
              id:6
            },
            {
              name: "Bank account",
              description: "Open a bank account for my freelance business.",
              completed: false,
              id:7
            }
        ])
        return { tasks}
      })