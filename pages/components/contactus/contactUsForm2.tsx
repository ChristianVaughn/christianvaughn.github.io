import React, { useCallback, useState } from 'react';
//import { useForm, ValidationError } from '@formspree/react';
import { Form, Alert, Button, Row, Col } from "react-bootstrap";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import HTMLParser, { domToReact } from "html-react-parser";
import { liveURL } from '../../../custom.config';
import { IFormData } from "../../../typescript/interfaces/contactus.interface";
import FloatingFormGroup from "./floatingFormGroup";

interface IContactUsForm {
  className?: string
  formControlClass?: string;
  fullWidth?: boolean;
  btnType?: 'outline' | 'solid';
}
const ContactUsForm: React.FC<IContactUsForm> = ({ className, formControlClass, fullWidth, btnType }) => {
  const [message, setMessage] = React.useState<ReturnType<typeof domToReact> | null>(null);
  // form validation rules 
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required('This field is required'),
    email: Yup.string()
      .required('This field is required')
      .email('Email is invalid'),
    company: Yup.string()
      .required('This field is required'),
    message: Yup.string()
      .required('This field is required')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState, getValues } = useForm<any>({
    ...formOptions,
    mode: 'all'
  });
  const errors = formState.errors as any;
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaToken, setRecaptchaToken] = useState("");

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('yourAction');
    // Do whatever you want with the token
	setRecaptchaToken(token); // store the token in state
  }, [executeRecaptcha]);
  
  const onSubmit = async (data: IFormData, e: React.BaseSyntheticEvent<any> | undefined) => {
	const form = e?.target as HTMLFormElement;
	const formData = new FormData(form);
	formData.append("g-recaptcha-response", recaptchaToken);
    const res = await fetch('https://formspree.io/f/xaypbkpa', {
      body: formData,
      method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
    })
    let result: string = await res.text();
	const jres = await JSON.parse(result);
	if (jres.error) { result = "Error: " + jres.error as string}
	else if (jres.ok) { result = "Thank You. I will get back to you soon."}
	else {result = result}
    if (result) {
      setMessage(HTMLParser(result));
      reset();
      setTimeout(() => {
        setMessage(null);
      }, 5000)
    }
    return false;
  }
  return (
    <>
      {
        message && <Alert variant="success">
          {message}
        </Alert>
      }
      <Form onSubmit={handleSubmit(onSubmit)} className={className} data-aos="fade-up" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
        <Row>
          <Col lg={4} md={6}>
            <FloatingFormGroup errors={errors?.fullname} label="Name" register={register} field="fullname" id={"fullname"} type="text" name="fullname" inputClass={formControlClass} />
          </Col>
          <Col lg={4} md={6}>
            <FloatingFormGroup errors={errors?.company} label="Company" register={register} field="company" id={"company"} type="text" name="company" inputClass={formControlClass} />
          </Col>
          <Col lg={4} md={6}>
            <FloatingFormGroup errors={errors?.email} label="Email Address" register={register} field="email" id={"email"} type="text" name="email" inputClass={formControlClass} />
          </Col>
          <Col lg={12}>
            <FloatingFormGroup errors={errors?.message} label="Message" register={register} field="message" id={"message"} type="text" name="message" inputClass={formControlClass} fieldTextArea />
          </Col>
        </Row>
        <div className={`${fullWidth ? 'd-grid' : 'form-group'} text-end`}>
          <Button onClick={handleReCaptchaVerify} variant={btnType === 'outline' ? "outline-primary" : 'primary'} type="submit">Submit Now</Button>
        </div>
      </Form>
    </>
  )
}
ContactUsForm.displayName = "Contact Us Form";
export default ContactUsForm