import BlogOverlayHero from "@/app/components/blog/BlogOverlayHero";
import BlogOverlayPair from "@/app/components/blog/BlogOverlayPair";
import BlogCardGrid from "@/app/components/blog/BlogCardGrid";
import CategoriesChips from "@/app/components/blog/CategoriesChips";
import { fetchPressOutlets } from "@/fetch/pressOutlets.fetch";

export default async function Press({
  searchParams,
}: { searchParams: { source?: string | string[] } }) {
  const outlets = await fetchPressOutlets();
  const selected = Array.isArray(searchParams?.source) ? searchParams.source[0] : searchParams?.source ?? null;

  return (
    <main className="text-neutral-900">
      {/* Media outlets chips */}
      <CategoriesChips
        selectedId={selected ?? undefined}
        items={outlets.map((o: any) => ({ id: o.id, title: o.name }))}
        hrefFor={(id) => `/press?source=${encodeURIComponent(String(id))}`}
        backHref="/press"
        backLabel="Усі джерела"
      />

      <div className="site-container py-10 md:py-12">
        {/* Page title */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">Преса</h1>

        {/* Hero feature (placeholder) */}
        <div className="mb-8">
          <BlogOverlayHero
            item={{
              href: "#",
              image:
                "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop",
              dateLabel: "Джерело: Sample",
              title: "Sample headline",
              subtitle:
                "Short description for the featured press item.",
            }}
          />
        </div>

        {/* 3-column grid (placeholder) */}
        <div>
          <BlogCardGrid
            items={[
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop',
                avatar: 'https://i.ibb.co/WwyW9mN/8ab00d26a5803d2c15850d749c18ad08011a7ce7.png',
                sourceLabel: 'Джерело: The Insider',
                dateLabel: '10 січня 2025',
                title: 'Приклад заголовка для картки',
                description: 'Короткий опис матеріалу...'
              },
              {
                href: '#',
                image: 'https://images.unsplash.com/graphic-design/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
                avatar: 'https://i.ibb.co/WwyW9mN/8ab00d26a5803d2c15850d749c18ad08011a7ce7.png',
                sourceLabel: 'Джерело: The Insider',
                dateLabel: '10 січня 2025',
                title: 'Заголовок іншої картки',
                description: 'Короткий опис матеріалу...'
              },
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
                avatar: 'https://i.ibb.co/WwyW9mN/8ab00d26a5803d2c15850d749c18ad08011a7ce7.png',
                sourceLabel: 'Джерело: The Insider',
                dateLabel: '10 січня 2025',
                title: 'Ще один приклад заголовка',
                description: 'Короткий опис матеріалу...'
              },
            ]}
          />
        </div>

        {/* Two overlay features (placeholder) */}
        <div className="mt-10">
          <BlogOverlayPair
            items={[
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=1600&auto=format&fit=crop',
                dateLabel: 'Джерело: The Insider',
                title: 'Приклад великої картки з заголовком',
              },
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1600&auto=format&fit=crop',
                dateLabel: 'Джерело: The Insider',
                title: 'Ще один приклад картки',
              },
            ]}
          />
        </div>

        {/* Bottom hero (placeholder) */}
        <div className="mt-12">
          <BlogOverlayHero
            item={{
              href: '#',
              image:
                'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop',
              dateLabel: 'Джерело: Sample',
              title: 'Sample feature',
              subtitle: 'Опис для демо-матеріалу',
            }}
          />
        </div>
      </div>
    </main>
  );
}

