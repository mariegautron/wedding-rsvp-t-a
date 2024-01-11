export function handleMouseEnter(e: React.MouseEvent<HTMLElement>) {
  const target = e.target as HTMLButtonElement | HTMLAnchorElement;
  target.style.transform = "scale(1.01)";
}

export function handleMouseLeave(e: React.MouseEvent<HTMLElement>) {
  const target = e.target as HTMLButtonElement | HTMLAnchorElement;
  target.style.transform = "scale(1)";
}
