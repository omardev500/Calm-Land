export default defineEventHandler((event) => {
  try {
    deleteCookie(event, 'auth_token')

    return {
      success: true,
      message: "Logged out successfully"
    }
  } catch (error) {
    console.error("An error happened while logging out: ", error);
    return {
      success: false,
      message: "Error logging out"
    }
  }
})
