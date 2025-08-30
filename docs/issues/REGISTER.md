# Register Page Issues

This README has issues I faced while developing the register page.

## The Issue

The form doesn't check if the entered username is already in the database or not which cause big problems like duplicating usernames  which will make profiles same or will override profiles of users with others which is a very bad approach.

The following code is the code which has something wrong:

```ts
const users = ref([]); // The Array that contains the users, we get the users from an api. Notice 'ref'!
const validateErrorMsg = ref('') // this is the text placed above the 'Sign Up' button that appears if there's an error in both username and password fields with confirm password field.

const getUsers = async () => {
  users.value = await $fetch('/api/users');
}

onMounted(getUsers)

const formValidate = () => {
  let isUserNameFound = false; // Checks if the username already exists or not
  
  for (let i = 0; i < users.length; i++) {
    console.log("USERNAME: ", users[i].username)
    if (form.value.username === users[i].username) { 
      isUserNameFound = true;
      break; 
    }
  }
  
 if (isUserNameFound) { // if the username already exists so you should use another one.
    validInputs.value.username = false;
    validateErrorMsg.value = "Username is already taken.";

  } else { // it's unique you can move on..
    validateErrorMsg.value = '';
    validInputs.value.username = true;
  }
  
  // After that we're gonna check the password field and it's confirm field
  .....
}
```

## How I Solve it?

Did you found the error? it took me time to relaize the problem, if we look closer in the for loop we look:

```ts
for (let i = 0; i < users.length; i++) {
  console.log("USERNAME: ", users.username)
  if (form.value.username === users.username) { 
  ....
```

The correct version will be in the for statement: `users.value.length` and in the body: `users.value[i].username` yes you have to add `value`, if you're not familiar with Vue it's a common mistake but can lead to bad results.

There's a second mistake you might not notice because the code is not full, when the username is already taken we should STOP the function by adding `return;` because after checking the username we check the password and it's confirm then check if no errors then POST to the API so you should add this to both check like to prevent getting conflicts especially in the error message.

This is the only Issue I faced till now in the Full Stack Part of the project in this page.
