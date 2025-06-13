import { traerDatos } from "./file-fetch.js";



// Token de la API (debería manejarse de forma segura en producción)
// const API_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJVU2ZTQ2RXcUlVSndRc2Y2Q1BzeGExM1VrQXl3MkViSGxHX0haT3IzUWNjIn0.eyJleHAiOjE3NDgxNjkzOTcsImlhdCI6MTc0ODA4NjU5NywianRpIjoiZWUyNmFlZTgtNDMwMC00YWNkLWJmZDgtOWNmZmRhOTBmNDUyIiwiaXNzIjoiaHR0cHM6Ly9zYWEuYXBuLmdvYi52ZS9yZWFsbXMvQVBJU0VHRU4iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNjEzYWJiYzYtZjRkNS00MWYzLWI5MTYtZmE5MzZlZTdkZGI2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBpcyIsInNpZCI6IjI1OGNmZTc0LTFlYjgtNGI5MC1hMTgxLTg5YWE0NGY5NDZjMSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9hcGlzZWdlbi5hcG4uZ29iLnZlIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImFwaS1pbnN0aXR1Y2lvbmVzIiwidW1hX2F1dGhvcml6YXRpb24iLCJhcGktZHB0Il19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IkZyYW5jaXNjbyBHdWVkZXoiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmZ3VlZGV6byIsImdpdmVuX25hbWUiOiJGcmFuY2lzY28iLCJmYW1pbHlfbmFtZSI6Ikd1ZWRleiIsImVtYWlsIjoiZmd1ZWRlejEzMTFAZ21haWwuY29tIn0.nxq0em_5K2r6m1-geG9ilya4MN11lTu0WAJfdJ9wjIWGiLyLcSHuwxjeDtpYmZTeMN2MoEq9supDdMRJOcZmpQifrzrJ7qSjWN2zoiK9dGLtI-o7-wJShjn-1UNckTuopwHjWdNKjGgCIcf0Nj1y2b7QGTRxQqp_HRW-aOaj5iLb3qkWrmaWbA2kn6MRPbipn37xn_aqXyoGxAdc7ANovOfQKcS5MECnTs9Rw-NBym4ew_QpMEpN46CGXUHdz0MAeYX6mGvwPjEkbWLruDHFMsYd1-qc05WVownTHYEt93pIZ7_s3CuSRUCsHf7Nr2OpjCVMM9kKcY2CfnOVkmjqbw';

// Datos de ejemplo en formato JSON para Estadísticas Delta
const publicationsData = [
    {
        "title": "Datos de Empleo",
        "description": "Estadísticas detalladas sobre empleo y desempleo por región",
        "format": "xls",
        "url": "https://example.com/reports/employment-data.xls"
    },
    {
        "title": "Indicadores Económicos 2023",
        "description": "Reporte trimestral de los principales indicadores económicos",
        "format": "pdf",
        "url": "https://example.com/reports/economic-indicators-2023-Q2.pdf"
    },
    {
        "title": "Población por Edad y Género",
        "description": "Distribución de la población según grupos de edad y género",
        "format": "csv",
        "url": "https://example.com/reports/population-age-gender.csv"
    },
    {
        "title": "Censo Educativo",
        "description": "Resultados del censo educativo nacional por nivel y región",
        "format": "xls",
        "url": "https://example.com/reports/education-census.xls"
    },
    {
        "title": "Indicadores de Salud",
        "description": "Estadísticas de morbilidad y mortalidad por enfermedad",
        "format": "pdf",
        "url": "https://example.com/reports/health-indicators.pdf"
    },
    {
        "title": "Actividad Comercial",
        "description": "Datos de importación y exportación por sector económico",
        "format": "csv",
        "url": "https://example.com/reports/commercial-activity.csv"
    },
    {
        "title": "Vivienda y Servicios",
        "description": "Indicadores de calidad de vivienda y acceso a servicios básicos",
        "format": "xls",
        "url": "https://example.com/reports/housing-services.xls"
    },
    {
        "title": "Indicadores Ambientales",
        "description": "Datos sobre calidad del aire, agua y gestión de residuos",
        "format": "pdf",
        "url": "https://example.com/reports/environmental-indicators.pdf"
    }
];

// // Datos de ejemplo para Estadísticas por Municipio
const municipioData = [
    {
        "title": "Empleo en Antonio Díaz",
        "municipio": "ANTONIO DIAZ",
        "description": "Estadísticas de empleo y desempleo en el municipio Antonio Díaz",
        "format": "xls",
        "url": "https://example.com/reports/empleo-antonio-diaz.xls"
    },
    {
        "title": "Educación en Pedernales",
        "municipio": "PEDERNALES",
        "description": "Indicadores educativos en el municipio Pedernales",
        "format": "pdf",
        "url": "https://example.com/reports/educacion-pedernales.pdf"
    },
    {
        "title": "Salud en Casacoima",
        "municipio": "CASACOIMA",
        "description": "Datos de salud pública en el municipio Casacoima",
        "format": "csv",
        "url": "https://example.com/reports/salud-casacoima.csv"
    },
    {
        "title": "Economía en Tucupita",
        "municipio": "TUCUPITA",
        "description": "Indicadores económicos del municipio Tucupita",
        "format": "xls",
        "url": "https://example.com/reports/economia-tucupita.xls"
    },
    {
        "title": "Población en Antonio Díaz",
        "municipio": "ANTONIO DIAZ",
        "description": "Distribución poblacional en el municipio Antonio Díaz",
        "format": "pdf",
        "url": "https://example.com/reports/poblacion-antonio-diaz.pdf"
    },
    {
        "title": "Vivienda en Pedernales",
        "municipio": "PEDERNALES",
        "description": "Indicadores de vivienda en el municipio Pedernales",
        "format": "xls",
        "url": "https://example.com/reports/vivienda-pedernales.xls"
    }
];

// Datos de ejemplo para Estadísticas por Parroquia
// const parroquiaData = [
//     {
//         "title": "Empleo en Curiapo",
//         "parroquia": "CURIAPO",
//         "municipio": "ANTONIO DIAZ",
//         "description": "Estadísticas de empleo en la parroquia Curiapo",
//         "format": "xls",
//         "url": "https://example.com/reports/empleo-curiapo.xls"
//     },
//     {
//         "title": "Educación en San José",
//         "parroquia": "SAN JOSÉ",
//         "municipio": "TUCUPITA",
//         "description": "Indicadores educativos en la parroquia San José",
//         "format": "pdf",
//         "url": "https://example.com/reports/educacion-san-jose.pdf"
//     },
//     {
//         "title": "Salud en Imataca",
//         "parroquia": "IMATACA",
//         "municipio": "CASACOIMA",
//         "description": "Datos de salud en la parroquia Imataca",
//         "format": "csv",
//         "url": "https://example.com/reports/salud-imataca.csv"
//     },
//     {
//         "title": "Economía en Virgen del Valle",
//         "parroquia": "VIRGEN DEL VALLE",
//         "municipio": "TUCUPITA",
//         "description": "Indicadores económicos en la parroquia Virgen del Valle",
//         "format": "xls",
//         "url": "https://example.com/reports/economia-virgen-valle.xls"
//     },
//     {
//         "title": "Población en Almirante Luis Brión",
//         "parroquia": "ALMIRANTE LUIS BRIÓN",
//         "municipio": "ANTONIO DIAZ",
//         "description": "Distribución poblacional en la parroquia Almirante Luis Brión",
//         "format": "pdf",
//         "url": "https://example.com/reports/poblacion-almirante-brion.pdf"
//     },
//     {
//         "title": "Vivienda en Cinco de Julio",
//         "parroquia": "CINCO DE JULIO",
//         "municipio": "CASACOIMA",
//         "description": "Indicadores de vivienda en la parroquia Cinco de Julio",
//         "format": "xls",
//         "url": "https://example.com/reports/vivienda-cinco-julio.xls"
//     }
// ];

// Datos de parroquias en formato JSON

// const parroquiasData = {
//     "dpt": [
//         {
//             "codigo": 100100,
//             "nombre": "ANTONIO DÍAZ"
//         },
//         {
//             "codigo": 100101,
//             "nombre": "CURIAPO"
//         },
//         {
//             "codigo": 100102,
//             "nombre": "ALMIRANTE LUIS BRIÓN"
//         },
//         {
//             "codigo": 100103,
//             "nombre": "FRANCISCO ANICETOT LUGO"
//         },
//         {
//             "codigo": 100104,
//             "nombre": "MANUEL RENAUD"
//         },
//         {
//             "codigo": 100105,
//             "nombre": "PADRE BARAL"
//         },
//         {
//             "codigo": 100106,
//             "nombre": "SANTOS DE ABELGAS"
//         },
//         {
//             "codigo": 100200,
//             "nombre": "CASACOIMA"
//         },
//         {
//             "codigo": 100201,
//             "nombre": "IMATACA"
//         },
//         {
//             "codigo": 100202,
//             "nombre": "CINCO DE JULIO"
//         },
//         {
//             "codigo": 100203,
//             "nombre": "JUAN BAUTISTA ARISMENDI"
//         },
//         {
//             "codigo": 100204,
//             "nombre": "MANUEL PIAR"
//         },
//         {
//             "codigo": 100205,
//             "nombre": "ROMULO GALLEGOS"
//         },
//         {
//             "codigo": 100300,
//             "nombre": "PEDERNALES"
//         },
//         {
//             "codigo": 100400,
//             "nombre": "TUCUPITA"
//         },
//         {
//             "codigo": 100401,
//             "nombre": "SAN JOSÉ"
//         },
//         {
//             "codigo": 100402,
//             "nombre": "JOSE VIDAL MARCANO"
//         },
//         {
//             "codigo": 100403,
//             "nombre": "JUAN MILLAN"
//         },
//         {
//             "codigo": 100404,
//             "nombre": "LEONARDO RUIZ PINEDA"
//         },
//         {
//             "codigo": 100405,
//             "nombre": "MARISCAL ANTONIO JOSÉ DE SUCRE"
//         },
//         {
//             "codigo": 100406,
//             "nombre": "MONSEÑOR ARGIMIRO GARCÍA"
//         },
//         {
//             "codigo": 100407,
//             "nombre": "SAN RAFAEL"
//         },
//         {
//             "codigo": 100408,
//             "nombre": "VIRGEN DEL VALLE"
//         }
//     ]
// };
const parroquiaData= await traerDatos();


// Variables para paginación de cada sección
const paginationConfig = {
    delta: {
        currentPage: 1,
        itemsPerPage: 5,
        filteredData: [...publicationsData],
        tableBody: document.getElementById('publications-table-body'),
        prevButton: document.getElementById('prev-page'),
        nextButton: document.getElementById('next-page'),
        pageInfo: document.getElementById('page-info'),
        resultsCount: document.getElementById('results-count')
    },
    municipio: {
        currentPage: 1,
        itemsPerPage: 5,
        filteredData: [...municipioData],
        tableBody: document.getElementById('municipio-table-body'),
        prevButton: document.getElementById('municipio-prev-page'),
        nextButton: document.getElementById('municipio-next-page'),
        pageInfo: document.getElementById('municipio-page-info'),
        resultsCount: document.getElementById('municipio-results-count')
    },
    parroquia: {
        currentPage: 1,
        itemsPerPage: 5,
        filteredData: [...parroquiaData],
        tableBody: document.getElementById('parroquia-table-body'),
        prevButton: document.getElementById('parroquia-prev-page'),
        nextButton: document.getElementById('parroquia-next-page'),
        pageInfo: document.getElementById('parroquia-page-info'),
        resultsCount: document.getElementById('parroquia-results-count')
    }
};

// Elementos del DOM
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const searchInput = document.getElementById('search-input');
const formatFilter = document.getElementById('format-filter');

// Filtros para municipio
const municipioFilter = document.getElementById('municipio-filter');
const municipioFormatFilter = document.getElementById('municipio-format-filter');
const municipioSearch = document.getElementById('municipio-search');

// Filtros para parroquia
const parroquiaFilter = document.getElementById('parroquia-filter');
const parroquiaFormatFilter = document.getElementById('parroquia-format-filter');
const parroquiaSearch = document.getElementById('parroquia-search');

// Elementos del Nomenclador
const entidadFilter = document.getElementById('entidad-filter');
const nomencladorMunicipioFilter = document.getElementById('nomenclador-municipio-filter');
const nomencladorParroquiaFilter = document.getElementById('nomenclador-parroquia-filter');
const buscarComunidadesBtn = document.getElementById('buscar-comunidades-btn');
const comunidadesTableBody = document.getElementById('comunidades-table-body');
const buscarText = document.getElementById('buscar-text');
const loadingSpinner = document.getElementById('loading-spinner');

// Secciones
const sections = {
    home: document.getElementById('home-section'),
    delta: document.getElementById('delta-section'),
    municipio: document.getElementById('municipio-section'),
    parroquia: document.getElementById('parroquia-section'),
    nomenclador: document.getElementById('nomenclador-section')
};

// Enlaces de navegación
const navLinks = {
    home: document.getElementById('home-link'),
    delta: document.getElementById('delta-link'),
    municipio: document.getElementById('municipio-link'),
    parroquia: document.getElementById('parroquia-link'),
    nomenclador: document.getElementById('nomenclador-link')
};

const mobileNavLinks = {
    home: document.getElementById('mobile-home-link'),
    delta: document.getElementById('mobile-delta-link'),
    municipio: document.getElementById('mobile-municipio-link'),
    parroquia: document.getElementById('mobile-parroquia-link'),
    nomenclador: document.getElementById('mobile-nomenclador-link')
};

// Función para mostrar una sección y ocultar las demás
function showSection(sectionName) {
    // Ocultar todas las secciones
    Object.values(sections).forEach(section => {
        section.classList.add('hidden');
    });
    
    // Mostrar la sección seleccionada
    sections[sectionName].classList.remove('hidden');
    
    // Actualizar clases de navegación activa
    Object.values(navLinks).forEach(link => {
        link.classList.remove('active-nav', 'text-blue-600');
        link.classList.add('text-gray-700');
    });
    
    Object.values(mobileNavLinks).forEach(link => {
        link.classList.remove('text-blue-600');
        link.classList.add('text-gray-700');
    });
    
    // Establecer el enlace activo
    navLinks[sectionName].classList.add('active-nav', 'text-blue-600');
    navLinks[sectionName].classList.remove('text-gray-700');
    
    mobileNavLinks[sectionName].classList.add('text-blue-600');
    mobileNavLinks[sectionName].classList.remove('text-gray-700');
    
    // Si es la sección delta, cargar los datos
    if (sectionName === 'delta') {
        renderTable('delta');
    } else if (sectionName === 'municipio') {
        renderTable('municipio');
    } else if (sectionName === 'parroquia') {
        
        renderTable('parroquia');
    }
    
    // Cerrar menú móvil si está abierto
    mobileMenu.classList.add('hidden');
}



// Función para renderizar la tabla con los datos
function renderTable(section) {
    const config = paginationConfig[section];
    
    
    // Calcular índices para la paginación
    const startIndex = (config.currentPage - 1) * config.itemsPerPage;
    const endIndex = startIndex + config.itemsPerPage;
    const paginatedData = config.filteredData.slice(startIndex, endIndex);
    
    // Limpiar el cuerpo de la tabla
    config.tableBody.innerHTML = '';
    
    // Llenar la tabla con los datos
    paginatedData.forEach(item => {
        const row = document.createElement('tr');
        
        // Icono según el formato
        let formatIcon;
        switch(item.format) {
            case 'xls':
            case 'xlsx':
                formatIcon = '<i class="fas fa-file-excel text-green-600"></i>';
                break;
            case 'pdf':
                formatIcon = '<i class="fas fa-file-pdf text-red-600"></i>';
                break;
            case 'ppt':
            case 'pptx':
                formatIcon = '<i class="fas fa-file-powerpoint text-orange-600"></i>';
                break;
            case "jpg":
            case "jpeg":    
            case "png":
                formatIcon = '<i class="fas fa-file-image text-blue-600"></i>';
                break;  
            case "video":
            case "mp4":
            case "mov":
                formatIcon = '<i class="fas fa-file-video text-purple-600"></i>';
                break;
            default:
                formatIcon = '<i class="fas fa-file text-gray-600"></i>';
        }
        
        // Construir el contenido de la fila según la sección
        let rowContent = '';
        if (section === 'delta') {
            
            // rowContent = `
            //     <td data-label="Título">${item.title}</td>
            //     <td data-label="Descripción">${item.descripcion}</td>
            //     <td data-label="Formato">
            //         <span class="inline-flex items-center">
            //             ${formatIcon}
            //             <span class="ml-2">${item.format.toUpperCase()}</span>
            //         </span>
            //     </td>
            //     <td data-label="Acción">
            //         <a href="${item.url}" class="download-btn inline-flex items-center"  target="_blank" download>
            //             <i class="fas fa-download mr-2"></i>
            //             Descargar
            //         </a>
            //     </td>
            // `;
        } else if (section === 'municipio') {
            // rowContent = `
            //     <td data-label="Título">${item.title}</td>
            //     <td data-label="Municipio">${item.municipio}</td>
            //     <td data-label="Descripción">${item.description}</td>
            //     <td data-label="Formato">
            //         <span class="inline-flex items-center">
            //             ${formatIcon}
            //             <span class="ml-2">${item.format.toUpperCase()}</span>
            //         </span>
            //     </td>
            //     <td data-label="Acción">
            //         <a href="${item.url}" class="download-btn inline-flex items-center" download>
            //             <i class="fas fa-download mr-2"></i>
            //             Descargar
            //         </a>
            //     </td>
            // `;
        } else if (section === 'parroquia') {
            rowContent = `
                <td data-label="Título">${item.title}</td>
                <td data-label="Parroquia">${item.cod_dpt}</td>
                <td data-label="Descripción">${item.description}</td>
                <td data-label="Formato">
                    <span class="inline-flex items-center">
                        ${formatIcon}
                        <span class="ml-2">${item.format.toUpperCase()}</span>
                    </span>
                </td>
                <td data-label="Acción">
                    <a href="${item.url}" class="download-btn inline-flex items-center"  target="_blank" download>
                        <i class="fas fa-download mr-2"></i>
                        Descargar
                    </a>
                </td>
            `;
        }
        
        row.innerHTML = rowContent;
        config.tableBody.appendChild(row);
    });
    
    // Actualizar información de paginación
    updatePaginationInfo(section);
}

// Función para actualizar la información de paginación
function updatePaginationInfo(section) {
    const config = paginationConfig[section];
    const totalPages = Math.ceil(config.filteredData.length / config.itemsPerPage);
    
    // Actualizar texto de página
    config.pageInfo.textContent = `Página ${config.currentPage} de ${totalPages}`;
    
    // Actualizar contador de resultados
    const startItem = (config.currentPage - 1) * config.itemsPerPage + 1;
    const endItem = Math.min(config.currentPage * config.itemsPerPage, config.filteredData.length);
    config.resultsCount.textContent = `Mostrando ${startItem}-${endItem} de ${config.filteredData.length} resultados`;
    
    // Habilitar/deshabilitar botones de paginación
    config.prevButton.disabled = config.currentPage === 1;
    config.nextButton.disabled = config.currentPage === totalPages || totalPages === 0;
}

// Función para filtrar los datos de Estadísticas Delta
function filterDeltaData() {
    const searchTerm = searchInput.value.toLowerCase();
    const formatValue = formatFilter.value;
    
    paginationConfig.delta.filteredData = publicationsData.filter(publication => {
        const matchesSearch = publication.title.toLowerCase().includes(searchTerm) || 
                                publication.description.toLowerCase().includes(searchTerm);
        const matchesFormat = formatValue === 'all' || publication.format === formatValue;
        
        return matchesSearch && matchesFormat;
    });
    
    // Resetear a la primera página
    paginationConfig.delta.currentPage = 1;
    
    // Renderizar la tabla con los datos filtrados
    renderTable('delta');
}

// Función para filtrar los datos de Estadísticas por Municipio
function filterMunicipioData() {
    const searchTerm = municipioSearch.value.toLowerCase();
    const formatValue = municipioFormatFilter.value;
    const municipioValue = municipioFilter.value;
    
    paginationConfig.municipio.filteredData = municipioData.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm) || 
                                item.description.toLowerCase().includes(searchTerm);
        const matchesFormat = formatValue === 'all' || item.format === formatValue;
        const matchesMunicipio = municipioValue === 'all' || item.municipio === municipioValue;
        
        return matchesSearch && matchesFormat && matchesMunicipio;
    });
    
    // Resetear a la primera página
    paginationConfig.municipio.currentPage = 1;
    
    // Renderizar la tabla con los datos filtrados
    renderTable('municipio');
}

// Función para filtrar los datos de Estadísticas por Parroquia
function filterParroquiaData() {
    const searchTerm = parroquiaSearch.value.toLowerCase();
    // const formatValue = parroquiaFormatFilter.value;
    // const parroquiaValue = parroquiaFilter.value;
    
    paginationConfig.parroquia.filteredData = parroquiaData.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm) || 
                                item.description.toLowerCase().includes(searchTerm) ||  
                                item.cod_dpt.toLowerCase().includes(searchTerm);
        

        
        return matchesSearch 
    });
    
    // Resetear a la primera página
    paginationConfig.parroquia.currentPage = 1;
    
    // Renderizar la tabla con los datos filtrados
    renderTable('parroquia');
}

// Función para buscar comunidades en la API
async function buscarComunidades() {
    const codEntidad = entidadFilter.value;
    const codMunicipio = nomencladorMunicipioFilter.value;
    const codParroquia = nomencladorParroquiaFilter.value;
    
    // Mostrar loading
    buscarText.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');
    buscarComunidadesBtn.disabled = true;
    
    try {
        const url = `https://apisegen.apn.gob.ve/api/v1/listadoComunidad?token=${API_TOKEN}&codEntidad=${codEntidad}&codMunicipio=${codMunicipio}&codParroquia=${codParroquia}`;
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Limpiar la tabla
        comunidadesTableBody.innerHTML = '';
        
        if (data.data && data.data.length > 0) {
            // Llenar la tabla con los datos de las comunidades
            data.data.forEach(comunidad => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td data-label="Código INE">${comunidad.id_comunidad_ine}</td>
                    <td data-label="Nombre de la Comunidad">${comunidad.nombre_comunidad}</td>
                `;
                comunidadesTableBody.appendChild(row);
            });
        } else {
            // Mostrar mensaje si no hay datos
            const row = document.createElement('tr');
            row.innerHTML = `
                <td colspan="2" class="text-center py-4 text-gray-500">No se encontraron comunidades para esta parroquia</td>
            `;
            comunidadesTableBody.appendChild(row);
        }
    } catch (error) {
        console.error('Error al obtener las comunidades:', error);
        
        // Mostrar mensaje de error
        comunidadesTableBody.innerHTML = '';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="2" class="text-center py-4 text-red-500">Error al cargar los datos. Por favor, intente nuevamente.</td>
        `;
        comunidadesTableBody.appendChild(row);
    } finally {
        // Ocultar loading
        buscarText.classList.remove('hidden');
        loadingSpinner.classList.add('hidden');
        buscarComunidadesBtn.disabled = false;
    }
}

// Event Listeners
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Navegación principal
navLinks.home.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('home');
});

navLinks.delta.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('delta');
});

navLinks.municipio.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('municipio');
});

navLinks.parroquia.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('parroquia');
});

navLinks.nomenclador.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('nomenclador');
});

// Navegación móvil
mobileNavLinks.home.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('home');
});

mobileNavLinks.delta.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('delta');
});

mobileNavLinks.municipio.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('municipio');
});

mobileNavLinks.parroquia.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('parroquia');
});

mobileNavLinks.nomenclador.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('nomenclador');
});

// Filtros y búsqueda para Estadísticas Delta
// searchInput.addEventListener('input', filterDeltaData);
// formatFilter.addEventListener('change', filterDeltaData);

// Filtros y búsqueda para Estadísticas por Municipio
// municipioFilter.addEventListener('change', filterMunicipioData);
// municipioFormatFilter.addEventListener('change', filterMunicipioData);
// municipioSearch.addEventListener('input', filterMunicipioData);

// Filtros y búsqueda para Estadísticas por Parroquia

parroquiaSearch.addEventListener('input', filterParroquiaData);

// Botón para buscar comunidades
buscarComunidadesBtn.addEventListener('click', buscarComunidades);

// Paginación para cada sección
document.getElementById('prev-page').addEventListener('click', () => {
    if (paginationConfig.delta.currentPage > 1) {
        paginationConfig.delta.currentPage--;
        renderTable('delta');
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    const totalPages = Math.ceil(paginationConfig.delta.filteredData.length / paginationConfig.delta.itemsPerPage);
    if (paginationConfig.delta.currentPage < totalPages) {
        paginationConfig.delta.currentPage++;
        renderTable('delta');
    }
});

document.getElementById('municipio-prev-page').addEventListener('click', () => {
    if (paginationConfig.municipio.currentPage > 1) {
        paginationConfig.municipio.currentPage--;
        renderTable('municipio');
    }
});

document.getElementById('municipio-next-page').addEventListener('click', () => {
    const totalPages = Math.ceil(paginationConfig.municipio.filteredData.length / paginationConfig.municipio.itemsPerPage);
    if (paginationConfig.municipio.currentPage < totalPages) {
        paginationConfig.municipio.currentPage++;
        renderTable('municipio');
    }
});

document.getElementById('parroquia-prev-page').addEventListener('click', () => {
    if (paginationConfig.parroquia.currentPage > 1) {
        paginationConfig.parroquia.currentPage--;
        renderTable('parroquia');
    }
});

document.getElementById('parroquia-next-page').addEventListener('click', () => {
    const totalPages = Math.ceil(paginationConfig.parroquia.filteredData.length / paginationConfig.parroquia.itemsPerPage);
    if (paginationConfig.parroquia.currentPage < totalPages) {
        paginationConfig.parroquia.currentPage++;
        renderTable('parroquia');
    }
});

// Mostrar la sección home por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
