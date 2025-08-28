<template>
  <main class="bg-green-50 w-screen min-h-screen flex flex-col gap-6 md:pt-5 xl:pt-7 items-center">
    <TextLogo custom="text-6xl" />
    <section class="border border-gray-300 flex flex-col bg-white w-full md:w-130 shadow-lg py-3 rounded-lg mb-5">
      <h2 class="text-2xl text-center pb-1 text-slate-900 font-bold pt-1">Create a new account</h2>
      <p class="text-md text-center text-gray-500 pb-4">It's quick and easy.</p>
      <hr class="border border-gray-300" />
      <form class="flex flex-col gap-3 px-4 pt-5 pb-3"  method="POST">
        <fieldset class="grid grid-cols-2 gap-3">
          <input type="text" name="fname" required aria-required="true" aria-label="Enter your first name" placeholder="First name" autocomplete="given-name" autofocus class="form__input" />
          <input type="text" name="surname" required aria-required="true" aria-label="Enter your surname" placeholder="Surname" autocomplete="family-name" class="form__input" />
        </fieldset>
        
        <input type="text" name="username" required aria-required="true" aria-label="Enter your username" placeholder="Username" autocomplete="username" autofocus class="form__input mt-1" />
        
        <input type="password" name="new-password" required aria-required="true" aria-label="Enter a new password" placeholder="New Password" autocomplete="new-password" class="form__input" /> 
        
        <input type="password" name="confirm-password" required aria-required="true" aria-label="Confirm your password" placeholder="Confirm Password" autocomplete="new-password" class="form__input" /> 
        
        <fieldset class="grid grid-cols-2 gap-2">
          <legend class="text-slate-600 col-span-full pb-2">Gender:</legend>
          <label for="male" class="form__radio"><span>Male</span> 
            <input type="radio" id="male" name="gender" value="Male" required aria-required="true" aria-label="Select gender Male" />
          </label>
          <label for="female" class="form__radio"><span>Female</span> 
            <input type="radio" id="female" name="gender" value="Female" required aria-required="true" aria-label="Select geneder Female" />
          </label>
        </fieldset>
        
        <label class="cursor-pointer mt-1 self-start">
          <input type="checkbox" required aria-required="true" aria-label="By clicking you agree to the website privacy policy" name="agree-checkbox" /> I agree to website's <a href="#" class="text-[#220AD6] hover:underline">Terms, Privacy Polices</a>.
        </label>
        
        <input type="submit" value="Sign Up" class="text-center self-center bg-black p-3 rounded-[1px] border-2 mt-3 border-yellow-300 text-white font-bold hover:opacity-82 active:opacity-75 transition transition-2s ease-out min-w-[46%] cursor-pointer  self-center text-xl" />
      </form>
      <NuxtLink to="/login" class="self-center mt-1 text-[#2209C6] font-bold text-md">Already have an account?</NuxtLink>
    </section>
  </main>
</template>
