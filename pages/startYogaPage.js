import Head from "next/head";
import Link from "next/link";
import StartYogaButton from "@/components/StartYogaButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Container} from 'react-bootstrap'


export default function startYogaPage() {
    return(
        <>
        <h1> Yoga</h1>
        <Container>
        <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/2WE-L8iyu0U" title="YouTube video" allowFullScreen></iframe>
        </div>
        </Container>
        
 </>
    )
}