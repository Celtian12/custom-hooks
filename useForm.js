import { useState } from "react";


export const useForm = (intialForm = {}) => {
    const [SimpleForm, setSimpleForm] = useState(intialForm);

    const onInputChange = function({target}) {
        const {name, value} = target;
        setSimpleForm({
             ... SimpleForm,
             [name]: value
            // userName: value,
            // eMail: value
        })
    }
    const resetValueForm = function() {
        setSimpleForm(intialForm)
    }
  return (
    {
        SimpleForm,
        onInputChange,
        resetValueForm
    }
  )
}
