import Link from "next/link";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const menu = () => {
  const links = [
    {
      id: 1,
      title: "home",
      slug: "/",
    },
    {
      id: 2,
      title: "projects",
      slug: "/projects",
    },
    {
      id: 3,
      title: "blog",
      slug: "/blog",
    },
    {
      id: 4,
      title: "contacts",
      slug: "/contacts",
    },
  ];

  return (
    <>
        <Menubar>
        <span>hellogung</span>
          {links.map((link) => (
            <MenubarMenu key={link.id}>
              <Link href={`${link.slug}`}>
                <MenubarTrigger>{link.title}</MenubarTrigger>
              </Link>
            </MenubarMenu>
          ))}
        </Menubar>
    </>
  );
};

export default menu;
