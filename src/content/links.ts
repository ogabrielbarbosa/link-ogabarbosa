// Tudo o que aparece na página fica aqui. Para adicionar um link, é só incluir um item em LINKS.

export type ContactIcon = "linkedin" | "instagram" | "github" | "whatsapp" | "email";

export interface Contact {
  icon: ContactIcon;
  label: string;
  value: string;
  href: string;
}

export interface LinkItem {
  title: string;
  description?: string;
  // Logo quadrado à esquerda (arquivo em public/).
  logo?: string;
  // Sem href = ainda não está no ar: aparece apagado com "em breve".
  href?: string;
}

export const PROFILE = {
  name: "Gabriel Barbosa",
  handle: "ogabarbosa",
  role: "AI Engineer & Product Builder.",
  bio: "Construo produtos com IA que geram resultado de negócio.",
  photoAlt: "Foto de Gabriel Barbosa",
};

export const SITE_URL = "https://link.ogabarbosa.com";

// Botão principal, logo abaixo do nome.
export const CTA = {
  label: "Vem de zap",
  href: "https://wa.me/message/AFEFSOLS3Y3DC1",
};

// Ordem = ordem dos ícones abaixo do botão. O WhatsApp fica só no botão principal.
export const CONTACTS: Contact[] = [
  { icon: "instagram", label: "instagram", value: "@ogabarbosa", href: "https://www.instagram.com/ogabarbosa/" },
  { icon: "linkedin", label: "linkedin", value: "in/ogabarbosa", href: "https://www.linkedin.com/in/ogabarbosa/" },
  { icon: "email", label: "email", value: "contato@ogabarbosa.com", href: "mailto:contato@ogabarbosa.com" },
  { icon: "github", label: "github", value: "ogabrielbarbosa", href: "https://github.com/ogabrielbarbosa" },
];

export const LINKS: LinkItem[] = [
  {
    title: "Portfólio",
    description: "Minha história e meus projetos.",
    logo: "/logos/portfolio.png",
    href: "https://ogabarbosa.com",
  },
  {
    title: "Contrate meu serviço",
    description: "Sharken, software house especializada em negócios.",
    logo: "/logos/sharken.svg",
    href: "https://www.sharken.com.br",
  },
  {
    title: "Artify",
    description: "Geração de conteúdo com IA.",
    logo: "/logos/artify.png",
  },
];
