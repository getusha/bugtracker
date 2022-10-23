import React from "react";
import { ActionIcon, Avatar, Grid, Group, Paper, ScrollArea, Stack, NavLink, MantineProvider, ThemeIcon, SimpleGrid, Card, Text, Menu, Modal, TextInput, Button, Textarea, Radio, MultiSelect, Select, Image, Center, Indicator, Drawer } from "@mantine/core";
import { IconAdjustments, IconBug, IconCalendar, IconDashboard, IconDotsVertical, IconEdit, IconFlag, IconFlag2, IconFlag3, IconInfoCircle, IconMenu, IconMenu2, IconMessage, IconPencil, IconPlus, IconStack, IconStatusChange, IconTrash, IconUser, IconUserCheck, IconUserCircle, IconUsers } from "@tabler/icons";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../images/Bug.png";
import "./Sidebar.css";

const Sidebar = (props) => {

    const [bigSide, setBigSide] = useState(true);
    const [mobNav, setMobNav] = useState({ isMobile: false, open: false });
    const toggleSidebar = () => {
        setBigSide(!bigSide)
    }

    const toggleMobNav = ()=>{
        setMobNav((prev) => {
            return {
                isMobile: true,
                open: !prev.open
            }
        })
    }

    const shet = useLocation();
    console.log(shet.pathname)

    useEffect(() => {
        let deviceWidth = window.matchMedia("(max-width: 800px)");
        if (deviceWidth.matches) {
            setBigSide(false)
            setMobNav((prev) => {
                return {
                    isMobile: true,
                    open: prev.open
                }
            })
        } else {

        }
    }, [])

    return (
        <>
            <Drawer
                overlayOpacity={0.55}
                overlayBlur={3}
                opened={mobNav.open}
                onClose={toggleMobNav}

            >
                {/* Drawer content */}


                        <Paper shadow={"xl"} mt={"auto"} className="sidemeat" sx={{ height: "100%", zIndex: 3, display: "flex", flexDirection: "column", justifyContent: "space-between" }} radius={"xs"}>
                            <Image draggable="false" radius={"md"} className="solid" src={Logo} mb={10} />

                            <Card shadow={200} withBorder mb={20} p={15}>
                                <Link to={"/app/dashboard"}>
                                    <NavLink pl={4} pt={10} pb={10} mb={"md"} active={shet.pathname.includes("dashboard")} className="navlink" label="Dashboard" icon={
                                        <Center>
                                            <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                                <IconDashboard />
                                            </ThemeIcon>
                                        </Center>
                                    } sx={{ fontWeight: "500", fontSize: "1.05rem" }} />
                                </Link>
                                <Link to={"/app/projects"}>
                                    <NavLink pl={4} pt={10} pb={10} mb={"md"} active={shet.pathname.includes("projects")} className="navlink" label="Projects" icon={
                                        <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                            <IconStack />
                                        </ThemeIcon>
                                    } sx={{ fontSize: "1.05rem" }} />
                                </Link>
                                <Link to={"/app/reports"}>
                                    <NavLink pl={4} pt={10} pb={10} mb={"md"} className="navlink" label="Reports" icon={
                                        <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                            <IconBug />
                                        </ThemeIcon>
                                    } sx={{ fontSize: "1.05rem" }} />
                                </Link>
                                <Link style={{ backgroundColor: "red" }} to={"/app/messages"}>
                                    <NavLink pl={4} pt={10} pb={10} mb={"md"} className="navlink" rightSection={<Indicator size={"sm"} color={"red"} label={3}></Indicator>} label={"Messages"} icon={
                                        <ThemeIcon p={0} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                            <IconMessage />
                                        </ThemeIcon>
                                    } sx={{ fontSize: "1.05rem" }} />
                                </Link>
                            </Card>

                        </Paper>

                    
                    {/* End */}
            </Drawer>
            <MantineProvider theme={{ fontFamily: "'Work Sans', 'sans-serif'", fontSizes: "1.05rem" }}>
                <Grid className="hello" gutter={"0"}>
                    <Grid.Col span={bigSide ? 2 : 0.2} sx={{ height: "100%", width: "100%", position: "fixed" }}>
                        <Paper shadow={"xl"} mt={"auto"} className="sidemeat" sx={{ height: "100%", zIndex: 3, display: "flex", flexDirection: "column", justifyContent: "space-between" }} radius={"xs"}>
                            <Image draggable="false" radius={"md"} className="solid" src={Logo} mb={10} />

                            <Card shadow={200} withBorder m={0} p={15}>
                                <Link to={"/app/dashboard"}>
                                    <NavLink pl={4} pt={10} pb={10} mb={"md"} active={shet.pathname.includes("dashboard")} className="navlink" label="Dashboard" icon={
                                        <Center>
                                            <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                                <IconDashboard />
                                            </ThemeIcon>
                                        </Center>
                                    } sx={{ fontWeight: "500", fontSize: "1.05rem" }} />
                                </Link>
                                <Link to={"/app/projects"}>
                                    <NavLink pl={4} pt={10} pb={10} mb={"md"} active={shet.pathname.includes("projects")} className="navlink" label="Projects" icon={
                                        <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                            <IconStack />
                                        </ThemeIcon>
                                    } sx={{ fontSize: "1.05rem" }} />
                                </Link>
                                <Link to={"/app/reports"}>
                                    <NavLink pl={4} pt={10} pb={10} mb={"md"} className="navlink" label="Reports" icon={
                                        <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                            <IconBug />
                                        </ThemeIcon>
                                    } sx={{ fontSize: "1.05rem" }} />
                                </Link>
                                <Link style={{ backgroundColor: "red" }} to={"/app/messages"}>
                                    <NavLink pl={4} pt={10} pb={10} mb={"md"} className="navlink" rightSection={<Indicator size={"sm"} color={"red"} label={3}></Indicator>} label={"Messages"} icon={
                                        <ThemeIcon p={0} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                            <IconMessage />
                                        </ThemeIcon>
                                    } sx={{ fontSize: "1.05rem" }} />
                                </Link>
                            </Card>

                        </Paper>

                    </Grid.Col>
                    
                    
                    <Grid.Col span={bigSide ? 10 : 12} className="head">
                        <Stack className="head">
                            <Paper p="md">
                                <Group className="headg">
                                    <ActionIcon onClick={ !mobNav.isMobile?toggleSidebar:toggleMobNav} size={"xl"}>
                                        <IconMenu2 size={34} />
                                    </ActionIcon>
                                    <ActionIcon color="indigo" size="xl" radius="xl" variant="filled">
                                        <IconUserCircle size={34} />
                                    </ActionIcon>

                                </Group>
                            </Paper>
                        </Stack>
                        {props.children}
                    </Grid.Col>
                </Grid>
            </MantineProvider>
        </>
    )
}

export default Sidebar;