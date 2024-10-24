import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>Connect with Ani</h1>
      {/* Add image here */}
      {/* <img src="" alt="" /> */}
      <nav className="flex flex-col">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Chats</Link>
      </nav>
    </>
  );
}
