function handleForm(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.target;
  const formData =
    /*new FormData(form);*/
    { username: username.value, email: target.email.value, password: target.password.value };

  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
}

export { handleForm };
