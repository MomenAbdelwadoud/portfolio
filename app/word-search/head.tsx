const TITLE = "العمل المؤسسي — ابحث عن الكلمات";
const DESCRIPTION =
  "لعبة بحث عن الكلمات: اثنتا عشرة كلمة عن العمل المؤسسي مخبأة في شبكة ١٢ × ١٢ أفقياً وعمودياً وقطرياً.";

export default function Head() {
  return (
    <>
      <title>{TITLE}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={DESCRIPTION} />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="theme-color" content="#fbf7ef" />
    </>
  );
}
