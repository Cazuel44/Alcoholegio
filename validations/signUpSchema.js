import { object, string, ref } from 'yup';

export const signupSchema = object().shape({
    email: string().email('No es un correo valido').required('El email es requerido'),
    password: string().min(6, 'El password debe contener minimo 6 caracteres').required('El password es requerido'),
    repeatPassword: string()
        .oneOf([ref('password'), null], 'Las contraseñas no coinciden')
        .required(),
})