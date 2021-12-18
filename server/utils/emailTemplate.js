const templates = {
    NEW_REQUEST:{
        key: "NEW_REQUEST",
        subject: "[Tes Portal Update] New Request Raised",
        html: `
        <!DOCTYPE html/>
        <html>
        <body>
        <div>
        
        <p style="padding:10px 0px"> ##headerName## </p>
        <div> New Request Raised on <span style="font-weight:bold">##portalName##</span> of Client : <span style="font-weight:bold">##clientName##</span> 
            </div>
        <p style="padding:10px 0px">Please find New Request details here.</p>
        <table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%; margin-left:2.25pt; background:white; border-collapse:collapse; border:none">
        <tbody>
        <tr>
        <td style="border:solid gray 1.0pt; border-left:solid gray 1.0pt; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">RequestId #</span></b><b></b></p>
        </td>
        <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Request Type</span></b><b></b></p>
        </td>
        <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Request Description</span></b><b></b></p>
        </td>
        <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Country</span></b><b></b></p>
        </td>
        <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Processing Partner</span></b><b></b></p>
        </td>
        
        <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Raised By</span></b><b></b></p>
        </td>
        <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Raised Date</span></b><b></b></p>
        </td>
        </tr>
        <tr>
        <td style="border-top:none; border-left:solid gray 1.0pt; border-bottom:solid gray 1.0pt; border-right:solid gray 1.0pt; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" style="margin:2.25pt"><span style="color:black">##requestId##</span></p>
        </td>
        <td style="border-top:none; border-left:none; border-bottom:solid gray 1.0pt; border-right:solid gray 1.0pt; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" style="margin:2.25pt"><span style="color:black">##requestType##</span></p>
        </td>
        <td style="border-top:none; border-left:none; border-bottom:solid gray 1.0pt; border-right:solid gray 1.0pt; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" style="margin:2.25pt"><span style="color:black">##requestSummary##</span></p>
        </td>
        <td style="border-top:none; border-left:none; border-bottom:solid gray 1.0pt; border-right:solid gray 1.0pt; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" style="margin:2.25pt"><span style="color:black">##country##</span></p>
        </td>
        <td style="border-top:none; border-left:none; border-bottom:solid gray 1.0pt; border-right:solid gray 1.0pt; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" style="margin:2.25pt"><span style="color:black">##processingPartner##</span></p>
        </td>
        <td style="border-top:none; border-left:none; border-bottom:solid gray 1.0pt; border-right:solid gray 1.0pt; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" style="margin:2.25pt"><span style="color:black">##raisedBy##</span></p>
        </td>
        <td style="border-top:none; border-left:none; border-bottom:solid gray 1.0pt; border-right:solid gray 1.0pt; padding:2.25pt 2.25pt 2.25pt 2.25pt">
        <p class="MsoNormal" style="margin:2.25pt"><span style="color:black">##raisedDate##</span></p>
        </td>
        </tr>
        </tbody>
        </table>

<h3 style="margin-top:30px">Collection details:</h3>
<p class="MsoNormal" style="margin:2.25pt"><span style="color:black">Collection Site Id: ##siteId##</span></p>
<p class="MsoNormal" style="margin:2.25pt"><span style="color:black">Company Name: ##companyName##</span></p>
<p class="MsoNormal" style="margin:2.25pt"><span style="color:black">Street Address 1: ##streetAddress1##</span></p>
<p class="MsoNormal" style="margin:2.25pt"><span style="color:black">Street Address 2: ##streetAddress2##</span></p>
<p class="MsoNormal" style="margin:2.25pt"><span style="color:black">House No: ##houseNo##</span></p>
<p class="MsoNormal" style="margin:2.25pt"><span style="color:black">Postcode: ##postCode##</span></p>
<p class="MsoNormal" style="margin:2.25pt"><span style="color:black">City: ##city##</span></p>


<p class="MsoNormal" style="margin:2.25pt;margin-top:25px"><span style="color:black">Phone 1: ##collectionPhone##</span></p>


<p class="MsoNormal" style="margin:2.25pt;"><span style="color:black">Phone 2: ##collectionPhone2##</span></p>
<p class="MsoNormal" style="margin:2.25pt;"><span style="color:black">Contact Name: ##contactName##</span></p>
<p class="MsoNormal" style="margin:2.25pt;"><span style="color:black">Fax: ##fax##</span></p>
<p class="MsoNormal" style="margin:2.25pt;"><span style="color:black">Email: ##emailAddress##</span></p>


<h3 style="margin-top:30px">Contact Details:</h3>
<p class="MsoNormal" style="margin:2.25pt"><span style="color:black">Primary Contact Name: ##primaryName##</span></p>
<p class="MsoNormal" style="margin:2.25pt"><span style="color:black">Primary Phone Number: ##primaryPhone##</span></p>
<p class="MsoNormal" style="margin:2.25pt"><span style="color:black">Primary Email Address: ##primaryEmail##</span></p>

<p class="MsoNormal" style="margin:2.25pt;margin-top:20px"><span style="color:black">Secondary Contact Name: ##secondaryName##</span></p>
<p class="MsoNormal" style="margin:2.25pt;"><span style="color:black">Secondary Phone: ##secondaryPhone##</span></p>
<p class="MsoNormal" style="margin:2.25pt;"><span style="color:black">Secondary Email: ##secondaryEmail##</span></p>

        <p> Request Status Can be verified at ##portalUrl## </p>
        </div>
        </body>
        </html>
        
        `

    },
    UPDATE_STATUS: {
        key: "UPDATE_STATUS",
        subject: "[Tes Portal Update] Request Processing Status Updated",
        html: `<!DOCTYPE html/>
        <html>
        <body>
        <div style="padding: 10px">
        
        <p style="padding:10px 0px"> ##headerName## </p>
        <div> Request Processing Status Updated of Portal<span style="font-weight:bold">##portalName##</span> of Client : <span style="font-weight:bold">##clientName##</span> 
          </div>
        <h2>Request Id: ##requestId##</h2>
        <h4>Request Type: ##requestType##</h4>
        <p>Customer Reference Number: ##jobId##</p>
        <p style="padding:10px 0px"> Current Request Status is <span style="font-weight:bold">##statusName##</span></p>
        <p style="padding:10px 0px"> ##statusName## <span style="font-weight:bold">##pickUpDate##</span></p>
        <p>
        Status Updated By <span style="font-weight:bold"> ##updatedBy##</span> at <span style="font-weight:bold">##updatedDate##</span>
        </p>
        <div style=" padding: 10px;">
        <p>Status Message</p>
        <p style="border:1px solid gray;padding:10px">##statusRemarks##</p>
        </div>
        ...
        <p>
        <p> Request Status Can be verified at ##portalUrl## </p>
        </div>
        </body>
        </html>
        
        `
    },
    REJECT_STATUS: {
        key: "CANCEL_STATUS",
        subject: "[Tes Portal Update] Request Cancelled By Tes BDM ",
        html: `<!DOCTYPE html/>
        <html>
        <body>
        <div style="padding: 10px">
        
        <p style="padding:10px 0px"> ##headerName## </p>
        <div> Request Processing Status Cancelled of Portal<span style="font-weight:bold">##portalName##</span> of Client : <span style="font-weight:bold">##clientName##</span> 
          </div>
        <h2>Request Id: ##requestId##</h2>
        <h4>Request Type: ##requestType##</h4>
        
        <div style=" padding: 10px;">
        <p>Status: <span style="color:red;font-weight:bold;">CANCELLED</span></p>
        <p>Cancel Reason</p>
        <p style="border:1px solid gray;padding:10px">##rejectRemarks##</p>
        </div>
        <p>
        Request Cancelled By <span style="font-weight:bold"> ##updatedBy##</span> at <span style="font-weight:bold">##updatedDate##</span>
        </p>
        <p> Request Status Can be verified at ##portalUrl## </p>
        <p>
        </div>
        </body>
        </html>
        `
    },
    RESUME_REJECTED_STATUS: {
        key: "RESUME_CANCELLED_STATUS",
        subject: "[Tes Portal Update] Provided Access to Cancelled Request By Tes BDM ",
        html: `<!DOCTYPE html/>
        <html>
        <body>
        <div style="padding: 10px">
        
        <p style="padding:10px 0px"> ##headerName## </p>
        <div> Cancelled Request has been resumed of Portal<span style="font-weight:bold">##portalName##</span> of Client : <span style="font-weight:bold">##clientName##</span> 
          </div>
        <h2>Request Id: ##requestId##</h2>
        <h4>Request Type: ##requestType##</h4>
        
        <div style=" padding: 10px;">
        <p>Status: <span style="color:green;font-weight:bold;">##statusName##</span></p>
        
        </div>
        <p>
        Request  Resumed By <span style="font-weight:bold"> ##updatedBy##</span> at <span style="font-weight:bold">##updatedDate##</span>
        </p>
        
        <p> Request Status Can be verified at ##portalUrl## </p>
        <p>
        </div>
        </body>
        </html>
        `
    },
    // QUOTE_REQUEST: {
    //   key: "QUOTE_INITIATED",
    //     subject: "[Tes Portal Update] New Request Quotation Raised ",
    //     html: `
    //     <!DOCTYPE html/>
    //     <html>
    //     <body>
    //     <div>
        
    //     <p style="padding:10px 0px">  ##headerName## </p>
    //     <div> Quotation Requested for Request on Portal <span style="font-weight:bold">##portalName##</span> of Client : <span style="font-weight:bold">##clientName##</span> 
    //         </div>
    //     <p> Request Id : <span style="font-weight:bold">##requestId##</span> </p>
    //     <p> Request Type : <span style="font-weight:bold">##requestType##</span>
        
    //     <div style=" padding: 10px;">
    //     <p>Quote Client Message</p>
    //     <p style="border:1px solid gray;padding:10px">##quoteClientMessage##</p>
    //     </div>
        
    //     <p style="padding:10px 0px;margin-top:10px">Please find the details below Request Service(s) here.</p>
    //     <table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%; margin-left:2.25pt; background:white; border-collapse:collapse; border:none">
    //     <tbody>
    //     <tr>
    //     <td style="border:solid gray 1.0pt; border-left:solid gray 1.0pt; padding:2.25pt 2.25pt 2.25pt 2.25pt">
    //     <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Service Name #</span></b><b></b></p>
    //     </td>
    //     <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
    //     <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">isQuotable</span></b><b></b></p>
    //     </td>
    //     <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
    //     <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Prices</span></b><b></b></p>
    //     </td>
    //     </tr>
    //     ##quoteRecords##
    //     </tbody>
    //     </table>
    //     <p> For Full Request information , Please go through ##portalUrl## </p>

    //     </div>
    //     </body>
    //     </html>
    //     `
    // },
    // QUOTE_UPDATED_ADMIN: {
    //   key: "QUOTE_UPDATED_ADMIN",
    //   subject: "[Tes Portal Update] Request Quotation Updated By Admin ",
    //   html: `<!DOCTYPE html/>
    //   <html>
    //   <body>
    //   <div>
      
    //   <p style="padding:10px 0px"> ##headerName## </p>
    //   <div> Quotation Requested for Request Updated by Tes BDM , on Portal <span style="font-weight:bold">##portalName##</span> of Client : <span style="font-weight:bold">##clientName##</span> 
    //       </div>
    //   <p> Request Id : <span style="font-weight:bold">##requestId##</span> </p>
    //   <p> Request Type : <span style="font-weight:bold">##requestType##</span>
    //   <p> Tes BDM : <span style="font-weight: bold">##tesBDM##</span>
    //   <div style=" padding: 10px;">
    //   <p>Quote Client Message</p>
    //   <p style="border:1px solid gray;padding:10px">##clientMessage##</p>
    //   </div>
      
    //   <div style=" padding: 10px;">
    //   <p>Tes Message</p>
    //   <p style="border:1px solid gray;padding:10px">##tesMessage##</p>
    //   </div>
    //   <div style=" padding: 10px;">
    //   <p>Quote Message</p>
    //   <p style="border:1px solid gray;padding:10px">##quoteMessage##</p>
    //   </div>
      
    //   <p style="padding:10px 0px;margin-top:10px">Please find the details below Quote Request Service(s) here.</p>
    //   <table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%; margin-left:2.25pt; background:white; border-collapse:collapse; border:none">
    //   <tbody>
    //   <tr>
    //   <td style="border:solid gray 1.0pt; border-left:solid gray 1.0pt; padding:2.25pt 2.25pt 2.25pt 2.25pt">
    //   <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Service Name #</span></b><b></b></p>
    //   </td>
    //   <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
    //   <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Is Quotable</span></b><b></b></p>
    //   </td>
    //   <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
    //   <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Price (##currency##)</span></b><b></b></p>
    //   </td>
    //   </tr>
    //   ##quoteRecords##
    //   </tbody>
    //   </table>
    //   </div>
    //   </body>
    //   </html>
      
    //   `
    // },
    QUOTE_REQUEST: {
      key: "QUOTE_INITIATED",
        subject: "[TES Portal Update] New Quotation Request",
        html: `
        <!DOCTYPE html/>
        <html>
        <body>
        <div>
            <p style="padding:10px 0px"> Dear TES,</p>
            <div>Quotation Request Details:</div>
            <p>Portal Name : <span style="font-weight:bold">##portalName##</span> </p>
            <p>Client : <span style="font-weight:bold">##clientName##</span> </p>    
            <p> Request Id : <span style="font-weight:bold">##requestId##</span> </p>
            <p> Ref. Number: <span style="font-weight:bold">##referenceNumber##</span> </p>
            <p> City : <span style="font-weight: bold"> ##city##</span> </p>
            <p>Country : <span style="font-weight: bold"> ##country##</span> </p>
            <p>Status : <span style="font-weight: bold"> ##status##</span> </p>
            <p>For details please click on the link: ##adminUrl## </p>
            <div style=" padding-top: 10px;">
              <p>Best regards</p>
              <p style="font-weight: bold">TES Service Team</p>
            </div>
          </div>
        </body>
        </html>
        `
    },
    QUOTE_UPDATED_ADMIN: {
      key: "QUOTE_UPDATED_ADMIN",
      subject: "[TES Portal Update] Quotation Request Update",
      html: `<!DOCTYPE html/>
      <html>
      <body>
      <div>
        <p style="padding:10px 0px"> Dear ##requester##,</p>
        <div>Your request was updated.</div>    
        <p> Request Id : <span style="font-weight:bold">##requestId##</span> </p>
        <p> Ref. Number: <span style="font-weight:bold">##referenceNumber##</span> </p>
        <p> City : <span style="font-weight: bold"> ##city##</span> </p>
        <p>Country : <span style="font-weight: bold"> ##country##</span> </p>
        <p>Status : <span style="font-weight: bold"> ##status##</span> </p>
        <p>For details please click on the link: ##portalUrl## </p>
        <div style=" padding-top: 10px;">
          <p>Best regards</p>
          <p style="font-weight: bold">TES Service Team</p>
        </div>
      </div>
      </body>
      </html>
      `
    },
    QUOTE_APPROVED: {
      key: "QUOTE_APPROVED",
        subject: `[Customer Portal] Request Quotation Approved by Client `,
        html: `
        <!DOCTYPE html/>
        <html>
        <body>
        <div>
            <p style="padding:10px 0px"> Dear TES,</p>
            <div>Quotation Request Details:</div>
            <p>Portal Name : <span style="font-weight:bold">##portalName##</span> </p>
            <p>Client : <span style="font-weight:bold">##clientName##</span> </p>    
            <p> Request Id : <span style="font-weight:bold">##requestId##</span> </p>
            <p> Ref. Number: <span style="font-weight:bold">##referenceNumber##</span> </p>
            <p> City : <span style="font-weight: bold"> ##city##</span> </p>
            <p>Country : <span style="font-weight: bold"> ##country##</span> </p>
            <p>Status : <span style="font-weight: bold"> ##status##</span> </p>
            <p>For details please click on the link: ##portalUrl## </p>
            <div style=" padding-top: 10px;">
              <p>Best regards</p>
              <p style="font-weight: bold">TES Service Team</p>
            </div>
          </div>
        </body>
        </html>
        `
    },
    QUOTE_REJECTED: {
      key: "QUOTE_REJECTED",
        subject: `[Customer Portal] Request Quotation Rejected by Client `,
        html: `
        <!DOCTYPE html/>
        <html>
        <body>
        <div>
            <p style="padding:10px 0px"> Dear TES,</p>
            <div>Quotation Request Details:</div>
            <p>Portal Name : <span style="font-weight:bold">##portalName##</span> </p>
            <p>Client : <span style="font-weight:bold">##clientName##</span> </p>    
            <p> Request Id : <span style="font-weight:bold">##requestId##</span> </p>
            <p> Ref. Number: <span style="font-weight:bold">##referenceNumber##</span> </p>
            <p> City : <span style="font-weight: bold"> ##city##</span> </p>
            <p>Country : <span style="font-weight: bold"> ##country##</span> </p>
            <p>Status : <span style="font-weight: bold"> ##status##</span> </p>
            <p>For details please click on the link: ##portalUrl## </p>
            <div style=" padding-top: 10px;">
              <p>Best regards</p>
              <p style="font-weight: bold">TES Service Team</p>
            </div>
          </div>
        </body>
        </html>
        `
    },
    
//     QUOTE_APPROVED : {
//       key: `QUOTE_APPROVED`,
//       subject: `[Customer Portal] Request Quotation Approved by Client `,
//       html: `
//       <!DOCTYPE html/>
//       <html>
//       <body>
//       <div>
      
//       <p style="padding:10px 0px"> ##headerName## </p>
//       <div> Quotation Approved for Request on Portal <span style="font-weight:bold">##portalName##</span> of Client : <span style="font-weight:bold">##clientName##</span> 
//           </div>
//       <p> Request Id : <span style="font-weight:bold">##requestId##</span> </p>
//       <p> Request Type : <span style="font-weight:bold">##requestType##</span>
//       <p> Updated By: <span style="font-weight:bold"> ##updatedBy##</span>

//       <div style=" padding: 10px;">
//       <p>Client Message</p>
//       <p style="border:1px solid gray;padding:10px">##clientMessage##</p>
//       </div>

// <div style=" padding: 10px;">
//       <p>Tes Message</p>
//       <p style="border:1px solid gray;padding:10px">##clientMessage##</p>
//       </div>
//   <div style=" padding: 10px;">
//       <p>Quote Message</p>
//       <p style="border:1px solid gray;padding:10px">##clientMessage##</p>
//       </div>
      
      
//       <p style="padding:10px 0px;margin-top:10px">Please find the details below Quote Service(s) here.</p>
//       <table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%; margin-left:2.25pt; background:white; border-collapse:collapse; border:none">
//       <tbody>
//       <tr>
//       <td style="border:solid gray 1.0pt; border-left:solid gray 1.0pt; padding:2.25pt 2.25pt 2.25pt 2.25pt">
//       <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Service Name #</span></b><b></b></p>
//       </td>
//       <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
//       <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">isQuotable</span></b><b></b></p>
//       </td>
//       <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
//       <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Price (##currency##)</span></b><b></b></p>
//       </td>
//       </tr>
//       ##quoteRecords##
//       </tbody>
//       </table>

//       <p> For Full Request information , Please go through ##portalUrl## </p>

//       </div>
//       </body>
//       </html>
//       `
//     },
//     QUOTE_REJECTED : {
//       key: `QUOTE_REJECTED`,
//       subject: `[Customer Portal] Request Quotation Rejected by Client `,
//       html: `
//       <!DOCTYPE html/>
//       <html>
//       <body>
//       <div>
      
//       <p style="padding:10px 0px"> ##headerName## </p>
//       <div> Quotation <span style="color: red">Rejected</span> for Request on Portal <span style="font-weight:bold">##portalName##</span> of Client : <span style="font-weight:bold">##clientName##</span> 
//           </div>
//       <p> Request Id : <span style="font-weight:bold">##requestId##</span> </p>
//       <p> Request Type : <span style="font-weight:bold">##requestType##</span>
//       <p> Updated By: <span style="font-weight:bold"> ##updatedBy##</span>

//       <div style=" padding: 10px;">
//       <p>Client Message</p>
//       <p style="border:1px solid gray;padding:10px">##clientMessage##</p>
//       </div>

// <div style=" padding: 10px;">
//       <p>Tes Message</p>
//       <p style="border:1px solid gray;padding:10px">##clientMessage##</p>
//       </div>
//   <div style=" padding: 10px;">
//       <p>Quote Message</p>
//       <p style="border:1px solid gray;padding:10px">##clientMessage##</p>
//       </div>
      
      
//       <p style="padding:10px 0px;margin-top:10px">Please find the details below Quote Service(s) here.</p>
//       <table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%; margin-left:2.25pt; background:white; border-collapse:collapse; border:none">
//       <tbody>
//       <tr>
//       <td style="border:solid gray 1.0pt; border-left:solid gray 1.0pt; padding:2.25pt 2.25pt 2.25pt 2.25pt">
//       <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Service Name #</span></b><b></b></p>
//       </td>
//       <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
//       <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">isQuotable</span></b><b></b></p>
//       </td>
//       <td style="border:solid gray 1.0pt; border-left:none; padding:2.25pt 2.25pt 2.25pt 2.25pt">
//       <p class="MsoNormal" align="center" style="margin:2.25pt; text-align:center"><b><span style="color:black">Price (##currency##)</span></b><b></b></p>
//       </td>
//       </tr>
//       ##quoteRecords##
//       </tbody>
//       </table>

//       <p> For Full Request information , Please go through ##portalUrl## </p>

//       </div>
//       </body>
//       </html>
//       `
//     },
    PARTNER_MODIFY: {
      key: `PARTNER_MODIFY`,
      subject: `[Customer Portal]  Processing Partner is Updated for User Request`,
      html: `
      <!DOCTYPE html/>
      <html>
      <body>
      <div>
      
      <p style="padding:10px 0px"> ##headerName## </p>
      <div> Processing Partner <span style="font-weight:bold">##partnerName##</span> is updated for Request on Portal <span style="font-weight:bold">##portalName##</span> of Client : <span style="font-weight:bold">##clientName##</span> 
      </div>

      <p> Request Id : <span style="font-weight:bold">##requestId##</span> </p>
      <p> Request Type : <span style="font-weight:bold">##requestType##</span>
      <p> Updated By: <span style="font-weight:bold"> ##updatedBy##</span>
      <p>Request Collection Country is :<span style="font-weight:bold">##country##</p>

      <p> For Full Request information , Please go through ##portalUrl## </p>

      </div>
      </body>
      </html>
      `
    },
    SYNC_CREATE_ASSET_TYPE: {
      key: `SYNC_CREATE_ASSET_TYPE`,
      subject: `One Asset Type was created`,
      html: `
      <!DOCTYPE html/>
      <html>
      <body>
      <div>
      
      <span style="font-weight:bold">One Asset Type was created</span>

      <p>This email was sent automatically. Please do not reply</p>

      </div>
      </body>
      </html>
      `
    },
    SYNC_REJECT_ASSET_TYPE: {
      key: `SYNC_REJECT_ASSET_TYPE`,
      subject: `One Asset Type was rejected`,
      html: `
      <!DOCTYPE html/>
      <html>
      <body>
      <div>
      
      <span style="font-weight:bold">One Asset Type was rejected</span>

      <p>This email was sent automatically. Please do not reply</p>

      </div>
      </body>
      </html>
      `
    },
    SYNC_CREATE_PART: {
      key: `SYNC_CREATE_PARTMAINTENANCE`,
      subject: `One Partmaintenance was created`,
      html: `
      <!DOCTYPE html/>
      <html>
      <body>
      <div>
      
      <span style="font-weight:bold">One Partmaintenance was created</span>

      <p>This email was sent automatically. Please do not reply</p>

      </div>
      </body>
      </html>
      `
    },
    SYNC_REJECT_PART: {
      key: `SYNC_REJECT_PART`,
      subject: `One Partmaintenance was rejected`,
      html: `
      <!DOCTYPE html/>
      <html>
      <body>
      <div>
      
      <span style="font-weight:bold">One Partmaintenance was rejected</span>

      <p>This email was sent automatically. Please do not reply</p>

      </div>
      </body>
      </html>
      `
    }
}

module.exports = templates