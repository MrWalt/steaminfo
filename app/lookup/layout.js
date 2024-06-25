import Header from "../_components/Header";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <div className="max-w-[90%] px-[96px] py-[48px] grid grid-cols-[repeat(4,_1fr)] gap-20 mx-auto">
        {children}
      </div>
    </div>
  );
}
