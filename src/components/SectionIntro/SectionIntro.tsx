type SectionIntroProps = {
  eyebrow: string
  title: string
  copy?: string
}

export function SectionIntro({ eyebrow, title, copy }: SectionIntroProps) {
  return (
    <header>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </header>
  )
}
