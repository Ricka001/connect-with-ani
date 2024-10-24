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
        <label htmlFor="user_comment">Comment: </label>
        <input
          type="text"
          name="user_comment"
          id="anime_comment"
          placeholder="Say what you want I have no filters BUDDY!"
        />
      </form>
    </>
  );
}
