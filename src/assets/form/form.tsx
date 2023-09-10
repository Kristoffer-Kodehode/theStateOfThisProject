//import { handleForm } from "./handleForm";

export default function Form() {
  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    interface formData {
      username: string;
      password: string;
    }

    const formData = new FormData(form);
    /* {
         username: form.username.value,
         password: form.password.value,
       };*/

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <div className="container">
      <form action="post" onSubmit={handleForm}>
        <h1>Create New Account:</h1>
        <div className="field">
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" /*placeholder="username"*/ />
        </div>
        <div className="field">
          <label htmlFor="password">username</label>
          <input type="text" name="password" id="password" /*placeholder="username"*/ />
        </div>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}
