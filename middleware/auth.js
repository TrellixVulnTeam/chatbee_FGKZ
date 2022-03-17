export default function ({ store, redirect, route }) {
  if (route.name == 'login') {
    if (store.state.accessToken != '') {
      return redirect('/')
    }
  } else {
    if (store.state.accessToken == '') {
      return redirect('/login')
    }
  }
}
