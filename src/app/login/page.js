'use client'

import Container from '@mui/material/Container';

import Paper from '@mui/material/Paper';

import ThirdPartySignIns from './_third-party-sign-ins';

import { Divider } from '@mui/material';


export default function LandingPage(){

    return (
        <div>
            <Container maxWidth="xs" sx={{marginTop: {xs: '30px', lg: '100px'}}} >
                <Paper sx={{padding: '30px'}}>
                    <ThirdPartySignIns />
                </Paper>
            </Container>
        </div>
    );
}