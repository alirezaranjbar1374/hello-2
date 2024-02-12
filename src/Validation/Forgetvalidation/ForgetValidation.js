import * as Yup from 'yup';

export const ForgetSchema=Yup.object().shape({
    email:Yup.string().email("آدرس ایمیل معتبر نیست").required("ایمیل ازامی میباشد"),
    code:Yup.number("کد ارسالی الزامیست و باید عدد باشد").typeError('نباید رشته یا کلمه باشد فقط عدد مقبول است').min(5,"پسورد باید عدد و بزرگتر از 4 کاراکتر باشد").required("کد ارسالی الزامیست")
})
