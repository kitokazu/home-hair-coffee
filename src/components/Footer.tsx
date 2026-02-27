"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-6 py-16 md:py-20">
      <div className="kraft-line mx-auto mb-16 max-w-xl" />

      <div className="mx-auto max-w-5xl text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/home-logo-transparent.png"
            alt="home — hair & coffee roaster"
            width={120}
            height={78}
            className="h-12 w-auto object-contain opacity-80"
          />
        </div>

        {/* Social links */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/home_hair_coffee/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted transition-colors hover:text-kraft"
            aria-label="Instagram"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://www.threads.com/@home_hair_coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted transition-colors hover:text-kraft"
            aria-label="Threads"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.17.408-2.266 1.33-3.084.88-.781 2.07-1.237 3.446-1.322 1.07-.066 2.067.043 2.981.287.022-.94-.075-1.79-.288-2.345-.352-.917-1.1-1.382-2.22-1.382h-.068c-.823.018-1.503.308-2.023.863l-1.39-1.449c.81-.858 1.9-1.32 3.237-1.456l.348-.006c1.821 0 3.178.768 3.833 2.15.413.872.623 1.958.636 3.223.004.163.003.327-.004.49.852.44 1.576 1.013 2.152 1.717.903 1.105 1.36 2.48 1.36 3.942.002 2.456-.992 4.636-2.882 6.316-1.94 1.724-4.493 2.627-7.385 2.612zm-1.2-8.816c-.645.04-1.173.2-1.572.477-.338.235-.52.534-.543.887-.032.476.213.905.69 1.214.56.363 1.3.549 2.198.502 1.077-.06 1.855-.44 2.382-1.165.306-.422.539-.96.69-1.601-.833-.275-1.771-.395-2.697-.395l-1.148.081z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-[10px] tracking-[0.2em] text-ink-muted/50">
          © 2026 home hair & coffee roaster
        </p>
      </div>
    </footer>
  );
}
