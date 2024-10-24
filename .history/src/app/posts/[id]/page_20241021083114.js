// we ndd some navigation
//we need to use params to render data dynamically
//! remember the metadata

export default async function IdPage({ params }) {
  // const result = await fetch(`https://dummyjson.com/products/${params.id}`);
  // const data = await result.json();
  //only one object so don't need to wrangle
  //place holder
  //console.log(params);
  // here i need to get my posts from the db filtering by id (WHERE id = ${params.id})
  //here I need to handle the submit for the comments form
  return (
    <></>
    // here i need to display an individual post and relevant data
    // here i will display a form with inputs that are connected to the comments table columns in my db
  );
}

/* <h1>{data.title}</h1>
      <p>Dynamic route for each individual post {params.id}</p>
      <h2>{data.description}</h2>
      <p>{data.price}</p> */
