import * as Yup from 'yup';

export const RegisterSchema=Yup.object().shape({
    name:Yup.string().required("نام و نام خانوادگی الزامی میباشد"),
    email:Yup.string().email("آدرس ایمیل معتبر نیست").required("ایمیل ازامی میباشد"),
    password:Yup.number("پسورد باید عدد باشد").typeError('نباید رشته یا کلمه باشد فقط عدد مقبول است').min(6,"پسورد باید عدد و بزرگتر از شش کاراکتر باشد").required("پسورد ازامی میباشد")
})
