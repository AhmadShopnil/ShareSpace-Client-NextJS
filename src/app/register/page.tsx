"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import CustomForm from "@/components/Forms/CustomForm";
import CustomInput from "@/components/Forms/CustomInput";
import { userLogin } from "@/services/actions/userLogin";
import { saveUserInfo } from "@/services/auth.Services";
import { userRegistration } from "@/services/actions/userRegistration";

export const validationSchema = z.object({
  name: z.string({ required_error: "name is required." }),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
  bio: z.string(),
  profession: z.string(),
  address: z.string(),
  confirmPassword: z.string().min(6, "Must be at least 6 characters"),
});

const SignUp = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSignUp = async (values: FieldValues) => {
    try {
      // check confirm password and password ar matched
      if (values?.password === values?.confirmPassword) {
        const formatedData = {
          name: values?.name,
          email: values?.email,
          password: values?.password,
          bio: values?.bio,
          profession: values?.profession,
          address: values?.address,
        };

        const res = await userRegistration(formatedData);

        if (res?.data?.accessToken) {
          // log in user by set user token in local storage
          saveUserInfo({ accessToken: res?.data?.accessToken });
          router.push("/");
        } else {
          setError(res.message);
          // console.log(res);
        }
      } else {
        setError("Confirm password must be same as password");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>
                ShareSpace Login
              </Typography>
            </Box>
          </Stack>

          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}

          <Box>
            <CustomForm
              onSubmit={handleSignUp}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                name: "",
                email: "",
                password: "",
                // confirmPassword: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <CustomInput
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    name="bio"
                    label="Bio"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    name="profession"
                    label="Profession"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    name="address"
                    label="Address"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                SignUp
              </Button>
              <Typography component="p" fontWeight={300}>
                Already have an account? <Link href="/login">Login</Link>
              </Typography>
            </CustomForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default SignUp;
