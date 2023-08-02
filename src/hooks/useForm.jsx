import { useFormik } from 'formik';

const useForm = ({initialValues,ref}) => {
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            ref.current.reset()
        },
        });
    return {
        formik
    }
}

export default useForm