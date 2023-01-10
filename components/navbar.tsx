import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 fixed top-0 flex justify-center w-full">
      <div
        className="container"
        style={{
          width: "760px",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">blakeCodes</a>
        </div>
        <ul className="menu menu-horizontal px-2">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
      </div>
    </div>
  );
}
