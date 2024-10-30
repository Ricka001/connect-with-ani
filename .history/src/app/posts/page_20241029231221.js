// we need some navigation
//we need query string to sort the data asc and desc
//! remember the metadata
import Link from "next/link";
import { db } from "@/utils/dbConnection";
import postStyle from "@/app/posts/posts.module.css";
export default async function PostsPage() {
  const ani = await db.query(`SELECT * FROM connectwithani`);
  console.log(ani);
  const wrangledAni = ani.rows;

  return (
    <div className={postStyle.body}>
      <h1>Posts Page</h1>
      {wrangledAni.map((anime) => (
        <div key={anime.id}>
          <nav>
            <Link href={`/posts/${anime.id}`}>
              <h2>{anime.anime_name}</h2>
              <p>{anime.rating}</p>
            </Link>
          </nav>
        </div>
      ))}
    </div>
  );
}
{
  /* <p>{anime.description}</p> */
}