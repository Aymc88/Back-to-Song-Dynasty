import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Back to the Song Dynasty — A 10th Grade World History Project",
  description:
    "A 2026 high-school student wakes up in Bianjing, capital of the Northern Song, with three objects from the future. A narrative thought-experiment for English-language World History.",
  openGraph: {
    title: "Back to the Song Dynasty",
    description:
      "Three artifacts from 2026 arrive in Emperor Huizong's capital. What changes?",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-parchment/85 border-b border-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="seal group-hover:rotate-0 transition-transform duration-300">宋</span>
          <span className="font-display text-xl text-ink leading-tight">
            <span className="block">Back to the Song Dynasty</span>
            <span className="block text-base text-muted/70">Amanda Chen</span>
            <span className="block text-xs text-muted italic">
              A World History thought experiment
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-inkSoft">
          <Link href="/" className="brush-link">Home</Link>
          <Link href="/artifacts" className="brush-link">The Three Artifacts</Link>
          <Link href="/chapter/the-scroll" className="brush-link">Read the Story</Link>
          <Link href="/about" className="brush-link">About This Project</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-muted/30 bg-parchmentDark/40">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-sm text-inkSoft">
        <div>
          <div className="font-display text-lg text-ink mb-2">
            Back to the Song Dynasty
          </div>
          <p className="italic text-muted">
            A 10th grade English-language World History project on the Northern
            Song under Emperor Huizong (Xuanhe era, 1119–1125 CE), the world of
            Zhang Zeduan&apos;s <em>Along the River During the Qingming Festival</em>.
          </p>
        </div>
        <div>
          <div className="font-medium mb-2 text-ink">Read</div>
          <ul className="space-y-1">
            <li><Link href="/chapter/the-scroll" className="brush-link">1. The Scroll</Link></li>
            <li><Link href="/chapter/bianjing" className="brush-link">2. Bianjing, Under a Stranger Sky</Link></li>
            <li><Link href="/chapter/three-gifts" className="brush-link">3. Three Gifts From the Future</Link></li>
            <li><Link href="/chapter/reflections" className="brush-link">8. Reflections</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2 text-ink">Acknowledgments</div>
          <p className="italic text-muted">
            Built with Next.js and Tailwind CSS, deployed on Vercel. Includes a
            companion MCP Server so Claude can role-play characters from the story.
            All historical details are drawn from open academic sources on the Northern Song.
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-muted pb-6">
        &copy; {new Date().getFullYear()} · A student project. Educational use.
      </div>
    </footer>
  );
}
