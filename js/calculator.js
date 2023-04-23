
$(document).ready(function () {
    configureType('meal');
    const dataString = localStorage.getItem("tableData");
    if (dataString != null){
        data = JSON.parse(dataString);
    } else {
        data = [];
    }
    
    const co2String = localStorage.getItem("co2");
    if (co2String != null){
        co2 = parseFloat(co2String);
    } else {
        co2 = parseFloat(0);
    }

    
    for (var i = 0; i < data.length; i++){

        var source = data[i].source.toLowerCase();
        var currentCO2 = data[i].totalco2;

        switch (source) {
            case 'electricity':
                electricityCo2 += currentCO2;
                break;
            case 'fashion':
                fashionCo2 += currentCO2;
                break;
            case 'food':
                foodCo2 += currentCO2;
                break;
            case 'meal':
                mealCo2 += currentCO2;
                break;
            case 'purchase':
                purchaseCo2 += currentCO2;
                break;
            case 'streaming':
                streamingCo2 += currentCO2;
                break;
            case 'transport':
                transportCo2 += currentCO2;
                break;
            default:
        }
    }


    if(data.length > 0){
        data.forEach(addRowJson);
        drawChartData();
        configureData();
    }
});

$(document).on("change", "#type", function () {
    var selectedOption = $(this).val();
    $("#quantity").val("");
    configureType(selectedOption);
});

$(document).on("change", "#category", function () {
    $("#quantity").val("");
});

$(document).on("click", "#tweet-it-button", function () {
    window.open(encodedUrl);
});

function drawChartData() {
    chartData = [
        ['Type', 'kgCO2eq']
    ];
    chartData.push(['Electricity', electricityCo2]);
    chartData.push(['Fashion', fashionCo2]);
    chartData.push(['Food', foodCo2]);
    chartData.push(['Meal', mealCo2]);
    chartData.push(['Purchase', purchaseCo2]);
    chartData.push(['Streaming', streamingCo2]);
    chartData.push(['Transport', transportCo2]);

    // Load google charts
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
}

function addRowJson(item){
    addRow(item.source, item.type, item.unitco2, item.units, item.totalco2);
}

function addRow(source, type, unitco2, units, totalco2) {
    sno += 1;
    var rowData = `<tr> <td>${sno}</td> <td>${source}</td> <td>${type}</td> <td>${unitco2}</td> <td>${units}</td> <td>${totalco2}</td> </tr>`;
    var currentData = {sno:sno, source:source, type:type, unitco2:unitco2, units:units, totalco2:totalco2};
    
    data.push(currentData);
    $('#co2Table').append(rowData);
}

$(document).on("click", "#reset", function () {
    var proceed = confirm("Are you sure you want to reset?");
    if (proceed) {
        chartData = [
            ['Type', 'kgCO2eq']
        ];
        co2 = parseFloat(0);
        data = [];

        updateData();
        window.location.reload();
    }
});

$(document).on("click", "#add", function () {
    if (units = $("#quantity").val() > 0) {
        addData();
    }
});

$(document).on("click", "#print", function () {
    const table = $("#co2Table")[0];
    // Get the number of rows in the table
    const numRows = table.rows.length;
    if (numRows > 1) {
        window.print();
    }
});

function addData() {
    var type = $("#type").val();
    var jsonData = carbonFootPrintData[type];

    var category = $("#category").val();
    co2PerUnit = jsonData[category];
    units = $("#quantity").val();
    $("#quantity").val("");
    currentCO2 = Number(parseFloat(units * co2PerUnit).toFixed(3));
    co2 += currentCO2;
    co2 =  Number(parseFloat(co2).toFixed(3));

    addRow($("#type option:selected").text(), $("#category option:selected").text(), parseFloat(co2PerUnit).toFixed(3), units+" "+typeUnits[type], currentCO2);

    switch (type) {
        case 'electricity':
            electricityCo2 += currentCO2;
            break;
        case 'fashion':
            fashionCo2 += currentCO2;
            break;
        case 'food':
            foodCo2 += currentCO2;
            break;
        case 'meal':
            mealCo2 += currentCO2;
            break;
        case 'purchase':
            purchaseCo2 += currentCO2;
            break;
        case 'streaming':
            streamingCo2 += currentCO2;
            break;
        case 'transport':
            transportCo2 += currentCO2;
            break;
        default:
    }

    drawChartData();
    updateData();
    configureData();
}

function updateData(){
    localStorage.setItem("tableData", JSON.stringify(data));
    localStorage.setItem("chartData", JSON.stringify(chartData));
    localStorage.setItem("co2", co2);
}

function configureData(){
    $('#co2').text(co2);
    var difference = 0;
    var greaterOrLesser = "";
    if (co2 < usAverageCo2) {
        greaterOrLesser = "less";
        difference = parseFloat((usAverageCo2 - co2) / usAverageCo2 * 100).toFixed(2);
    } else {
        greaterOrLesser = "greater";
        difference = parseFloat((co2 - usAverageCo2) / usAverageCo2 * 100).toFixed(2);
    }
    var tweetValue = `The average US citizen makes a carbon footprint of ${usAverageCo2} kgCO2eq per day. I made a carbon footprint of ${parseFloat(co2).toFixed(3)} kgCO2eq today, which is ${difference}% ${greaterOrLesser} than the average US citizen`;
    $('#tweet-quote').text(tweetValue);


    var tweetUrl = `https://twitter.com/intent/tweet?text=${tweetValue}
&url=${window.location.href}
&hashtags=${twitterHashTags}`;

    encodedUrl = encodeURI(tweetUrl);

    $('#tweetBox').css({ 'opacity': '100' });
    $('#co2Table').css({ 'opacity': '100' });
}

function configureType(selectedOption) {
    var jsonData = carbonFootPrintData[carbonFootPrintMap[selectedOption]];
    var keys = Object.keys(jsonData);
    $('#category').empty();
    $('#quantity').attr("placeholder", quantityPlaceHolder[selectedOption]);
    addOption(jsonData, keys);
}

function addOption(jsonData, keys) {
    keys.forEach(element => {
        var text = jsonData[element];
        const result = text.replace(/([A-Z][a-z])/g, " $1");
        const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        $("#category").append(new Option(finalResult, text));
    });
}

// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable(chartData);

    // Optional; add a title and set the width and height of the chart
    var options = { 'width': 550, 'height': 400, 'backgroundColor': 'transparent', 'legend': 'none', 'chartArea': { 'width': '100%', 'height': '90%' } };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

// Print the data as PDF
function printDivToPDF() {
    // Get the div to print
    const divToPrint = document.getElementById("data");
  
    // Create a new window to print the div
    const newWindow = window.open("", "Print-Window");
  
    // Add the div to the new window
    newWindow.document.write(divToPrint.outerHTML);
  
    // Wait for the new window to load
    newWindow.onload = function () {
      // Print the new window as PDF using the jsPDF library
      const pdf = newWindow.jsPDF();
      pdf.addHTML(newWindow.document.body, function () {
        pdf.save("document.pdf");
      });
  
      // Close the new window
      newWindow.close();
    };
}

function saveDiv(divId, title) {
    var doc = new jsPDF();
    doc.fromHTML(`<html><head><title>${title}</title></head><body>` + document.getElementById(divId).innerHTML + `</body></html>`);
    doc.save('report.pdf');
}
  