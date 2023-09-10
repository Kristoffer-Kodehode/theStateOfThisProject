function handleForm(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
}

export { handleForm };
