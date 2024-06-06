import Link from "next/link";

interface RouterButtonProps {
  children: string;
  to: string;
}

function RouterButton({ children, to }: RouterButtonProps) {
  return (
    <Link
      href={to}
      className="text-sm text-neutral-400 bg-white hover:bg-neutral-100 min-w-max w-min h-min px-1.5 py-0.5 rounded-lg"
    >
      {children}
    </Link>
  );
}

export default RouterButton;
