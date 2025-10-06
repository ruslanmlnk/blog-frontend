export default function ContactIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h1 className="text-[#151515] text-4xl md:text-[111px] font-bold uppercase leading-[76px]">{title}</h1>
      <p className="mt-5 md:mt-[74px] text-base md:text-[14px] text-[#767676] leading-[165%] tracking-[-0.4px] whitespace-pre-line">
        {description.replace(/\\n/g, '\n')}
      </p>
    </>
  );
}
