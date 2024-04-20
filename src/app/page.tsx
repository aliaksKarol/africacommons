import Article from "@/components/Article/Article";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { Filter } from "@/components/FilterSection/FilterSection";

export default function Home() {
  return (
    <main className='pt-0 p-5  mx-auto lg:max-w-1140'>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/collections/" },
          {
            label: "Series",
            href: "/search/?i=collections&collection_type=series%3ASeries",
          },
          { label: "Drum Publications", href: "/orgs/drum-publications/" },
          { label: "Drum Magazine" },
        ]}
      />
      <Article />
      <Filter />
    </main>
  );
}
