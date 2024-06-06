interface HeaderTextLargeProps {
  children: string;
}

function HeaderTextLarge({ children }: HeaderTextLargeProps) {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
}

export default HeaderTextLarge;
