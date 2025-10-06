import Link from "next/link";

export default function BlocksPagination({
  page,
  totalPages,
  hrefFor,
}: {
  page: number;
  totalPages: number;
  hrefFor: (p: number) => string;
}) {
  if (totalPages <= 1) return null;

  const prev = page > 1 ? page - 1 : null;
  const next = page < totalPages ? page + 1 : null;

  return (
    <div className="h-[56px] mt-[140px] flex items-center justify-between border border-[#E0E0E0] rounded-[10px] items-center px-[28.65px]">
      {prev ? (
        <Link
          href={hrefFor(prev)}
          className="font-bold text-[17px] leading-[160%] text-[#151515]"
        >
          Назад
        </Link>
      ) : (
        <span />
      )}
      <div className="mx-auto font-bold  text-[17px] text-[#151515]">
        {page} / {totalPages}
      </div>
      {next && (
        <Link
          href={hrefFor(next)}
          className="font-bold text-[17px] leading-[160%] text-[#151515]"
        >
          Далее
        </Link>
      )}
    </div>
  );
}
