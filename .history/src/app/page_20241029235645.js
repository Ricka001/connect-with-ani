import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col content-center">
      <h1>Home is where happiness STARTS!</h1>
      <Image
        src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="picture board"
        width={500}
        height={300}
      ></Image>
    </div>
  );
}
