import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1 className="flex flex-col items-center">Connect with Ani</h1>
      {/* Add image here */}
      {/* <img src="" alt="" /> */}
      <nav className="flex flex-row items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Chats</Link>
      </nav>
    </>
  );
}
