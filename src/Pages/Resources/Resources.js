import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import "./Resources.css";

// Material UI imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
// import ResourceCard from '../../Components/ResourceCard/ResourceCard'
// import SearchBar from '../../Components/SearchBar/SearchBar'

export default function Resources() {
    const theme = useTheme();
    return (
        <>
            <div className="resources-div-container">
                <div>
                    <h3 className="PageTitle">My Resources</h3>
                    {/* <SearchBar /> */}
                </div>
                <Grid container columnSpacing={2} rowSpacing={4}>
                    <Grid
                        item
                        xs={6}
                        sm={4}
                        md={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Card
                            sx={{
                                width: "100%",
                                maxWidth: 500,
                                maxHeight: 300,
                                minHeight: 200,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Link to="/assessment">
                                <Typography variant="h5">
                                    Symptom Assessment
                                </Typography>
                            </Link>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sm={4}
                        md={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Card
                            sx={{
                                width: "100%",
                                maxWidth: 500,
                                maxHeight: 300,
                                minHeight: 200,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Link to="/resources/breed-guide">
                                <Typography variant="h5">
                                    Breed Guide
                                </Typography>
                            </Link>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sm={4}
                        md={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Card
                            sx={{
                                width: "100%",
                                maxWidth: 500,
                                maxHeight: 300,
                                minHeight: 200,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h5">Pet Training</Typography>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sm={4}
                        md={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Card
                            sx={{
                                width: "100%",
                                maxWidth: 500,
                                maxHeight: 300,
                                minHeight: 200,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h5">Pet Travel</Typography>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sm={4}
                        md={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Card
                            sx={{
                                width: "100%",
                                maxWidth: 500,
                                maxHeight: 300,
                                minHeight: 200,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h5">Pet Nutrition</Typography>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sm={4}
                        md={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Card
                            sx={{
                                width: "100%",
                                maxWidth: 500,
                                maxHeight: 300,
                                minHeight: 200,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h5">Pet Shelters</Typography>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
