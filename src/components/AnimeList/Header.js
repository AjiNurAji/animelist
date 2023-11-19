import Link from "next/link";

const Header = ({ title, linkHref, linkTilte }) => {
  return (
    <div className="p-4 flex justify-between">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {linkHref && linkTilte ? (
        <Link
          href={linkHref}
          className="text-xl underline hover:text-color-accent text-color-primary transition-all"
        >
          {linkTilte}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
