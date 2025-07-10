import { Search, Table } from "@/components";
import AdvocatesContextProvider from "@/providers/AdvocatesContextProvider";

export default function Home() {
  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <AdvocatesContextProvider>
        <section>
          <Search />
          <br />
          <br />
          <Table />
        </section>
      </AdvocatesContextProvider>
    </main>
  );
}
