import { Outlet, useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const EcomLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get("q");
    if (query !== null) {
      setSearchValue(query);
    }
  }, [location.search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target) return;
    let value = e.target.value;
    setSearchValue(value);
    setSearchParams({ q: value });
  };

  return (
    <section>
      <div className="bg-black text-white flex justify-center items-center h-40">
        <div className="border border-gray-100 rounded-md px-2 py-1 gap-2 flex">
          Search..
          <input
            type="text"
            value={searchValue}
            onChange={(e) => handleInputChange(e)}
            className="bg-transparent outline-none focus:outline-none active:outline-none"
          />
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default EcomLayout;
