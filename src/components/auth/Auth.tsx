import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className="min-w-[360px] max-w-[600px] mx-auto h-full flex flex-col justify-center items-center text-center">
      <div>
        <p className="text-3xl font-semibold mb-4">
          <span className="text-primary-200">Aban</span> Book
        </p>
        <img
          className="w-[146px] h-[178px] align-middle mb-9"
          src="/OBJECTS.svg"
          alt="aban book"
        />
      </div>
      <Outlet />
    </div>
  );
}

//test.com/auth/login
//test.com/auth/objecxts.svg

//test.com/objects.svg
