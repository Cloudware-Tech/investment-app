export default function ({ $auth, redirect, store }) {
  
  // If the user is not authenticated
  if (!$auth.loggedIn || !$auth.user) {
    return redirect(`/login`)
  }
  // if (!$auth.user.isUser) {
  //   return redirect(`/login`)
  // }
  
}