const StaffSchema = new mongoose.Schema({
    name: String,
    ippsNumber: String,
    grade: String,
    step: String,
    gender: String,
    state: String,
    earnings: [{ description: String, amount: Number }],
    deductions: [{ description: String, amount: Number }],
    netEarnings: Number,
    bankDetails: { accountNumber: String, bankName: String, pensionPin: String },
    email: String,
});


