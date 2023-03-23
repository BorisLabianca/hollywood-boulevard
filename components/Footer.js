const Footer = () => {
  return (
    <div className="footer-main flex justify-center items-center h-[50px] box-border border-t border-t-solid border-gray-300 md:text-base text-sm">
      <div>
        Made with{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js
        </a>{" "}
        at{" "}
        <a href="https://www.lereacteur.io/" target="_blank" rel="noreferrer">
          LeReacteur
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/boris-labianca-01a52871/"
          target="_blank"
          rel="noreferrer"
        >
          Boris Labianca
        </a>
      </div>
    </div>
  );
};

export default Footer;
