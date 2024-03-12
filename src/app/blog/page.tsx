import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const page = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mt-5">Blog</h1>
    </>
  );
};

export default page;
