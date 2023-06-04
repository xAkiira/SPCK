// class Money
export default class Money {
    id
    name
    amount
    date
    createdAt
    createdBy
    updatedAt
    updatedBy
    status
    typeof

    constructor (name, amount, date, status, type) {
        id = getAutoId();
        this.name = name;
        this.amount = amount;
        this.date = date;
        this.status = status;
        this.type = type;
        this.createdAt = Date.now();
        this.createdBy = getCurrentUser();
    }

    getAutoId()
}