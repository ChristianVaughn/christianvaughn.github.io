import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import ContactUsForm from "./contactUsForm2";
import { IClass } from "../../../typescript/interfaces/common.interface";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';



const ContactUs: React.FC<IClass> = ({ className }) => {
  return (
    <section className={className}>
      <SectionHeader className="style-2">
        <>Get In Touch</>
      </SectionHeader>
      {/* Contact Map  */}
      {/* Contact Form */}
	<GoogleReCaptchaProvider reCaptchaKey="6LcNvUUmAAAAAM40SJW0mz82EKOIbv0fEAUIaGQ8">
      <ContactUsForm btnType="outline" />
	  </GoogleReCaptchaProvider>
    </section>
  )
}

ContactUs.displayName = "Contact Us";
export default ContactUs;