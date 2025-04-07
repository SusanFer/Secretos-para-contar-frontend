import BookList from "../home/BookList";
import Layout from "~/components/Layout";

export default function LibrosRoute() {
  return (
    <Layout>
      <div className="container mx-auto py-8 pt-20">
        <BookList />
      </div>
    </Layout>
  );
}
