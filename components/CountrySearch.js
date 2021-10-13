/** @format */

import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import d from "../countries";

function CountrySearch() {
  const [country, setCountry] = useState("nocountry");
  const router = useRouter();
  const gotopage = () => {
    if (country === "nocountry") {
      alert("Please enter a country to see latest news around it...");
    } else {
      alert(
        "You are now being redirected to the headlines of the country you selected."
      );
      router.push(`/newsbycountry/${country}`);
    }
  };
  return (
    <div className="flex flex-col items-center space-y-3 ">
      <select
        onChange={(e) => setCountry(e.target.value)}
        value={country}
        id="country"
        className="w-1/2 md:w-2/3 sm:w-3/4 xs:w-11/12 h-10 rounded-xl py-1 pl-4 text-xl font-serif text-blue-700 outline-none font-semibold bg-selectbg">
        <option value="nocountry">---</option>
        {d.map((ele) => {
          return (
            <option key={ele.value} value={ele.label}>
              {ele.label}
            </option>
          );
        })}
      </select>

      <Button
        color="teal"
        buttonType="filled"
        size="regular"
        rounded={false}
        block={false}
        iconOnly={false}
        ripple="light"
        onClick={gotopage}>
        <Icon name="double_arrow" size="regular" /> See latest News
      </Button>
    </div>
  );
}

export default CountrySearch;
