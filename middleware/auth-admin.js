export default function ({ $auth, redirect, store }) {
    if (!$auth.loggedIn) {
      return redirect(`/admin/login`)
    }
    if($auth.user){
      if(!$auth.user.isAdmin){
        // return redirect(`/admin/login`)
      }
    }
  }