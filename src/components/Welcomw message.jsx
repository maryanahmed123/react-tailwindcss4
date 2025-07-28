function Welcomemessage({ loggedIn }) {
  if (!loggedIn) {
return <p>Please log in.</p>;
  }else {

  return <h1>Welcome back!</h1>;
}
}
export default Welcomemessage;