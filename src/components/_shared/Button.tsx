import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  customClass?: string;
};

export function Button({ href, children }: ButtonProps) {
  return (
    <div>
      <Link
        href={href}
        className='
        inline-block
        px-4
        py-2
        mr-2
        text-sm
        bg-gray-500
        text-white
        rounded-md
      '
      >
        {children}
      </Link>
    </div>
  );
}
