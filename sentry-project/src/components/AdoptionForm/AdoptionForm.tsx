
import * as Sentry from "@sentry/react";

import * as Ariakit from "@ariakit/react";
import "./AdoptionForm.css";

export default function Example() {
  const form = Ariakit.useFormStore({ defaultValues: { name: "", email: "" } });

  form.useSubmit(async (state) => {
    alert(JSON.stringify(state.values));
    Sentry.captureException(new Error("3 - FORM error!"));
  });

  return (
    <Ariakit.Form
      store={form}
      aria-labelledby="add-new-participant"
      className="wrapper"
    >
      <h2 id="add-new-participant" className="heading">
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
      <div className="buttons">
        <Ariakit.FormReset className="button secondary reset">
          Reset
        </Ariakit.FormReset>
        <Ariakit.FormSubmit className="button">Add</Ariakit.FormSubmit>
      </div>
    </Ariakit.Form>
  );
}
