"use client";

import { buttonVariants } from "@/components/ui/button";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { Instagram, Mail, Link as LinkIcon, MessageCircle } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@pedro_rabelaispaisagismo",
    link: "https://www.instagram.com/pedro_rabelaispaisagismo",
  },
  {
    icon: LinkIcon,
    label: "Linktree",
    value: "linktr.ee/rabelaispaisagismo",
    link: "https://linktr.ee/rabelaispaisagismo?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4CGNhbGxzaXRlAjE1AAGneqDzLKbKe5vNcnX5RFveV6x9cCj0nXk1EB4UMlWy7_RXAzf5rVqM9NoMQpg_aem_Q2CiWDeT52cn7omTw2YGEA",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "rabelaispaisagismo@gmail.com",
    link: "mailto:rabelaispaisagismo@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(24) 98149-0629",
    link: "https://api.whatsapp.com/send/?phone=24981490629&text&type=phone_number&app_absent=0",
  },
];

export function ContactPage() {
  return (
    <div className="relative mx-auto my-10 flex flex-col items-center justify-center">
      <div className="px-4 pt-10 md:pt-20 max-w-7xl">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center display-01">
          {"Entre em contato".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto py-4 text-center body-paragraph"
        >
          Estamos prontos para transformar seus espaços em ambientes únicos e harmoniosos. Entre em contato conosco
          através de qualquer um dos canais abaixo e vamos conversar sobre o seu projeto.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 1.8,
          }}
          className="relative z-10 mt-12 w-full"
        >
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.8489067044847!2d-43.15824230674682!3d-22.42260022894058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI1JzIxLjQiUyA0M8KwMDknMjkuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Rabelais Paisagismo"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.2 + index * 0.1,
                }}
                className="flex items-center gap-4 p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">{contact.label}</span>
                  <span className="text-base font-semibold">{contact.value}</span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1.6,
          }}
          className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            className={buttonVariants({ variant: "default" })}
            href="https://api.whatsapp.com/send/?phone=24981490629&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </motion.div>

        <Separator className="bg-primary mt-20" />
      </div>
    </div>
  );
}
