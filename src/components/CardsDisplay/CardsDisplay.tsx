import * as React from 'react';
import { Group, Paper, Stack } from '@mantine/core';
import CardsControls from './CardsControls';
import InfoCard from './InfoCard';
import { IStudyCard } from '../../types';

interface DisplayProps {
    cardData: IStudyCard[]
}

export const CardsDisplay = ({ cardData }: DisplayProps) => {

    const [cards, setCards] = React.useState(cardData);
    const [activeCard, setActiveCard] = React.useState(0);

    const goBack = () => {
        if (activeCard > 0) {
            setActiveCard((prev) => prev - 1);
        }
    }

    const goNext = () => {
        if (activeCard < cards.length - 1) {
            setActiveCard((prev) => prev + 1);
        }
    }


    return (
        <Stack align={'center'} spacing={40} sx={{ position: 'relative' }}>
            <InfoCard
                id={cards[activeCard].id}
                order={cards[activeCard].order || activeCard + 1}
                text={cards[activeCard].text}
                title={cards[activeCard].title}
            />
            <CardsControls current={activeCard + 1} total={cards.length} goBack={goBack} goNext={goNext} />
        </Stack>
    );
}