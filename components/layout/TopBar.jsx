"use client"
import { useState } from "react";
import { Add, Logout, Search } from "@mui/icons-material";
import { useRouter } from "next/navigation"; // Change from "next/router" to "next/navigation"
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";

const TopBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people, ... "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="search-icon" onClick={() => {}} />
      </div>
      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <Add /> <p>Create A Post</p>
      </button>

      <div className="flex gap-3">
        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer items-center md:hidden">
              <Logout style={{ color: "white", fontSize: "32px" }} />
            </div>
          </SignOutButton>
        </SignedIn>
        <Image
          src="/assets/phucmai.png"
          alt="profile photo"
          width={50}
          height={50}
          className="rounded-full md:hidden"
          onClick={() => router.push("/")} // Navigate to the home page on image click
        />
      </div>
    </div>
  );
};

export default TopBar;
