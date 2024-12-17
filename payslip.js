const fs = require("fs");
const nodemailer = require("nodemailer");
const dummyStaff = require("./dummystaff");
const PDFDocument = require("pdfkit");
// const sendPayslipEmails = async () => {
//     try {
//         console.log("Starting payslip email job...");

//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.email,
//                 pass: process.env.email_pass,
//             },
//         });

//         // Send email to each staff
//         for (const staff of dummyStaff) {
//             // Simulating a PDF payslip
//             const payslipPath = `./payslip_${staff.name}.pdf`;
//             fs.writeFileSync(payslipPath, `Payslip for ${staff.name}\nNet Salary: ₦${staff.netSalary}`);

//             // Email options
//             const mailOptions = {
//                 from: '"Company HR" <your-email@gmail.com>',
//                 to: staff.email,
//                 subject: `Monthly Payslip for ${staff.name}`,
//                 text: `Dear ${staff.name},\nPlease find attached your monthly payslip.\nNet Salary: ₦${staff.netSalary}`,
//                 attachments: [
//                     {
//                         filename: `payslip_${staff.name}.pdf`,
//                         path: payslipPath,
//                     },
//                 ],
//             };

//             // Send email
//             await transporter.sendMail(mailOptions);
//             console.log(`Payslip sent to ${staff.name} at ${staff.email}`);
//         }

//         console.log("All payslips sent successfully!");
//     } catch (error) {
//         console.error("Error sending payslips:", error);
//     }
// };

const sendPayslipEmails = async () => {
  try {
    console.log("Starting payslip email job...");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.email,
        pass: process.env.email_pass,
      },
    });

    for (const staff of dummyStaff) {
      const payslipPath = `./payslip_${staff.name.replace(" ", "_")}.pdf`;

      // Generate the PDF payslip
      generatePayslipPDF(staff, payslipPath);
      const currentDate = new Date();
      const month = currentDate.toLocaleString("default", { month: "long" });
      const year = currentDate.getFullYear();
      // HTML email template
      const mailOptions = {
        from: '"HR Department" <your-email@gmail.com>',
        to: staff.email,
        subject: `Monthly Payslip - ${staff.name}`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payslip Notification</title>
  <style>
    /* General Reset */
    body {
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
      background-color: #F0F8FF; /* Very light blue background for a calm feel */
      color: #333;
    }

    /* Container Styles */
    .payslip-container {
      width: 90%;
      max-width: 600px;
      margin: 50px auto;
      background-color: #FFFFFF;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    /* Header Section */
    .payslip-header {
      background-color: #4CA1A3; /* Soft teal for a soothing look */
      color: #FFFFFF;
      text-align: center;
      padding: 20px;
      font-size: 26px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    /* Body Section */
    .payslip-body {
      padding: 30px 25px;
      text-align: left;
      line-height: 1.7;
      background-color: #F9F9F9; /* Light gray background for the body */
    }

    .payslip-body h3 {
      color: #3E9B5E; /* Soft green to indicate importance */
      font-size: 24px;
      margin-top: 20px;
      font-weight: 600;
    }

    .payslip-body p {
      margin: 12px 0;
      font-size: 16px;
      color: #555; /* Darker text for readability */
    }

    /* Footer Section */
    .payslip-footer {
      background-color: #2C3E50; /* Charcoal gray for footer */
      color: #ECF0F1; /* Light gray text for readability */
      text-align: center;
      font-size: 14px;
      padding: 18px;
      letter-spacing: 0.5px;
    }

    .payslip-footer b {
      color: #F39C12; /* Golden color for emphasis */
    }

    /* Links for interactive content */
    .payslip-footer a {
      color: #3498DB; /* Blue link color */
      text-decoration: none;
    }

    .payslip-footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <!-- Payslip Container -->
  <div class="payslip-container">
    <!-- Header -->
    <div class="payslip-header" id="header-month">
      Monthly Payslip for <span id="currentMonthYear"></span>
    </div>

    <!-- Body -->
    <div class="payslip-body">
      <p>Dear <strong>${staff.name}</strong>,</p>
      <p>Your monthly payslip for <span id="inlineMonthYear"></span> is ready. Please find it attached.</p>
      <h3>Net Salary: ₦${staff.netEarnings.toLocaleString()}</h3>
      <p>If you notice any discrepancies, please contact the <strong>HR Department</strong> immediately.</p>
    </div>

    <!-- Footer -->
    <div class="payslip-footer">
      This is an automated email. Please do not reply.<br>
      <b>National Mathematical Centre</b><br>
      <a href="#">View Payslip Online</a> | <a href="#">Contact Support</a>
    </div>
  </div>

  <!-- JavaScript for Dynamic Month and Year -->
  <script>
    const currentDate = new Date();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    document.getElementById("currentMonthYear").textContent = ${ month } ${ year };
    document.getElementById("inlineMonthYear").textContent = ${ month } ${ year };
  </script>
</body>
</html>


                `,
        attachments: [
          {
            filename: `Payslip_${staff.name}.pdf`,
            path: payslipPath,
          },
        ],
      };

      await transporter.sendMail(mailOptions);
      console.log(`Payslip sent to ${staff.name} at ${staff.email}`);
    }

    console.log("All payslips sent successfully!");
  } catch (error) {
    console.error("Error sending payslips:", error);
  }
};

const generatePayslipPDF = (staff, filePath) => {
  const doc = new PDFDocument({ margin: 50 });
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  // Get current date for month, year, and timestamp
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const timestamp = currentDate.toLocaleString();

  // Title and Header
  doc
    .font("Times-Roman")
    .fontSize(18)
    .fillColor("#007BFF")
    .text(`Monthly Payslip - ${month} ${year}`, { align: "center" });
  doc.moveDown();
  doc.fontSize(12).fillColor("black").text(`Employee Name: ${staff.name}`);
  doc.text(`IPPS Number: ${staff.ippsNumber}`);
  doc.text(`Grade: ${staff.grade} | Step: ${staff.step}`);
  doc.text(`Gender: ${staff.gender} | State: ${staff.state}`);
  doc.moveDown();

  // Earnings Table
  doc
    .fontSize(14)
    .fillColor("#333")
    .text("Earnings Breakdown", { underline: true });
  generateTable(doc, staff.earnings, 50);

  // Deductions Table
  doc.moveDown();
  doc.text("Deductions Breakdown", { underline: true });
  generateTable(doc, staff.deductions, 50);

  // Summary
  doc.moveDown();
  doc
    .fontSize(12)
    .text(`Net Earnings: ₦${staff.netEarnings.toLocaleString()}`, {
      bold: true,
    });
  doc.text(`Bank Name: ${staff.bankDetails.bankName}`);
  doc.text(`Account Number: ${staff.bankDetails.accountNumber}`);
  doc.text(`Pension PIN: ${staff.bankDetails.pensionPin}`);

  // Footer with timestamp
  doc.moveTo(50, 700).lineTo(550, 700).strokeColor("#ddd").stroke();
  doc
    .fontSize(10)
    .fillColor("#777")
    .text(`Generated on: ${timestamp}`, 50, 710, {
      align: "center",
      width: 500,
    });

  doc.end();
};

// Helper function to generate tables
const generateTable = (doc, rows, startX) => {
  const startY = doc.y + 10;

  // Table Header
  doc
    .fontSize(12)
    .font("Times-Bold")
    .text("Description", startX, startY)
    .text("Amount (₦)", startX + 350, startY, { align: "right" });

  doc.moveDown();

  // Table Rows
  let yPosition = startY + 20;
  rows.forEach((row) => {
    doc
      .font("Times-Roman")
      .fontSize(10)
      .text(row.description, startX, yPosition)
      .text(row.amount.toLocaleString(), startX + 350, yPosition, {
        align: "right",
      });
    yPosition += 20;
  });
};
module.exports = {
  sendPayslipEmails,
};
