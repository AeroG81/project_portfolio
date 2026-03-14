import type { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`relative py-24 px-6 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
