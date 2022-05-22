import { ActionIcon, Group, Text } from '@mantine/core';
import * as React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface Props {
    total: number,
    current: number,
    goNext: () => void,
    goBack: () => void
}

const CardsControls = ({ total, current, goBack, goNext }: Props) => {
    return (
        <Group noWrap align='center' position='apart' p={'xs'} sx={{ backgroundColor: '#414F5A', borderRadius: '8px', width: '100%' }}>
            <ActionIcon variant='transparent' sx={{ color: current > 1 ? '#B1C6D8' : '#5C6C78' }} size={60} onClick={goBack}>
                <MdChevronLeft size={60} />
            </ActionIcon>

            <Group noWrap align='center' position='center' py={5} px={30} sx={{ color: 'white', border: '2px solid #8295A5', borderRadius: '4px' }}>
                <Text size='md'> {current} / {total} </Text>
            </Group>

            <ActionIcon variant='transparent' sx={{ color: current < total ? '#B1C6D8' : '#5C6C78' }} size={60} onClick={goNext}>
                <MdChevronRight size={60} />
            </ActionIcon>
        </Group>
    );
}

export default CardsControls;