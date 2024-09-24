"use client";
import { FormProvider, useForm } from "react-hook-form";

interface IPropsForm {
    onSubmit: (data: any) => void;
    children: React.ReactNode;
    defaultValues?: object;
    className?: string;
}

export const Form = ({ onSubmit, children, defaultValues = {}, className }: IPropsForm) => {
    const methods = useForm({ defaultValues });
    return (
        <FormProvider {...methods}>
            <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}