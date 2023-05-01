class Wager {
    constructor() {
        this.text = '';
        this.status = 'Open';
        this.duration = 0;
    }

    changeStatus() {
        this.status = 'Closed';
    }

    decreaseDuration() {
        this.duration--;
    }
}