function Dashboard({ isAdmin }) {
  return (
    <div>{isAdmin ? <h1>Soodhowow, Admin!</h1> : <h1>Welcome, user!</h1>}
    
    {}
    {isAdmin ? <p>yes true</p>: <p>no false</p>}
    
    
    </div>
  );
}
export default Dashboard;