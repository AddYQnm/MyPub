
type IntroSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function IntroSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: IntroSectionProps) {
  return (
    <section className="below-hero" id={id}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </section>
  );
}
