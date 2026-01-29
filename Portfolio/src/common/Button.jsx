import css from "./Common.module.css";

function Button({ children, onClick, link, id }) {
  return (
    <button
      id={id}
      className={css.buttonPushable}
      role="button"
      onClick={onClick}
    >
      <span className={css.buttonShadow}></span>
      <span className={css.buttonEdge}></span>
      <a className={css.buttonFront} href={link}>
        {children}
      </a>
    </button>
  );
}
export default Button;
