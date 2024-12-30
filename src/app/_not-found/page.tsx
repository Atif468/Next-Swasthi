import React from "react";
import { redirect } from "next/navigation";

const NotFoundPage: React.FC = () => {

  const redirectRoute = () => {
    redirect("/");
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold text-teal-400">404</h1>
      <p className="mt-4 text-xl text-gray-300">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <button
        className="mt-6 rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600"
        onClick={redirectRoute}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;
