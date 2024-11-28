import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-3 text-sm md:text-lg">
      <Link
      className="flex items-center gap-1 text-current"
      href="/"
      title="NETWITX Official website">
        <span>© 2024 Made by</span>
        <p className="text-primary"> NETWITX</p>
      </Link>
    </footer>
  );
}