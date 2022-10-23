import React from "react";
import { Anchor, BackgroundImage, Box, Button, Card, Center, Checkbox, Grid, Group, Image, PasswordInput, Stack, Text, TextInput, ThemeIcon } from "@mantine/core";
import { IconAddressBook, IconKey, IconLock, IconLogin, IconMail } from "@tabler/icons";
import { Link } from "react-router-dom";
import "./Homepage.css";
const HomePage = () => {
    return (
        <>
            <Grid>
                <Grid.Col style={{ padding: "5% 4%" }} md={4}>
                    <Card shadow={"20px"}>
                        <h1 className="hi">Hi, Welcome!</h1>
                        <Text className="lil">Login and track your beautifull issues</Text>
                        <form action="#">
                            <TextInput size="md" type={"email"} placeholder="example@mail.com" label="Email Address" required icon={
                                <IconMail size={20} />
                            } />
                            <PasswordInput style={{ marginTop: "20px" }} size="md" placeholder="password" required label="Password" icon={
                                <IconKey size={20} />
                            } />
                            <Group className="keepme">
                                <Checkbox className="homie" label="Keep me signed in" />
                                <Anchor className="homie">Forgot password?</Anchor>
                            </Group>
                            <Button style={{ marginTop: "50px" }} leftIcon={<IconLock />} type="submit" size="md" variant="gradient" fullWidth gradient={{ from: 'indigo', to: 'cyan' }} >LOGIN</Button>
                        </form>
                        <Button style={{ marginTop: "10px" }} leftIcon={<IconLogin />} type="submit" size="lg" variant="light" fullWidth >DEMO</Button>
                        <Group className="newacc">
                            <Text className="homie" size={"md"}>Don't have account?</Text>
                            <Link to={"/register"}>
                            <Anchor className="homie" >Create Account</Anchor>
                            </Link>
                        </Group>
                    </Card>
                </Grid.Col>
                <Grid.Col className="intro" md={8} style={{ padding: "5% 2%" }} >
                    {/* <Box sx={{ maxWidth: "100%", minHeight: "100vh" }} mx="auto">
                        <BackgroundImage
                        sx={{minHeight: "100%"}}
                            src="https://cdn.dribbble.com/userupload/3280811/file/original-f699c9dbe4c22b45ac23c3965c53d88a.png?compress=1&resize=1024x768"
                            radius="sm"
                        >
                            <Box sx={{minHeight: "90vh"}} p="md">
                                <h1>TrackBug</h1>
                            </Box>
                        </BackgroundImage>
                    </Box> */}

                    <Center>
                        <Stack>
                            {/* <Image src="https://cdn.dribbble.com/userupload/3280811/file/original-f699c9dbe4c22b45ac23c3965c53d88a.png?compress=1&resize=1024x768" /> */}
                        </Stack>
                    </Center>
                </Grid.Col>
            </Grid>
        </>
    )
}

export default HomePage;