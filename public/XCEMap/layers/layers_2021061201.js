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

var lyr_ExcavationPlan_1 = new ol.layer.Image({
                opacity: 1,
                title: "FAA Plan",
                
                
                source: new ol.source.ImageStatic({
                   url: "./layers/ExcavationPlan_2.png",
attributions: ' ',
                    //projection: 'EPSG:3857',
                    alwaysInRange: true,
                    imageExtent: [-10861670.462401, 3583659.099345, -10861509.690095, 3584749.886539]
                })
            });

var lyr_DeansPlan_0 = new ol.layer.Image({
                opacity: 1,
                title: "Minimalist Plan",
                
                
                source: new ol.source.ImageStatic({
                   url: "./layers/DeansPlan_1.png",
attributions: ' ',
                    projection: 'EPSG:3857',
                    alwaysInRange: true,
                    imageExtent: [-10861644.317822, 3583710.310274, -10861541.311598, 3584695.235030]
                })
            });

var format_GradedElevation_0 = new ol.format.GeoJSON();
var features_GradedElevation_0 = format_GradedElevation_0.readFeatures(json_GradedElevation_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GradedElevation_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GradedElevation_0.addFeatures(features_GradedElevation_0);
var lyr_GradedElevation_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GradedElevation_0, 
                style: style_GradedElevation_0,
                interactive: true,
                title: '<img src="styles/legend/GradedElevation_0.png" /> FAA Graded Elevation (0.1m)'
            });


lyr_Google_0.setVisible(true);lyr_RawElevation201501m_1.setVisible(false);lyr_SlopeRemovedElevation201501m_2.setVisible(false);lyr_GradedElevation_0.setVisible(true);lyr_ExcavationPlan_1.setVisible(false);lyr_DeansPlan_0.setVisible(false);
var layersList = [lyr_Google_0,lyr_RawElevation201501m_1,lyr_SlopeRemovedElevation201501m_2, lyr_GradedElevation_0, lyr_ExcavationPlan_1, lyr_DeansPlan_0];
lyr_RawElevation201501m_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_SlopeRemovedElevation201501m_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_RawElevation201501m_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_SlopeRemovedElevation201501m_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_RawElevation201501m_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label', });
lyr_SlopeRemovedElevation201501m_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label', });
lyr_SlopeRemovedElevation201501m_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
lyr_GradedElevation_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_GradedElevation_0.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_GradedElevation_0.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label', });
lyr_GradedElevation_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});