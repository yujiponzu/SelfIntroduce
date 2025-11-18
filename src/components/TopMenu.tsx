import { FC } from "react";

export interface Menu {
  title: string;
  url: string;
}

interface TopMenuProps {
  menus: Menu[];
}

export const TopMenu: FC<TopMenuProps> = ({ menus }) => {
  return (
    <nav className="my-6 rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
      <ul className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        {menus.map((menu) => (
          <li key={menu.title} className="list-none">
            <a
              className="text-base font-medium text-gray-800 transition hover:text-blue-700"
              href={menu.url}
            >
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const menus: Menu[] = [
  { title: "自己紹介", url: "#introduction" },
  { title: "研究業績", url: "#works-list" },
  { title: "学歴", url: "#educations-list" },
  { title: "インタビュー", url: "#interviews-list" },
];
