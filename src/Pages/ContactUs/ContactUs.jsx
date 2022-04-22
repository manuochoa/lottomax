import React from 'react'
import MaxWidthContainer from '../../Components/UI/Container/MaxWidthContainer/MaxWidthContainer'
import PaddingContainer from '../../Components/UI/Container/PaddingContainer/PaddingContainer'
import classes from './ContactUs.module.css'
import { useForm, Controller } from 'react-hook-form'
import Header from '../../Components/UI/Text/Header/Header'
import Input from '../../Components/UI/Form/Input'
import CustomButton from '../../Components/UI/Button/CustomButton/CustomButton'
import AnimatedPage from '../../Components/Common/AnimatedPage/AnimatedPage'
import useWindowDimensions from '../../Hooks/useWindowDimension'

const ContactUs = (props) => {
    const { handleSubmit, control } = useForm()

    const { width } = useWindowDimensions()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <PaddingContainer>
            <MaxWidthContainer className={classes.main}>
                <Header variant="h2">
                    Contact Us
                </Header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Required field!" }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <Input
                                onChange={onChange}
                                value={value}
                                error={error}
                                placeholder="Full Name"  
                            />
                        )}
                    />
                    <Controller
                        name="tg_name"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Required field!" }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <Input
                                onChange={onChange}
                                value={value}
                                error={error}
                                placeholder="Telegram username"  
                            />
                        )}
                    />
                    <Controller
                        name="message"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Required field!" }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <Input
                                onChange={onChange}
                                value={value}
                                error={error}
                                placeholder="Your message"  
                                multiline={true}
                                rows={width > 340 ? 6 : 4}
                            />
                            
                        )}
                    />
                    <CustomButton type="submit">SUBMIT</CustomButton>
                </form>
            </MaxWidthContainer>
        </PaddingContainer>
    )
}

export default ContactUs