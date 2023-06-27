import React from "react";
import "./BreedBreadcrumbs.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

export default function BreedBreadcrumbs() {
    return (
        <div className="Breed-Breadcrumbs-Container">
            <Breadcrumbs>
                <Link underline="hover" color="inherit" to="/dashboard">
                    Home
                </Link>
                <Link underline="hover" color="inherit" to="/resources">
                    Resources
                </Link>
                <Typography>Dog Breeds</Typography>
            </Breadcrumbs>
            <h4>Dog Breeds</h4>
        </div>
    );
}
