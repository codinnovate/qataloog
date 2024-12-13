import { useTranslations } from 'next-intl';

export function TopHeader({ title }: { title: string }) {
  const t = useTranslations('TopHeader'); // Access translations under the 'TopHeader' namespace

  return (
    <h1 className="mt-[48px] text-[39px] leading-[48px] font-bold text-grey-200">
      {t(title)}</h1>
  );
}
