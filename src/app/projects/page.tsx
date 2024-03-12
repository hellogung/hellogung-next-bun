import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const page = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mt-5">Projects</h1>
    </>
  );
};

export default page;
