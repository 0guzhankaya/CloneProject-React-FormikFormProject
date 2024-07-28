import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advanceSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advanceSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı giriniz."
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Lütfen üniversitenizi seçiniz."
            >
              <option value="">Lütfen üniversitenizi seçiniz.</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="odtü">Orta Doğu Teknik Üniversitesi</option>
              <option value="itü">İstanbul Teknik Üniversitesi</option>
              <option value="gazi">Gazi Üniversitesi</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              KAYDET
            </button>
            <Link className="formLink" to="/">
              Ana Forma Git
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
