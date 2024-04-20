import Link from "next/link";

const linkNavigation = [
  { name: "Organizations", href: "/orgs/" },
  { name: "Collections", href: "/search/?i=collections" },
  { name: "Documents", href: "/artifacts/" },
  { name: "Lists", href: "/lists/" },
  { name: "Topics", href: "/topics/" },
  { name: "Modules", href: "/modules/" },
];

export function LinkBlock() {
  return (
    <div className='text-sm'>
      {linkNavigation.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className='block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-800 mr-4'
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
