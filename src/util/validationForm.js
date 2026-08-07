import * as Yup from 'yup'

const phoneRegExp = /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm

const validationForm = Yup.object().shape({
   name: Yup.string()
      .min(2, "* Nome muito curto!")
      .max(50, "* Nome muito longo!")
      .required("* Preenchimento obrigatório!"),
   email: Yup.string()
      .email("* Digite um e-mail válido!")
      .required("* Preenchimento obrigatório!"),
   phone: Yup.string()
      .matches(phoneRegExp, "* Digite um telefone válido!"),
})

export default validationForm