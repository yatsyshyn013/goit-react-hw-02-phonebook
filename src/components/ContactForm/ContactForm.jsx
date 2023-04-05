import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid'
import { LabelText, ButtonForm, Label, FormComponent } from './ContactForm.styled';

export function ContactForm({ contacts, onAddContactBtn }) {
   

    const initialValues = {
    //   contacts: [],
        name: '',
        number: '',
    }

    const schema = yup.object().shape({
        name: yup.string().required(),
        number: yup.string().required()
    })

    function handleSubmit(values, {resetForm}) {
        // console.log(values);
        
        const data = {
            id: nanoid(),
            name: values.name,
            number: values.number,
            
        }

        const isDuplicate = contacts.some( contact => contact.name.toLowerCase() === data.name.toLowerCase()
        )

        if (isDuplicate) {
            alert(`${data.name} is already in contacts`)
            
        } else {
            
           onAddContactBtn(data);
            resetForm();
        }
       

        // console.log(data);

        


   
        
               
        
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >
          <FormComponent action="">
            <Label htmlFor="name">
              <LabelText>Name</LabelText>
                    <Field 
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                          />
                </Label>
                
                <Label htmlFor="number">
                   <LabelText>Number</LabelText> 
                    <Field
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    
                    </Label>
            <ButtonForm type="submit">Add contact</ButtonForm>
          </FormComponent>
      </Formik>
   )
} 

// onClick={() => onAddContactBtn(data)}
