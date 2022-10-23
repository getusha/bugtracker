import React from "react";
import { ActionIcon, Avatar, Grid, Group, Paper, ScrollArea, Stack, NavLink, MantineProvider, ThemeIcon, SimpleGrid, Card, Text, Menu, Modal, TextInput, Button, Textarea, Radio, MultiSelect, Select } from "@mantine/core";
import { IconAdjustments, IconBug, IconCalendar, IconDashboard, IconDotsVertical, IconEdit, IconFlag, IconFlag2, IconFlag3, IconInfoCircle, IconMenu, IconMenu2, IconMessage, IconPencil, IconPlus, IconStack, IconStatusChange, IconTrash, IconUser, IconUserCheck, IconUserCircle, IconUsers } from "@tabler/icons";
import { useState } from "react";
// import { Pie } from "react-chartjs-2";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Sidebar from "../Basic/Sidebar";
import "./Dashboard.css";
import Issue from "./Issue";

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

const tIs = [
    0, 1, 2, 1
]

const Dashboard = () => {
    return (
        <>
            <Sidebar>

                <Grid sx={{ padding: "5px" }}>
                    <Grid.Col span={"auto"} className="issue__section" style={{ margin: "5px", minWidth: 250 }}>
                        <Group className="hello issue__head">
                            Reported
                            <ActionIcon>
                                <IconPlus size={34} />
                            </ActionIcon>

                            {tIs.map((tI, i) => {
                                return <Issue id={i} priority={tI} />
                            })}

                        </Group>
                        {/* <Issue priority={0}  />
                        <Issue priority={1}  />
                        <Issue priority={2}  /> */}

                    </Grid.Col>


                    <Grid.Col span={"auto"} className="issue__section" style={{ margin: "5px", minWidth: 250 }}>
                        <Group className="hello issue__head">
                            Active
                            <ActionIcon>
                                <IconPlus size={34} />
                            </ActionIcon>

                            {tIs.map((tI, i) => {
                                return <Issue id={i} priority={tI} />
                            })}

                        </Group>
                    </Grid.Col>
                    {/* <Grid.Col span={"auto"} className="issue__section" style={{ margin: "5px", minWidth: 250 }}>
                        <Group className="hello issue__head">
                            Test
                            <ActionIcon>
                                <IconPlus size={34} />
                            </ActionIcon>
                        </Group>
                    </Grid.Col> */}
                    <Grid.Col span={"auto"} className="issue__section" style={{ margin: "5px", minWidth: 250 }}>
                        <Group className="hello issue__head">
                            Resolved
                            <ActionIcon>
                                <IconPlus size={34} />
                            </ActionIcon>

                            {tIs.map((tI, i) => {
                                return <Issue id={i} priority={tI} />
                            })}
                        </Group>

                    </Grid.Col>

                </Grid>



            </Sidebar>


        </>
    )
}

export default Dashboard;