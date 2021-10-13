/** @format */
import Button from "@material-tailwind/react/Button";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import Icon from "@material-tailwind/react/Icon";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="flex flex-row items-center w-11/12 mx-auto mt-3 p-3 space-x-4 shadow-xl rounded-xl bg-headerbg top-0 sticky z-50">
      <img
        src={session?.user?.image}
        alt=""
        className="rounded-full w-10 h-10 bg-gray-700"
      />
      <div className="w-full relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Icon name="search" size="regular" />
        </span>
        <input
          type="search"
          name="q"
          className="w-full py-2 text-lg text-gray-900 bg-white rounded-xl px-10 focus:outline-none focus:bg-gray-200  focus:text-gray-900 font-serif font-semibold border border-gray-200 focus:border-none"
          placeholder="Search for news..."
          autoComplete="off"
        />
      </div>
      <Button
        className="xs:hidden sm:hidden"
        color="gray"
        buttonType="link"
        size="regular"
        rounded={false}
        block={false}
        iconOnly={false}
        ripple="dark"
        onClick={() => {
          if (session) {
            router.push("/forum");
          } else {
            alert("You are not login yet");
          }
        }}>
        <Icon name="forum" size="regular" /> Forum
      </Button>
      <Button
        className="xs:hidden sm:hidden"
        color="gray"
        buttonType="link"
        size="regular"
        rounded={false}
        block={false}
        iconOnly={false}
        ripple="dark"
        onClick={() => {
          if (session) {
            router.push("/notifications");
          } else {
            alert("You are not login yet");
          }
        }}>
        <Icon name="notifications_active" size="regular" /> Notifications
      </Button>
      {session ? (
        <Dropdown
          color="gray"
          placement="bottom-start"
          buttonText="Settings"
          buttonType="link"
          size="sm"
          rounded={false}
          block={false}
          ripple="dark">
          <DropdownItem color="gray" ripple="light" onClick={() => signOut()}>
            Sign Out
          </DropdownItem>
          <DropdownLink
            color="gray"
            ripple="light"
            onClick={() => router.push("/subscribe")}>
            Subscribe
          </DropdownLink>
          <DropdownItem color="gray" ripple="light">
            Report
          </DropdownItem>
        </Dropdown>
      ) : (
        <Dropdown
          color="gray"
          placement="bottom-start"
          buttonText="Settings"
          buttonType="link"
          size="sm"
          rounded={false}
          block={false}
          ripple="dark">
          <DropdownItem color="gray" ripple="light" onClick={() => signIn()}>
            Sign In
          </DropdownItem>
          <DropdownLink
            color="gray"
            ripple="light"
            onClick={() => router.push("/subscribe")}>
            Subscribe
          </DropdownLink>
          <DropdownItem color="gray" ripple="light">
            Report
          </DropdownItem>
        </Dropdown>
      )}
    </div>
  );
}

export default Header;
