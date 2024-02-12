import * as Yup from 'yup';

export const LoginSchema=Yup.object().shape({
    email:Yup.string().email("آدرس ایمیل معتبر نیست").required("ایمیل ازامی میباشد"),
    password:Yup.number("پسورد باید عدد باشد").typeError('نباید رشته یا کلمه باشد فقط عدد مقبول است').min(6,"پسورد باید عدد و بزرگتر از شش کاراکتر باشد").required("پسورد ازامی میباشد")
})
