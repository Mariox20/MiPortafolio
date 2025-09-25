// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white/60">
          © {new Date().getFullYear()} Mario Aguilera. Desarrollado con Next.js y Framer Motion.
        </p>
      </div>
    </footer>
  );
}
