import { Form, Formik } from 'formik'
import { advanceSchema } from '../schemas';
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  actions.resetForm()
}

const AdvanceForm = () => {
  return (

    <Formik
      initialValues={{ username: '', jobType: '', acceptedTos: false }}
      validationSchema={advanceSchema}
      onSubmit={onSubmit}
    >

      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label='username'
            name='username'
            type='text'
            placeholder='Please enter your username'
          />
          {console.log('isSubmitting: ', isSubmitting)}
          <CustomSelect
            label='Job Type'
            name='jobType'
            placeholder='Please Select a job'
          >
            <option value=''>Please Select a job type</option>
            <option value='developer'>Developer</option>
            <option value='designer'>Designer</option>
            <option value='manager'>Manager</option>
            <option value='other'>Other</option>
          </CustomSelect>

          <CustomCheckbox
            type='checkbox' name='acceptedTos'
          />

          <button disabled={isSubmitting} type='submit'>Submit</button>
        </Form>
      )}

    </Formik>
  )
}

export default AdvanceForm;

