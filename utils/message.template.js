const OtpMessageDisplay = ({ otpCode, userName, codeType }) => {
  const otpMessage = `<!DOCTYPE html PUBLIC>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title></title>

    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }

        .u-row .u-col-100 {
          width: 600px !important;
        }
      }

      @media (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: 100% !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
      }
      body {
        margin: 0;
        padding: 0;
      }

      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }

      p {
        margin: 0;
      }

      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }

      table,
      td {
        color: #000000;
      }
      #u_body a {
        color: #0000ee;
        text-decoration: underline;
      }
      @media (max-width: 480px) {
        #u_content_heading_3 .v-container-padding-padding {
          padding: 40px 10px 10px !important;
        }
        #u_content_heading_3 .v-text-align {
          text-align: left !important;
        }
        #u_content_text_3 .v-container-padding-padding {
          padding: 10px 10px 0px !important;
        }
        #u_content_text_3 .v-text-align {
          text-align: left !important;
        }
      }
    </style>

    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
  </head>

  <body
    class="clean-body u_body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #ecf0f1;
      color: #000000;
    "
  >
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table
      id="u_body"
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #ecf0f1;
        width: 100%;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            "
          >
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ecf0f1;"><![endif]-->

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #ffffff;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_heading_3"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 40px 10px 10px 40px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <!--[if mso]><table width="100%"><tr><td><![endif]-->
                                 <div>
                                  <img
                                    style="width: 90%; margin-bottom: 2rem"
                                    src="https://res.cloudinary.com/dwrmw2fsn/image/upload/v1745850584/5_u7eakq.png"
                                    alt=""
                                  />
                                </div>
                                <h1
                                  class="v-text-align"
                                  style="
                                    margin: 0px;
                                    color: #000000;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                    font-size: 22px;
                                    font-weight: 400;
                                  "
                                >
                                  <span
                                    ><span
                                      ><span
                                        ><strong>Hello ${userName}! </strong></span
                                      ></span
                                    ></span
                                  >
                                </h1>
                                <!--[if mso]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_text_3"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 60px 25px 40px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    font-size: 14px;
                                    color: #000000;
                                    line-height: 170%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 170%">
                                    Trying to make a transfer this is your one
                                    time ${codeType}: ${otpCode}
                                  </p>
                                  <p style="line-height: 170%">
                                    Get in touch with us, if you need any
                                    further clarification for the same.
                                  </p>
                                  <p style="line-height: 170%">
                                    <span style="line-height: 23.8px"
                                      ><br />Please reach out to us if you have
                                      any complain at
                                      <a href="mailto:Qulocreditunion@gmail.com"
                                        >Qulocreditunion@gmail.com</a
                                      >. We’d love to hear from you!</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
</html>

  `;
  return otpMessage;
};

const welcomeMessage = ({ pin, password, accountNumber, userName }) => {
  const message = `
 <!DOCTYPE html PUBLIC>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title></title>

    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }

        .u-row .u-col-100 {
          width: 600px !important;
        }
      }

      @media (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: 100% !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
      }
      body {
        margin: 0;
        padding: 0;
      }

      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }

      p {
        margin: 0;
      }

      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }

      table,
      td {
        color: #000000;
      }
      #u_body a {
        color: #0000ee;
        text-decoration: underline;
      }
      @media (max-width: 480px) {
        #u_content_heading_3 .v-container-padding-padding {
          padding: 40px 10px 10px !important;
        }
        #u_content_heading_3 .v-text-align {
          text-align: left !important;
        }
        #u_content_text_3 .v-container-padding-padding {
          padding: 10px 10px 0px !important;
        }
        #u_content_text_3 .v-text-align {
          text-align: left !important;
        }
      }
    </style>

    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
  </head>

  <body
    class="clean-body u_body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #ecf0f1;
      color: #000000;
    "
  >
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table
      id="u_body"
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #ecf0f1;
        width: 100%;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            "
          >
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ecf0f1;"><![endif]-->

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #ffffff;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_heading_3"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 40px 10px 10px 40px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <div>
                                  <img
                                    style="width: 90%; margin-bottom: 2rem"
                                    src="https://res.cloudinary.com/dwrmw2fsn/image/upload/v1745850584/5_u7eakq.png"
                                    alt=""
                                  />
                                </div>
                                <!--[if mso]><table width="100%"><tr><td><![endif]-->
                                <h1
                                  class="v-text-align"
                                  style="
                                    margin: 0px;
                                    color: #000000;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                    font-size: 22px;
                                    font-weight: 400;
                                  "
                                >
                                  <span
                                    ><span
                                      ><span
                                        ><strong
                                          >Hello ${userName}! </strong
                                        ></span
                                      ></span
                                    ></span
                                  >
                                </h1>
                                <!--[if mso]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_text_3"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 60px 25px 40px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    font-size: 14px;
                                    color: #000000;
                                    line-height: 170%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 170%">
                                    This is is to inform you that your account
                                    is registered successfully with
                                    <strong>Qulo Credit Union</strong>
                                  </p>
                                  <br />
                                  <p style="line-height: 170%">
                                    <strong
                                      >This is your account information</strong
                                    >
                                  </p>
                                  <p style="line-height: 170%">
                                    <span>
                                      <strong>User name: </strong
                                      >${userName}</span
                                    >
                                  </p>
                                  <p style="line-height: 170%">
                                    <span>
                                      <strong>Account Number: </strong
                                      >${accountNumber}
                                    </span>
                                  </p>
                                  <p style="line-height: 170%">
                                    <span> <strong>Pin: </strong>${pin}</span>
                                  </p>
                                  <p style="line-height: 170%">
                                    <span>
                                      <strong>Password: </strong
                                      >${password}</span
                                    >
                                  </p>
                                  <p style="line-height: 170%">
                                    <span style="line-height: 23.8px"
                                      ><br />Please reach out to us if you have
                                      any complain at
                                      <a
                                        href="mailto:Qulocreditunion@gmail.com"
                                        >Contact us</a
                                      >. We’d love to hear from you!</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
</html>

  `;

  return message;
};

const transactionMessageDisplay = ({
  moneySent,
  accountDebited,
  accountCredited,
  accountName,
  description,
  date,
  availableBalance,
  totalBalance,
}) => {
  const transactionMessage = `
        <html lang="en">
        <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Region Bank</title>
                <link rel="stylesheet" href="href='https://fonts.googleapis.com/css?family=Roboto'">
                <style>
                        .right{
                                text-align: right;
                        }
                        .left{
                                text-align: left;
                        }
                        .link{
                                width: 500px;
                                margin: auto;
                                text-align: center;
                                /* background-color: yellowgreen; */
                                
                        }
                        @media(max-width:700px){
                                .link{
                                        /* background-color: red; */
                                        width: 90%;
                                }
                        } 
                                
                </style>
        
        </head>
        <body style="font-family: 'Roboto'; text-align: center;">
                <div style="text-align: center;" class="logo">
                        <img src="https://res.cloudinary.com/dwrmw2fsn/image/upload/v1745850584/5_u7eakq.png" alt="Region Bank">
                </div>
                <h3>Transaction Details</h3>
                <table align="center">
                        <tr>
                                <td class="left">Money sent</td>
                                <td class="right">$${moneySent}</td>
                        </tr>
                        <tr>
                                <td class="left">Account debited</td>
                                <td class="right">${accountDebited}</td>
                        </tr>
                        <tr>
                                <td class="left">Account Creditted</td>
                                <td class="right">${accountCredited}</td>
                        </tr>
                        <tr>
                                <td class="left">Account Name</td>
                                <td class="right">${accountName}</td>
                        </tr>
                        <tr>
                                <td class="left">Description</td>
                                <td class="right">${description}</td>
        
                        </tr>
                        <tr>
                                <td class="left">Date Of Transaction</td>
                                <td class="right">${date}</td>
                        </tr>
                        <tr>
                                <td class="left">Available Balance</td>
                                <td class="right">$${availableBalance}</td>
                        </tr>
                        <tr>
                                <td class="left">Total Balance</td>
                                <td class="right">$${totalBalance}</td>
                        </tr>
                </table>
                <div class="link">
                        <p>
                                For futher enquiries and dispute, please kindly contact our customer support through the following channels:
                        </p>
                        <p>
                                Email: <a href="Qulocreditunion@gmail.com">customerservice@regiononline.com</a>
                        </p>
                        <p style="padding-top: 50px;">
                                click <a href="#">here</a> to unsubscribe
                        </p>
                </div>
        </body>
        </html>
    `;

  return transactionMessage;
};

const transactionCreditMessageDisplay = ({
  moneySent,
  accountDebited,
  accountCredited,
  accountName,
  description,
  date,
  availableBalance,
  totalBalance,
}) => {
  const transactionMessage = `
          <html lang="en">
          <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Region Bank</title>
                  <link rel="stylesheet" href="href='https://fonts.googleapis.com/css?family=Roboto'">
                  <style>
                          .right{
                                  text-align: right;
                          }
                          .left{
                                  text-align: left;
                          }
                          .link{
                                  width: 500px;
                                  margin: auto;
                                  text-align: center;
                                  /* background-color: yellowgreen; */
                                  
                          }
                          @media(max-width:700px){
                                  .link{
                                          /* background-color: red; */
                                          width: 90%;
                                  }
                          } 
                                  
                  </style>
          
          </head>
          <body style="font-family: 'Roboto'; text-align: center;">
                  <div style="text-align: center;" class="logo">
                          <img src="https://res.cloudinary.com/dwrmw2fsn/image/upload/v1745850584/5_u7eakq.png" alt="Region Bank">
                  </div>
                  <h3>Transaction Details</h3>
                  <table align="center">
                          <tr>
                                  <td class="left">Money Received</td>
                                  <td class="right">$${moneySent}</td>
                          </tr>
                          <tr>
                                  <td class="left">Account debited</td>
                                  <td class="right">${accountDebited}</td>
                          </tr>
                          <tr>
                                  <td class="left">Account Creditted</td>
                                  <td class="right">${accountCredited}</td>
                          </tr>
                          <tr>
                                  <td class="left">Account Name</td>
                                  <td class="right">${accountName}</td>
                          </tr>
                          <tr>
                                  <td class="left">Description</td>
                                  <td class="right">${description}</td>
          
                          </tr>
                          <tr>
                                  <td class="left">Date Of Transaction</td>
                                  <td class="right">${date}</td>
                          </tr>
                          <tr>
                                  <td class="left">Available Balance</td>
                                  <td class="right">$${availableBalance}</td>
                          </tr>
                          <tr>
                                  <td class="left">Total Balance</td>
                                  <td class="right">$${totalBalance}</td>
                          </tr>
                  </table>
                  <div class="link">
                          <p>
                                  For futher enquiries and dispute, please kindly contact our customer support through the following channels:
                          </p>
                          <p>
                                  Email: <a href="Qulocreditunion@gmail.com">customerservice@regiononline.com</a>
                          </p>
                          <p style="padding-top: 50px;">
                                  click <a href="#">here</a> to unsubscribe
                          </p>
                  </div>
          </body>
          </html>
      `;

  return transactionMessage;
};

module.exports = {
  OtpMessageDisplay,
  transactionMessageDisplay,
  transactionCreditMessageDisplay,
  welcomeMessage,
};
