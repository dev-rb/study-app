import * as React from 'react';
import { Box, createStyles, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { IStudyCard } from '../../types';

const useStyles = createStyles((theme) => ({
    root: {
        width: '40rem',
        minHeight: '20rem',
        backgroundColor: theme.colors.gray[0],
        color: theme.colors.gray[7],

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '100%'
        },
    },
    numLabel: {
        width: '2rem',
        height: '2rem',
        border: '1px solid',
        borderColor: theme.colors.gray[4],
        borderRadius: '9999px',
        userSelect: 'none'
    }
}));

const InfoCard = ({ order, title, text }: IStudyCard) => {

    const { classes } = useStyles();

    return (
        <Paper className={classes.root} p={30} shadow={'lg'} radius={'lg'}>
            <Stack >
                <Group noWrap align={'center'} spacing='sm'>
                    <Group
                        className={classes.numLabel}
                        noWrap
                        align={'center'}
                        position='center'
                        p={4}
                    >
                        <Text color='blue' weight={'600'}> {order! > 9 ? order : '0' + order} </Text>
                    </Group>
                    <Title order={4}> {title} </Title>
                </Group>
                <Text size='sm'>
                    {text}
                </Text>
            </Stack>
        </Paper>
    );
}

export default InfoCard;