import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Optional: Auto-redirect to home after 3 seconds
    // const timer = setTimeout(() => {
    //   router.push('/');
    // }, 3000);
    // return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#FF0054] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#FF0054] text-white rounded-md hover:bg-orange-500 transition-colors duration-300"
          >
            Go Home
          </Link>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 border-2 border-[#FF0054] text-[#FF0054] rounded-md hover:bg-[#FF0054] hover:text-white transition-colors duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
