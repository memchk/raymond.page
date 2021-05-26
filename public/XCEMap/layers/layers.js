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
var format_RawElevation201501m_1 = new ol.format.GeoJSON();
var features_RawElevation201501m_1 = format_RawElevation201501m_1.readFeatures(json_RawElevation201501m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawElevation201501m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawElevation201501m_1.addFeatures(features_RawElevation201501m_1);
var lyr_RawElevation201501m_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RawElevation201501m_1, 
                style: style_RawElevation201501m_1,
                interactive: true,
                title: '<img src="styles/legend/RawElevation201501m_1.png" /> Raw Elevation (2015) (0.1m)'
            });
var format_SlopeRemovedElevation201501m_2 = new ol.format.GeoJSON();
var features_SlopeRemovedElevation201501m_2 = format_SlopeRemovedElevation201501m_2.readFeatures(json_SlopeRemovedElevation201501m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SlopeRemovedElevation201501m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SlopeRemovedElevation201501m_2.addFeatures(features_SlopeRemovedElevation201501m_2);
var lyr_SlopeRemovedElevation201501m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SlopeRemovedElevation201501m_2, 
                style: style_SlopeRemovedElevation201501m_2,
                interactive: true,
                title: '<img src="styles/legend/SlopeRemovedElevation201501m_2.png" /> Slope Removed Elevation (2015) (0.1m)'
            });

lyr_Google_0.setVisible(true);lyr_RawElevation201501m_1.setVisible(true);lyr_SlopeRemovedElevation201501m_2.setVisible(false);
var layersList = [lyr_Google_0,lyr_RawElevation201501m_1,lyr_SlopeRemovedElevation201501m_2];
lyr_RawElevation201501m_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_SlopeRemovedElevation201501m_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_RawElevation201501m_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_SlopeRemovedElevation201501m_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_RawElevation201501m_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label', });
lyr_SlopeRemovedElevation201501m_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label', });
lyr_SlopeRemovedElevation201501m_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});