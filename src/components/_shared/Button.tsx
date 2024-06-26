import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  customClass?: string;
};

export function Button({ href, children, customClass }: ButtonProps) {
  return (
    <div>
      <Link
        href={href}
        className={
          customClass
            ? customClass
            : "inline-block px-4 py-2 mr-2 text-sm bg-gray-700 text-white rounded-md"
        }
      >
        {children}
      </Link>
    </div>
  );
}
