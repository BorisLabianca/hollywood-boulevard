const Footer = () => {
  return (
    <div
      className="footer-main"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        boxSizing: "border-box",
        borderTop: "1px solid lightgray",
      }}
    >
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
