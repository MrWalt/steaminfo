import Header from "../_components/Header";

export default function Layout({ children }) {
  return (
    <main className="w-full">
      <Header />
      <div className="max-w-[90%] px-[48px] py-[48px] grid grid-cols-[1fr_1fr_1fr_300px] gap-12 mx-auto grid-rows-[repeat(3,_200px)]">
        {children}
      </div>
    </main>
  );
}
