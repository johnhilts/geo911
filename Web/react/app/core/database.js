export const firebaseConfig = {
  apiKey: 'AIzaSyCW38Sypy_cF7_o1pU3fY7SctOeOuJAtNk',
  authDomain: 'geo911-help-rescue-me.firebaseapp.com',
  databaseURL: 'https://geo911-help-rescue-me.firebaseio.com/',
  storageBucket: 'geo911-help-rescue-me.appspot.com',
};

export function getUserRoot(owner) {
  return 'users/' + owner;
}
