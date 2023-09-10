function handleForm(e: Event) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
}

export { handleForm };
