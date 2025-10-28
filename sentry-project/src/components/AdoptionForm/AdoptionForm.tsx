

import * as Ariakit from "@ariakit/react";
import "./AdoptionForm.css";
import { useDispatch } from "react-redux";
import { addNewProfile } from "../../features/profile/profileSlice";

export default function Example() {
  const form = Ariakit.useFormStore({ defaultValues: { name: "", email: "" } });

  const dispatch = useDispatch()

  form.useSubmit(async (state) => {
    alert(JSON.stringify(state.values));
    // dispatch the new profile using the submitted name value (coerce to string)
    dispatch(addNewProfile(String(state.values.name)));
  });

  return (
    <Ariakit.Form
      store={form}
      aria-labelledby="add-new-participant"
      className="wrapper"

    > <h2 id="add-new-participant" className="heading">
        Fill the form for adoption
      </h2>
      <div className="field">
        <Ariakit.FormLabel name={form.names.name}>Name</Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.name}
          placeholder="Priscila Flores"
          className="input"
          required
        />
        <Ariakit.FormError name={form.names.name} className="error" />
      </div>
      <div className="field">
        <Ariakit.FormLabel name={form.names.email}>Email</Ariakit.FormLabel>
        <Ariakit.FormInput
          type="text"
          name={form.names.email}
          placeholder="priscilaflores@example.com"
          className="input"
          required
        />
        <Ariakit.FormError name={form.names.email} className="error" />
      </div>
      {/* <div className="buttons">
        <Ariakit.FormReset className="button secondary reset">
          <Ariakit.FormSubmit className="button">Add</Ariakit.FormSubmit>
        </Ariakit.FormReset>
        <Ariakit.FormSubmit className="button">Add</Ariakit.FormSubmit>
      </div> */}
      <button
        onClick={() => dispatch(addNewProfile(String(form.names.name)))}
      >Submit Profile</button>
    </Ariakit.Form>
  );
}
