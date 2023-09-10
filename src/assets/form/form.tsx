import { handleForm } from "./handleForm";

export default function Form() {
  return (
    <div className="container">
      <form action="post" onSubmit={handleForm}>
        <h1>Create New Account:</h1>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" id="" placeholder="password" />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}
