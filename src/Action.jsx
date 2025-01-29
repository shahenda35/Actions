import { useActionState } from "react";
import { redirect } from "react-router-dom";
export default function ChangeName() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const name = formData.get("name");
      if(!name) return "Name is required";
      redirect("/path");
      return name;
    },
    null,
  );

  return (
    <form action={submitAction}>
       <label htmlFor="name">Name:  </label>
      <input type="text" name="name" aria-describedby="name-error"/>
      <button type="submit" disabled={isPending}>Update</button>
      {error && <p id="nameError" role="alert" aria-live="assertive">{error}</p>}
    </form>
  );
}