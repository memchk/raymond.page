var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga'
            })
        });
var format_Clippedmask_1 = new ol.format.GeoJSON();
var features_Clippedmask_1 = format_Clippedmask_1.readFeatures(json_Clippedmask_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clippedmask_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clippedmask_1.addFeatures(features_Clippedmask_1);
var lyr_Clippedmask_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clippedmask_1, 
                style: style_Clippedmask_1,
                interactive: true,
                title: '<img src="styles/legend/Clippedmask_1.png" /> Clipped (mask)'
            });

lyr_Google_0.setVisible(true);lyr_Clippedmask_1.setVisible(true);
var layersList = [lyr_Google_0,lyr_Clippedmask_1];
lyr_Clippedmask_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Clippedmask_1.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_Clippedmask_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_Clippedmask_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});