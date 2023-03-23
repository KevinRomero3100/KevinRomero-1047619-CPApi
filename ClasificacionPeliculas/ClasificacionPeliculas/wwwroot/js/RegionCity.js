const RegionChanged = (URL) => {
    $.post(URL, {
        "regionId": $("#regionId option:selected").val()
    }, function (data) {
        PopulateDropDown("#GeonameidCity", data.municipios);

    });
};

const PopulateDropDown = (dropDownId, list) => {
    $(dropDownId).empty();
    $.each(list, function (index, row) {
        if (index == 0) {
            $(dropDownId).append("<option value='" + row.value + "' selected='selected'>" + row.text + "</option>");
        } else {
            $(dropDownId).append("<option value='" + row.value + "'>" + row.text + "</option>")
        }
    });
};

