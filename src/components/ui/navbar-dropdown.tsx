"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";

interface IProps {}

const NavbarDropdown: React.FC<IProps> = () => {
  const router = useRouter();

  const handleNavigation = (pathName: string) => {
    router.push(pathName);
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar name="Junior" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onClick={() => handleNavigation("/profile")}
          key="profile"
        >
          Profile
        </DropdownItem>
        <DropdownItem
          onClick={() => handleNavigation("/profile/settings")}
          key="settings"
        >
          Settings
        </DropdownItem>
        <DropdownItem
          onClick={() => handleNavigation("/profile/create-post")}
          key="create-post"
        >
          Create Post
        </DropdownItem>
        <DropdownItem key="logout" className="text-danger" color="danger">
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;
