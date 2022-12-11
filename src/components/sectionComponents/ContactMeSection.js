import React, {useEffect} from "react";
import { Spinner } from '@chakra-ui/react'
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "/home/minato/Desktop/React/Project-portfolio/src/hooks/useSubmit.js"
import FullScreenSection from "./FullScreenSection";
import {useAlertContext} from "/home/minato/Desktop/React/Project-portfolio/src/context/alertContext.js";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formValidationSchema = Yup.object({
    firstName: Yup.string()
    .min(3, "First name must be atlest 3 characters long!")
    .max(30, "First name is too Long!")
    .required("Firstname is required").label('firstname'),

    email: Yup.string().email("Email must be a valid email.").required("Email is required").label('email'),

    comment: Yup.string()
    .min(25, "Must be atleast 25 characters long!")
    .required("Comment is required"),
  })



  
  const formik = useFormik({
    initialValues: {
      firstName : "",
      email : "",
      type : "",
      comment : ""
    },

    onSubmit: (values) => { 

      submit("dummy-url.com",values)
      onOpen(response.messagetype , response.message)
      if(response.messagetype === "success"){
        formik.resetForm()
      }
    },

    validationSchema: formValidationSchema
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack   width="60%" align=""  pl={3} pr={3}>
        <Heading as="h1" id="contactme-section" pb={4} >
          Contact me
        </Heading>   
        <form onSubmit={formik.handleSubmit} >
            <VStack spacing={4} align="center">
            
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type"  onChange={formik.handleChange} >
                  <option value="hireMe" style={{ color: 'black' }} >Freelance project proposal</option>
                  <option value="openSource"  style={{ color: 'black' }}>
                    Open source consultancy session
                  </option >
                  <option value="other" style={{ color: 'black' }}>Other</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                 {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full" 
                
                >
                {isLoading? 
                <Spinner 
                thickness='4px'
                speed='1.00s'
                emptyColor='gray.200'
                color='blue.500'
                size='md'
                /> : "Submit"}
              </Button>
            </VStack>
            </form>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
