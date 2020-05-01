// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, true, false ];
var arrayMetadata    = [ [ "1", "GSM180626", "Adenoma patient 125", "benign", "Histology:Serous cystadenoma", "Stage:na", "Age at surgery: 61", "Gene expression data from ovarian adenoma.", "61", "Serous cystadenoma", "na" ], [ "2", "GSM180627", "Adenoma patient 132", "benign", "Histology:Serous cystadenoma", "Stage:na", "Age at surgery: 47", "Gene expression data from ovarian adenoma.", "47", "Serous cystadenoma", "na" ], [ "3", "GSM180628", "Adenoma patient 146", "benign", "Histology:Simple cystadenoma", "Stage:na", "Age at surgery: 70", "Gene expression data from ovarian adenoma.", "70", "Simple cystadenoma", "na" ], [ "4", "GSM180629", "Adenoma patient 159", "benign", "Histology:Simple cystadenoma", "Stage:na", "Age at surgery: 74", "Gene expression data from ovarian adenoma.", "74", "Simple cystadenoma", "na" ], [ "5", "GSM180630", "Adenoma patient 172", "benign", "Histology:Simple cystadenoma", "Stage:na", "Age at surgery: 61", "Gene expression data from ovarian adenoma.", "61", "Simple cystadenoma", "na" ], [ "6", "GSM180631", "Adenoma patient 221", "benign", "Histology:Simple cystadenoma", "Stage:na", "Age at surgery: 67", "Gene expression data from ovarian adenoma.", "67", "Simple cystadenoma", "na" ], [ "7", "GSM180632", "Adenoma patient 300", "benign", "Histology:Serous cystadenofibroma", "Stage:na", "Age at surgery: 71", "Gene expression data from ovarian adenoma.", "71", "Serous cystadenofibroma", "na" ], [ "8", "GSM180633", "Adenoma patient 64", "benign", "Histology:Simple cystadenoma", "Stage:na", "Age at surgery: 71", "Gene expression data from ovarian adenoma.", "71", "Simple cystadenoma", "na" ], [ "9", "GSM180634", "Adenoma patient 77A", "benign", "Histology:Simple cystadenoma", "Stage:na", "Age at surgery: 51", "Gene expression data from ovarian adenoma.", "51", "Simple cystadenoma", "na" ], [ "10", "GSM180635", "Adenoma patient 97", "benign", "Histology:Serous cystadenofibroma", "Stage:na", "Age at surgery: 61", "Gene expression data from ovarian adenoma.", "61", "Serous cystadenofibroma", "na" ], [ "11", "GSM180636", "Carcinoma patient 183", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:III/2", "Age at surgery: 66", "Gene expression data from ovarian carcinoma.", "66", "Serous papillary adenocarcinoma", "III/2" ], [ "12", "GSM180637", "Carcinoma patient 196", "invasive malignant", "Histology:Endometriod adenocarcinoma", "Stage:III/2", "Age at surgery: 45", "Gene expression data from ovarian carcinoma.", "45", "Endometriod adenocarcinoma", "III/2" ], [ "13", "GSM180638", "Carcinoma patient 2", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:Iib/3", "Age at surgery: 61", "Gene expression data from ovarian carcinoma.", "61", "Serous papillary adenocarcinoma", "Iib/3" ], [ "14", "GSM180639", "Carcinoma patient 204", "invasive malignant", "Histology:Endometriod adenocarcinoma", "Stage:Ic/3", "Age at surgery: 47", "Gene expression data from ovarian carcinoma.", "47", "Endometriod adenocarcinoma", "Ic/3" ], [ "15", "GSM180640", "Carcinoma patient 212", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIc/3", "Age at surgery: 59", "Gene expression data from ovarian carcinoma.", "59", "Serous papillary adenocarcinoma", "IIIc/3" ], [ "16", "GSM180641", "Carcinoma patient 23", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIa/3", "Age at surgery: 51", "Gene expression data from ovarian carcinoma.", "51", "Serous papillary adenocarcinoma", "IIIa/3" ], [ "17", "GSM180642", "Carcinoma patient 4", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIb/3", "Age at surgery: 48", "Gene expression data from ovarian carcinoma.", "48", "Serous papillary adenocarcinoma", "IIIb/3" ], [ "18", "GSM180643", "Carcinoma patient 66", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IV/3", "Age at surgery: 74", "Gene expression data from ovarian carcinoma.", "74", "Serous papillary adenocarcinoma", "IV/3" ], [ "19", "GSM180644", "Carcinoma patient 99", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:III/3", "Age at surgery: 75", "Gene expression data from ovarian carcinoma.", "75", "Serous papillary adenocarcinoma", "III/3" ], [ "20", "GSM180645", "Cancer Chemo patient 150", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIc/3", "Age at surgery: 65", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "65", "Serous papillary adenocarcinoma", "IIIc/3" ], [ "21", "GSM180646", "Cancer Chemo patient 184", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:III/3", "Age at surgery: 67", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "67", "Serous papillary adenocarcinoma", "III/3" ], [ "22", "GSM180647", "Cancer Chemo patient 187", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIc/2", "Age at surgery: 53", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "53", "Serous papillary adenocarcinoma", "IIIc/2" ], [ "23", "GSM180648", "Cancer Chemo patient 199", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIc/3", "Age at surgery: 69", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "69", "Serous papillary adenocarcinoma", "IIIc/3" ], [ "24", "GSM180649", "Cancer Chemo patient 253", "invasive malignant", "Histology:Endometriod adenocarcinoma", "Stage:IIIc/3", "Age at surgery: 56", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "56", "Endometriod adenocarcinoma", "IIIc/3" ], [ "25", "GSM180650", "Cancer Chemo patient 255", "invasive malignant", "Histology:Undifferentiated carcinoma", "Stage:IIIc/2", "Age at surgery: 57", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "57", "Undifferentiated carcinoma", "IIIc/2" ], [ "26", "GSM180651", "Cancer Chemo patient 259", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIb/3", "Age at surgery: 58", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "58", "Serous papillary adenocarcinoma", "IIIb/3" ], [ "27", "GSM180652", "Cancer Chemo patient 269", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIc/3", "Age at surgery: 68", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "68", "Serous papillary adenocarcinoma", "IIIc/3" ], [ "28", "GSM180653", "Cancer Chemo patient 272", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIb/2", "Age at surgery: 83", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "83", "Serous papillary adenocarcinoma", "IIIb/2" ], [ "29", "GSM180654", "Cancer Chemo patient 279", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIb/3", "Age at surgery: 62", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "62", "Serous papillary adenocarcinoma", "IIIb/3" ], [ "30", "GSM180655", "Cancer Chemo patient 286", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIc/2", "Age at surgery: 52", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "52", "Serous papillary adenocarcinoma", "IIIc/2" ], [ "31", "GSM180656", "Cancer Chemo patient 29", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:III/3", "Age at surgery: 66", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "66", "Serous papillary adenocarcinoma", "III/3" ], [ "32", "GSM180657", "Cancer Chemo patient 303", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIc/3", "Age at surgery: 44", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "44", "Serous papillary adenocarcinoma", "IIIc/3" ], [ "33", "GSM180658", "Cancer Chemo patient 310", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IV/2", "Age at surgery: 41", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "41", "Serous papillary adenocarcinoma", "IV/2" ], [ "34", "GSM180659", "Cancer Chemo patient 311", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIc/2", "Age at surgery: 51", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "51", "Serous papillary adenocarcinoma", "IIIc/2" ], [ "35", "GSM180660", "Cancer Chemo patient 312", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIc/2", "Age at surgery: 64", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "64", "Serous papillary adenocarcinoma", "IIIc/2" ], [ "36", "GSM180661", "Cancer Chemo patient 314", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:III/2", "Age at surgery: 79", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "79", "Serous papillary adenocarcinoma", "III/2" ], [ "37", "GSM180662", "Cancer Chemo patient 325", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:II/2", "Age at surgery: 75", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "75", "Serous papillary adenocarcinoma", "II/2" ], [ "38", "GSM180663", "Cancer Chemo patient 326", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IV/3", "Age at surgery: 72", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "72", "Serous papillary adenocarcinoma", "IV/3" ], [ "39", "GSM180664", "Cancer Chemo patient 338", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIc/3", "Age at surgery: 62", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "62", "Serous papillary adenocarcinoma", "IIIc/3" ], [ "40", "GSM180665", "Cancer Chemo patient 36", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:III/3", "Age at surgery:66", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "66", "Serous papillary adenocarcinoma", "III/3" ], [ "41", "GSM180666", "Cancer Chemo patient 76", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIa/2", "Age at surgery:49", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "49", "Serous papillary adenocarcinoma", "IIIa/2" ], [ "42", "GSM180667", "Cancer Chemo patient 9", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IV/2", "Age at surgery:51", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "51", "Serous papillary adenocarcinoma", "IV/2" ], [ "43", "GSM180668", "Cancer Chemo patient 94", "invasive malignant", "Histology:Serous papillary adenocarcinoma", "Stage:IIIc/1", "Age at surgery:55", "Gene expression data from ovarian cancer patient pre-treated with cancer chemotherapy.", "55", "Serous papillary adenocarcinoma", "IIIc/1" ] ];
var svgObjectNames   = [ "pca", "dens" ];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
    for(i=0; i<ssrules.length; i++) {
        if (ssrules[i].selectorText == (".aqm" + reportObjId)) {
		ssrules[i].style.cssText = cssText[0+status];
		break;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}
