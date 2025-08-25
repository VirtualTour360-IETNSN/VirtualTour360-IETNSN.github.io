import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

// markers-panel data

await fetch('markers_panel.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('markers-panel-container').innerHTML = html;
    });
export function viewerObj() {
    // panorama scenes    

    const nodes = [
        {
            id: 'node-1',
            panorama: 'panoramics/Pano_Cancha_Top.webp',
            //longitude: '-150deg',
            sphereCorrection: { pan: '180deg' },
            markers: [
                {
                    id: 'goto-node-2',
                    position: { yaw: '-126deg', pitch: '1deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Inferior',
                },
                {
                    id: 'goto-node-3',
                    position: { yaw: '-92deg', pitch: '3deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Sala de Profesores',
                },
                {
                    id: 'goto-node-4',
                    position: { yaw: '-51deg', pitch: '3.5deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Salon de Artistica',
                },
                {
                    id: 'goto-node-5',
                    position: { yaw: '-33deg', pitch: '6deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Salon de Sociales',
                },
                {
                    id: 'goto-node-6',
                    position: { yaw: '-4deg', pitch: '11deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Salon de Educacion Fisica',
                },
                {
                    id: 'goto-node-7',
                    position: { yaw: '27deg', pitch: '12deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Matematicas',
                },
                {
                    id: 'goto-node-8',
                    position: { yaw: '46deg', pitch: '12deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Sala de Castellano',
                },
                {
                    id: 'goto-node-9',
                    position: { yaw: '58deg', pitch: '13deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Sala de Biblioteca',
                },
                {
                    id: 'goto-node-10',
                    position: { yaw: '66deg', pitch: '13deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Sala de Sistemas 1',
                },
                {
                    id: 'goto-node-11',
                    position: { yaw: '74deg', pitch: '18deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Sala de Sistemas 2',
                },
                {
                    id: 'goto-node-12',
                    position: { yaw: '111.3deg', pitch: '17deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Sala de Ingles',
                },
                {
                    id: 'goto-node-13',
                    position: { yaw: '122.5deg', pitch: '15.5deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Salon de Naturales - Religion',
                },
                {
                    id: 'goto-node-14',
                    position: { yaw: '132.2deg', pitch: '14deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Salon de Quimica',
                },
                {
                    id: 'goto-node-15',
                    position: { yaw: '146deg', pitch: '4deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Comedor',
                },
                {
                    id: 'goto-node-16',
                    position: { yaw: '173deg', pitch: '6deg' },
                    image: 'icons/hard-target.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Aula Multiple',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '-181.5deg', pitch: '3.5deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Entrada / Salida</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                },
                {
                    id: 'panel-02',
                    position: { yaw: '-88deg', pitch: '1deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Rectoria</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                },
                {
                    id: 'panel-03',
                    position: { yaw: '-76deg', pitch: '3deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Baño de Mujeres</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                },
                {
                    id: 'panel-04',
                    position: { yaw: '-66deg', pitch: '3deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Baño de Hombres</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                },
                {
                    id: 'panel-05',
                    position: { yaw: '98.5deg', pitch: '17deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Taller</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-2',
            panorama: 'panoramics/Pano_Cancha_Bot.webp',
            /*panoData: {
                fullWidth: 16384,
                fullHeight: 8192,
                croppedWidth: 8192,
                croppedHeight: 4096,
                croppedX: 4096,
                croppedY: 2048,
            },*/
            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '180deg', pitch: '-1deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '1.5deg', pitch: '-2deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-3',
            panorama: 'panoramics/Pano_Sala_Profesores.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '142deg', pitch: '9deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-03',
                    position: { yaw: '0deg', pitch: '4deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-4',
            panorama: 'panoramics/Pano_Salon_Arte.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '-125deg', pitch: '3deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '0deg', pitch: '5deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-5',
            panorama: 'panoramics/Pano_Salon_Sociales.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '-146deg', pitch: '9deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-05',
                    position: { yaw: '-2deg', pitch: '8deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-6',
            panorama: 'panoramics/Pano_Salon_EduFisica.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '-140deg', pitch: '11deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '-1deg', pitch: '6deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-7',
            panorama: 'panoramics/Pano_Salon_Castellano.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '-2deg', pitch: '-10deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '3deg', pitch: '28deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-8',
            panorama: 'panoramics/Pano_Salon_Castellano.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '-137.8deg', pitch: '8deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '-3deg', pitch: '6deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-9',
            panorama: 'panoramics/Pano_Biblioteca.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '-148deg', pitch: '6.5deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '0deg', pitch: '7deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-10',
            panorama: 'panoramics/Pano_Salon_Sistemas_1.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '-152deg', pitch: '5deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '0deg', pitch: '4deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-11',
            panorama: 'panoramics/Pano_Salon_Sistemas_2.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '162deg', pitch: '12deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '0deg', pitch: '8deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-12',
            panorama: 'panoramics/Pano_Salon_Ingles.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '-67deg', pitch: '0deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '1deg', pitch: '6deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-13',
            panorama: 'panoramics/Pano_Salon_CieNaturales.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '-35deg', pitch: '4deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '-2deg', pitch: '8deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        }
        , {
            id: 'node-14',
            panorama: 'panoramics/Pano_Salon_Quimica.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '85deg', pitch: '0deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '-4deg', pitch: '1deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-15',
            panorama: 'panoramics/Pano_Comedor.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '-2deg', pitch: '10deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '23deg', pitch: '28deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        },
        {
            id: 'node-16',
            panorama: 'panoramics/Pano_Aula_Multiple.webp',

            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: 'goto-node-1',
                    position: { yaw: '-2deg', pitch: '10deg' },
                    image: 'icons/back-to-time.svg',
                    size: { width: 48, height: 48 },
                    opacity: 0.75,
                    tooltip: 'Cancha Principal',
                },
                {
                    id: 'panel-01',
                    position: { yaw: '23deg', pitch: '28deg' },
                    image: 'icons/the-messenger.svg',
                    size: { width: 48, height: 48 },
                    anchor: 'bottom center',
                    zoomLvl: 100,
                    opacity: 0.75,
                    tooltip: '<b>Informacion</b>',
                    content: document.getElementById('lorem-content01').innerHTML,
                    zIndex: 10,
                }
            ]
        }
    ];


    // viewer configs

    const viewer = new Viewer({

        container: document.querySelector('#viewer'),
        defaultZoomLvl: 50,
        mousewheelCtrlKey: true,
        navbar: ['zoom', 'markersList', 'fullscreen'],
        lang: {
            zoomOut: 'Acercar',
            zoomIn: 'Alejar',
            fullscreen: 'Pantalla Completa',
            markers: 'Marcadores',
            markersList: 'Marcadores',
            ctrlZoom: 'Usa CTRL + Scroll para hacer zoom 🐁',
            loadError: 'Esto no deberia pasar ( ꩜ ᯅ ꩜;)⁭ ⁭',
            webglError: 'Tu navegador no suporta WebGL (ó﹏ò｡)',
        },

        plugins: [
            [VirtualTourPlugin, {
                positionMode: 'manual',
                renderMode: '3d',
                nodes: nodes,
                startNodeId: 'node-1',
            }],
            [MarkersPlugin, {}],

        ]
    });

    const vtPlugin = viewer.getPlugin(VirtualTourPlugin);
    const markersPlugin = viewer.getPlugin(MarkersPlugin);

    // select-markers setup

    vtPlugin.addEventListener('select-marker', ({ marker }) => {
        console.log('Marker seleccionado:', marker);
        if (marker.content) {
            markersPlugin.showPanel(marker.id);

        }
    });

    viewer.getPlugin(MarkersPlugin).addEventListener('select-marker', ({ marker }) => {
        if (marker.id === 'goto-node-1') {
            vtPlugin.setCurrentNode('node-1');
        }
        if (marker.id === 'goto-node-2') {
            vtPlugin.setCurrentNode('node-2');
        }
        if (marker.id === 'goto-node-3') {
            vtPlugin.setCurrentNode('node-3');
        }
        if (marker.id === 'goto-node-4') {
            vtPlugin.setCurrentNode('node-4');
        }
        if (marker.id === 'goto-node-5') {
            vtPlugin.setCurrentNode('node-5');
        }
        if (marker.id === 'goto-node-6') {
            vtPlugin.setCurrentNode('node-6');
        }
        if (marker.id === 'goto-node-7') {
            vtPlugin.setCurrentNode('node-7');
        }
        if (marker.id === 'goto-node-8') {
            vtPlugin.setCurrentNode('node-8');
        }
        if (marker.id === 'goto-node-9') {
            vtPlugin.setCurrentNode('node-9');
        }
        if (marker.id === 'goto-node-10') {
            vtPlugin.setCurrentNode('node-10');
        }
        if (marker.id === 'goto-node-11') {
            vtPlugin.setCurrentNode('node-11');
        }
        if (marker.id === 'goto-node-12') {
            vtPlugin.setCurrentNode('node-12');
        }
        if (marker.id === 'goto-node-13') {
            vtPlugin.setCurrentNode('node-13');
        }
        if (marker.id === 'goto-node-14') {
            vtPlugin.setCurrentNode('node-14');
        }
        if (marker.id === 'goto-node-15') {
            vtPlugin.setCurrentNode('node-15');
        }
        if (marker.id === 'goto-node-16') {
            vtPlugin.setCurrentNode('node-16');
        }
    });

}
