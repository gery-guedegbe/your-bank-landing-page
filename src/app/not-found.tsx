import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h2 className="text-lg font-medium text-white lg:text-xl">Not Found</h2>

      <p className="text-base text-white lg:text-lg">
        Could not find requested resource
      </p>

      <Link
        href="/"
        className="border-custom-green-65 curp rounded-3xl border px-4 py-3 font-medium text-white outline-none"
      >
        Return Home
      </Link>
    </div>
  );
}
