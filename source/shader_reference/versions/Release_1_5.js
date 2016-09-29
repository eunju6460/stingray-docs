var version_diff_shaders_ref_Release_1_5 = {
  "node":[{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"node_Input___Last_Time\" data-reftooltip-refid=\"shaders_ref\"><a class=\"el\" href=\"cat_Input.html#node_Input___Last_Time\">Input > Last Time</a></span>",
      "version":"Release 1.5",
      "name":"Input > Last Time"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"node_Output___Standard_Base\" data-reftooltip-refid=\"shaders_ref\"><a class=\"el\" href=\"cat_Output.html#node_Output___Standard_Base\">Output > Standard Base</a></span>",
      "details":"<table class='paramTable'><tr><td style='border:none'><span class='paramTableCaption'>Inputs</span></td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"vector3\" data-tooltip-refid=\"shaders_ref\">vector3</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#BD6F38; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#BD6F38\">Position Offset</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>An optional world-space offset to apply to the position of the pixel being\n        shaded, changing the apparent placement of the object in the scene.</p>\n</td></tr><tr class='version-added-inner'><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"vector3\" data-tooltip-refid=\"shaders_ref\">vector3</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#BD6F38; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#BD6F38\">Last Position Offset</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>An optional last frame world-space offset to supply if a user is using the\n        Position Offset option to be able to calculate velocities to accuratly do\n        temporal based effects without artifacts.</p>\n</td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"vector3\" data-tooltip-refid=\"shaders_ref\">vector3</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#BD6F38; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#BD6F38\">Base Color</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>The RGB color of the pixel being shaded.</p>\n</td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"scalar\" data-tooltip-refid=\"shaders_ref\">scalar</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#639230; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#639230\">Opacity</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>The opacity of the pixel being shaded. Values closer to <span class=\"code\">0</span> are more transparent;\n        values closer to <span class=\"code\">1</span> are more opaque. Note that this value is used differently\n        depending on the value of the <em>Blend Mode</em> option.</p>\n\n<p>        Default value: <span class=\"code\">0.5</span>.</p>\n</td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"scalar\" data-tooltip-refid=\"shaders_ref\">scalar</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#639230; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#639230\">Opacity Threshold</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>When the <em>Blend Mode</em> option is set to <em>Opaque</em>, and a value is set for the\n        <em>Opacity</em> input, this value sets the threshold at which the mesh becomes\n        visible. When the opacity input value is below this threshold, the mesh is not\n        shaded (fully transparent). When the opacity input value is above this\n        threshold, the mesh is fully opaque.</p>\n\n<p>        Regardless of the <em>Blend Mode</em> setting, whenever there is both an emissive color\n        and an opacity value set, this value sets the opacity threshold at which the\n        emissive effect becomes visible.</p>\n\n<p>        Default value: <span class=\"code\">0.5</span>.</p>\n</td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"vector3\" data-tooltip-refid=\"shaders_ref\">vector3</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#BD6F38; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#BD6F38\">Normal</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>A directional vector perpendicular to the surface being shaded. Use this input\n        to apply a normal map that contains small-scale details in the relief of the\n        surface.</p>\n</td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"scalar\" data-tooltip-refid=\"shaders_ref\">scalar</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#639230; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#639230\">Metallic</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>The \"shininess\" and reflectivity of the surface. Values closer to <span class=\"code\">0</span>\n        produce a duller surface; values closer to <span class=\"code\">1</span> produce a shinier and\n        more reflective surface.</p>\n\n<p>        Default value: <span class=\"code\">0</span></p>\n</td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"scalar\" data-tooltip-refid=\"shaders_ref\">scalar</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#639230; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#639230\">Roughness</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>The amount of fine roughness on the surface. Values closer to <span class=\"code\">0</span> produce\n        a more glossy finish; values closer to <span class=\"code\">1</span> produce a more matte finish.</p>\n\n<p>        Default value: <span class=\"code\">0.5</span></p>\n</td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"vector3\" data-tooltip-refid=\"shaders_ref\">vector3</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#BD6F38; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#BD6F38\">Emissive</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>An optional color of light that the surface being shaded should emit into\n        the scene.</p>\n</td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"scalar\" data-tooltip-refid=\"shaders_ref\">scalar</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#639230; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#639230\">Ambient Occlusion</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>A scalar value that applies a faint shadowing effect, typically based on the\n        presence of other nearby objects. Values closer to <span class=\"code\">0</span> produce stronger\n        shadowing; values closer to <span class=\"code\">1</span> produce less shadowing.</p>\n\n<p>        Default value: <span class=\"code\">1</span></p>\n</td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"scalar\" data-tooltip-refid=\"shaders_ref\">scalar</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#639230; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#639230\">Refraction</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>For partially transparent surfaces, this value defines the refractivity of\n        the material: how much it bends the light that passes through it. Values\n        closer to <span class=\"code\">0</span> bend the light more strongly; values closer to <span class=\"code\">1</span> produces\n        less deflection.</p>\n\n<p>        Default value: <span class=\"code\">1</span></p>\n</td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"scalar\" data-tooltip-refid=\"shaders_ref\">scalar</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#639230; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#639230\">Density</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>For partially transparent surfaces, this value determines how much the mesh\n        scatters incoming light. Values closer to <span class=\"code\">0</span> produce more scatter and more of\n        a glowing effect; values closer to <span class=\"code\">1</span> minimize the scatter.</p>\n\n<p>        Default value: <span class=\"code\">1</span></p>\n</td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"scalar\" data-tooltip-refid=\"shaders_ref\">scalar</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#639230; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#639230\">Clear Coat Roughness</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\">\n<p>When the material type is \"Clear Coat\" this input allows you to control the\n        roughness of the top clear coat layer</p>\n\n<p>        Default value: <span class=\"code\">0</span></p>\n</td></tr><tr><td class=\"paramTableNameCell\"><p align=\"right\"><span class=\"builtInType hasTooltip\" data-tooltip=\"scalar\" data-tooltip-refid=\"shaders_ref\">scalar</span></p></td><td class=\"paramTableNameCell\"><p><span style=\"width:10px; height:10px; background-color:#639230; border-radius:5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; display:inline-block\"></span></p></td><td style=\"min-width:125px\" class=\"paramTableNameCell argument\" align=\"left\"><p><b style=\"color:#639230\">Cloth Falloff</b></p></td><td class=\"paramTableNameCell\"><p><img src='icon_shader_editable.png' height='16' width='16' style='vertical-align:-3px' class='hasTooltip' data-reftooltip='icon_shader_editable' data-reftooltip-refid='shaders_ref'  /></p></td><td class=\"paramTableNameCell\"><p></p></td><td class=\"paramTableDocCell\"></td></tr></table>",
      "version":"Release 1.5",
      "name":"Output > Standard Base"
    }]
};
