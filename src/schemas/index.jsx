import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz.")
    .required("Email alanı zorunludur."),
  age: yup
    .number()
    .positive("Yaşınız negatif olamaz.")
    .integer("Yaşınız tam sayı olmalı.")
    .required("Yaş alanı zorunludur."),
  password: yup
    .string()
    .min(5, "Şifreniz min 5 karakter olmalıdır.")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz.",
    })
    .required("Şifre alanı zorunludur."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor.")
    .required("Tekrar şifre girmek zorunludur."),
});

export const advanceSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı Min 3 karakter uzunluğunda olmalıdır.")
    .required("Kullanıcı adı alanı zorunludur."),
  university: yup
    .string()
    .oneOf(
      ["bogazici", "odtü", "itü", "gazi"],
      "Lütfen üniversitenizi seçiniz."
    )
    .required("Lütfen üniversitenizi seçiniz."),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz."),
});
