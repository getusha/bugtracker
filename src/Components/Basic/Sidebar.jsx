const Sidebar = (props) => {
    return (
        <>
            <MantineProvider theme={{ fontFamily: "'Work Sans', 'sans-serif'", fontSizes: "1.05rem" }}>

                <Grid className="hello" gutter={"0"}>
                    <Grid.Col span={bigSide ? 2 : 0.2} sx={{ height: "100%", width: "100%", position: "fixed" }}>
                        <Paper p="md" className="sidemeat" sx={{ height: "100%", zIndex: 3 }} radius={"xs"}>

                            <NavLink className="navlink" active label="Dashboard" icon={
                                <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                    <IconDashboard />
                                </ThemeIcon>
                            } sx={{ padding: "15px", fontWeight: "500", fontSize: "1.05rem" }} />
                            <NavLink className="navlink" label="Projects" icon={
                                <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                    <IconStack />
                                </ThemeIcon>
                            } sx={{ padding: "15px", fontSize: "1.05rem" }} />
                            <NavLink className="navlink" label="Isuess" icon={
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