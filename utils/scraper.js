
const puppeteer = require("puppeteer");

// Creamos una función para extraer la información de cada producto

async function scrapeMeetup() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try { 
        await page.goto("https://www.meetup.com/find/?keywords=programming%20events&location=es--Madrid&source=EVENTS", {
            waitUntil: 'domcontentloaded', // Carga básica del HTML
            timeout: 60000 // Tiempo de espera extendido (60 segundos)
        });

        // espera adicional para cargar los elementos dinámicos
        await new Promise(resolve => setTimeout(resolve, 5000));

        // nos aseguramos que los contenedores estén presentes
        await page.waitForSelector('.max-w-narrow', { timeout: 10000 });

        // Selecciona todos los contenedores de eventos
        const events = await page.evaluate(() => {

            // obtenemos todos los anuncios de la página
            const eventElements = document.querySelectorAll('.max-w-narrow > div > div');
            
            return Array.from(eventElements).map(event => {
                // Extrae los datos de cada evento
                const title = event.querySelector('h2')?.textContent.trim() || "Título no disponible";
                const subtitle = event.querySelector('.line-clamp-1')?.innerText.trim() || "Subtítulo no encontrado";
                const organizer = event.querySelector('p')?.innerText.trim() || "Organizador no disponible";
                const description = event.querySelector('p.text-gray6')?.innerText.trim() || "Descripcion no disponible";
                const urlWeb = event.querySelector('a')?.href || "Enlace no disponible";
                const imgSrc = event.querySelector('img')?.src || "Imagen no disponible";
                
                return { title, subtitle, organizer, description, urlWeb, imgSrc };  // Devuelve los datos como un objeto
            });
        });

        //console.log(events);

        // eliminamos duplicados por enlace (si hay duplicados)
        const adUnico = Array
            .from(new Set(events.map(a => a.urlWeb))) 
            .map(urlWeb => events.find(a => a.urlWeb === urlWeb));

        // Imprime el array de eventos obtenidos
        console.log(adUnico);
        
        return adUnico;

    } catch (error) {
        console.error("Error durante el scraping:", error.message);
        return [];  // Devuelve un array vacío en caso de error
    } finally {
        await browser.close();
    }
}

exports.scrap = scrapeMeetup;
