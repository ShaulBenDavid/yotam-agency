export const isNavLinkActive = (pathname: string, href: string): boolean => {
  const path = `/${href}`;
  return pathname === path || pathname.startsWith(`${path}/`);
};
