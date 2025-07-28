function MouseEventExample() {
  const handleMouseOver = () => {
    console.log("Mouse is over the box!");
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      style={{ padding: "2rem", border: "1px solid gray" }}
    >
      Hover over me!
    </div>
  );
}
export default MouseEventExample;