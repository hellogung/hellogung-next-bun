import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
};

const page = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mt-5">Contacts</h1>
    </>
  );
};

export default page;
