

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
                { text: "3", value: 3 },
                { text: "6", value: 6 },
                { text: "9", value: 9 },
                { text: "12", value: 12 },
                { text: "18", value: 18 },
                { text: "24", value: 24 },
                { text: "36", value: 36 }
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
                { text: "3", value: 3 },
                { text: "6", value: 6 },
                { text: "9", value: 9 },
                { text: "12", value: 12 },
                { text: "18", value: 18 },
                { text: "24", value: 24 },
                { text: "36", value: 36 }
            ]
        }, {
            id: 3,
            loanName: "Taşıt Kredisi",
            maxTerm: 120,
            minAmount: 200,
            maxAmunt: 100000,
            rate: 1.10,
            terms: [
                { text: "3", value: 3 },
                { text: "6", value: 6 },
                { text: "9", value: 9 },
                { text: "12", value: 12 },
                { text: "18", value: 18 },
                { text: "24", value: 24 },
                { text: "36", value: 36 }
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
                { text: "3", value: 3 },
                { text: "6", value: 6 },
                { text: "9", value: 9 },
                { text: "12", value: 12 },
                { text: "18", value: 18 },
                { text: "24", value: 24 },
                { text: "36", value: 36 }
            ]
        }, {
            id: 2,
            loanName: "Konut Kredisi",
            maxTerm: 72,
            minAmount: 200,
            maxAmunt: 100000,
            rate: 1.20,
            terms: [
                { text: "3", value: 3 },
                { text: "6", value: 6 },
                { text: "9", value: 9 },
                { text: "12", value: 12 },
                { text: "18", value: 18 },
                { text: "24", value: 24 },
                { text: "36", value: 36 }
            ]
        }, {
            id: 3,
            loanName: "Taşıt Kredisi",
            maxTerm: 120,
            minAmount: 200,
            maxAmunt: 100000,
            rate: 1.10,
            terms: [
                { text: "3", value: 3 },
                { text: "6", value: 6 },
                { text: "9", value: 9 },
                { text: "12", value: 12 },
                { text: "18", value: 18 },
                { text: "24", value: 24 },
                { text: "36", value: 36 }
            ]
        }]
    },
]
export default bankdemodata

