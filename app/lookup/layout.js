import Header from "../_components/Header";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <div className="max-w-[90%] px-[48px] py-[48px] grid grid-cols-[1fr_1fr_1fr_300px] gap-12 mx-auto items-start">
        {children}
      </div>
    </div>
  );
}
