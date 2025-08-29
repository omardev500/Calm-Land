import { defineStore } from "pinia"

export default useFirstLoginStore = defineStore('storage', {
  state: () => ({ 
    firstLogin: true,
  }),
})
