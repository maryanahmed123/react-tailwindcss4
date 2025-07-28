function Notification({ show }) {
  return (
    <div>
      <h2>Inbox</h2>
      {show && <p>This is a hidden message.</p>}


{show && <h1>fariin ayaa qarsoon</h1>}


    </div>
  );
}
export default Notification;