

export const bankdemodata = [
    {
        id: 1,
        bankUrlName: "akbank",
        bankName: "Akbank",
        logoUrl: require("./assets/images/logo500/akbank.png").default,
        loans: [{
            id: 1,
            loanName: "İhtiyaç Kredisi",
            maxTerm: 36,
            minAmount: 200,
            maxAmunt: 90000,
            rate: 1.65,
            terms: [
                { label: "3", value: 3 },
                { label: "6", value: 6 },
                { label: "9", value: 9 },
                { label: "12", value: 12 },
                { label: "18", value: 18 },
                { label: "24", value: 24 },
                { label: "36", value: 36 }
            ]
        },
        {
            id: 2,
            loanName: "Konut Kredisi",
            maxTerm: 72,
            minAmount: 200,
            maxAmunt: 100000,
            rate: 1.20,
            terms: [
                { label: "3", value: 3 },
                { label: "6", value: 6 },
                { label: "9", value: 9 },
                { label: "12", value: 12 },
                { label: "18", value: 18 },
                { label: "24", value: 24 },
                { label: "36", value: 36 }
            ]
        }, {
            id: 3,
            loanName: "Taşıt Kredisi",
            maxTerm: 120,
            minAmount: 200,
            maxAmunt: 100000,
            rate: 1.10,
            terms: [
                { label: "3", value: 3 },
                { label: "6", value: 6 },
                { label: "9", value: 9 },
                { label: "12", value: 12 },
                { label: "18", value: 18 },
                { label: "24", value: 24 },
                { label: "36", value: 36 }
            ]
        },
        ]
    },
    {
        id: 2,
        bankUrlName: "denizbank",
        bankName: "DenizBank",
        logoUrl: require("./assets/images/logo500/denizbank.png").default,
        loans: [{
            id: 1,
            loanName: "İhtiyaç Kredisi",
            maxTerm: 36,
            minAmount: 200,
            maxAmunt: 90000,
            rate: 1.45, 
            terms: [
                { label: "3", value: 3 },
                { label: "6", value: 6 },
                { label: "9", value: 9 },
                { label: "12", value: 12 },
                { label: "18", value: 18 },
                { label: "24", value: 24 },
                { label: "36", value: 36 }
            ]
        }, {
            id: 2,
            loanName: "Konut Kredisi",
            maxTerm: 72,
            minAmount: 200,
            maxAmunt: 100000,
            rate: 1.20,
            terms: [
                { label: "3", value: 3 },
                { label: "6", value: 6 },
                { label: "9", value: 9 },
                { label: "12", value: 12 },
                { label: "18", value: 18 },
                { label: "24", value: 24 },
                { label: "36", value: 36 }
            ]
        }, {
            id: 3,
            loanName: "Taşıt Kredisi",
            maxTerm: 120,
            minAmount: 200,
            maxAmunt: 100000,
            rate: 1.10,
            terms: [
                { label: "3", value: 3 },
                { label: "6", value: 6 },
                { label: "9", value: 9 },
                { label: "12", value: 12 },
                { label: "18", value: 18 },
                { label: "24", value: 24 },
                { label: "36", value: 36 }
            ]
        }]
    },
]
export default bankdemodata

