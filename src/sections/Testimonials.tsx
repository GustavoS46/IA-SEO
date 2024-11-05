"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“Este produto simplificou completamente como eu gerencio meus projetos e encurtou o prazos de entrega”",
    name: "Sophia Perez",
    title: "Diretora @ Marketing",
    avatarImg: avatar1,
  },
  {
    text: "“Essas ferramentas de IA revolucionaram completamente toda a nossa estratégia de SEO durante a noite”",
    name: "Marcos Paulo",
    title: "Fundador @ Dono",
    avatarImg: avatar2,
  },
  {
    text: "“A interface do usuário é tão intuitiva e fácil de usar, ele nos salvou inúmeras vezes",
    name: "Elisa Mária",
    title: "Gerente @ Inovações",
    avatarImg: avatar3,
  },
  {
    text: "“A produtividade de nossa equipe aumentou significativamente desde que começamos a usar esta ferramenta”",
    name: "Alex Sivla",
    title: "CTO @ Tecnologia",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
          Além das expectativas.
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
          Nossas ferramentas revolucionárias de SEO de IA transformaram nossos clientes.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex flex-none gap-5 pr-5 -translate-x-1/2"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none"
              >
                {/* Testimonial text on top */}
                <div className="text-lg tracking-tight md:text-2xl mb-4">{testimonial.text}</div>

                {/* Flex container for image, name and title */}
                <div className="flex items-center gap-4">
                  {/* Image container */}
                  <div className="relative">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar para ${testimonial.name}`}
                      className="h-16 w-16 rounded-lg"
                    />
                  </div>
                  {/* Name and Title */}
                  <div className="text-white font-semibold">
                    <div>{testimonial.name}</div>
                    <div className="text-white/50 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
