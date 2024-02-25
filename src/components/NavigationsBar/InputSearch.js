"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;

    router.push(`/search/${keyword}`);
  };

  return (
    <div className="relative">
      <input
        placeholder="search anime..."
        className=" w-full p-2 rounded"
        ref={searchRef}
      />
      <button className="absolute top-1.5 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={23} />
      </button>
    </div>
  );
};

export default InputSearch;
