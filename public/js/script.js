const events = [
    {
      title: 'Sesión Grupal en Madrid de Breathwork y Equilibrio Energético',
      image: '/assets/img/c4.png',
      date: '17 NOV. 2024',
      time: '12:00 CET',
      attendees: '9 asistentes',
      price: 'Free',
      link: 'https://link_to_event1.com'
    },
    {
      title: 'Introducción a KNIME y casos de uso de IA Generativa',
      image: '/assets/img/c4.png',
      date: '18 NOV. 2024',
      time: '18:00 CET',
      attendees: '47 asistentes',
      price: 'Free',
      link: 'https://link_to_event2.com'
    },
    {
      title: 'Open Mic Storytelling @ Tropicana - "FEAR"',
      image: '/assets/img/c4.png',
      date: '12 NOV. 2024',
      time: '19:00 CET',
      attendees: '23 asistentes',
      price: 'Free',
      link: 'https://link_to_event3.com'
    },
    {
      title: 'ClickHouse Meetup in Barcelona',
      image: '/assets/img/c4.png',
      date: '12 NOV. 2024',
      time: '18:40 CET',
      attendees: '31 asistentes',
      price: 'Free',
      link: 'https://link_to_event4.com'
    }
  ];
  
  function renderEvents(eventsToRender) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores
  
    eventsToRender.forEach(event => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      card.innerHTML = `
        <img src="${event.image}" alt="${event.title}">
        <div class="card-content">
          <h3 class="card-title">${event.title}</h3>
          <p class="card-details">${event.date} - ${event.time}</p>
          <p class="card-details">${event.attendees}</p>
          <p class="card-details">${event.price}</p>
          <a href="${event.link}" target="_blank" class="event-link">Ver más</a>
        </div>
      `;
  
      resultsContainer.appendChild(card);
    });
  }
  
  // Mostrar todos los eventos en la carga inicial
  document.addEventListener('DOMContentLoaded', () => renderEvents(events));
  