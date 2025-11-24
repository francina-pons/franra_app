import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const timeline = [
  { date: '2019-02-14', desc: 'Primer missatge' },
  { date: '2019-03-01', desc: 'Primera cita' },
  { date: '2019-04-10', desc: 'Primer viatge junts' },
  { date: '2019-06-15', desc: 'Primera foto junts' },
  { date: '2019-08-20', desc: 'Primera declaració d’amor' },
  { date: '2020-01-01', desc: 'Cap d’any junts' },
  { date: '2020-05-05', desc: 'Primera mascota' },
  { date: '2021-02-14', desc: 'Primer Sant Valentí junts' },
  { date: '2022-07-30', desc: 'Viatge especial' },
  { date: '2023-11-24', desc: 'Aniversari especial' }
];

export default function ChronographyPage() {
  return (
    <div>
      <h2>Cronografia</h2>
      <p>
        Aquí he fet una cronografia amb ses dates més importants de sa nostra relació per ara.
        <br></br>
        I esper que en puguem afegir moltes més.
      </p>
      <h1>TODO!!!</h1>
        <Timeline position="alternate">
            {timeline.map((event, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: 'var(--green-leaf)' }} />
                        {index < timeline.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <strong>{event.date}:</strong> {event.desc}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    </div>
  );
}