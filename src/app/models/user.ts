export class User {
    businessName: String;
    email: String;
    userTypeId: Number;
}

// User type enum
export class UserType {
    types = [
        { id: 1, name: 'cooperator' },
        { id: 2, name: 'vendor' }
    ]
}

// export class User {
//     firstName: String;
//     isActive: { type: Boolean };
//     dateCreated: { type: Date };
//     email: String;
//     phoneNo: String;
//     cooperId: String;
//     staffId: String;
//     cooperativeId: String;
//     token: String;
//     gottoKnowBy: String;
//     userTypeId: String;
//     transPin: String;
//     parentId: String;
//     status: String;
//     profilePixURL: String;
//     rating: String;
//     spendingCap: Number;
//     resetPasswordToken: String;
//     resetPasswordExpires: { type: Date };
//     userMode: String;
//     accountNumber: String;
//     accountName: String;
//     bankId: String;
//     bank: String;
// }
