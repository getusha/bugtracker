import { ActionIcon, Avatar, Grid, Group, Paper, ScrollArea, Stack, NavLink, MantineProvider, ThemeIcon, SimpleGrid, Card, Text, Menu, Modal, TextInput, Button, Textarea, Radio, MultiSelect, Select } from "@mantine/core";
import { IconAdjustments, IconBug, IconCalendar, IconDashboard, IconDotsVertical, IconEdit, IconFlag, IconFlag2, IconFlag3, IconInfoCircle, IconMenu, IconMenu2, IconMessage, IconPencil, IconPlus, IconStack, IconStatusChange, IconTrash, IconUser, IconUserCheck, IconUserCircle, IconUsers } from "@tabler/icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Sidebar = (props) => {

    const [bigSide, setBigSide] = useState(true);
    const toggleSidebar = () => {
        setBigSide(!bigSide)
    }

    const shet = useLocation();
    console.log(shet.pathname)

    return (
        <>
            <MantineProvider theme={{ fontFamily: "'Work Sans', 'sans-serif'", fontSizes: "1.05rem" }}>

                <Grid className="hello" gutter={"0"}>
                    <Grid.Col span={bigSide ? 2 : 0.2} sx={{ height: "100%", width: "100%", position: "fixed" }}>
                        <Paper p="md" className="sidemeat" sx={{ height: "100%", zIndex: 3 }} radius={"xs"}>

                            <NavLink active={shet.pathname.includes("dashboard")} className="navlink" label="Dashboard" icon={
                                <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                    <IconDashboard />
                                </ThemeIcon>
                            } sx={{ padding: "15px", fontWeight: "500", fontSize: "1.05rem" }} />
                            <NavLink active={shet.pathname.includes("projects")} className="navlink" label="Projects" icon={
                                <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                    <IconStack />
                                </ThemeIcon>
                            } sx={{ padding: "15px", fontSize: "1.05rem" }} />
                            <NavLink className="navlink" label="Reports" icon={
                                <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                    <IconBug />
                                </ThemeIcon>
                            } sx={{ padding: "15px", fontSize: "1.05rem" }} />
                            <NavLink className="navlink" label="Messages" icon={
                                <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                    <IconMessage />
                                </ThemeIcon>
                            } sx={{ padding: "15px", fontSize: "1.05rem" }} />
                        </Paper>

                    </Grid.Col>
                    <Grid.Col span={bigSide ? 10 : 12} className="head">
                        <Stack className="head">
                            <Paper p="md">
                                <Group className="headg">
                                    <ActionIcon onClick={toggleSidebar} size={"xl"}>
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