import * as React from 'react';
import { Box, Grid } from '@mantine/core';

const PreviewDisplay = () => {
    return (
        <Grid columns={6} mt={40} sx={{ width: '65%' }}>
            <Grid.Col span={1}>
                <PreviewCard />
            </Grid.Col>
            <Grid.Col span={1}>
                <PreviewCard />
            </Grid.Col>
            <Grid.Col span={1}>
                <PreviewCard />
            </Grid.Col>
            <Grid.Col span={1}>
                <PreviewCard />
            </Grid.Col>
            <Grid.Col span={1}>
                <PreviewCard />
            </Grid.Col>
            <Grid.Col span={1}>
                <PreviewCard />
            </Grid.Col>
            <Grid.Col span={1}>
                <PreviewCard />
            </Grid.Col>
            <Grid.Col span={1}>
                <PreviewCard />
            </Grid.Col>
            <Grid.Col span={1}>
                <PreviewCard />
            </Grid.Col>
            <Grid.Col span={1}>
                <PreviewCard />
            </Grid.Col>
            <Grid.Col span={1}>
                <PreviewCard />
            </Grid.Col>
            <Grid.Col span={1}>
                <PreviewCard />
            </Grid.Col>

        </Grid>
    );
}

export default PreviewDisplay;

const PreviewCard = () => {
    return (
        <Box sx={(theme) => ({
            width: '100%',
            height: '6rem',
            border: '2px solid',
            borderColor: theme.colorScheme === 'dark' ? '#444650' : '#CFCECE',
            background: theme.colorScheme === 'dark' ? '#2D2E34' : '#FCFCFC',
            borderRadius: '4px'
        })}
        >

        </Box>
    );
}