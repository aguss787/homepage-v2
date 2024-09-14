import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center gap-5 min-w-full py-10 px-10 text-xl text-center">
      <div className="flex flex-col">
        <span className="font-bold text-9xl">404</span>
        <span className="font-bold text-5xl sm:text-7xl">Not Found</span>
      </div>

      <div className="flex flex-col">
        <span>Sorry, the page you are looking for is not found.</span>
        <span>Or... are you trying to do something naughty? 😠</span>
      </div>

      <span>
        Anyway, you can go back to the home page by clicking the button below.
      </span>

      <Link href="/" className="py-5">
        <button className="p-2 bg-pink-500 rounded-xl">
          Take me home daddy
        </button>
      </Link>

      <span>{"Don't worry, I won't tell your mom about this. 😏"}</span>
    </div>
  );
}
