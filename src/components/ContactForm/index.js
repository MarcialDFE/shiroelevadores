import React, { useState } from "react"
import axios from "axios"
import { Formik } from "formik"
import validationForm from "../../util/validationForm"

import { 
   WrapForm,
   InputItem,
   FieldItem,
   MsgErrorField,
   MsgSend,
   TextAreaItem,
   Button } from "./styles";

const ContactForm = () => {

   const [serverRes, setServerRes] = useState()
   const handleServerRes = (ok, message) => {
      setServerRes({ok, message})
   }

   const handleSubmit = (values, actions) => {
      axios({
         method: 'POST',
         url: "https://formspree.io/xeqkvdvp",
         data: values
      })
         .then(response => {
            actions.setSubmitting(false)
            actions.resetForm()
            handleServerRes(true, "Mensagem enviada com sucesso!")
         })
         .catch(error => {
            actions.setSubmitting(false)
            handleServerRes(false, `Ops! Erro: ${error.response.data.error}`)
         })
   }
   
   return (
      <Formik 
         initialValues={{
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
         }}
         validationSchema={validationForm}
         onSubmit={handleSubmit}
         render={({
            touched,
            errors,
            isSubmitting,
            handleSubmit,
         }) => (
            <WrapForm 
               id="contact-form"
               onSubmit={handleSubmit}
            >
               <input 
                  type="hidden" 
                  name="_cc" 
                  value="mrgempdig@gmail.com" 
               />
               <input 
                  type="hidden" 
                  name="_subject" 
                  value="Mensagem recebido pelo formulário de contato do site" 
               />
               <InputItem>
                  <FieldItem 
                     id="name" 
                     name="name"
                     type="text" 
                     placeholder="Nome" 
                  />
                  <MsgErrorField name="name" component="p" />
               </InputItem> 
               <InputItem>
                  <FieldItem
                     id="company" 
                     name="company" 
                     type="text" 
                     placeholder="Empresa" 
                  />
               </InputItem>
               <InputItem>
                  <FieldItem
                     id="email"
                     name="email" 
                     type="email" 
                     placeholder="E-mail"
                  />
                  <MsgErrorField name="email" component="p" />
               </InputItem>
               <InputItem>
                  <FieldItem
                     id="phone"
                     name="phone"  
                     type="text" 
                     placeholder="Telefone"
                  />
                  <MsgErrorField name="phone" component="p" />
               </InputItem>
               <TextAreaItem>
                  <FieldItem
                     id="message" 
                     name="message" 
                     rows="3" 
                     placeholder="Deixe sua mensagem."
                     component="textarea"
                  />
                  <MsgErrorField 
                     name="message" 
                     component="p" 
                  />
               </TextAreaItem>
               <Button type="submit">Enviar</Button>
               {serverRes && (
                  <MsgSend className={!serverRes.ok ? "-msgerr" : "-msgok"}>
                     {serverRes.message}
                  </MsgSend>  
               )}
            </WrapForm>   
         )}
      />
   )
}

export default ContactForm