import React from "react";
import { render } from "react-dom";
import { Form, Field } from "react-final-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 3));
};

const required = value => (value ? undefined : "Required");
const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const ContactForm = () => (
    
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name" validate={required}>
            {({ input, meta }) => (
              <div className="form-group">
                <label>Nombre</label>
                <input className="form-control" {...input} type="text" placeholder="Nombre" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email" validate={required}>
            {({ input, meta }) => (
              <div className="form-group">
                <label>Email</label>
                <input className="form-control" {...input} type="email" placeholder="email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="phone" validate={required}>
            {({ input, meta }) => (
              <div className="form-group">
                <label>Teléfono</label>
                <input className="form-control" {...input} type="text" placeholder="Teléfono" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="form-group">
            <label>Consulta</label>
            <Field className="form-control" name="message" component="textarea" placeholder="Consulta" />
          </div>
          <div className="form-group buttons">
            <button class="btn btn-primary btn-block" type="submit" disabled={submitting}>
              Enviar
            </button>
            
          </div>
        </form>
      )}
    />
);

export default ContactForm
