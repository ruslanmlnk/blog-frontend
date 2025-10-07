import BlogOverlayHero from "@/app/components/blog/BlogOverlayHero";
import BlogCardGrid from "@/app/components/blog/BlogCardGrid";

export default function InterviewPage() {
  return (
    <main className="text-neutral-900">
      {/* Blue filter bar */}
      <div className="bg-[#0B4CC0]">
        <div className="site-container py-4 flex flex-wrap items-center gap-3 text-white">
          <button className="inline-flex items-center gap-2 text-sm font-semibold">
            <span className="text-lg">All</span>
            All interviews
          </button>
          <div className="flex items-center gap-3 ml-auto">
            {['Video','Podcast','Live','Analytics'].map((l, i)=> (
              <span key={i} className="inline-flex items-center h-9 rounded-lg bg-white/10 text-white font-semibold px-3 text-sm">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="site-container py-10 md:py-12">
        {/* Title */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">Interviews</h1>

        {/* Top hero */}
        <div className="mb-8">
          <BlogOverlayHero
            item={{
              href: "#",
              image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop",
              dateLabel: "Interview: Sample",
              title: "Sample interview headline",
              subtitle: "Short teaser for the interview.",
            }}
          />
        </div>

        {/* Row of interview cards (3) */}
        <BlogCardGrid
          items={[
            {
              href: '#',
              image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
              title: 'Interview sample card 1',
              dateLabel: 'СМИ: Радио Свобода',
              description: 'Short description of the interview...'
            },
            {
              href: '#',
              image: 'https://images.unsplash.com/photo-1517512006864-0b19df9a83f9?q=80&w=1600&auto=format&fit=crop',
              title: 'Interview sample card 2',
              dateLabel: 'СМИ: Радио Свобода',
              description: 'Short description of the interview...'
            },
            {
              href: '#',
              image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop',
              title: 'Interview sample card 3',
              dateLabel: 'СМИ: Радио Свобода',
              description: 'Short description of the interview...'
            },
          ]}
          isInterview
        />

        {/* Mid hero */}
        <div className="mt-10">
          <BlogOverlayHero
            item={{
              href: '#',
              image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop',
              dateLabel: 'Interview: Sample',
              title: 'Second interview hero',
              subtitle: 'Additional teaser for the mid hero.',
            }}
          />
        </div>

        {/* Bottom row of cards */}
        <div className="mt-10">
          <BlogCardGrid
            items={[
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop',
                title: 'Interview example 4',
                dateLabel: 'Jan 07, 2025',
                description: 'Another short description...'
              },
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1517512006864-0b19df9a83f9?q=80&w=1600&auto=format&fit=crop',
                title: 'Interview example 5',
                dateLabel: 'Jan 07, 2025',
                description: 'Another short description...'
              },
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
                title: 'Interview example 6',
                dateLabel: 'Jan 07, 2025',
                description: 'Another short description...'
              },
            ]}
            isInterview
          />
        </div>
      </div>
    </main>
  );
}

