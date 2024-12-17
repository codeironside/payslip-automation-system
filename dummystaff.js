const dummyStaff = [
    {
        name: "CYRIL OBI NGU",
        ippsNumber: "45678",
        grade: "GL13_CONTISS",
        step: "5",
        gender: "MALE",
        state: "FCT (ABUJA)",
        earnings: [
            { description: "CONTIIS CON Salary", amount: 323611.17 },
            { description: "Occupational Hazard Others", amount: 38000.0 },
        ],
        deductions: [
            { description: "Union Dues", amount: 5871.22 },
            { description: "NHF", amount: 7340.88 },
            { description: "Pension", amount: 23448.89 },
            { description: "NMC Normal Loan", amount: 30416.67 },
            { description: "NMC Savings", amount: 20000.0 },
        ],
        netEarnings: 201433.89,
        bankDetails: {
            accountNumber: "0016746653",
            bankName: "Access Bank Nigeria Plc",
            pensionPin: "1000247744127",
        },
        email: "cyril.ngu@example.com",
    },
    {
        name: "GRACE EMMANUEL",
        ippsNumber: "45901",
        grade: "GL10_CONTISS",
        step: "4",
        gender: "FEMALE",
        state: "LAGOS",
        earnings: [
            { description: "CONTIIS CON Salary", amount: 290000.0 },
            { description: "Transport Allowance", amount: 25000.0 },
        ],
        deductions: [
            { description: "Union Dues", amount: 5000.0 },
            { description: "NHF", amount: 7000.0 },
            { description: "Pension", amount: 22000.0 },
            { description: "Loan Repayment", amount: 30000.0 },
        ],
        netEarnings: 195000.0,
        bankDetails: {
            accountNumber: "0023456789",
            bankName: "GTBank Plc",
            pensionPin: "100023458901",
        },
        email: "grace.emmanuel@example.com",
    },
    {
        name: "SHAIBU ISRAEL",
        ippsNumber: "46123",
        grade: "GL12_CONTISS",
        step: "3",
        gender: "MALE",
        state: "ENUGU",
        earnings: [
            { description: "CONTIIS CON Salary", amount: 305000.0 },
            { description: "Housing Allowance", amount: 28000.0 },
        ],
        deductions: [
            { description: "Union Dues", amount: 5500.0 },
            { description: "NHF", amount: 7200.0 },
            { description: "Pension", amount: 22500.0 },
            { description: "Insurance Deduction", amount: 12000.0 },
        ],
        netEarnings: 249800.0,
        bankDetails: {
            accountNumber: "0034567890",
            bankName: "UBA Plc",
            pensionPin: "100032145612",
        },
        email: "shabuisrael1@gmail.com",
    },
    {
        name: "AISHA YUSUF",
        ippsNumber: "46890",
        grade: "GL09_CONTISS",
        step: "2",
        gender: "FEMALE",
        state: "KANO",
        earnings: [
            { description: "CONTIIS CON Salary", amount: 270000.0 },
            { description: "Hazard Allowance", amount: 15000.0 },
        ],
        deductions: [
            { description: "Union Dues", amount: 4700.0 },
            { description: "NHF", amount: 6800.0 },
            { description: "Pension", amount: 21000.0 },
        ],
        netEarnings: 238500.0,
        bankDetails: {
            accountNumber: "0045678901",
            bankName: "Zenith Bank Plc",
            pensionPin: "100045678901",
        },
        email: "aisha.yusuf@example.com",
    },
    {
        name: "EMMA SHAIBU",
        ippsNumber: "47012",
        grade: "GL14_CONTISS",
        step: "6",
        gender: "MALE",
        state: "OYO",
        earnings: [
            { description: "CONTIIS CON Salary", amount: 350000.0 },
            { description: "Travel Allowance", amount: 30000.0 },
        ],
        deductions: [
            { description: "Union Dues", amount: 6000.0 },
            { description: "NHF", amount: 7500.0 },
            { description: "Pension", amount: 24000.0 },
            { description: "Loan Deduction", amount: 40000.0 },
        ],
        netEarnings: 246500.0,
        bankDetails: {
            accountNumber: "0056789012",
            bankName: "First Bank Nigeria Plc",
            pensionPin: "100056789012",
        },
        email: "emmashaibu1@gmail.com",
    },
    {
        name: "MARY OLUCHI",
        ippsNumber: "47234",
        grade: "GL08_CONTISS",
        step: "1",
        gender: "FEMALE",
        state: "ANAMBRA",
        earnings: [
            { description: "CONTIIS CON Salary", amount: 260000.0 },
            { description: "Meal Allowance", amount: 20000.0 },
        ],
        deductions: [
            { description: "Union Dues", amount: 4000.0 },
            { description: "NHF", amount: 6400.0 },
            { description: "Pension", amount: 20500.0 },
        ],
        netEarnings: 248100.0,
        bankDetails: {
            accountNumber: "0067890123",
            bankName: "Ecobank Nigeria Plc",
            pensionPin: "100067890123",
        },
        email: "mary.oluchi@example.com",
    },
    {
        name: "ANTHONY TREASURE",
        ippsNumber: "47890",
        grade: "GL11_CONTISS",
        step: "4",
        gender: "MALE",
        state: "RIVERS",
        earnings: [
            { description: "CONTIIS CON Salary", amount: 285000.0 },
            { description: "Transport Allowance", amount: 25000.0 },
        ],
        deductions: [
            { description: "Union Dues", amount: 5200.0 },
            { description: "NHF", amount: 7100.0 },
            { description: "Pension", amount: 22000.0 },
        ],
        netEarnings: 248700.0,
        bankDetails: {
            accountNumber: "0078901234",
            bankName: "Fidelity Bank Plc",
            pensionPin: "100078901234",
        },
        email: "anthonytreasure01@gmail.com",
    },
    {
        name: "HALIMA BELLO",
        ippsNumber: "48021",
        grade: "GL10_CONTISS",
        step: "3",
        gender: "FEMALE",
        state: "KADUNA",
        earnings: [
            { description: "CONTIIS CON Salary", amount: 275000.0 },
            { description: "Risk Allowance", amount: 18000.0 },
        ],
        deductions: [
            { description: "Union Dues", amount: 4800.0 },
            { description: "NHF", amount: 6700.0 },
            { description: "Pension", amount: 21500.0 },
        ],
        netEarnings: 261000.0,
        bankDetails: {
            accountNumber: "0089012345",
            bankName: "Stanbic IBTC Bank Plc",
            pensionPin: "100089012345",
        },
        email: "halima.bello@example.com",
    },
    {
        name: "ABDULLAHI SANI",
        ippsNumber: "48543",
        grade: "GL15_CONTISS",
        step: "7",
        gender: "MALE",
        state: "JIGAWA",
        earnings: [
            { description: "CONTIIS CON Salary", amount: 370000.0 },
            { description: "Transport Allowance", amount: 35000.0 },
        ],
        deductions: [
            { description: "Union Dues", amount: 6500.0 },
            { description: "NHF", amount: 8000.0 },
            { description: "Pension", amount: 25000.0 },
        ],
        netEarnings: 270500.0,
        bankDetails: {
            accountNumber: "0090123456",
            bankName: "Union Bank Nigeria Plc",
            pensionPin: "100090123456",
        },
        email: "abdullahi.sani@example.com",
    },
];


module.exports = dummyStaff;
