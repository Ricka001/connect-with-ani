// we ndd some navigation
//we need to use params to render data dynamically
//! remember the metadata

import { db } from "@/utils/dbConnection";

export default async function IdPage({ params }) {
  // const result = await fetch(`https://dummyjson.com/products/${params.id}`);
  // const data = await result.json();
  //only one object so don't need to wrangle
  //this place holder is api
  const ani = (
    await db.query(`SELECT * FROM connectwithani WHERE id = ${params.id}`)
  ).rows;
  console.log(ani);

  //console.log(params);
  // here i need to get my posts from the db filtering by id (WHERE id = ${params.id})
  //here I need to handle the submit for the comments form
  return (
    <>
      <h1>Add a comment and get involved!</h1>
      <h2>{ani[0].anime_name}</h2>
      <p>{ani[0].rating}</p>
      <p>{ani[0].description}</p>
      //////////////////////////
      <form className="flex flex-col items-center">
        <h2>Write your comment here!</h2>
        <label htmlFor="user_name">Name: </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="What's your name?"
          required
        />
        <label htmlFor="comment"> Comment: </label>
        <input
          type="text"
          name="user_comment"
          id="user_comment"
          placeholder="Say what you want I have no filters BUDDY!"
          required
        />
        <button type="submit" className="border-red-300 border-4">
          Submit
        </button>
      </form>
    </>
    // here i need to display an individual post and relevant data
    // here i will display a form with inputs that are connected to the comments table columns in my db
    //
  );
}
