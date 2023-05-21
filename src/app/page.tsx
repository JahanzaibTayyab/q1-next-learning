import Image from "next/image";
import Link from "next/link";
import jahanzaibImage from "@/assets/images/Jahanzaib.jpg";

export default function Home() {
  return (
    <div className="flex justify-center bg-gray-300">
      <div className="mx-4 order-last self-center">
        <Image
          src={jahanzaibImage}
          alt="image"
          width={100}
          height={100}
          className="rounded-full w-100 h-100 object-contain"
        />
      </div>
      <div>
        <h1>Welcome to NorthBy</h1>
        <h2 className="text-6xl font-bold text-yellow-700">
          A premium in sight and sound
        </h2>
        <button className="mx-4 my-8 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900 ">
          Learn More
        </button>
      </div>
    </div>
  );
}
