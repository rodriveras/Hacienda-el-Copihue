var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Satelite_1 = new ol.layer.Tile({
            'title': 'Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Accesos_2 = new ol.format.GeoJSON();
var features_Accesos_2 = format_Accesos_2.readFeatures(json_Accesos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesos_2.addFeatures(features_Accesos_2);
var lyr_Accesos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesos_2, 
                style: style_Accesos_2,
                popuplayertitle: 'Accesos',
                interactive: false,
                title: '<img src="styles/legend/Accesos_2.png" /> Accesos'
            });
var format_Limite_3 = new ol.format.GeoJSON();
var features_Limite_3 = format_Limite_3.readFeatures(json_Limite_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_3.addFeatures(features_Limite_3);
var lyr_Limite_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_3, 
                style: style_Limite_3,
                popuplayertitle: 'Limite',
                interactive: false,
                title: '<img src="styles/legend/Limite_3.png" /> Limite'
            });
var format_Vendidas_4 = new ol.format.GeoJSON();
var features_Vendidas_4 = format_Vendidas_4.readFeatures(json_Vendidas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vendidas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vendidas_4.addFeatures(features_Vendidas_4);
var lyr_Vendidas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vendidas_4,
maxResolution:4.200669922839294,
 
                style: style_Vendidas_4,
                popuplayertitle: 'Vendidas',
                interactive: true,
                title: '<img src="styles/legend/Vendidas_4.png" /> Vendidas'
            });
var format_Disponibles_5 = new ol.format.GeoJSON();
var features_Disponibles_5 = format_Disponibles_5.readFeatures(json_Disponibles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Disponibles_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Disponibles_5.addFeatures(features_Disponibles_5);
var lyr_Disponibles_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Disponibles_5,
maxResolution:4.200669922839294,
 
                style: style_Disponibles_5,
                popuplayertitle: 'Disponibles',
                interactive: true,
                title: '<img src="styles/legend/Disponibles_5.png" /> Disponibles'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Satelite_1.setVisible(true);lyr_Accesos_2.setVisible(true);lyr_Limite_3.setVisible(true);lyr_Vendidas_4.setVisible(true);lyr_Disponibles_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Satelite_1,lyr_Accesos_2,lyr_Limite_3,lyr_Vendidas_4,lyr_Disponibles_5];
lyr_Accesos_2.set('fieldAliases', {'id': 'id', });
lyr_Limite_3.set('fieldAliases', {'id': 'id', });
lyr_Vendidas_4.set('fieldAliases', {'Lote': 'Lote', 'Area': 'Area', 'Estado': 'Estado', });
lyr_Disponibles_5.set('fieldAliases', {'Lote': 'Lote', 'Area': 'Area', 'Estado': 'Estado', 'Precio': 'Precio', });
lyr_Accesos_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Limite_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Vendidas_4.set('fieldImages', {'Lote': 'TextEdit', 'Area': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Disponibles_5.set('fieldImages', {'Lote': 'TextEdit', 'Area': 'TextEdit', 'Estado': 'TextEdit', 'Precio': 'TextEdit', });
lyr_Accesos_2.set('fieldLabels', {'id': 'no label', });
lyr_Limite_3.set('fieldLabels', {'id': 'no label', });
lyr_Vendidas_4.set('fieldLabels', {'Lote': 'inline label - always visible', 'Area': 'inline label - always visible', 'Estado': 'inline label - always visible', });
lyr_Disponibles_5.set('fieldLabels', {'Lote': 'inline label - always visible', 'Area': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Precio': 'inline label - always visible', });
lyr_Disponibles_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});