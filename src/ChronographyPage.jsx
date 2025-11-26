import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const timeline = [
  { date: '2022-11-24', desc: 'Es primer dia que mus vam veure' },
  { date: '2023-01-01', desc: 'Es dia que me vas enviar sa primera foto den tomi' },
  { date: '2023-01-15', desc: 'Scape room juntes per celebrar es meu aniversari' },
  { date: '2023-01-29', desc: 'Es dia que vas conèixer tots es meus amics' },
  { date: '2023-02-14', desc: 'Primer Sant Valentí junts' }, // ?????
  { date: '2023-03-17', desc: 'Festa universitària ahahaha' },
  { date: '2023-04-03', desc: 'Primer viatge a Port Lligat, Cadaqués i Cap de Creus' },
  { date: '2023-04-04', desc: 'Ruta 7 gorgs' },
  { date: '2023-04-05', desc: 'Rupit i Tavartet' }, // Mirar noms
  { date: '2023-05-20', desc: 'Vall d\'Aran amb es meus amics' },
  { date: '2023-06-10', desc: 'Sa primera vegada que vaig venir a Palamós i vaig conèixer sa teva família i en Tomi' },
  { date: '2023-06-12', desc: 'Es teu primer aniversari juntes (I <3 big boobs)' },
  { date: '2023-06-15', desc: 'Sa teva primera vegada a Menorca i conèixer sa meva família' },
  { date: '2023-07-08', desc: 'Vaig poder conèixer més Palamós' },
  { date: '2023-09-08', desc: 'Ses teves primeres festes a Menorca' },
  { date: '2023-11-24', desc: 'Primer any juntes!' },
  { date: '2023-12-31', desc: 'Primer cap d\'any juntes' },
  { date: '2024-03-16', desc: 'Boda Júlia i Maria' },
  { date: '2024-03-25', desc: 'Peretallada' },
  { date: '2024-04-21', desc: 'Primer Sant Jordi juntes' },
  { date: '2024-06-12', desc: 'Es teu segon aniversari juntes' },
  // Estic per aqui
  { date: '2024-06-10', desc: 'TODO' },
  { date: '2024-06-10', desc: 'TODO' },
];

export default function ChronographyPage() {
  return (
    <div>
      <h2>Cronografia</h2>
        <p>
            Aquí he fet una cronografia amb algunes de ses dates més importants de sa nostra relació per ara.
            I esper que en puguem afegir moltes més hehe 
        </p>
       <div>
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
      
    </div>
  );
}