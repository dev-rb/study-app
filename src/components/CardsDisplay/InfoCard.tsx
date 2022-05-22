import * as React from 'react';
import { Box, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { IStudyCard } from '../../types';

const InfoCard = ({ order, title, text }: IStudyCard) => {
    return (
        <Paper p={30} shadow={'lg'} radius={'lg'} sx={(theme) => ({ width: '40rem', minHeight: '20rem', backgroundColor: theme.colors.gray[0], color: theme.colors.gray[7] })}>
            <Stack >
                <Group noWrap align={'center'} spacing='sm'>
                    <Group
                        noWrap
                        align={'center'}
                        position='center'
                        p={4}
                        sx={(theme) => ({ borderRadius: '9999px', border: '1px solid', borderColor: theme.colors.gray[4], width: '2rem', height: '2rem' })}
                    >
                        <Text color='blue' weight={'600'} sx={{ userSelect: 'none' }}> {order! > 9 ? order : '0' + order} </Text>
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