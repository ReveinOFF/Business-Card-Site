import { useMemo } from "react";

export default function Footer() {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer>
      <div className="footer mb-1 bg-zinc-800 rounded-t-lg grid grid-cols-3 justify-items-center">
        <div>
          <h3>TEMP</h3>
          <div></div>
          <div></div>
        </div>
        <div>
          <h3>REVIE</h3>
          <div></div>
          <div></div>
        </div>
        <div>
          <h3>КОНТАКТИ</h3>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="footer text-center bg-zinc-900 my-0">
        &#169; {year} Revie, all rights reserved
      </div>
    </footer>
  );
}
