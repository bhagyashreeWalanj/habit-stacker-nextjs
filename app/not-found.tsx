import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <Image
              src={"/warning.png"}
              alt="warning"
              width={100}
              height={100}
              className=""
            />
          </div>

          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Oops! Lost in productivity
          </h1>
          <p className="text-gray-500">
            Looks like you've ventured into the unknown digital realm.
          </p>
        </div>
        <Link
          href="/dashboard"
          className="inline-flex h-10 items-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Return to website
        </Link>
      </div>
    </div>
  );
}
