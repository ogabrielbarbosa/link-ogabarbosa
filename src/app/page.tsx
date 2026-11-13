import Image from "next/image";
import photo from "@/assets/gabriel.jpeg";
import { Logo } from "@/components/Logos";
import { CONTACTS, CTA, LINKS, PROFILE, type LinkItem } from "@/content/links";

const external = (href: string) => href.startsWith("http");

function LinkRow({ item }: { item: LinkItem }) {
  const body = (
    <>
      {item.logo && <Image className="mark" src={item.logo} alt="" width={64} height={64} />}
      <span className="text">
        <span className="title">{item.title}</span>
        {item.description && <span className="desc">{item.description}</span>}
      </span>
      <span className="go" aria-hidden="true">
        {item.href ? "↗" : "em breve"}
      </span>
    </>
  );

  if (!item.href) return <li className="soon">{body}</li>;

  return (
    <li>
      <a href={item.href} {...(external(item.href) && { target: "_blank", rel: "noopener noreferrer" })}>
        {body}
      </a>
    </li>
  );
}

export default function Page() {
  return (
    <div className="wrap">
      <main>
        <header className="hero">
          <Image className="avatar" src={photo} alt={PROFILE.photoAlt} width={112} height={112} priority />
          <p className="handle">{PROFILE.handle}</p>
          <h1>{PROFILE.name}</h1>
          <p className="lede">
            <strong>{PROFILE.role}</strong> {PROFILE.bio}
          </p>

          <a className="cta" href={CTA.href} target="_blank" rel="noopener noreferrer">
            <Logo icon="whatsapp" size={16} />
            {CTA.label}
          </a>

          <nav className="socials" aria-label="Contato">
            {CONTACTS.map((c) => (
              <a
                key={c.icon}
                href={c.href}
                rel="me noopener noreferrer"
                target={external(c.href) ? "_blank" : undefined}
                aria-label={`${c.label}: ${c.value}`}
                title={c.value}
              >
                <Logo icon={c.icon} />
              </a>
            ))}
          </nav>
        </header>

        <h2>links</h2>
        <ul className="list">
          {LINKS.map((item) => (
            <LinkRow key={item.title} item={item} />
          ))}
        </ul>
      </main>

      <footer className="site">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span className="status">
          <span className="dot" aria-hidden="true" />
          online
        </span>
      </footer>
    </div>
  );
}
