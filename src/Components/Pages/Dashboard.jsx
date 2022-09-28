import { ActionIcon, Avatar, Grid, Group, Paper, ScrollArea, Stack, NavLink, MantineProvider, ThemeIcon, SimpleGrid, Card, Text, Menu, Modal, TextInput, Button, Textarea, Radio, MultiSelect, Select } from "@mantine/core";
import { IconAdjustments, IconBug, IconCalendar, IconDashboard, IconDotsVertical, IconEdit, IconFlag, IconFlag2, IconFlag3, IconInfoCircle, IconMenu, IconMenu2, IconMessage, IconPencil, IconPlus, IconStack, IconStatusChange, IconTrash, IconUser, IconUserCheck, IconUserCircle, IconUsers } from "@tabler/icons";
import { useState } from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Sidebar from "../Basic/Sidebar";
import "./Dashboard.css";

let tempData = {
    pending: [
        {
            id: Math.random(),
            ticketId: "Ticket " + Math.random(),
            title: "Random title test",
            descrition: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, id?"
        }
    ]
}



const Dashboard = () => {

    const [editModal, setEditModal] = useState(false);
    const [editedTicket, setEditedTicket] = useState({ title: "", descrition: "" })

    return (
        <>
            <Sidebar>

                <Grid sx={{ padding: "30px" }}>
                    <Grid.Col span={"auto"} className="issue__section" style={{ margin: "5px", minWidth: 250 }}>
                        <Group className="hello issue__head">
                            Pending
                            <ActionIcon>
                                <IconPlus size={34} />
                            </ActionIcon>
                        </Group>


                        <Card style={{ cursor: "grab" }} draggable="true" p={"0"} shadow={"xl"}>
                            <Paper mt={"12px"} radius={0} style={{ borderLeft: "3px tomato solid", padding: "10px 4px", textTransform: "uppercase" }}>
                                <Group className="ticket__title">
                                    <Group>
                                        <IconFlag3 color="tomato" size={22} />
                                        <Text color={"#353535ed"} weight={"500"} size={"0.85rem"}>ticket #0e1313ef</Text>
                                    </Group>
                                    <Menu shadow={"md"} width={200}>
                                        <Menu.Target>
                                            <ActionIcon>
                                                <IconDotsVertical />
                                            </ActionIcon>
                                        </Menu.Target>
                                        <Menu.Dropdown>
                                            <Menu.Item icon={<IconEdit />} onClick={() => { setEditModal(!editModal) }}>Edit Ticket</Menu.Item>
                                            <Menu.Item color={"red"} icon={<IconTrash />}>Delete Ticket</Menu.Item>
                                        </Menu.Dropdown>
                                    </Menu>

                                </Group>
                            </Paper>

                            <Paper p={"0px 14px 10px 14px"} >
                                <Text color={"#0e1313ef"} size={"1.02rem"} weight={"bold"}>This is the issue title...</Text>
                                <Text color={"#353535ed"} size={".9rem"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quia.</Text>
                            </Paper>

                            <Group p={"10px"} className="hello">
                                <Avatar.Group>
                                    <Avatar src={"https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"} radius={"xl"} />
                                    <Avatar src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"} radius={"xl"} />
                                    <Avatar src={"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"} radius={"xl"} />
                                </Avatar.Group>
                                <Group>
                                    <IconCalendar size={15} style={{ marginRight: -13 }} />
                                    <Text size={14} m={0}>20 May 2022</Text>
                                </Group>
                            </Group>
                        </Card>
                    </Grid.Col>


                    <Grid.Col span={"auto"} className="issue__section" style={{ margin: "5px", minWidth: 250 }}>
                        <Group className="hello issue__head">
                            In prOgress
                            <ActionIcon>
                                <IconPlus size={34} />
                            </ActionIcon>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={"auto"} className="issue__section" style={{ margin: "5px", minWidth: 250 }}>
                        <Group className="hello issue__head">
                            Test
                            <ActionIcon>
                                <IconPlus size={34} />
                            </ActionIcon>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={"auto"} className="issue__section" style={{ margin: "5px", minWidth: 250 }}>
                        <Group className="hello issue__head">
                            Approved
                            <ActionIcon>
                                <IconPlus size={34} />
                            </ActionIcon>
                        </Group>
                    </Grid.Col>

                </Grid>

                <Modal title={<IconFlag />} opened={editModal} onClose={() => { setEditModal(!editModal) }} overlayBlur={10} centered>
                    <form onSubmit={(e) => { }}>
                        <TextInput onChange={
                            (e) => {
                                setEditedTicket(prev => {
                                    return {
                                        title: e.target.value,
                                        descrition: prev.descrition,
                                    }
                                })
                            }
                        } name="title" value={editedTicket.title} icon={<IconInfoCircle />} placeholder="Title">
                        </TextInput>
                        <Textarea mt={10} placeholder="about the ticket" minRows={5}>

                        </Textarea>
                        {/* <Radio.Group name="ticketStatus" orientation="horizontal">
                                    <Radio label="Pending" value="pending" />
                                    <Radio label="Progress" value="pending" />
                                    <Radio label="Testing" value="pending" />
                                    <Radio label="Approve" value="pending" />
                                </Radio.Group> */}

                        <Select icon={<IconStatusChange />} placeholder="Change ticket status" label="Ticket Status" data={[
                            { value: "pending", label: "Pending" },
                            { value: "inProgress", label: "In Progress" },
                            { value: "inTest", label: "In Test" },
                            { value: "approved", label: "Approved" },
                        ]} />
                        <MultiSelect
                            icon={<IconUsers />}
                            mt={20}
                            data={['Getabalew Tesfaye', 'Jhon David', 'David Jhon', 'Veronica Jhon']}
                            label="Assigned employees"
                            placeholder="Pick all employees you need"
                            searchable
                            nothingFound="Nothing found"
                        />
                        <Button fullWidth type="submit" mt={10}>Save</Button>
                    </form>

                </Modal>

            </Sidebar>


        </>
    )
}

export default Dashboard;