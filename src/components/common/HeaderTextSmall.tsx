interface HeaderTextSmallProps {
  children: string;
}

function HeaderTextSmall({ children }: HeaderTextSmallProps) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

export default HeaderTextSmall;
