/**
 * The ChangeName component in JavaScript React handles form submission and validation for updating a
 * name.
 * @returns The function `ChangeName` is returning a React component that includes a form for updating
 * a name. The form includes an input field for entering a name, a submit button for updating the name,
 * and an error message that is displayed if the name is not provided. The form submission is handled
 * by the `submitAction` function returned from the `useActionState` hook.
 */
import { useActionState } from "react";
export default function ChangeName() {
  const [error, submitAction, isPending] = useActionState(
    async (_prev, formData) => {
      const name = formData.get("name");
      if(!name) return <p style={{ color: "red" }}>Name is required!</p>;
      return name;
    },
    null,
  );

  return (
    <div >
      <h2>Action Example</h2>
      <form action={submitAction}>
        <label htmlFor="name">Name:  </label>
        <input type="text" name="name" aria-describedby="name-error"/>
        <button type="submit" disabled={isPending}>Update</button>
        {error && <p id="nameError" role="alert" aria-live="assertive">{error}</p>}
      </form>
    </div>
    
  );
}