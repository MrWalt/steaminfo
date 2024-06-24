import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Sidebar() {
  return (
    <aside className="w-[280px] min-h-screen text-md text-primary-50 bg-primary-700 flex-col flex border-r border-primary-500 shrink-0">
      <div>
        <Logo />
        <MainNav />
      </div>
      <footer className="mt-auto text-xs text-primary-200 self-center pb-2 px-2">
        <span>
          This page is not affiliated with Valve or Steam or whatever in anyway
          also{" "}
        </span>
        <span>&copy; Copyright by </span>
        <a href="https://github.com/MrWalt" target="blank">
          MrWalt
        </a>
        <span> or something</span>
      </footer>
    </aside>
  );
}
