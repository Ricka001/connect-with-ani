export default function Form() {
  return (
    <>
      <form>
        <h2>Write your comment here!</h2>
        <label htmlFor="ani_name"></label>
        <input
          type="text"
          name="anime_name"
          id="anime_name"
          placeholder="Name"
        />
      </form>
    </>
  );
}