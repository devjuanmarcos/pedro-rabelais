import { motion } from "motion/react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  description: string;
  role: string;
}

interface TestimonialProps {
  testimonials: Testimonial[];
}

export function TestimonialCard({ testimonial: { image, name, description, role } }: { testimonial: Testimonial }) {
  return (
    <div
      className="flex h-16 w-96 shrink-0 overflow-hidden rounded-md border bg-background dark:border-zinc-700 mx-2"
      key={name}
    >
      <div className="relative h-full w-16 flex-shrink-0 overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="px-3 py-2 flex flex-col justify-center">
        <span className="block text-sm font-medium text-foreground truncate">{name}</span>
        <span className="block text-xs text-muted-foreground truncate">{role}</span>
      </div>
    </div>
  );
}

export function TestimonialRow({
  testimonials,
  direction = "left",
  speed = 2,
}: {
  testimonials: Testimonial[];
  direction?: "left" | "right";
  speed?: number;
}) {
  // Calcular a largura total necessária do carrossel
  const cardWidth = 384; // largura aproximada de cada card com margem (w-96 = 24rem = 384px)
  const totalWidth = testimonials.length * cardWidth;

  // Duplicar os depoimentos para evitar lacunas
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative flex w-full overflow-hidden py-3 h-[5rem]">
      <div className="flex absolute" style={{ width: `${totalWidth * 3}px` }}>
        <motion.div
          className="flex"
          initial={{ x: direction === "left" ? 0 : -totalWidth }}
          animate={{
            x: direction === "left" ? -totalWidth * 2 : 0,
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: totalWidth / (20 * speed), // Duração baseada na largura total para movimento consistente
              ease: "linear",
              repeatDelay: 0,
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function TestimonialGrid({ testimonials }: TestimonialProps) {
  // Dividir os depoimentos em 3 linhas
  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4, 8);
  const thirdRow = testimonials.slice(8, 12);

  return (
    <div className="flex flex-col w-full gap-4 py-10">
      <TestimonialRow testimonials={firstRow} direction="right" speed={1.5} />
      <TestimonialRow testimonials={secondRow} direction="left" speed={1} />
      <TestimonialRow testimonials={thirdRow} direction="right" speed={0.8} />
    </div>
  );
}
