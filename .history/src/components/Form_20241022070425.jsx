export default function Form() {
  return (
    <>
      <form>
        <h2>Write your comment here!</h2>
        <label htmlFor="user_name">Name: </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="What's your name?"
        />
        <h2>Write your comment here!</h2>
        <label htmlFor="user_comment">Comment: </label>
        <input
          type="text"
          name="user_comment"
          id="anime_comment"
          placeholder="What's your name?"
        />
      </form>
    </>
  );
}