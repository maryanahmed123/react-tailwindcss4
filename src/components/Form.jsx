function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page refresh
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;