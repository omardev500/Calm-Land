<script setup lang="ts">
  const form = ref({
    username: '',
    firstName: '',
    surName: '',
    gender: '',
    password: '',
    confirm_password: ''
  })
  const validInputs = ref({
    username: true,
    password: true
  })
  
  const isLoading = ref(false)
  const users = ref([]);
  const lastUserId = ref(0)
  const validateErrorMsg = ref('')
  
  const getUsers = async () => {
    users.value = await $fetch('/api/users');
    lastUserId.value = users.value.length // For Token in Backend 
  }
  
  const formValidate = () => {
    let isUserNameFound = false; // Checks if the username already exists or not
    
    for (let i = 0; i < users.value.length; i++) {
      console.log("USERNAME: ", users.value[i].username)
      if (form.value.username === users.value[i].username) { 
        isUserNameFound = true;
        break; 
      }
    }
    
    if (isUserNameFound) { // if the username already exists so you should use another one.
      validInputs.value.username = false;
      validateErrorMsg.value = "Username is already taken.";
      return;
    } else { // it's unique you can move on..
      validateErrorMsg.value = '';
      validInputs.value.username = true;
    }
    
    // Check if password and it's confirmation are equal
    if (form.value.password !== form.value.confirm_password) {
      validateErrorMsg.value = "Passwords aren't match*"; // Not Equal
      validInputs.value.password = false;
      return;
    } else { // They're equal then continue
      validateErrorMsg.value = ''
      validInputs.value.password = true;
    }
    
    // Check if the register info are all valid. (gender, firstname and surname are required so no need for check)
    if (validInputs.value.username && validInputs.value.password) {
      addUser();
    }
  }
  
  const addUser = async () => {    
    isLoading.value = true;
    const newUser = await $fetch("/api/auth/users", {
      method: "POST",
      body: { 
              username: form.value.username, 
              firstName: form.value.firstName, 
              surName: form.value.surName, 
              gender: form.value.gender, 
              password: form.value.password
            }
    })
    navigateTo({
      path: '/account',
      query: {
        newRegister: true
      }
    });
  }
  onMounted(getUsers)
  
</script>
<template>
  <main class="bg-gradient-to-b from-green-50 via-cyan-50 to-indigo-50 w-screen min-h-screen flex flex-col gap-6 md:pt-5 xl:pt-7 items-center">
    <TextLogo custom="text-6xl" />
    <section class="border border-gray-300 flex flex-col bg-white w-full md:w-130 shadow-lg py-3 rounded-lg mb-5 animate-[customAnime1_0.5s_ease-out]">
      <h2 class="text-2xl text-center pb-1 text-slate-900 font-bold pt-1">Create a new account</h2>
      <p class="text-md text-center text-gray-500 pb-4">Join us in our quiet space in the internet for free</p>
      <hr class="border border-gray-300" />
      <form class="flex flex-col gap-3 px-4 pt-5 pb-3" @submit.prevent="formValidate" method="POST">
        <fieldset class="grid grid-cols-2 gap-3">
          <input type="text" name="fname" required aria-required="true" aria-label="Enter your first name" placeholder="First name" autocomplete="given-name" autofocus class="form__input" v-model="form.firstName" />
          <input type="text" name="surname" required aria-required="true" aria-label="Enter your surname" placeholder="Surname" autocomplete="family-name" class="form__input" v-model="form.surName" />
        </fieldset>
        
        <input type="text" name="username" required aria-required="true" aria-label="Enter your username" placeholder="Username" autocomplete="username" autofocus class="form__input mt-1" v-model="form.username" :class="!validInputs.username ? 'outline-red-600' : ''" />
        
        <input type="password" name="new-password" required aria-required="true" aria-label="Enter a new password" placeholder="New Password" autocomplete="new-password" class="form__input" v-model="form.password"  :class="!validInputs.password ? 'outline-red-600' : ''" /> 
        
        <input type="password" name="confirm-password" required aria-required="true" aria-label="Confirm your password" placeholder="Confirm Password" autocomplete="new-password" class="form__input" v-model="form.confirm_password" :class="!validInputs.password ? 'outline-red-600' : ''" /> 
        
        <fieldset class="grid grid-cols-2 gap-2">
          <legend class="text-slate-600 col-span-full pb-2">Gender:</legend>
          <label for="male" class="form__radio" value="male"><span>Male</span> 
            <input type="radio" id="male" name="gender" value="male" required aria-required="true" aria-label="Select gender Male" v-model="form.gender" />
          </label>
          <label for="female" class="form__radio" value="female"><span>Female</span> 
            <input type="radio" id="female" name="gender" value="female" required aria-required="true" aria-label="Select geneder Female" v-model="form.gender" />
          </label>
        </fieldset>
        
        <label class="cursor-pointer mt-1 self-start">
          <input type="checkbox" required aria-required="true" aria-label="By clicking you agree to the website privacy policy" name="agree-checkbox" /> I agree to website's <a href="#" class="text-[#220AD6] hover:underline">Terms, Privacy Polices</a>.
        </label>
        
        <div class="flex items-center overflow-hidden min-h-8">
          <p class="font-bold text-red-800 underline">{{ validateErrorMsg }}</p>
        </div>
        <button type="submit" :disabled="isLoading" class="text-center self-center bg-black p-3 rounded-sm text-white font-bold hover:opacity-82 active:opacity-75 transition transition-2s ease-out min-w-[46%] cursor-pointer bg-teal-700  self-center text-xl">
          {{ isLoading ? 'Creating Account...' : 'Sign Up' }}
        </button>
      </form>
      <NuxtLink to="/login" class="self-center mt-1 text-[#220AD6] font-bold text-md">Already have an account?</NuxtLink>
    </section>
  </main>
</template>
