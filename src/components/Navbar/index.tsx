import * as React from 'react';
import { Button, Group, Header, Image, Switch, Text, useMantineColorScheme } from '@mantine/core';
import { MdAdd } from 'react-icons/md';
import logo from '../../assets/logo.svg';

const AppHeader = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (
        <Header height={60} p="lg" sx={{ borderBottom: 'none' }}>
            <Group noWrap spacing={'xs'} position='apart'>
                <Group noWrap spacing={'xs'}>
                    <Image src={logo} width={40} height={40} />
                    <Text weight={'600'} size='lg' color='gray'> StudiMore </Text>
                </Group>
                <Group noWrap spacing={'lg'}>
                    <Switch onChange={() => toggleColorScheme()} />
                    <Button variant='subtle' size='sm'> Login </Button>
                    <Button variant='filled' leftIcon={<MdAdd />} size='sm'> Create New </Button>
                </Group>
            </Group>

        </Header>
    );
}

export default AppHeader;