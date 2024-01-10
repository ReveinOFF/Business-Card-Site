import { useMemo } from "react";

export default function Footer() {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer>
      <div></div>
      <div>&#169; {year} Revie, все права защищены</div>
    </footer>
  );
}
