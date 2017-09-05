//for ie8 ans below version support for javscript trim()
if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };
}

//To fetch the country from url dynamically
var contactUrl = window.location.href;
var urlRes = contactUrl.split("?");
var urlParams = urlRes[1].split("&");

// Change for CRMSFI 3001 : START
var countryCodeValFrmUrl = '';
// Change for CRMSFI 3001 : END

for (var i = 0; i < urlParams.length; i++) {
    var urlData = urlParams[i].split("=");
    if (urlData[0] == 'country') {
        var countryCode = urlData[1].toUpperCase();
		// Changes for CRMSFI 3001 : START
		if (countryCode == 'US_CR' || countryCode == 'US_BP') {
			countryCodeValFrmUrl = countryCode;
		// Changes for CRMSFI 3001 : END
			countryCode = 'US';
			
		}
    }
    if (urlData[0] == 'brand') {
        var contactBrand = urlData[1];
    }
    if (urlData[0] == 'language') {
        var contactLang = urlData[1];
    }
}

var orderPatt = '';
var orderPatt1 = '';
var orderPatt2 = '';
var orderPatt3 = '';

if(countryCode == 'GB'){
    contactCountry = 'UK';
    orderPatt = /^(AUK)\d{8}$/g;
    orderPatt1 = /^(auk)\d{8}$/g;
	orderPatt2 = /^(AGB)\d{8}$/g;
	orderPatt3 = /^(agb)\d{8}$/g;
    
}else if(countryCode == 'AT'){
    contactCountry = 'Austria';
    orderPatt = /^(AAT)\d{8}$/g;
    orderPatt1 = /^(aat)\d{8}$/g;
    
}else if(countryCode == 'BE'){
    contactCountry = 'Belgium';
    orderPatt = /^(ABE)\d{8}$/g;
    orderPatt1 = /^(abe)\d{8}$/g;
    
}else if(countryCode == 'CZ'){
    contactCountry = 'CzRepublic';
    orderPatt = /^(ACZ)\d{8}$/g;
    orderPatt1 = /^(acz)\d{8}$/g;
    
}else if(countryCode == 'DK'){
    contactCountry = 'Denmark';
    orderPatt = /^(ADK)\d{8}$/g;
    orderPatt1 = /^(adk)\d{8}$/g;
    
}else if(countryCode == 'FI'){
    contactCountry = 'Finland';
    orderPatt = /^(AFI)\d{8}$/g;
    orderPatt1 = /^(afi)\d{8}$/g;
    
}else if(countryCode == 'FR'){
    contactCountry = 'France';
    orderPatt = /^(AFR)\d{8}$/g;
    orderPatt1 = /^(afr)\d{8}$/g;
    
}else if(countryCode == 'DE'){
    contactCountry = 'Germany';
    orderPatt = /^(ADE)\d{8}$/g;
    orderPatt1 = /^(ade)\d{8}$/g;
    
}else if(countryCode == 'IE'){
    contactCountry = 'Ireland';
    orderPatt = /^(AIE)\d{8}$/g;
    orderPatt1 = /^(aie)\d{8}$/g;
    
}else if(countryCode == 'IT'){
    contactCountry = 'Italy';
    orderPatt = /^(AIT)\d{8}$/g;
    orderPatt1 = /^(ait)\d{8}$/g;
    
}else if(countryCode == 'PL'){
    contactCountry = 'Poland';
    orderPatt = /^(APL)\d{8}$/g;
    orderPatt1 = /^(apl)\d{8}$/g;
    
}else if(countryCode == 'SK'){
    contactCountry = 'Slovakia';
    orderPatt = /^(ASK)\d{8}$/g;
    orderPatt1 = /^(ask)\d{8}$/g;
    
}else if(countryCode == 'ES'){
    contactCountry = 'Spain';
    orderPatt = /^(AES)\d{8}$/g;
    orderPatt1 = /^(aes)\d{8}$/g;
    
}else if(countryCode == 'SE'){
    contactCountry = 'Sweden';
    var orderPatt = /^(ASE)\d{8}$/g;
    var orderPatt1 = /^(ase)\d{8}$/g;
    
}else if(countryCode == 'NL'){
    contactCountry = 'Netherlands';
    orderPatt = /^(ANL)\d{8}$/g;
    orderPatt1 = /^(anl)\d{8}$/g;
    
}else if(countryCode == 'PT'){
    contactCountry = 'Portugal';
    orderPatt = /^(APT)\d{8}$/g;
    orderPatt1 = /^(apt)\d{8}$/g;
    
}else if(countryCode == 'GR'){
    contactCountry = 'Greece';
    orderPatt = /^(AGR)\d{8}$/g;
    orderPatt1 = /^(agr)\d{8}$/g;
    
}else if(countryCode == 'CH'){
    contactCountry = 'Switzerland';
    orderPatt = /^(ACH)\d{8}$/g;
    orderPatt1 = /^(ach)\d{8}$/g;
    
}else if(countryCode == 'NO'){
    contactCountry = 'Norway';
    orderPatt = /^(ANO)\d{8}$/g;
    orderPatt1 = /^(ano)\d{8}$/g;   
} else if (countryCode == 'AU') {
    contactCountry = 'Australia';
    orderPatt = /^(AAU)\d{8}$/g;
	orderPatt1 = /^(aau)\d{8}$/g;
} else if (countryCode == 'NZ') {
    contactCountry = 'New Zealand';
    orderPatt = /^(ANZ)\d{8}$/g;
	orderPatt = /^(anz)\d{8}$/g;
}else if (countryCode == 'AR') {
    contactCountry = 'Argentina';
    orderPatt = /^[A]\d{9}$/g;
    orderPatt1 = /^[a]\d{9}$/g;
}else if (countryCode == 'CL'){
    contactCountry = 'Chile';
    orderPatt = /^[C]\d{9}$/g;
    orderPatt1 = /^[c]\d{9}$/g;
	orderPatt2 = /^(ACL)\d{8}$/g;
	orderPatt3 = /^(acl)\d{8}$/g;
}else if (countryCode == 'MX') {
    contactCountry = 'Mexico';
    orderPatt = /^[M]\d{9}$/g;
    orderPatt1 = /^(AMX)\d{8}$/g;
}else if (countryCode == 'CO') {
    contactCountry = 'Colombia';
    orderPatt = /^[X]\d{9}$/g;
    orderPatt1 = /^[x]\d{9}$/g;
}else if (countryCode == 'PE') {
    contactCountry = 'Peru';
    orderPatt = /^[P]\d{9}$/g;
    orderPatt1 = /^[p]\d{9}$/g;
	orderPatt2 = /^(APE)\d{8}$/g;
	orderPatt3 = /^(ape)\d{8}$/g;
}

jQuery('[id$=phoneNum]').intlTelInput({
    
    autoFormat: true,
    autoHideDialCode: true,
    defaultCountry: countryCode.toLowerCase(), //Changes for country code for CRMSFI-1810
    allowExtensions: false,
    autoHideDialCode: true,
    autoPlaceholder: false,
    nationalMode: false
});

// to make button as file input
function triggerFileupload(){
    document.getElementById("fileForUpload").click();
}


var maxStringSize = 6000000; //Maximum String size is 6,000,000 characters
var maxFileSize = 4350000; //After Base64 Encoding, this is the max file size
var chunkSize = 950000; //Maximum Javascript Remoting message size is 1,000,000 characters
var attachment;
var attachmentName;
var fileSize;
var positionIndex;
var caseIdRes;
var counter;
var file;
var files;
var cnt;
var netSize = 0;
var overallSize = 9550000;
var allfilesinarray = [];
var allattach = [];
var cntr = 0;
var allarray = [];
var Selectedarticles =[];
var attachments= [];
var caseNumber;

function uploadAttachFiles(filecontent, filename, filetype, parentId) {
    var sitePrefix = document.getElementById("sitePrefix").value.trim();
    var apiSessionId = document.getElementById("apiSessionId").value.trim();
    sforce.connection.serverUrl = sitePrefix + '/services/Soap/u/30.0';
    sforce.connection.sessionId = apiSessionId;
    var attachment = new sforce.SObject('Attachment');
    attachment.Name = filename;
    attachment.IsPrivate = false;
    attachment.ContentType = filetype;
    attachment.Body = filecontent;
    attachment.Description = filename;
    attachment.ParentId = parentId;
    console.log('entering');
	attachments.push(attachment);
	cntr++;
	if (cntr == cnt) {
		var aid = sforce.apex.execute("Ecom_CLS_ContactUsExtension_Mobile","insertallattachments", {attachmentList: attachments});
		
		if(aid!= null || aid== true){
		 
			if(Selectedarticles.length > 0) {
				// If Customer has viewed some articles
				console.log('Selectedarticles'+ Selectedarticles);
				attachArticlesToCase(parentId);
			} else{
				redirectThankyou();
			}
		}
    }
    console.log('cnt=' + cnt + '------cntr=' + cntr);
}

//Method to attach articles to Case
function attachArticlesToCase(parentId){	
				var contactUsExtninsertArticlesToList = document.getElementById("contactUsExtnInsertArticlesToCase").value;
				console.log('Remote Invocation value '+contactUsExtninsertArticlesToList);
				Visualforce.remoting.Manager.invokeAction(
				contactUsExtninsertArticlesToList,
				Selectedarticles,parentId,
				function(result, event) {
					console.log('Article/s got attached to Case.!');
					if (event.status) {
						redirectThankyou();
					} else if (event.type === 'exception') {			
						console.log("Exception Message: " +event.message + " @ " + event.where );
					} 
				});
}

//Method to prepare a file to be attached to the Case bound to the page by the standardController
function uploadAttachmentFile(resultid, caseRecNum, closeCase) {
    var netSize = 0;
	caseNumber = caseRecNum;
	isClose = closeCase;
	if (allfilesinarray.length > 0) {
		if (window.File && window.FileList && window.FileReader) {

			// Extracting all the choosen files from array buffer 
			console.log('in uploadattachment allfilesarray is: ' + allfilesinarray);
			for (var i = 0; i <= allfilesinarray.length - 1; i++) {
				console.log(i + '------type of i' + typeof(allfilesinarray[i]));
				if (typeof(allfilesinarray[i]) == 'undefined') {
					console.log(i + 'is undefined');
				} else {
					allarray.push(allfilesinarray[i]);
					console.log(i + 'added');
				}
			}
			files = allarray;
			cnt = files.length;
			for (var i = 0, file; file = files[i]; i++) {
				console.log('name is: ' + file.name);
				var picReader = new FileReader();
				picReader.onload = (function(file) {
					return function(e) {
						var fileContent = getFileContent(e.target.result)
						var parentId = resultid;
						uploadAttachFiles(fileContent, file.name, file.type, parentId);
					};
				})(file);
				picReader.readAsDataURL(file); //Read the body of the file
			}
		} else {
			console.log("Your browser does not support File API");
		} 
	} else {
			if(Selectedarticles.length > 0) {
				// If Customer has viewed some articles
				console.log('Selectedarticles'+ Selectedarticles);
				attachArticlesToCase(resultid);
			} else{
				redirectThankyou();
			}
	}
}

function getFileContent(fileData) {
    var fileContent = String(fileData);
    return fileContent.substr(fileContent.indexOf(',') + 1);
}

var isTextAreaEmpty = false;


function uploadFile(fName, lName, emailAddress, emailAddUSBP, cat, desc, sub, ord, phn, address, articleno, articleSize,addressUSCR,zip,art,pd,size,fvalue,render1,RenderValueBlk,RenderSizeBlk, myButton) {

    var Num_of_attach = 0;
	// Changes for CRMSFI 3001: START
	if ('US_BP' != countryCodeValFrmUrl){
    var captcharesponse = grecaptcha.getResponse(document.getElementById('widgetId1'));
	}
	// Changes for CRMSFI 3001: END
    var phoneRegex = /^\+([0-9]|[0-9]+\s?)[0-9]{5,14}$/;
    
    for (var i = 0; i <= allfilesinarray.length - 1; i++) {
        if (typeof(allfilesinarray[i]) != 'undefined') {
            Num_of_attach++;
        }
    }
    console.log('Number of active attachmnets are:' + Num_of_attach);

    if (document.getElementById(emailAddress) != null && document.getElementById(emailAddress).value.trim() != null && document.getElementById(emailAddress).value.trim() != '') {
        var x = document.getElementById(emailAddress).value.trim();
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
    }
    
    var privacyCheck = false;
    if((countryCode == 'RU')){
        privacyCheck = true;
        var privacyPolicyId = document.getElementById("privacyPolicyid").value.trim();
    }
	// Changes for CRMSFI 3001 : START
	if ('US_BP' == countryCodeValFrmUrl){
		createClosedCase(fName, lName, emailAddUSBP, address, articleno, articleSize, myButton);
	// Changes for CRMSFI 3001 : END
	}
	else if('US_CR' == countryCodeValFrmUrl) {
		uploadFileUSCR(render1,RenderValueBlk,RenderSizeBlk,fName, lName, emailAddress , cat, desc, sub,phn,addressUSCR,zip,art,pd,size,fvalue,myButton);
	}
	else if ((document.getElementById(fName).value.trim() == null || document.getElementById(fName).value.trim() == '') && (document.getElementById(lName).value.trim() == null || document.getElementById(lName).value.trim() == '') && (document.getElementById(emailAddress).value.trim() == null || document.getElementById(emailAddress).value.trim() == '') && (document.getElementById(cat).value.trim() == null || document.getElementById(cat).value.trim() == '') && (document.getElementById(sub).value.trim() == null || document.getElementById(sub).value.trim() == '') && (document.getElementById(desc).value.trim() == null || document.getElementById(desc).value.trim() == '')) {
    
        
        var errFillDetails = document.getElementById("errFillDetails").value;
        alert(errFillDetails);

        document.getElementById(fName).focus();
        document.getElementById(fName).style.borderBottom = "3px solid #ff6d6d";
        document.getElementById(lName).style.borderBottom = "3px solid #ff6d6d";
        document.getElementById(emailAddress).style.borderBottom = "3px solid #ff6d6d";
        document.getElementById(cat).style.borderBottom = "3px solid #ff6d6d";
        document.getElementById(sub).style.borderBottom = "3px solid #ff6d6d";
        document.getElementById(desc).style.borderBottom = "3px solid #ff6d6d";

        document.getElementById(fName).style.backgroundColor = "#FFFFCC";
        document.getElementById(lName).style.backgroundColor = "#FFFFCC";
        document.getElementById(emailAddress).style.backgroundColor = "#FFFFCC";
        document.getElementById(cat).style.backgroundColor = "#FFFFCC";
        document.getElementById(sub).style.backgroundColor = "#FFFFCC";
        document.getElementById(desc).style.backgroundColor = "#FFFFCC";
    } else if (document.getElementById(fName).value.trim() == null || document.getElementById(fName).value.trim() == '') {
        var errFillIn = document.getElementById("errFillIn").value;
        alert(errFillIn);
        document.getElementById(fName).focus();

    } else if (document.getElementById(lName).value.trim() == null || document.getElementById(lName).value.trim() == '') {
        var errFillIn = document.getElementById("errFillIn").value;
        alert(errFillIn);
        document.getElementById(lName).focus();

    } else if ((document.getElementById("metaRegion").value.trim() != 'US') && (document.getElementById(phn).value.trim() == null || document.getElementById(phn).value.trim() == '' || !(phoneRegex.test(document.getElementById(phn).value.trim()))) && countryCode!='RU') {
        var errFillIn = document.getElementById("errFillIn").value;
        alert(errFillIn);
        document.getElementById(phn).focus();

    } else if (document.getElementById(emailAddress).value.trim() == null || document.getElementById(emailAddress).value.trim() == '') {
        var errFillEmailAddr = document.getElementById("errFillEmailAddr").value;
        alert(errFillEmailAddr);
        document.getElementById(emailAddress).focus();
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        var errFillValidEmailAddr = document.getElementById("errFillValidEmailAddr").value;
        alert(errFillValidEmailAddr);
        document.getElementById(emailAddress).focus();
        document.getElementById(emailAddress).style.borderBottom = "3px solid #ff6d6d";
    } else if (document.getElementById(cat).value.trim() == null || document.getElementById(cat).value.trim() == '') {
        var errFillCategory = document.getElementById("errFillCategory").value;
        alert(errFillCategory);
        document.getElementById(cat).focus();
    } else if (document.getElementById(sub).value.trim() == null || document.getElementById(sub).value.trim() == '') {
        var errFillSubject = document.getElementById("errFillSubject").value;
        alert(errFillSubject);
        document.getElementById(sub).focus();
    } else if (document.getElementById(desc).value.trim() == null || document.getElementById(desc).value.trim() == '') {
        var errFillQuestion = document.getElementById("errFillQuestion").value;
        alert(errFillQuestion);
        document.getElementById(desc).focus();
    } else if ( (document.getElementById("metaRegion").value.trim() != 'US') && (document.getElementById(ord)) && (document.getElementById(ord).value.trim() == null || document.getElementById(ord).value.trim() == '' && (document.getElementById(cat).value.trim() == 'Existing Order' || document.getElementById(cat).value.trim() == 'Returns & Refunds'))) {
        var errFillOrderNo = document.getElementById("errFillOrderNo").value;
        alert(errFillOrderNo);
        document.getElementById(ord).focus();
    } else if ( (document.getElementById("metaRegion").value.trim() != 'US') && (document.getElementById(ord)) && (document.getElementById(ord).value.trim() != '' && !(testOrderRefPattern(document.getElementById(ord).value.trim())))) {
        var errFillOrderNo = document.getElementById("errFillOrderNo").value;
        alert(errFillOrderNo);
        document.getElementById(ord).focus();
    } else if ((document.getElementById("metaRegion").value.trim() == 'US') && (document.getElementById(ord)) && (document.getElementById(ord).value.trim() == null || document.getElementById(ord).value.trim() == '' && (document.getElementById(cat).value == 'Existing Order' || document.getElementById(cat).value.trim() == 'Payment'))) {
        var errFillOrderNo = document.getElementById("errFillOrderNo").value;
        alert(errFillOrderNo);
        document.getElementById(ord).focus();
    } else if (document.getElementById(desc).value.length > 1000) {
        var errMaxChars = document.getElementById("errMaxChars").value;
        alert(errMaxChars);
        document.getElementById(desc).focus();
    } else if (Num_of_attach > 5) {
        var errMaxAttachments = document.getElementById("errMaxAttachments").value;
        alert(errMaxAttachments);
        return;
    } else if (Num_of_attach <= 5 && netSize >= overallSize) {
        console.log('all files size:' + netSize);
        var errMaxFileSize = document.getElementById("errMaxFileSize").value;
        alert(errMaxFileSize);
        return;
    } else if((privacyCheck == true) && (document.getElementById(privacyPolicyId).checked == false)){
        alert("Вы не подтвердили свое согласие с Политикой Конфиденциальности, поэтому мы не сможем принять Ваш запрос");
        return;
        
    }else if (captcharesponse == '') {
       var errCaptcha = document.getElementById("errCaptcha").value;
       alert(errCaptcha);
   } else {
        pop();
        // Disabling onclick after one hit
        myButton.disabled = true;
        // Javascript Remoting for captcha check
        var contactUsExtensionVerifyCaptcha = document.getElementById("contactUsExtensionVerifyCaptcha").value;
		Visualforce.remoting.Manager.invokeAction(
            contactUsExtensionVerifyCaptcha, captcharesponse,

            function(result, event) {
                console.log(result);
                if (event.status && result == true) {
                    console.log('valid captcha');
					
					if ((document.getElementById("knowledgeArticleAvail").value.trim() == null || document.getElementById("knowledgeArticleAvail").value.trim
					() == '')) {
						
						continuewebcase();
					}else {
						
					// Bring the Knowledge Popup on Screen
					togglecontent();
					}
                } else {
                    var errNoCaptcha = document.getElementById("errNoCaptcha").value;
                    alert(errNoCaptcha);
                    grecaptcha.reset();
                }
            });
    }
}

// Changes for CRMSFI 3001 : START
function createClosedCase(fName, lName, emailAddUSBP, address, articleno, articleSize, myButton){
	
	if (document.getElementById(emailAddUSBP).value.trim() != null && document.getElementById(emailAddUSBP).value.trim() != '') {
        var x = document.getElementById(emailAddUSBP).value.trim();
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
    }
	
	if ((document.getElementById(fName).value.trim() == null || document.getElementById(fName).value.trim() == '') && (document.getElementById(lName).value.trim() == null || document.getElementById(lName).value.trim() == '') && (document.getElementById(emailAddUSBP).value.trim() == null || document.getElementById(emailAddUSBP).value.trim() == '') && (document.getElementById(address).value.trim() == null || document.getElementById(address).value.trim() == '') && (document.getElementById(articleno).value.trim() == null || document.getElementById(articleno).value.trim() == '')  && (document.getElementById(articleSize).value.trim() == null || document.getElementById(articleSize).value.trim() == '')){
		  
        var errFillDetails = document.getElementById("errFillDetails").value;
        alert(errFillDetails);

        document.getElementById(fName).focus();
        document.getElementById(fName).style.borderBottom = "3px solid #ff6d6d";
        document.getElementById(lName).style.borderBottom = "3px solid #ff6d6d";
        document.getElementById(emailAddUSBP).style.borderBottom = "3px solid #ff6d6d";		
		document.getElementById(address).style.borderBottom = "3px solid #ff6d6d";
		document.getElementById(articleno).style.borderBottom = "3px solid #ff6d6d";
		document.getElementById(articleSize).style.borderBottom = "3px solid #ff6d6d";
		
		document.getElementById(fName).style.backgroundColor = "#FFFFCC";
        document.getElementById(lName).style.backgroundColor = "#FFFFCC";
        document.getElementById(emailAddUSBP).style.backgroundColor = "#FFFFCC";
		document.getElementById(address).style.backgroundColor = "#FFFFCC";
		document.getElementById(articleno).style.backgroundColor = "#FFFFCC";
		document.getElementById(articleSize).style.backgroundColor = "#FFFFCC";
		
	} else if (document.getElementById(fName).value.trim() == null || document.getElementById(fName).value.trim() == '') {
        var errFillIn = document.getElementById("errFillIn").value;
        alert(errFillIn);
        document.getElementById(fName).focus();

    } else if (document.getElementById(lName).value.trim() == null || document.getElementById(lName).value.trim() == '') {
        var errFillIn = document.getElementById("errFillIn").value;
        alert(errFillIn);
        document.getElementById(lName).focus();

    }else if (document.getElementById(emailAddUSBP).value.trim() == null || document.getElementById(emailAddUSBP).value.trim() == '') {
        var errFillEmailAddr = document.getElementById("errFillEmailAddr").value;
        alert(errFillEmailAddr);
        document.getElementById(emailAddUSBP).focus();
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        var errFillValidEmailAddr = document.getElementById("errFillValidEmailAddr").value;
        alert(errFillValidEmailAddr);
        document.getElementById(emailAddUSBP).focus();
        document.getElementById(emailAddUSBP).style.borderBottom = "3px solid #ff6d6d";
    }else if (document.getElementById(address).value.trim() == null || document.getElementById(address).value.trim() == '') {
        var errFillAddress = document.getElementById("errAddress").value;
        alert(errFillAddress);
        document.getElementById(address).focus();

    } else if (document.getElementById(articleno).value.trim() == null || document.getElementById(articleno).value.trim() == '') {
        var errFillArticleNo = document.getElementById("errArticleNo").value;
        alert(errFillArticleNo);
        document.getElementById(articleno).focus();

    }else if (document.getElementById(articleSize).value.trim() == null || document.getElementById(articleSize).value.trim() == '') {
        var errFillArticleSize = document.getElementById("errArticleSize").value;
        alert(errFillArticleSize);
        document.getElementById(articleSize).focus();

    }else{
		myButton.disabled = true;
		closewebcase();
	}
}
// Changes for CRMSFI 3001 : END

//US_CR Method Start
function uploadFileUSCR(render1,RenderValueBlk,RenderSizeBlk,fName, lName, emailAddress , cat, desc, sub,phn,addressUSCR,zip,art,pd,size,fvalue,myButton)
  {
	var phoneRegex = /^\+([0-9]|[0-9]+\s?)[0-9]{5,14}$/;
	
    //alert(render1);
    console.log('RenderValueBlk'+RenderValueBlk);
    console.log('RenderSizeBlk'+RenderSizeBlk);
    var captcharesponse = grecaptcha.getResponse(document.getElementById('widgetId1'));
    var Num_of_attach =0; 
    for (var i = 0; i<=allfilesinarray.length-1; i++) {
        if(typeof(allfilesinarray[i]) != 'undefined'){
			Num_of_attach++;
        }
    }
     console.log('Number of active attachmnets are:' + Num_of_attach);
     
   
    if( document.getElementById(emailAddress ).value != null && document.getElementById(emailAddress ).value != '')
    {
        var x = document.getElementById(emailAddress ).value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
    }
    
   // alert (document.getElementById(desc).getContent());   
    if(render1 == 'false')
	{        
		if((document.getElementById(fName).value == null || document.getElementById(fName).value == '')
		   && (document.getElementById(lName).value == null || document.getElementById(lName).value == '')
		   && (document.getElementById(emailAddress ).value == null || document.getElementById(emailAddress ).value == '')
		   && (document.getElementById(cat).value == null || document.getElementById(cat).value == '')
		   && (document.getElementById(sub).value == null || document.getElementById(sub).value == '')
		  && (document.getElementById(desc).value == null || document.getElementById(desc).value  == ''))
		{    
			var errFillDetails = document.getElementById("errFillDetails").value;
			alert(errFillDetails);

			document.getElementById(fName).focus();
			document.getElementById(fName).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(lName).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(emailAddress).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(cat).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(sub).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(desc).style.borderBottom = "3px solid #ff6d6d";

			document.getElementById(fName).style.backgroundColor = "#FFFFCC";
			document.getElementById(lName).style.backgroundColor = "#FFFFCC";
			document.getElementById(emailAddress).style.backgroundColor = "#FFFFCC";
			document.getElementById(cat).style.backgroundColor = "#FFFFCC";
			document.getElementById(sub).style.backgroundColor = "#FFFFCC";
			document.getElementById(desc).style.backgroundColor = "#FFFFCC";
				
		} else if (document.getElementById(fName).value.trim() == null || document.getElementById(fName).value.trim() == '') {
			var errFillIn = document.getElementById("errFillIn").value;
			alert(errFillIn);
			document.getElementById(fName).focus();

		} else if (document.getElementById(lName).value.trim() == null || document.getElementById(lName).value.trim() == '') {
			var errFillIn = document.getElementById("errFillIn").value;
			alert(errFillIn);
			document.getElementById(lName).focus();

		} else if (document.getElementById(emailAddress).value.trim() == null || document.getElementById(emailAddress).value.trim() == '') {
			var errFillEmailAddr = document.getElementById("errFillEmailAddr").value;
			alert(errFillEmailAddr);
			document.getElementById(emailAddress).focus();
		} else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
			var errFillValidEmailAddr = document.getElementById("errFillValidEmailAddr").value;
			alert(errFillValidEmailAddr);
			document.getElementById(emailAddress).focus();
			document.getElementById(emailAddress).style.borderBottom = "3px solid #ff6d6d";
		} else if (document.getElementById(cat).value.trim() == null || document.getElementById(cat).value.trim() == '') {
			var errFillCategory = document.getElementById("errFillCategory").value;
			alert(errFillCategory);
			document.getElementById(cat).focus();
		} else if (document.getElementById(sub).value.trim() == null || document.getElementById(sub).value.trim() == '') {
			var errFillSubject = document.getElementById("errFillSubject").value;
			alert(errFillSubject);
			document.getElementById(sub).focus();
		} else if (document.getElementById(desc).value.trim() == null || document.getElementById(desc).value.trim() == '') {
			var errFillQuestion = document.getElementById("errFillQuestion").value;
			alert(errFillQuestion);
			document.getElementById(desc).focus();
		} else if (document.getElementById(desc).value.length > 1000) {
			var errMaxChars = document.getElementById("errMaxChars").value;
			alert(errMaxChars);
			document.getElementById(desc).focus();
		} else if (Num_of_attach > 5) {
			var errMaxAttachments = document.getElementById("errMaxAttachments").value;
			alert(errMaxAttachments);
			return;
		} else if (Num_of_attach <= 5 && netSize >= overallSize) {
			console.log('all files size:' + netSize);
			var errMaxFileSize = document.getElementById("errMaxFileSize").value;
			alert(errMaxFileSize);
			return;
		} else if (captcharesponse == '') {
		   var errCaptcha = document.getElementById("errCaptcha").value;
		   alert(errCaptcha);
	   } 
      
		else
		{
			pop();
			// Disabling onclick after one hit
			myButton.disabled = true;
			// Javascript Remoting for captcha check
			var contactUsExtensionVerifyCaptcha = document.getElementById("contactUsExtensionVerifyCaptcha").value;
			Visualforce.remoting.Manager.invokeAction(
				contactUsExtensionVerifyCaptcha, captcharesponse,

				function(result, event) {
					console.log(result);
					if (event.status && result == true) {
						console.log('valid captcha');
						
						if ((document.getElementById("knowledgeArticleAvail").value.trim() == null || document.getElementById("knowledgeArticleAvail").value.trim
						() == '')) {
							
							continuewebcase();
						}else {
							
						// Bring the Knowledge Popup on Screen
						togglecontent();
						}
					} else {
						var errNoCaptcha = document.getElementById("errNoCaptcha").value;
						alert(errNoCaptcha);
						grecaptcha.reset();
					}
				});			
		}
	}		
    else
	{	
		if((document.getElementById(fName).value == null || document.getElementById(fName).value == '')
		&& (document.getElementById(lName).value == null || document.getElementById(lName).value == '')
		&& (document.getElementById(emailAddress ).value == null || document.getElementById(emailAddress ).value == '')
		&& (document.getElementById(cat).value == null || document.getElementById(cat).value == '')
		&& (document.getElementById(sub).value == null || document.getElementById(sub).value == '')
		&& (document.getElementById(desc).value == null || document.getElementById(desc).value  == '')
		&& (document.getElementById(addressUSCR).value == null || document.getElementById(addressUSCR).value  == '')
		&& (document.getElementById(zip).value == null || document.getElementById(zip).value  == '')
		&& (document.getElementById(art).value == null || document.getElementById(art).value  == '')
		&& (document.getElementById(pd).value == null || document.getElementById(pd).value  == '')
		&& ((document.getElementById(size).value == null || document.getElementById(size).value  == '') 
		&& (document.getElementById(fvalue).value == null || document.getElementById(fvalue).value  == ''))
		)
		{    
			var errFillDetails = document.getElementById("errFillDetails").value;
			alert(errFillDetails);
			
			document.getElementById(fName).focus();
			document.getElementById(fName).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(lName).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(emailAddress).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(cat).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(sub).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(desc).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(addressUSCR).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(zip).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(art).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(pd).style.borderBottom = "3px solid #ff6d6d";
			
			if(RenderSizeBlk == 'true')
			{
				document.getElementById(size).style.borderBottom = "3px solid #ff6d6d"; 
			}
			if(RenderValueBlk == 'true')    
			{   
				document.getElementById(fvalue).style.borderBottom = "3px solid #ff6d6d";     
			}       
			 
			document.getElementById(fName).style.backgroundColor = "#FFFFCC";
			document.getElementById(lName).style.backgroundColor = "#FFFFCC";
			document.getElementById(emailAddress).style.backgroundColor = "#FFFFCC";
			document.getElementById(cat).style.backgroundColor = "#FFFFCC";
			document.getElementById(sub).style.backgroundColor = "#FFFFCC";
			document.getElementById(desc).style.backgroundColor = "#FFFFCC";
			document.getElementById(addressUSCR).style.backgroundColor = "#FFFFCC";
			document.getElementById(zip).style.backgroundColor = "#FFFFCC";
			document.getElementById(art).style.backgroundColor = "#FFFFCC";
			document.getElementById(pd).style.backgroundColor = "#FFFFCC";
			if(RenderSizeBlk == 'true')
			{
			document.getElementById(size).style.backgroundColor = "#FFFFCC";
			}
			if(RenderValueBlk == 'true')
			{   
			document.getElementById(fvalue).style.backgroundColor = "#FFFFCC";
			}
			console.log('End If');
		}
		else if(document.getElementById(fName).value == null || document.getElementById(fName).value == '' )
		{
			var errFillIn = document.getElementById("errFillIn").value;
			alert(errFillIn);
			document.getElementById(fName).focus();         
					
		}
		else if(document.getElementById(lName).value == null || document.getElementById(lName).value == '' )
		{
			var errFillIn = document.getElementById("errFillIn").value;
			alert(errFillIn);
			document.getElementById(lName).focus();
		} 
		else if (document.getElementById(phn).value.trim() == null || document.getElementById(phn).value.trim() == '' || !(phoneRegex.test(document.getElementById(phn).value.trim()))) {
        var errFillIn = document.getElementById("errFillIn").value;
        alert(errFillIn);
        document.getElementById(phn).focus();
		}
		else if(document.getElementById(emailAddress).value == null || document.getElementById(emailAddress).value == '' )
		{
			var errFillIn = document.getElementById("errFillIn").value;
			alert(errFillIn);
			document.getElementById(emailAddress ).focus();
		}
		else if(atpos< 1 || dotpos<atpos+2 || dotpos+2 >= x.length)
		{       
			var errFillValidEmailAddr = document.getElementById("errFillValidEmailAddr").value;
			alert(errFillValidEmailAddr);
			document.getElementById(emailAddress).focus();
			document.getElementById(emailAddress).style.borderBottom = "3px solid #ff6d6d";   
		}
		else if(document.getElementById(cat).value == null || document.getElementById(cat).value == '' )
		{
			var errFillCategory = document.getElementById("errFillCategory").value;
			alert(errFillCategory);
			document.getElementById(cat).focus();
		}
		else if(document.getElementById(sub).value == null || document.getElementById(sub).value == '' )
		{
			var errFillSubject = document.getElementById("errFillSubject").value;
			alert(errFillSubject);
			document.getElementById(sub).focus();
		}
		else if(document.getElementById(desc).value == null || document.getElementById(desc).value == '' )
		{
			var errFillQuestion = document.getElementById("errFillQuestion").value;
			alert(errFillQuestion);
			document.getElementById(desc).focus();
		}   
		else if(document.getElementById(addressUSCR).value == null || document.getElementById(addressUSCR).value == '' )
		{
				var errFillAddressUSCR = document.getElementById("errAddressUSCR").value;
				alert(errFillAddressUSCR);
				document.getElementById(addressUSCR).focus();
		}
		else if(document.getElementById(zip).value == null || document.getElementById(zip).value == '' )
		{
				var errFillZipUSCR = document.getElementById("errZipUSCR").value;
				alert(errFillZipUSCR);
				document.getElementById(zip).focus();
		}
		else if(document.getElementById(art).value == null || document.getElementById(art).value == '' )
		{
				var errFillArtUSCR = document.getElementById("errArticleUSCR").value;
				alert(errFillArtUSCR);
				document.getElementById(art).focus();
		}
		else if(document.getElementById(pd).value == null || document.getElementById(pd).value == '' )
		{
				var errFillProdDateUSCR = document.getElementById("errProdDateUSCR").value;
				alert(errFillProdDateUSCR);
				document.getElementById(pd).focus();
		}
		else if(RenderSizeBlk == 'true' && (document.getElementById(size).value == null || document.getElementById(size).value == '' ))
		{       
				var errFillSizeUSCR = document.getElementById("errSizeUSCR").value;
				alert(errFillSizeUSCR);
				document.getElementById(size).focus();        
		}
		else if(RenderValueBlk == 'true' && (document.getElementById(fvalue).value == null || document.getElementById(fvalue).value == ''))
		{         
				var errFillValueUSCR = document.getElementById("errValueUSCR").value;
				alert(errFillValueUSCR);
				document.getElementById(fvalue).focus();
		
		}
		else if (Num_of_attach <= 5 && netSize >= overallSize) 
		{
			console.log('all files size:' + netSize);
			var errMaxFileSize = document.getElementById("errMaxFileSize").value;
			alert(errMaxFileSize);
			return;
		}	
		else
		{ 
		    pop();
			// Disabling onclick after one hit
			myButton.disabled = true;
			// Javascript Remoting for captcha check
			var contactUsExtensionVerifyCaptcha = document.getElementById("contactUsExtensionVerifyCaptcha").value;
			Visualforce.remoting.Manager.invokeAction(
            contactUsExtensionVerifyCaptcha, captcharesponse,

            function(result, event) {
                console.log(result);
                if (event.status && result == true) {
                    console.log('valid captcha');
					
					if ((document.getElementById("knowledgeArticleAvail").value.trim() == null || document.getElementById("knowledgeArticleAvail").value.trim
					() == '')) {
						
						continuewebcase();
					}else {
						
					// Bring the Knowledge Popup on Screen
					togglecontent();
					}
                } else {
                    var errNoCaptcha = document.getElementById("errNoCaptcha").value;
                    alert(errNoCaptcha);
                    grecaptcha.reset();
                }
            });
		}
    }  
  }
//US_CR Method End

function testOrderRefPattern(inputVal) {
    var patt = new RegExp(orderPatt);
    var patt1 = new RegExp(orderPatt1);
	var patt2 = new RegExp(orderPatt2);
	var patt3 = new RegExp(orderPatt3);
    if (patt.test(inputVal.toUpperCase()) || patt1.test(inputVal.toUpperCase()) || patt2.test(inputVal.toUpperCase()) || patt3.test(inputVal.toUpperCase())) {
        return true;
    } else {
        return false;
    }
}

function pop() {
    var resourceLoadImg = document.getElementById("resourceLoadImg").value;
    var submitTextLabel = document.getElementById("submitTextLabel").value;
    jQuery('[id$=Robinhood]').attr('src', resourceLoadImg);
    jQuery('[id$=Robinhood]').show();
    jQuery('[id$=submittext]').text(submitTextLabel);
}

function clspopup() {
    jQuery('[id$=Robinhood]').hide();
}

function checkFilled(fieldName, errField, errSign) {
    
    var inputVal = document.getElementById(fieldName).value.trim();
    if((document.getElementById("metaRegion").value.trim() != 'US')) {
		if (inputVal == "") {
			document.getElementById(fieldName).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(errField).style.display = 'block';
			document.getElementById(errSign).style.display = 'block';
		} else {
			document.getElementById(fieldName).style.backgroundColor = "white";
			document.getElementById(fieldName).style.border = "1px solid #D8D8D8";
			document.getElementById(errField).style.display = 'none';
			document.getElementById(errSign).style.display = 'none';
		}
	} else {
		if (inputVal == "") {
			document.getElementById(fieldName).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(errField).style.display = 'block';
			document.getElementById(errSign).style.display = 'block';
		} else {
			var pr = document.getElementById(fieldName).id;
            var opr =pr.search("ProdDate");
            var zipcd = document.getElementById(fieldName).id;
            var cd =zipcd.search("zipCode");
			
			if(opr!=-1){  
                  if(validDate(inputVal))
                  {   alert('true');
                       jQuery('[id$=InvalidProdDate]').hide();  
                  
                  }
                  else{
                       alert('false');
                       var st = 'Error: Please enter a valid date in MM/YY format.';
                       jQuery('[id$=InvalidProdDate]').text(st);
                       jQuery('[id$=InvalidProdDate]').show(); 
           
                  }
              }
			  
			  if(cd!=-1){
                  if(check_lengthZipCode(fieldName))
                  {    //alert('trueZip');
                       jQuery('[id$=InvalidZipCode]').hide();  
                  
                  }
                  else{
                       //alert('falseZip');
                       var st = 'Error: Please enter Zip Code in US format XXXXX.';
                       jQuery('[id$=InvalidZipCode]').text(st);
                       jQuery('[id$=InvalidZipCode]').show(); 
           
                  }
              }
			  
			  document.getElementById(fieldName).style.backgroundColor = "white";
              document.getElementById(fieldName).style.border = "1px solid #D8D8D8"; 
              document.getElementById(errField).style.display = 'none';
              document.getElementById(errSign).style.display = 'none'; 
		}
	}
    

}

function checkFilledNew(fieldName,fieldName1,errField, errSign) {
       
	var inputVal = document.getElementById(fieldName).value;            
	var i = document.getElementById(fieldName).getAttribute("name");
	if (inputVal == "") {
	  //  document.getElementById(fieldName).style.backgroundColor = "#FFFFCC";
	  //  document.getElementById(fieldName).style.border = "1px solid #ff0000";
	   // document.getElementById(fieldName).style.borderBottom = "3px solid #ff6d6d";
		document.getElementById(errField).style.display = 'block';
		document.getElementById(fieldName1).style.display = 'block';
		document.getElementById(errSign).style.display = 'block';
		if(i.indexOf("ProdDate") > -1==true){ 
			jQuery('[id$=InvalidProdDate]').hide(); 
			jQuery('[id$=InvalidProdDate1]').hide(); 
		}
	}                  
	 else{                     
	  var pr = document.getElementById(fieldName).id;
	  var opr =pr.search("ProdDate");              
	  if(opr!=-1){  
		  if(validDate(inputVal))
		  {   //alert('true');
			   jQuery('[id$=InvalidProdDate]').hide();  
			  jQuery('[id$=InvalidProdDate1]').hide(); 
		  }
		  else{
			   //alert('false');
			   var st = 'Error: Please enter a valid date';
			   var st1 = 'in MM/YY format..';
			   jQuery('[id$=InvalidProdDate]').text(st);
			   jQuery('[id$=InvalidProdDate]').show(); 
			   jQuery('[id$=InvalidProdDate1]').text(st1);
			   jQuery('[id$=InvalidProdDate1]').show(); 
   
		  }
	  }                  
		document.getElementById(fieldName).style.backgroundColor = "white";
		//document.getElementById(fieldName).style.border = "1px solid #D8D8D8"; 
		document.getElementById(fieldName1).style.backgroundColor = "white";
		//document.getElementById(fieldName1).style.border = "1px solid #D8D8D8"; 
		document.getElementById(errField).style.display = 'none';
		document.getElementById(fieldName1).style.display = 'none';
		document.getElementById(errSign).style.display = 'none';                            
	}
          
}

function openPopUp() {
    var urlRec = document.getElementById("urlRec").value;
    window.showModalDialog(urlRec, "dialogWidth:800px; dialogHeight:200px; center:yes");

}

function check_format(elementValue) {
    var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phoneNumberPattern.test(elementValue);
}

function hideshow(which, articleId) {
    if (!document.getElementById) return
    if (which.style.display == "block") which.style.display = "none"
    else {
        which.style.display = "block";
        // Push all the viewed articles in array
		 Selectedarticles.push(articleId);
    }
}

function check_length(fieldName, txtname1) {
    var txtarea1 = document.getElementById(fieldName).value.trim();
    maxLen = 999; // max number of characters allowed
    if (txtarea1.length > maxLen) {
        var msg = document.getElementById("errMaxChars").value;
        // Reached the Maximum length so trim the textarea
        document.getElementById(fieldName).value = document.getElementById(fieldName).value.substring(0, maxLen);
        jQuery('[id$=errDescription]').text(msg);
        jQuery('[id$=errDescription]').show();
        console.log(txtarea1.length);
    } else {
        // Maximum length not reached so update the value of my_text counter
        document.getElementById(txtname1).value = maxLen - document.getElementById(fieldName).value.length;
        jQuery('[id$=text_num]').text(document.getElementById(txtname1).value);
        jQuery('[id$=text_num]').show();
    }
}


// adding all the files into an array before Uploading

function preview(evt) {
    var namefiles = document.getElementById('fileForUpload').files;
    console.log('actual behaviour of file:' + namefiles[0]);
    filelst = document.getElementById('filelist');

    for (var i = 0; i < namefiles.length; i++) {
        file = namefiles[i];

        // Calculating size of file
        var num = file.size / 1024;
        var x = num.toFixed(2)
        // pushing file to global array
        allfilesinarray.push(file);
        // Calculating Total size of all the files
        netSize = netSize + file.size;
        //  console.log(file);
        console.log(allfilesinarray);
        var len = allfilesinarray.length;
        // Dynamically creating list elements
        var labelRemoveAttachment = document.getElementById("labelRemoveAttachment").value;
        li = document.createElement("li");
        fileInfo = '<div>' + file.name + '&nbsp;(' + x + 'KB)&nbsp;' + ' <a href onclick="deleteRow(this); return false;" style="background:transparent;color:#0286cd;cursor:pointer;">'+labelRemoveAttachment+'</a></div><br/>';
        li.id = len;
        li.innerHTML = fileInfo;
        filelst.appendChild(li);
    }
    console.log('total size is:' + netSize);
}

function deleteRow(e, f) {
    console.log(' AllfilesArray Before Deleting:' + allfilesinarray);
    var aid = parseInt(e.parentNode.parentNode.id);
    var aaid = aid - 1;
    console.log('aaid is:' + aaid);
    e.parentNode.parentNode.remove();
    netSize = netSize - allfilesinarray[aaid].size;
    delete allfilesinarray[aaid];
    console.log(allfilesinarray.length);
    console.log('AllfilesArray after Deleting:' + allfilesinarray);
    console.log('netsize after removing elements:' + netSize);

}

function check_count(fieldName, errField, errSign, categoryName) {

    var inputVal = document.getElementById(fieldName).value.trim();
    var categoryVal = document.getElementById(categoryName).value.trim();
    //For Non- US
	if (document.getElementById("metaRegion").value.trim() != 'US') {
		
		if (!(categoryVal == 'Existing Order' || categoryVal == 'Returns & Refunds') && inputVal == "") {
			document.getElementById(fieldName).style.backgroundColor = "white";
			document.getElementById(fieldName).style.border = "1px solid #D8D8D8";
			document.getElementById(errField).style.display = 'none';
			document.getElementById(errSign).style.display = 'none';
		} else if ((categoryVal == 'Existing Order' || categoryVal == 'Returns & Refunds') && inputVal == "") {
			console.log('in existing');
			document.getElementById(fieldName).style.borderBottom = "3px solid #ff6d6d";
			document.getElementById(errField).style.display = 'block';
			document.getElementById(errSign).style.display = 'block';
		} else {

			var patt = new RegExp(orderPatt);
			var patt1 = new RegExp(orderPatt1);
			var patt2 = new RegExp(orderPatt2);
			var patt3 = new RegExp(orderPatt3);
			console.log('in else');
			if (patt.test(inputVal.toUpperCase()) || patt1.test(inputVal.toUpperCase()) || patt2.test(inputVal.toUpperCase()) || patt3.test(inputVal.toUpperCase())) {
				document.getElementById(fieldName).style.backgroundColor = "white";
				document.getElementById(fieldName).style.border = "1px solid #D8D8D8";
				document.getElementById(errField).style.display = 'none';
				document.getElementById(errSign).style.display = 'none';
			} else {
				document.getElementById(fieldName).style.borderBottom = "3px solid #ff6d6d";
				document.getElementById(errField).style.display = 'block';
				document.getElementById(errSign).style.display = 'block';
				//document.getElementById(errField).innerHTML ='{!$label.Ecom_EMEA_Please_Fill_OrderNo}';
			}
		}
	} else { //For US
		if((categoryVal == 'Payment' || categoryVal == 'Existing Order') && inputVal==""){
                document.getElementById(fieldName).style.borderBottom = "3px solid #ff6d6d";
                document.getElementById(errField).style.display = 'block';
                document.getElementById(errSign).style.display = 'block';
                jQuery('[id$=InvalidPhone]').hide(); 
		}else{
			document.getElementById(fieldName).style.backgroundColor = "white";
			document.getElementById(fieldName).style.border = "1px solid #D8D8D8"; 
			document.getElementById(errField).style.display = 'none';
			document.getElementById(errSign).style.display = 'none';
		}
	}
}

function validatePhoneNo(fieldName, errField, errSign) {

    var inputVal = document.getElementById(fieldName).value.trim();
        
    var phoneRegex = /^\+([0-9]|[0-9]+\s?)[0-9]{5,14}$/;

	if((document.getElementById("metaRegion").value.trim() != 'US')) {
    		if (!(phoneRegex.test(inputVal)) && countryCode!='RU') {
        
	        document.getElementById(fieldName).style.borderBottom = "3px solid #ff6d6d";
	        document.getElementById(errField).style.display = 'block';
	        document.getElementById(errSign).style.display = 'block';
	        jQuery('[id$=InvalidPhone]').hide();
        
		} else {
			
			document.getElementById(fieldName).style.backgroundColor = "white";
			document.getElementById(fieldName).style.border = "1px solid #D8D8D8";
			document.getElementById(errField).style.display = 'none';
			document.getElementById(errSign).style.display = 'none';
		}
	} else { // For US
		if (inputVal == "") {
		document.getElementById(fieldName).style.borderBottom = "3px solid #ff6d6d";
        document.getElementById(errField).style.display = 'block';
        document.getElementById(errSign).style.display = 'block';
        jQuery('[id$=InvalidPhone]').hide();
		}
		else{            
				var ph = document.getElementById(fieldName).id;
				var op = ph.search("phoneNumUS");
				if(op != -1){  
				  if(check_format(inputVal)) { 

						//document.getElementById(InvalidPhone).style.display = 'block';

						// alert('true');
					   //jQuery('[id$=InvalidPhone]').hide();  
					   
					document.getElementById(fieldName).style.backgroundColor = "white";
					document.getElementById(fieldName).style.border = "1px solid #D8D8D8"; 
					document.getElementById(errField).style.display = 'none';
					document.getElementById(errSign).style.display = 'none';
				  
				  }
				  else{
					  // alert('false');
					   var st = 'Error: Please Enter Phone in US format (XXX)XXX-XXXX';
					    document.getElementById(errField).innerHTML = st;
					   //document.getElementById("errPhoneNoUS").style.display = 'block';
					   //jQuery('[id$=errPhoneNoUS]').text(st);
					   //jQuery('[id$=errPhoneNoUS]').css('display', 'block'); 
					   document.getElementById(fieldName).style.borderBottom = "3px solid #ff6d6d";
					   document.getElementById(errField).style.display = 'block';
					   document.getElementById(errSign).style.display = 'block';	
				  }
				}
					   
				                           
		}
	}
    

}

function validDate(dValue) {
	//alert(dValue);
	var result = false;
	dValue = dValue.split('/');
	var pattern = /^\d{2}$/;
	
	if (dValue[0] < 1 || dValue[0] > 12)
	result = true;
	
	if (!pattern.test(dValue[0]) || !pattern.test(dValue[1]))
	result = true;
	
	if (dValue[2])
	result = true;
	
	if (result) return false;
	else
		return true;
}

function check_lengthZipCode(fieldName){
           
   var zipcode1= document.getElementById(fieldName).value;
   //alert(zipcode1.length);
   var maxLen = 5; 
	if (zipcode1.length != maxLen) 
		return false;
	else
		return true;
}

function redirectThankyou(){
    var pathArray = window.location.pathname.split( '/' );
    window.top.location= '/'+pathArray[1]+'/Thankyou'+'?brand='+contactBrand+'&country='+countryCode+'&language='+contactLang+'&isClose='+isClose+'&caseNum='+caseNumber;               
}

function disableBtn(){
    
    var classname = document.getElementsByClassName("popup-case-btn");
    
    for (var i = 0; i < classname.length; i++) {
        classname[i].disabled = true;
    }
    return false;
}