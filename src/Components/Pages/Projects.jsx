import React from "react";
import { Badge, Button, Card, Center, Collapse, FileInput, Grid, Group, Image, SimpleGrid, Tabs, Text, Textarea, TextInput } from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import { IconActivity, IconPhone, IconPhoto, IconPhotoUp, IconPictureInPictureOn, IconPlus, IconReport, IconSettings } from "@tabler/icons";
import { useState } from "react";
import Sidebar from "../Basic/Sidebar";
import "./Projects.css";


const Project = (props) => {
    return (
        <>
            <Grid.Col sx={{ minWidth: 200 }} span={"auto"}>
                <Card withBorder>
                    <Image radius={"md"} height={250} src={props.image} />
                    <Text  sx={{cursor: "pointer"}} ml={"auto"} weight={"bold"} pt={20} color={"#1e2531"} size={"lg"}>{props.projectName}</Text>

                    <Text size={"xl"} weight={"bold"} color="#fa5252">ISSUES</Text>
                    
                    <Tabs>
                        <Tabs.List>
                            <Tabs.Tab icon={<IconActivity />} value={"active"}>Active</Tabs.Tab>
                            <Tabs.Tab icon={<IconReport />} value={"reported"}>Reported</Tabs.Tab>
                            <Tabs.Tab icon={<IconSettings />} value={"resolved"}>Resolved</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="active" pt={20}>
                            There is no active issue for now
                        </Tabs.Panel>
                        <Tabs.Panel value="reported" pt={20}>
                            There is no reported issue for now
                        </Tabs.Panel>
                        <Tabs.Panel value="resolved" pt={20}>
                            There is no resolved issue for now
                        </Tabs.Panel>
                    </Tabs>
                    {/* <Group sx={{justifyContent: "space-between"}}>
                        
                        <Button color="red" radius="sm" size="xl" compact >Active  <Badge ml={20} color={"red"}>10</Badge></Button>
                        <Button color="blue" radius="sm" size="xl" compact >Reported  <Badge ml={20} color={"blue"}>10</Badge></Button>
                        <Button color="teal" radius="sm" size="xl" compact >Resolved  <Badge ml={20} color={"teal"}>10</Badge></Button>
                    </Group> */}
                </Card>
            </Grid.Col>
        </>
    )
}

const Projects = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Sidebar>
                <Center>
                    <Button disabled={open} variant="outline" leftIcon={<IconPlus />} onClick={() => {
                        setOpen((o) => !o)
                    }} title="Add Project" size="lg" fullWidth ml={10} mr={10}>Add Project</Button>
                </Center>
                <Grid grow>

                    <Grid.Col span={2}>
                        <Collapse sx={{ margin: "3% 4%" }} in={open} >
                            <Card sx={{ width: "100%" }} withBorder p={10}>
                                <TextInput size="lg" placeholder="Project Name" />
                                <RichTextEditor mt={10}
                                    labels="Shet"
                                    placeholder="Details"
                                    controls={[
                                        ['bold', 'italic', 'underline', 'link', 'image'],
                                        ['unorderedList', 'h1', 'h2', 'h3'],
                                        ['sup', 'sub'],
                                        ['alignLeft', 'alignCenter', 'alignRight'],
                                    ]} />
                                <FileInput placeholder="Project Pictures" mt={10} icon={<IconPhotoUp />} size="lg" accept="image/png,image/jpeg" type="image" />

                                <Group mt={40}>
                                    <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Add Project</Button>
                                    <Button variant="default" onClick={() => {
                                        setOpen((o) => !o)
                                    }}>Cancel</Button>
                                </Group>

                            </Card>
                        </Collapse>
                        <Grid grow mt={"auto"} p={10} cols={2}>

                            <Project projectName="TrackBug - Issue tracker web application" image="https://www.nopio.com/wp-content/uploads/2016/05/web-development.jpg" />
                            <Project projectName="ShopIt - Simple and clean eccomerce web app" image="https://blog.verzeo.com/wp-content/uploads/2021/09/31stAug-Blog-2.jpg" />

                        </Grid>

                    </Grid.Col>
                </Grid>



            </Sidebar>
        </>
    )
}

export default Projects;