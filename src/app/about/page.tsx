import AboutHero from "@/app/components/about/AboutHero";
import AboutIntro from "@/app/components/about/AboutIntro";
import fetchAbout from "@/fetch/about.fetch";

export default async function AboutPage() {
  const about = await fetchAbout();

  return (
    <main className="max-w-[1318px] mx-auto px-4 py-8 md:py-[74px_20px] text-neutral-900">
      <AboutHero image={about?.heroImage ?? null} />
      <AboutIntro lead={about?.lead ?? ""} items={about?.cards ?? []} />
    </main>
  );
}

