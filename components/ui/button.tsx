import { useTranslation } from "next-export-i18n";

export const Button = () => {
  const { t } = useTranslation();
  return (
    <a
      href="#register"
      className="px-6 sm:px-8 py-3 sm:py-4 text-2xl sm:text-4xl bg-default rounded-full"
    >
      {t("register")}
    </a>
  );
};
