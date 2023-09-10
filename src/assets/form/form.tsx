import { handleForm } from "./handleForm";

export default function Form() {
  return (
    <div className="container">
      <form action="post" onSubmit={handleForm}>
        <h1>Create New Account:</h1>
        <div className="field">
          <label htmlFor="username">username: </label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="field">
          <label htmlFor="password">password: </label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}
