import css from './ContactForm.module.css';

export const ContactForm = ({ type, name, pattern, title }) => {
  return (
    <form className={css.list}>
      <label>Text:
        <input
          type={type}
          name={name}
          pattern={pattern}
          title={title}
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
